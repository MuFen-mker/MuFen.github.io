<template>
  <transition name="enterAnAnimation">
    <div style="overflow-x: auto" v-if="shows" class="webFromEndText">
      <div @click="backToTheUpperLevel()" class="Return">
        <double-left theme="outline" size="40" fill="#000000" /><span
          >返回</span
        >
      </div>
      <div class="webFromEndBody">
        <h1>一.Vue生命周期简介</h1>
        <p>
          Vue实例从创建到销毁的过程，就是生命周期。详细来说也就是从开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、卸载等一系列过程。
        </p>
        <h1>二.钩子详解</h1>
        <p>1.beforeCreate</p>
        <p>
          在实例初始化之后，数据观测(data observer) 和 event/watcher
          事件配置之前被调用。
        </p>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;!-- 引入vue.js --&gt;
    &lt;script type="text/javascript" src='./vue.js'&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="app"&gt;
        &lt;input type="text" name="" v-model="message"&gt;
        {\{message}\} 
    &lt;/div&gt;
    &lt;script type="text/javascript"&gt;
        //实例化Vue
        var app = new Vue({
            el:'#app',
            data:{
                message:'this is mseeage'
            },
            //时刻监测数据message的变化,一但那变化就会吊该函数
            watch:{
                //message必须和监测的data名字一样
                message:function(){
                    console.log('watch:','message 变了')
                }
            },
            methods:{
                init:function(){
                    console.log('这是初始化方法')
                }
            },
            //我们在beforeCreate钩子中调用Vue的data和method
            beforeCreate:function(){
                console.log("beforeCreate",this.message);
                this.init();
            }
        })
    &lt;/script&gt;   
&lt;/body&gt;
&lt;/html&gt;
       </pre
        >
        <p>2.created</p>
        <p>
          实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data
          observer)，属性和方法的运算， watch/event
          事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
        </p>
        <p>主要应用：调用数据，调用方法，调用异步函数</p>
        <pre>
&lt;div id="app"&gt;
  &lt;ul&gt;
      &lt;li v-for="(item,index) of list" key="index"&gt;{/{item}/}--{/{message}/}&lt;/li&gt;
  &lt;/ul&gt;

  &lt;p&gt;p1&lt;/p&gt;
  &lt;p&gt;p1&lt;/p&gt;
  &lt;p&gt;p1&lt;/p&gt;
&lt;/div&gt;
&lt;script type="text/javascript"&gt;
  //实例化Vue
  var app = new Vue({
      el:'#app',
      data:{
          message:'this is mseeage',
          list:['aaaaaaaa','bbbbbbb','ccccccc']
      },
      //时刻监测数据message的变化,一但那变化就会吊该函数
      watch:{
          //message必须和监测的data名字一样
          message:function(){
              console.log('watch:','message 变了')
          }
      },
      methods:{
          foo:function(){
              console.log('foo : ','这是初始化方法')
          }
      },
      //created钩子
      created:function(){
          //调用Vue的data
          console.log("created : ",this.message);
          //调用Vue方法
          this.foo();
          //因为我们是通过v-for循环遍历li，所以created之前挂载阶段还没开始.是无法获取li的个数的
          console.log('li数量：',document.getElementsByTagName('li').length);
          //直接加载出来的DOM是可以直接获取到的
          console.log('p个数：',document.getElementsByTagName('p').length);
      },
  })
&lt;/script&gt;   
        </pre>
        <p>3.beforeMount</p>
        <p>在挂载开始之前被调用：相关的 render 函数（模板）首次被调用。</p>
        <p>例如通过v-for生成的html还没有被挂载到页面上</p>
        <p>（接 2created的代码）</p>
        <pre>
        beforeMount: function () {
            console.log('beforeMount:',document.getElementsByTagName('li').length);
          },
       </pre
        >
        <p>4.mounted</p>
        <p>el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。</p>
        <p>
          <strong
            >有初始值的DOM渲染，例如我们的初始数据list,渲染出来的li，只有这里才能获取</strong
          >
        </p>
        <p>（接 2created的代码）</p>
        <pre>
mounted: function () {
    console.log('mounted:',document.getElementsByTagName('li').length);
},
       </pre
        >
        <p>5.beforeUpdate</p>
        <p>
          数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
          你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
        </p>
        <p>当我们更改Vue的任何数据，都会触发该函数</p>
        <pre>
 beforeUpdate: function () {
       console.log('beforeUpdate 钩子执行...');
       console.log('beforeUpdate:'+this.message)
 },
        </pre>
        <p>6.updated</p>
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
        <pre>
 updated: function () {
     console.log('updated 钩子执行...');
     console.log('updated:',this.message)
},
        </pre>
        <p>7.beforeDestroy</p>
        <p>实例销毁之前调用。在这一步，实例仍然完全可用。</p>
        <br />
        <p>8.destroyed</p>
        <p>
          Vue 实例销毁后调用。调用后，Vue
          实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
          该钩子在服务器端渲染期间不被调用。
        </p>
        <pre>
&lt;div id="app"&gt;
&lt;/div&gt;
&lt;script type="text/javascript"&gt;
    //实例化Vue
    var app = new Vue({
        el:'#app',
        data:{
            message:'this is mseeage',
        },
        beforeDestroy: function () {
            console.log('beforeDestroy 钩子执行...',this.message)
        },
        destroyed: function () {
            console.log('destroyed 钩子执行...',this.message)
        }
    })
    //销毁Vue实例，触发beforeDestroy和destroyed函数
    app.$destroy()
&lt;/script&gt;   
        </pre>
        <h1>作者:南张门</h1>
        <a
          target="_blank"
          href="https://blog.csdn.net/haochangdi123/article/details/78358895?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165604063516782390587527%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165604063516782390587527&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~hot_rank-8-78358895-null-null.142^v21^control,157^v15^new_3&utm_term=Vue%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F&spm=1018.2226.3001.4187"
          ><link-one
            theme="outline"
            size="24"
            fill="#333"
          />vue生命周期的理解</a
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
