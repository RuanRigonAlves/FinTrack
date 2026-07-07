// Imports
import { computed, ref } from 'vue'
import { useTransactions } from './useTransactions'
import { getPreviousMonthDate } from '@/utils/getPreviousMonthDate'

export function useSpendingChart() {
  const { monthOfTransactions, getMonthlyExpenses } = useTransactions()

  const selectedDate = ref(monthOfTransactions.value[0]?.date ?? null)

  const monthTransactions = computed(() => {
    if (!selectedDate.value) return []

    const transactions = getMonthlyExpenses(selectedDate.value)

    return transactions
  })

  const previousMonthTransactions = computed(() => {
    if (!selectedDate.value) return []

    const previousDate = getPreviousMonthDate(selectedDate.value)

    return getMonthlyExpenses(previousDate)
  })

  const buildDataset = (transactions) => {
    const values = Array(31).fill(0)

    let accumulated = 0

    transactions.forEach((transaction) => {
      const day = Number(transaction.date.split('-')[0])

      accumulated += transaction.amount

      values[day - 1] = accumulated
    })

    // completa os dias sem movimentacao
    for (let i = 1; i < values.length; i++) {
      if (values[i] === 0) {
        values[i] = values[i - 1]
      }
    }

    return values
  }

  const chartData = computed(() => ({
    labels: Array.from({ length: 31 }, (_, i) => i + 1),

    datasets: [
      {
        label: 'Previous Month',
        data: buildDataset(previousMonthTransactions.value),
        borderColor: '#BDBDBD',
        tension: 0.35,
        fill: false,
      },
      {
        label: 'Current Month',
        data: buildDataset(monthTransactions.value),
        borderColor: '#1976D2',
        tension: 0.35,
        fill: false,
      },
    ],
  }))

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },
  }

  const monthTotal = computed(() => {
    return chartData.value.datasets[1].data.at(-1) ?? 0
  })

  return {
    monthTransactions,
    selectedDate,
    chartOptions,
    chartData,
    monthTotal,
    selectedDate,
  }
}
