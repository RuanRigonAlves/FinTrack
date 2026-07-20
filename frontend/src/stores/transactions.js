// Imports
import { mockTransactions } from '@/mocks/mockTransactions'
import { transactionService } from '@/services/transactionService'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// Store
export const useTransactionStore = defineStore(
  'transactions',
  () => {
    const transactions = ref([])

    const loading = ref(false)

    const error = ref(null)

    async function fetchTransactions() {
      loading.value = true

      try {
        transactions.value = await transactionService.getAll()
      } catch (err) {
        error.value = err
      } finally {
        loading.value = false
      }
    }

    async function addTransaction(transaction) {
      const newTransaction = await transactionService.create(transaction)

      transaction.value.push(newTransaction)
    }

    async function updateTransaction(id, transaction) {
      const updated = await transactionService.update(id, transaction)

      const index = transactions.value.findIndex((t) => t.id === id)

      if (index !== -1) {
        transaction.value[index] = updated
      }
    }

    async function deleteTransaction(id) {
      await transactionService.delete(id)

      transactions.value = transactions.value.filter((t) => t.id !== id)
    }

    return {
      transactions,
      loading,
      error,

      fetchTransactions,
      addTransaction,
      updateTransaction,
      deleteTransaction,
    }
  },

  {
    persist: true,
  },
)
