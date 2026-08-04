<template>
  <DashboardList :items="goals">
    <template #header>
      <v-icon>mdi-target</v-icon>
      Goals
    </template>

    <template #side="{ item }">
      <!-- Desktop -->
      <div class="d-flex justify-space-evenly ga-2" v-if="!mobile">
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
        <div class="text-medium-emphasis">
          <v-icon size="small"> mdi-target </v-icon>
          {{ item.deadlineFormatted }}
        </div>
      </div>

      <!-- Mobile -->
      <div class="d-flex justify-space-between ga-2" v-if="mobile">
        <div class="d-flex align-center ga-2">
          <v-icon size="large" class="bg-background rounded-pill pa-5">{{ item.icon }}</v-icon>

          <div>
            <div class="font-weight-medium">{{ item.title }}</div>

            <div class="text-body-small text-medium-emphasis">
              R$ {{ item.currentAmount }} / R$ {{ item.targetAmount }}
            </div>
          </div>
        </div>

        <div>
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

          <div class="text-end text-medium-emphasis">
            {{ item.deadlineFormatted }}

            <v-icon size="small"> mdi-target </v-icon>
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
import { useGoals } from '../composables/useGoals.js'

// Goals Composable
const { sortedGoals } = useGoals()
const goals = sortedGoals
const { mobile } = useDisplay()
</script>
