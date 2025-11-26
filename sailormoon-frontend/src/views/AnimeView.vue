<template>
  <div class="container mt-5">
    <h1>Favorite Animes</h1>

    <div class="row g-3">
      <div class="col-md-4" v-for="a in animes" :key="a.title">
        <AnimeCard :title="a.title" :desc="a.desc" />
      </div>
    </div>
  </div>
</template>

<script>
import AnimeCard from '../components/AnimeCard.vue';

export default {
  components: { AnimeCard },
  data() {
    return {
      animes: [
      { title: 'Naruto', desc: 'A ninja who dreams of becoming the strongest leader of his village.' },
      { title: 'Attack on Titan', desc: 'Humanity fights for survival against giant Titans.' },
      { title: 'Sailor Moon', desc: 'A magical girl who fights for love and justice.' },
      { title: 'Demon Slayer', desc: 'A boy fights demons to save his sister.' },
      { title: 'Princess Tutu', desc: 'A magical ballerina who heals hearts through dance.' },
      { title: 'My Hero Academia', desc: 'A powerless boy dreams of becoming a superhero.' }
    ]
    };
  }
};
</script>