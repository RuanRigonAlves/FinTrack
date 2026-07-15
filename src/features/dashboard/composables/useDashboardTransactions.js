// Import
import { useCategoriesStore } from '@/stores/categories'
import { useTransactionStore } from '@/stores/transactions'

import { formatDate, formatDateMonthYear } from '@/utils/formatDate'
import { computed } from 'vue'

export function useDashboardTransactions() {
  // Store
  const transactionStore = useTransactionStore()
  const categoryStore = useCategoriesStore()

  // Transactions
  const transactions = computed(() => {
    return transactionStore.transactions
      .map((transaction) => {
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
          description: transaction.description,
          title: category.name ?? 'Sem Titulo',
          categoryName: category?.name,
          groupId: category?.groupId,
        }
      })
      .sort((a, b) => b.date.split('-')[0] - a.date.split('-')[0])
  })

  // Recurring Transactions
  const recurringTransactions = computed(() => {
    return transactions.value.filter((transaction) => transaction.isRecurring)
  })

  // Largest expenses
  const largestExpenses = computed(() => {
    const largestExpenses = transactions.value.filter(
      (transaction) => transaction.type === 'expense' && !transaction.isRecurring,
    )

    // Ordenar por "amount"
    largestExpenses.sort((a, b) => b.amount - a.amount)

    return largestExpenses
  })

  const getMonthlyExpenses = (monthReference) => {
    const monthYear = formatDateMonthYear(monthReference)

    const monthTransactions = transactions.value.filter((transaction) => {
      return transaction.monthYear === monthYear && transaction.type === 'expense'
    })

    monthTransactions.sort((a, b) => a.date.split('-')[0] - b.date.split('-')[0])

    return monthTransactions
  }

  // Meses que houveram transacoes
  const monthOfTransactions = computed(() => {
    const months = new Map()

    transactions.value
      .filter((transaction) => transaction.type === 'expense')
      .forEach((transaction) => {
        if (!months.has(transaction.monthYear)) {
          months.set(transaction.monthYear, {
            date: transaction.date,
            title: transaction.monthYear,
          })
        }
      })

    return [...months.values()]
  })

  return {
    transactions,
    recurringTransactions,
    largestExpenses,
    getMonthlyExpenses,
    monthOfTransactions,
  }
}
