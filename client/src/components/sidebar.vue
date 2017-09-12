<template>
  <div class="sidebar">
    <button class="btn btn-lg button1" data-toggle="modal" data-target="#loginUser">Login</button>
    <button class="btn btn-lg button2" data-toggle="modal" data-target="#registerUser">Register</button>
    <modallogin />
    <modalregister />
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
import modallogin from '@/components/login'
import modalregister from '@/components/register'
export default {
  name: 'sidebar',
  components: {
    modallogin,
    modalregister
  },
  data () {
    return {
      titlesidebar: '8 Popular Topic'
    }
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
  background-color: #f39e61;
  padding: 10px 20px;
  width: 100%;
}
</style>
