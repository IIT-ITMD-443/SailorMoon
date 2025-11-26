<template>
  <div class="container mt-5 characters-container">
    <h1>Sailor Guardians</h1>

    <div class="row g-3 justify-content-center text-center">
      <div class="col-4" v-for="g in guardians" :key="g.name">
        <div class="card p-3 text-center character-card">
          <img :src="g.img" class="character-img mb-2" />
          <h3>{{ g.name }}</h3>
          <p>{{ g.power }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moon from '../assets/sailor-moon.jpg'
import mercury from '../assets/sailor-mercury.jpg'
import mars from '../assets/sailor-mars.jpg'
import jupiter from '../assets/sailor-jupiter.jpg'
import venus from '../assets/sailor-venus.jpg'

export default {
  data() {
    return {
      guardians: [
        { name: 'Sailor Moon', power: 'Love and Justice', img: moon },
        { name: 'Sailor Mercury', power: 'Water and Wisdom', img: mercury },
        { name: 'Sailor Mars', power: 'Fire and Spirit', img: mars },
        { name: 'Sailor Jupiter', power: 'Thunder and Strength', img: jupiter },
        { name: 'Sailor Venus', power: 'Light and Beauty', img: venus }
      ]
    };
  }
};
</script>