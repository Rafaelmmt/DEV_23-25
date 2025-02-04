import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modalStore', () => {
  const isOpen = ref(false)
  const hiddenClass = computed(() => !isOpen.value ? 'hidden' : '')
  function increment() {
    isOpen.value++
  }

  return { isOpen, hiddenClass, increment }
})
