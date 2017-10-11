<template>
  <div>
    <div v-if="auth === false">
      <h2>You should Login first</h2>
      <router-link :to="'/'">Login</router-link>
    </div>
    <div class="col-md-8 col-md-offset-2" v-else>
      <div class="box-top">
        <h4>Title : {{question.title}}</h4>
        <p>{{question.question}}</p>
        <p class="right"><strong>Post on: </strong>{{question.createdAt}}</p>
      </div>
      <div class="box-detail">
        <div class="clearfix box-setting">
          <ul class="left col-md-6">
            <li><span class="glyphicon glyphicon-user" aria-hidden="true"></span> {{question.author.username}}</li>
          </ul>
          <ul class="right col-md-6">
            <li><span class="glyphicon vote glyphicon-thumbs-up" aria-hidden="true"></span></li>
            <li><span class="glyphicon vote glyphicon-thumbs-down" aria-hidden="true"></span></li>
            <li><button class="btn btn-small"><i class="fa fa-trash" aria-hidden="true"></i></button></li>
          </ul>
        </div>
      </div>
      <div class="box-bottom">
        <textarea v-model="newAnswer" class="form-control"></textarea>
        <button class="btn btn-small" @click.prevent="beforeSubmitAnswer(newAnswer)">Reply</button>
      </div>
      <answerlist :answers="question.answers"/> 
    </div>
  </div>
</template>

<script>
import answerlist from '@/components/answerlist'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    answerlist
  },
  data () {
    return {
      auth: false,
      newAnswer: ''
    }
  },
  props: ['id'],
  computed: {
    ...mapState([
      'question',
      'answer'
    ])
  },
  methods: {
    ...mapActions([
      'getQuestion',
      'submitAnswer'
    ]),
    checkLogin () {
      console.log('check login dulu')
      if (localStorage.getItem('token') === null) {
        console.log('token nya ga ada')
        this.auth = false
      } else {
        console.log('ada token')
        this.auth = true
      }
    },
    beforeSubmitAnswer (answer) {
      if (this.newAnswer === '') {
        alert('input answer can\'t null')
      } else {
        this.submitAnswer(answer)
        this.newAnswer = ''
      }
    }
  },
  mounted () {
    this.checkLogin()
    this.getQuestion(this.id)
  }
}
</script>

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
.left, .box-top{
  text-align: left;
}
</style>
