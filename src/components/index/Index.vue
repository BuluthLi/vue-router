<template>
  <div class="index">我是首页</div>
</template>
<script>
export default {
  created() {
    console.log(
      "传就有，不传就没有：",
      this.$router.history.current.params.hai
    );
  }
};
</script>
<style scoped>
</style>
