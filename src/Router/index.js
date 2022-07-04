import { createRouter, createWebHashHistory } from 'vue-router'

import LoadIng from '@/components/LoadIng.vue'
import Home from '@/pages/Home'
import Content from '@/pages/Content'
import ContentWebFromEnd from '@/components/Content-WebFromEnd.vue'
import ContentDryingTutorial from '@/components/Content-DryingTutorial.vue'
import ContentSoftwareRecommendation from '@/components/Content-SoftwareRecommendation.vue'
import ContentCommonWebsite from '@/components/Content-CommonWebsite.vue'
import About from '@/pages/About.vue'

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
      component: LoadIng,
      Home,
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
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
        },
        {
          name: 'DryingTutorial',
          path: 'dryingtutorial',
          component: ContentDryingTutorial,
        },
        {
          name: 'SoftwareRecommendation',
          path: 'softwareRecommendation',
          component: ContentSoftwareRecommendation,
        },
        {
          name: 'ContentCommonWebsite',
          path: 'contentCommonWebsite',
          component: ContentCommonWebsite,
        },
        {
          name: 'About',
          path: 'about',
          component: About,
        },
      ],
    },
  ],
})
export default router
