<template>
  <div class="headBoxGround">
    <canvas id="canvas"></canvas>
    <div class="headBoxTxt"></div>
    <div class="hBoxD">
      <p class="headBoxGroundTitle">MuFen</p>
      <p class="headBoxGroundPer">我站在你左侧，却像隔着银河</p>
    </div>
    <img class="DGR" src="@/assets/DG.png" />
    <img class="DGL" src="@/assets/DG2.png" />
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import headerBackground from '@/hooks/headerBackground'
export default {
  name: 'TextHeader',
  setup() {
    onMounted(() => {
      headerBackground()
    })
  },
}
</script>

<style scoped>
.headBoxGround {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 210px;
  background-color: black;
}
.headBoxGroundTitle {
  position: absolute;
  display: inline-block;
  margin: auto;
  top: 20%;
  right: 0;
  left: 0;
  bottom: 0;
  font-size: 65px;
  color: white;
  text-align: center;
  z-index: 2;
  font-family: 'Sweel';
  text-align: center;
}
.headBoxGroundPer {
  position: absolute;
  display: block;
  text-align: center;
  margin: auto;
  top: 60%;
  right: 0;
  left: 0;
  bottom: 0;
  font-size: 13px;
  color: white;
  text-align: center;
  z-index: 2;
  font-family: 'AW';
}
.headBoxTxt {
  position: absolute;
  bottom: 0;
  height: 15px;
  width: 100%;
  background: -webkit-linear-gradient(rgba(0, 0, 0, 0), black);
  background: -moz-linear-gradient(rgba(0, 0, 0, 0), black);
  background: -o-linear-gradient(rgba(0, 0, 0, 0), black);
  background: linear-gradient(rgba(0, 0, 0, 0), black);
  z-index: 2;
}
.hBoxD {
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
.DGR {
  position: absolute;
  right: 0;
  top: 0;
  width: 240px;
}
.DGL {
  position: absolute;
  left: 0;
  top: 0;
  width: 240px;
}
#canvas {
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0.8;
  z-index: 0;
}
</style>
