<template>
    <CheckoutResume :itemsprice="itemsprice"
                    :shippingprice="shippingprice"/>
</template>

<script>
import CheckoutResume from '@/components/CheckoutResume.vue'

export default{
    name: 'ShoppingCart',
    components: {
        CheckoutResume
    },
    data() {
        return {
            itemsprice: 32.54,
            shippingprice: 5.23,
        }
    }
}

</script>