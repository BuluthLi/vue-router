import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/index/Index';
import About from '../components/about/About';
import Company from '../components/company/Company';
import Products from '../components/products/Products';
import Contact from '../components/contact/Contact';
import Introduce from '../components/introduce/Introduce';

Vue.use(Router)

export default new Router({
  // 利用就近原则
  // routes: [
  //   {
  //     path: "/",
  //     name: 'allindex',
  //     component: Index
  //   },
  //   {
  //     path: "/index",
  //     name: 'index',
  //     component: Index
  //   },
  //   {
  //     path: "/about",
  //     name: 'about',
  //     component: About,
  //     children: [
  //       {
  //         path: "introduce",
  //         name: 'introduce',
  //         component: Introduce,
  //       }
  //     ]
  //   },
  //   {
  //     path: "/company",
  //     name: 'company',
  //     component: Company
  //   },
  //   {
  //     path: "/products",
  //     name: 'products',
  //     component: Products
  //   },
  //   {
  //     path: "/contact",
  //     name: 'contact',
  //     component: Contact
  //   }
  // ]
  // 利用命名视图,和react-router最接近的一种方式，只不过react用<route to="/index/about">达到命名效果
  routes: [
    {
      path: "/",
      name: 'allindex',
      components: {
        a: Index
      }
    },
    {
      path: "/index",
      name: 'index',
      components: {
        a: Index
      }
    },
    {
      path: "/about",
      name: 'about',
      components: {
        a: About,
        // b: Index
      },
      children: [
        {
          path: "introduce",
          name: 'introduce',
          components: {
            b: Introduce
          }
        },
        {
          path: "",
          name: 'aboutdefault',
          components: {
            b: Introduce
          },
        }
      ]
    },
    // 理解错误：选择了命名路由，父子路由都被命名了，就不存在父子关系了，即都用命名表示
    // routes路由表里面的path是父子关系，路由视图router-view也是父子关系，同理，路由表path是兄弟关系，多个router-view是并排的才会起作用
    // 对应的 router-view和router-link应在同一级
    // {
    //   path: "/about/introduce",
    //   name: 'introduce',
    //   components: {
    //     // a: About,
    //     b: Introduce
    //   }
    // },
    {
      path: "/company",
      name: 'company',
      components: {
        a: Company
      }
    },
    {
      path: "/products",
      name: 'products',
      components: {
        a: Products
      }
    },
    {
      path: "/contact",
      name: 'contact',
      components: {
        a: Contact
      }
    }
  ]
})
