// Imports
import { mockTransactions } from '@/mocks/mockTransactions'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// Store
export const useTransactionStore = defineStore('transactions', () => {
  const transactions = ref(mockTransactions)

  return {
    transactions,
  }
})
