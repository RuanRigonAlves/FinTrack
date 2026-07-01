// Imports
import { mockGoals } from '@/mocks/mockGoals'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// Store
export const useGoalStore = defineStore('goals', () => {
  const goals = ref(mockGoals)

  return {
    goals,
  }
})
