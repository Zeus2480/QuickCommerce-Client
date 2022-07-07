<template>
   <div>
      <h2 class="tw-text-lg tw-font-medium tw-mb-4"></h2>
      <v-card color="" flat>
         <div class="tw-rounded-lg">
            <div class="bg-color-dark tw-rounded tw-p-4 ">
               <v-row>
                  <v-col cols="7"><h2 class="tw-font-medium tw-text-lg">Product</h2></v-col>
                  <v-col cols="2">Qty. </v-col>
                  <v-col cols="3">Total</v-col>
               </v-row>
            </div>
            <div class="bg-color-light tw-rounded">
               <div>
                  <bill-card-list></bill-card-list>
                  <bill-card-list></bill-card-list>
                  <bill-card-list></bill-card-list>
               </div>
               <div
                  class="tw-border-t-2 tw-border-solid tw-flex tw-flex-row-reverse tw-py-2 tw-border-gray-400 tw-mx-4"
               >
                  <h2 class="tw-text-lg tw-font-medium"><span>Total </span>₹ 1000</h2>
               </div>
            </div>
         </div>
      </v-card>
   </div>
</template>
<script>
import BillCardList from "./bill-card-list.vue";
export default {
   components: {
      BillCardList,
   },
};
</script>
<style scoped>
.bg-color-dark {
   background-color: #cccccc;
}
.bg-color-light {
   background-color: #eee;
}
</style>
