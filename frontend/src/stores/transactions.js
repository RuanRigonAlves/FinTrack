// Imports
import { mockTransactions } from '@/mocks/mockTransactions'
import { transactionService } from '@/services/transactionService'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { formatDate, formatDateMonthYear } from '@/utils/formatDate'

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
        const transactionsData = await transactionService.getAll()

        transactions.value = transactionsData.map(mapTransactionFromApi)
      } catch (err) {
        error.value = err
      } finally {
        loading.value = false
      }
    }

    async function getTransaction(id) {
      let transaction = transactions.value.find((transaction) => transaction.id == id)

      if (transaction) {
        return transaction
      }

      loading.value = true

      try {
        const transactionData = await transactionService.getById(id)

        const mapped = mapTransactionFromApi(transactionData)

        return mapped
      } catch (err) {
        console.error(err)
        throw err
      } finally {
        loading.value = false
      }
    }

    async function createTransaction(transaction) {
      const payload = mapTransactionToApi(transaction)

      console.log(payload)

      const newTransaction = await transactionService.create(payload)

      return newTransaction
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

    function mapTransactionFromApi(transaction) {
      return {
        id: transaction.id,
        userId: transaction.user_id,
        type: transaction.type,
        amount: Number(transaction.amount),
        description: transaction.description,
        date: transaction.date,
        icon: transaction.icon,

        categoryId: transaction.category_id,
        accountId: transaction.account_id,
        isRecurring: transaction.is_recurring,

        category: transaction.category,

        createdAt: transaction.created_at,
        updatedAt: transaction.updated_at,
        formattedDayMonth: formatDate(transaction.date, 'dia/mes'),
        monthYear: formatDateMonthYear(transaction.date),

        color: transaction.type === 'expense' ? 'text-red' : 'text-green',

        signal: transaction.type === 'expense' ? '-' : '+',

        title: transaction.category?.name ?? 'Sem categoria',

        group: transaction.category?.group,
      }
    }

    function mapTransactionToApi(transaction) {
      return {
        user_id: transaction.userId,
        type: transaction.type,
        amount: transaction.amount,
        description: transaction.description,
        date: transaction.date,
        category_id: transaction.categoryId,
        account_id: transaction.accountId,
        is_recurring: transaction.isRecurring,
      }
    }

    return {
      transactions,
      loading,
      error,

      fetchTransactions,
      createTransaction,
      updateTransaction,
      deleteTransaction,
      getTransaction,
    }
  },

  {
    persist: true,
  },
)
