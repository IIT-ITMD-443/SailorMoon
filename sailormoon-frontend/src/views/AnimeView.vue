<template>
  <div class="container mt-5 anime-container">
    <h1>Favorite Animes</h1>

    <div class="row g-4">
      <div class="col-md-4" v-for="a in animes" :key="a.title">
        <AnimeCard
          :title="a.title"
          :desc="a.desc"
          :img="a.img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AnimeCard from '../components/AnimeCard.vue'

import aot from '../assets/aot.jpeg'
import demon from '../assets/demonslayer.jpg'
import mha from '../assets/mha.png'
import naruto from '../assets/naurto.jpeg'
import tutu from '../assets/princesstutu.jpg'
import sailor from '../assets/sailor-moon-anime.jpeg'

export default {
  components: { AnimeCard },
  data() {
    return {
      animes: [
        { title: 'Attack on Titan', 
          img: aot, 
          desc: 'A dark, intense story of humanity fighting for survival behind massive walls as giant humanoid Titans threaten to destroy the last of civilization.' },
        { title: 'Demon Slayer', 
          img: demon, 
          desc: 'Tanjiro Kamado becomes a demon slayer after his family is slaughtered and his sister is turned into a demon, seeking a cure and justice.' },
        { title: 'My Hero Academia', 
          img: mha, 
          desc: 'In a world where almost everyone has superpowers, Izuku Midoriya dreams of becoming a hero despite being born powerless.' },
        { title: 'Naruto', 
          img: naruto, 
          desc: 'Naruto Uzumaki is a young ninja who dreams of becoming the strongest leader of his village while struggling to be accepted by others.' },
        { title: 'Princess Tutu', 
          img: tutu, 
          desc: 'A magical girl fairy tale about a duck who transforms into a ballerina to restore broken hearts through dance, music, and storytelling.' },
        { title: 'Sailor Moon', 
          img: sailor, 
          desc: 'Usagi Tsukino discovers she is Sailor Moon, a guardian destined to protect Earth while learning about love, friendship, and destiny.' }
      ]
    }
  }
}
</script>
