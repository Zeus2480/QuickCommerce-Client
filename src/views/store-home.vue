<template>
    <div>
        <home-slider></home-slider>
        <ShopByCAtegory></ShopByCAtegory>
        <ProductCategoryGrid></ProductCategoryGrid>
    </div>
</template>
<script>
import HomeSlider from "../common/Home/home-slider.vue";
import ShopByCAtegory from "../components/store-home/home-shopbycategory.vue"
import ProductCategoryGrid from "../components/store-home/home-product-grid";
export default {
    components:{
        HomeSlider,
        ShopByCAtegory,
        ProductCategoryGrid,
    }
    
}
</script>