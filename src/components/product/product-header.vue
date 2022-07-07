<template>
   <div class="">
      <v-row>
         <v-col cols="4">
            <v-sheet outlined>
               <div class="tw-p-4">
                  <v-img
                     contain
                     height="300"
                     src="../../assets/images/ProductBanner.svg"
                  ></v-img>
               </div>
            </v-sheet>
         </v-col>
         <v-col cols="8">
            <div class="tw-p-6 tw-pr-16">
               <h1 class="tw-text-4xl tw-font-medium tw-mb-4">
                  Fundaments of applied Statistics
               </h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus optio iure repudiandae impedit laborum eos nisi,
                  voluptate possimus dolorum ipsam facilis cum amet sint ut sunt
                  alias provident omnis nostrum!
               </p>
               <div class="tw-flex">
                  <h3 class="tw-text-3xl tw-font-medium">₹1000</h3>
                  <h3 class="tw-mx-6 tw-line-through tw-opacity-80 tw-my-auto">
                     ₹1500
                  </h3>
                  <h3 class="tw-text-lime-600 tw-my-auto">15% off</h3>
               </div>
               <div>
                  <h3>Delivery fee ₹50</h3>
               </div>
               <div class="tw-my-4">
                  <v-btn depressed color="yellow darken-2">
                     <v-icon> mdi-cart </v-icon>
                     Add to Cart
                  </v-btn>
               </div>
            </div>
         </v-col>
      </v-row>
   </div>
</template>
