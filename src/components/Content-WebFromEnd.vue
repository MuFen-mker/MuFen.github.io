<template>
  <div>
    <div class="MainContent">
      <div class="headDecoration">
        <el-skeleton style="width: 100%" :loading="loading" animated>
          <template #template>
            <div
              style="
                padding: 14px;
                display: flex;
                justify-content: space-between;
                height: 100%;
                background-color: white;
              "
            >
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  width: 80%;
                "
              >
                <el-skeleton-item variant="h3" style="width: 100%" />
                <el-skeleton-item variant="h3" style="width: 100%" />
              </div>

              <el-skeleton-item
                variant="image"
                style="aspect-ratio: 1/1; height: 100%"
              />
            </div>
          </template>
          <template #default>
            <div>
              <p>
                『Where there is a will there is a way，Where there is a
                will。』
              </p>
              <p style="text-align: right">
                『♪ Determination Symphony-Roselia』
              </p>
            </div>
            <div class="Cover"></div>
            <img :src="haeDerImg" />
          </template>
        </el-skeleton>
      </div>
      <div class="Tips">
        <p>个人收藏与创作的一些文章</p>
      </div>
      <transition name="displayNone">
        <div v-show="!$store.state.shows">
          <ul class="webFromEndUl">
            <li
              @click="ChangeTheDisplay(Index.title)"
              v-for="Index in Slight"
              :key="Index.id"
            >
              <a class="routerLink">
                <h1>
                  <bookshelf
                    theme="two-tone"
                    size="100%"
                    :fill="['#333', '#f5a623']"
                  />{{ Index.title }}
                </h1>
                <p>{{ Index.text }}</p>
              </a>
            </li>
          </ul>
        </div>
      </transition>

      <webFromEnd></webFromEnd>
    </div>
  </div>
</template>

<script>
import { Bookshelf } from '@icon-park/vue-next'
import { reactive, toRefs } from '@vue/reactivity'
import { nanoid } from 'nanoid'

import { useStore } from 'vuex'
import useImgLoading from '@/hooks/useImgLoading'
import { onMounted } from '@vue/runtime-core'
import webFromEnd from '@/pages/WebFromEnd.vue'
export default {
  name: 'ContentWebFromEnd',
  components: { Bookshelf, webFromEnd },
  setup() {
    const store = useStore()
    let ImgPath = require('@/assets/WebFromEndHeadFigure.jpg')
    const haeDerImg = ImgPath

    const getImgPath = function () {
      let Img = new Image()
      Img.onload = () => {
        setTimeout(() => {
          loading.value = false
        })
      }
      Img.src = ImgPath
    }

    const { loading } = useImgLoading()

    let WebFromEndData = reactive({
      Slight: [],
    })

    // 获取markdown文件名
    const getMarkDownName = function () {
      const filses = require('@/../public/markdown/markDownPath.js')
      const fileInformation = filses.default
      WebFromEndData.Slight = fileInformation.Slight
      for (let index = 0; index < WebFromEndData.Slight.length; index++) {
        WebFromEndData.Slight[index].id = nanoid()
      }
    }
    const ChangeTheDisplay = function (title) {
      store.commit('changMarkdownName', title)
      store.commit('WebFromEnd')
    }
    onMounted(() => {
      getImgPath()
      getMarkDownName()
    })

    return {
      ...toRefs(WebFromEndData),
      loading,
      haeDerImg,
      store,
      ChangeTheDisplay,
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
  .routerLink p {
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
.displayNone-leave-active {
  transition: all 0.7s;
}
.displayNone-leave-to {
  opacity: 0;
}
.displayNone-leave-from {
  opacity: 1;
}
</style>
