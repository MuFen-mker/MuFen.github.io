<template>
  <div>
    <div class="MainContent">
      <div class="headDecoration">
        <div>
          <p>『例え明日が，行き止まりでも，自分の手で，切り開くんだ。』</p>
          <p style="text-align: right">『♪ BLACK SHOUT-Roselia』</p>
        </div>
        <div class="Cover"></div>
        <img src="@/assets/SoftwareRecommendationHeadFigure.jpg" />
      </div>
      <div class="Tips">
        <p>
          <android
            theme="two-tone"
            size="100%"
            :fill="['#333', '#7ed321']"
          />代表Android应用,
        </p>
        <p>
          <windows
            theme="two-tone"
            size="100%"
            :fill="['#333', '#4a90e2']"
          />代表Windows应用,
        </p>
        <p>
          <open-one
            theme="two-tone"
            size="100%"
            :fill="['#333', '#b8e986']"
          />代表文件提取码
        </p>
      </div>
      <div>
        <el-collapse
          class="softwareRecommendationDisplayBox"
          v-model="activeName"
          accordion
        >
          <el-collapse-item
            v-for="index in Slight"
            :key="index.id"
            :title="index.title"
            :name="index.id"
          >
            <div class="content">
              <div class="coverPicture">
                <img :src="index.picturePath" />
              </div>
              <div class="explanationAndLink">
                <div class="brieflyExplain">
                  {{ index.text }}
                </div>
                <div class="Link">
                  <div class="linkType">
                    <android
                      v-if="index.type.android"
                      theme="two-tone"
                      size="100%"
                      :fill="['#333', '#b8e986']"
                    />
                    <windows
                      v-if="index.type.windows"
                      theme="two-tone"
                      size="100%"
                      :fill="['#333', '#4a90e2']"
                    />
                    <a class="toLink" target="_blank" :href="index.routersRun"
                      ><download-four
                        theme="two-tone"
                        size="100%"
                        :fill="['#333', '#50e3c2']"
                    /></a>
                  </div>
                  <div v-if="index.encryption" class="password">
                    <open-one
                      theme="two-tone"
                      size="100%"
                      :fill="['#333', '#b8e986']"
                    />
                    <p>{{ index.password }}</p>
                  </div>
                </div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { Android, Windows, OpenOne, DownloadFour } from '@icon-park/vue-next'
import { reactive, toRefs, ref } from '@vue/reactivity'
import { nanoid } from 'nanoid'
export default {
  name: 'ContentDryingTutorial',
  components: {
    Android,
    Windows,
    OpenOne,
    DownloadFour,
  },
  setup() {
    let activeName = ref(null)
    let WebFromEndData = reactive({
      Slight: [
        {
          id: nanoid(),
          title: 'Adobe Photoshop',
          text: 'Photoshop主要处理以像素所构成的数字图像。使用其众多的编修与绘图工具，可以有效地进行图片编辑工作。ps有很多功能，在图像、图形、文字、视频、出版等各方面都有涉及。',
          picturePath: require('@/assets/PS.png'),
          routersRun: 'https://pan.baidu.com/s/1N1FiBTHPB7PxhZER2PgaQw',
          type: { windows: true, android: false },
          encryption: true,
          password: 'mpqb',
        },
        {
          id: nanoid(),
          title: 'Adobe After Effects',
          text: '适用于从事设计和视频特技的机构，包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。属于层类型后期软件。',
          picturePath: require('@/assets/AE.png'),
          routersRun: 'https://pan.baidu.com/s/1ODfw8jGDz488RG6W_N8CIg',
          type: { windows: true, android: false },
          encryption: true,
          password: 'aksh',
        },
        {
          id: nanoid(),
          title: 'Ccleaner',
          text: 'ccleaner可以清除系统中的所有垃圾文件，腾出硬盘空间，保护系统隐私。ccleaner体积小、运行快，同时还可以对注册表进行扫描。',
          picturePath: require('@/assets/ccleane.png'),
          routersRun: 'https://pan.baidu.com/s/1guyJX84qBKJxAv4OCQ0CHg',
          type: { windows: true, android: false },
          encryption: true,
          password: 'jfvt',
        },
        {
          id: nanoid(),
          title: 'Visual Studio Code',
          text: '多样化的插件,小巧的体积,功能齐全并且界面简单,个人敲代码的最爱,不管是前端开发,还是Python,JAVA,C++,C#,有它全搞定!如此强大的编辑器确定不来一个?',
          picturePath: require('@/assets/VSC.png'),
          routersRun: 'https://code.visualstudio.com/',
          type: { windows: true, android: false },
          encryption: false,
          password: '',
        },
        {
          id: nanoid(),
          title: 'OBS',
          text: '简单明了的界面,功能强大,无水印(点名批评国内某些"水印"录屏软件),可用于直播推流,用过的都说好。(除非不会用=-=)',
          picturePath: require('@/assets/OBS.png'),
          routersRun: 'https://obsproject.com/zh-cn',
          type: { windows: true, android: false },
          encryption: false,
          password: '',
        },
        {
          id: nanoid(),
          title: 'AIMP',
          text: '除了播放器基本的音频播放之外它还包含了音频转换、录制、ID3标签编辑等功能。界面相当友好易用，占用系统资源较少且安装包也不是很大。',
          picturePath: require('@/assets/AIMP.png'),
          routersRun: 'https://www.aimp.ru/',
          type: { windows: true, android: true },
          encryption: false,
          password: '',
        },
        {
          id: nanoid(),
          title: 'Everthing',
          text: '功能强大，体积小巧，第一次安装使用时会建立一个索引数据库，将所有文件和文件夹的名称导入其中，后续使用能够以极快的速度快速搜索，查找到你所需要的文件。',
          picturePath: require('@/assets/everything.png'),
          routersRun: 'https://www.voidtools.com/zh-cn/',
          type: { windows: true, android: false },
          encryption: false,
          password: '',
        },
        {
          id: nanoid(),
          title: '火绒',
          text: '杀防管控一体的安全软件，有着面向个人和企业的产品。拥有简洁的界面、丰富的功能和很好的体验。特别针对国内安全趋势，自主研发高性能病毒扫描引擎。',
          picturePath: require('@/assets/huoron.png'),
          routersRun: 'https://www.huorong.cn/',
          type: { windows: true, android: false },
          encryption: false,
          password: '',
        },
        {
          id: nanoid(),
          title: 'Tasker',
          text: '适用于Android的应用程序，可根据用户定义的配置文件或可点击或计时器主屏幕小部件中的上下文（应用程序，时间，日期，位置，事件，手势）执行任务（一组动作）。',
          picturePath: require('@/assets/tasker.png'),
          routersRun: 'https://wwi.lanzoui.com/b08gcqsde',
          type: { windows: false, android: true },
          encryption: true,
          password: '1k45',
        },
        {
          id: nanoid(),
          title: 'CPU-Z',
          text: '一个处理器信息查看工具，提供一些关于处理器的资讯，包含了制造厂及处理器名称，核心构造及封装技术，内部、外部频率，最大超频速度侦测。',
          picturePath: require('@/assets/CPU-Z.png'),
          routersRun: 'https://www.cpuid.com/softwares/cpu-z.html',
          type: { windows: true, android: true },
          encryption: false,
          password: '',
        },
      ],
    })
    return {
      ...toRefs(WebFromEndData),
      activeName,
    }
  },
}
</script>

<style scoped>
.Tips p span {
  height: 48px;
}
.linkType > span {
  height: 42px;
}
.password > span {
  height: 42px;
}
.toLink {
  height: 80px;
}
.Cover {
  background: -webkit-linear-gradient(
    left,
    rgb(240, 240, 240),
    rgba(240, 240, 240, 0)
  );
  width: 14.2% !important;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
}
.softwareRecommendationDisplayBox {
  margin: 5% 5%;
}
.el-collapse-item {
  border-top: 0 !important;
  border-bottom: 0 !important;
  margin: 10% 0;
}
.el-collapse {
  border-top: 0;
  border-bottom: 0;
  --el-collapse-header-font-size: 32px;
  --el-collapse-content-font-size: 16px;
}
.content {
  display: flex;
}
.explanationAndLink {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;
}
.externalLink p {
  font-size: 16px;
  border-top: 2px solid orange;
  margin-top: 1%;
  padding-top: 1%;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: rgb(80, 80, 80);
}
.externalLink h1 {
  font-size: 28.8px;
}
.externalLink {
  position: relative;
  z-index: 99;
  text-decoration: none;
}
.MainContent {
  margin: 5% auto;
  width: 1120px;
  background: rgb(255, 255, 255);
  border: 3px solid orange;
  border-radius: 10px;
}
.headDecoration {
  display: flex;
  justify-content: space-between;
  height: 160px;
  background: rgb(240, 240, 240);
  border-radius: 10px 10px 0 0;
  margin-bottom: 3%;
  border-bottom: 2px solid black;
  position: relative;
}
.headDecoration > img {
  height: 100%;
  border-radius: 0 7px 0 0;
}
.headDecoration > div {
  width: 100%;
}
.headDecoration p {
  margin: 3.5%;
  font-size: 22.4px;
}
.Tips {
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
}
.Tips p {
  font-size: 18px;
  text-align: center;
  vertical-align: middle;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.brieflyExplain {
  margin: 0 0 2% 2%;
  height: 60%;
  font-size: 18px;
}
.Link {
  margin: 0 0 0 2%;
  height: 32%;
}
.linkType {
  display: flex;
  position: relative;
}
.linkType a {
  position: absolute;
  right: 5%;
  text-decoration: none;
}
.linkType a:hover {
  border-radius: 5px;
  background: rgb(236, 236, 236);
}
.password {
  display: flex;
  align-items: flex-start;
}
.password p {
  display: flex;
  margin-left: 1%;
  padding: 0 2%;
  background: rgb(233, 233, 233);
  transform: translateY(30%);
}
@media screen and (max-width: 1200px) {
  .MainContent {
    width: 93.35%;
  }
  .Cover {
    width: 158px !important;
  }
}
@media screen and (max-width: 974px) {
  .headDecoration p {
    font-size: 18px;
  }
  .headDecoration {
    height: 125px;
  }
  .Cover {
    width: 125px !important;
  }
  .coverPicture img {
    height: 260px;
  }
}
@media screen and (max-width: 780px) {
  .headDecoration p {
    font-size: 16px;
  }
  .headDecoration {
    height: 110px;
  }
  .Cover {
    width: 110px !important;
  }
  .coverPicture img {
    height: 230px;
  }
}
@media screen and (max-width: 705px) {
  .Tips p {
    font-size: 16px;
  }
  .externalLink h1 {
    font-size: 20px;
  }
  .externalLink p {
    font-size: 12px;
  }
  .el-collapse {
    --el-collapse-header-font-size: 24px;
    --el-collapse-content-font-size: 12px;
  }
  .brieflyExplain {
    font-size: 14px;
  }
  .Tips p span {
    height: 30px;
  }
  .linkType > span {
    height: 30px;
  }
  .password > span {
    height: 30px;
  }
  .toLink {
    height: 60px;
  }
  .coverPicture img {
    height: 170px;
  }
}
@media screen and (max-width: 700px) {
  .headDecoration p {
    font-size: 14px;
  }
  .headDecoration {
    height: 100px;
  }
  .Cover {
    width: 100px !important;
  }
  .webFromEndUl {
    margin: 0;
  }
}
@media screen and (max-width: 609px) {
  .headDecoration p {
    font-size: 12px;
  }
  .headDecoration {
    height: 85px;
  }
  .Cover {
    width: 85px !important;
  }
  .Tips p {
    font-size: 12px;
  }
  .Tips p span {
    font-size: 12px;
  }
  .el-collapse {
    --el-collapse-header-font-size: 20px;
    --el-collapse-content-font-size: 12px;
  }
  .brieflyExplain {
    font-size: 12px;
  }
}
@media screen and (max-width: 525px) {
  .externalLink h1 {
    font-size: 12px;
  }
  .externalLink p {
    font-size: 12px;
  }
  .el-collapse {
    --el-collapse-header-font-size: 20px;
    --el-collapse-content-font-size: 12px;
  }
  .brieflyExplain {
    font-size: 12px;
    transform: scale(85%);
    margin: 0 -6%;
    width: 110%;
  }
  .Tips p span {
    height: 20px;
  }
  .linkType > span {
    height: 20px;
  }
  .password > span {
    height: 20px;
  }
  .toLink {
    height: 50px;
  }
  .password p {
    transform: translateY(5%);
  }
}
@media screen and (max-width: 525px) {
  .brieflyExplain {
    transform: scale(75%);
    margin: 0 -12%;
    width: 129%;
  }
}
@media screen and (max-width: 400px) {
  .Tips {
    flex-direction: column;
  }
}
</style>
