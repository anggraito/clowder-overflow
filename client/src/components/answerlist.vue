<template>
  <div>
    <div class="box-answer" v-for="answer in answers">
      <p><span class="rmv glyphicon glyphicon-remove" aria-hidden="true"></span></p>
      <p><span class="glyphicon responder-name glyphicon-user" aria-hidden="true">{{answer.author}}</span>
      {{ answer.answer }} </p>
      <ul class="vote-answer">
        <li><span class="glyphicon vote glyphicon-thumbs-up" aria-hidden="true"></span></li>
        <li><span class="glyphicon vote glyphicon-thumbs-down" aria-hidden="true"></span></li>
        <li>{{ answer.createdAt }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
export default {
  props: ['answers'],
  data () {
    return {
    }
  }
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
