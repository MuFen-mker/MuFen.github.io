<template>
  <div>
    <div class="MainContent">
      <div class="headDecoration">
        <div>
          <p>
            『空がどんなたかくても，羽根が千切れちっても，飛び立つこと恐れずに。』
          </p>
          <p style="text-align: right">『♪ FIRE BIRD-Roselia』</p>
        </div>
        <div class="Cover"></div>
        <img src="@/assets/DryingTutorialHeadFigure.jpg" />
      </div>
      <div class="Tips">
        <p>各种东西的教程,奇怪的知识增加了</p>
      </div>
      <div>
        <ul class="webFromEndUl">
          <li v-for="Index in Slight" :key="Index.id">
            <a target="_blank" class="externalLink" :href="Index.routersRun">
              <h1>
                <hands
                  theme="two-tone"
                  size="100%"
                  :fill="['#333', '#f5a623']"
                />{{ Index.title }}
              </h1>
              <p>{{ Index.text }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Hands } from '@icon-park/vue-next'
import { reactive, toRefs } from '@vue/reactivity'
import { nanoid } from 'nanoid'
export default {
  name: 'ContentDryingTutorial',
  components: { Hands },
  setup() {
    let WebFromEndData = reactive({
      Slight: [
        {
          id: nanoid(),
          title: '安卓Termux一键安装linux容器',
          text: 'By:Xunflash',
          routersRun:
            'https://www.xunflash.top/index.php/archives/Termux-linux.html',
        },
        {
          id: nanoid(),
          title: '干货！安卓自定义图标包教程',
          text: 'By:酷安-oMMiao',
          routersRun:
            'https://www.coolapk.com/feed/14139819?shareKey=MjIwMmMxM2NlZGNjNjE4Yjc4NDg~&shareUid=1712693&shareFrom=com.coolapk.market_11.4.5',
        },
        {
          id: nanoid(),
          title: '史上最全的Windows美化教程',
          text: 'By:酷安-月初升',
          routersRun:
            'https://www.coolapk.com/feed/17350104?shareKey=YTk0MGFmYTUwNzYyNjE4Yjc5ODA~&shareUid=1712693&shareFrom=com.coolapk.market_11.4.5',
        },
        {
          id: nanoid(),
          title: '如何更换PS / PR / AI / AU的启动图？',
          text: 'By:BiliBili-夜莺夜影',
          routersRun:
            'https://www.bilibili.com/video/BV1yE411W72X?spm_id_from=333.999.0.0',
        },
        {
          id: nanoid(),
          title: 'P2P内网穿透',
          text: 'By:BiliBili-tomhuang2000',
          routersRun:
            'https://www.bilibili.com/video/BV19J411R7xa?spm_id_from=333.999.0.0',
        },
        {
          id: nanoid(),
          title: '面对小白的ROM编译教程',
          text: 'By:酷安-SakuraiKR',
          routersRun:
            'https://www.coolapk.com/feed/24966438?shareKey=MzMxZWNlOTA1NzRlNjE5NWRlMmI~&shareUid=1712693&shareFrom=com.coolapk.market_11.4.5',
        },
        {
          id: nanoid(),
          title: '基于WordPress搭建个人博客网站',
          text: 'By:酷安-十一维智子',
          routersRun:
            'https://www.coolapk.com/feed/31213116?shareKey=NjMwODY1NDA4Yjk0NjE5NWUwMWU~&shareUid=1712693&shareFrom=com.coolapk.market_11.4.5',
        },
        {
          id: nanoid(),
          title: '老毛子固件自动进行天翼校园认证',
          text: 'By:酷安-MuFen',
          routersRun:
            'https://www.coolapk.com/feed/31551425?shareKey=OTcyZmU0MmMxNjM3NjE5NWYzYWY~&shareUid=1712693&shareFrom=com.coolapk.market_11.4.5',
        },
        {
          id: nanoid(),
          title: '国光的黑苹果安装教程',
          text: 'By:国光',
          routersRun: 'https://apple.sqlsec.com/',
        },
        {
          id: nanoid(),
          title: '手把手教你破解Linux系统root密码',
          text: 'By:酷安-young_forever',
          routersRun:
            'https://www.coolapk.com/feed/23135120?shareKey=NWQ0YTQ1NzcyZjNhNjE5NWZlNzE~&shareUid=1712693&shareFrom=com.coolapk.market_11.4.5',
        },
      ],
    })
    return {
      ...toRefs(WebFromEndData),
    }
  },
}
</script>

<style scoped>
ol,
ul {
  padding-left: 0;
}
.i-icon {
  height: 40px !important;
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
.webFromEndUl {
  list-style: none;
  margin: 0 5%;
}
.webFromEndUl li {
  margin: 8% 0;
  border-radius: 2px;
  padding: 1%;
}
.webFromEndUl li:hover {
  background: rgba(0, 0, 0, 0.05);
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
  display: flex;
  align-items: center;
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
  font-size: 18px;
  text-align: center;
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
}
@media screen and (max-width: 705px) {
  .Tips p {
    font-size: 16px;
  }
  .externalLink h1 {
    font-size: 20px;
  }
  .i-icon {
    height: 30px !important;
  }
  .externalLink p {
    font-size: 12px;
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
}
@media screen and (max-width: 525px) {
  .externalLink h1 {
    font-size: 12px;
  }
  .i-icon {
    height: 20px !important;
  }
}
</style>
