<template>
  <v-form ref="form" validate-on="blur">
    <div>
      <v-btn-toggle v-model="formData.type" mandatory class="d-flex justify-center ga-4 mb-4">
        <v-btn value="expense"> Expense </v-btn>
        <v-btn value="income"> Income </v-btn>
      </v-btn-toggle>

      <v-text-field
        v-model="formData.amount"
        prefix="R$"
        label="Amount"
        :rules="[rules.required, rules.postiveAmount]"
      ></v-text-field>

      <v-select
        v-model="formData.categoryId"
        :items="filteredCategories"
        label="Category"
        item-title="name"
        item-value="id"
        :rules="[rules.required]"
      >
      </v-select>

      <v-select
        label="Card"
        :items="accounts"
        item-title="name"
        item-value="id"
        v-model="formData.accountId"
      >
      </v-select>

      <v-text-field
        label="Description"
        v-model="formData.description"
        :rules="[rules.maxDescription]"
      >
      </v-text-field>

      <div>
        <v-text-field
          v-model="formData.date"
          label="Date"
          type="date"
          :rules="[rules.required]"
        ></v-text-field>
      </div>
      <v-checkbox label="Is Recurring?" v-model="formData.isRecurring"> </v-checkbox>
    </div>
  </v-form>
</template>

<script setup>
import { useAccountsStore } from '@/stores/accounts'
import { useRouter } from 'vue-router'
import { useTransactionForm } from '../composables/useTransactionForm'

const router = useRouter()
const { accounts } = useAccountsStore()

const { formData, submit, filteredCategories, form, rules, dateError } = useTransactionForm()

defineExpose({
  submit,
})
</script>
