<template>
  <DashboardCard>
    <template #header>
      <div class="d-flex align-center ga-2">
        <v-icon>mdi-wallet</v-icon>
        Total Budget
      </div>

      <v-btn variant="plain"> Ver todos </v-btn>
    </template>

    <template #content> Content </template>
  </DashboardCard>
</template>

<script setup>
// Imports
import DashboardCard from '@/features/dashboard/DashboardCard.vue'
</script>
