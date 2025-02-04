<template>
  <div class="edit-note">
    <AddEditNote 
      v-model="noteContent" 
      ref="boxFocus" 
      cardBgColor="link" 
      labelOn="Editar Nota"
      placeholderText="Editar nota..."
    >
      <template v-slot:buttons>
        <button
          @click="$router.push('/')"
          class="mr-2 button has-background-ligth"
        >
          Cancelar
        </button>
        <button
          @click="editNote"
          class="button is-link has-background-link-ligth"
          :disabled="!noteContent"
        >
          Editar Nota
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStoreNotes } from '@/stores/storeNotes';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useWatchCharacters } from '@/use/useWatchCharacters';

const route = useRoute()
const router = useRouter()

const storeNotes = useStoreNotes()
const noteContent = ref('')
noteContent.value = storeNotes.getNoteContent(route.params.id)

const editNote = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.push('/')
}

// Watch Characters
useWatchCharacters(noteContent, 100)

</script>