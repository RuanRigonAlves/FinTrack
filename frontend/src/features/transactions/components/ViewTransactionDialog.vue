<template>
  <v-dialog
    :model-value="modelValue"
    max-width="700"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card v-if="transaction">
      <v-toolbar flat>
        <v-toolbar-title>Transaction</v-toolbar-title>

        <v-spacer />

        <v-btn icon="mdi-close" variant="text" @click="dialog.closeDialog('viewTransaction')" />
      </v-toolbar>

      <v-divider />

      <v-card-text>
        <div class="d-flex align-center ga-4 mb-6">
          <v-avatar size="72" :color="transaction.group?.color ?? 'background'">
            <v-icon size="40">
              {{ transaction.category.icon }}
            </v-icon>
          </v-avatar>

          <div>
            <div class="text-h6">
              {{ transaction.category.name }}
            </div>

            <div class="text-h4 font-weight-bold" :class="transaction.color">
              {{ transaction.signal }} R$ {{ transaction.amount }}
            </div>
          </div>
        </div>

        <v-list density="comfortable">
          <v-list-item>
            <template #prepend>
              <v-icon>mdi-shape</v-icon>
            </template>

            {{ transaction.group.name }}
          </v-list-item>

          <v-list-item>
            <template #prepend>
              <v-icon>mdi-text</v-icon>
            </template>

            {{ transaction.description }}
          </v-list-item>

          <v-list-item>
            <template #prepend>
              <v-icon>mdi-calendar</v-icon>
            </template>

            {{ transaction.dateFormat }}
          </v-list-item>
        </v-list>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />

        <v-btn color="primary" prepend-icon="mdi-pencil"> Edit </v-btn>

        <v-btn color="error" prepend-icon="mdi-delete"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useDialogStore } from '@/stores/dialog'
import { watch } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  transaction: Object,
})

const emit = defineEmits(['update:modelValue'])

const dialog = useDialogStore()

watch(
  () => props.transaction,
  (transaction) => {
    console.log(transaction)
  },
  { immediate: true },
)
</script>
