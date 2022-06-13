<template>
  <h5>Single Post</h5>
  {{ snippet }}
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + ".....";
    });
    onMounted(() => console.log("SinglePost mounted"));
    onUnmounted(() => console.log("SinglePost Unmounted"));
    onUpdated(() => console.log("SinglePost Updated"));
    return { snippet };
  },
};
</script>

<style>
</style>