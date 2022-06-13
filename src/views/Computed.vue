<template>
  <h1>hey</h1>
  <input type="text" v-model="search" />
  <div v-for="pattern in matchNames" :key="pattern">{{ pattern }}</div>
  <button @click="stopWatch()">stopWatch</button>
  <button @click="stopEffect()">stopEffect</button>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";
export default {
  setup() {
    const search = ref("");
    const names = ref(["sayonara", "bangBang", "dragonn", "hidden", "aniket"]);
    const matchNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    const stopWatch = watch(search, () => console.log("search value changed"));
    const stopEffect = watchEffect(() =>
      console.log("watchEffect", search.value)
    );
    return { search, names, matchNames, stopWatch, stopEffect };
  },
};
</script>

<style>
</style>