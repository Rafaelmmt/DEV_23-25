import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const showModal = ref(false)
  const mostrarModal = computed(() => showModal.value === true ? '' : 'hidden')
  const modalControl = () => {
    showModal.value = !showModal.value
  }

  return { mostrarModal, modalControl }
})
