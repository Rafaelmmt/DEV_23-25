<template>
  <div class="modal-wrapper" aria-modal="true" role="dialog" tabindex="-1">
    <div class="inner">      
      <button class="close-btn" @click="store.closeModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
          <path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" />
        </svg>
      </button>

      <div class="form">
        <div class="add-task">
          <h3>Add a new task</h3>
          <input 
            type="text" name="title" 
            placeholder="Enter a title..."
            v-model="store.newTask.name"
          ><br>
          <textarea 
            name="description" rows="4" 
            placeholder="Enter a description..."
            v-model="store.newTask.description"
          ></textarea><br>
          <button class="btn gray" @click="store.addTask()">Add Task</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// IMPORTAR PINIA STORE
import { useStore } from '../store/store';
const store = useStore()
</script>

<style lang="scss" scoped>
.modal-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 500;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    display: grid;
    place-items: center;
    color: var(--black-color);
  
    .inner {
      background-color: white;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      position: relative;
      max-width: 600px;
      width: 90%;
  
      h3 {
        font-size: 16px;
        font-weight: 700;
        line-height: 21px;
        margin-left: 20px;
        margin-bottom: 20px;
      }
  
      .close-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
        background-color: var(--white-color);
      }
  
      .form {
        display: flex;
        flex-direction: column;
        max-width: 100%;
 
        label {
          font-size: 12px;
          font-weight: 500;
          line-height: 16px;
          letter-spacing: 0em;
          text-align: left;
          padding: 0 20px;
        }
 
        input,
        select,
        textarea {
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0em;
          text-align: left;
          border: 1px solid #C2C2C2;
          border-radius: 4px;
 
          &::placeholder {
            color: #A6A6A6;
          }
        }
  
        .btn {
          width: fit-content;
          padding-inline: 23px;
        }
      }
    }
}
.add-task {
  padding: 20px 20px 30px 10px;

  input, textarea {
    width: 100%;
    margin: 5px;
    padding: 12px;
  }

  button {
    width: 360px;
    margin-top: 12px;
    margin-left: 8px;
  }
}
</style>