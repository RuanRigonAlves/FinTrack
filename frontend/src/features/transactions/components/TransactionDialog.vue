<template>
  <div v-if="categoriesStore.loading" class="w-100 h-100 d-flex justify-center align-center">
    <v-progress-circular indeterminate :size="128"> </v-progress-circular>
  </div>

  <v-dialog
    :model-value="modelValue"
    max-width="700"
    @update:model-value="emit('update:modelValue', $event)"
    v-else
  >
    <v-sheet class="rounded-lg" elevation="1">
      <div class="pa-4">
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

const transactionForm = ref(null)
const categoriesStore = useCategoriesStore()
const dialog = useDialogStore()
const emit = defineEmits(['update:modelValue'])

async function save() {
  const result = await transactionForm.value.submit()

  console.log(result)
}
</script>
