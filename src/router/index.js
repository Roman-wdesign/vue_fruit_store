import Vue from 'vue'
import VueRouter from 'vue-router'

import storeMain from "../components/storeMain";
import storeCatalog from "../components/storeCatalog";
import storeDelivery from "../components/storeDelivery";
import storeFooter from "../components/storeFooter";
import storeHeader from "../components/storeHeader";
import storeLoyalty from "../components/storeLoyalty";
import storeNew from "../components/storeNew";
import storeError from "../components/storeError";
import storeAddress from "../components/storeAddress";

import storeFruits from "../components/categories/storeFruits";
import storeExotic from "../components/categories/storeExotic";
import storeDried from "../components/categories/storeDried";
import storeNuts from "../components/categories/storeNuts";

Vue.use(VueRouter)

const routes = [
    {
        path: "/page-not-found",
        alias: '*',
        component: storeError,
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
    },
    {
        path: '/address',
        name: 'storeAddress',
        component:storeAddress
    },
    {
        path: '/fruits',
        name: 'storeFruits',
        component:storeFruits
    },
    {
        path: '/exotic',
        name: 'storeExotic',
        component:storeExotic
    },
    {
        path: '/dried',
        name: 'storeDried',
        component:storeDried
    },
    {
        path: '/dried',
        name: 'storeDried',
        component:storeDried
    },
    {
        path: '/nuts',
        name: 'storeNuts',
        component:storeNuts
    }
]

const router = new VueRouter({
    routes,
    mode: "history",

})

export default router
