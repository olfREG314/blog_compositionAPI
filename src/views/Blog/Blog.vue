<template>
  <h1>Blog</h1>
  <!-- <div>{{ posts[0].title }}</div> -->
  <div v-if="gotError">{{ gotError }}</div>
  <div v-if="posts.length">
    <BlogList :posts="posts" />
  </div>
  <div v-else><h3>Loading....</h3></div>
</template>

<script>
import { ref } from "vue";
import BlogList from "@/components/BlogList.vue";

export default {
  components: { BlogList },
  setup() {
    const gotError = ref(null);
    const posts = ref([]);
    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) throw Error("no data avalable");
        posts.value = await data.json();
      } catch (err) {
        console.log(err);
        gotError.value = err.message;
      }
    };
    load();
    return { posts, gotError };
  },
};
</script>

<style>
</style>