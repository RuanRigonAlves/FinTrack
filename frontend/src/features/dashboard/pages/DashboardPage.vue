<template>
  <div class="h-100">
    <div v-if="transactionStore.loading" class="w-100 h-100 d-flex justify-center align-center">
      <v-progress-circular indeterminate :size="128"> </v-progress-circular>
    </div>

    <DashBoardGrid v-else> </DashBoardGrid>
  </div>
</template>

<script setup>
// Imports
import DashBoardGrid from '@/features/dashboard/components/DashBoardGrid.vue'
import { useTransactionStore } from '@/stores/transactions.js'
import { onMounted } from 'vue'

const transactionStore = useTransactionStore()

onMounted(async () => {
  await transactionStore.fetchTransactions()
})
</script>
