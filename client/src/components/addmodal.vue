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
              <input type="text" class="form-control" id="title" name="title" placeholder="Room name">
            </div>
            <div class="form-group">
              <label for="quest">Topic</label>
              <input type="text" class="form-control" id="quest" name="quest" placeholder="How many player">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dash',
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

</style>
