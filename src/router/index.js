import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import jis from '@/components/jis'
import ipan from '@/components/ipan'
import View from '@/components/View'
import vivo from '@/components/vivo'
import add from '@/components/add'
import index from '@/components/index'
import adds from '@/components/adds'
import logins from '@/components/logins'
import addone from '@/components/addone'
import addtwo from '@/components/addtwo'
import addthree from '@/components/addthree'
import addfour from '@/components/addfour'
import addfive from '@/components/addfive'
import addsix from '@/components/addsix'
import addseven from '@/components/addseven'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'ipan',
      name:'ipan',
      component:ipan
    },
    {
      path:'/addones',
      name:'addone',
      component:addone
    },
    {
     path:'/addtwo',
     name:'addtwo',
     component:addtwo
   },
   {
     path:'/addthree',
     name:'addthree',
     component:() => import("@/components/addthree")
   },
   {
     path:'/addfour',
     name:'addfour',
     component:addfour
   },
   {
     path:'addfive',
     name:'addfive',
     component:addfive
   },
   {
     path:'addsix',
     name:'addsix',
     component:addsix
   },
   {
     path:'addseven',
     name:'addseven',
     component:addseven
   },
    {
      path:'/logins',
      name:'logins',
      component:logins

    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/login',
      name:'login',
      component:login
    },{
      path:'/jis',
      name:'jis',
      component:jis
    },{
      path:'/View',
      name:'View',
      component:View
    },{
      path:'vivo',
      name:'vivo',
      component:vivo
    },
    {
      path:'adds',
      name:'adds',
      component:adds
    },
    {
      path:'/add',
      name:'add',
      component:add,
      children:[
        {
          path:'',
          name:'',
          component:index
   
       },
         
        {
          path:'index',
          name:'index',
          component:index
   
       },
        {
          path:'vivo',
          name:'vivo',
          component:vivo
        }, {
          path:'adds',
          name:'adds',
          component:adds
        }
      ]
    }
  ]
})
