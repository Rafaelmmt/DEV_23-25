<template>
  <main class="container">

    <div class="header">
      <div class="header-side">
        <h1>{{ appName }}</h1>
      </div>
      <div class="header-side">
        <button class="btn secondary" @click="showModal = true">+ Add Task</button>
      </div>
    </div>
    
    <FiltersComp 
      :filterBy="filterBy"
      @setFilter="setFilter" 
    />

    <div class="tasks">
      <TasksList 
        v-for="(task, index) in filteredTasks" :key="index" 
        :task="task"
        @checkTask="onCheckTask"
      />
    </div>

    <ModalComp 
      v-if="showModal"
      @closeModal="closeModal"
    />
  </main>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

// IMPORTAR COMPONENTES
import TasksList from './components/TasksList.vue'
import FiltersComp from './components/FiltersComp.vue'
import AddTask from './components/AddTask.vue'
import ModalComp from './components/ModalComp.vue'

// REF
// USAR REF PARA PRIMITIVES (STRINGS, NUMBERS, BOOLEANS...)
const appName = ref("Task Manager")

// REACTIVE
// USAR REACTIVE PARA ARRAYS E OBJECTS
const tasks = reactive([
  {
    id: 1,
    name: "Website design",
    description: "Define the style guide, branding and create the webdesign on Figma.",
    completed: true
  },
  {
    id: 2,
    name: "Website development",
    description: "Develop the portfolio website using Vue JS.",
    completed: false
  },
  {
    id: 3,
    name: "Hosting and infrastructure",
    description: "Define hosting, domain and infrastructure for the portfolio website.",
    completed: false
  },
  {
    id: 4,
    name: "Composition API",
    description: "Learn how to use the composition API and how it compares to the options API.",
    completed: true
  },
  {
    id: 5,
    name: "Pinia",
    description: "Learn how to setup a store using Pinia.",
    completed: true
  },
  {
    id: 6,
    name: "Groceries",
    description: "Buy rice, apples and potatos.",
    completed: false
  },
  {
    id: 7,
    name: "Bank account",
    description: "Open a bank account for my freelance business.",
    completed: false
  }
])

// FUNÇÃO "CHECK" TASKS
const onCheckTask = (paramRecebido) => {
  tasks.forEach(objeto => {
    if(objeto.id === paramRecebido) {
      objeto.completed = !objeto.completed
    }
  })
}

// Função ADD NEW TASK
const newTask = reactive({id: 1, name: '', description:'', completed: false})

const addTask = () => {
  
  if(newTask.name && newTask.description) {
    
    const nextId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) : 0
    newTask.id = nextId + 1
    
    tasks.push({...newTask})
    
    Object.assign(newTask, { name: '', description: '', completed: false })
  
  } else {
    
    alert('Please enter the title and description for the task.')
  
  }
}

// FILTER
const filterBy = ref('')

const setFilter = (value) => {
  filterBy.value = value
}

const filteredTasks = computed(() => {
  switch(filterBy.value){
    case 'todo':
      return tasks.filter(task => !task.completed)
      break
    case 'done':
      return tasks.filter(task => task.completed)
      break
    default:
      return tasks
  }
})

const showModal = ref(false)

const closeModal = () => {
  showModal.value = false
}

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
.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>