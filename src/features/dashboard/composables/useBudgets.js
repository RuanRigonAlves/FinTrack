// Imports
import { useBudgetStore } from '@/stores/budgets'
import { useDashboardTransactions } from './useDashboardTransactions'
import { computed, ref } from 'vue'
import { formatDateMonthYear } from '@/utils/formatDate'
import { useCategoryGroups } from './useCategoryGroups'

export function useBudget() {
  // Store
  const budgetsStore = useBudgetStore()

  // Composables
  const { transactions, getTransactionsByGroup, getMonthlyExpenses } = useDashboardTransactions()
  const { getCategoryGroup } = useCategoryGroups()

  // Populate Budget
  function populateBudget(budget) {
    const monthYear = formatDateMonthYear(budget.date)
    const monthExpenses = getMonthlyExpenses(budget.date)

    const categoryTotals = []
    let remainingPercentage = 100

    for (const transaction of monthExpenses) {
      const group = getCategoryGroup(transaction.groupId)

      const existingGroup = categoryTotals.find((item) => item.group.id === group.id)

      if (existingGroup) {
        existingGroup.total += transaction.amount
        existingGroup.transactions.push(transaction)
      } else {
        categoryTotals.push({
          group,
          total: transaction.amount,
          transactions: [transaction],
        })
      }
    }

    categoryTotals.forEach((item) => {
      item.percentage = Number(((item.total / budget.budget) * 100).toFixed(1))
    })

    categoryTotals.forEach((item) => {
      remainingPercentage -= item.percentage
    })

    remainingPercentage = Number(remainingPercentage.toFixed(1))
    if (remainingPercentage <= 0) remainingPercentage = 0

    categoryTotals.sort((categoryA, categoryB) => categoryB.percentage - categoryA.percentage)

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
