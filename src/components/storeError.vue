<template>
  <div class="page_error">
    <div class="page_error_img">
      <v-img
          src="img/404.jpg"
      ></v-img>
    </div>
    <div class="page_error_header">
      <h2>Page not found</h2>
    </div>

    <div class="page_error_text">
      <div class="header__one__picture">
        <div class="footer__third">

          <router-link to="/">
            <v-btn
                depressed
                color="#42d58e"
            >go home
            </v-btn>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "storeError"
}
</script>

<style scoped>

</style>