<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active' : liActive}">
          <a @click.prevent="liActive = true">Login</a>
        </li>
        <li :class="{ 'is-active' : !liActive}">
          <a @click.prevent="liActive = false" >Registro</a>
        </li>
      </ul>
    </div>
    <div class="card card-style">
      <div class="card-content">
        <div class="title has-text-centered">
          {{ cardTitle }}
        </div>
        <form
          @submit="onSubmit"
        >
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input 
                v-model="credentials.email"
                class="input" 
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
              >
            </div>
          </div>
          <div class="field">
            <label class="label">Senha</label>
            <div class="control">
              <input 
                v-model="credentials.password"
                class="input" 
                type="password" 
                placeholder="Digite sua senha"
              >
            </div>
          </div>
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button class="button is-primary has-text-white">
                {{ cardTitle }}
              </button>
            </p>
          </div>
        </form>
        <div>{{ `O e-mail é ${credentials.email} e a senha é ${credentials.password}` }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

// PINIA
import { useStoreAuth } from '@/stores/storeAuth'
const storeAuth = useStoreAuth()

// ATIVAR ABA "LOGIN" OU "REGISTRO"  
const liActive = ref(true)
const cardTitle = computed(() => {
  return liActive.value ? 'Login' : 'Registro'
})

const credentials = reactive({
  email:'',
  password:''
})

const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert('Insira seu e-mail e senha.')
  }
  else {
    if (liActive.value) {
      storeAuth.loginUser(credentials)
    }
    else{
      storeAuth.registerUser(credentials)
    }
  }
}
</script>

<style scoped>
.card-style{
  max-width: 400px;
  margin: 0 auto;
}
</style>