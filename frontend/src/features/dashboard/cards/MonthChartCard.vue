<template>
  <DashboardCard>
    <template #header>
      <div class="w-100 d-flex justify-space-between align-center ga-2 font-weight-medium">
        <div class="font-weight-regular text-medium-emphasis">
          Spending in {{ formatDate(selectedDate, 'monthYearNumeric') }}

          <div class="text-high-emphasis font-weight-medium text-red">
            - R${{ monthTotal.toFixed(2) }}
          </div>
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
      <div style="height: 200px">
        <Line :data="chartData" :options="chartOptions" />
      </div>
    </template>
  </DashboardCard>
</template>

<script setup>
// Imports
import DashboardCard from '../components/DashboardCard.vue'
import { useSpendingChart } from '../composables/useSpendingChart.js'
import { useDashboardTransactions } from '../composables/useDashboardTransactions.js'
import { computed, ref } from 'vue'
import { formatDate } from '@/utils/formatDate.js'
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
const { monthOfTransactions } = useDashboardTransactions()
</script>
