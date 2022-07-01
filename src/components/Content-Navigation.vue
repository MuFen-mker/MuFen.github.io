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
  color: black;
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
  margin-top: 75px;
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
@media screen and (max-width: 1200px) {
  ul {
    margin-bottom: 0;
    padding-left: 0;
  }
  .navigationBar > ul > li {
    width: 15%;
  }
}
@media screen and (max-width: 810px) {
  .navigationBar > ul > li {
    width: 16.5%;
  }
}
@media screen and (max-width: 706px) {
  .navigationBar > ul > li {
    font-size: 20px;
  }
}
@media screen and (max-width: 645px) {
  .navigationBar {
    margin-top: 45px;
  }
}
@media screen and (max-width: 516px) {
  .navigationBar > ul > li {
    font-size: 18px;
  }
  .routerLink {
    border-bottom: 2px solid black;
  }
  .routerLink:hover {
    border-bottom: 2px solid rgb(57, 192, 255);
  }
  .Activation {
    border-bottom: 2px solid orange !important;
  }
}
@media screen and (max-width: 456px) {
  .navigationBar {
    margin-top: 20px;
  }
  .navigationBar > ul > li {
    font-size: 15px;
  }
}
@media screen and (max-width: 456px) {
  .navigationBar > ul > li {
    font-size: 12px;
  }
}
</style>
