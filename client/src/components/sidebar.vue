<template>
  <div class="sidebar">
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
export default {
  name: 'sidebar',
  data () {
    return {
      titlesidebar: '8 Popular Topic'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar{
  background-color: #f6f6f6;
  padding: 10px 20px;
}
</style>
