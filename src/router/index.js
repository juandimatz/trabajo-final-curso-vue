import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About';
import Formulario from '../views/Formulario';
import CovidInfo from '../views/CovidInfo';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: Formulario
  },
  {
    path: '/covidInfo',
    name: 'CovidInfo',
    component: CovidInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
