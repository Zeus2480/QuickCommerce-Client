<template>
   <div>
      <v-row>
         <v-col cols="8"><AddressForm /></v-col>
         <v-divider vertical></v-divider>
         <v-col cols="4"><your-order></your-order></v-col>
      </v-row>
   </div>
</template>
<script>
import AddressForm from "../components/shopping-cart/address-from.vue";
import YourOrder from "../components/shopping-cart/your-order.vue";
export default {
   components: {
      AddressForm,
        YourOrder,
   },
};
</script>
