<template>
  <div class="box-answer">
    <p><span class="rmv glyphicon glyphicon-remove" aria-hidden="true"></span></p>
    <p><span class="glyphicon responder-name glyphicon-user" aria-hidden="true"> Responder Name: </span>
    Many desktop publishing packages and web page editors now use Lorem Ipsum as their 
    default model text Many desktop publishing packages and web page editors now use L
    orem Ipsum as their default model text</p>
    <ul class="vote-answer">
      <li><span class="glyphicon vote glyphicon-thumbs-up" aria-hidden="true"></span></li>
      <li><span class="glyphicon vote glyphicon-thumbs-down" aria-hidden="true"></span></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'box-answer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.responder-name{
  background-color: #f39e61;
  padding: 5px;
}
.box-answer{
  text-align: left;
  margin-top: 20px;
  background-color: #ddd;
  padding: 10px 15px;
}
.vote-answer{
  padding: 10px 0 0 0;
  border-top: 1px solid #2c3e50;
}
.vote-answer .vote{
  padding: 8px;
  font-size: 10px;
}
.rmv{
  float: right;
}
.link-answer{
  float: left;
  margin-top: 10px;
}
ul{
  padding: 10px 15px;
  color: #fff;
  margin-bottom: 0;
}
li{
  list-style: none;
  display: inline-block;
}
.right, .box-bottom{
  text-align: right;
}
.vote{
  background-color: #44b4ee;
  border-radius: 50%;
  padding: 10px;
}
</style>
