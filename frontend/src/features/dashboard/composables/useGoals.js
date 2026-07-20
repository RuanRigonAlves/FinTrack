// Imports
import { useGoalStore } from '@/stores/goals'
import { formatDate } from '@/utils/formatDate'
import { computed } from 'vue'

export function useGoals() {
  // Store
  const store = useGoalStore()

  // Goals
  const goals = computed(() => {
    return store.goals.map((goal) => {
      return {
        ...goal,
        deadlineFormatted: formatDate(goal.deadline, 'mes/ano'),
        title: goal.name ?? 'Sem Titulo',
        percentage: Number(Number((goal.currentAmount / goal.targetAmount) * 100).toFixed(1)),
      }
    })
  })

  const sortedGoals = [...goals.value].sort((a, b) => b.percentage - a.percentage)

  return {
    goals,
    sortedGoals,
  }
}
