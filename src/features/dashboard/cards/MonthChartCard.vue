<template>
  <DashboardCard>
    <!-- Budget Header -->
    <template #header>
      <div class="d-flex align-center ga-2 font-weight-medium py-6">
        <div class="">
          <div class="font-weight-regular text-medium-emphasis">Spending this month</div>
          <div>
            <div>
              <v-select :items="monthOfTransactions" item-title="title" item-value="value" />
            </div>

            <div v-for="date in dates">{{ date.date }}</div>
          </div>
        </div>
      </div>
    </template>

    <template #content> </template>
  </DashboardCard>
</template>

<script setup>
// Imports
import DashboardCard from '../components/DashboardCard.vue'
import { useSpendingChart } from '../composables/useSpendingChart.js'
import { useTransactions } from '../composables/useTransactions.js'

const { monthTransactions } = useSpendingChart()
const { monthOfTransactions } = useTransactions()

const dates = monthOfTransactions.value

console.log(dates)
</script>
