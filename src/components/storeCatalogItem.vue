<template>
  <div class="catalogItem">

    <div class="catalogItem-card">
      <v-hover
          v-slot="{ hover }">
        <v-card
            :elevation="hover ? 12 : 2"
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
          </template>
          <v-img
              height="150"
              v-if="fruit_data.name === 'Bananas'"
              :src="'https://api.predic8.de/shop/products/3/photo'"
          ></v-img>
          <v-img
              height="150"
              v-else-if="fruit_data.name === 'Oranges'"
              :src="'https://api.predic8.de/shop/products/10/photo'"
          ></v-img>
          <v-img
              height="150"
              v-else-if="fruit_data.name === 'Pineapples'"
              :src="'https://api.predic8.de/shop/products/33/photo'"
          ></v-img>
          <v-img
              height="150"
              v-else-if="fruit_data.name === 'Dried Pineapples'"
              :src="'https://api.predic8.de/shop/products/42/photo'"
          ></v-img>
          <v-img
              height="150"
              v-else-if="fruit_data.name === 'Cranberries'"
              :src="'https://api.predic8.de/shop/products/57/photo'"
          ></v-img>
          <v-card-title><p>{{ fruit_data.name }}</p></v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-rating
                  :value="4.5"
                  color="green accent-4"
                  dense
                  half-increments
                  readonly
                  size="14"

              ></v-rating>

              <div class="grey--text ms-4">
                4.5 (413)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              <strong>Price</strong>
              <p>${{ fruit_data.product_url.price }}</p>
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
            >
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
    </div>

  </div>
</template>

<script>
export default {
  name: "storeCatalogItem",
  data: () => ({
    loading: false,
    selection: 1,
  }),
  props: {
    fruit_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false))
    },
    randomVal() {
      this.random = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    }
  },

}
</script>

<style scoped>

</style>