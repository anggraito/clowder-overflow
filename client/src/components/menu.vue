<template>
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <!-- mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><h2>Clowder Overflow</h2></a>
        </div>

        <!-- nav links
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="#">Home <span class="sr-only">(current)</span></a></li>
            <li><a href="/dashboard">Forum</a></li>
          </ul>
        </div> -->
      </div>
    </nav>
</template>

<script>
export default {
  name: 'menu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only.
font-family: 'Cabin Sketch', cursive;
font-family: 'Amatic SC', cursive;
font-family: 'Open Sans', sans-serif;
-->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin: 0;
  font-family: 'Cabin Sketch', cursive;
}
.navbar-brand{
  padding: 10px 15px;
}

</style>
