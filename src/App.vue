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
// react路由相关
// 官网例子https://react-router.docschina.org/web/example/route-config
// 总结，将所有路由统一到一张表中，实际的效果link和route视图还是一一对应(link和route视图一般放在一起)，就近原则（针对多个同层级的link只针对一个route视图。例如首尾都有导航菜单，点击任一处，都是控制中间的一个route视图层）
// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// const Main = () => <h2>Main</h2>;

// const Sandwiches = () => <h2>Sandwiches</h2>;

// const Tacos = ({ routes }) => (
//   <div>
//     <h2>Tacos</h2>
//     <ul>
//       <li>
//         <Link to="/tacos/bus">Bus</Link>
//       </li>
//       <li>
//         <Link to="/tacos/cart">Cart</Link>
//       </li>
//     </ul>

//     {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//   </div>
// );

// const Bus = () => <h3>Bus</h3>;
// const Cart = () => <h3>Cart</h3>;

// // 路由表
// const routes = [
//   {
//     path: "/sandwiches",
//     component: Sandwiches
//   },
//   {
//     path: "/tacos",
//     component: Tacos,
//     routes: [
//       {
//         path: "/tacos/bus",
//         component: Bus
//       },
//       {
//         path: "/tacos/cart",
//         component: Cart
//       }
//     ]
//   }
// ];

// const RouteWithSubRoutes = route => (
//   <Route
//     path={route.path}
//     render={props => (
//       <route.component {...props} routes={route.routes} />
//     )}
//   />
// );

// const RouteConfigExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/tacos">Tacos</Link>
//         </li>
//         <li>
//           <Link to="/sandwiches">Sandwiches</Link>
//         </li>
//       </ul>

//       {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//     </div>
//   </Router>
// );

// export default RouteConfigExample;
</script>

<style scoped>
</style>

//新增的路由传参
//<template>
  //<div id="app">
    //<img src="./assets/logo.png">
    //<router-link :to="{path:'/',params:{value:'首页'}}" class="router-link-item">首页</router-link>
   // <router-link to="/about" class="router-link-item">关于</router-link>
  //  <router-view></router-view>
 // </div>
//</template>

//<script>
//import HelloWorld from "./components/HelloWorld";

//export default {
//  name: "App",
 // created: function() {
//    console.log(this.$router);
//    console.log(this.$route);
//  },
 // mounted: function() {
 //   console.log(1);
 //   this.$router.push({
  //    name: "about",
  //    params: {
  //      value: "关于"
  //    }
  //  });
 // },
  //components: {
 //   HelloWorld
  //}
//};
//</script>

