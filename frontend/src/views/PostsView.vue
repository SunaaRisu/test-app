<script setup>
  import { ref } from 'vue';

  const posts = ref('no posts');

  fetch('/api/posts')
    .then(response => {
      console.log(response);
        return response.json()
    })
    .then(json => {
      console.log(json);
        posts.value = json[0];
      })
    .catch(err => {
      console.log(err)
        posts.value = err; 
      }
    )
</script> 

<template>
  <div class="about">
    <h1>This is an posts page</h1>
    <p>{{ posts }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
