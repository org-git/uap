<template>
  <div id="app">
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
