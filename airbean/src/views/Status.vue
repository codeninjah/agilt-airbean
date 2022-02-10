<template>

  <div class="order">
      <p class ="ordernum">Ordernummer #12DV23F</p>
      <p class ="pic"><img :src="pictureOfStatus"></p>
      <h1> Din beställning är på väg!</h1>
      <p class ="time">13 minuter</p>
   <button @click="coolBtn">Ok,cool!</button>
  </div>
      

</template>

<script>
export default {
    data(){return{
    pictureOfStatus: require('@/assets/graphics/drone.svg')
    }
    },
    methods:{
        
        coolBtn(){
            console.log('test')
            this.$router.push('/')
        }

    }
    
    

}

</script>

<style scoped>
.order
 {
    background-color: #E5674E;
    width: 375px;
    height: 667px;
    display: flex;
    justify-content: center;
    align-items: center;
    



}
.ordernum
{
color:#FFFFFF;
position: absolute;
width: 279px;
height: 37px;
left: 48px;
top: 52px;
padding-left:16px;

font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
display: flex;
align-items: center;
text-align: center; 

}
.pic
{
position: absolute;
width: 216.29px;
height: 79.49px;
left: 80px;
top: 139px;

display: flex;
justify-content: center;
align-items: center;
     
}
h1{
color:#FFFFFF;
position: absolute;
width: 279px;
height: 125px;
left: 48px;
top: 299px;
display: flex;
align-items: center;
text-align: center; 
}
.time{
color:#FFFFFF;
 position: absolute;
width: 279px;
height: 37px;
left: 48px;
top: 424px;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
display: flex;
align-items: center;
text-align: center;
}



</style>