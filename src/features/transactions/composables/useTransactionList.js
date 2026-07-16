import { useCategoriesStore } from '@/stores/categories'
import { useTransactionStore } from '@/stores/transactions'
import { computed } from 'vue'
import { formatDate, formatDateMonthYear } from '@/utils/formatDate'

export function useTransactionList() {
  const transactionStore = useTransactionStore()
  const categoryStore = useCategoriesStore()

  const transactions = computed(() => {
    return transactionStore.transactions
      .map((transaction) => {
        // Transaction Category
        const category = categoryStore.categories.find((category) => {
          return category.id === transaction.categoryId
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
        }
      })
      .sort((a, b) => b.date.split('-')[0] - a.date.split('-')[0])
  })

  return {
    transactions,
  }
}
