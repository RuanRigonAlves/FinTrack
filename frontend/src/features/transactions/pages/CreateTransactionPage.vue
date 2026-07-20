<template>
  <v-sheet class="rounded-lg" elevation="1">
    <div class="h-100 pa-2">
      <div class="mb-4 d-flex justify-center">
        <h2>Register a Transaction</h2>
      </div>
      <v-divider></v-divider>

      <div class="d-flex justify-center mt-4">
        <transaction-form></transaction-form>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
import TransactionForm from '../components/TransactionForm.vue'
</script>
