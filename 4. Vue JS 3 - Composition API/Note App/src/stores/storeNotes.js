import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc, query, orderBy } from 'firebase/firestore';
import { db } from '@/db/firebase'
import { useStoreAuth } from '@/stores/storeAuth';

let notasRef
let q 
let getNotesSnapshot = null

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [],
      loadingNotes: true 
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => note.id === id)[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let chCount = 0
      state.notes.forEach(note => {
        chCount += note.content.length
      })
      return chCount
    }
  },
  actions: {
    init() {
      const storeAuth = useStoreAuth()

      notasRef = collection(db, 'users', storeAuth.usuarioAtivo.id, 'notes')
      q = query(notasRef, orderBy('date', 'desc'))
      this.getNotes()

    },
    // ACESSAR NOTAS NO BANCO DE DADOS FIRESTORE 
    async getNotes() {
      this.loadingNotes = true
      
      getNotesSnapshot = onSnapshot(q, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          }
          notes.push(note)
        })
        this.notes = notes
        this.loadingNotes = false
      })
    }, 

    // LIMPAR NOTAS APÓS LOGOUT
    clearNotes() {
      this.notes = []
      if(getNotesSnapshot) getNotesSnapshot()
    },

    // ADICIONAR NOTA 
    async addNote (newNoteContent) {
      let currentDate = new Date().getTime()
      let noteDate = currentDate.toString()

      await addDoc(notasRef, {
        content: newNoteContent,
        date: noteDate
      })
    },
    
    // DELETAR NOTA
    async deleteNote (idToDelete) {
      await deleteDoc(doc(db, 'notes', idToDelete))
    },
    
    // EDITAR NOTA
    async updateNote (id, content) {
      await updateDoc(doc(notasRef, id), {
        content: content
      })
    }
  }
})