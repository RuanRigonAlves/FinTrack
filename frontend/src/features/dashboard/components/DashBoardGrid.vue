<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" lg="6">
        <BudgetCard></BudgetCard>
      </v-col>

      <v-col cols="12" lg="6">
        <MonthChartCard></MonthChartCard>
      </v-col>

      <!-- Left -->
      <v-col cols="12" lg="6">
        <v-row density="comfortable">
          <v-col cols="12">
            <GoalsCard></GoalsCard>
          </v-col>

          <v-col cols="12">
            <LargestExpenses></LargestExpenses>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" lg="6">
        <v-row density="comfortable">
          <v-col cols="12">
            <TransactionsCard />
          </v-col>

          <v-col cols="12">
            <RecurringCard />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Imports
import BudgetCard from '@/features/dashboard/cards/BudgetCard.vue'
import TransactionsCard from '../cards/TransactionsCard.vue'
import RecurringCard from '../cards/RecurringCard.vue'
import GoalsCard from '../cards/GoalsCard.vue'
import LargestExpenses from '../cards/LargestExpenses.vue'
import MonthChartCard from '../cards/MonthChartCard.vue'
</script>
