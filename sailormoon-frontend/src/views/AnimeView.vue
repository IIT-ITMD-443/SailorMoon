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
        { title: 'Sailor Moon', desc: 'Magical girl classic.' },
        { title: 'Cardcaptor Sakura', desc: 'Pastel magic vibes.' },
        { title: 'Fruits Basket', desc: 'Emotional story.' }
      ]
    };
  }
};
</script>