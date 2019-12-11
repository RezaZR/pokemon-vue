import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/details/:name",
    name: "details",
    component: () =>
      import(/* webpackChunkName: "details" */ "@/views/PokemonDetails"),
    props: true
  },
  {
    path: "/my_pokemon",
    name: "my_pokemon",
    component: () =>
      import(/* webpackChunkName: "my_pokemon" */ "@/views/MyPokemon")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
