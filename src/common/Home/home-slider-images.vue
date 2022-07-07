<template>
   <div>
      <v-carousel-item        
      >
           
         <div class="tw-flex">
            <div class="tw-w-1/3"><v-img :src="items[0].src"></v-img></div>
            <div class="tw-w-1/3"><v-img :src="items[1].src"></v-img></div>
            <div class="tw-w-1/3"><v-img :src="items[2].src"></v-img></div>
         </div>
      </v-carousel-item>
      <v-carousel-item        
      >
           
         <div class="tw-flex">
            <div class="tw-w-1/3"><v-img :src="items[4].src"></v-img></div>
            <div class="tw-w-1/3"><v-img :src="items[1].src"></v-img></div>
            <div class="tw-w-1/3"><v-img :src="items[3].src"></v-img></div>
         </div>
      </v-carousel-item>
   </div>
</template>
<script>
export default {
   props: {
      items: {
         type: Array,
         required: true,
      },
   },
};
</script>
