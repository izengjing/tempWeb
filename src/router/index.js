import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/header/header'
Vue.component('Header', Header)

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'Bootstrap',
      component: () => import('@/views/home/home'),
      children: [
        {
          path: '',
          name: 'Slide',
          component: () => import('@/components/slide/slide'),
          children: [
            {
              path: 'compHeader',
              name: 'compHeader',
              component: () => import('@/components/compBootstrap/compHeader/compHeader')
            },
            {
              path: 'compContact',
              name: 'compContact',
              component: () => import('@/components/compBootstrap/compContact/compContact')
            },
            {
              path: 'compSowingMap',
              name: 'compSowingMap',
              component: () => import('@/components/compBootstrap/compSowingMap/compSowingMap')
            },
            {
              path: 'compGallery',
              name: 'compGallery',
              component: () => import('@/components/compBootstrap/compGallery/compGallery')
            },
            {
              path: 'compLoading',
              name: 'compLoading',
              component: () => import('@/components/compBootstrap/compLoading/compLoading')
            }
          ]
        }
      ]
    }
  ]
})
