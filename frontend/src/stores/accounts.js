// Imports
import { mockAccounts } from '@/mocks/mockAccounts'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// Store
export const useAccountsStore = defineStore('accounts', () => {
  const accounts = ref(mockAccounts)

  return {
    accounts,
  }
})
