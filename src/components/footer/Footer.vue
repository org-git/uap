<template>
  <footer>
    <span class="text-center">Copyright &copy; {{ year }}</span>
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
