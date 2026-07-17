// Import
import { useCategoriesStore } from '@/stores/categories'
import { useCategoryGroupStore } from '@/stores/categoryGroup'
import { useTransactionStore } from '@/stores/transactions'

import { formatDate, formatDateMonthYear } from '@/utils/formatDate'
import { computed } from 'vue'

export function useTransactions() {
  const transactionStore = useTransactionStore()
  const categoryStore = useCategoriesStore()
  const groupStore = useCategoryGroupStore()

  const transactions = computed(() => {
    return transactionStore.transactions
      .map((transaction) => {
        // Transaction Category
        const category = categoryStore.categories.find((category) => {
          return category.id === transaction.categoryId
        })

        const group = groupStore.categoryGroups.find((group) => {
          return group.id === category?.groupId
        })

        // Transaction
        return {
          ...transaction,
          formattedDayMonth: formatDate(transaction.date, 'dia/mes'),
          monthYear: formatDateMonthYear(transaction.date),
          color: transaction.type === 'expense' ? 'text-red' : 'text-green',
          signal: transaction.type === 'expense' ? '-' : '+',
          icon: transaction.icon ?? 'mdi-circle-outline',
          description: transaction.description,
          title: category.name ?? 'Sem Titulo',
          categoryName: category?.name,
          groupId: category?.groupId,
          groupName: group?.name,
        }
      })
      .sort((a, b) => b.date.split('-')[0] - a.date.split('-')[0])
  })

  const getTransactionById = (id) => {
    return transactions.value.find((transaction) => {
      console.log(id)
      return transaction.id == id
    })
  }

  return {
    getTransactionById,
  }
}
