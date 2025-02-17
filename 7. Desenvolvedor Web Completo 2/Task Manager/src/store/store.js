import { defineStore } from "pinia"
import { ref, reactive, computed } from "vue"

export const useStore = defineStore('store', () => {
  
  const appName = ref("Task Manager")
  
  const tasks = reactive(JSON.parse(localStorage.getItem('tasks')) || [])

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

  // ADD NEW TASK
  const showModal = ref(false)
  
  function closeModal () {
    showModal.value = false
  }
  
  const newTask = reactive({id: 1, name: '', description:'', completed: false})
  
  function addTask () {
    if(newTask.name && newTask.description) {
      newTask.id = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1
      tasks.push({...newTask})
      Object.assign(newTask, { name: '', description: '', completed: false })
      closeModal()
    } else {
      alert('Please enter the title and description for the task.')
    }
  }


  
  return { appName, tasks, filterBy, filteredTasks, setFilter, onCheckTask, 
    newTask, addTask, showModal, closeModal }

})