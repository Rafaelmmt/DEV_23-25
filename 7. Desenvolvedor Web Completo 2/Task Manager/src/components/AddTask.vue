<template>
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
</template>

<script setup>
const props = defineProps(['task'])
</script>

<style lang="scss" scoped>
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