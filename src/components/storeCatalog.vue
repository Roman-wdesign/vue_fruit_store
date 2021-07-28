<template>
  <div class="catalog">

    <v-carousel v-model="model"
                cycle
                hide-delimiter-background
                show-arrows-on-hover
    >
      <v-carousel-item

          v-for="(image, i) in images"
          :key="i"
          :src="image.url"
          :text="image.text"
      >
        <div class="catalog__text-h2">
           {{image.text}}
        </div>
      </v-carousel-item>
    </v-carousel>

    <div class="catalog__container_currency">

      <StoreCatalogItem
          v-for="(item, id) in PRODUCTS"
          :key="id"
          :name="item.name"
          :product_url="item.product_url"
          :fruit_data="item"
      />
    </div>
    <div class="text-center">
      <v-pagination
          v-model="page"
          :length="9"
      ></v-pagination>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex"
import StoreCatalogItem from "@/components/storeCatalogItem";

export default {

  name: "storeCatalog",

  components: {StoreCatalogItem},

  data: () => ({
    page: 99,
    model: 0,
    images: [
      {
        url: '../img/fresh-organic-farm-fruits-pears-quince-top-view .jpg',
        text:'Gift Baskets!'
      },
      {
        url: '../img/assortment-citruses-pink-table .jpg',
        text:'Wow Sale!'
      },
      {
        url: '../img/slices-assorted-fruits .jpg',
        text:'Only fresh!'
      },
      {
        url: '../img/mixed-fruits-with-apple-banana-orange-other .jpg',
        text: 'A wide range!'
      },
    ],
  }),

  computed: {
    ...mapGetters(["PRODUCTS"])
  },

  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },

  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },

}
</script>

<style scoped>

</style>