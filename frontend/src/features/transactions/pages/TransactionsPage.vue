<template>
  <v-sheet class="rounded-lg" elevation="1">
    <div class="h-100 pa-2">
      <div class="mb-4 d-flex justify-center">
        <h2>List Of All Transactions</h2>
      </div>

      <v-divider></v-divider>

      <div v-if="transactionStore.loading" class="w-100 h-100 d-flex justify-center align-center">
        <v-progress-circular indeterminate :size="128"> </v-progress-circular>
      </div>

      <v-list class="bg-transparent d-flex justify-center flex-wrap ga-2" v-else>
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
                <v-icon>{{ transaction.icon ? transaction.icon : 'mdi-cash' }}</v-icon>
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
import { useTransactionStore } from '@/stores/transactions'

const transactionStore = useTransactionStore()

onMounted(() => {
  transactionStore.fetchTransactions()
})
</script>
