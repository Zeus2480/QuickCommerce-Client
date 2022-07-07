<template>
   <div class="tw-p-4 tw-py-6">
      <div class="tw-mb-2">
         <h2 class="tw-text-2xl tw-font-medium">Your Orders</h2>
      </div>
      <div class="tw-mt-2">
         <your-orders-card></your-orders-card>
         <your-orders-card></your-orders-card>
      </div>
      <div>
        <bill-card></bill-card>
      </div>
      <div class="tw-my-6">
        <v-btn dark block >Place order</v-btn>
      </div>
   </div>
</template>
<script>
import YourOrdersCard from "../../common/Cards/your-orders-card.vue";
import BillCard from "./bill-card.vue";
export default {
   components: {
      YourOrdersCard,
      BillCard,
   },
};
</script>
