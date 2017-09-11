<template>
  <div class="dash">
    <div class="row">
      <h2>{{title}}, {{user}}</h2>
      <button type="button" class="btn btn-lg" data-toggle="modal" data-target="#addModal">Post New Topic</button>
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
export default {
  name: 'dash',
  components: {
    modaladd,
    sidebar,
    maincontent
  },
  data () {
    return {
      title: 'Welcome to the dashboard',
      user: 'user'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-dashboard{
  margin-top: 20px;
  text-align: left;
  padding: 0 5%;
}
</style>
