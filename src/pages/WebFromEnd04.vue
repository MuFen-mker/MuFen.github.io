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
        <h1>一.Vue生命周期简介</h1>
        <p>官网：https://cn.vuejs.org/v2/api/#beforeCreate</p>
        <p>
          Vue实例从创建到销毁的过程，就是生命周期。详细来说也就是从开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、卸载等一系列过程。
        </p>
        <h1>二.钩子详解</h1>
        <p><strong>1.beforeCreate</strong></p>
        <p>
          在实例初始化之后，数据观测(data observer) 和 event/watcher
          事件配置之前被调用。
        </p>
        <prism-editor
          class="code"
          v-model="code1"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <p><strong>2.created</strong></p>
        <p>
          实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data
          observer)，属性和方法的运算， watch/event
          事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
        </p>
        <p>主要应用：调用数据，调用方法，调用异步函数</p>
        <prism-editor
          class="code"
          v-model="code2"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <p><strong>3.beforeMount</strong></p>
        <p>在挂载开始之前被调用：相关的 render 函数（模板）首次被调用。</p>
        <p>例如通过v-for生成的html还没有被挂载到页面上</p>
        <p>（接 2created的代码）</p>
        <prism-editor
          class="code"
          v-model="code3"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <p><strong>4.mounted</strong></p>
        <p>el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。</p>
        <p>
          有初始值的DOM渲染，例如我们的初始数据list,渲染出来的li，只有这里才能获取
        </p>
        <p>（接 2created的代码）</p>
        <prism-editor
          class="code"
          v-model="code4"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <p><strong>5.beforeUpdate</strong></p>
        <p>
          数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
          你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
        </p>
        <p>当我们更改Vue的任何数据，都会触发该函数</p>
        <prism-editor
          class="code"
          v-model="code5"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <p><strong>6.updated</strong></p>
        <p>
          由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
        </p>
        <p>
          当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM
          的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。
        </p>
        <p>该钩子在服务器端渲染期间不被调用。</p>
        <br />
        <p>
          数据更新就会触发（vue所有的数据只有有更新就会触发）,如果想数据一遍就做统一的处理，可以用这个，如果想对不同数据的更新做不同的处理可以用nextTick，或者是watch进行监听
        </p>
        <prism-editor
          class="code"
          v-model="code6"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <p><strong>7.beforeDestroy</strong></p>
        <p>实例销毁之前调用。在这一步，实例仍然完全可用。</p>
        <p><strong>8.destroyed</strong></p>
        <p>
          Vue 实例销毁后调用。调用后，Vue
          实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
          该钩子在服务器端渲染期间不被调用。
        </p>
        <prism-editor
          class="code"
          v-model="code7"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <p><strong>补充$mount</strong></p>
        <p>当你vue没有挂在el时，我们可以用$mount</p>
        <prism-editor
          class="code"
          v-model="code8"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <br />
        <h1>三.钩子的一些实战用法</h1>
        <p><strong>1.异步函数</strong></p>
        <p>这里我们用定时器来做异步函数</p>
        <prism-editor
          class="code"
          v-model="code9"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <p><strong>2.Vue.nextTick对异步函数的结果进行操作</strong></p>
        <p>我们想要改变数据时,各自触发各自的方法</p>
        <prism-editor
          class="code"
          v-model="code10"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <h1>作者:南张门</h1>
        <a
          target="_blank"
          href="https://blog.csdn.net/qq_48578649/article/details/121244389?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_utm_term~default-1-121244389-blog-109198023.pc_relevant_antiscanv3&spm=1001.2101.3001.4242.2&utm_relevant_index=4"
        >
          <div class="linkIcon">
            <link-one theme="outline" size="100%" fill="#333" />
          </div>
          vue生命周期的理解</a
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
        '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Document</title>\n    <!-- 引入vue.js -->\n    <script type="text/javascript" src=\'./vue.js\'><\/script>\n</head>\n<body>\n    <div id="app">\n        <input type="text" name="" v-model="message">\n        {{message}} \n    </div>\n    <script type="text/javascript">\n        //实例化Vue\n        var app = new Vue({\n            el:\'#app\',\n            data:{\n                message:\'this is mseeage\'\n            },\n            //时刻监测数据message的变化,一但那变化就会吊该函数\n            watch:{\n                //message必须和监测的data名字一样\n                message:function(){\n                    console.log(\'watch:\',\'message 变了\')\n                }\n            },\n            methods:{\n                init:function(){\n                    console.log(\'这是初始化方法\')\n                }\n            },\n            //我们在beforeCreate钩子中调用Vue的data和method\n            beforeCreate:function(){\n                console.log("beforeCreate",this.message);\n                this.init();\n            }\n        })\n    <\/script>   \n<\/body>\n<\/html>',
      code2:
        "<div id=\"app\">\n    <ul>\n        <li v-for=\"(item,index) of list\" key=\"index\">{{item}}--{{message}}</li>\n    </ul>\n\n    <p>p1</p>\n    <p>p1</p>\n    <p>p1</p>\n</div>\n<script type=\"text/javascript\">\n    //实例化Vue\n    var app = new Vue({\n        el:'#app',\n        data:{\n            message:'this is mseeage',\n            list:['aaaaaaaa','bbbbbbb','ccccccc']\n        },\n        //时刻监测数据message的变化,一但那变化就会吊该函数\n        watch:{\n            //message必须和监测的data名字一样\n            message:function(){\n                console.log('watch:','message 变了')\n            }\n        },\n        methods:{\n            foo:function(){\n                console.log('foo : ','这是初始化方法')\n            }\n        },\n        //created钩子\n        created:function(){\n            //调用Vue的data\n            console.log(\"created : \",this.message);\n            //调用Vue方法\n            this.foo();\n            //因为我们是通过v-for循环遍历li，所以created之前挂载阶段还没开始.是无法获取li的个数的\n            console.log('li数量：',document.getElementsByTagName('li').length);\n            //直接加载出来的DOM是可以直接获取到的\n            console.log('p个数：',document.getElementsByTagName('p').length);\n        },\n    })\n<\/script>   ",
      code3:
        " beforeMount: function () {\n     console.log('beforeMount:',document.getElementsByTagName('li').length);\n  },",
      code4:
        "mounted: function () {\n    console.log('mounted:',document.getElementsByTagName('li').length);\n},",
      code5:
        " beforeUpdate: function () {\n       console.log('beforeUpdate 钩子执行...');\n       console.log('beforeUpdate:'+this.message)\n },",
      code6:
        " updated: function () {\n     console.log('updated 钩子执行...');\n     console.log('updated:',this.message)\n},",
      code7:
        "<div id=\"app\">\n</div>\n<script type=\"text/javascript\">\n    //实例化Vue\n    var app = new Vue({\n        el:'#app',\n        data:{\n            message:'this is mseeage',\n        },\n        beforeDestroy: function () {\n            console.log('beforeDestroy 钩子执行...',this.message)\n        },\n        destroyed: function () {\n            console.log('destroyed 钩子执行...',this.message)\n        }\n    })\n    //销毁Vue实例，触发beforeDestroy和destroyed函数\n    app.$destroy()\n<\/script>   ",
      code8:
        "var app = new Vue({\n    data:{\n            message:'this is mseeage',\n        },\n}).$mount('#app')",
      code9:
        "<div id=\"app\">\n    <ul>\n        <li v-for=\"(item,index) of list\" key=\"index\">{{item}}</li>\n    </ul>\n</div>\n\n<script type=\"text/javascript\">\n    var app = new Vue({\n        el:'#app',\n        data:{\n            list:['aaaaaaaa','bbbbbbb','ccccccc']\n        },\n        created:function(){\n            consoloe.log('created异步：aaaaa');\n            //异步获取数据\n            // 因为是异步,就和我们ajax获取数据一样\n            setTimeout(()=>{\n                this.list=['111','222','333','444'],\n                console.log('created异步：',document.getElementsByTagName('li').length);\n            },0)\n        },\n        mounted: function () {\n            console.log('mounted:',document.getElementsByTagName('li').length);\n        },\n        updated: function () {\n            console.log('updated:',document.getElementsByTagName('li').length)\n        },\n    })\n<\/script>",
      code10:
        "\ncreated:function(){\n//异步获取数据\n// 因为是异步,就和我们ajax获取数据一样\n\n    //为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。\n    setTimeout(()=>{\n        this.list=['111','222','333','444'],\n        console.log('created异步：',document.getElementsByTagName('li').length);\n        this.$nextTick(function(){\n            console.log(\"created$nextTick：\",document.getElementsByTagName('li').length)\n        });\n    },0)\n    setTimeout(()=>{\n        this.list=['快乐大本营','脚踏实地','300033','天天向上','好好学习'],\n        console.log('created异步：',document.getElementsByTagName('li').length);\n        this.$nextTick(function(){\n            console.log(\"created$nextTick：\",document.getElementsByTagName('li').length)\n        });\n    },1000)\n},\nmounted: function () {\n    console.log('mounted:',document.getElementsByTagName('li').length);\n},\nupdated: function () {\n  console.log('updated:',document.getElementsByTagName('li').length)\n},",
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
  .Return  {
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
  .Return  {
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
  .Return  {
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
  .Return  {
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
  .Return  {
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
