<template>
  <div class="modal fade" id="loginUser" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Login</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="username" class="form-control" 
              id="username" name="username" placeholder="-Input your username-"
              v-model="auth.username">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" 
              id="password" name="password" placeholder="-Input your password-"
              v-model="auth.password">
            </div>
            <button type="submit" class="btn btn-default" @click="doLogin(auth)">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      auth: {
        username: null,
        password: null
      }
    }
  },
  computed: {
    ...mapState([
      'login'
    ])
  },
  methods: {
    ...mapActions([
      'doLogin'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
