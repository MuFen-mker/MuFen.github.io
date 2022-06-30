<template>
  <canvas></canvas>
  <Music-Player></Music-Player>
  <router-view v-slot="{ Component }">
    <transition name="routingTransition" mode="out-in">
      <keep-alive include="IndexComponent,ContentComponent">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
import BackgroundEngine from './hooks/drawingBackground.js'
import { onMounted } from '@vue/runtime-core'
import MusicPlayer from '@/components/Index-Music.vue'
export default {
  name: 'App',
  components: {
    MusicPlayer,
  },
  setup() {
    onMounted(() => {
      BackgroundEngine()
    })
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'FZCY';
  color: black;
}

canvas {
  z-index: -1;
  position: absolute;
}
@font-face {
  font-family: 'FZCY';
  src: url('@/assets/font/FZCY.woff2');
}

@font-face {
  font-family: 'AW';
  src: url('@/assets/font/AW.woff');
}

@font-face {
  font-family: 'Sweel';
  src: url('@/assets/font/sweel.woff');
}
.routingTransition-enter-active {
  transition: all 0.5s ease-out;
}

.routingTransition-leave-active {
  transition: all 0.5s;
}
.routingTransition-enter-from,
.routingTransition-leave-to {
  opacity: 0;
}

.routingTransition-enter-to,
.routingTransition-leave-from {
  opacity: 1;
}
</style>
