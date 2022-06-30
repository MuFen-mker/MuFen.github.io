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
        <h1>引入</h1>
        <p>
          首先运行命令
          <prism-editor
            class="inCode"
            v-model="inCode1"
            :highlight="highlighter"
          ></prism-editor>
          安装axios和vue-axios
        </p>
        <p>
          在vue3项目的main.js文件中插入以下代码引入axios，注意vue-axios和axios需要搭配使用
        </p>
        <prism-editor
          class="code"
          v-model="code1"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <h1>使用</h1>
        <p>
          在vue3页面的
          <prism-editor
            class="inCode"
            v-model="inCode2"
            :highlight="highlighter"
            language="js"
          ></prism-editor>
          在页面中引入axios
        </p>
        <h1>get请求</h1>
        <prism-editor
          class="code"
          v-model="code2"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <h1>作者:Fannnnf</h1>
        <a
          target="_blank"
          href="https://blog.csdn.net/qq_42475234/article/details/124578128?spm=1001.2101.3001.6650.11&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-11-124578128-blog-123682618.pc_relevant_antiscanv4&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-11-124578128-blog-123682618.pc_relevant_antiscanv4&utm_relevant_index=14"
        >
          <div class="linkIcon">
            <link-one theme="outline" size="100%" fill="#333" />
          </div>
          【前端】Axios在vue3中的使用教程及注意事项</a
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
      code1:
        "import axios from 'axios'; import VueAxios from 'vue-axios'\naxios.defaults.baseURL = 'https://www.xxxx.com/\n'axios.defaults.baseURL = 'https://www.xxxx.com/';\napp.use(VueAxios,axios);",
      code2:
        " axios({ method:'get',url:'user/login',//这里由于之前设置了baseURL,所以直接跳过顶级域名params\n:{ username:username, password:pwd, userlevel:\"1\", } })\n.then(function (response) { if (response.data.statuscode==3) {//密码正确 \n}else{\n router.push('/force');//密码错误 } })\n.catch(function (error) { console.log(\"catch\"+error);\nToast('登陆失败，请检查网络'); }); })",
    })
    let inCodeData = reactive({
      inCode1: 'npm install --save axios vue-axios',
      inCode2: "export default {\"前插入const axios = require('axios');",
    })

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
