<template>
  <v-dialog
    :model-value="modelValue"
    max-width="700"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-sheet class="rounded-lg" elevation="1">
      <div
        v-if="categoriesStore.loading"
        class="d-flex justify-center align-center"
        style="height: 500px"
      >
        <v-progress-circular indeterminate :size="80"> </v-progress-circular>
      </div>

      <div class="pa-4" v-else>
        <v-snackbar v-model="snackbar.show" :timeout="-1" :color="snackbar.color" location="top">
          <div class="d-flex align-center ga-3">
            <v-progress-circular
              v-if="snackbar.loading"
              indeterminate
              size="20"
              width="2"
              color="white"
            />

            <span>{{ snackbar.text }}</span>
          </div>
        </v-snackbar>

        <transaction-form ref="transactionForm"> </transaction-form>

        <div class="d-flex justify-end mt-4 ga-6">
          <v-btn color="red" @click="dialog.closeDialog('transaction')">Return</v-btn>

          <v-btn color="primary" @click="save">Register Transaction</v-btn>
        </div>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup>
import TransactionForm from '../components/TransactionForm.vue'
import { useCategoriesStore } from '@/stores/categories.js'
import { useDialogStore } from '@/stores/dialog'
import { ref } from 'vue'

defineProps({
  modelValue: Boolean,
  transaction: Object,
})

const snackbar = ref({
  show: false,
  loading: false,
  color: 'primary',
  text: '',
})
const saving = ref(false)

const transactionForm = ref(null)
const categoriesStore = useCategoriesStore()
const dialog = useDialogStore()
const emit = defineEmits(['update:modelValue'])

async function save() {
  snackbar.value = {
    show: true,
    loading: true,
    color: 'primary',
    text: 'Saving transaction...',
  }

  try {
    const success = await transactionForm.value.submit()

    if (!success) {
      snackbar.value.show = false
      return
    }

    snackbar.value = {
      show: true,
      loading: false,
      color: 'success',
      text: 'Transaction created successfully!',
    }

    setTimeout(() => {
      snackbar.value.show = false
      dialog.closeDialog('transaction')
    }, 1500)
  } catch (err) {
    snackbar.value = {
      show: true,
      loading: false,
      color: 'error',
      text: err.message ?? 'Unexpected error.',
    }
  }
}
</script>
