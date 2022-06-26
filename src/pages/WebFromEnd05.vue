<template>
  <transition name="enterAnAnimation">
    <div style="overflow-x: auto" v-if="shows" class="webFromEndText">
      <div @click="backToTheUpperLevel()" class="Return">
        <double-left theme="outline" size="40" fill="#000000" /><span
          >返回</span
        >
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
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;!--可以让部分国产浏览器默认采用高速模式渲染页面：--&gt;
    &lt;meta name="renderer" content="webkit"&gt;
    &lt;!--使用edge渲染，不使用IE渲染。--&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;!--    meta:vp为了保证页面在移动端也正常运行--&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;Bootstrap3模板&lt;/title&gt;
    &lt;!-- 导入Bootstrap CSS文件--&gt;
    &lt;link href="css/bootstrap.css" rel="stylesheet"&gt;
    &lt;!-- [if xxx] ![endif这个是IE中的条件注释，只有在IE浏览器下才会执行] It:表示小于运算符
     HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素（header、footer、nav等）和媒体查询（media queries）功能 
     注意点：由于同源策略，Respond.js文件不能通过file://协议（就是直接将 html 页面拖拽到浏览器中）直接打开，需要在http://（服务器协议）中打开。
    --&gt;
    &lt;!--[if It IE 9]&gt;
    &lt;script src="js/html5shiv.js"&gt;&lt;/script&gt;
    &lt;script src="js/respond.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;你好，世界！&lt;/h1&gt;
&lt;!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) --&gt;
&lt;script src="js/jquery-1.12.4.js"&gt;&lt;/script&gt;
&lt;script src="js/bootstrap.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </pre>
        <h1>5.Bootstrap4模板</h1>
        <p>
          使用下方模板粘贴至html文件中，需要修改引入文件路径，即可开启Bootstrap4的使用
        </p>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;!-- Required meta tags --&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;!--    meta:vp为了保证页面在移动端也正常运行--&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;
    &lt;!-- 导入Bootstrap CSS文件--&gt;
    &lt;link rel="stylesheet" href="css/bootstrap.css"&gt;
    &lt;title&gt;03.Bootstrap4模板&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Hello, world!&lt;/h1&gt;
&lt;script src="js/jquery-1.12.4.js"&gt;&lt;/script&gt;
&lt;!--在Bootstrap4中很多的提示、弹窗都是通过popper.min.js实现的，所以需要导入--&gt;
&lt;script src="js/popper.min.js"&gt;&lt;/script&gt;
&lt;script src="js/bootstrap-4.3.1.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </pre>
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
        <pre>
&lt;容器&gt;
    &lt;行&gt;
        &lt;列&gt;我们的内容&lt;/列&gt;
        &lt;列&gt;我们的内容&lt;/列&gt;
        ... ...
    &lt;/行&gt;
&lt;/容器&gt;        
        </pre>
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
        <pre>
&lt;div class="col-6"&gt;第1列&lt;/div&gt;
&lt;div class="col-4"&gt;第2列&lt;/div&gt;
&lt;div class="col-3"&gt;第3列&lt;/div&gt;
&lt;div class="col-xl-4"&gt;第2列&lt;/div&gt;
&lt;div class="col-xl-3"&gt;第3列&lt;/div&gt;
&lt;div class="col-xl-6 col-lg-1"&gt;第1列&lt;/div&gt;
&lt;div class="col-xl-4 col-lg-6"&gt;第2列&lt;/div&gt;
&lt;div class="col-xl-3 col-lg-1"&gt;第3列&lt;/div&gt;
        </pre>
        <p>6.栅格系统-沟槽</p>
        <p>
          BootStrap默认的栅格和列间有间隙沟槽，一般是左右-15px的margin或padding处理，您可以使用.no-gutters类来消除它，这将影响到.row行、列平行间隙及所有子列
        </p>
        <pre>
添加.no-gutters类后，padding消失，但容器左右有间隙
给容器添加类.px-0，容器左右间隙消失
&lt;div class="container px-0"&gt;&lt;!--容器--&gt;
    &lt;div class="row no-gutters"&gt;
        &lt;div class="col-4"&gt;第1列&lt;/div&gt;
        &lt;div class="col-4"&gt;第2列&lt;/div&gt;
        &lt;div class="col-3"&gt;第3列&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

        </pre>
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
          href="https://blog.csdn.net/Cao_Mary/article/details/100533883?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165604165816782425190642%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165604165816782425190642&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~hot_rank-3-100533883-null-null.142^v21^control,157^v15^new_3&utm_term=bootstrap%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8&spm=1018.2226.3001.4187"
          ><link-one
            theme="outline"
            size="24"
            fill="#333"
          />bootstrap基本使用，快速了解bootstrap</a
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
  margin: 5% 0;
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
