<template>
  <v-list-item class="mx-1 mb-2 mb-1 rounded">
    <div :class="!mobile ? 'd-flex justify-space-between align-center' : ''">
      <div class="d-flex align-center ga-4 font-weight-semibold" v-if="!mobile">
        <v-icon size="x-large" class="bg-background rounded-pill pa-6">{{ item.icon }}</v-icon>

        {{ item.title }}
      </div>

      <slot name="side" :item="item"></slot>
    </div>
  </v-list-item>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

defineProps({
  item: Object,
})
</script>
