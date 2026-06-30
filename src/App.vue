<template>
  <v-app>
    <v-layout>
      <SideNavDrawer />

      <v-main>
        <div class="fill-height d-flex flex-column pa-2">
          <ContentNavBar class="mb-2"></ContentNavBar>

          <RouterView class="flex-grow-1" style="min-height: 0" />
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SideNavDrawer from './layout/SideNavDrawer.vue'
import ContentNavBar from './layout/ContentNavBar.vue'
</script>
