<template>
  <h4>PostList</h4>
  <div v-if="showSinglePost">
    <div v-for="post in posts" :key="post">
      <!-- {{ post.title }} -->
      <SinglePost :post="post" :key="post.id" />
    </div>
  </div>
  <button @click="showSinglePost = !showSinglePost">toggle Single Post</button>
  <button @click="posts.pop()">delete Single Post</button>
</template>


<script>
import SinglePost from "./SinglePost.vue";
import { onUpdated, ref } from "vue";
export default {
  props: ["posts"],
  components: { SinglePost },
  setup() {
    let showSinglePost = ref(true);
    onUpdated(() => console.log("cmpt updated"));
    return { showSinglePost };
  },
};
</script>

<style>
</style>