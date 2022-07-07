<template>
   <div class="tw-my-6">
      <v-row>
         <v-col cols="4">
            <v-img
               src="../../assets/images/ProductBanner.svg"
               contain
               height="130"
            ></v-img>
         </v-col>
         <v-col cols="8">
            <div class="tw-flex tw-flex-col">
               <h2 class="tw-text-lg tw-font-medium tw-line-clamp-2">
                  Fundamentals of applied Statistics
               </h2>
               <div class="tw-flex">
                  <p class="tw-font-medium tw-text-lg">₹ 1000</p>
                  <p class="tw-mx-3 tw-line-through tw-opacity-75">₹ 1500</p>
                  <p class="tw-text-lime-600">34% off</p>
               </div>
               <div>
                  <v-btn-toggle small v-model="toggle_exclusive" rounded>
                     <v-btn  color="black" small>
                        <v-icon small color="white">mdi-minus</v-icon>
                     </v-btn>
                     <v-card class="tw-mx-2" flat><p>12</p></v-card>
                     <v-btn small color="black">
                        <v-icon small color="white">mdi-plus</v-icon>
                     </v-btn>
                    
                  </v-btn-toggle>
               </div>
            </div>
         </v-col>
      </v-row>
   </div>
</template>
<script>
export default {
    data() {
        return {
            toggle_exclusive: false,
        };
    },
   methods: {
      
   },
   watch:{
    toggle_exclusive(val){
        console.log(val);
    }
     
   }
    
}
</script>
<style scoped>
.toggle_exclusive{
    padding: 0 !important;
}
</style>
