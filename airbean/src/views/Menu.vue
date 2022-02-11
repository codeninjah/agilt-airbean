<template>
    <div>
        <Header/>
        <ul> 
            <li  v-for="item in items" :key="item.id"> <img :src="addBtnImg" @click="addToCart">
                <div class="name-price"><p class="name">{{item.title}}</p> 
                    <p class="description">{{item.desc}}</p>
                </div>
                <p class="price">{{item.price}} kr</p>
            </li>
        </ul>
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
        addedItem: {
            title: "Alex"
        }
    }},

    methods: {
        addToCart(){
            console.log("Works!")
            this.$store.dispatch('current', this.addedItem)
        }
    }
}
</script>

<style scoped>

.name-price {
    display: flex;
    flex-direction: column;
}

.name {
    font-size: 30px;
    margin: 0px;
}

.price {
    font-size: 30px;
    margin: auto 1rem auto auto;
}


.description {
    padding: 0px;
    margin: 0px;
}

div {
    background-color: #F3E4E1;
}

li {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
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


</style>