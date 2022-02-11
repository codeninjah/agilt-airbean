<template>
  <div>
    <div class="profile-input" v-if="!userInfo.name">
      <Header />
      <section>
        <img :src='logoImg' alt="logo">
        <h1>Välkommen till AirBean-familjen!</h1>
        <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
        <form @submit.prevent="submit">
          <label for="name">Namn</label>
          <input v-model="user.name" type="text" id="name" required>
          <label for="e-mail">E-post</label>
          <input v-model="user.email" type="text" id="e-mail" required>
          <span>
            <input v-model="user.gdpr" type="checkbox" name="gdbr">
            <label for="gdpr">GDPR ok!</label>
          </span>
          <button>Brew me a cup!</button>
        </form>
      </section>
    </div>

    <div class="profile" v-if="userInfo.name">
      <Header />
      <section>
        <p><img :src="userImg" alt="profile"></p>
        <h1>Test</h1>
        <p>{{ userInfo.name }}</p>
        <p>{{ userInfo.email }}</p>
        <h3>Orderhistorik</h3>
        <p>{{ orderHistory }}</p>
      </section>
    </div>
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
export default {
    components: {Header}, 
    data(){return{
      user: {
        name: '',
        email: '', 
        gdpr: false
      },
      logoImg: require('@/assets/graphics/logo-sml.svg'),
      userImg: require('@/assets/graphics/profile.svg')
    }},
    methods: {
      submit(){
        if(this.user.gdpr){
          console.log("User saved")
          this.$store.dispatch('save', this.user)
        }
      }
    }, 
    computed: {
      userInfo(){
        return this.$store.state.currentUser
      },
      orderHistory(){
        return this.$store.state.orderHistory //tom just nu
      }
    }
}
</script>

<style lang="scss" scoped>
.profile-input{
  background-color: #2F2926;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  section{
    box-sizing: border-box;
    background-color: #F3E4E1;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 95%;
    padding: 2rem 1rem;
    img{
      width: 3rem;
    }
    h1, p{
      text-align: center;
      margin: .5rem;
    }
    h1{
      font-family: 'PT Serif', serif;
      font-size: 32px;
    }
    p{
      font-family: 'Work Sans', sans-serif;
      font-size: 16px;
    }
    form{
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      width: 100%;
      label{
        font-family: 'work sans', sans-serif;
        color: #2F2926;
      }
      input{
        margin-bottom: 1rem;
        background-color: #F3E4E1;
        border: 1px solid #2F2926;
        border-radius: 4px;
        padding: 1rem;
      }
      button{
        background-color: #2F2926;
        border: none;
        border-radius: 50px;
        padding: 1rem;
        color: #FFFFFF;
        font-size: 2rem;
        font-family: 'pt serif', serif;
        margin-top: 3rem;
        &:hover{
          cursor: pointer;
        }
      }
    }
  }
}

.profile{
  background-color: #222222;
    p, h1, h3{
      color: #FFFFFF;
      text-align: center;
      font-family: 'Work Sans', sans-serif;
    }
}
</style>