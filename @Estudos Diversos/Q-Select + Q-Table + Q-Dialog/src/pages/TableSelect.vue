<template>
  <div class="full-width q-pa-xl">
    <div class="full-width justify-center row q-px-xl">
      <q-select
        class="col-4 q-mx-md q-mb-md"
        label="Nota"
        v-model="teste02.nome"
        :options="selectOptions('nome', filmes, teste02)"
        clearable
      />
      <q-select
        class="col-4 q-mx-md"
        label="Data"
        v-model="teste02.ano"
        :options="selectOptions('ano', filmes, teste02)"
        clearable
      />

    </div>
    <!-- TABELA -->
    <q-table
      title="FILMES"
      class="q-py-md q-px-xl"
      row-key="id"
      :rows="tabelaFiltrada(filmes, teste02)"
      :columns="columns"
    />
    <div class="q-mt-md">
      <q-btn @click="goTo('/')">Página Inicial</q-btn>
      <pre>{{ teste02 }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()

const temp = ref('')
const temp02 = reactive([1,2,3,4])
const columns = reactive([
  { name: 'nome', label: 'Nome', field:'nome', sortable: true, align: 'center' },
  { name: 'diretor', label: 'Diretor', field: 'diretor', sortable: true, align: 'center' },
  { name: 'ano', label: 'Data de Lançamento', field:'ano', sortable: true, align: 'center' },
  { name: 'nota', label: 'Nota Site', field: 'nota', sortable: true, align: 'center' }
])

const filmes = reactive([
  { id: 1, nome: 'O Poderoso Chefão', ano: 1972, nota: 9.2, diretor: 'Francis Ford Coppola', info01: 'A', info02: 'XXX', info03: 'filme tipo 5', info04: 'filme gênero D' },
  { id: 2, nome: 'A Origem', ano: 2010, nota: 8.8, diretor: 'Christopher Nolan', info01: 'A', info02: 'XYZ', info03: 'filme tipo 3', info04: 'filme gênero B' },
  { id: 3, nome: 'A Viagem de Chihiro', ano: 2001, nota: 8.6, diretor: 'Hayao Miyazaki', info01: 'B', info02: 'XXX', info03: 'filme tipo 1', info04: 'filme gênero E' },
  { id: 4, nome: 'Os Bons Companheiros', ano: 1990, nota: 8.7, diretor: 'Martin Scorsese', info01: 'B', info02: 'XYZ', info03: 'filme tipo 1', info04: 'filme gênero A' },
  { id: 5, nome: 'Um Estranho no Ninho', ano: 1975, nota: 8.7, diretor: 'Milos Forman', info01: 'A', info02: 'XYZ', info03: 'filme tipo 2', info04: 'filme gênero C' },
  { id: 6, nome: 'O Exterminador do Futuro 2', ano: 1991, nota: 8.6, diretor: 'James Cameron', info01: 'C', info02: 'XYZ', info03: 'filme tipo 4', info04: 'filme gênero A' },
  { id: 7, nome: 'A Outra História Americana', ano: 1998, nota: 8.5, diretor: 'Tony Kaye', info01: 'C', info02: 'XYZ', info03: 'filme tipo 4', info04: 'filme gênero A' },
  { id: 8, nome: 'De Volta para o Futuro', ano: 1985, nota: 8.5, diretor: 'Robert Zemeckis', info01: 'A', info02: 'XXX', info03: 'filme tipo 5', info04: 'filme gênero C' },
  { id: 9, nome: 'O Rei Leão', ano: 1994, nota: 8.5, diretor: 'Roger Allers', info01: 'B', info02: 'XXX', info03: 'filme tipo 5', info04: 'filme gênero A' },
  { id: 10, nome: 'Parasita', ano: 2019, nota: 8.5, diretor: 'Bong Joon Ho', info01: 'C', info02: 'XYZ', info03: 'filme tipo 2', info04: 'filme gênero E' },
  { id: 11, nome: 'Clube da Luta', ano: 1999, nota: 8.8, diretor: 'David Fincher', info01: 'C', info02: 'XXX', info03: 'filme tipo 2', info04: 'filme gênero B' },
  { id: 12, nome: 'Batman: O Cavaleiro das Trevas', ano: 2008, nota: 9.0, diretor: 'Christopher Nolan', info01: 'A', info02: 'XYZ', info03: 'filme tipo 3', info04: 'filme gênero D' },
  { id: 13, nome: 'Pulp Fiction: Tempo de Violência', ano: 1994, nota: 8.9, diretor: 'Quentin Tarantino', info01: 'B', info02: 'XXX', info03: 'filme tipo 3', info04: 'filme gênero B' },
  { id: 14, nome: 'Réquiem para um Sonho', ano: 2000, nota: 8.3, diretor: 'Darren Aronofsky', info01: 'B', info02: 'XXX', info03: 'filme tipo 2', info04: 'filme gênero C' },
  { id: 15, nome: 'Gladiador', ano: 2000, nota: 8.5, diretor: 'Ridley Scott', info01: 'A', info02: 'XXX', info03: 'filme tipo 1', info04: 'filme gênero A' }
])

const aplicarFiltro = (item, objFiltro) => {
  return Object.keys(objFiltro).every(key => !objFiltro[key] || item[key] === objFiltro[key])
}

const selectOptions = (itemTabela, tabela, objFiltro) => {
  const filtroArray = tabela.filter(item => aplicarFiltro(item, objFiltro))
  return [...new Set(filtroArray.map(option => option[itemTabela]))].sort()
}

const tabelaFiltrada = (tabela, objFiltro) => {
  return tabela.filter(item => aplicarFiltro(item, objFiltro))
}

const teste02 = ref({})

const goTo = (rota) => {
  router.push(rota)
}
</script>
