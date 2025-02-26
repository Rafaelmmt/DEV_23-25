<template>
  <q-page class="custom-page">
    <div class="full-width">
      <q-card class="custom-card">
        <div class="custom-title">Formulário de Cadastro</div>
        <div class="custom-content">
          <q-form @submit="submitForm" @reset="resetForm">
            <div class="q-ma-lg">
              <q-input
                v-model="model.name"
                label="Nome Completo"
                hint="Digite seu nome e sobrenome"
                outlined lazy-rules
                :rules="[ val => !!val || 'Campo Obrigatório!']"
              />
            </div>
            <div class="q-ma-lg">
              <q-select
                v-model="model.select"
                :options="[1,2,3,4]"
                label="Selecione um campo"
                hint="Escolha um campo entre 1 e 4"
                outlined lazy-rules
                :rules="[ val => !!val || 'Campo Obrigatório!']"
              />
            </div>
            <div class="row justify-end q-ma-lg">
              <q-toggle v-model="modelToggle" label="I accept the license and terms" />
            </div>
            <div class="row justify-end q-ma-lg">
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface Form {
  name: string|null
  select: number|null
}

const modelInit = reactive<Form>({ name: null, select: null })
const model = reactive<Form>({...modelInit})
const modelToggle = ref<boolean>(false)

const submitForm = () => {
  console.log('Formulário entregue: ', model)
  resetForm()
}

const resetForm = () => {
  Object.assign(model, modelInit)
}
</script>
