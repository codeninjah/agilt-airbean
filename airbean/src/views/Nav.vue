<template>
  <LandingPage v-if='showLandingPage' />
  <div class="menu-view" v-else>
    <img src="@/assets/graphics/close.svg" class="close-icon"
      @click="goBack"
    >
    <nav>
        <router-link to="Menu">Meny</router-link>
        <router-link to="About">Vårt kaffe</router-link>
        <router-link to="Profile">Min profil</router-link>
        <router-link to="Status">Orderstatus</router-link>
    </nav>
  </div>
</template>

<script>
import LandingPage from '@/views/Landing'
export default {
  components: {LandingPage},
  created(){
    setInterval(()=>{
      this.$store.dispatch('stopLandingPage')
    },3000)
  },
  methods: {
    goBack(){
      console.log(this.$router);
      this.$router.go(-1)
    }
  }, 
  computed:{
    showLandingPage(){
      return this.$store.state.landingPage
    }
  }
}
</script>


<style lang="scss" scoped>
.menu-view{
  width: 100%;
  height: 100%;
  background-color: #2F2926;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  .close-icon{
    
    width: 20px;
    height: 20px;
    padding: 8px;
    border-radius: 999px;
    background-color: #ffffff;
  }
  nav{
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: auto;
    a{
      font-size: 32px;
      color: #ffffff;
      text-decoration: none;
      margin: 1rem;
    }
  }

}
</style>