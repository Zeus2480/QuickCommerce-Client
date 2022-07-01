<template>
   <div>
      <v-sheet class="mx-auto"  >
         <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
         >
            <v-slide-item v-for="n in 10" :key="n" v-slot="{ active, toggle }">
               <v-card
                  :color="active ? undefined : 'grey lighten-1'"
                  class="ma-4"
                  height="120"
                  width="120"
                  @click="toggle"
               >
                  <v-row class="fill-height" align="center" justify="center">
                     <v-scale-transition>
                        <v-icon
                           v-if="active"
                           color="white"
                           size="48"
                           v-text="'mdi-close-circle-outline'"
                        ></v-icon>
                     </v-scale-transition>
                  </v-row>
               </v-card>
            </v-slide-item>
         </v-slide-group>
      </v-sheet>
   </div>
</template>
<style scoped>
.v-application .pa-4{
    padding: 0 !important;
}
</style>
