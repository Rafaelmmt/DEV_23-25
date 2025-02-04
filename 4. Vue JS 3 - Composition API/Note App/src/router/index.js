import { createRouter, createWebHashHistory } from 'vue-router'
import { useStoreAuth } from '@/stores/storeAuth'

import ViewNotes from '@/views/ViewNotes.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewAuth from '@/views/ViewAuth.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/editNote/:id',
    name: 'edit-note',
    component: ViewEditNote
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  },
  {
    path: '/authentication',
    name: 'auth',
    component: ViewAuth
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

// Navigation Guards 
router.beforeEach(async (to, from) => {
  
  console.log(`To is ${to} and From is ${from}.`)
  
  const storeAuth = useStoreAuth()
  
  if (!storeAuth.usuarioAtivo.id && to.name !== 'auth') { 
    return { name: 'auth' }
  }

  if (storeAuth.usuarioAtivo.id && to.name === 'auth') { 
    return false
  }

})

export default router
