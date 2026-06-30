// Import
import { useTransactionStore } from '@/stores/transactions'
import { formatDate } from '@/utils/formatDate'
import { computed } from 'vue'

export function useTransactions() {
  // Store
  const store = useTransactionStore()

  // Transactions
  const transactions = computed(() => {
    return store.transactions.map((transaction) => ({
      ...transaction,
      formattedDayMonth: formatDate(transaction.date, 'dia/mes'),
      color: transaction.type === 'expense' ? 'text-red' : 'text-green',
      signal: transaction.type === 'expense' ? '-' : '+',
      icon: transaction.icon ?? 'mdi-circle-outline',
    }))
  })

  // Recurring Transactions
  const recurringTransactions = computed(() => {
    console.log(transactions)
    return transactions.value.filter((transaction) => transaction.isRecuring)
  })

  return {
    transactions,
    recurringTransactions,
  }
}
