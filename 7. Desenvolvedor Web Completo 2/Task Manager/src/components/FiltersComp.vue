<template>
  <div class="filters">
    <p>Filter by state</p>
    <div class="badges">
      <div 
        class="badge" 
        :class="{selected : store.filterBy === 'todo'}"
        @click="store.setFilter('todo')"
      >
        To-Do
      </div>
      <div 
        class="badge" 
        :class="{selected : store.filterBy === 'done'}"
        @click="store.setFilter('done')"
      >
        Done
      </div>
      <span 
        v-if="store.filterBy" 
        class="clear"
        @click="store.setFilter('')"
      >
        x clear
      </span>
    </div>
  </div>
</template>

<script setup>
// IMPORTAR PINIA STORE
import { useStore } from '../store/store'
const store = useStore()
</script>

<style lang="scss" scoped>
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
  .badge {
    padding: 8px 7px;
    background-color: var(--gray-color);
    color: var(--black-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
  }
  .badge.selected {
    background-color: #E42C5F;
    color: var(--white-color);
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

</style>