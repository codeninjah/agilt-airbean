<template>
    <div>
        <Header/>
        <ul v-for="item in items" :key="item.id"> 
            <li> <img :src="addBtnImg">
                <div class="name-price"><p class="name">{{item.title}}</p> 
                <p class="price">{{item.price}} kr</p>
                </div>
                <p class="description">{{item.desc}}</p>
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
        addBtnImg: require('@/assets/graphics/add.svg')
    }}
}
</script>

<style scoped>

.name-price {
    display: flex;
}

.name {
    font-size: 30px;
    margin-left: 15px;
}

.price {
    font-size: 30px;
    position: absolute;
    right: 1425px;
}


.description {
    margin-top: -25px;
    margin-left: 65px;
    height: 20px;
}

div {
    background-color: #F3E4E1;
}

li {
    list-style-type: none;
    display: flex;
    flex-flow: wrap;
    height: 105px;
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
    margin-top: 30px;
}


</style>