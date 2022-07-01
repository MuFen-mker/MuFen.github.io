<template>
  <transition name="goInIndex">
    <div v-show="allDisplay" :class="topMode ? 'topModeOn' : ''">
      <transition :name="topMode ? 'minimizeAnimation' : ''">
        <div
          v-show="!minimize"
          :class="
            topMode
              ? 'NeteaseCloudMusicPlayer-Narrow'
              : 'NeteaseCloudMusicPlayer'
          "
          :style="{
            backgroundImage: coverBackground.backgroundImage,
            backgroundSize: coverBackground.backgroundSize,
            backgroundPositionX: coverBackground.backgroundPositionX,
            backgroundPositionY: coverBackground.backgroundPositionY,
            backgroundRepeat: coverBackground.backgroundRepeat,
          }"
        >
          <div @click="minimize = true" v-if="topMode" class="leftOne">
            <left-one theme="outline" size="100%" fill="#000000" />
          </div>
          <div v-show="!topMode" class="maskLayer"></div>
          <div :class="topMode ? 'buttons-Narrow' : 'buttons'">
            <div :class="topMode ? 'title-Narrow' : 'title'">
              <h1>{{ nameOfTheSong }}</h1>
              <br class="Changes" v-show="!topMode" />
              <p>{{ singerName }}</p>
            </div>
            <audio ref="audio" :src="songAddress" style="display: none"></audio>
            <div :class="topMode ? 'progressBarAndButtonBox-Narrow' : ''">
              <div :class="topMode ? 'playingTime' : ''">
                <input
                  :style="{
                    backgroundSize:
                      (musicBarValue / durationOfMusic) * 100 + '%',
                  }"
                  v-model="musicBarValue"
                  :class="topMode ? 'musicBar-Narrow' : 'musicBar'"
                  type="range"
                  name="musicBar"
                  id="musicBar"
                  ref="musicBar"
                  :max="durationOfMusic"
                  min="0"
                  @touchstart="surgeryNoteClickDown"
                  @touchmove="surgeryNoteClickUp"
                  @mousedown="surgeryNoteClickDown"
                  @mouseup="surgeryNoteClickUp"
                />
                <p :class="topMode ? 'musicDuration-Narrow' : 'musicDuration'">
                  {{ (musicBarValue / 60).toFixed(2) }}/{{
                    (durationOfMusic / 60).toFixed(2)
                  }}
                </p>
              </div>
              <div :class="topMode ? 'playButton-Narrow' : 'playButton'">
                <go-start
                  @click="previousSong"
                  theme="outline"
                  size="100%"
                  :fill="topMode ? '#000000' : '#ffffff'"
                />
                <pause
                  v-show="showPlayOne"
                  @click="playClick()"
                  theme="outline"
                  size="100%"
                  :fill="topMode ? '#000000' : '#ffffff'"
                />
                <play-one
                  v-show="showPause"
                  @click="playClick()"
                  theme="outline"
                  size="100%"
                  :fill="topMode ? '#000000' : '#ffffff'"
                />
                <go-end
                  @click="nextSong"
                  theme="outline"
                  size="100%"
                  :fill="topMode ? '#000000' : '#ffffff'"
                />
              </div>
            </div>
          </div>
          <div>
            <div v-show="topMode" class="maskLayer-Narrow"></div>
            <img :class="topMode ? 'Cover-Narrow' : 'Cover'" :src="Cover" />
          </div>
        </div>
      </transition>
      <transition name="goInIndex">
        <div
          v-if="topMode && minimize && hiddenMini"
          class="minimize"
          @click="minimize = false"
        >
          <img class="Cover-Mini" :src="Cover" />
          <div class="RightOne">
            <right-one theme="outline" size="100%" fill="#000000" />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { getCurrentInstance } from 'vue'
import { reactive, ref, toRefs } from '@vue/reactivity'
import {
  GoStart,
  Pause,
  PlayOne,
  GoEnd,
  LeftOne,
  RightOne,
} from '@icon-park/vue-next'
import { onBeforeUnmount, onMounted, watch } from '@vue/runtime-core'
import axios from 'axios'
// 导入节流函数
import stopUpDownFunList from '@/hooks/stopUpDownFunList.js'
import stopUpDownFunList2 from '@/hooks/stopUpDownFunList2.js'
import { useRouter } from 'vue-router'
export default {
  name: 'IndexMusic',
  components: {
    GoStart,
    Pause,
    PlayOne,
    GoEnd,
    LeftOne,
    RightOne,
  },
  setup() {
    // 声明路由
    const $router = useRouter()

    // 进度条DOM
    let musicBar = ref()
    // 节流函数
    const stopUpDown = stopUpDownFunList()
    const stopUpDown2 = stopUpDownFunList2()
    // 播放状态
    let playPause = ref(false)
    let hiddenMini = ref(false)
    let timer = null
    let audioDom = ''
    let NeteaseCloudMusicPlayer = reactive({
      Cover: require('@/assets/music-one.svg'),
      overallBackground: require('@/assets/playerBackground.jpg'),
      title: [{}],
      showPlayOne: false,
      showPause: true,

      // 自定义接口
      // 歌单ID(请确保歌单内的歌曲都是可以在网易云内在线播放并且不需要VIP)
      songListId: '7500267885',

      // 当前歌曲名
      nameOfTheSong: '暂无歌曲',
      // 当前歌手名
      singerName: '暂无歌手',
      // 当前歌曲地址
      songAddress: '',
      // 第几首
      numberOfSongs: 0,
      // 进度条的值
      musicBarValue: 0,
      // 总时长
      durationOfMusic: 0,
      // 有效歌曲数量
      effectiveSong: 0,
      // 封面背景
      coverBackground: {
        backgroundImage: 'url()',
        backgroundSize: 'cover',
        backgroundPositionX: '0%',
        backgroundPositionY: '30%',
        backgroundRepeat: 'no-repeat',
      },
    })
    // 吸顶模式
    let topMode = ref(false)
    // 最小化
    let minimize = ref(false)

    // 整体显示
    let allDisplay = ref(false)

    const start = function () {
      audioDom.refs.audio.play()
      audioTime()
      playPause.value = true
    }
    const pause = function () {
      audioDom.refs.audio.pause()
      clearInterval(timer)
      timer = null
      playPause.value = false
    }

    const playClick = function () {
      stopUpDown2(() => {
        playPause.value = !playPause.value
      })
    }

    const refresh = function () {
      NeteaseCloudMusicPlayer.nameOfTheSong =
        NeteaseCloudMusicPlayer.title[
          NeteaseCloudMusicPlayer.numberOfSongs
        ].name
      NeteaseCloudMusicPlayer.singerName =
        NeteaseCloudMusicPlayer.title[
          NeteaseCloudMusicPlayer.numberOfSongs
        ].ar[0].name
      NeteaseCloudMusicPlayer.songAddress = `https://music.163.com/song/media/outer/url?id=${
        NeteaseCloudMusicPlayer.title[NeteaseCloudMusicPlayer.numberOfSongs].id
      }.mp3`
      NeteaseCloudMusicPlayer.Cover =
        NeteaseCloudMusicPlayer.title[
          NeteaseCloudMusicPlayer.numberOfSongs
        ].al.picUrl
      NeteaseCloudMusicPlayer.overallBackground = NeteaseCloudMusicPlayer.Cover
      if (topMode.value == false) {
        NeteaseCloudMusicPlayer.coverBackground.backgroundImage = `url(${NeteaseCloudMusicPlayer.Cover})`
      }
    }

    // 获取当前音频时长
    const audioTime = function () {
      clearInterval(timer)
      NeteaseCloudMusicPlayer.durationOfMusic = audioDom.refs.audio.duration
      timer = setInterval(() => {
        if (isNaN(NeteaseCloudMusicPlayer.durationOfMusic)) {
          NeteaseCloudMusicPlayer.durationOfMusic = audioDom.refs.audio.duration
        }
        NeteaseCloudMusicPlayer.musicBarValue = audioDom.refs.audio.currentTime
        if (
          NeteaseCloudMusicPlayer.musicBarValue >= audioDom.refs.audio.duration
        ) {
          clearInterval(timer)
          nextSong()
        }
      }, 250)
    }

    // 控制播放开关
    watch(playPause, (newValue) => {
      refresh()
      if (newValue === false) {
        NeteaseCloudMusicPlayer.showPause = true
        NeteaseCloudMusicPlayer.showPlayOne = false
        setTimeout(() => {
          pause()
        }, 200)
      } else {
        NeteaseCloudMusicPlayer.showPause = false
        NeteaseCloudMusicPlayer.showPlayOne = true
        setTimeout(() => {
          start()
        }, 200)
      }
    })

    watch(topMode, () => {
      if (topMode.value == true) {
        NeteaseCloudMusicPlayer.coverBackground = {
          backgroundImage: 'url()',
          backgroundSize: 'cover',
          backgroundPositionX: '0%',
          backgroundPositionY: '30%',
          backgroundRepeat: 'no-repeat',
        }
      } else {
        NeteaseCloudMusicPlayer.coverBackground = {
          backgroundImage: `url(${NeteaseCloudMusicPlayer.overallBackground})`,
          backgroundSize: 'cover',
          backgroundPositionX: '0%',
          backgroundPositionY: '30%',
          backgroundRepeat: 'no-repeat',
        }
      }
    })

    // 下一曲
    const nextSong = function () {
      stopUpDown(() => {
        NeteaseCloudMusicPlayer.numberOfSongs++
        playPause.value = true
        if (
          NeteaseCloudMusicPlayer.numberOfSongs >
          NeteaseCloudMusicPlayer.effectiveSong
        ) {
          NeteaseCloudMusicPlayer.numberOfSongs = 0
          refresh()
          setTimeout(() => {
            start()
          }, 200)
        } else {
          refresh()
          setTimeout(() => {
            start()
          }, 200)
        }
      })
    }
    // 上一首
    const previousSong = function () {
      stopUpDown(() => {
        NeteaseCloudMusicPlayer.numberOfSongs -= 1
        playPause.value = true
        if (NeteaseCloudMusicPlayer.numberOfSongs < 0) {
          NeteaseCloudMusicPlayer.numberOfSongs =
            NeteaseCloudMusicPlayer.effectiveSong
          refresh()
          setTimeout(() => {
            start()
          }, 200)
        } else {
          refresh()
          setTimeout(() => {
            start()
          }, 200)
        }
      })
    }

    // 获取播放列表
    const getSongList = function () {
      axios
        .get(
          `https://netease-cloud-music-api-two-ochre-57.vercel.app/playlist/track/all?id=${NeteaseCloudMusicPlayer.songListId}&limit=0&offset=0`
        )
        .then(({ data }) => {
          NeteaseCloudMusicPlayer.title = data.songs
          NeteaseCloudMusicPlayer.effectiveSong =
            NeteaseCloudMusicPlayer.title.length - 1
        })
        .catch(console.error)
    }

    // 进度条点击逻辑
    //鼠标按下时
    const surgeryNoteClickDown = function () {
      clearInterval(timer)
      timer = null
    }
    // 鼠标松开时
    const surgeryNoteClickUp = function () {
      audioDom.refs.audio.currentTime = NeteaseCloudMusicPlayer.musicBarValue
      start()
    }

    onMounted(() => {
      audioDom = getCurrentInstance()
      getSongList()
      if (topMode.value == false) {
        NeteaseCloudMusicPlayer.coverBackground.backgroundImage = `url(${NeteaseCloudMusicPlayer.overallBackground})`
      }
    })

    onBeforeUnmount(() => {
      clearInterval(timer)
      timer = null
    })

    // 监听路由
    watch(
      () => $router.currentRoute.value.path,
      (newValue, oldValue) => {
        if (newValue == '/home' && oldValue !== '/home') {
          allDisplay.value = false
          hiddenMini.value = false
          setTimeout(() => {
            topMode.value = false
            minimize.value = false
            allDisplay.value = true
          }, 500)
        } else if (newValue !== '/home' && oldValue == '/home') {
          allDisplay.value = false
          hiddenMini.value = true
          setTimeout(() => {
            topMode.value = true
            allDisplay.value = true
          }, 500)
          setTimeout(() => {
            minimize.value = true
          }, 1000)
        } else if (newValue == '/loading...') {
          allDisplay.value = false
        } else if (newValue !== '/home' && oldValue == '/') {
          allDisplay.value = false
          hiddenMini.value = true
          setTimeout(() => {
            topMode.value = true
            allDisplay.value = true
          }, 500)
          setTimeout(() => {
            minimize.value = true
          }, 1000)
        }
      },
      { immediate: true }
    )

    return {
      ...toRefs(NeteaseCloudMusicPlayer),
      playPause,
      nextSong,
      previousSong,
      musicBar,
      surgeryNoteClickDown,
      surgeryNoteClickUp,
      topMode,
      minimize,
      allDisplay,
      hiddenMini,
      playClick,
    }
  },
}
</script>

<style scoped>
p {
  margin-bottom: 0;
}
/* 主页样式 */
.NeteaseCloudMusicPlayer {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  top: 520px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 800px;
  display: flex;
  margin: 0 auto;
  border-radius: 15px 15px 0 0;
  box-shadow: -4px 0px 20px 0px black;
  z-index: 99;
}
.NeteaseCloudMusicPlayer:after {
  content: '';
  width: 100%;
  height: 105%;
  position: absolute;
  left: 0;
  top: 0;
  background: inherit;
  filter: blur(15px);
  z-index: 1;
}
.buttons {
  display: inline-block;
  width: 70%;
  height: 100%;
  z-index: 20;
}
.title {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 27.8px 0 0 122px;
}
.title h1 {
  display: block;
  color: #ffffff;
  font-size: 24px;
  width: 110%;
  text-align: left;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.title p {
  display: block;
  color: white;
  font-size: 1.16px;
  width: 50%;
  text-align: left;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.Cover {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  border-radius: 0 15px 0 0;
  box-shadow: -7px 3px 20px 2px black;
  z-index: 50;
}
.playButton {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  margin: 3% 0 2% 0;
}
.i-icon {
  border-radius: 5px;
}
.i-icon:hover {
  background: rgba(128, 128, 128, 0.3);
}
.musicBar {
  margin: 3% 0% 0% 25%;
  width: 50%;
}
.maskLayer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3;
  border-radius: 15px 15px 0 0;
}
.buttons input[type='range'] {
  outline: none;
  -webkit-appearance: none;
  -webkit-appearance: none;
  background: -webkit-linear-gradient(#cfcfcf, #cfcfcf) no-repeat, #ffffff;
  height: 5px;
  border-radius: 45px;
}

.buttons input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  background: #ffffff;
  border-radius: 50%;
  border: solid 2px rgb(100, 100, 100);
}
.musicDuration {
  color: white;
  display: inline-block;
  margin-left: 2%;
  font-size: 12px;
}

/* Narrow */
.topModeOn {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0%;
  width: 100%;
  height: 88px;
  z-index: 9999999999;
}
.minimize {
  position: absolute;
  display: flex;
  left: 0;
  height: 80px;
  background: rgb(240, 240, 240);
  z-index: -1;
  border-radius: 0 3px 3px 0;
}
.i-icon {
  height: 30px;
}
.RightOne {
  display: flex;
  align-items: center;
  background: rgb(230, 230, 230);
}
.RightOne:hover {
  background: rgba(128, 128, 128, 0.3);
}
.NeteaseCloudMusicPlayer-Narrow {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  top: 0%;
  background: rgb(240, 240, 240);
  flex-direction: row-reverse;
}
.buttons-Narrow {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 20;
  margin: 0 0 0 0.8px;
}
.title-Narrow {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  margin: 0 0 0 10px;
}
.title-Narrow h1 {
  font-weight: normal;
  display: flex;
  font-size: 24px;
  width: 500px;
  text-align: left;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.title-Narrow p {
  display: block;
  font-size: 1.16px;
  width: 100%;
  text-align: left;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.Cover-Narrow {
  height: 100%;
  z-index: 50;
}
.playButton-Narrow {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  width: 100%;
}
.RightOne > .i-icon:hover {
  background: rgba(0, 0, 0, 0);
}
.musicBar-Narrow {
  display: inline-block;
  width: 80%;
}
.maskLayer-Narrow {
  position: absolute;
  left: 0;
  width: 80px;
  height: 100%;
}
.musicDuration-Narrow {
  display: inline-block;
}
.buttons-Narrow input[type='range'] {
  outline: none;
  -webkit-appearance: none;
  background: -webkit-linear-gradient(#cfcfcf, #cfcfcf) no-repeat, #ffffff;
  height: 5px;
  border-radius: 45px;
  margin: 0 0.3128px;
}

.buttons-Narrow input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 12.8px;
  width: 12.8px;
  background: #ffffff;
  border-radius: 50%;
  border: solid 2px rgb(100, 100, 100);
}
.progressBarAndButtonBox-Narrow {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
  width: 45%;
  height: 100%;
}

/* 最小化动画 */
.minimizeAnimation-enter-active {
  transition: all 0.5s ease-out;
}

.minimizeAnimation-leave-active {
  transition: all 0.5s;
}
.minimizeAnimation-enter-from,
.minimizeAnimation-leave-to {
  transform: translateX(-100%);
}

.minimizeAnimation-enter-to,
.minimizeAnimation-leave-from {
  transform: translateX(0);
}

.goInIndex-enter-active {
  transition: all 0.5s ease-out;
}

.goInIndex-leave-active {
  transition: all 0.5s;
}
.goInIndex-enter-from,
.goInIndex-leave-to {
  opacity: 0;
}

.goInIndex-enter-to,
.goInIndex-leave-from {
  opacity: 1;
}

.i-icon-left-one:hover {
  background-color: #00000000;
}
.leftOne {
  display: flex;
  align-items: center;
  background: rgb(230, 230, 230);
}
.leftOne:hover {
  background: rgba(128, 128, 128, 0.3);
}
.Cover-Mini {
  border-right: 2px solid #999999;
}
.playingTime {
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-between;
}
@media screen and (max-width: 1200px) {
  .title-Narrow h1 {
    width: 100%;
  }
  .title-Narrow {
    width: 30%;
  }
}
@media screen and (max-width: 968px) {
  .musicDuration-Narrow {
    display: none;
  }
  .musicBar-Narrow {
    width: 100%;
  }
}
@media screen and (max-width: 845px) {
  .NeteaseCloudMusicPlayer {
    width: 83%;
  }
  .title {
    margin: 20px 0 0 45px;
  }
  .title h1 {
    width: 90%;
  }
  .buttons input {
    margin: 0% 0% 0% 15%;
  }
  .Changes {
    display: none;
  }
  p {
    margin-bottom: 0;
  }
  .NeteaseCloudMusicPlayer {
    top: 510px;
  }
}
@media screen and (max-width: 746px) {
  .NeteaseCloudMusicPlayer {
    width: 90%;
  }
  .title {
    margin: 20px 0 0 45px;
  }
  .title h1 {
    width: 90%;
  }
  .buttons input {
    margin: 0% 0% 0% 15%;
  }
  .Changes {
    display: none;
  }
  .NeteaseCloudMusicPlayer {
    top: 490px;
  }
}
@media screen and (max-width: 620px) {
  .musicDuration {
    margin-left: 1%;
  }
  .NeteaseCloudMusicPlayer {
    top: 468px;
  }
  .title-Narrow h1 {
    font-size: 18px;
  }
  .title-Narrow p {
    font-size: 14px;
  }
  .progressBarAndButtonBox-Narrow {
    width: 100%;
  }
  .minimize {
    height: 70px;
  }
  .i-icon {
    height: 28px;
  }
  .NeteaseCloudMusicPlayer-Narrow {
    height: 70px;
  }
}
@media screen and (max-width: 610px) {
  .NeteaseCloudMusicPlayer {
    top: 423px;
  }
}
@media screen and (max-width: 543px) {
  .NeteaseCloudMusicPlayer {
    top: 417px;
  }
}
@media screen and (max-width: 480px) {
  .playButton {
    margin: 0% 0 2% 0;
  }
  .title {
    margin: 10px 0 0 20px;
  }
  .title h1 {
    font-size: 16px;
  }
  .title-Narrow h1 {
    font-size: 16px;
  }
  .title-Narrow p {
    font-size: 12px;
  }
  .minimize {
    height: 60px;
  }
  .i-icon {
    height: 25px;
  }
  .NeteaseCloudMusicPlayer-Narrow {
    height: 60px;
  }
}
@media screen and (max-width: 400px) {
  .buttons input {
    margin: 0% 0% 0% 10%;
  }
  .title-Narrow h1 {
    font-size: 12px;
  }
  .title-Narrow p {
    font-size: 12px;
  }
  .minimize {
    height: 50px;
  }
  .i-icon {
    height: 25px;
  }
  .NeteaseCloudMusicPlayer-Narrow {
    height: 50px;
  }
}
</style>
