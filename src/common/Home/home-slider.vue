<template>
   <v-carousel hide-delimiters cycle height="300">
      <div class="tw-h-full">
         <home-slider-image :items="items">
         </home-slider-image>
      </div>
   </v-carousel>
</template>
<script>
import HomeSliderImage from "./home-slider-images.vue";
export default {
    components:{
        HomeSliderImage,
    },
   data() {
      return {
         items: [
            {
               src: "https://i.ibb.co/cX3w96M/Frame-1428.png",
            },
            {
               src: "https://i.ibb.co/YNLHKvz/Frame-1423-1.png",
            },
            {
               src: "https://i.ibb.co/kqL5PgJ/Frame-1427-1.png",
            },
            {
               src: "hthttps://i.ibb.co/qrJzpGL/Frame-1429.png",
            },
            {
               src: "hthttps://i.ibb.co/qrJzpGL/Frame-1429.png",
            },
         ],
      };
   },
};
</script>
