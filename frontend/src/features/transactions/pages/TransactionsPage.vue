<template>
  <v-sheet class="rounded-lg" elevation="1">
    <div class="h-100 pa-2">
      <div class="mb-4 d-flex justify-center">
        <h2>List Of All Transactions</h2>
      </div>

      <v-divider></v-divider>

      <v-list class="bg-transparent d-flex justify-center flex-wrap ga-2">
        <v-list-item
          v-for="transaction in transactionStore.transactions"
          :key="transaction.id"
          class="mb-2 rounded-lg border"
          :to="`/transactions/${transaction.id}`"
          style="width: 350px"
        >
          <div class="d-flex justify-space-between align-center">
            <div class="d-flex align-center ga-4">
              <v-avatar size="44" color="background">
                <v-icon>{{ transaction.icon }}</v-icon>
              </v-avatar>

              <div>
                <div class="font-weight-medium">{{ transaction.title }}</div>

                <div class="text-caption text-medium-emphasis">
                  {{ transaction.description }}
                </div>
              </div>
            </div>

            <div class="text-right">
              <div class="font-weight-bold" :class="transaction.color">
                {{ transaction.signal }} R$ {{ transaction.amount }}
              </div>

              <div class="text-caption text-medium-emphasis">
                {{ transaction.formattedDayMonth }}
              </div>

              <div></div>
            </div>
          </div>
        </v-list-item>
      </v-list>
    </div>
  </v-sheet>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTransactionList } from '../composables/useTransactionList'
import { useTransactionStore } from '@/stores/transactions'

const transactionStore = useTransactionStore()
// const { transactions } = useTransactionList()

onMounted(() => {
  transactionStore.fetchTransactions()
})

console.log(transactionStore.loading)
</script>
