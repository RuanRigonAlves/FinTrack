import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const drawer = ref(false)

  function toggleDrawer() {
    drawer.value = !drawer.value
  }

  return {
    drawer,
    toggleDrawer,
  }
})
