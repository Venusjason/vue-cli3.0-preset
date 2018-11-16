<template>
  <div class="home">
    <div class="test"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  mounted() {
    this.$toasted.show('服务器出错，请稍候', {
      theme: 'primary',
      position: 'bottom-center',
      duration: 3000,
    })
    this.$store.dispatch('testApi').then((res) => {
      console.log(res)
    })
  },
}
</script>

<style lang="less" scoped>
.test {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
