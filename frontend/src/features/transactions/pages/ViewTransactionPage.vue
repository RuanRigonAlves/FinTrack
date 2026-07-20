<template>
  <v-sheet class="rounded-lg" elevation="1">
    <div class="h-100 pa-2">
      <!-- Header -->
      <div class="d-flex justify-space-between align-center w-100">
        <div class="d-flex align-center ga-2">
          <v-btn icon="mdi-arrow-left" variant="text" @click="$router.back()" />
        </div>

        <span class="font-weight-medium"> Transaction</span>

        <div class="d-flex ga-2">
          <v-btn color="primary" prepend-icon="mdi-pencil"> Edit </v-btn>

          <v-btn color="error" prepend-icon="mdi-delete"> Delete </v-btn>
        </div>
      </div>

      <!-- Content -->
      <v-sheet class="pa-8">
        <div class="d-flex justify-center">
          <div class="d-flex align-center ga-4">
            <v-avatar size="72" color="background">
              <v-icon size="40">
                {{ transaction.icon }}
              </v-icon>
            </v-avatar>

            <div>
              <div class="d-flex font-weight-medium ga-2">
                Categoty:
                <div class="font-weight-medium">{{ transaction.categoryName }}</div>
              </div>

              <div class="d-flex font-weight-medium ga-2">
                Total:
                <div class="text-h4 font-weight-bold" :class="transaction.color">
                  {{ transaction.signal }} R$ {{ transaction.amount }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Details -->
        <div class="d-flex justify-center mt-8">
          <div class="" style="width: 450px">
            <div class="font-weight-medium">Details</div>

            <v-divider> </v-divider>

            <div>
              <v-list>
                <v-list-item>Group: {{ transaction.groupName }}</v-list-item>
                <v-list-item>Description: {{ transaction.description }}</v-list-item>
                <v-list-item>Date: {{ transaction.date }}</v-list-item>
              </v-list>
            </div>
          </div>
        </div>
      </v-sheet>
    </div>
  </v-sheet>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useTransactions } from '../composables/useTransactions'
import { computed } from 'vue'

const { getTransactionById } = useTransactions()
const route = useRoute()

const transaction = computed(() => {
  return getTransactionById(route.params.id)
})

console.log(transaction.value)
</script>
