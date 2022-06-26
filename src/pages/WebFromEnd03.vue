<template>
  <transition name="enterAnAnimation">
    <div style="overflow-x: auto" v-if="shows" class="webFromEndText">
      <div @click="backToTheUpperLevel()" class="Return">
        <double-left theme="outline" size="40" fill="#000000" /><span
          >返回</span
        >
      </div>
      <div class="webFromEndBody">
        <h1>1、安装该插件</h1>
        <pre>
        npm install vue-video-player
       </pre
        >
        <h1>2、项目main.js中引入</h1>
        <pre>
        import VideoPlayer from 'vue-video-player'
        require('video.js/dist/video-js.css')
        require('vue-video-player/src/custom-theme.css')
        Vue.use(VideoPlayer)
       </pre
        >
        <h1>3、页面代码</h1>
        <pre>
&lt;template&gt;

  &lt;div class="video"&gt;

    &lt;video-player

      class="video-player vjs-custom-skin"

      ref="videoPlayer"

      :playsinline="true"

      :options="playerOptions"

      @timeupdate="onPlayerTimeupdate($event)"

      @ready="playerReadied"

    &gt;&lt;/video-player&gt;

    &lt;b-button style="margin-left:40%;margin-top:5px" variant="outline-primary" @click="goBack"&gt;后退&lt;/b-button&gt;

    &lt;b-button style="margin-left:20px;margin-top:5px" variant="outline-primary" @click="goFast"&gt;快进&lt;/b-button&gt;

  &lt;/div&gt;

&lt;/template&gt;

&lt;script&gt;

export default {

  name: "Video2",

  props:['url'],

  data() {

    return {

      playerOptions: {

        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度

        currentTime: "00:00",

        autoplay: false, //如果true,浏览器准备好时开始回放。

        muted: false, // 默认情况下将会消除任何音频。

        loop: false, // 导致视频一结束就重新开始。

        preload: "auto", // 建议浏览器在&lt;video&gt;加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）

        language: "zh-CN",

        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）

        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。

        sources: [

          {

            type: "video/mp4", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目

            // src:require("../../../assets/vd.mp4"), //本地视频使用方式，本地图片引入亦如此

            src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",//视频地址

          },

        ],

        poster:this.url, //你的封面地址

        // width: document.documentElement.clientWidth, //播放器宽度

        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。

        controlBar: {

          timeDivider: true,

          durationDisplay: true,

          remainingTimeDisplay: false,

          fullscreenToggle: true, //全屏按钮

        },

      },

      //一开始视频观看时长，可用于记录视频播放的时间，下一次直接从这个时间开始播放

      gklog: '',

    };

  },

  methods: {

    //视频快进

    goFast() {

      this.gklog += 5;

      // console.log(" 快进", this.gklog,this.$refs.videoPlayer);

       this.$refs.videoPlayer.player.currentTime(this.gklog)

    },

    //视频后退

    goBack() {

      this.gklog -= 5;

      // console.log(" 后退", this.gklog,this.$refs.videoPlayer);

       this.$refs.videoPlayer.player.currentTime(this.gklog);

    },

    /* 设置视频进度 */

    playerReadied(player) {

      player.currentTime(this.gklog);

      // console.log("视频初始时长",this.gklog)

    },

     onPlayerTimeupdate(player) {

      this.gklog = player.cache_.currentTime;//获取当前播放时间

      // console.log(" onPlayerTimeupdate!", this.gklog);

    },

  },

  watch:{

    gklog:function(){

    }

  }

};

&lt;/script&gt;

&lt;style scoped&gt;

.video-js .vjs-icon-placeholder {

  width: 100%;

  height: 100%;

  display: block;

}

.video-player {

  width: 100%;

  height: 100%;

}

&lt;/style&gt;       
        </pre>
        <h1>作者:我Huai西</h1>
        <a
          target="_blank"
          href="https://blog.csdn.net/qq_48578649/article/details/121244389?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_utm_term~default-1-121244389-blog-109198023.pc_relevant_antiscanv3&spm=1001.2101.3001.4242.2&utm_relevant_index=4"
          ><link-one theme="outline" size="24" fill="#333" />vue2 +
          vue-video-player 视频播放器</a
        >
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { DoubleLeft, LinkOne } from '@icon-park/vue-next'
import { useRouter } from 'vue-router'
export default {
  name: 'webFromEndText',
  components: {
    DoubleLeft,
    LinkOne,
  },
  setup() {
    const $router = useRouter()

    let shows = ref(false)

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
      shows,
      backToTheUpperLevel,
    }
  },
}
</script>

<style scoped>
pre {
  background: rgb(233, 233, 233);
  padding: 1%;
  width: 50%;
  margin: 0.5%;
  color: black;
  font-family: 'AW';
  font-size: 12.8px;
}
code {
  background: rgb(233, 233, 233);
  padding: 1%;
  width: 50%;
  margin: 0.5%;
  color: black;
  font-family: 'AW';
  font-size: 12.8px;
}
.webFromEndText {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border: 3px solid black;
  background: white;
  z-index: 999;
  box-sizing: border-box;
}
.webFromEndBody {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% 0;
}
.webFromEndBody > p {
  font-size: 16px;
  display: inline-block;
}
.webFromEndBody > h1 {
  font-size: 24px;
  margin: 16px 0 0 3.2px;
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
  top: 160px;
  left: 32px;
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
</style>
