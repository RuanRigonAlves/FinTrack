<template>
  <v-list-item class="mb-1 rounded">
    <div :class="!mobile ? 'd-flex justify-space-between align-center' : ''">
      <div class="d-flex align-center ga-3 semibold" v-if="!mobile">
        <v-icon size="large" class="bg-background rounded-pill pa-5">{{ item.icon }}</v-icon>

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
