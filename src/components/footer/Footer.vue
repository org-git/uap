<template>
  <footer>
    <p class="text-center">
      Copyright &copy; {{ year }} &emsp;
      <a href="http://www.shres.cn" target="_blank">{{ $t('title') }}</a>
      </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
