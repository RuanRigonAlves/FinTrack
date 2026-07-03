<template>
  <DashboardCard>
    <!-- Budget Header -->
    <template #header>
      <div class="d-flex align-center ga-2 font-weight-medium py-6">
        <div class="">
          <div class="font-weight-regular text-medium-emphasis">Total Budget</div>
          <div>R$ {{ selectedBudget.budget }}</div>
        </div>
      </div>

      <div>
        <v-select
          v-model="selectedBudgetId"
          :items="budgets"
          item-title="monthYear"
          item-value="id"
          density="compact"
          hide-details
        />
      </div>
    </template>

    <!-- BudgetBar  -->
    <template #budget-bar>
      <v-sheet class="px-3 py-6">
        <div class="budget-bar">
          <div class="total" :style="{ width: `${selectedBudget.remainingPercentage}%` }"></div>
          <div
            v-for="budget in selectedBudget.categoryTotals"
            :key="budget"
            class="segment"
            :style="{
              width: `${budget.percentage}%`,
              backgroundColor: `${budget.group.color}`,
            }"
          ></div>
        </div>
      </v-sheet>
      <v-divider> </v-divider>
    </template>

    <!-- Budget List -->
    <template #content>
      <v-sheet class="px-3">
        <v-list>
          <v-list-item v-for="categoryGroup in selectedBudget.categoryTotals">
            <div class="d-flex justify-space-between align-center">
              <div class="d-flex align-center ga-4 font-weight-semibold">
                <v-icon size="x-large" class="bg-background rounded-pill">{{
                  categoryGroup.group.icon
                }}</v-icon>

                <div>
                  <div class="d-flex align-center ga-2">
                    <div
                      class="group-color"
                      :style="{ backgroundColor: categoryGroup.group.color }"
                    ></div>
                    {{ categoryGroup.group.name }}
                  </div>

                  <div class="d-flex ga-1">
                    <div class="text-red">R$ -{{ categoryGroup.total }}</div>
                    <div class="text-medium-emphasis">spent</div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-space-evenly ga-2 text-medium-emphasis font-weight-medium">
                ({{ categoryGroup.percentage }} %)
              </div>
            </div>
          </v-list-item>
        </v-list>
      </v-sheet>
    </template>
  </DashboardCard>
</template>

<script setup>
// Imports
import { computed, ref } from 'vue'
import DashboardCard from '../components/DashboardCard.vue'
import { useBudget } from '../composables/useBudgets.js'

const { budgets, selectedBudget, selectedBudgetId } = useBudget()

console.log(selectedBudget)
</script>

<style scoped>
.budget-bar {
  display: flex;
  height: 35px;
  overflow: hidden;
  border-radius: 1rem;
  gap: 3px;
  width: 100%;
}

.segment {
  height: 100%;
  background-color: aqua;
  border-radius: 4px;
}

.total {
  height: 100%;
  background-color: green;
  border-radius: 4px;
}

.group-color {
  width: 5px;
  height: 1rem;
  border-radius: 1rem;
}
</style>
