// Imports
import { mockCategories } from '@/mocks/mockCategories'
import { categoriesService } from '@/services/categoriesService'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// Store
export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchCategories() {
    loading.value = true

    try {
      categories.value = await categoriesService.getAll()
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return {
    categories,
    loading,
    error,

    fetchCategories,
  }
})
