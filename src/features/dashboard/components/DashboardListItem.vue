<template>
  <v-list-item class="mx-1 mb-1 border rounded">
    <div class="d-flex justify-space-between align-center">
      <div class="d-flex align-center ga-4 font-weight-semibold">
        <v-icon size="x-large" class="bg-background rounded-pill">{{ item.icon }}</v-icon>

        {{ item.title }}
      </div>

      <div class="d-flex justify-space-evenly ga-2" style="min-width:">
        <slot name="side" :item="item"></slot>
      </div>
    </div>
  </v-list-item>
</template>

<script setup>
defineProps({
  item: Object,
})
</script>
