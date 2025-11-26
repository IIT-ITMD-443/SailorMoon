<template>
  <div class="container mt-5">
    <h1>Sailor Guardians</h1>

    <div class="row g-3">
      <div class="col-md-6" v-for="g in guardians" :key="g.name">
        <div class="card p-3">
          <h3>{{ g.name }}</h3>
          <p>{{ g.power }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guardians: [
        { name: 'Sailor Moon', power: 'Love and Justice' },
        { name: 'Sailor Mercury', power: 'Water and Wisdom' },
        { name: 'Sailor Mars', power: 'Fire and Spirit' },
        { name: 'Sailor Jupiter', power: 'Thunder and Strength' },
        { name: 'Sailor Venus', power: 'Light and Beauty' }
      ]
    };
  }
};
</script>