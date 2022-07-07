<template>
   <div class="tw-px-6">
      <v-container fluid>
        <h1 class="tw-text-xl tw-font-medium tw--mx-3 tw-mb-6">Browse Products</h1>
         <v-row>
            <v-col cols="3"><ProductCard/></v-col>
            <v-col cols="3"><ProductCard/></v-col>
            <v-col cols="3"><ProductCard/></v-col>
            <v-col cols="3"><ProductCard/></v-col>
            <v-col cols="3"><ProductCard/></v-col>
            <v-col cols="3"><ProductCard/></v-col>
            <v-col cols="3"><ProductCard/></v-col>
            <v-col cols="3"><ProductCard/></v-col>
            <v-col cols="3"><ProductCard/></v-col>
            <v-col cols="3"><ProductCard/></v-col>
            <v-col cols="3"><ProductCard/></v-col>
            <v-col cols="3"><ProductCard/></v-col>
            <v-col cols="3"><ProductCard/></v-col>
           
         </v-row>
      </v-container>
   </div>
</template>
<script>
import ProductCard from "../../common/Cards/home-product-card.vue";
export default {
    components:{
        ProductCard,
    }
}
</script>
