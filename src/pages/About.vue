<template>
  <div>
    <div class="MainContent">
      <div class="item">
        <p>作者留言</p>
      </div>
      <div class="content">
        <h1>欢迎访问本站!</h1>
        <p>
          本站立项于2021年10月，经历了一个多月时间在2021年11月下旬完成，由于使用技术栈过于老旧，于是就有了翻新计划!
        </p>
        <p>
          从2022年4月开始使用Vue3进行翻新，2022年6月完成全部代码重构，并从多页面应用变成了单页面应用(可喜可贺)。
        </p>
        <p>本站目前由作者 MuFen- 独自维护。</p>
      </div>
      <div class="item">
        <p>项目依赖</p>
      </div>
      <div class="content">
        <el-descriptions :column="1" border>
          <el-descriptions-item
            label="Vue3"
            label-align="center"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="150px"
            >项目核心，总体构建</el-descriptions-item
          >
          <el-descriptions-item
            label="VueRouter"
            label-align="center"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="150px"
            >Vue路由组件</el-descriptions-item
          >
          <el-descriptions-item
            label="Vuex"
            label-align="center"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="150px"
            >Vue组件状态管理</el-descriptions-item
          >
          <el-descriptions-item
            label="Axios"
            label-align="center"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="150px"
            >发送一言请求，音乐播放器请求</el-descriptions-item
          >
          <el-descriptions-item
            label="element-plus"
            label-align="center"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="150px"
            >部分UI引用</el-descriptions-item
          >
          <el-descriptions-item
            label="IconPark"
            label-align="center"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="150px"
            >图标引用</el-descriptions-item
          >
          <el-descriptions-item
            label="nanoid"
            label-align="center"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="150px"
            >生成随机ID</el-descriptions-item
          >
          <el-descriptions-item
            label="WebPack"
            label-align="center"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="150px"
            >项目打包</el-descriptions-item
          >
        </el-descriptions>
      </div>
      <div class="item">
        <p>联系方式</p>
      </div>
      <div class="Connect">
        <div>
          <div class="icon">
            <tencent-qq theme="outline" size="100%" fill="#000000" />
          </div>
          <div class="connectCenter"><p>3550035202</p></div>
        </div>
        <div>
          <div class="icon">
            <wechat theme="outline" size="100%" fill="#000000" />
          </div>
          <div class="connectCenter"><p>HaSaKaZe</p></div>
        </div>
        <div>
          <div class="icon">
            <mail theme="outline" size="100%" fill="#000000" />
          </div>
          <div class="connectCenter">
            <p>3550035202@qq.com</p>
          </div>
        </div>
        <div>
          <div class="icon">
            <github-one theme="outline" size="100%" fill="#000000" />
          </div>
          <div class="connectCenter">
            <p>
              <a target="_blank" href="https://github.com/MuFen-mker"
                >GitHub主页</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TencentQq, Wechat, GithubOne, Mail } from '@icon-park/vue-next'
export default {
  name: 'ContentDryingTutorial',
  components: { TencentQq, Wechat, GithubOne, Mail },
  setup() {
    return {}
  },
}
</script>

<style scoped>
p {
  margin-bottom: 0;
}
.MainContent {
  margin: 5% auto;
  width: 1120px;
  background: rgb(255, 255, 255);
  border: 3px solid orange;
  border-radius: 10px;
}
.item {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 80px auto 2%;
  border: 2px solid black;
}
.item p {
  font-size: 28.8px;
  background: white;
  transform: translateY(-50%);
  width: 30%;
}
.content {
  margin: 0 auto;
  width: 50%;
  line-height: 40px;
}
.Connect {
  display: flex;
  margin: 0 auto 5%;
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
}
.Connect > div {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.Connect p {
  text-align: right;
  font-size: 24px;
}
.icon {
  height: 48px;
}
.content h1 {
  text-align: center;
  font-size: 40px;
}
.content p {
  text-indent: 2em;
  font-size: 22px;
}
@media screen and (max-width: 1200px) {
  .MainContent {
    width: 93.35%;
  }
}
@media screen and (max-width: 889px) {
  .item p {
    font-size: 24px;
  }
  .content h1 {
    font-size: 26px;
  }
  .content p {
    font-size: 18px;
  }
  .content {
    line-height: 30px;
  }
  .icon {
    height: 40px;
  }
  .Connect p {
    font-size: 20px;
  }
}
@media screen and (max-width: 705px) {
  .item p {
    font-size: 20px;
  }
  .content h1 {
    font-size: 22px;
  }
  .content p {
    font-size: 16px;
  }
  .content {
    line-height: 25px;
  }
  .icon {
    height: 30px;
  }
  .Connect p {
    font-size: 18px;
  }
}
@media screen and (max-width: 587px) {
  .item{
    border: 1px solid black;
  }
  .item p {
    font-size: 16px;
  }
  .content h1 {
    font-size: 18px;
  }
  .content p {
    font-size: 12px;
  }
  .content {
    line-height: 20px;
  }
  .icon {
    height: 25px;
  }
  .Connect p {
    font-size: 14px;
  }
}
@media screen and (max-width: 467px) {
  .item p {
    font-size: 14px;
  }
  .content h1 {
    font-size: 14px;
  }
  .content p {
    font-size: 12px;
  }
  .content {
    line-height: 20px;
  }
  .icon {
    height: 16px;
  }
  .Connect p {
    font-size: 12px;
  }
}
@media screen and (max-width: 410px) {
  .item p{
    width: 40%;
  }
}
</style>
