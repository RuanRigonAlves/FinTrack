<template>
  <v-app>
    <SideNavDrawer />

    <v-main>
      <GlobalDialogs> </GlobalDialogs>

      <ContentNavBar class="pa-2"></ContentNavBar>

      <RouterView class="px-2 pt-6" />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SideNavDrawer from './layout/SideNavDrawer.vue'
import ContentNavBar from './layout/ContentNavBar.vue'
import GlobalDialogs from './layout/GlobalDialogs.vue'
</script>
