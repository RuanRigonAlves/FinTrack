<template>
  <v-list-item class="mx-1 mb-1 border rounded">
    <div class="d-flex justify-space-between align-center">
      <div class="d-flex align-center ga-4">
        <v-icon size="x-large" class="bg-background rounded-pill">{{ item.icon }}</v-icon>

        {{ item.description }}
      </div>

      <div class="d-flex align-center ga-4">
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
