<template>
  <DashboardList :items="recurringTransactions">
    <template #header>
      <v-icon>mdi-repeat-variant</v-icon>
      Recurring
    </template>

    <template #side="{ item }">
      <div
        class="d-flex align-center text-body-small text-cente px-3 rounded-pill font-weight-medium text-medium-emphasis"
        style="background-color: rgb(var(--v-theme-content))"
      >
        Monthly
      </div>

      |

      <div class="text-end" :class="item.color" style="min-width: 80px">
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
import { useTransactions } from '../composables/useTransactions.js'
import DashboardList from '../components/DashboardList.vue'

// Recurring Transactions
const { recurringTransactions } = useTransactions()
</script>
