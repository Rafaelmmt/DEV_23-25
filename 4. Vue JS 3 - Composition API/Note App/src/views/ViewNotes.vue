<template>
  <div class="note">

    <AddEditNote v-model="newNote" ref="boxFocus">
      <template v-slot:buttons>
        <button
          class="button is-link has-background-success-ligth"
          @click="addNote"
          :disabled="!newNote"
        >
          Criar nova nota!
        </button>
      </template>
    </AddEditNote>

    <progress v-if="storeNotes.loadingNotes" class="progress is-small is-success" max="100" />
    
    <template v-else>
      <NoteCard v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </template>

    <div 
      class="is-size-4 has-text-centered is-family-monospace is-success-dark py-6" 
      v-if="!storeNotes.notes.length"
    >O usuário ainda não possui notas...</div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useWatchCharacters } from '@/use/useWatchCharacters'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import NoteCard from '@/components/Notes/NoteCard.vue'

/***** Use PINIA STORE *****/
  import { useStoreNotes } from '@/stores/storeNotes.js'
  const storeNotes = useStoreNotes()
/*****/

/***** FUNÇÃO ADD NEW NOTE *****/
  const newNote = ref('')
  const boxFocus = ref(null)

  const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    boxFocus.value.focusTextarea()
  }
/*****/

/***** Watch Characters *****/
  useWatchCharacters(newNote, 100)
/*****/

</script>
