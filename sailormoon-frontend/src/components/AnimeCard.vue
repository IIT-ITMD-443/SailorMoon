<template>
  <div class="card p-3 text-center h-100">
    <img :src="img" class="anime-img mb-3" />

    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>

    <button @click="likes++">💖 Like</button>
    <p>{{ likes }} likes</p>
  </div>
</template>

<script>
export default {
  props: ["title", "desc", "img"],
  data() {
    return { likes: 0 };
  }
};
</script>

