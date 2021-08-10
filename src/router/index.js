import Vue from 'vue'
import VueRouter from 'vue-router'
import storeMain from "@/components/storeMain";
import storeCatalog from "@/components/storeCatalog";
import storeDelivery from "@/components/storeDelivery";
import storeFooter from "@/components/storeFooter";
import storeHeader from "@/components/storeHeader";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: storeMain
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: storeCatalog
  },
  {
    path: '/header',
    name: 'Header',
    component: storeHeader
  },
  {
    path: '/footer',
    name: 'Footer',
    component: storeFooter,
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: storeDelivery
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
