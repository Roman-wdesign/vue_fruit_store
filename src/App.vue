<template>

    <v-app>
      <store-header/>
      <v-main>
              <transition name="fade">
        <router-view/>
              </transition>
      </v-main>
      <store-footer/>
    </v-app>

</template>
<script>

import StoreHeader from "./components/storeHeader";
import StoreFooter from "./components/storeFooter";
export default {
  name: 'App',
  components: {StoreFooter, StoreHeader},
  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
