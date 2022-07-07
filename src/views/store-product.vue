<template>
    <div class="tw-p-4 tw-px-8">
        <product-header></product-header>
        <more-products></more-products>
    </div>
</template>
<script>
import ProductHeader from "../components/product/product-header.vue";
import MoreProducts from "../components/product/product-more-products.vue";
export default {
    components:{
        ProductHeader,
        MoreProducts,
    }
}
</script>