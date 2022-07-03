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
        <el-skeleton :rows="50" :loading="loading" animated>
          <template #template> </template>
          <template #default>
            <v-md-preview :text="markDown"></v-md-preview>
          </template>
        </el-skeleton>
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

    let loading = ref(true)

    let markDownName = ref('')

    const $router = useRouter()

    let shows = ref(false)

    // 获取markdown文件
    const getMarkDown = function (data) {
      let xhr = new XMLHttpRequest()
      xhr.open('GET', `markdown/${markDownName.value}.md`, false)
      xhr.overrideMimeType('text/html;charset=utf-8')
      xhr.send(null)
      return xhr.responseText
    }

    const AssignmentMarkDown = function () {
      setTimeout(() => {
        let data = getMarkDown()
        markDown.value = data
        setTimeout(() => {
          loading.value = false
        }, 500)
      })
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
      shows.value = true
      getMarkDownName()
      AssignmentMarkDown()
    })

    return {
      shows,
      markDown,
      loading,
      backToTheUpperLevel,
    }
  },
}
</script>

<style scoped>
.v-md-editor-preview {
  width: 100%;
}
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
  .v-md-editor-preview {
    zoom: 85%;
    margin-top: -60px;
  }
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
  .v-md-editor-preview {
    zoom: 80%;
    margin-top: -70px;
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
  .v-md-editor-preview {
    -moz-transform: translateY(20px);
    zoom: 70%;
    margin-top: -95px;
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
  .v-md-editor-preview {
    zoom: 60%;
    margin-top: -100px;
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
@media screen and (max-width: 419px) {
  .v-md-editor-preview {
    -moz-transform: translateY(45px);
    zoom: 55%;
    margin-top: -110px;
  }
}
</style>
