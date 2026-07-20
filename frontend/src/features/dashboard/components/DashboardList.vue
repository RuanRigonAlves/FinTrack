<template>
  <DashboardCard header-class="py-2">
    <template #header>
      <div class="d-flex justify-space-between align-center w-100">
        <div class="d-flex align-center ga-2 font-weight-medium">
          <slot name="header"> </slot>
        </div>

        <v-btn variant="plain" density="compact"> Ver todos > </v-btn>
      </div>
    </template>

    <template #content>
      <v-list>
        <DashboardListItem v-for="item in items" :key="item.id" :item="item">
          <template #side="{ item }">
            <slot name="side" :item="item"></slot>
          </template>
        </DashboardListItem>
      </v-list>
    </template>
  </DashboardCard>
</template>

<script setup>
// Imports
import DashboardCard from './DashboardCard.vue'
import DashboardListItem from './DashboardListItem.vue'

defineProps({
  items: Array,
})
</script>
