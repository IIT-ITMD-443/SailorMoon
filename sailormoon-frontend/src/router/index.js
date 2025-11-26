import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AnimeView from '../views/AnimeView.vue';
import CharactersView from '../views/CharactersView.vue';

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/animes',
    component: AnimeView
  },
  {
    path: '/characters',
    component: CharactersView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;