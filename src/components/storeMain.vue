<template>
  <div class="main">

      <store-header/>
      <store-catalog/>
      <store-footer/>

  </div>
</template>

<script>
import StoreHeader from "@/components/storeHeader";
import StoreCatalog from "@/components/storeCatalog";
import StoreFooter from "@/components/storeFooter";

export default {
  name: "storeMain",
  components: {StoreFooter, StoreCatalog, StoreHeader}
}
</script>

<style scoped>

</style>