// Imports
import { mockBudgets } from '@/mocks/mockBudgets'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// Store
export const useBudgetStore = defineStore('budget', () => {
  const budgets = ref(mockBudgets)

  return {
    budgets,
  }
})
