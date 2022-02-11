<template>
  <section>
    <div class="intro-left">
      <img :src='landingImg' alt="">
    </div>
    <div class="intro-right"></div>
  </section>
</template>


<script>
export default {
  data(){return{
    landingImg: require('@/assets/graphics/airbean-landing.svg')
  }}
}
</script>

<style lang='scss' scoped>
section{
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #38846D;
  .intro-left{
    background-image: url('../assets/graphics/intro-graphic-left.svg');
    background-size: cover;
    height: 100%;
    width: 50%;
    display: grid;
    place-items: center;
    img{
      width: 25rem;
      z-index: 3;
    }
  }
  .intro-right{
    background-image: url('../assets/graphics/intro-graphic-right.svg');
    background-size: cover;
    height: 100%;
    width: 50%;
  }
}
</style>