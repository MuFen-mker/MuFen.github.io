<template>
  <div>
    <router-view></router-view>
    <div class="MainContent">
      <div class="headDecoration">
        <div>
          <p>
            『Where there is a will there is a way，Where there is a will。』
          </p>
          <p style="text-align: right">『♪ Determination Symphony-Roselia』</p>
        </div>
        <div class="Cover"></div>
        <img src="@/assets/WebFromEndHeadFigure.jpg" />
      </div>
      <div class="Tips">
        <p>个人收集并整理的前端相关文章</p>
      </div>
      <div>
        <ul class="webFromEndUl">
          <li v-for="Index in Slight" :key="Index.id">
            <router-link class="routerLink" :to="{ name: Index.routersRun }">
              <h1>
                <bookshelf
                  theme="two-tone"
                  size="100%"
                  :fill="['#333', '#f5a623']"
                />{{ Index.title }}
              </h1>
              <p>{{ Index.text }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Bookshelf } from '@icon-park/vue-next'
import { reactive, toRefs } from '@vue/reactivity'
import { nanoid } from 'nanoid'
export default {
  name: 'ContentWebFromEnd',
  components: { Bookshelf },
  setup() {
    let WebFromEndData = reactive({
      Slight: [
        {
          id: nanoid(),
          title: 'Axios在vue3中的使用教程及注意事项',
          text: '引入首先运行npm install --save axios vue-axios命令安装axios和vue-axios在vue3项目的main.js文件中插入以下代码引入axios，注意vue-axios和axios需要搭配使用...',
          routersRun: '01',
        },
        {
          id: nanoid(),
          title: 'Vue中 关于$emit的用法',
          text: 'vue2.x1、父组件可以使用 props 把数据传给子组件。2、子组件可以使用 $emit,让父组件监听到自定义事件 。vm.$emit( event, arg ) //触发当前实例上的事件vm.$on( event, fn );//监听event事件后运行 fn； 例如：子组件...',
          routersRun: '02',
        },
        {
          id: nanoid(),
          title: 'vue2 + vue-video-player 视频播放器',
          text: '1、安装该插件,2、项目main.js中引入,3、页面代码...',
          routersRun: '03',
        },
        {
          id: nanoid(),
          title: 'vue生命周期的理解',
          text: '一.Vue生命周期简介,官网：https://cn.vuejs.org/v2/api/#beforeCreate,Vue实例从创建到销毁的过程，就是生命周期。详细来说也就是从开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、卸载等一系列过程。...',
          routersRun: '04',
        },
        {
          id: nanoid(),
          title: 'bootstrap基本使用，快速了解bootstrap',
          text: '本文只涉及bootstrap基本使用，不提供代码案例。以便于快速了解bootstrap是什么。详细使用规则还是要看官方文档。注意：bootstrap的核心是掌握容器和栅格系统...',
          routersRun: '05',
        },
      ],
    })
    return {
      ...toRefs(WebFromEndData),
    }
  },
}
</script>

<style scoped>
ol,
ul {
  padding-left: 0;
}
.Cover {
  background: -webkit-linear-gradient(
    left,
    rgb(240, 240, 240),
    rgba(240, 240, 240, 0)
  );
  width: 14.2% !important;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
}
.webFromEndUl {
  list-style: none;
  margin: 0 5%;
}
.webFromEndUl li {
  margin: 8% 0;
  border-radius: 2px;
  padding: 1%;
}
.webFromEndUl li:hover {
  background: rgba(0, 0, 0, 0.05);
}
.routerLink p {
  font-size: 16px;
  border-top: 2px solid orange;
  margin-top: 1%;
  padding-top: 1%;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: rgb(80, 80, 80);
}
.routerLink h1 {
  font-size: 28.8px;
  display: flex;
  align-items: center;
}
.routerLink {
  width: 100%;
  position: relative;
  z-index: 99;
  text-decoration: none;
}
.MainContent {
  margin: 5% auto;
  width: 1120px;
  background: rgb(255, 255, 255);
  border: 3px solid orange;
  border-radius: 10px;
}
.headDecoration {
  display: flex;
  justify-content: space-between;
  height: 160px;
  background: rgb(240, 240, 240);
  border-radius: 10px 10px 0 0;
  margin-bottom: 3%;
  border-bottom: 2px solid black;
  position: relative;
}
.headDecoration > img {
  height: 100%;
  border-radius: 0 7px 0 0;
}
.headDecoration > div {
  width: 100%;
}
.headDecoration p {
  margin: 3.5%;
  font-size: 22.4px;
}
.Tips {
  font-size: 18px;
  text-align: center;
}
.i-icon {
  height: 40px !important;
}
@media screen and (max-width: 1200px) {
  .MainContent {
    width: 93.35%;
  }
  .Cover {
    width: 158px !important;
  }
}
@media screen and (max-width: 974px) {
  .headDecoration p {
    font-size: 18px;
  }
  .headDecoration {
    height: 125px;
  }
  .Cover {
    width: 125px !important;
  }
}
@media screen and (max-width: 780px) {
  .headDecoration p {
    font-size: 16px;
  }
  .headDecoration {
    height: 110px;
  }
  .Cover {
    width: 110px !important;
  }
}
@media screen and (max-width: 705px) {
  .Tips p {
    font-size: 16px;
  }
  .routerLink h1 {
    font-size: 20px;
  }
  .i-icon {
    height: 30px !important;
  }
  .routerLink p{
    font-size: 12px;
  }
}
@media screen and (max-width: 700px) {
  .headDecoration p {
    font-size: 14px;
  }
  .headDecoration {
    height: 100px;
  }
  .Cover {
    width: 100px !important;
  }
  .webFromEndUl {
    margin: 0;
  }
}
@media screen and (max-width: 609px) {
  .headDecoration p {
    font-size: 12px;
  }
  .headDecoration {
    height: 85px;
  }
  .Cover {
    width: 85px !important;
  }
}
@media screen and (max-width: 525px) {
  .routerLink h1 {
    font-size: 12px;
  }
  .i-icon {
    height: 20px !important;
  }
}
</style>
