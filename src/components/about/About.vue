<template>
  <div class="about">
    <!-- <p>关于我们</p> -->
    <div class="inner-link">
      <router-link to="/about/introduce">公司简介</router-link>
      <!-- <router-link to="/about/i">关于我们</router-link>
      <router-link to="/about/iny">企业事件</router-link>
      <router-link to="/about/icts">公司产品</router-link>
      <router-link to="/about/ict">联系我们</router-link>-->
      <!-- router-link对应当前的router-view,显示Introduce.vue的内容 ,这正是组件化的机制，子路由的视图（路由视图是指router-view）是在父路由的视图内部分割的一块-->
      <!-- 所谓的多个router-view，即表示多个命名的路由，同时变化 -->
      <!-- 就近原则第二层 -->
      <!-- <router-view class="xu"/> -->
      <!-- 命名路由 -->
      <router-view class="hai" name="b"/>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.xu {
  color: green;
  width: 100px;
  height: 100px;
  background: black;
}
</style>
