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
    return transactionStore.transactions.map((transaction) => ({
      ...transaction,

      formattedDayMonth: formatDate(transaction.date, 'dia/mes'),
      monthYear: formatDateMonthYear(transaction.date),

      amount: Number(transaction.amount),

      color: transaction.type === 'expense' ? 'text-red' : 'text-green',

      signal: transaction.type === 'expense' ? '-' : '+',

      icon: transaction.category?.icon ?? 'mdi-circle-outline',

      title: transaction.category?.name ?? 'Sem categoria',

      groupName: transaction.category?.group?.name,

      groupIcon: transaction.category?.group?.icon,

      groupColor: transaction.category?.group?.color,
    }))
  })

  // Recurring Transactions
  const recurringTransactions = computed(() => {
    return transactions.value.filter((transaction) => transaction.is_recurring)
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
