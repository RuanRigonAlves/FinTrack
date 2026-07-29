<template>
  <DashboardList :items="largestExpenses">
    <template #header>
      <v-icon>mdi-note-multiple</v-icon>
      Largest Expenses
    </template>

    <template #side="{ item }">
      <!-- Desktop -->
      <div class="d-flex justify-space-evenly ga-2" v-if="!mobile">
        <div
          class="d-flex align-center text-body-small text-cente px-3 rounded-pill font-weight-medium text-medium-emphasis"
          style="background-color: rgb(var(--v-theme-content))"
        >
          {{ item.groupName }}
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
      </div>

      <!-- Mobile -->
      <div class="d-flex justify-space-between ga-2" v-if="mobile">
        <div class="d-flex align-center ga-2">
          <v-icon size="large" class="bg-background rounded-pill pa-5">{{ item.icon }}</v-icon>

          <div>
            <div class="font-weight-medium">{{ item.title }}</div>

            <div class="text-body-small text-medium-emphasis">{{ item.groupName }}</div>
          </div>
        </div>

        <div>
          <div class="text-end font-weight-medium" :class="item.color">
            {{ item.signal }} R$ {{ item.amount }}
          </div>

          <div class="text-end font-weight-medium text-medium-emphasis">
            {{ item.formattedDayMonth }}

            <v-icon size="small"> mdi-calendar </v-icon>
          </div>
        </div>
      </div>
    </template>
  </DashboardList>
</template>

<script setup>
// Imports
import { useDisplay } from 'vuetify'
import DashboardList from '../components/DashboardList.vue'
import { useDashboardTransactions } from '../composables/useDashboardTransactions.js'

const { transactions, largestExpenses } = useDashboardTransactions()
const { mobile } = useDisplay()
</script>
