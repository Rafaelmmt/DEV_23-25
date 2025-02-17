import { defineStore } from "pinia"
import { ref, reactive, computed } from "vue"

export const useStore = defineStore('store', () => {
  const appName = ref("Task Manager")
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

  // FILTER
  const filterBy = ref('')
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

  function setFilter (value) {
    filterBy.value = value
  }

  // FUNÇÃO "CHECK" TASKS
  function onCheckTask (paramRecebido) {
    tasks.forEach(objeto => {
      if(objeto.id === paramRecebido) {
        objeto.completed = !objeto.completed
      }
    })
  }

  // Função ADD NEW TASK
  const newTask = reactive({id: 1, name: '', description:'', completed: false})
  function addTask () {
    if(newTask.name && newTask.description) {
      const nextId = store.tasks.length > 0 ? Math.max(...store.tasks.map(t => t.id)) : 0
      newTask.id = nextId + 1
      store.tasks.push({...newTask})
      Object.assign(newTask, { name: '', description: '', completed: false })
    } else {
      alert('Please enter the title and description for the task.')
    }
  }

  const showModal = ref(false)

  function closeModal () {
    showModal.value = false
  }
  
  return { appName, tasks, filterBy, filteredTasks, setFilter, onCheckTask, showModal, closeModal }

})