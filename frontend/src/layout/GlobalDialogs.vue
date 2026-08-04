<template>
  <TransactionDialog
    v-model="dialog.dialogs.transaction.open"
    :transaction="dialog.dialogs.transaction.payload"
  >
  </TransactionDialog>

  <ViewTransactionDialog
    v-model="dialog.dialogs.viewTransaction.open"
    :transaction="dialog.dialogs.viewTransaction.payload"
  >
  </ViewTransactionDialog>
</template>

<script setup>
import { useDialogStore } from '@/stores/dialog'

import TransactionDialog from '@/features/transactions/components/TransactionDialog.vue'
import ViewTransactionDialog from '@/features/transactions/components/ViewTransactionDialog.vue'

const dialog = useDialogStore()
</script>
