<template>
  <div class="ctr">

    <transition name="fade" mode="out-in"> 
      <!-- QUESTÕES -->
      <Questions 
        v-show="questionsAnswered < questions.length"
        :questions="questions"
        :questionsAnswered="questionsAnswered"
        @userAnswer="userAnswer" 
      />
    </transition>

    <div v-show="questionsAnswered === questions.length">
      
      <!-- RESULTADOS -->
      <Results :results="results" :userScore="userScore" />
      
      <button 
        type="button" 
        class="reset-btn"
        @click.prevent="resetBtn()"
      >
        Reset
      </button>

    </div>    
    
  </div>
</template>

<script setup>
import { ref } from 'vue'

// IMPORT COMPONENTS
import Questions from './components/Questions.vue'
import Results from './components/Results.vue'

const questionsAnswered = ref(0)
const userScore = ref(0)

const userAnswer = (isCorrect) => {
  if(isCorrect) {
    userScore.value++
  }

  questionsAnswered.value++
}

const resetBtn = () => {
  questionsAnswered.value = 0
  userScore.value = 0
}

// DADOS
const questions = ref([
  { 
    q: 'What is 2 + 2?', 
    answers: [
      { text: '4', is_correct: true }, 
      { text: '3', is_correct: false }, 
      { text: 'Fish', is_correct: false }, 
      { text: '5', is_correct: false }
    ]
  },
  { 
    q: 'How many letters are in the word "Banana"?', 
    answers: [
      {text: '5', is_correct: false },
      { text: '7', is_correct: false },
      { text: '6', is_correct: true },
      { text: '12', is_correct: false }
    ] 
  },
  { 
    q: 'Find the missing letter: C_ke', 
    answers: [
      { text: 'e', is_correct: false },
      { text: 'a', is_correct: true },
      { text: 'u', is_correct: false },
      { text: 'i', is_correct: false }
    ]
  },
])

const results = ref([
  {
    min: 0,
    max: 2,
    title: "Try again!",
    desc: "Do a little more studying and you may succeed!"
  },
  {
    min: 3,
    max: 3,
    title: "Wow, you're a genius!",
    desc: "Studying has definitely paid off for you!"
  }
])
</script>