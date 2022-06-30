<template>
  <transition name="enterAnAnimation">
    <div style="overflow-x: auto" v-if="shows" class="webFromEndText">
      <div @click="backToTheUpperLevel()" class="Return">
        <div class="returnBottom">
          <double-left theme="outline" size="100%" fill="#000000" />
        </div>
        <span>返回</span>
      </div>
      <div class="webFromEndBody">
        <h1>1、安装该插件</h1>
        <prism-editor
          class="code"
          v-model="code1"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <h1>2、项目main.js中引入</h1>
        <prism-editor
          class="code"
          v-model="code2"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <h1>3、页面代码</h1>
        <prism-editor
          class="code"
          v-model="code3"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <h1>作者:我Huai西</h1>
        <a
          target="_blank"
          href="https://blog.csdn.net/qq_48578649/article/details/121244389?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_utm_term~default-1-121244389-blog-109198023.pc_relevant_antiscanv3&spm=1001.2101.3001.4242.2&utm_relevant_index=4"
        >
          <div class="linkIcon">
            <link-one theme="outline" size="100%" fill="#333" />
          </div>
          vue2 + vue-video-player 视频播放器</a
        >
      </div>
    </div>
  </transition>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles
import { reactive, ref, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { DoubleLeft, LinkOne } from '@icon-park/vue-next'
import { useRouter } from 'vue-router'
export default {
  name: 'webFromEndText',
  components: {
    DoubleLeft,
    LinkOne,
    PrismEditor,
  },
  setup() {
    const $router = useRouter()

    let shows = ref(false)

    let CodeData = reactive({
      code1: 'npm install vue-video-player',
      code2:
        "import VideoPlayer from 'vue-video-player'\nrequire('video.js/dist/video-js.css')\nrequire('vue-video-player/src/custom-theme.css')\nVue.use(VideoPlayer)",
      code3: 
        '<template>\n\n  <div class=\"video\">\n\n    <video-player\n\n      class=\"video-player vjs-custom-skin\"\n\n      ref=\"videoPlayer\"\n\n      :playsinline=\"true\"\n\n      :options=\"playerOptions\"\n\n      @timeupdate=\"onPlayerTimeupdate($event)\"\n\n      @ready=\"playerReadied\"\n\n    ></video-player>\n\n    <b-button style=\"margin-left:40%;margin-top:5px\" variant=\"outline-primary\" @click=\"goBack\">后退</b-button>\n\n    <b-button style=\"margin-left:20px;margin-top:5px\" variant=\"outline-primary\" @click=\"goFast\">快进</b-button>\n\n  </div>\n\n</template>\n\n<script>\n\nexport default {\n\n  name: \"Video2\",\n\n  props:[\'url\'],\n\n  data() {\n\n    return {\n\n      playerOptions: {\n\n        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度\n\n        currentTime: \"00:00\",\n\n        autoplay: false, //如果true,浏览器准备好时开始回放。\n\n        muted: false, // 默认情况下将会消除任何音频。\n\n        loop: false, // 导致视频一结束就重新开始。\n\n        preload: \"auto\", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）\n\n        language: \"zh-CN\",\n\n        aspectRatio: \"16:9\", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如\"16:9\"或\"4:3\"）\n\n        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。\n\n        sources: [\n\n          {\n\n            type: \"video/mp4\", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目\n\n            // src:require(\"../../../assets/vd.mp4\"), //本地视频使用方式，本地图片引入亦如此\n\n            src: \"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4\",//视频地址\n\n          },\n\n        ],\n\n        poster:this.url, //你的封面地址\n\n        // width: document.documentElement.clientWidth, //播放器宽度\n\n        notSupportedMessage: \"此视频暂无法播放，请稍后再试\", //允许覆盖Video.js无法播放媒体源时显示的默认信息。\n\n        controlBar: {\n\n          timeDivider: true,\n\n          durationDisplay: true,\n\n          remainingTimeDisplay: false,\n\n          fullscreenToggle: true, //全屏按钮\n\n        },\n\n      },\n\n      //一开始视频观看时长，可用于记录视频播放的时间，下一次直接从这个时间开始播放\n\n      gklog: \'\',\n\n    };\n\n  },\n\n  methods: {\n\n    //视频快进\n\n    goFast() {\n\n      this.gklog += 5;\n\n      // console.log(\" 快进\", this.gklog,this.$refs.videoPlayer);\n\n       this.$refs.videoPlayer.player.currentTime(this.gklog)\n\n    },\n\n    //视频后退\n\n    goBack() {\n\n      this.gklog -= 5;\n\n      // console.log(\" 后退\", this.gklog,this.$refs.videoPlayer);\n\n       this.$refs.videoPlayer.player.currentTime(this.gklog);\n\n    },\n\n    /* 设置视频进度 */\n\n    playerReadied(player) {\n\n      player.currentTime(this.gklog);\n\n      // console.log(\"视频初始时长\",this.gklog)\n\n    },\n\n     onPlayerTimeupdate(player) {\n\n      this.gklog = player.cache_.currentTime;//获取当前播放时间\n\n      // console.log(\" onPlayerTimeupdate!\", this.gklog);\n\n    },\n\n  },\n\n  watch:{\n\n    gklog:function(){\n\n    }\n\n  }\n\n};\n\n<\/script>\n\n<style scoped>\n\n.video-js .vjs-icon-placeholder {\n\n  width: 100%;\n\n  height: 100%;\n\n  display: block;\n\n}\n\n.video-player {\n\n  width: 100%;\n\n  height: 100%;\n\n}\n\n</style>',
    })
    let inCodeData = reactive({})

    const backToTheUpperLevel = function () {
      shows.value = false
      setTimeout(() => {
        $router.push({ name: 'WebFromEnd' })
      }, 1000)
    }
    onMounted(() => {
      shows.value = true
    })
    return {
      ...toRefs(CodeData),
      ...toRefs(inCodeData),
      shows,
      backToTheUpperLevel,
    }
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js)
    },
  },
}
</script>

<style scoped>
.linkIcon {
  height: 24px;
  display: inline-block;
}
.returnBottom > .i-icon {
  height: 48px;
}
.inCode {
  background: #f0f0f0;
  color: rgb(0, 0, 0);
  font-family: 'JetBrains';
  font-size: 16px;
  width: auto;
  padding: 5px;
  display: inline-block;
}
.code {
  background: #f0f0f0;
  color: rgb(0, 0, 0);
  font-family: 'JetBrains';
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

.webFromEndText {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border: 3px solid black;
  background: white;
  z-index: 999999999999;
  box-sizing: border-box;
}
.webFromEndBody {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% auto;
  width: 70%;
}
.webFromEndBody > p {
  font-size: 16px;
  display: flex;
  align-items: center;
}
.webFromEndBody > h1 {
  font-size: 24px;
  margin: 16px 0;
}
.webFromEndBody > a {
  font-size: 24px;
  text-decoration: none;
  margin-top: 1%;
  color: black;
}
.webFromEndBody > a:hover {
  color: rgb(57, 192, 255);
}
.Return {
  position: fixed;
  display: flex;
  align-items: center;
  top: 30px;
  left: 20px;
  font-size: 24px;
  padding: 16px 32px 16px 16px;
}
.Return span {
  display: flex;
  align-items: center;
}
.Return:hover {
  background: rgb(240, 240, 240);
}
.enterAnAnimation-enter-active {
  animation: enterAnAnimation 0.8s;
}
.enterAnAnimation-leave-active {
  animation: enterAnAnimation 0.8s reverse;
}
@keyframes enterAnAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@media screen and (max-width: 1200px) {
  .webFromEndBody {
    margin: 100px auto;
    width: 98%;
    align-items: flex-start;
  }
  .Return {
    top: 5px;
    left: 5px;
    background: gainsboro;
    border-radius: 5px;
    z-index: 999999;
  }
}
@media screen and (max-width: 840px) {
  .webFromEndBody > h1 {
    font-size: 18px;
  }
  .webFromEndBody > p {
    font-size: 12px;
  }
  .inCode {
    font-size: 12px;
  }
  .code {
    font-size: 12px;
  }
  .Return[data-v-2bbe7d42] {
    font-size: 20px;
    padding: 10px 24px 10px 18px;
  }
  .webFromEndBody > a {
    font-size: 18px;
  }
  .linkIcon {
    height: 18px;
  }
  .returnBottom > .i-icon {
    height: 30px;
  }
}
@media screen and (max-width: 700px) {
  .webFromEndBody > h1 {
    font-size: 14px;
  }
  .webFromEndBody > p {
    transform: scale(90%);
  }
  .Return[data-v-2bbe7d42] {
    font-size: 16px;
    padding: 10px 24px 10px 18px;
  }
  .webFromEndBody > a {
    font-size: 14px;
  }
  .linkIcon {
    height: 14px;
  }
  .returnBottom > .i-icon {
    height: 24px;
  }
  .code {
    transform: scale(90%);
    width: 112%;
    margin: 0 0 0 -6%;
  }
}
@media screen and (max-width: 585px) {
  .webFromEndBody > h1 {
    font-size: 12px;
  }
  .webFromEndBody > p {
    transform: scale(80%);
    margin: 0 0 0 -7%;
  }
  .Return[data-v-2bbe7d42] {
    font-size: 12px;
    padding: 10px 24px 10px 18px;
  }
  .webFromEndBody > a {
    font-size: 12px;
  }
  .linkIcon {
    height: 12px;
  }
  .returnBottom > .i-icon {
    height: 16px;
  }
  .code {
    transform: scale(80%);
    width: 126%;
    margin: 0 0 0 -13%;
  }
}
@media screen and (max-width: 500px) {
  .webFromEndBody > h1 {
    font-size: 12px;
  }
  .webFromEndBody > p {
    transform: scale(70%);
    margin: 0 0 0 -22%;
    width: 143%;
  }
  .Return[data-v-2bbe7d42] {
    font-size: 12px;
    padding: 10px 24px 10px 18px;
  }
  .webFromEndBody > a {
    font-size: 12px;
  }
  .linkIcon {
    height: 12px;
  }
  .returnBottom > .i-icon {
    height: 12px;
  }
  .code {
    transform: scale(70%);
    width: 142%;
    margin: 0 0 0 -21%;
  }
}
@media screen and (max-width: 450px) {
  .webFromEndBody > h1 {
    font-size: 12px;
  }
  .webFromEndBody > p {
    transform: scale(60%);
    margin: 0 0 0 -28%;
    width: 143%;
  }
  .Return[data-v-2bbe7d42] {
    font-size: 12px;
    padding: 10px 24px 10px 18px;
  }
  .webFromEndBody > a {
    font-size: 12px;
  }
  .linkIcon {
    height: 12px;
  }
  .returnBottom > .i-icon {
    height: 12px;
  }
  .code {
    transform: scale(60%);
    width: 166%;
    margin: 0 0 0 -33%;
  }
}
</style>
