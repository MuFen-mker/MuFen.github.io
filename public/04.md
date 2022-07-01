# vue生命周期的理解

##### By : [南张门](https://blog.csdn.net/haochangdi123)

##### [原文链接](https://blog.csdn.net/haochangdi123/article/details/78358895?ops_request_misc=%7B%22request%5Fid%22%3A%22165667461316781667827529%22%2C%22scm%22%3A%2220140713.130102334.pc%5Fblog.%22%7D&request_id=165667461316781667827529&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-78358895-null-null.185^v2^control&utm_term=Vue&spm=1018.2226.3001.4450)



## 一.Vue[生命周期](https://so.csdn.net/so/search?q=生命周期&spm=1001.2101.3001.7020)简介

官网：https://cn.vuejs.org/v2/api/#beforeCreate
Vue实例从创建到销毁的过程，就是生命周期。详细来说也就是从开始创建、初始化数据、编译模板、[挂载](https://so.csdn.net/so/search?q=挂载&spm=1001.2101.3001.7020)Dom、渲染→更新→渲染、卸载等一系列过程。



## 二.钩子详解



#### 1.beforeCreate

在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <!-- 引入vue.js -->
    <script type="text/javascript" src='./vue.js'></script>
</head>
<body>
    <div id="app">
        <input type="text" name="" v-model="message">
        {{message}} 
    </div>
    <script type="text/javascript">
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
    </script>   
</body>
</html>
```



#### 2.created

实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
**主要应用：**调用数据，调用方法，调用异步函数

```html
<div id="app">
    <ul>
        <li v-for="(item,index) of list" key="index">{{item}}--{{message}}</li>
    </ul>

    <p>p1</p>
    <p>p1</p>
    <p>p1</p>
</div>
<script type="text/javascript">
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
</script>   
```



#### 4.mounted

el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
**有初始值的DOM渲染，例如我们的初始数据list,渲染出来的li，只有这里才能获取**
（接 2created的代码）

```javascript
mounted: function () {
    console.log('mounted:',document.getElementsByTagName('li').length);
},
```



#### 5.beforeUpdate

数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
当我们更改Vue的任何数据，都会触发该函数

```javascript
 beforeUpdate: function () {
       console.log('beforeUpdate 钩子执行...');
       console.log('beforeUpdate:'+this.message)
 },
```



#### 6.updated

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。
该钩子在服务器端渲染期间不被调用。

数据更新就会触发（vue所有的数据只有有更新就会触发）,如果想数据一遍就做统一的处理，可以用这个，如果想对不同数据的更新做不同的处理可以用nextTick，或者是watch进行监听

```javascript
 updated: function () {
     console.log('updated 钩子执行...');
     console.log('updated:',this.message)
},
```



#### 7.beforeDestroy

实例销毁之前调用。在这一步，实例仍然完全可用。



#### 8.destroyed

Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。

```html
<div id="app">
</div>
<script type="text/javascript">
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
</script>   
```





## 补充$mount

当你vue没有挂在el时，我们可以用$mount

```javascript
var app = new Vue({
    data:{
            message:'this is mseeage',
        },
}).$mount('#app')
```



## 1.异步函数

这里我们用定时器来做异步函数

```html
<div id="app">
    <ul>
        <li v-for="(item,index) of list" key="index">{{item}}</li>
    </ul>
</div>

<script type="text/javascript">
    var app = new Vue({
        el:'#app',
        data:{
            list:['aaaaaaaa','bbbbbbb','ccccccc']
        },
        created:function(){
            consoloe.log('created异步：aaaaa');
            //异步获取数据
            // 因为是异步,就和我们ajax获取数据一样
            setTimeout(()=>{
                this.list=['111','222','333','444'],
                console.log('created异步：',document.getElementsByTagName('li').length);
            },0)
        },
        mounted: function () {
            console.log('mounted:',document.getElementsByTagName('li').length);
        },
        updated: function () {
            console.log('updated:',document.getElementsByTagName('li').length)
        },
    })
</script>
```

结果为：
create: aaaaaaaa
mounted: 3
created异步函数： 3
updated: 4
解释：
可以看到因为是在created的钩子中加入异步函数，所以函数的执行顺序为：
ceated钩子,mounted钩子,异步函数,updated钩子(根据事件队列原理,只有在updated后，li才是真的DOM渲染为4个，所以异步函数中获取的li的个数时是没有变化的li的个数)。
因为mounted获取到的是我们在Vue的data中设置初始值渲染的DOM，而我们是在异步函数中变化的list数据，所以mounted获取的li的个数为3。
update函数是只要数据vue绑定的数据变化就会触发，所以最后执行，为4

这是不是意味着可以直接在update函数中操作呢，其实不是，因为update函数是针对vue的所有数据的变化，而我们也有可能会有其他数据的变化。

例如下面的例子：

```javascript
//我们利用异步函数改变了两次list，会发现update被触发了2次
created:function(){
        //异步获取数据
        // 因为是异步,就和我们ajax获取数据一样
        setTimeout(()=>{
             this.list=['111','222','333','444'],
             console.log('created异步：',document.getElementsByTagName('li').length);
        },0)
        setTimeout(()=>{
             this.list=['快乐大本营','脚踏实地','300033','天天向上','好好学习'],
             console.log('created异步：',document.getElementsByTagName('li').length);
        },1000)
},
mounted: function () {
        console.log('mounted:',document.getElementsByTagName('li').length);
},
updated: function () {
        console.log('updated:',document.getElementsByTagName('li').length)
},
```



## 2.Vue.nextTick对异步函数的结果进行操作

我们想要改变数据时,各自触发各自的方法

```javascript

created:function(){
//异步获取数据
// 因为是异步,就和我们ajax获取数据一样

    //为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。
    setTimeout(()=>{
        this.list=['111','222','333','444'],
        console.log('created异步：',document.getElementsByTagName('li').length);
        this.$nextTick(function(){
            console.log("created$nextTick：",document.getElementsByTagName('li').length)
        });
    },0)
    setTimeout(()=>{
        this.list=['快乐大本营','脚踏实地','300033','天天向上','好好学习'],
        console.log('created异步：',document.getElementsByTagName('li').length);
        this.$nextTick(function(){
            console.log("created$nextTick：",document.getElementsByTagName('li').length)
        });
    },1000)
},
mounted: function () {
    console.log('mounted:',document.getElementsByTagName('li').length);
},
updated: function () {
  console.log('updated:',document.getElementsByTagName('li').length)
},
```