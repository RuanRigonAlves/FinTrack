<template>
  <TransactionDialog v-model="dialog.dialogs.transaction" :transaction="dialog.payload">
  </TransactionDialog>
</template>

<script setup>
import { useDialogStore } from '@/stores/dialog'

import TransactionDialog from '@/features/transactions/components/TransactionDialog.vue'

const dialog = useDialogStore()
</script>
