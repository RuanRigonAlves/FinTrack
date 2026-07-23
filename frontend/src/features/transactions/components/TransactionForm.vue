<template>
  <v-form ref="form" class="d-flex ga-10" validate-on="blur">
    <div style="width: 500px" class="pa-4">
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

      <v-checkbox label="Is Recurring?" v-model="formData.isRecurring"> </v-checkbox>
    </div>

    <div>
      <div>
        <v-date-picker width="500" v-model="formData.date"></v-date-picker>

        <div v-if="dateError" class="text-error d-flex justify-end px-4">
          {{ dateError }}
        </div>
      </div>

      <div class="d-flex justify-end mt-4 ga-6">
        <v-btn color="red" @click="router.back()">Return</v-btn>

        <v-btn color="primary" @click="submit">Register Transaction</v-btn>
      </div>
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
</script>
