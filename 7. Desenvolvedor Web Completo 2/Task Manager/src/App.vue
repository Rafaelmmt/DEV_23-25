<template>
  <main class="container">

    <div class="header">
      <div class="header-side">
        <h1>{{ store.appName }}</h1>
      </div>
      <div class="header-side">
        <button class="btn secondary" @click="store.showModal = true">+ Add Task</button>
      </div>
    </div>
    
    <FiltersComp />
    <TasksList />

    <ModalComp v-if="store.showModal" />

  </main>
</template>

<script setup>
// IMPORTAR COMPONENTES
import TasksList from './components/TasksList.vue'
import FiltersComp from './components/FiltersComp.vue'
import ModalComp from './components/ModalComp.vue'

// IMPORTAR PINIA STORE
import { useStore } from './store/store'
const store = useStore()

store.$subscribe((mutation, state) => {
  localStorage.setItem('tasks', JSON.stringify(state.tasks))
})

// REF
// USAR REF PARA PRIMITIVES (STRINGS, NUMBERS, BOOLEANS...)
// const appName = ref("Task Manager")

// REACTIVE
// USAR REACTIVE PARA ARRAYS E OBJECTS
// const tasks = reactive([
//   {
//     id: 1,
//     name: "Website design",
//     description: "Define the style guide, branding and create the webdesign on Figma.",
//     completed: true
//   },
//   {
//     id: 2,
//     name: "Website development",
//     description: "Develop the portfolio website using Vue JS.",
//     completed: false
//   },
//   {
//     id: 3,
//     name: "Hosting and infrastructure",
//     description: "Define hosting, domain and infrastructure for the portfolio website.",
//     completed: false
//   },
//   {
//     id: 4,
//     name: "Composition API",
//     description: "Learn how to use the composition API and how it compares to the options API.",
//     completed: true
//   },
//   {
//     id: 5,
//     name: "Pinia",
//     description: "Learn how to setup a store using Pinia.",
//     completed: true
//   },
//   {
//     id: 6,
//     name: "Groceries",
//     description: "Buy rice, apples and potatos.",
//     completed: false
//   },
//   {
//     id: 7,
//     name: "Bank account",
//     description: "Open a bank account for my freelance business.",
//     completed: false
//   }
// ])
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-side {
    display: flex;
    align-items: center;

    h1 {
      text-transform: capitalize;
      font-size: 42px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
    }

    .secondary {
      margin-left: 12px;
    }
  }

}

</style>