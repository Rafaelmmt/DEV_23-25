<template>
  <form @submit.prevent="registerUser">
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <input
        type="text" placeholder="Enter Name" v-model="novoUsuario.nome" required
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <input
        type="email" placeholder="Enter Email" v-model="userEmail" required
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
    </div>
    <!-- Age -->
    <div class="mb-3">
      <label class="inline-block mb-2">Age</label>
      <input
        type="number" v-model="novoUsuario.idade" required
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <input
        type="password" placeholder="Password" v-model="userSenha" required
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
    </div>

    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </form>

  <p v-if="errorMessage" style="color:red;">{{ errorMessage }}</p>

</template>

<script setup>
import { ref } from 'vue'
import { auth, db } from '@/service/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const errorMessage = ref('')
const userEmail = ref('')
const userSenha = ref('')
const novoUsuario = ref({
  nome:'',
  idade: '',
})

const registerUser = async() => {
  try {

    // 1. Criar Usuário no Auth
    const userCredential = await createUserWithEmailAndPassword( auth, userEmail.value, userSenha.value )
    const userId = userCredential.user.uid

    // 2. Criar documento no Firestore
    await setDoc(doc(db, 'usuarios', userId), novoUsuario.value)

  } catch(error) {
    errorMessage.value = translateFirebaseError(error.code)
  }
}

// ERROS FIREBASE
const translateFirebaseError = (code) => {
  const errors = {
    'auth/email-already-in-use': 'Email já está em uso.',
    'auth/invalid-email': 'Email inválido.',
    'auth/weak-password': 'Senha muito fraca.',
  }
  return errors[code] ?? 'Erro ao criar conta.'
}
</script>
