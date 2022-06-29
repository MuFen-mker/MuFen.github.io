<template>
  <div class="tail">
    <img class="tailImgR" src="@/assets/DLR.png" />
    <img class="tailImgL" src="@/assets/DLL.png" />
    <p class="DLNet">{{ websiteInformation }}</p>
    <p class="DLtxt">By:{{ authorInformation }}</p>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
export default {
  name: 'IndexBottom',
  setup() {
    let text = reactive({
      websiteInformation:
        '© 2021 MuFen-Personal Website(Plagiarism Is Prohibited)',
      authorInformation: 'MuFen',
    })
    return {
      ...toRefs(text),
    }
  },
}
</script>

<style scoped>
.tail {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
  height: 93px;
  margin: 80px auto 0;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  border-top: 5px solid orange;
  position: relative;
  bottom: 0;
  z-index: -2;
}
.tailImgR {
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
}
.tailImgL {
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.DLtxt {
  font-weight: normal;
  font-size: 16px;
  color: black;
}
.DLNet {
  font-weight: normal;
  font-size: 18px;
  color: black;
  line-height: 40px;
}
@media screen and (max-width: 785px) {
  .tailImgL {
    display: none;
  }
  .DLtxt {
    text-align: left;
    margin-left: 10px;
  }
  .DLNet {
    text-align: left;
    margin-left: 10px;
  }
}
@media screen and (max-width: 633px) {
  .DLtxt {
    font-size: 16px;
  }
  .DLNet {
    font-size: 16px;
  }
  .tail {
    height: 75px;
  }
  p {
    margin-bottom: 0;
  }
}
@media screen and (max-width: 568px) {
  .DLtxt {
    font-size: 12px;
  }
  .DLNet {
    font-size: 12px;
  }
}
@media screen and (max-width: 435px) {
  .tail {
    height: 60px;
  }
  .DLNet{
   line-height: 30px;
  }
}
@media screen and (max-width: 417px) {
  .tail {
    height: 40px;
  }
  .DLNet{
   line-height: 17px;
  }
}
</style>
