<template>
  <div class="sidebar">
    <div v-if="auth == false">
      <button class="btn btn-lg button1" data-toggle="modal" data-target="#loginUser">Login</button>
    </div>
    <div v-else>
      <p>namanya siapa</p>
      <button class="btn btn-lg button2" @click="doLogout">Logout</button>
    </div>
    <login-form />
    <h3>{{titlesidebar}}</h3>
    <ol>
      <li>Ini title pertama</li>
      <li>Ini title selanjutnya</li>
      <li>Ini title selanjutnya</li>
      <li>Ini title selanjutnya</li>
      <li>Ini title selanjutnya</li>
      <li>Ini title selanjutnya</li>
      <li>Ini title selanjutnya</li>
      <li>Ini title akhir</li>
    </ol>
  </div>
</template>

<script>
import loginForm from '@/components/login'
export default {
  name: 'sidebar',
  components: {
    loginForm
  },
  data () {
    return {
      titlesidebar: '8 Popular Topic'
    }
  },
  methods: {
    checkLogin () {
      if (localStorage.getItem('token') === null) {
        this.auth = false
      } else {
        this.auth = true
      }
    },
    doLogout () {
      localStorage.clear()
      this.auth = false
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button1{
  background-color: #44b4ee;
  padding: 10px 20px;
  width: 100%;
  margin-bottom: 5px;
}
.button2{
  padding: 10px 20px;
  width: 100%;
}
</style>
