<template>
  <div v-if="loadIsLeave" class="loadingRoot">
    <transition name="afterTheLoadIsComplete">
      <div v-show="loadingTextShow" class="loading">
        <h1>{{ loadingText }}</h1>
        <div class="progressBar">
          <transition name="load" appear>
            <div></div>
          </transition>
        </div>
      </div>
    </transition>
    <div v-show="avatarDisPlay" class="Avatar">
      <transition name="graduallyDisplay">
        <img v-show="avatarDisPlay" src="../assets/Avatar.jpg" />
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
    <router-link
      v-if="onClickToJump"
      class="routerLink"
      to="/home"
    ></router-link>
  </div>
</template>

<script scoped>
import { reactive, toRefs, onMounted } from 'vue'
export default {
  name: 'LoadIng',
  setup() {
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

    onMounted(() => {
      progress()
    })
    return {
      ...toRefs(loadTheFirstScreen),
      ...toRefs(welcome),
    }
  },
}
</script>

<style scoped>
.routerLink {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99999999;
}
.loadingRoot {
  font-size: 16px;
  position: relative;
  width: 100%;
  height: 100%;
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
  top: 35%;
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
  position: absolute;
  left: 50%;
  transform: translate(-50%, 100%);
  width: 20%;
  border: 2px solid black;
  border-radius: 90px;
  height: 40px;
  box-sizing: border-box;
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
.Avatar > img {
  width: 15%;
  border-radius: 180px;
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
</style>
