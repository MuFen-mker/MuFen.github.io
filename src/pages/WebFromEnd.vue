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
        <v-md-preview :text="markDown"></v-md-preview>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { DoubleLeft } from '@icon-park/vue-next'
import { useRouter } from 'vue-router'

export default {
  name: 'webFromEndText',
  components: {
    DoubleLeft,
  },
  setup() {
    let markDown = ref()

    let markDownName = ref('')

    const $router = useRouter()

    let shows = ref(false)

    // 获取markdown文件
    const getMarkDown = function () {
      let xhr = new XMLHttpRequest()
      let okStatus = document.location.protocol === 'file:' ? 0 : 200
      xhr.open('GET', `${markDownName.value}.md`, false) // public文件夹下的绝对路径
      xhr.overrideMimeType('text/html;charset=utf-8')
      xhr.send(null)
      markDown.value = xhr.responseText
    }

    // 获取markdown文件名
    const getMarkDownName = function () {
      markDownName.value = $router.currentRoute.value.path.slice(-2)
    }

    const backToTheUpperLevel = function () {
      shows.value = false
      setTimeout(() => {
        $router.push({ name: 'WebFromEnd' })
      }, 1000)
    }

    onMounted(() => {
      getMarkDownName()
      getMarkDown()
      shows.value = true
    })

    return {
      shows,
      markDown,
      backToTheUpperLevel,
    }
  },
}
</script>

<style scoped>
.returnBottom > .i-icon {
  height: 48px;
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
  .v-md-editor-preview {
    margin: 0 auto;
  }
  .webFromEndBody {
    margin: 100px 0;
    width: 100%;
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
  .Return {
    font-size: 20px;
    padding: 10px 24px 10px 18px;
  }
  .returnBottom > .i-icon {
    height: 30px;
  }
}
@media screen and (max-width: 700px) {
  .Return {
    font-size: 16px;
    padding: 10px 24px 10px 18px;
  }
  .returnBottom > .i-icon {
    height: 24px;
  }
}
@media screen and (max-width: 585px) {
  .Return {
    font-size: 12px;
    padding: 10px 24px 10px 18px;
  }
  .returnBottom > .i-icon {
    height: 16px;
  }
}
@media screen and (max-width: 574px) {
  .v-md-editor-preview {
    transform: scale(90%);
    margin: 0 -10%;
  }
  .webFromEndBody {
    margin: 0;
  }
}
@media screen and (max-width: 500px) {
  .Return {
    font-size: 12px;
    padding: 10px 24px 10px 18px;
  }
  .returnBottom > .i-icon {
    height: 12px;
  }
}
@media screen and (max-width: 486px) {
  .v-md-editor-preview {
    transform: scale(80%);
    margin: -75px -17%;
  }
}
@media screen and (max-width: 450px) {
  .Return {
    font-size: 12px;
    padding: 10px 24px 10px 18px;
  }
  .returnBottom > .i-icon {
    height: 12px;
  }
}
@media screen and (max-width: 434px) {
  .v-md-editor-preview {
    transform: scale(70%);
    margin: -165px -26%;
  }
}
@media screen and (max-width: 434px) {
  .v-md-editor-preview {
    transform: scale(55%);
    margin: -260px -38%;
  }
}
</style>
