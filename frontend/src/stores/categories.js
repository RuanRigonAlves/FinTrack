// Imports
import { mockCategories } from '@/mocks/mockCategories'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// Store
export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref(mockCategories)

  return {
    categories,
  }
})
