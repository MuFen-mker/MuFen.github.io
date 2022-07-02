# vue2 + vue-video-player 视频播放器

##### By : [我Huai西](https://blog.csdn.net/qq_48578649)

##### [原文链接](https://blog.csdn.net/qq_48578649/article/details/121244389?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_utm_term~default-1-121244389-blog-109198023.pc_relevant_antiscanv3&spm=1001.2101.3001.4242.2&utm_relevant_index=4)



### 1、安装该插件

```
npm install vue-video-player
```

### 2、项目main.js中引入

```javascript
import VideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css')

require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)
```

### 3、页面代码

```javascript
<template>

  <div class="video">

    <video-player

      class="video-player vjs-custom-skin"

      ref="videoPlayer"

      :playsinline="true"

      :options="playerOptions"

      @timeupdate="onPlayerTimeupdate($event)"

      @ready="playerReadied"

    ></video-player>

    <b-button style="margin-left:40%;margin-top:5px" variant="outline-primary" @click="goBack">后退</b-button>

    <b-button style="margin-left:20px;margin-top:5px" variant="outline-primary" @click="goFast">快进</b-button>

  </div>

</template>

<script>

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

        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）

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

</script>

<style scoped>

.video-js .vjs-icon-placeholder {

  width: 100%;

  height: 100%;

  display: block;

}

.video-player {

  width: 100%;

  height: 100%;

}

</style>
```

