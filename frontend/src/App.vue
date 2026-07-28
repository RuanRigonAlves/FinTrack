<template>
  <v-app>
    <SideNavDrawer />

    <v-main class="overflow-auto">
      <ContentNavBar class="mb-2 px-4 py-2"></ContentNavBar>

      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SideNavDrawer from './layout/SideNavDrawer.vue'
import ContentNavBar from './layout/ContentNavBar.vue'
</script>
