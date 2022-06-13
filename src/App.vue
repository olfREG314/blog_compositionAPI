<template>
  <div>
    <router-link :to="{ name: 'home' }">ref</router-link> |
    <router-link :to="{ name: 'computed' }">computed</router-link> |
    <router-link :to="{ name: 'propss' }">props</router-link> |
    <router-link :to="{ name: 'blog' }">Blog</router-link> |
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
