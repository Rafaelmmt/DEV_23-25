<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop">
            <div class="navbar-brand">
                <div @click="homepage" class="navbar-item is-size-4 app-title">Note App</div>
    
                <a
                    class="navbar-burger"
                    :class="{ 'is-active' : useBurgerNav }" 
                    @click="useBurgerNav = !useBurgerNav"
                    role="button" 
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navbarBasicExample"
                    ref="targetBElement"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
    
            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active' : useBurgerNav }" ref="targetElement">
                <div class="navbar-start">
                    <input
                        v-if="storeAuth.usuarioAtivo.id" 
                        @click="logoutApp"
                        class="button is-small is-info m-3"
                        type="button"
                        :value="'Log out '+ storeAuth.usuarioAtivo.email"
                    />
                </div>
                <div class="navbar-end">
                    <RouterLink @click="useBurgerNav=false" class="navbar-item" to="/" active-class="active">Notas</RouterLink>
                    <RouterLink @click="useBurgerNav=false" class="navbar-item" to="/stats" active-class="active">Dados</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { onClickOutside } from '@vueuse/core'

// PINIA
import { useStoreAuth } from '@/stores/storeAuth'
const storeAuth = useStoreAuth()

// NavBar-Burger
const useBurgerNav = ref(false)

// Usar Vue Router como parâmetro
const router = useRouter();
const homepage = () => {
    router.push({ name: 'notes' })
}

// VUE USE - Click fora do elemnto para fechar o elemento 
const targetElement = ref(null)
const targetBElement = ref(null)
onClickOutside(targetElement, () => {
    useBurgerNav.value = false
}, {
   ignore: [targetBElement] 
})

// LOGOUT
const logoutApp = () => {
    useBurgerNav.value = false
    storeAuth.logoutUser()
}
</script>

<style scoped>
.app-title {
  font-family: "Courier Prime", monospace;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
}

.navbar-burger, .navbar-item {
    color: rgb(255, 255, 255);
}

@media (max-width: 1023px) {
    .navbar-menu {
        position:absolute;
        left:0;
        width: 100%;
    }
}
</style>