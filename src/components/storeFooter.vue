<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__first">
        <div class="header__one__picture">
          <router-link to="/">
            <v-img
                class="header__one__picture-img"
                src="fruit_logo.png"
            ></v-img>
          </router-link>
        </div>
        <div class="footer__links">
          <div class="footer__links-banner"><p>Follow Us</p></div>
          <div class="footer__links__social">

            <a href="https://twitter.com/twitter"><i class="fab fa-twitter"></i></a>
            <a href=" https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
          </div>
          <div class="footer__links__payment">
            <a href="https://www.visa.com.ru/"><i class="fab fa-cc-visa"></i></a>
            <a href="https://www.mastercard.us/en-us.html"><i class="fab fa-cc-mastercard"></i></a>
          </div>
        </div>
      </div>
      <div class="footer__second">
        <a href="tel:Phone: ORANGE(880000000)">tel:Phone: ORANGE(880000000)</a>
        <span>Email: mail@wbcplace.ru</span>
      </div>
      <div class="footer__third">
        <div class="footer__links-banner"><p>Information</p></div>
        <router-link  to="/delivery" exact>Delivery</router-link>
        <router-link to="/loyalty" exact>Loyalty</router-link>
      </div>
      <div class="footer__third">
        <div class="footer__links-banner"><p>Customer Service</p></div>
        <router-link to="/new">New products</router-link>
      </div>
      <div class="footer__third">
        <div class="footer__links-banner"><p>My Account</p></div>
        <router-link to="/address">Address</router-link>
      </div>
    </div>

    <div class="catalog__divider">
      <v-divider></v-divider>
    </div>
    <div class="footer-all_rights">
      <p>Copyright © 2021 Orange. All rights reserved.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "storeFooter",
  data: () => ({}),
  components: {}
}
</script>
<style scoped></style>