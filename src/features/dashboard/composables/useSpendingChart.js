// Imports
import { computed, ref } from 'vue'
import { useTransactions } from './useTransactions'

export function useSpendingChart(selectedDate) {
  const { monthOfTransactions, getExpensesByDate } = useTransactions()

  const currentDate = selectedDate ?? ref(monthOfTransactions.value[0].date)

  const monthTransactions = computed(() => {
    // const transactions = getExpensesByDate('24-06/2026')
    const transactions = getExpensesByDate(currentDate.value)

    return transactions
  })

  return {
    monthTransactions,
  }
}
