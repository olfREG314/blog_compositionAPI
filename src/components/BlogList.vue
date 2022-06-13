<template>
  <div v-for="post in posts" :key="post.id">
    {{ post.title }}
    <p>
      <i>{{ post.body }}</i>
    </p>
    <strong v-for="tag in post.tags" :key="tag">#{{ tag }}</strong>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["posts"],
  setup() {},
};
</script>

<style>
</style>