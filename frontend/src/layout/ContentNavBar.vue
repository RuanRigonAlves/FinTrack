<template>
  <div class="d-flex justify-space-between" v-if="!mobile">
    <v-text-field
      elevation="1"
      density="compact"
      placeholder="Search"
      variant="solo"
      max-width="300px"
      hide-details
      single-line
      rounded
    />

    <v-btn rounded elevation="1" @click="dialog.openDialog('transaction')">
      <v-icon class="mr-2"> mdi-plus </v-icon>
      Transaction
    </v-btn>
  </div>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { useDialogStore } from '@/stores/dialog'

const { mobile } = useDisplay()
const dialog = useDialogStore()
</script>
