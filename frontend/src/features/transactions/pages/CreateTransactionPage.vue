<template>
  <v-sheet class="rounded-lg" elevation="1">
    <div class="h-100 pa-2">
      <div class="mb-4 d-flex justify-center">
        <h2>Register a Transaction</h2>
      </div>
      <v-divider></v-divider>

      <div class="d-flex justify-center mt-4">
        <div v-if="categoriesStore.loading" class="w-100 h-100 d-flex justify-center align-center">
          <v-progress-circular indeterminate :size="128"> </v-progress-circular>
        </div>

        <transaction-form v-else></transaction-form>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
import { useCategoriesStore } from '@/stores/categories.js'
import TransactionForm from '../components/TransactionForm.vue'

const categoriesStore = useCategoriesStore()
</script>
