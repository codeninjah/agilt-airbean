<template>
    <div>
        <h1>Test</h1>
        <ul>
            <li v-for="item in cart" :key="item.id">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>


<script>
    export default{
        computed: {
            cart(){
                return this.$store.state.currentOrder
            }
        }
    }

</script>


<style scoped>

</style>
