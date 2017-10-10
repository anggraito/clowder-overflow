<template>
  <div class="modal fade" id="loginUser" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">logo login</h4>
        </div>
        <div class="modal-body">
          <div id="login">
            <div class="container-fluid">
              <div class="panel panel-login">
                <div class="panel-heading">
                  <div class="row">
                    <div class="col-xs-6">
                      <a @click.prevent="loginForm" href="#" class="active" id="login-form-link">Login</a>
                    </div>
                    <div class="col-xs-6">
                      <a @click.prevent="registerForm" href="#" id="register-form-link">Register</a>
                    </div>
                  </div>
                  <hr>
                </div>
                <div class="panel-body">
                  <div class="row">
                    <div class="col-lg-12">
                      <div id="login-form" role="form" style="display: block;">
                        <p v-if="msgError!=null" class="text-center" style="color: red">{{msgError}}</p>
                        <div class="form-group">
                          <input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value="" v-model="auth.loginUsername">
                        </div>
                        <div class="form-group">
                          <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password" v-model="auth.loginPass">
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-sm-6 col-sm-offset-3">
                              <button type="submit" name="login-submit" id="login-submit" tabindex="3" class="form-control btn btn-login" @click="doLogin(auth)">Login</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="register-form" role="form" style="display: none;">
                        <p v-if="signupMsg!=null" class="text-center" style="color: red">{{signupMsg}}</p>
                        <div class="form-group">
                          <input type="text" name="username" id="username" tabindex="2" class="form-control" placeholder="Username" value="" v-model="signupUsername">
                        </div>
                        <div class="form-group">
                          <input type="email" name="email" id="email" tabindex="3" class="form-control" placeholder="Email Address" value="" v-model="signupEmail">
                        </div>
                        <div class="form-group">
                          <input type="password" name="password" id="password" tabindex="4" class="form-control" placeholder="Password" v-model="signupPass">
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-sm-6 col-sm-offset-3">
                              <button type="submit" name="register-submit" id="register-submit" tabindex="5" class="form-control btn btn-register" @click.prevent="register">Register</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        loginUsername: null,
        loginPass: null
      },
      signupEmail: null,
      signupUsername: null,
      signupPass: null,
      signupMsg: null
    }
  },
  computed: {
    ...mapState([
      'login',
      'msgError'
    ])
  },
  methods: {
    ...mapActions([
      'doLogin'
    ]),
    registerForm () {
      document.getElementById('register-form').style.display = 'block'
      document.getElementById('login-form').style.display = 'none'
      document.getElementById('login-form-link').classList.remove('active')
      document.getElementById('register-form-link').classList.add('active')
    },
    loginForm () {
      document.getElementById('register-form').style.display = 'none'
      document.getElementById('login-form').style.display = 'block'
      document.getElementById('login-form-link').classList.add('active')
      document.getElementById('register-form-link').classList.remove('active')
    },
    register () {
      this.$http.post('/signup', {
        username: this.signupUsername,
        password: this.signupPass,
        email: this.signupEmail
      })
      .then(() => {
        this.loginForm()
        this.signupUsername = null
        this.signupPass = null
        this.signupEmail = null
      })
      .catch(err => {
        this.signupMsg = err.toString()
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel-login {
    border-color: #ccc;
    -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
  }
  .panel-login .panel-heading {
    color: #00415d;
    /* background-color: #fff; */
    /* border-color: #fff; */
    text-align:center;
  }
  .panel-login .panel-heading a{
    text-decoration: none;
    color: #666;
    font-weight: bold;
    font-size: 15px;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    transition: all 0.1s linear;
  }
  .panel-login .panel-heading a.active{
    color: #029f5b;
    font-size: 18px;
  }
  .panel-login .panel-heading hr{
    /* margin-top: 10px; */
    margin-bottom: 0px;
    /* clear: both;
    border: 0;
    height: 1px;
    background-image: -webkit-linear-gradient(left,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0));
    background-image: -moz-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
    background-image: -ms-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
    background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0)); */
  }
  .panel-login input[type="text"],.panel-login input[type="email"],.panel-login input[type="password"] {
    height: 45px;
    font-size: 16px;
  }
  .btn-login {
    background-color: #59B2E0;
    outline: none;
    color: #fff;
    font-size: 14px;
    height: auto;
    font-weight: normal;
    padding: 14px 0;
    text-transform: uppercase;
    border-color: #59B2E6;
    margin-top: 10px;
  }
  .btn-login:hover,
  .btn-login:focus {
    color: #fff;
    background-color: #53A3CD;
    border-color: #53A3CD;
  }
  .btn-register {
    background-color: #1CB94E;
    outline: none;
    color: #fff;
    font-size: 14px;
    height: auto;
    font-weight: normal;
    padding: 14px 0;
    text-transform: uppercase;
    border-color: #1CB94A;
    margin-top: 10px;
  }
  .btn-register:hover,
  .btn-register:focus {
    color: #fff;
    background-color: #1CA347;
    border-color: #1CA347;
  }
</style>
