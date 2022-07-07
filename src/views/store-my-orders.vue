<template>
   <div class="tw-p-4">
      <h1 class="tw-text-3xl tw-font-medium">My Orders</h1>
      <div class="tw-my-10">
         <v-row>
            <v-expansion-panels accordion>
               <v-expansion-panel v-for="(item, i) in 5" :key="i">
                  <v-expansion-panel-header>
                     <div>
                        <v-row>
                           <v-col cols="2">
                              <v-img
                                 src="../assets/images/ProductBanner.svg"
                                 height="80"
                                 contain
                              >
                              </v-img>
                           </v-col>
                           <v-col cols="6">
                              <h3
                                 class="tw-line-clamp-2  tw-text-lg tw-font-medium"
                              >
                                 Fundamentals of applied Statistics
                              </h3>
                           </v-col>
                           <v-col cols="2"> <h1>₹ 1000</h1></v-col>
                           <v-col cols="2">
                              <v-btn  color="amber accent-2">
                                 Processing
                              </v-btn>
                           </v-col>
                        </v-row>
                     </div></v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    <v-row>
                        <v-col cols="2"></v-col>
                        <v-col cols="6">
                            <v-timeline dense clipped>
                                <v-timeline-item small >Processing</v-timeline-item>
                                <v-timeline-item small>Packed</v-timeline-item>
                                <v-timeline-item small>Out for delivery</v-timeline-item>
                                <v-timeline-item small color="grey" >Delivered</v-timeline-item>
                            </v-timeline>
                        </v-col>
                    </v-row>
                  </v-expansion-panel-content>
               </v-expansion-panel>
            </v-expansion-panels>
         </v-row>
      </div>
   </div>
</template>
