//router-link和router-view 存在一个就近原则，否则就是用命名视图
<template>
  <div id="app">
    <!-- <div class="side-nav">
      <router-link to="/index" class="nav-item">首页</router-link>
      <router-link to="/about" class="nav-item">关于我们</router-link>
      <router-link to="/company" class="nav-item">企业事件</router-link>
      <router-link to="/products" class="nav-item">公司产品</router-link>
      <router-link to="/contact" class="nav-item">联系我们</router-link>
    </div>-->
    <Header></Header>
    <!-- <router-view class="hai"/> -->
    <router-view class="xu" name="a"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Footer,
    Header
  }
};
</script>

<style scoped>
/* #app {
  display: flex;
}
.side-nav {
}
.nav-item {
  display: block;
}
.hai {
  background: red;
  flex: 1;
} */
</style>
