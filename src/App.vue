<template>
  <v-app>
    <router-link to="/main">Home page</router-link>
    <router-link to="/catalog">Catalog</router-link>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  }),
};
</script>
