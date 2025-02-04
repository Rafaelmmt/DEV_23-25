<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="columns is-mobile has-text-grey-light mt-2">
          <small class="column"> {{ dateFormatted }} </small>
          <small class="column has-text-right"> {{ noteLength }} </small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink 
        :to="`/editNote/${ note.id }`"
        class="card-footer-item"
      >
        Editar
      </RouterLink>
      <a 
        @click.prevent="modals.deleteNote = true"
        href="#" 
        class="card-footer-item"
      > 
        Deletar
      </a>
    </footer>
    <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id" />
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
//import { useStoreNotes } from '@/stores/storeNotes.js'
import ModalDeleteNote from './ModalDeleteNote.vue'
import { useDateFormat } from '@vueuse/core';

// Use PINIA STORE
//const storeNotes = useStoreNotes()

// PROPS
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

// Função NOTE CHARACTERS  
const noteLength = computed(() => {
  let lengthSum = props.note.content.length
  let descripition = lengthSum > 1 ? 'characters' : 'character'
  return `${lengthSum} ${descripition}`
})

// Date formatted
const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date))
  return useDateFormat(date, 'DD-MM-YY | HH:mm') 
})

// MODALS
const modals = reactive ({
  deleteNote: false
})

</script>