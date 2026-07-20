<template>
  <DashboardList :items="largestExpenses">
    <template #header>
      <v-icon>mdi-note-multiple</v-icon>
      Largest Expenses
    </template>

    <template #side="{ item }">
      <div
        class="d-flex align-center text-body-small text-cente px-3 rounded-pill font-weight-medium text-medium-emphasis"
        style="background-color: rgb(var(--v-theme-content))"
      >
        {{ item.groupId }}
      </div>

      |

      <div class="text-end font-weight-medium" :class="item.color" style="min-width: 80px">
        {{ item.signal }} R$ {{ item.amount }}
      </div>

      |

      <div class="font-weight-medium text-medium-emphasis">
        <v-icon size="small"> mdi-calendar </v-icon>

        {{ item.formattedDayMonth }}
      </div>
    </template>
  </DashboardList>
</template>

<script setup>
// Imports
import DashboardList from '../components/DashboardList.vue'
import { useDashboardTransactions } from '../composables/useDashboardTransactions.js'

const { transactions, largestExpenses } = useDashboardTransactions()
</script>
