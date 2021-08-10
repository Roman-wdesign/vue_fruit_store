<template>
  <div class="loyalty">
    <store-header/>
    <div class="loyalty_container">
      <div class="catalog__divider">
        <h3 class="catalog__divider__line"><span>Loyalty Program</span></h3>
      </div>
      <div class="delivery__content_order">
        <p>We provide a loyalty program based on a reward system. Customers will earn 1 reward point for every 5.00 USD
          spent at our store. 1 reward point = 0.1 USD. Rewards will not be calculated on tax and shipping costs. We
          offer 200 welcome reward points (a total value of USD 20.00) for registration on The Orange, and these welcome
          reward points are valid for 1 year. Customers can redeem the rewards against a maximum of 100% of the order
          value. Discount redemption will apply on order total.</p>
        <p>Exchange rate: 1 reward point = 0.10 USD</p>
        <p>Minimum required reward points to use: 500</p>
        <p>Maximum reward points to use per order: 0 (no limit)</p>
      </div>
    </div>
    <store-footer/>
  </div>
</template>

<script>
import StoreFooter from "@/components/storeFooter";
import StoreHeader from "@/components/storeHeader";

export default {
  name: "storeLoyalty",
  components: {StoreFooter, StoreHeader}
}
</script>

<style scoped>

</style>