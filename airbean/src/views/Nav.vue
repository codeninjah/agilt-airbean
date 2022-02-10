<template>

<div class="menu-view">
  <img src="@/assets/graphics/close.svg" class="close-icon"
    @click="$router.push('/')"
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
export default {

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