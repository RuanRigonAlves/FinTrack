import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
  const dialogs = ref({
    transaction: false,
  })

  const payload = ref(null)

  function openDialog(dialogName, data = null) {
    payload.value = data
    dialogs.value[dialogName] = true
  }

  function closeDialog(dialogName) {
    dialogs.value[dialogName] = false
    payload.value = null
  }

  return {
    dialogs,
    payload,
    openDialog,
    closeDialog,
  }
})
