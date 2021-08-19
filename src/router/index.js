import Vue from 'vue'
import VueRouter from 'vue-router'
import storeMain from "@/components/storeMain";
import storeCatalog from "@/components/storeCatalog";
import storeDelivery from "@/components/storeDelivery";
import storeFooter from "@/components/storeFooter";
import storeHeader from "@/components/storeHeader";
import storeLoyalty from "@/components/storeLoyalty";
import storeNew from "@/components/storeNew";
import storeError from "../components/storeError";

Vue.use(VueRouter)

const routes = [
  {
    path: "/page-not-found",
    alias: '*',
    component:storeError,
  },
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
    path: '/loyalty',
    name: 'Loyalty',
    component: storeLoyalty
  },
  {
    path: '/new',
    name: 'New',
    component: storeNew
  },
  {
    path: '/about',
    name: 'About',

  }
]

const router = new VueRouter({
  routes
})

export default router
