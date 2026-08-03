<template>
  <v-app-bar color="background" flat class="border-b pa-0" :height="45">
    <div class="d-flex justify-space-between" style="width: 100%">
      <v-text-field
        elevation="1"
        density="compact"
        placeholder="Search"
        variant="solo"
        :style="{ 'max-width': !mobile ? '300px' : '150px' }"
        hide-details
        single-line
      />

      <v-btn elevation="1" class="bg-primary" @click="dialog.openDialog('transaction')">
        <v-icon class="mr-2"> mdi-plus </v-icon>
        Transaction
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { useDialogStore } from '@/stores/dialog'

const { mobile } = useDisplay()
const dialog = useDialogStore()
</script>
