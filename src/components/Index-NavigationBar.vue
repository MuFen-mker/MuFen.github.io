<template>
  <div class="NavigationBar">
    <div class="timerAndWord">
      <div class="timer">
        <h2>「Time」&nbsp;{{ time }}</h2>
      </div>
      <div class="aWord">
        <h2>{{ aWord }}</h2>
        <h2>「{{ aWordFrom }}」</h2>
      </div>
    </div>
    <div class="navigationBar">
      <ul>
        <li class="Activation">{{ Index }}</li>
        <li @click="goToWebFrontEnd()">{{ WebFrontEnd }}</li>
        <li @click="goToDryingTutorial()">{{ DryingTutorial }}</li>
        <li @click="goToSoftwareRecommendation()">
          {{ SoftwareRecommendation }}
        </li>
        <li @click="goToContentCommonWebsite()">{{ WebsiteCollection }}</li>
        <li @click="goToAbout()">{{ About }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  onDeactivated,
  onMounted,
  reactive,
  ref,
  toRefs,
} from '@vue/runtime-core'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  name: 'Index-NavigationBar',
  setup() {
    // 声明路由
    const $router = useRouter()
    let getInAWordTimer = ref(null)
    let pageDate = reactive({
      time: 0,
      Timer: null,
      aWord: '你还有好多未完成的梦，你有什么理由停下脚步。',
      aWordFrom: '佚名',
    })
    // 定时刷新
    const refreshASentence = function () {
      getInAWordTimer.value = setInterval(() => {
        getHiToKoTo()
      }, 300000)
    }

    const getHiToKoTo = function () {
      setTimeout(() => {
        axios
          .get('https://v1.hitokoto.cn/?a')
          .then(({ data }) => {
            pageDate.aWord = data.hitokoto
            pageDate.aWordFrom = data.from
          })
          .catch(
            (pageDate.aWord = '你还有好多未完成的梦，你有什么理由停下脚步。'),
            (pageDate.aWordFrom = '佚名')
          )
        refreshASentence()
      }, 3000)
    }

    const getTimeAndDate = function () {
      pageDate.Timer = setInterval(() => {
        let yy = new Date().getFullYear() //年
        let mm = new Date().getMonth() + 1 //月
        let dd = new Date().getDate() //日
        let hh = new Date().getHours() //小时
        let mf =
          new Date().getMinutes() < 10
            ? '0' + new Date().getMinutes()
            : new Date().getMinutes() //分钟
        let ss =
          new Date().getSeconds() < 10
            ? '0' + new Date().getSeconds()
            : new Date().getSeconds() //秒
        pageDate.time =
          yy + '年' + mm + '月' + dd + '日  ' + hh + ':' + mf + ':' + ss
      }, 1000)
    }

    let navigationContent = reactive({
      Index: '主页',
      WebFrontEnd: '前端相关',
      DryingTutorial: '干货教程',
      SoftwareRecommendation: '软件推荐',
      WebsiteCollection: '网站收藏',
      About: '关于',
    })

    // 路由跳转
    // 前端相关
    const goToWebFrontEnd = function () {
      $router.push({
        name: 'WebFromEnd',
      })
    }
    const goToDryingTutorial = function () {
      $router.push({
        name: 'DryingTutorial',
      })
    }
    const goToSoftwareRecommendation = function () {
      $router.push({
        name: 'SoftwareRecommendation',
      })
    }
    const goToContentCommonWebsite = function () {
      $router.push({
        name: 'ContentCommonWebsite',
      })
    }
    const goToAbout = function () {
      $router.push({
        name: 'About',
      })
    }

    onMounted(() => {
      getTimeAndDate()
      getHiToKoTo()
    })
    onDeactivated(() => {
      clearInterval(pageDate.Timer)
      pageDate.Timer = null
      clearInterval(getInAWordTimer.value)
      getInAWordTimer.value = null
    })
    return {
      ...toRefs(pageDate),
      ...toRefs(navigationContent),
      goToWebFrontEnd,
      goToDryingTutorial,
      goToSoftwareRecommendation,
      goToContentCommonWebsite,
      goToAbout,
    }
  },
}
</script>

<style scoped>
.NavigationBar {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  margin-top: 80px;
}
.Activation {
  border-bottom: 3px solid orange !important;
  color: orange !important;
}
.timer {
  margin-left: 1%;
}
.timer h2 {
  font-size: 20px;
  margin-left: 1%;
  display: inline-block;
}
.aWord {
  margin-right: 1%;
}
.aWord h2 {
  font-size: 20px;
  text-align: right;
}
.navigationBar {
  margin-top: 60.8px;
}
.navigationBar > ul {
  text-align: center;
}
.navigationBar > ul > li {
  display: inline-block;
  padding: 0 2%;
  box-sizing: border-box;
  border-bottom: 3px solid black;
  font-size: 27.2px;
}
.navigationBar > ul > li:hover {
  color: rgb(57, 192, 255);
  border-bottom: 3px solid rgb(57, 192, 255);
}
.timerAndWord {
  display: flex;
  justify-content: space-between;
}
</style>
