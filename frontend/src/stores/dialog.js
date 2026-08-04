import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
  const dialogs = ref({
    transaction: {
      open: false,
      payload: null,
    },
    viewTransaction: {
      open: false,
      payload: null,
    },
  })

  function openDialog(dialogName, data = null) {
    dialogs.value[dialogName].payload = data
    dialogs.value[dialogName].open = true
  }

  function closeDialog(dialogName) {
    dialogs.value[dialogName].open = false
    dialogs.value[dialogName].payload = null
  }

  return {
    dialogs,
    openDialog,
    closeDialog,
  }
})
