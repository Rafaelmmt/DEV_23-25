import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/db/firebase'
import { useStoreNotes } from '@/stores/storeNotes';

export const useStoreAuth = defineStore('storeAuth', {
  
  state: () => { 
    return {
      usuarioAtivo: { }
    } 
  },

  actions: {
    // USUÁRIO ID
    usuarioID() {
      const storeNotes = useStoreNotes()
      onAuthStateChanged(auth, (user) => {
        if(user) {
          this.usuarioAtivo.id = user.uid
          this.usuarioAtivo.email = user.email
          this.router.push('/')
          storeNotes.init()
        } else {
          this.usuarioAtivo = { }
          this.router.replace('/authentication')
          storeNotes.clearNotes()
        }
      })
    },
    // REGISTRO DO USUÁRIO
    registerUser(dados) {
      createUserWithEmailAndPassword(auth, dados.email, dados.password).then((userCredential) => {
        const user = userCredential.user
        console.log('User: ', user)
      }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('Error: ', errorCode, errorMessage)
      }) 
    },
    
    // LOGIN DO USUÁRIO 
    loginUser(dados) {
      signInWithEmailAndPassword(auth, dados.email, dados.password).then((userCredential) => {
        const user = userCredential.user
        console.log('Usuário: ', user)
      }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('Error: ', errorCode, errorMessage)
      }) 
    },

    // LOGOUT DO USUÁRIO
    logoutUser() {
      signOut(auth).then(() => {
        console.log('Té mais! Flw!')
      }).catch((error) => {
        console.log('Deu ruim: ', error)
      })
    }  

  },

})