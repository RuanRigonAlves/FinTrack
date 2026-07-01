// Import
import { useCategoriesStore } from '@/stores/categories'
import { useTransactionStore } from '@/stores/transactions'

import { formatDate } from '@/utils/formatDate'
import { computed } from 'vue'

export function useTransactions() {
  // Store
  const transactionStore = useTransactionStore()
  const categoryStore = useCategoriesStore()

  // Transactions
  const transactions = computed(() => {
    return transactionStore.transactions.map((transaction) => {
      // Transaction Category
      const category = categoryStore.categories.find((category) => {
        return category.id === transaction.categoryId
      })

      // Transaction
      return {
        ...transaction,
        formattedDayMonth: formatDate(transaction.date, 'dia/mes'),
        color: transaction.type === 'expense' ? 'text-red' : 'text-green',
        signal: transaction.type === 'expense' ? '-' : '+',
        icon: transaction.icon ?? 'mdi-circle-outline',
        title: transaction.description ?? 'Sem Titulo',
        categoryName: category?.name,
        categoryGroup: category?.group,
      }
    })
  })

  // Recurring Transactions
  const recurringTransactions = computed(() => {
    return transactions.value.filter((transaction) => transaction.isRecuring)
  })

  return {
    transactions,
    recurringTransactions,
  }
}
