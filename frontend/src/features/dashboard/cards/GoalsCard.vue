<template>
  <DashboardList :items="goals">
    <template #header>
      <v-icon>mdi-target</v-icon>
      Goals
    </template>

    <template #side="{ item }">
      <!-- Current / Target -->
      <div class="d-flex ga-1">
        <div class="font-weight-medium">R$ {{ item.currentAmount }}</div>

        <div>/</div>

        <div class="font-weight-regular text-medium-emphasis" color="gray">
          R$ {{ item.targetAmount }}
        </div>
      </div>

      |

      <!-- Porcentagem -->
      <div
        class="d-flex justify-space-between align-center ga-2 font-weight-medium"
        style="min-width: 160px"
        :style="{ color: item.color }"
      >
        <v-progress-linear
          style="width: 100px"
          :color="item.color"
          :model-value="item.percentage"
          :height="10"
          rounded
        ></v-progress-linear>

        <div>{{ item.percentage }}%</div>
      </div>

      |

      <!-- Data da meta -->
      <div class="font-weight-medium text-medium-emphasis">
        <v-icon size="small"> mdi-target </v-icon>
        {{ item.deadlineFormatted }}
      </div>
    </template>
  </DashboardList>
</template>

<script setup>
// Imports
import DashboardList from '../components/DashboardList.vue'
import { useGoals } from '../composables/useGoals.js'

// Goals Composable
const { sortedGoals } = useGoals()
const goals = sortedGoals
</script>
