import Vue from 'vue'
import VueRouter from 'vue-router'
import storeMain from "@/components/storeMain";
import storeCatalog from "@/components/storeCatalog";

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: storeMain
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: storeCatalog
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
