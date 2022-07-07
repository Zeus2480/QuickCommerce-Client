<template>
   <div class="tw-my-6">
      <h2 class="tw-text-2xl tw-font-medium">More from Books</h2>
      <div class="tw-my-6">
         <v-row>
            <v-col cols="3"><ProductCard /></v-col>
            <v-col cols="3"><ProductCard /></v-col>
            <v-col cols="3"><ProductCard /></v-col>
            <v-col cols="3"><ProductCard /></v-col>
            <v-col cols="3"><ProductCard /></v-col>
            <v-col cols="3"><ProductCard /></v-col>
            <v-col cols="3"><ProductCard /></v-col>
            <v-col cols="3"><ProductCard /></v-col>
            <v-col cols="3"><ProductCard /></v-col>
            <v-col cols="3"><ProductCard /></v-col>
            <v-col cols="3"><ProductCard /></v-col>
            <v-col cols="3"><ProductCard /></v-col>
            <v-col cols="3"><ProductCard /></v-col>
         </v-row>
      </div>
   </div>
</template>
<script>
import ProductCard from "../../common/Cards/home-product-card.vue";
export default {
   components: {
      ProductCard,
   },
};
</script>
