<template>
  <div class="dash">
    <div class="row header">
      <h2>Clowder Overflow</h2>
      <h4>Ask me anything you want, user</h4>
      <div v-if="auth === false"></div>
      <div v-else>
        <button type="button" class="btn btn-lg" data-toggle="modal" data-target="#addModal">Post New Topic</button>
      </div>
      <modaladd />
    </div>
    
    <div class="row content-dashboard">
      <div class="col-md-9">
        <maincontent />
      </div>
      <div class="col-md-3 list-wrap">
        <sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import modaladd from '@/components/addmodal'
import sidebar from '@/components/sidebar'
import maincontent from '@/components/maincontent'
import { mapState } from 'vuex'
export default {
  name: 'dash',
  components: {
    modaladd,
    sidebar,
    maincontent
  },
  computed: {
    ...mapState([
      'login'
    ])
  },
  methods: {
    checkLogin () {
      if (localStorage.getItem('token') === null) {
        this.auth = false
      } else {
        this.auth = true
      }
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  margin-top: 40px;
}
.content-dashboard{
  margin-top: 50px;
  text-align: left;
  padding: 0 5%;
}
h2 {
  font-weight: normal;
  font-size: 48px;
  font-family: 'Cabin Sketch', cursive;
}
</style>
