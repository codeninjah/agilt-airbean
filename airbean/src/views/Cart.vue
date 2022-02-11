<template>
    <div>
        <h1>Din beställning</h1>
        <ul>
            <li v-for="item in cart" :key="item.id">
                {{ item.title }}
            </li>
        </ul>
        <button @click="attToOrderHistory">Take my money!</button>
    </div>
</template>


<script>
    export default{
        methods: {
            attToOrderHistory(){
                const thisItem = this.$store.state.currentOrder
                this.$store.dispatch('order', thisItem)
                console.log("The order is: ") //Test
                this.$router.push('/profile')
            }
        },
        computed: {
            cart(){
                return this.$store.state.currentOrder
            }
        }
    }

</script>


<style scoped>

button {
    background-color: #2F2926;
    color: #FFFFFF;
    width: 280px;
    height: 80px;
    border-radius: 50px;
    font-size: 24px;
    margin-left: 20px;
}

button:hover {
    cursor: pointer;
}

</style>
