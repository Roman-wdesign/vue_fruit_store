<template>
  <v-app>
    <store-header/>
    <store-catalog/>
    <store-footer/>
    <v-main>

    </v-main>
  </v-app>
</template>

<script>

import StoreCatalog from "@/components/storeCatalog";
import StoreHeader from "@/components/storeHeader";
import StoreFooter from "@/components/storeFooter";

export default {
  name: 'App',
  components: {StoreFooter, StoreHeader, StoreCatalog},
  data: () => ({
    //
  }),
};
</script>
