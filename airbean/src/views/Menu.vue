<template>
    <div class="menu-view">
        <Header/>
        <h1>Meny</h1>
        <ul> 
            <li  v-for="item in items" :key="item.id"> 
                <img :src="addBtnImg" @click="addToCart(item.id)">
                <div class="name-price">
                    <p class="name"><strong>{{item.title}}</strong></p> 
                    <p class="description">{{item.desc}}</p>
                </div>
                <p class="price"><strong>{{item.price}} kr</strong></p>
            </li>
        </ul>
        <footer></footer>
    </div>
</template>


<script>
import menu from '@/assets/data/menu.json';
import Header from '@/components/Header.vue';

export default {
    components: { Header },

    data(){return{
        items: menu.menu,
        addBtnImg: require('@/assets/graphics/add.svg'),
    }},

    methods: {
        addToCart(itemId){
            const thisItem = this.items.find(item => item.id == itemId)

            /* if(thisItem.length >= 1){
                this.item.amount =+ 1 
            }
            else{
                this.item.amount += 1
            } */

            this.$store.dispatch('current', thisItem)
        }
    }
}
</script>

<style scoped>
.menu-view{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1{
    font-family: 'PT Serif', serif;
    font-size: 3rem;
    margin-bottom: 1rem;
}
ul{
    margin: 0;
    padding: 0;
    width: 90%;
}
.name-price {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
}

.name {
    font-size: 24px;
    margin: 0px;
}

.price {
    font-size: 24px;
    margin: auto .5rem auto auto;
}


.description {
    padding: 0px;
    margin: 0px;
    font-size: 12px;
}

div {
    background-color: #F3E4E1;
}

li {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
}

li p {
    font-family: arial;
    font-weight: 500;
}


li img {
    background-color: black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 10px solid black;
}

img:hover{
    cursor: pointer;
}
footer{
    background-image: url('../assets/graphics/graphics-footer.svg');
    width: 100%;
    height: 4rem;
    margin: auto auto 0 auto;
}

</style>