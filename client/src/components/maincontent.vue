<template>
  <div class="maincontent">
    <div class="list-item" v-for="question in questions" :key="question._id">
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
        <textarea class="form-control"></textarea>
        <button class="btn btn-small">Respon</button>
        <a class="link-answer" type="button">Show This Detail</a>
        <answerlist ></answerlist>
      </div>
    </div>
  </div>
</template>

<script>
import answerlist from '@/components/answerlist'
import { mapActions, mapState } from 'vuex'
// import {mapActions} from 'vuex'
export default {
  name: 'maincontent',
  components: {
    answerlist
  },
  computed: {
    ...mapState([
      'questions'
    ])
  },
  methods: {
    ...mapActions([
      'getAllQuestions'
    ])
  },
  mounted () {
    this.getAllQuestions()
  }
  // data () {
  //   return {
  //     seen: true
  //   }
  // },
  // methods: {
  //   getAnswers (id) {
  //     this.seen = false
  //     this.$store.dispatch('getAnswers', id)
  //   }
  // },
  // computed: {
  //   allQuestions () {
  //     return this.$store.state.allQuestions
  //   }
  // },
  // created () {
  //   this.$store.dispatch('getAllQuestions')
  // }
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


// <div class="box-bottom">
//         <textarea class="form-control"></textarea>
//         <button class="btn btn-small">Respon</button>
//         <a class="link-answer" type="button" 
//          @click.prevent="getAnswers(question._id)">Show This Answer</a>
//         <answerlist >{{question.answers}}</answerlist>
//       </div>