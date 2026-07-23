import { useCategoriesStore } from '@/stores/categories'
import { computed, onMounted } from 'vue'

export function useCategories() {
  const store = useCategoriesStore()

  onMounted(async () => {
    if (!store.categories.length) {
      await store.fetchCategories()
    }
  })

  const categories = computed(() => {
    return store.categories
  })

  const expenseCategories = computed(() => {
    return store.categories.filter((category) => category.type === 'expense')
  })

  const incomeCategories = computed(() => {
    return store.categories.filter((category) => category.type === 'income')
  })

  const getCategory = (id) => {
    return store.categories.find((category) => category.id === id)
  }

  return {
    categories,
    expenseCategories,
    incomeCategories,
    getCategory,
  }
}
