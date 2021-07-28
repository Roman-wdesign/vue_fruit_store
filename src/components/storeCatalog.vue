<template>
<div class="catalog">
  <h2>Catalog page</h2>
  <v-carousel v-model="model">
    <v-carousel-item
        v-for="(color, i) in colors"
        :key="color"
    >
      <v-sheet
          :color="color"
          height="100%"
          tile
      >
        <v-row
            class="fill-height"
            align="center"
            justify="center"
        >
          <div class="text-h2">
            Slide {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
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
    page:99,
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),

  computed:{
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