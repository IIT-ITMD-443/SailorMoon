<template>
  <nav class="navbar px-3">

    <RouterLink to="/" class="navbar-brand">
      Sailor Site
    </RouterLink>

    <div class="d-flex gap-3">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/animes">Animes</RouterLink>
      <RouterLink to="/characters">Characters</RouterLink>
    </div>

    <div class="icon-controls ms-3">

      <!-- Palette Button -->
      <button class="icon-btn theme-btn" @click="togglePalette">
        <img :src="paletteIcon" alt="Theme" />
      </button>

      <!-- DROPDOWN -->
      <div v-if="showPalette" class="palette-dropdown">

        <p class="dropdown-title">Choose Your Scout</p>

        <div class="scout-option" :class="{ 'active-scout': activeTheme === 'moon' }" @click="setTheme('moon')">
          <div class="scout-dot" style="background:#ff70b5;"></div>
          <span>Sailor Moon</span>
        </div>

        <div class="scout-option" :class="{ 'active-scout': activeTheme === 'mercury' }" @click="setTheme('mercury')">
          <div class="scout-dot" style="background:#70b7ff;"></div>
          <span>Sailor Mercury</span>
        </div>

        <div class="scout-option" :class="{ 'active-scout': activeTheme === 'mars' }" @click="setTheme('mars')">
          <div class="scout-dot" style="background:#ff6b6b;"></div>
          <span>Sailor Mars</span>
        </div>

        <div class="scout-option" :class="{ 'active-scout': activeTheme === 'jupiter' }" @click="setTheme('jupiter')">
          <div class="scout-dot" style="background:#66e37a;"></div>
          <span>Sailor Jupiter</span>
        </div>

        <div class="scout-option" :class="{ 'active-scout': activeTheme === 'venus' }" @click="setTheme('venus')">
          <div class="scout-dot" style="background:#ffc14d;"></div>
          <span>Sailor Venus</span>
        </div>

      </div>

      <!-- Light/Dark Toggle -->
      <button class="icon-btn mode-btn" @click="toggleMode">
        <img :src="modeIcon" alt="Mode" />
      </button>

    </div>

  </nav>
</template>

<script>
import paletteIcon from '../assets/palette.png'
import moonIcon from '../assets/moon.png'
import sunIcon from '../assets/sun.png'

export default {
  data() {
    return {
      isDark: false,
      showPalette: false,
      activeTheme: 'moon',
      paletteIcon,
      moonIcon,
      sunIcon
    };
  },
  computed: {
    modeIcon() {
      return this.isDark ? this.sunIcon : this.moonIcon
    }
  },
  methods: {
    togglePalette() {
      this.showPalette = !this.showPalette
    },
    toggleMode() {
      this.isDark = !this.isDark
      document.body.classList.toggle('dark-mode')
    },
    setTheme(theme) {
      this.activeTheme = theme
      document.documentElement.setAttribute('data-theme', theme)

      this.showPalette = false
    }
  }
}
</script>
