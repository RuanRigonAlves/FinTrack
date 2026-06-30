<template>
  <DashboardList :items="transactions">
    <template #header>
      <v-icon>mdi-wallet</v-icon>
      Transactions
    </template>

    <template #side="{ item }">
      <div :class="item.color">{{ item.signal }} R$ {{ item.amount }}</div>

      |

      <div class="font-weight-regular">
        <v-icon size="small"> mdi-calendar </v-icon>

        {{ item.formattedDayMonth }}
      </div>
    </template>
  </DashboardList>
</template>

<script setup>
// Imports
import DashboardList from '../components/DashboardList.vue'
import { useTransactions } from '../composables/useTransactions'

// Transactions Composable
const { transactions } = useTransactions()
</script>
