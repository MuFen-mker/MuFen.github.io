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
        <p>
          本文只涉及bootstrap基本使用，不提供代码案例。以便于快速了解bootstrap是什么。详细使用规则还是要看官方文档。
        </p>
        <p>注意：bootstrap的核心是掌握容器和栅格系统。</p>
        <h1>1.什么是Bootstrap?</h1>
        <p>
          Bootstrap 是twitter公司推出的，专门用于开发响应式布局、移动设备优先的
          WEB 框架。
        </p>
        <p>
          Bootstrap当前最新的版本的Bootstrap4, 但当下企业使用最多的是Bootstrap3
        </p>
        <h1>2.Bootstrap3和4的区别</h1>
        <p>2.1、CSS预处理器不同, Bootstrap3采用Less, Bootstrap4采用SASS</p>
        <p>2.2、格栅种类不同, Bootstrap3提供4种格栅, Bootstrap4提供5种格栅</p>
        <p>
          2.3、使用单位不同, Bootstrap3使用px作为单位, Bootstrap4使用rem作为单位
        </p>
        <p>
          2.4、内部布局方式不同, Bootstrap3使用float布局,
          Bootstrap4使用flexbox布局
        </p>
        <h1>3.Bootstrap兼容性</h1>
        <p>
          Bootstrap
          的目标是在最新的桌面和移动浏览器上有最佳的表现，也就是说，在较老旧的浏览器上可能会导致某些组件表现出的样式有些不同，但是功能是完整的。
        </p>
        <p>IE8以上都能完美使用, IE8以下需要通过一些额外的配置来保证其完整性</p>
        <h1>4.Bootstrap3模板</h1>
        <p>
          使用下方模板粘贴至html文件中，需要修改引入文件路径，即可开启Bootstrap3的使用
        </p>
        <prism-editor
          class="code"
          v-model="code1"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <h1>5.Bootstrap4模板</h1>
        <p>
          使用下方模板粘贴至html文件中，需要修改引入文件路径，即可开启Bootstrap4的使用
        </p>
        <prism-editor
          class="code"
          v-model="code2"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <p>
          <strong
            >注意：若使用webStrom编辑器，可设置模板快捷键。便于快速应用模板。</strong
          >
        </p>
        <h1>6.Bootstrap容器</h1>
        <p><strong>1.Bootstrap容器</strong></p>
        <p>
          1.1、在Bootstrap中容器是响应式布局的基础,
          Bootstrap推荐将所有内容都定义在容器之中
        </p>
        <p>1.2、并且容器是启用Bootstrap栅格系统必不可少的前置条件</p>
        <p>
          <strong
            >2. Bootstrap中提供了两个容器: container/container-fluid</strong
          >
        </p>
        <br />
        <p>2.1、container容器(固定容器):</p>
        <p>
          只要给标签添加了container类名,
          这个标签就变成了Bootstrap的container容器
        </p>
        <p>
          只要这个标签变成了Bootstrap的container容器,
          在不同视口大小下就会有不同的固定宽度
        </p>
        <br />
        <p>2.2、container-fluid(自适应宽度容器)</p>
        <p>
          只要给标签添加了container-fluid类名,
          这个标签就变成了Bootstrap的container-fluid容器
        </p>
        <p>
          只要这个标签变成了Bootstrap的container-fluid容器,
          那么容器的宽度永远都是100%自适应
        </p>
        <br />
        <br />
        <p>3.Bootstrap对视口划分：Bootstrap4将视口划分为了5钟</p>
        <p>超小屏幕(xs): &lt; 576px</p>
        <p>小屏幕(sm): >=576px</p>
        <p>中等屏幕(md):>=768</p>
        <p>大屏幕(lg): >=992px</p>
        <p>超大屏幕(xl): >= 1200px</p>
        <br />
        <p>4、容器实现原理</p>
        <p>
          想了解容器的实现原理。直接查看bootstrap的css文件中对应的container、container-fluid类名即可，其原理使用的是CSS3新增的媒体查询。
        </p>
        <h1>7、Bootstrap栅格系统</h1>
        <br />
        <p>1.Bootstrap栅格系统</p>
        <p>Bootstrap的栅格系统使用一系列的"行"和"列"来实现复杂的响应式布局</p>
        <p>默认情况下栅格系统会将一行的内容等分为12份,</p>
        <p>然后我们可以通过绑定类名的方式指定这一行中的每一列占用多少分</p>
        <br />
        <br />
        <p>2.Bootstrap栅格系统格式</p>
        <prism-editor
          class="code"
          v-model="code3"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <p>3.Bootstrap栅格系统特点</p>
        <p>3.1默认情况下行的宽度和所在容器一样</p>
        <p>3.2默认情况下所有列的宽度是等分所在行的宽度</p>
        <p>3.3可以通过col-num方式指定当前列占用12分之几</p>
        <p>3.4如果一行中内容的宽度超过了12分, 那么将自动换行</p>
        <br />
        <p>4.Bootstrap栅格系统实现原理</p>
        <p>bootstrap3：通过float实现</p>
        <p>bootstrap4：通过伸缩项flex实现</p>
        <br />
        <p>5.Bootstrap栅格系统尺寸设置</p>
        <p>5.1.栅格系统列的尺寸设置</p>
        <p>Bootstrap的固定宽度容器提供了5种响应的尺寸</p>
        <p>同样Bootstrap也给列提供了5种响应的尺寸</p>
        <p>col-: 设置超小屏幕</p>
        <p>col-sm-:设置小屏幕</p>
        <p>col-md-:设置中等屏幕</p>
        <p>col-lg-:设置大屏幕</p>
        <p>col-xl-*:设置超大屏幕</p>
        <br />
        <p>5.2.栅格系统列的尺寸特点</p>
        <p>
          1.如果只设置了小屏幕的大小（col-）, 那么大屏幕也会采用小屏幕设置的大小
        </p>
        <p>2.如果值设置了大屏幕的大小（col-xl-）, 那么小屏幕默认100%</p>
        <p>3.如果大小屏幕都设置了大小, 那么在什么屏幕就显示什么尺寸</p>
        <prism-editor
          class="code"
          v-model="code4"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <p>6.栅格系统-沟槽</p>
        <p>
          BootStrap默认的栅格和列间有间隙沟槽，一般是左右-15px的margin或padding处理，您可以使用.no-gutters类来消除它，这将影响到.row行、列平行间隙及所有子列
        </p>
        <prism-editor
          class="code"
          v-model="code5"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <p>7.栅格系统列-对齐方式</p>
        <p>
          Bootstrap4的格栅系统是使用伸缩布局实现的,
          所以也可以通过类名快速的设置伸缩项的在主轴和侧轴对齐方式
        </p>
        <br />
        <p>水平方向</p>
        <p>默认同主轴起点对齐:justify-content-start</p>
        <p>设置同主轴终点对齐：给row添加justify-content-end类名</p>
        <p>设置同主轴中间对齐：justify-content-center</p>
        <p>设置同主轴两端对齐：justify-content-between</p>
        <br />
        <p>垂直方向</p>
        <p>设置同侧轴顶部对齐：align-items-start</p>
        <p>设置同侧轴底部对齐：align-items-end</p>
        <p>设置同侧轴中部对齐：align-items-center</p>
        <br />
        <br />
        <p>8、栅格系统-列偏移</p>
        <p>offset-*: 当前列偏移多少份位置</p>
        <p>注意点: 写在那一列就是那一列偏移</p>
        <p>9、栅格系统列-列排序</p>
        <p>order-*: 从小到大顺序排序, 小的在前面, 大的在后面</p>
        <p>
          注意点: 没有排序的列(没有添加order属性的列)位置不会发生变化,
          只有排序的列(添加order属性的列)才参与位置变化
        </p>
        <h1>作者:Cao_Mary</h1>
        <a
          target="_blank"
          href="https://blog.csdn.net/qq_48578649/article/details/121244389?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_utm_term~default-1-121244389-blog-109198023.pc_relevant_antiscanv3&spm=1001.2101.3001.4242.2&utm_relevant_index=4"
        >
          <div class="linkIcon">
            <link-one theme="outline" size="100%" fill="#333" />
          </div>
          bootstrap基本使用，快速了解bootstrap</a
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
        '<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n    <meta charset="utf-8">\n    <!--可以让部分国产浏览器默认采用高速模式渲染页面：-->\n    <meta name="renderer" content="webkit">\n    <!--使用edge渲染，不使用IE渲染。-->\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <!--    meta:vp为了保证页面在移动端也正常运行-->\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <title>Bootstrap3模板</title>\n    <!-- 导入Bootstrap CSS文件-->\n    <link href="css/bootstrap.css" rel="stylesheet">\n    <!-- [if xxx] ![endif这个是IE中的条件注释，只有在IE浏览器下才会执行] It:表示小于运算符\n     HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素（header、footer、nav等）和媒体查询（media queries）功能 \n     注意点：由于同源策略，Respond.js文件不能通过file://协议（就是直接将 html 页面拖拽到浏览器中）直接打开，需要在http://（服务器协议）中打开。\n    -->\n    <!--[if It IE 9]>\n    <script src="js/html5shiv.js"><\/script>\n    <script src="js/respond.js"><\/script>\n    <![endif]-->\n</head>\n<body>\n<h1>你好，世界！</h1>\n<!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->\n<script src="js/jquery-1.12.4.js"><\/script>\n<script src="js/bootstrap.js"><\/script>\n</body>\n</html>\n',
      code2:
        '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <!-- Required meta tags -->\n    <meta charset="utf-8">\n    <!--    meta:vp为了保证页面在移动端也正常运行-->\n    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    <!-- 导入Bootstrap CSS文件-->\n    <link rel="stylesheet" href="css/bootstrap.css">\n    <title>03.Bootstrap4模板</title>\n</head>\n<body>\n<h1>Hello, world!</h1>\n<script src="js/jquery-1.12.4.js"><\/script>\n<!--在Bootstrap4中很多的提示、弹窗都是通过popper.min.js实现的，所以需要导入-->\n<script src="js/popper.min.js"><\/script>\n<script src="js/bootstrap-4.3.1.js"><\/script>\n</body>\n</html>\n',
      code3:
        '<容器>\n    <行>\n        <列>我们的内容</列>\n        <列>我们的内容</列>\n        ... ...\n    </行>\n</容器>',
      code4:
        '<div class="col-6">第1列</div>\n<div class="col-4">第2列</div>\n<div class="col-3">第3列</div>\n<div class="col-xl-4">第2列</div>\n<div class="col-xl-3">第3列</div>\n<div class="col-xl-6 col-lg-1">第1列</div>\n<div class="col-xl-4 col-lg-6">第2列</div>\n<div class="col-xl-3 col-lg-1">第3列</div>',
      code5:
        '添加.no-gutters类后，padding消失，但容器左右有间隙\n给容器添加类.px-0，容器左右间隙消失\n<div class="container px-0"><!--容器-->\n    <div class="row no-gutters">\n        <div class="col-4">第1列</div>\n        <div class="col-4">第2列</div>\n        <div class="col-3">第3列</div>\n    </div>\n</div>',
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
