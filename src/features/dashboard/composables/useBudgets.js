// Imports
import { useBudgetStore } from '@/stores/budgets'
import { useTransactions } from './useTransactions'
import { computed, ref } from 'vue'
import { formatDateMonthYear } from '@/utils/formatDate'
import { useCategoryGroups } from './useCategoryGroups'

export function useBudget() {
  // Store
  const budgetsStore = useBudgetStore()

  // Composables
  const { transactions } = useTransactions()
  const { getCategoryGroup } = useCategoryGroups()

  // Populate Budget
  function populateBudget(budget) {
    const monthYear = formatDateMonthYear(budget.date)

    // Budget Month Transaction
    const monthExpenses = transactions.value.filter((transaction) => {
      return transaction.monthYear === monthYear && transaction.type === 'expense'
    })

    const categoryTotals = []
    let remainingPercentage = 100

    for (const transaction of monthExpenses) {
      const group = getCategoryGroup(transaction.groupId)

      const existingGroup = categoryTotals.find((item) => item.group.id === group.id)

      if (existingGroup) {
        existingGroup.total += transaction.amount
      } else {
        categoryTotals.push({
          group,
          total: transaction.amount,
        })
      }
    }

    categoryTotals.forEach((item) => {
      item.percentage = Number(((item.total / budget.budget) * 100).toFixed(1))
    })

    categoryTotals.forEach((item) => {
      remainingPercentage -= item.percentage
    })

    // Budget
    return {
      ...budget,
      monthYear,
      monthExpenses: monthExpenses,
      categoryTotals,
      remainingPercentage,
    }
  }

  // Budgets
  const budgets = computed(() => {
    return budgetsStore.budgets.map((budget) => ({
      id: budget.id,
      monthYear: formatDateMonthYear(budget.date),
    }))
  })

  // SelectedBudget

  const selectedBudgetId = ref(budgets.value[0]?.id ?? null)

  const selectedBudget = computed(() => {
    const budget = budgetsStore.budgets.find((b) => b.id === selectedBudgetId.value)

    return budget ? populateBudget(budget) : null
  })

  return {
    budgets,
    selectedBudget,
    selectedBudgetId,
  }
}
