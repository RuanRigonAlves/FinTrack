import { mockCategoryGroups } from '@/mocks/mockCategoryGroups'
import { defineStore } from 'pinia'

export const useCategoryGroupStore = defineStore('categoryGroup', {
  state: () => ({
    categoryGroups: mockCategoryGroups,
  }),
})
