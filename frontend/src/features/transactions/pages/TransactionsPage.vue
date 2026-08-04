<template>
  <div class="h-100 pa-2">
    <div v-if="transactionStore.loading" class="w-100 h-100 d-flex justify-center align-center">
      <v-progress-circular indeterminate :size="128"> </v-progress-circular>
    </div>

    <v-sheet class="h-100" rounded v-else>
      <v-card>
        <v-card-title class="d-flex align-center pe-2">
          <v-icon icon="mdi-swap-horizontal-variant"></v-icon>Transactions

          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            density="compact"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
        </v-card-title>
      </v-card>

      <v-divider> </v-divider>

      <v-data-table
        density="comfortable"
        :search="search"
        :items="transactionStore.transactions"
        :items-per-page="mobile ? 10 : 15"
        :headers="headers"
        class="transaction-table"
        @click:row="openTransaction"
      >
      </v-data-table>
    </v-sheet>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useTransactionStore } from '@/stores/transactions'
import { useDisplay } from 'vuetify'
import { useRouter } from 'vue-router'
import { useDialogStore } from '@/stores/dialog'

const dialog = useDialogStore()
const router = useRouter()
const { mobile } = useDisplay()
const transactionStore = useTransactionStore()
const search = ref('')
const headers = [
  { key: 'title', title: 'Transaction' },
  { key: 'type', title: 'Type' },
  { key: 'amount', title: 'Amount' },
  { key: 'dateFormat', title: 'Date' },
]

onMounted(() => {
  transactionStore.fetchTransactions()
})

function openTransaction(_, { item }) {
  dialog.openDialog('viewTransaction', item)
}
</script>

<style scoped>
@media (max-width: 600px) {
  .transaction-table :deep(th) {
    padding-inline: 4px !important;
  }

  .transaction-table :deep(td) {
    padding-inline: 4px !important;
  }
}
</style>
