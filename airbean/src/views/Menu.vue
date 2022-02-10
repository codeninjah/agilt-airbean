<template>
    <div>
        <Header/>
        <ul v-for="item in items" :key="item.id"> 
            <li> <img :src="addBtnImg">
                <p>{{item.title}}...........{{item.price}} kr</p>
                <p>{{item.desc}}</p>
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

div {
    background-color: #F3E4E1;
}

li {
    list-style-type: none;
}

li img {
    background-color: black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 10px solid black;
}

</style>