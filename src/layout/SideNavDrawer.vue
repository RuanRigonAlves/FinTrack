<template>
  <v-navigation-drawer permanent floating class="bg-background">
    <!-- Title -->
    <div class="pt-2">
      <v-list-item
        to="/"
        height="50px"
        max-width="100%"
        rounded="lg"
        variant="plain"
        class="custom-item ml-3"
      >
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
      class="ml-3 mb-1 rounded-pill text-title-small text-medium-emphasis"
    >
      <v-icon class="mr-1" size="21">mdi-view-dashboard</v-icon>
      {{ page.name }}
    </v-list-item>
  </v-navigation-drawer>
</template>

<script setup>
// Pages
const pages = [
  {
    name: 'Dashboard',
    url: '/dashboard',
  },
  {
    name: 'test',
    url: '/',
  },
  {
    name: 'tests asd as',
    url: '/',
  },
]
</script>

<style scoped>
.custom-item {
  color: #000000 !important;
  opacity: 1 !important;
}
</style>
