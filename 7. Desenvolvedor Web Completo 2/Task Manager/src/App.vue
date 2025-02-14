<template>
  <main class="container">

    <div class="header">
      <div class="header-side">
        <h1>
          {{ appName }}
        </h1>
      </div>
    </div>
    
    <div class="filters">
      <div>
        <p>Filter by state</p>
        <div class="badges">
          <div class="badge">
            To-Do
          </div>
          <div class="badge">
            Done
          </div>
          <span class="clear">
            x clear
          </span>
        </div>
      </div>
    </div>

    <div class="tasks">
      <TasksList 
        v-for="(task, index) in tasks" :key="index" 
        :task="task"
        @checkTask="onCheckTask"
      />
    </div>

    <div class="add-task">
      <h3>Add a new task</h3>
      <input 
        type="text" name="title" 
        placeholder="Enter a title..."
        v-model="newTask.name"
      ><br>
      <textarea 
        name="description" rows="4" 
        placeholder="Enter a description..."
        v-model="newTask.description" 
      ></textarea><br>
      <button class="btn gray" @click="addTask">Add Task</button>
    </div>

  </main>
</template>

<script setup>
import { ref, reactive } from 'vue'

// IMPORTAR COMPONENTES
import TasksList from './components/TasksList.vue'

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

// FUNÇÃO "CHECK" TASKS
const onCheckTask = (paramRecebido) => {
  tasks.forEach(objeto => {
    if(objeto.id === paramRecebido) {
      objeto.completed = !objeto.completed
    }
  })
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

.filters {
  display: flex;
  flex-direction: column;
  margin: 40px 0;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 14px 0;
    align-items: center;
  }

  .clear {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
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

.add-task {
  margin-top: 60px;

  input, textarea {
    width: 360px;
    max-width: 100%;
    margin-top: 12px;
    padding: 5px;
  }

  button {
    width: 360px;
    margin-top: 12px;
  }
}


</style>