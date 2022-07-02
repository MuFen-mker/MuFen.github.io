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
                『自分を責めないで抱きしめなさい，弱さを知る者は強さを宿す。』
              </p>
              <p style="text-align: right">『♪ BRAVE JEWEL-Roselia』</p>
            </div>
            <div class="Cover"></div>
            <img :src="haeDerImg" />
          </template>
        </el-skeleton>
      </div>
      <div class="Tips">
        <p>收藏的一些不错的网站(正经的)</p>
      </div>
      <div>
        <ul class="webFromEndUl">
          <li v-for="Index in Slight" :key="Index.id">
            <a target="_blank" class="externalLink" :href="Index.routersRun">
              <h1>
                <browser
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
    </div>
  </div>
</template>

<script>
import { Browser } from '@icon-park/vue-next'
import { reactive, toRefs } from '@vue/reactivity'
import { nanoid } from 'nanoid'

import useImgLoading from '@/hooks/useImgLoading'
import { onMounted } from '@vue/runtime-core'
export default {
  name: 'ContentDryingTutorial',
  components: { Browser },
  setup() {
    let ImgPath = require('@/assets/CommonWebsiteHeadFigure.jpg')
    const haeDerImg = ImgPath
    const { loading } = useImgLoading()
    let WebFromEndData = reactive({
      Slight: [
        {
          id: nanoid(),
          title: 'BigJpg',
          text: '一个可以把图片快速放大并降噪的网站,妈妈再也不用担心我找的素材太糊了。',
          routersRun: 'https://bigjpg.com/',
        },
        {
          id: nanoid(),
          title: 'BiLiBiLi弹幕网',
          text: 'B站早期是一个ACG内容创作与分享的视频网站,现在有了很多教程和科普类的视频。',
          routersRun: 'https://www.bilibili.com/',
        },
        {
          id: nanoid(),
          title: '酷安',
          text: '从应用市场转变而成Android设备的论坛,大佬云集的地方,很多精品帖。',
          routersRun: 'https://www.coolapk.com/',
        },
        {
          id: nanoid(),
          title: '菜鸟教程',
          text: '编程初学者必备网站,多种语言与开发工具教程,编程百科全书。',
          routersRun: 'https://www.runoob.com/',
        },
        {
          id: nanoid(),
          title: 'CSDN',
          text: '中文开发者论坛,一些不知道如何用代码实现的功能都可以来这里找找,说不定就有呢?',
          routersRun: 'https://www.csdn.net/',
        },
        {
          id: nanoid(),
          title: 'GitHub',
          text: '一个代码托管服务平台,可以托管各种Git库，并提供一个 Web 界面，但国内访问体验不佳。',
          routersRun: 'https://github.com/',
        },
        {
          id: nanoid(),
          title: 'Gitee',
          text: '如果你希望体验到 Git 飞一般的速度，可以使用国内的 Git 托管服务——Gitee。',
          routersRun: 'https://gitee.com/',
        },
        {
          id: nanoid(),
          title: 'Transfonter',
          text: '线上字体格式转换工具,支持:TTF、EOT、WOFF、WOFF2、SVG,用于自定义Web字体。',
          routersRun: 'https://transfonter.org/',
        },
        {
          id: nanoid(),
          title: 'Wormhole',
          text: '不限速文件分享网站,无需登录,下载次数限制,存放时间24小时,但是可以上传10GB大的文件。',
          routersRun: 'https://wormhole.app/',
        },
        {
          id: nanoid(),
          title: 'Removebg',
          text: '在线快速抠图消除背景的网站,虽然我觉得还是不如PS...',
          routersRun: 'https://www.remove.bg/zh',
        },
        {
          id: nanoid(),
          title: 'Photopea',
          text: '网页版PS,没错,是网页版,虽说阉割了部分功能,但常用的都在,可以在没有PS的时候应急用。',
          routersRun: 'https://www.photopea.com/',
        },
        {
          id: nanoid(),
          title: '恩山无线论坛',
          text: '国内最大的无线路由器论坛,超多技术贴,海量路由器固件,和这些比起来一块钱注册费确实不贵。',
          routersRun: 'https://www.right.com.cn/forum/index.php',
        },
        {
          id: nanoid(),
          title: 'IconPark',
          text: '字节跳动出品的图标库，图标非常多，支持React Vue，也能直接复制SVG和PNG。',
          routersRun: 'https://iconpark.oceanengine.com/home',
        },
        {
          id: nanoid(),
          title: 'elementPlus',
          text: 'elementUi的Vue3版本，里面的组件都挺好用，快速建站小助手。',
          routersRun: 'https://element-plus.gitee.io/zh-CN/',
        },
        {
          id: nanoid(),
          title: 'elementPlus',
          text: 'elementUi的Vue3版本，里面的组件都挺好用，快速建站小助手。',
          routersRun: 'https://element-plus.gitee.io/zh-CN/',
        },
        {
          id: nanoid(),
          title: 'Tinypng',
          text: 'Web图片压缩工具，快速压缩PNG格式的图片，让页面加载更快~',
          routersRun: 'https://tinypng.com/',
        },
      ],
    })

    const getImgPath = function () {
      let Img = new Image()
      Img.onload = () => {
        setTimeout(() => {
          loading.value = false
        })
      }
      Img.src = ImgPath
    }

    onMounted(() => {
      getImgPath()
    })

    return {
      ...toRefs(WebFromEndData),
      haeDerImg,
      loading,
    }
  },
}
</script>

<style scoped>
ul {
  padding-left: 0;
}
.i-icon {
  height: 40px !important;
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
.externalLink p {
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
.externalLink h1 {
  font-size: 28.8px;
  display: flex;
  align-items: center;
}
.externalLink {
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
  .externalLink h1 {
    font-size: 20px;
  }
  .i-icon {
    height: 30px !important;
  }
  .externalLink p {
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
  .externalLink h1 {
    font-size: 12px;
  }
  .i-icon {
    height: 20px !important;
  }
}
</style>
