<template>
  <v-navigation-drawer v-if="mobile" permanent rail fixed>
    <div class="d-flex flex-wrap ga-2 justify-center">
      <v-btn icon="mdi-home" variant="text" to="/" :active="false"></v-btn>

      <v-btn v-if="mobile" icon="mdi-menu" variant="text" @click="layoutStore.toggleDrawer">
      </v-btn>

      <v-btn icon="mdi-login" variant="text"> </v-btn>
    </div>
  </v-navigation-drawer>

  <v-navigation-drawer
    v-model="layoutStore.drawer"
    :model-value="mobile ? layoutStore.drawer : true"
    :permanent="!mobile"
    :temporary="mobile"
    class="bg-background"
    :class="mobile ? 'pt-2' : ''"
    fixed
  >
    <!-- Title -->
    <div class="pt-2" v-if="!mobile">
      <v-list-item to="/" height="50px" max-width="100%" variant="plain" class="custom-item ml-3">
        <v-list-item-title class="pl-2">
          <span class="text-title-medium">FinTrack</span>
        </v-list-item-title>
      </v-list-item>
    </div>

    <!-- Pages / Links -->
    <v-list-item
      v-for="page in pages"
      :to="page.url"
      density="compact"
      variant="text"
      class="mb-1 mx-3 rounded text-title-small text-medium-emphasis"
      :active-class="'bg-primary'"
    >
      <v-icon class="mr-1" size="21">{{ page.icon }}</v-icon>
      {{ page.name }}
    </v-list-item>
  </v-navigation-drawer>
</template>

<script setup>
import { useDialogStore } from '@/stores/dialog'
import { useDisplay } from 'vuetify'
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()
const { mobile } = useDisplay()
const dialog = useDialogStore()
// Pages
const pages = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'mdi-view-dashboard',
  },
  {
    name: 'Transactions',
    url: '/transactions',
    icon: 'mdi-list-box',
  },
]
</script>

<style scoped>
.custom-item {
  /* color: #000000 !important; */
  opacity: 1 !important;
}
</style>
