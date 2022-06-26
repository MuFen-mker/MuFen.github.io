import { createRouter, createWebHashHistory } from 'vue-router'

import LoadIng from '@/components/LoadIng.vue'
import Home from '@/pages/Home'
import Content from '@/pages/Content'
import ContentWebFromEnd from '@/components/Content-WebFromEnd.vue'
import ContentDryingTutorial from '@/components/Content-DryingTutorial.vue';
import ContentSoftwareRecommendation from '@/components/Content-SoftwareRecommendation.vue';
import ContentCommonWebsite from '@/components/Content-CommonWebsite.vue';
import About from '@/pages/About.vue';
import WebFromEnd01 from '@/pages/WebFromEnd01.vue'
import WebFromEnd02 from '@/pages/WebFromEnd02.vue'
import WebFromEnd03 from '@/pages/WebFromEnd03.vue'
import WebFromEnd04 from '@/pages/WebFromEnd04.vue'
import WebFromEnd05 from '@/pages/WebFromEnd05.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/loading...',
    },
    {
      path: '/Content',
      redirect: '/home',
    },
    {
      name: 'loading',
      path: '/loading...',
      component: LoadIng,Home
    },
    {
      name: 'home',
      path: '/home',
      component:Home
    },
    {
      name: 'Content',
      path: '/content',
      component: Content,
      children: [
        {
          name: 'WebFromEnd',
          path: 'webfromend',
          component: ContentWebFromEnd,
          children: [
            {
              name: '01',
              path: '01',
              component: WebFromEnd01,
              meta: {keepAlive: false}
            },
            {
              name: '02',
              path: '02',
              component: WebFromEnd02,
              meta: {keepAlive: false}
            },
            {
              name: '03',
              path: '03',
              component: WebFromEnd03,
              meta: {keepAlive: false}
            },
            {
              name: '04',
              path: '04',
              component: WebFromEnd04,
              meta: {keepAlive: false}
            },
            {
              name: '05',
              path: '05',
              component: WebFromEnd05,
              meta: {keepAlive: false}
            },
          ],
          meta: {keepAlive: false}
        },
        {
          name:'DryingTutorial',
          path:'dryingtutorial',
          component:ContentDryingTutorial,
          meta: {keepAlive: false}
        },
        {
          name:'SoftwareRecommendation',
          path:'softwareRecommendation',
          component:ContentSoftwareRecommendation,
          meta: {keepAlive: false}
        },
        {
          name:'ContentCommonWebsite',
          path:'contentCommonWebsite',
          component:ContentCommonWebsite,
          meta: {keepAlive: false}
        },
        {
          name:'About',
          path:'about',
          component:About,
          meta: {keepAlive: false}
        },
      ],
    },
  ],
})
export default router
