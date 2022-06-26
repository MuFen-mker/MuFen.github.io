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
  margin: 160px auto 0;
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
  line-height: 65px;
}
</style>
