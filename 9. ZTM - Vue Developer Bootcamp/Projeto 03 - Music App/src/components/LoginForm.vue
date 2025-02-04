<template>
  <div
    v-if="loginAlert"
    class="text-white text-center font-bold p-4 rounded mb-4"
    :class="loginAlertVariant"
  >
    {{ loginAlertMsg }}
  </div>
  <vee-form :validationSchema="schemaLogin" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field name="email" type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field name="password" type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button type="submit" :disabled="loginInProgress"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >Submit</button>
  </vee-form>
</template>

<script setup>
import { ref } from 'vue'

import { ErrorMessage } from 'vee-validate';

const schemaLogin = ref({
  email: 'required|email',
  password: 'required|min:6|max:100|alpha_spaces'
})

const login = (values) => {
  loginAlert.value = true
  loginInProgress.value = true
  loginAlertVariant.value = 'bg-blue-500'
  loginAlertMsg.value = 'Please Wait! We are logging you in.'

  loginAlertVariant.value = 'bg-green-500'
  loginAlertMsg.value = 'Success!'
  console.log(values)
}

const loginInProgress = ref(false)
const loginAlert = ref(false)
const loginAlertVariant = ref('bg-blue-500')
const loginAlertMsg = ref('Please Wait! Your account is being created.')
</script>
