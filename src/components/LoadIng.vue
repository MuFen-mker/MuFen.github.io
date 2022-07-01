<template>
  <div v-if="loadIsLeave" class="loadingRoot">
    <transition name="afterTheLoadIsComplete">
      <div v-show="loadingTextShow" class="loading">
        <h1>{{ loadingText }}</h1>
        <div class="container">
          <div class="row rowFirst">
            <div
              class="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-8 col-8 progressBar"
            >
              <transition name="load" appear>
                <div></div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div v-show="avatarDisPlay" class="Avatar">
      <div class="row rowSecond">
        <transition name="graduallyDisplay">
          <img
            v-show="avatarDisPlay"
            src="../assets/Avatar.jpg"
            class="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-5 col-6"
          />
        </transition>
        <transition name="graduallyDisplay">
          <h2 v-show="titleDisPlay">MuFen の 小栈</h2>
        </transition>
        <transition name="graduallyDisplay">
          <h3 v-show="welcomeDisPlay">Welcome</h3>
        </transition>
        <transition name="graduallyDisplay">
          <h4 v-show="goToWeb">点击任意位置进入网站</h4>
        </transition>
      </div>
    </div>
    <div v-if="onClickToJump" class="routerLink" @click="goInHome()"></div>
  </div>
</template>

<script scoped>
import { reactive, toRefs, onMounted, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'LoadIng',
  setup() {
    const router = useRouter()
    let loadTheFirstScreen = reactive({
      loadingText: 'Loading...',
      loadingTextShow: true,
    })

    let welcome = reactive({
      avatarDisPlay: false,
      titleDisPlay: false,
      welcomeDisPlay: false,
      goToWeb: false,
      onClickToJump: false,
      loadIsLeave: true,
    })

    let progress = function () {
      setTimeout(() => {
        loadTheFirstScreen.loadingTextShow = false
        setTimeout(() => {
          welcome.avatarDisPlay = true
          setTimeout(() => {
            welcome.titleDisPlay = true
            setTimeout(() => {
              welcome.welcomeDisPlay = true
              setTimeout(() => {
                welcome.goToWeb = true
                setTimeout(() => {
                  welcome.onClickToJump = true
                }, 1000)
              }, 250)
            }, 250)
          }, 250)
        }, 1000)
      }, 2200)
    }

    onBeforeMount(() => {
      preLoadedResources()
    })

    onMounted(() => {
      progress()
    })

    const goInHome = function () {
      router.replace('home')
    }

    const preLoadedResources = function () {
      // 图片
      let imgs = [
        require('@/assets/Avatar.jpg'),
        require('@/assets/CalendarBackground.jpg'),
        require('@/assets/CalendarBackground.jpg'),
        require('@/assets/CommonWebsiteHeadFigure.jpg'),
        require('@/assets/DG.png'),
        require('@/assets/DG2.png'),
        require('@/assets/DLL.png'),
        require('@/assets/DLR.png'),
        require('@/assets/DryingTutorialHeadFigure.jpg'),
        require('@/assets/music-one.png'),
        require('@/assets/music-one.svg'),
        require('@/assets/playerBackground.jpg'),
        require('@/assets/SoftwareRecommendationHeadFigure.jpg'),
        require('@/assets/WebFromEndHeadFigure.jpg'),
      ]

      for (let img of imgs) {
        let image = new Image()
        image.src = img
      }
    }

    return {
      ...toRefs(loadTheFirstScreen),
      ...toRefs(welcome),
      goInHome,
    }
  },
}
</script>

<style scoped>
.rowFirst {
  justify-content: center;
}
.rowSecond {
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.routerLink {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99999999;
}
.routerLink:hover {
  background: rgba(255, 255, 255, 0);
}
.loadingRoot {
  font-size: 16px;
  position: relative;
  width: 100%;
  height: 100vh;
  background: rgb(240, 240, 240);
  border: 2px solid black;
  box-sizing: border-box;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  -o-user-select: none;
  user-select: none;
  z-index: 999;
}
.loading {
  width: 100%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loading > h1 {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -100%);
  display: inline-block;
  text-align: left;
}
.progressBar {
  transform: translate(0%, 0%);
  border: 2px solid black;
  border-radius: 90px;
  height: 40px;
  box-sizing: border-box;
  margin-top: 30px;
}
.progressBar > div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 78%;
  width: 97%;
  background: orange;
  border-radius: 90px;
}
/* 进度条动画 */
.load-enter-active {
  animation: progressiveAnimation 2s;
}
@keyframes progressiveAnimation {
  from {
    width: 0%;
  }
  to {
    width: 97%;
  }
}

/* 进度条完成后动画 */
.afterTheLoadIsComplete-leave-active {
  animation: afterTheLoadIsComplete 1s;
}
@keyframes afterTheLoadIsComplete {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.Avatar {
  height: 25%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.Avatar img {
  border-radius: 180%;
}
.Avatar h2 {
  font-size: 48px;
  margin-top: 1%;
}
.Avatar h3 {
  font-size: 32px;
  margin-top: 1%;
}
.Avatar h4 {
  font-size: 24px;
  margin-top: 5%;
  color: rgb(107, 107, 107);
}

/* 通用渐变显示动画 */
.graduallyDisplay-enter-active {
  animation: graduallyDisplay 1s linear;
}
@keyframes graduallyDisplay {
  from {
    opacity: 0;
    transform: translate(0%, 5%);
  }
  to {
    opacity: 1;
    transform: translate(0%, 0%);
  }
}
@media screen and (max-width: 650px) {
  .Avatar h2 {
    font-size: 30px;
  }
  .Avatar h3 {
    font-size: 26px;
  }
  .Avatar h4 {
    font-size: 20px;
  }
}
@media screen and (max-width: 410px) {
  .Avatar h2 {
    font-size: 24px;
  }
  .Avatar h3 {
    font-size: 20px;
  }
  .Avatar h4 {
    font-size: 18px;
  }
}
</style>
