import { useCategoryGroupStore } from '@/stores/categoryGroup'
import { computed } from 'vue'

export function useCategoryGroups() {
  const store = useCategoryGroupStore()

  const categoryGroups = computed(() => store.categoryGroups)

  const getCategoryGroup = (id) => {
    return store.categoryGroups.find((group) => group.id === id)
  }

  return {
    categoryGroups,
    getCategoryGroup,
  }
}
