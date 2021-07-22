<template>
<div class="catalog">
  <h2>Catalog page</h2>
  <StoreCatalogItem
      v-for="(item, id) in PRODUCTS"
      :key="id"
      :name="item.name"
      :fruit_data="item"
  />
</div>
</template>

<script>

import {mapActions, mapGetters} from "vuex"
import StoreCatalogItem from "@/components/storeCatalogItem";

export default {

  name: "storeCatalog",

  components: {StoreCatalogItem},

  data: () => ({}),

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