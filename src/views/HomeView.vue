<template>
  <div class="home">home</div>
  <div ref="p">my name is {{ name }} and my age is {{ age }}</div>
  <button @click="handleClick()">click me</button>
  <input type="text" v-model="name" />
</template>

<script>
// @ is an alias to /src

import { ref } from "vue";
export default {
  name: "HomeView",
  setup() {
    let name = ref("olfreg314");
    let age = ref(21);
    let p = ref(null);

    const handleClick = () => {
      console.log("you clicked me");
      p.value.classList.add("text");
      // p.value.textContent = "yes you definetiely click me";
      name.value = "dinasour";
      age.value = 25;
    };
    return { name: name, age, handleClick, p };
  },
};
</script>
