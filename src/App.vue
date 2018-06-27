<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <A></A>
  </div>
</template>

<script>
import A from './components/a'
export default {
  name: 'App',
  components:{A}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
