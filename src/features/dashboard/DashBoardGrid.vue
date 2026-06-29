<template>
  <div class="dashboard-grid pb-12">
    <BudgetCard />
    <BudgetCard />

    <div class="dashboard-column">
      <BudgetCard />
      <BudgetCard />
    </div>

    <div class="dashboard-column">
      <BudgetCard />
      <BudgetCard />
    </div>
  </div>
</template>

<script setup>
// Imports
import BudgetCard from '@/features/dashboard/components/BudgetCard.vue'
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 6px;
}

.dashboard-column {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 6px;
}
</style>
