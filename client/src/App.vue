<template>
  <div id="app">
    <menuheader />
    <router-view></router-view>
  </div>
</template>

<script>
import menuheader from '@/components/menu'
export default {
  name: 'app',
  components: {
    menuheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
