<template>
  <div class="header">
    <!-- <router-link :to="{path:'/index',params:{hai:'666'}}" class="nav-item">首页</router-link> -->
    <router-link :to="{name:'index',params:{hai:'666'}}" class="nav-item">首页</router-link>
    <router-link to="/about" class="nav-item">关于我们</router-link>
    <router-link to="/company" class="nav-item">企业事件</router-link>
    <router-link to="/products" class="nav-item">公司产品</router-link>
    <router-link to="/contact" class="nav-item">联系我们</router-link>
    <!-- 就近原则第一层 -->
    <!-- <router-view class="hai"/> -->
    <!-- 命名视图 -->
    <!-- <router-view class="xu" name="a"/> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
