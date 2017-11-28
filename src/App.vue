<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
  import Toolbar from './views/Toolbar.vue'
  import NotesList from './views/NotesList.vue'
  import Editor from './views/Editor.vue'

  export default {
    // name: 'app',
    components: {
      Toolbar,
      NotesList,
      Editor
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
