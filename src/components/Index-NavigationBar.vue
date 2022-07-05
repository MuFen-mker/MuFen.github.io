<template>
  <div class="NavigationBar">
    <div class="container timerAndWord">
      <div class="rowTimerAndWord row">
        <div
          class="col-xxl-4 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 timer"
        >
          <h2>「Time」&nbsp;{{ time }}</h2>
        </div>
        <div
          class="col-xxl-8 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 aWord"
        >
          <h2>{{ aWord }}</h2>
          <h2>「{{ aWordFrom }}」</h2>
        </div>
      </div>
    </div>
    <div class="container navigationBar">
      <ul class="rowNavigationBar row">
        <li
          class="item col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 Activation"
        >
          {{ Index }}
        </li>
        <li
          class="item col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"
          @click="goToWebFrontEnd()"
        >
          {{ WebFrontEnd }}
        </li>
        <li
          class="item col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"
          @click="goToDryingTutorial()"
        >
          {{ DryingTutorial }}
        </li>
        <li
          class="item col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"
          @click="goToSoftwareRecommendation()"
        >
          {{ SoftwareRecommendation }}
        </li>
        <li
          class="item col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"
          @click="goToContentCommonWebsite()"
        >
          {{ WebsiteCollection }}
        </li>
        <li
          class="item col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"
          @click="goToAbout()"
        >
          {{ About }}
        </li>
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

    const TimeAndDate = function () {
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
    }

    const getTimeAndDate = function () {
      TimeAndDate()
      pageDate.Timer = setInterval(() => {
        TimeAndDate()
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
.rowTimerAndWord {
  margin: 0 auto;
}
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
.timer h2 {
  font-size: 20px;
  display: inline-block;
}
.aWord h2 {
  font-size: 20px;
  text-align: right;
}
.navigationBar {
  margin-top: 60.8px;
}
.navigationBar > ul {
  padding: 0;
  text-align: center;
}
.navigationBar > ul > li {
  display: inline-block;
  box-sizing: border-box;
  border-bottom: 3px solid black;
  font-size: 27.2px;
}
.navigationBar > ul > li:hover {
  color: rgb(57, 192, 255);
  border-bottom: 3px solid rgb(57, 192, 255);
}
@media screen and (max-width: 1200px) {
  .timer {
    font-size: 20px;
    text-align: center;
  }
  .aWord {
    line-height: 1rem;
    margin-top: 20px;
  }
  .aWord h2 {
    font-size: 20px;
    text-align: center;
  }
}
@media screen and (max-width: 995px) {
  .navigationBar > ul > li {
    font-size: 20px;
    border-bottom: 2px solid black;
  }
  .Activation {
    border-bottom: 2px solid orange !important;
  }
  .navigationBar > ul > li:hover {
    border-bottom: 2px solid rgb(57, 192, 255);
  }
}
@media screen and (max-width: 775px) {
  .navigationBar > ul > li {
    font-size: 18px;
  }
  .container,
  .container-md,
  .container-sm {
    max-width: 99%;
  }
  .row > * {
    padding: 0;
  }
}
@media screen and (max-width: 610px) {
  .navigationBar > ul > li {
    font-size: 16px;
  }
  .timer h2 {
    font-size: 16px;
  }
  .aWord h2 {
    font-size: 16px;
  }
}
@media screen and (max-width: 543px) {
  .navigationBar > ul > li {
    font-size: 14px;
    border-bottom: 2px solid black;
  }
  .Activation {
    border-bottom: 2px solid orange !important;
  }
  .navigationBar > ul > li:hover {
    border-bottom: 2px solid rgb(57, 192, 255);
  }
  .timer h2 {
    font-size: 14px;
  }
  .aWord h2 {
    font-size: 14px;
  }
}
</style>
