<template>
  <div class="dashboard-grid">
    <BudgetCard />
    <BudgetCard />

    <div class="dashboard-column">
      <TransactionsCard></TransactionsCard>
      <TransactionsCard></TransactionsCard>
    </div>

    <div class="dashboard-column">
      <TransactionsCard></TransactionsCard>
      <TransactionsCard></TransactionsCard>
    </div>
  </div>
</template>

<script setup>
// Imports
import BudgetCard from '@/features/dashboard/cards/BudgetCard.vue'
import TransactionsCard from '../cards/TransactionsCard.vue'
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  height: 100%;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, minmax(0, 1fr));

  gap: 6px;
}

.dashboard-grid > * {
  min-height: 0;
  min-width: 0;
}

.dashboard-column {
  display: grid;

  grid-template-rows: repeat(2, minmax(0, 1fr));

  gap: 6px;

  min-height: 0;
}

.dashboard-column > * {
  min-height: 0;
  min-width: 0;
}
</style>
