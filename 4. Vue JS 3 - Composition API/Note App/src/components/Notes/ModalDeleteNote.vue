<template>
  <div class="modal is-active p-4">
    <div class="modal-background"></div>
    <div class="modal-card" ref="targetDeleteElement">
      <header class="modal-card-head">
        <p class="modal-card-title">Deletar Nota?</p>
        <button @click="closeDeleteModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        Você tem certezaque deseja deletar esta nota?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <div class="buttons">
          <button @click="closeDeleteModal" class="button">Cancelar</button>
          <button @click="storeNotes.deleteNote(noteId)" class="button is-danger">Deletar</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { onClickOutside } from '@vueuse/core'

/***** ACESSO PINIA STORE *****/
const storeNotes = useStoreNotes()

/***** PROPS e EMITS *****/
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  noteId:{
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

/***** FECHAR MODAL *****/ 
// Fechar modal com os botões 
const closeDeleteModal = () => {
  emit('update:modelValue', false)
}

// Fechar modal clicando fora do elemento  
const targetDeleteElement = ref(null)
onClickOutside(targetDeleteElement, closeDeleteModal)

// Fechar modal usando "ESC"
const handleKeyboard = e => {
  if(e.key === 'Escape') closeDeleteModal()
} 
onMounted(() => {
  document.addEventListener('keyup', handleKeyboard) 
})
onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard) 
})
</script>