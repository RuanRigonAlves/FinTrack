<template>
  <DashboardList :items="recurringTransactions">
    <template #header>
      <v-icon>mdi-repeat-variant</v-icon>
      Recurring
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
import { useTransactions } from '../composables/useTransactions.js'
import DashboardList from '../components/DashboardList.vue'

// Recurring Transactions
const { recurringTransactions } = useTransactions()

console.log(recurringTransactions)
</script>
