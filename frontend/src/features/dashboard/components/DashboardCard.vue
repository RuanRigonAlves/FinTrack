<template>
  <v-sheet class="rounded-lg d-flex flex-column h-100 overflow-hidden" elevation="1">
    <header class="d-flex justify-space-between align-center px-3 py-3" :class="headerClass">
      <slot name="header"> </slot>
    </header>

    <v-divider> </v-divider>

    <slot name="budget-bar"></slot>

    <v-expand-transition>
      <section v-show="!mobile || toggle" class="card-content" :class="contentClass">
        <slot name="content"> </slot>
      </section>
    </v-expand-transition>

    <v-btn
      v-if="mobile"
      :icon="toggle ? 'mdi-chevron-up' : 'mdi-chevron-down'"
      :ripple="false"
      width="100%"
      variant="plain"
      @click="toggleValue"
    ></v-btn>
  </v-sheet>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { ref } from 'vue'

const { mobile } = useDisplay()
const toggle = ref(false)

function toggleValue() {
  toggle.value = !toggle.value
}

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
  overflow: auto;

  height: 230px;
}
</style>
