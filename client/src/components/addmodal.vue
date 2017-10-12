<template>
  <div class="modal fade" id="addModal" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">New Post</h4>
        </div>
        <div class="modal-body">
          <form>
            <p> user </p>
            <div class="form-group">
              <label for="title">Title of Topic</label>
              <input v-model="newQuest.title" type="text" class="form-control" id="title" name="title" placeholder="-Create Topic-">
            </div>
            <div class="form-group">
              <label for="question">Topic</label>
              <textarea v-model="newQuest.question" type="text" class="form-control" id="question" name="question" placeholder="-Type topic descriptions-"></textarea>
            </div>
            <button type="submit" class="btn btn-default" @click="beforeSubmit()">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'dash',
  data () {
    return {
      title: 'Welcome to the dashboard',
      user: 'user',
      token: null,
      newQuest: {
        title: '',
        question: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'submitQuestion'
    ]),
    beforeSubmit () {
      if (this.newQuest.title === '') {
        alert('title field can\'t null')
      } else if (this.newQuest.question === '') {
        alert('question field can\'t null')
      } else {
        this.submitQuestion(this.newQuest)
        this.newQuest.title = ''
        this.newQuest.question = ''
      }
    }
  },
  mounted () {
    this.token = localStorage.getItem('token')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea{
  height: 250px;
}
</style>
