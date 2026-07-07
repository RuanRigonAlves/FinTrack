<template>
  <DashboardCard>
    <template #header>
      <div class="w-100 d-flex justify-space-between align-center ga-2 font-weight-medium py-6">
        <div class="font-weight-regular text-medium-emphasis py-2">
          Spending in {{ formatDateMonthYear(selectedDate) }}

          <div class="text-high-emphasis font-weight-medium">-R${{ monthTotal }}</div>
        </div>

        <div>
          <v-select
            v-model="selectedDate"
            :items="monthOfTransactions"
            item-title="title"
            item-value="date"
            density="compact"
            hide-details
          />
        </div>
      </div>
    </template>

    <template #content>
      <div style="height: 300px">
        <Line :data="chartData" :options="chartOptions" />
      </div>
    </template>
  </DashboardCard>
</template>

<script setup>
// Imports
import DashboardCard from '../components/DashboardCard.vue'
import { useSpendingChart } from '../composables/useSpendingChart.js'
import { useTransactions } from '../composables/useTransactions.js'
import { computed, ref } from 'vue'
import { formatDateMonthYear } from '@/utils/formatDate.js'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
)

const { selectedDate, chartData, chartOptions, monthTotal } = useSpendingChart()
const { monthOfTransactions } = useTransactions()
</script>
