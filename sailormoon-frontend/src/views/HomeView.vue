<template>
  <div class="container mt-5 home-container">

    <h1 class="main-title">My Favorite Anime</h1>
    <p class="subtitle">This site is inspired by Sailor Moon.</p>

    <div class="card hero-card">

      <div class="hero-content">

        <h2 class="hero-title">Sailor Moon</h2>

        <img
          :src="sailorMoonImg"
          alt="Sailor Moon"
          class="hero-image"
        />

        <p class="hero-text">
          Sailor Moon is a classic anime that follows Usagi Tsukino, a clumsy but
          kind-hearted middle school girl who discovers she is the reincarnation of
          a powerful guardian of love and justice. Guided by a talking cat named
          Luna, Usagi learns to transform into Sailor Moon and protect the world
          from dark forces. Alongside her fellow Sailor Guardians, she learns about
          friendship, destiny, and the strength that comes from believing in
          herself.
        </p>

      </div>

    </div>

  </div>
</template>

<script>
import sailorMoonImg from '../assets/sailor-moon-anime.jpeg'

export default {
  data() {
    return {
      sailorMoonImg
    }
  }
}
</script>