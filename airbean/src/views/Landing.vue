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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #38846D;
  background-image: url('../assets/graphics/intro-graphic-left.svg'), url('../assets/graphics/intro-graphic-right.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left, right;
   img{
      width: 20rem;
    }
}
</style>