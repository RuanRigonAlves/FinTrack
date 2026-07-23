import { useCategoriesStore } from '@/stores/categories'
import { useTransactionStore } from '@/stores/transactions'
import { reactive, computed, watch, ref } from 'vue'
import * as rules from '@/features/transactions/validation/transactionRules.js'
import { useCategories } from '@/features/categories/composables/useCategories'

export function useTransactionForm(transaction = null) {
  const transactionStore = useTransactionStore()
  const categoriesStore = useCategoriesStore()
  const { categories } = useCategories()

  const form = ref(null)

  const formData = reactive({
    type: 'expense',
    amount: null,
    categoryId: null,
    accountId: null,
    date: null,
    description: '',
    isRecurring: false,
  })

  if (transaction) {
    Object.assign(formData, transaction)
  }

  function formatDate(dateToFormat) {
    const date = new Date(dateToFormat)

    dateToFormat = [
      String(date.getDate()).padStart(2, '0'),
      String(date.getMonth() + 1).padStart(2, '0'),
      date.getFullYear(),
    ]

    dateToFormat = `${dateToFormat[0]}-${dateToFormat[1]}/${dateToFormat[2]}`

    return dateToFormat
  }

  async function submit() {
    if (transaction) {
      console.log('update transaction')
    } else {
      const { valid } = await form.value.validate()

      if (!valid) return

      formData.userId = 1

      console.log(formData)
      transactionStore.createTransaction({
        ...formData,
        amount: Number(formData.amount),
      })
    }

    reset()
  }

  function reset() {
    Object.assign(formData, {
      type: 'expense',
      amount: null,
      categoryId: null,
      accountId: null,
      date: null,
      description: '',
      isRecurring: false,
    })
  }

  const filteredCategories = computed(() => {
    return categoriesStore.categories.filter((category) => {
      return category.type === formData.type
    })
  })

  const dateError = computed(() => {
    return !formData.date ? 'Date is required!' : ''
  })

  watch(
    () => formData.type,
    () => {
      formData.categoryId = null
    },
  )

  return {
    form,
    formData,
    submit,
    filteredCategories,
    rules,
    dateError,
  }
}
