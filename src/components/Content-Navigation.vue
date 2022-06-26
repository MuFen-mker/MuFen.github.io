<template>
  <div class="navigationBar">
    <ul>
      <li>
        <router-link class="routerLink" to="/home">{{ Index }}</router-link>
      </li>
      <li>
        <router-link
          class="routerLink"
          :to="{ name: 'WebFromEnd' }"
          active-class="Activation"
          >{{ WebFrontEnd }}</router-link
        >
      </li>
      <li>
        <router-link
          class="routerLink"
          :to="{ name: 'DryingTutorial' }"
          active-class="Activation"
          >{{ DryingTutorial }}</router-link
        >
      </li>
      <li>
        <router-link
          class="routerLink"
          :to="{ name: 'SoftwareRecommendation' }"
          active-class="Activation"
          >{{ SoftwareRecommendation }}</router-link
        >
      </li>
      <li>
        <router-link
          class="routerLink"
          :to="{ name: 'ContentCommonWebsite' }"
          active-class="Activation"
          >{{ WebsiteCollection }}</router-link
        >
      </li>
      <li>
        <router-link
          class="routerLink"
          :to="{ name: 'About' }"
          active-class="Activation"
          >{{ About }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/runtime-core'

export default {
  name: 'Content-Navigation',
  setup() {
    let navigationContent = reactive({
      Index: '主页',
      WebFrontEnd: '前端相关',
      DryingTutorial: '干货教程',
      SoftwareRecommendation: '软件推荐',
      WebsiteCollection: '网站收藏',
      About: '关于',
    })
    return {
      ...toRefs(navigationContent),
    }
  },
}
</script>

<style scoped>
.routerLink {
  display: block;
  text-decoration: none;
  width: 100%;
  border-bottom: 3px solid black;
}
.NavigationBar {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
}
.Activation {
  border-bottom: 3px solid orange !important;
  color: orange !important;
}
.navigationBar {
  margin-top: 268.8px;
}
.navigationBar > ul {
  text-align: center;
}
.navigationBar > ul > li {
  position: relative;
  display: inline-block;
  width: 10%;
  box-sizing: border-box;
  font-size: 27.2px;
}
.routerLink:hover {
  color: rgb(57, 192, 255);
  border-bottom: 3px solid rgb(57, 192, 255);
}
</style>
