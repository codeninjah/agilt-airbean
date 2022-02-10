<template>
    <div class="wrapper">
        <p class="menu-btn" @click="toMenuView"><img :src="menuBtnImg"></p>
        <p class="cart-btn"><img :src="cartMenuImg"></p>
    </div>
</template>



<script>
export default{

    data() {return{
        menuBtnImg: require('@/assets/graphics/navicon.svg'),
        cartMenuImg: require('@/assets/graphics/bag.svg'),
    }},

    methods: {
        toMenuView(){
            this.$router.push('/')
        }
    }

}

</script>


<style>
    .wrapper {
        background-image: url('~@/assets/graphics/graphics-header.svg');
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid black;
    }

    .menu-btn {
        height: 80px;
        width: 80px;
        background-color: white;
        margin-left: 10px;
        text-align: center;
        border: 1px solid black;
        border-radius: 50%;
    }

    .menu-btn img{
        width: 50px;
        height: 50px;
        padding: 15px;
    }

    .cart-btn {
        height: 80px;
        width: 80px;
        margin-right: 10px;
        background-color: black;
        text-align: center;
        border-radius: 50%;
    }

    .cart-btn img{
        width: 60px;
        height: 60px;
        margin-top: 10px; 
    }

</style>