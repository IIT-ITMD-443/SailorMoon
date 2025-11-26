<template>
  <AppNavbar
    @toggle-dark="toggleDarkMode"
    @theme-change="setTheme"
  />
  <RouterView />
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: {
    AppNavbar
  },
  data() {
    return {
      themes: {
        sailorMoon: '#ffb7d5',
        sailorMercury: '#b5e8ff',
        sailorMars: '#ff9a9a',
        sailorJupiter: '#baffd6',
        sailorVenus: '#fff2a6'
      }
    };
  },
  methods: {
    toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
    },
    setTheme(key) {
      document.documentElement.style
        .setProperty('--accent-color', this.themes[key]);
    }
  }
};
</script>


