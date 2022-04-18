<template>
  <div v-if="showQuestion">
    <Question v-bind="questions[current]" @onSelection="select" />
    <div>
      <button type="button" @click="next">Confirmar resposta</button>
    </div>
  </div>
  <Results v-else />
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import Question from "./Question.vue";
import Results from "./Results.vue";

const questions = [
  {
    statement: "Enunciado da 1º questão",
    options: ["opcao 1.1", "opcao 1.2", "opcao 1.3", "opcao 1.4"],
  },
  {
    statement: "Enunciado da 2º questão",
    options: ["opcao 2.1", "opcao 2.2", "opcao 2.3", "opcao 2.4"],
  },
  {
    statement: "Enunciado da 3º questão",
    options: ["opcao 3.1", "opcao 3.2", "opcao 3.3", "opcao 3.4"],
  },
  {
    statement: "Enunciado da 4º questão",
    options: ["opcao 4.1", "opcao 4.2", "opcao 4.3", "opcao 4.4"],
  },
];

const current = ref(0);
const showQuestion = computed(() => current.value < questions.length);

function select(e: any) {
  console.log(e);
}

function next() {
  current.value++;
}
</script>
