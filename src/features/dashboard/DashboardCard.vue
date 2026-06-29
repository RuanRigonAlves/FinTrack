<template>
  <v-sheet class="rounded-lg border-thin border-opacity-25 d-flex flex-column h-100">
    <header class="d-flex justify-space-between align-center px-4 py-3">
      <slot name="header"> </slot>
    </header>

    <v-divider />

    <section class="flex-grow-1 pa-4">
      <slot name="content"> </slot>
    </section>
  </v-sheet>
</template>
