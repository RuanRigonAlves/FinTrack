// Import
import { useCategoriesStore } from '@/stores/categories'
import { useTransactionStore } from '@/stores/transactions'

import { formatDate, formatDateMonthYear } from '@/utils/formatDate'
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
        monthYear: formatDateMonthYear(transaction.date),
        color: transaction.type === 'expense' ? 'text-red' : 'text-green',
        signal: transaction.type === 'expense' ? '-' : '+',
        icon: transaction.icon ?? 'mdi-circle-outline',
        title: transaction.description ?? 'Sem Titulo',
        categoryName: category?.name,
        groupId: category?.groupId,
      }
    })
  })

  // Recurring Transactions
  const recurringTransactions = computed(() => {
    return transactions.value.filter((transaction) => transaction.isRecuring)
  })

  // Largest expenses
  const largestExpenses = computed(() => {
    const largestExpenses = transactions.value.filter(
      (transaction) => transaction.type === 'expense' && !transaction.isRecuring,
    )

    // Ordenar por "amount"
    largestExpenses.sort((a, b) => b.amount - a.amount)

    return largestExpenses
  })

  return {
    transactions,
    recurringTransactions,
    largestExpenses,
  }
}
