<template>
  <form @submit="registerUser()">
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <input
        type="text" placeholder="Enter Name" v-model="userInfo.nome"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <input
        type="email" placeholder="Enter Email" v-model="userInfo.email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
    </div>
    <!-- Age -->
    <div class="mb-3">
      <label class="inline-block mb-2">Age</label>
      <input
        type="number" v-model="userInfo.idade"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <input
        type="password" placeholder="Password" v-model="userInfo.senha"
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

</template>

<script setup>
import { ref } from 'vue'
import { auth } from '@/service/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const errorMsg = ref('')
const userInfo = ref({
  email: '',
  senha: ''
})

const registerUser = async() => {
  try {
    await createUserWithEmailAndPassword( auth, userInfo.value.email, userInfo.value.senha )
  } catch(error) {
    errorMsg.value = error.message
  }
}
</script>
