<template>
  <v-sheet class="card rounded-lg d-flex flex-column h-100 overflow-hidden" elevation="1">
    <header class="d-flex justify-space-between align-center px-4" :class="headerClass">
      <slot name="header"> </slot>
    </header>

    <v-divider> </v-divider>

    <slot name="budget-bar"></slot>

    <section class="card-content" :class="contentClass">
      <slot name="content"> </slot>
    </section>
  </v-sheet>
</template>

<script setup>
defineProps({
  headerClass: {
    type: String,
    default: '',
  },
  contentClass: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;

  height: 100%;
  overflow: hidden;
}

.card-content {
  flex: 1 1 0;

  overflow: auto;

  min-height: 0;
}
</style>
