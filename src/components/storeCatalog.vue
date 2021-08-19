<template>
  <div class="catalog">

    <v-carousel v-model="model"
                style="max-height: 450px"
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
          <p class="catalog__text-p">{{ image.text }}</p>
        </div>
      </v-carousel-item>
    </v-carousel>

    <div class="catalog__divider">
      <h3 class="catalog__divider__line"><span>Select The Category</span></h3>
    </div>

    <div class="catalog__category">
      <div class="catalog__category_button">
        <v-btn class="catalog__category_button_btn" large>
          <v-img

              height="25"
              width="25"
              src="img/buttons_img/pineapple.png"
          ></v-img>
          <p>Fruits</p></v-btn>
      </div>

      <div class="catalog__category_button">
        <v-btn class="catalog__category_button_btn" large>
          <v-img

              height="25"
              width="25"
              src="img/buttons_img/almond.png"
          ></v-img>
          <p>Dried</p></v-btn>
      </div>

      <div class="catalog__category_button">
        <v-btn class="catalog__category_button_btn" large>
          <v-img

              height="25"
              width="25"
              src="img/buttons_img/cherry.png"
          ></v-img>
          <p>Fresh</p></v-btn>
      </div>

      <div class="catalog__category_button">
        <v-btn class="catalog__category_button_btn" large>
          <v-img

              height="25"
              width="25"
              src="img/buttons_img/sapodilla.png"
          ></v-img>
          <p>Exotic</p></v-btn>
      </div>

      <div class="catalog__category_button">
        <v-btn class="catalog__category_button_btn" large>
          <v-img

              height="25"
              width="25"
              src="img/buttons_img/cashew.png"
          ></v-img>
          <p>Nuts</p></v-btn>
      </div>
    </div>

    <div class="catalog__divider">
      <h3 class="catalog__divider__line"><span>Best Sellers</span></h3>
    </div>

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
    <div class="catalog__parallax">
      <v-parallax
          src="img/top-fresh-mandarines.jpg"
          height="700"
      >
        <v-row
            align="center"
            justify="center"
        >
          <v-col
              class="text-sm-left ml-16"
              cols="12"
              style="color: #363636"
          >
            <h3 class="text-h4 mb-4" >
              Why choose us
            </h3>
            <p>
              Orange is a one-stop grocery shopping store in Europe,
            </p>
            <p> bringing all your shopping needs right to your fingertips and aims to redefine your online shopping experience.</p>
            <p> Order Fresh  Fruits, Dry Food, Exotic, Nuts at the best prices & get it delivered to your doorstep.</p>
          </v-col>
        </v-row>
      </v-parallax>
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
        text: 'Gift Baskets!'
      },
      {
        url: '../img/assortment-citruses-pink-table .jpg',
        text: 'Wow Sale!'
      },
      {
        url: '../img/slices-assorted-fruits .jpg',
        text: 'Only Natural!'
      },
      {
        url: '../img/mixed-fruits-with-apple-banana-orange-other .jpg',
        text: 'A Wide Range!'
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