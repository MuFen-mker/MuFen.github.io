<template>
  <transition name="enterAnAnimation">
    <div style="overflow-x: auto" v-if="shows" class="webFromEndText">
      <div @click="backToTheUpperLevel()" class="Return">
        <double-left theme="outline" size="40" fill="#000000" /><span
          >返回</span
        >
      </div>
      <div class="webFromEndBody">
        <h1>引入</h1>
        <p>
          首先运行npm install --save axios vue-axios命令安装axios和vue-axios
        </p>
        <p>
          在vue3项目的main.js文件中插入以下代码引入axios，注意vue-axios和axios需要搭配使用
        </p>
        <pre>
          import axios from 'axios'; import VueAxios from 'vue-axios'
          axios.defaults.baseURL = 'https://www.xxxx.com/';
          app.use(VueAxios,axios);
        </pre>
        <h1>使用</h1>
        <p>
          在vue3页面的"export default {"前插入const axios =
          require('axios');在页面中引入axios
        </p>
        <h1>get请求</h1>
        <pre>
          axios({ method:'get',
          url:'user/login',//这里由于之前设置了baseURL,所以直接跳过顶级域名
          params:{ username:username, password:pwd, userlevel:"1", } })
          .then(function (response) { if (response.data.statuscode==3) {
          //密码正确 }else{ router.push('/force');//密码错误 } })
          .catch(function (error) { console.log("catch"+error);
          Toast('登陆失败，请检查网络'); }); })
        </pre>
        <h1>作者:Fannnnf</h1>
        <a
          target="_blank"
          href="https://blog.csdn.net/qq_42475234/article/details/124578128?spm=1001.2101.3001.6650.11&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-11-124578128-blog-123682618.pc_relevant_antiscanv4&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-11-124578128-blog-123682618.pc_relevant_antiscanv4&utm_relevant_index=14"
          ><link-one
            theme="outline"
            size="24"
            fill="#333"
          />【前端】Axios在vue3中的使用教程及注意事项</a
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
  margin: 2% 0;
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
