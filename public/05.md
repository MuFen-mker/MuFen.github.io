# bootstrap基本使用，快速了解bootstrap

##### By : [Cao_Mary](https://blog.csdn.net/haochangdi123)

##### [原文链接](https://blog.csdn.net/Cao_Mary/article/details/100533883?ops_request_misc=%7B%22request%5Fid%22%3A%22165667529916780366570155%22%2C%22scm%22%3A%2220140713.130102334.pc%5Fblog.%22%7D&request_id=165667529916780366570155&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-100533883-null-null.185^v2^control&utm_term=bootstrap&spm=1018.2226.3001.4450)



本文只涉及[bootstrap](https://so.csdn.net/so/search?q=bootstrap&spm=1001.2101.3001.7020)基本使用，不提供代码案例。以便于快速了解bootstrap是什么。详细使用规则还是要看官方文档。
注意：bootstrap的核心是掌握容器和栅格系统。



## 1.什么是Bootstrap?

- Bootstrap 是twitter公司推出的，专门用于开发响应式布局、移动设备优先的 WEB 框架。
- Bootstrap当前最新的版本的Bootstrap4, 但当下企业使用最多的是Bootstrap3

## 2.Bootstrap3和4的区别

- 2.1、CSS预处理器不同, Bootstrap3采用Less, Bootstrap4采用SASS
- 2.2、格栅种类不同, Bootstrap3提供4种格栅, Bootstrap4提供5种格栅
- 2.3、使用单位不同, Bootstrap3使用px作为单位, Bootstrap4使用rem作为单位
- 2.4、内部布局方式不同, Bootstrap3使用float布局, Bootstrap4使用flexbox布局
- 2.5 … …

## 3.Bootstrap兼容性

- Bootstrap 的目标是在最新的桌面和移动浏览器上有最佳的表现，也就是说，在较老旧的浏览器上可能会导致某些组件表现出的样式有些不同，但是功能是完整的。
- IE8以上都能完美使用, IE8以下需要通过一些额外的配置来保证其完整性

## 4.Bootstrap3模板

使用下方模板粘贴至html文件中，需要修改引入文件路径，即可开启Bootstrap3的使用

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <!--可以让部分国产浏览器默认采用高速模式渲染页面：-->
    <meta name="renderer" content="webkit">
    <!--使用edge渲染，不使用IE渲染。-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--    meta:vp为了保证页面在移动端也正常运行-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap3模板</title>
    <!-- 导入Bootstrap CSS文件-->
    <link href="css/bootstrap.css" rel="stylesheet">
    <!-- [if xxx] ![endif这个是IE中的条件注释，只有在IE浏览器下才会执行] It:表示小于运算符
     HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素（header、footer、nav等）和媒体查询（media queries）功能 
     注意点：由于同源策略，Respond.js文件不能通过file://协议（就是直接将 html 页面拖拽到浏览器中）直接打开，需要在http://（服务器协议）中打开。
    -->
    <!--[if It IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.js"></script>
    <![endif]-->
</head>
<body>
<h1>你好，世界！</h1>
<!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
<script src="js/jquery-1.12.4.js"></script>
<script src="js/bootstrap.js"></script>
</body>
</html>
```



## 5.Bootstrap4模板

使用下方模板粘贴至html文件中，需要修改引入文件路径，即可开启Bootstrap4的使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <!--    meta:vp为了保证页面在移动端也正常运行-->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- 导入Bootstrap CSS文件-->
    <link rel="stylesheet" href="css/bootstrap.css">
    <title>03.Bootstrap4模板</title>
</head>
<body>
<h1>Hello, world!</h1>
<script src="js/jquery-1.12.4.js"></script>
<!--在Bootstrap4中很多的提示、弹窗都是通过popper.min.js实现的，所以需要导入-->
<script src="js/popper.min.js"></script>
<script src="js/bootstrap-4.3.1.js"></script>
</body>
</html>
```

#### 注意：若使用webStrom编辑器，可设置模板快捷键。便于快速应用模板。详见[webStrom快捷键设置方法](https://blog.csdn.net/Cao_Mary/article/details/100516002)

## 6.Bootstrap容器

1.Bootstrap容器

- 1.1、在Bootstrap中容器是响应式布局的基础, Bootstrap推荐将所有内容都定义在容器之中
- 1.2、并且容器是启用Bootstrap栅格系统必不可少的前置条件

-2. Bootstrap中提供了两个容器: container/container-fluid

- 2.1、container容器(固定容器):

  - 只要给标签添加了container类名, 这个标签就变成了Bootstrap的container容器

  - 只要这个标签变成了Bootstrap的container容器, 在不同视口大小下就会有不同的固定宽度

- 2.2、container-fluid(自适应宽度容器)

  - 只要给标签添加了container-fluid类名, 这个标签就变成了Bootstrap的container-fluid容器


  - 只要这个标签变成了Bootstrap的container-fluid容器, 那么容器的宽度永远都是100%自适应

- 3.Bootstrap对视口划分：Bootstrap4将视口划分为了5种

  - 超小屏幕(xs): <576px

  - 小屏幕(sm): >=576px

  - 中等屏幕(md):>=768

  - 大屏幕(lg): >=992px

  - 超大屏幕(xl): >= 1200px

- 4、容器实现原理
  - 想了解容器的实现原理。直接查看bootstrap的css文件中对应的container、container-fluid类名即可，其原理使用的是CSS3新增的媒体查询。


## 7、Bootstrap栅格系统

- 1.Bootstrap栅格系统

  - Bootstrap的栅格系统使用一系列的"行"和"列"来实现复杂的响应式布局

  - 默认情况下栅格系统会将一行的内容等分为12份,

  - 然后我们可以通过绑定类名的方式指定这一行中的每一列占用多少分

- 2.Bootstrap栅格系统格式

```
<容器>
    <行>
        <列>我们的内容</列>
        <列>我们的内容</列>
        ... ...
    </行>
</容器>
```



- 3.Bootstrap栅格系统特点
  - 3.1默认情况下行的宽度和所在容器一样
  - 3.2默认情况下所有列的宽度是等分所在行的宽度
  - 3.3可以通过col-num方式指定当前列占用12分之几
  - 3.4如果一行中内容的宽度超过了12分, 那么将自动换行
- 4.Bootstrap栅格系统实现原理
  - bootstrap3：通过float实现
  - bootstrap4：通过伸缩项flex实现
- 5.Bootstrap栅格系统尺寸设置
  - 5.1.栅格系统列的尺寸设置
    - Bootstrap的固定宽度容器提供了5种响应的尺寸,
    - 同样Bootstrap也给列提供了5种响应的尺寸
    - col-: 设置超小屏幕
    - col-sm-:设置小屏幕
    - col-md-:设置中等屏幕
    - col-lg-:设置大屏幕
    - col-xl-*:设置超大屏幕

- 5.2.栅格系统列的尺寸特点
  - 1.如果只设置了小屏幕的大小（col-）, 那么大屏幕也会采用小屏幕设置的大小
  - 2.如果值设置了大屏幕的大小（col-xl-）, 那么小屏幕默认100%
  - 3.如果大小屏幕都设置了大小, 那么在什么屏幕就显示什么尺寸

```html
<div class="col-6">第1列</div>
<div class="col-4">第2列</div>
<div class="col-3">第3列</div>
<div class="col-xl-4">第2列</div>
<div class="col-xl-3">第3列</div>
<div class="col-xl-6 col-lg-1">第1列</div>
<div class="col-xl-4 col-lg-6">第2列</div>
<div class="col-xl-3 col-lg-1">第3列</div>
```



- 6.栅格系统-沟槽
  BootStrap默认的栅格和列间有间隙沟槽，一般是左右-15px的margin或padding处理，您可以使用.no-gutters类来消除它，这将影响到.row行、列平行间隙及所有子列

```html
<!--添加.no-gutters类后，padding消失，但容器左右有间隙
给容器添加类.px-0，容器左右间隙消失-->
<div class="container px-0"><!--容器-->
    <div class="row no-gutters">
        <div class="col-4">第1列</div>
        <div class="col-4">第2列</div>
        <div class="col-3">第3列</div>
    </div>
</div>
```

- 7.栅格系统列-对齐方式
  - Bootstrap4的格栅系统是使用伸缩布局实现的, 所以也可以通过类名快速的设置伸缩项的在主轴和侧轴对齐方式
    - 水平方向
      - 默认同主轴起点对齐:justify-content-start
      - 设置同主轴终点对齐：给row添加justify-content-end类名
      - 设置同主轴中间对齐：justify-content-center
      - 设置同主轴两端对齐：justify-content-between
    - 垂直方向
      - 设置同侧轴顶部对齐：align-items-start
      - 设置同侧轴底部对齐：align-items-end
      - 设置同侧轴中部对齐：align-items-center
- 8、栅格系统-列偏移
  - offset-: 当前列偏移多少份位置
  - 注意点: 写在那一列就是那一列偏移
- 9、栅格系统列-列排序
  - order-: 从小到大顺序排序, 小的在前面, 大的在后面
  - 注意点: 没有排序的列(没有添加order属性的列)位置不会发生变化, 只有排序的列(添加order属性的列)才参与位置变化

