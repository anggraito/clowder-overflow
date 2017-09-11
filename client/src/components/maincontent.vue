<template>
  <div class="maincontent">
    <div class="list-item">
      <div class="box-top">
        <h4>Topic : there is title topic declare</h4>
        <p>Lorem Ipsum is that it has a more-or-less normal 
        distribution of letters, as opposed to using 'Content 
        here, content here', making it look like readable 
        English. Many desktop publishing packages and web page 
        editors now use Lorem Ipsum as their default model text, 
        and a search for 'lorem ipsum' will uncover many web 
        sites still in their infancy. Various versions have 
        evolved over the years, sometimes by accident, sometimes 
        on purpose (injected humour and the like).
        </p>
      </div>
      <div class="box-detail">
        <div class="clearfix box-setting">
          <ul class="left col-md-6">
            <li><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Author name</li>
          </ul>
          <ul class="right col-md-6">
            <li><span class="glyphicon vote glyphicon-thumbs-up" aria-hidden="true"></span></li>
            <li><span class="glyphicon vote glyphicon-thumbs-down" aria-hidden="true"></span></li>
            <li><button class="btn btn-small">delete</button></li>
          </ul>
        </div>
      </div>
      <div class="box-bottom">
        <textarea class="form-control"></textarea>
        <button class="btn btn-small">Respon</button>
        <a class="link-answer" type="button" 
        v-on:click="seen = !seen">Show All Answer</a>
        <answerlist v-if="!seen"/>
      </div>
    </div>
  </div>
</template>

<script>
import answerlist from '@/components/answerlist'
export default {
  name: 'maincontent',
  components: {
    answerlist
  },
  data () {
    return {
      seen: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link-answer{
  float: left;
  margin-top: 10px;
}
textarea{
  margin-bottom: 5px;
}
.list-item{
  background-color: #f6f6f6;
  border: 2px solid #dedede;
  margin-bottom: 15px;
}
.box-top, .box-bottom{
  padding: 10px;
}
.box-setting{
  background-color: rgba(90,93,95,0.7);
  display: flex;
  align-items: baseline;
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
