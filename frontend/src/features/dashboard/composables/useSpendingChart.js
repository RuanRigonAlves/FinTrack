// Imports
import { computed, ref, watch } from 'vue'
import { useDashboardTransactions } from './useDashboardTransactions'
import { getPreviousMonthDate } from '@/utils/getPreviousMonthDate'

export function useSpendingChart() {
  const { monthOfTransactions, getMonthlyExpenses } = useDashboardTransactions()

  // Data selecionada
  const selectedDate = ref(null)

  // Define automaticamente o primeiro mês disponível
  watch(
    monthOfTransactions,
    (months) => {
      if (!selectedDate.value && months.length) {
        selectedDate.value = months[0].date
      }
    },
    { immediate: true },
  )

  // Transações do mês selecionado
  const monthTransactions = computed(() => {
    if (!selectedDate.value) return []

    return [...getMonthlyExpenses(selectedDate.value)].sort(
      (a, b) => new Date(a.date) - new Date(b.date),
    )
  })

  // Transações do mês anterior
  const previousMonthTransactions = computed(() => {
    if (!selectedDate.value) return []

    const previous = new Date(selectedDate.value)

    previous.setMonth(previous.getMonth() - 1)

    return getMonthlyExpenses(previous)
  })

  // Quantidade de dias do mês
  const daysInMonth = computed(() => {
    if (!selectedDate.value) return 31

    const date = new Date(selectedDate.value)

    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  })

  // Monta os dados acumulados do gráfico
  const buildDataset = (transactions, totalDays) => {
    const values = Array(totalDays).fill(0)

    let accumulated = 0

    const orderedTransactions = [...transactions].sort(
      (a, b) => new Date(a.date) - new Date(b.date),
    )

    orderedTransactions.forEach((transaction) => {
      const day = new Date(transaction.date).getDate()

      accumulated += transaction.amount

      values[day - 1] = accumulated
    })

    // Preenche os dias sem movimentação
    for (let i = 1; i < values.length; i++) {
      if (values[i] === 0) {
        values[i] = values[i - 1]
      }
    }

    return values
  }

  // Dados do gráfico
  const chartData = computed(() => ({
    labels: Array.from({ length: daysInMonth.value }, (_, i) => i + 1),

    datasets: [
      {
        label: 'Previous Month',
        data: buildDataset(previousMonthTransactions.value, daysInMonth.value),
        borderColor: '#BDBDBD',
        tension: 0.35,
        fill: false,
      },
      {
        label: 'Current Month',
        data: buildDataset(monthTransactions.value, daysInMonth.value),
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

    interaction: {
      intersect: false,
      mode: 'index',
    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  // Total gasto no mês
  const monthTotal = computed(() => {
    return chartData.value.datasets[1].data.at(-1) ?? 0
  })

  return {
    selectedDate,
    monthTransactions,
    previousMonthTransactions,
    chartData,
    chartOptions,
    monthTotal,
  }
}
