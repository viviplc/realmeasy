<template>
    <div class="resume-container">
        <button>Proceed to Checkout</button>
        <h1>Order summary</h1>
        <div class="group-prices">
            <div class="prices-labels">
                <h2>Items</h2>
                <h2>Shipping & Handling</h2>
            </div>
            <div class="prices-values">
                <h2>$ {{ itemsprice }}</h2>
                <h2>$ {{ shippingprice }}</h2>
            </div>
        </div>
        <div class="group-prices">
            <div class="prices-labels">
                <h2>Total before tax</h2>
                <h2>Estimated GST/HST</h2>
                <h2>Estimated PST/RST/QST</h2>
            </div>
            <div class="prices-values">
                <h2>$ {{ totalbeforetax }}</h2>
                <h2>$ {{ gsthst }}</h2>
                <h2>$ {{ pstrstqst }}</h2>
            </div>
        </div>
        <div class="group-prices">
            <div class="prices-labels">
                <h3>Order Total</h3>
            </div>
            <div class="prices-values">
                <h3>$ {{ totalprice }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        itemsprice: {
            type: Number,
            required: true
        },
        shippingprice: {
            type: Number,
            required: true
        }
    },
    computed: {
        totalbeforetax() {
            var num= this.itemsprice + this.shippingprice;
            return num.toFixed(2);
        },
        gsthst() {
            var num= this.totalbeforetax * 0.13;
            return num.toFixed(2);
        },
        pstrstqst() {
            return 0.0;
        },
        totalprice () {
            var num=  parseFloat(this.itemsprice) + 
            parseFloat(this.totalbeforetax) + 
            parseFloat(this.gsthst) + 
            parseFloat(this.pstrstqst);
            return num.toFixed(2);
        },
    }
}

</script>


<style scoped>

.resume-container{
    width: fit-content;
    padding: 22px;
    justify-content: center;
    background-color: #fff; 
    border-radius: 15px;
    margin: 23px;
    padding-bottom: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.resume-container button{
    font-size: 20px;
    background-color: #23B1BB;
    border-radius: 15px;
    width: 322px;
    height: 62px;
    border-color: transparent;
    color: #EFF0F4;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.resume-container h1{
    padding: 35px 0px;
    font-size: 25px;
    font-weight: bold;
    color: black;
}

.resume-container h2{
    font-size: 21px;
    color: black;
}

.resume-container h3{
    font-size: 23px;
    color: #23B1BB;
    font-weight: bold;
}

.group-prices{
    display: flex;
    justify-content: space-between;
    padding-bottom: 35px;
}

</style>