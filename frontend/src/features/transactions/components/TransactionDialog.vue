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
