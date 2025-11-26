<template>
  <nav class="navbar px-3">

    <RouterLink to="/" class="navbar-brand">
      🌙 Sailor Site
    </RouterLink>

    <div class="d-flex gap-3">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/animes">Animes</RouterLink>
      <RouterLink to="/characters">Characters</RouterLink>
    </div>

    <select v-model="theme" @change="emitTheme" class="ms-3">
      <option disabled value="">Choose Sailor</option>
      <option value="sailorMoon">Sailor Moon</option>
      <option value="sailorMercury">Sailor Mercury</option>
      <option value="sailorMars">Sailor Mars</option>
      <option value="sailorJupiter">Sailor Jupiter</option>
      <option value="sailorVenus">Sailor Venus</option>
    </select>

    <button class="dark-toggle" @click="$emit('toggle-dark')">
      🌙
    </button>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      theme: ''
    };
  },
  methods: {
    emitTheme() {
      this.$emit('theme-change', this.theme);
    }
  }
};
</script>