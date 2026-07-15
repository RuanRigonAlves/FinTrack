// Imports
import { mockTransactions } from '@/mocks/mockTransactions'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// Store
export const useTransactionStore = defineStore(
  'transactions',
  () => {
    const transactions = ref(mockTransactions)

    const addTransaction = (transaction) => {
      transactions.value.push({
        id: crypto.randomUUID(),
        ...transaction,
      })
    }

    return {
      transactions,
      addTransaction,
    }
  },
  {
    persist: true,
  },
)
