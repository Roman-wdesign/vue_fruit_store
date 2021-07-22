<template>
<div class="catalogItem">
<div class="catalogItem-card">
  <p>{{fruit_data.name}}</p>
</div>
</div>
</template>

<script>
export default {
  name: "storeCatalogItem",
  data: () => ({

  }),
  props: {
    fruit_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }

}
</script>

<style scoped>

</style>