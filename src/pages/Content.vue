<template>
  <div>
    <ContentHeader></ContentHeader>
    <ContentNavigation></ContentNavigation>
    <router-view v-slot="{ Component }">
      <transition name="routingTransition" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Index-Bottom></Index-Bottom>
    <el-backtop style="z-index: 999">
      <div class="topButton">
        <to-top-one theme="two-tone" size="100%" :fill="['#333', '#f5a623']" />
      </div>
    </el-backtop>
  </div>
</template>

<script>
import { ToTopOne } from '@icon-park/vue-next'
import ContentHeader from '@/components/Content-Header.vue'
import ContentNavigation from '@/components/Content-Navigation.vue'
import IndexBottom from '@/components/Index-Bottom.vue'
export default {
  name: 'ContentComponent',
  components: {
    ContentHeader,
    ContentNavigation,
    IndexBottom,
    ToTopOne,
  },
}
</script>

<style scoped>
.topButton:hover {
  padding: 5px;
  border-radius: 180px;
  background: rgba(0, 0, 0, 0.2);
}
.el-backtop {
  --el-backtop-bg-color: #ffffff00;
  --el-backtop-text-color: #ffffff00;
  --el-backtop-hover-bg-color: #ffffff00;
  background-color: #ffffff00;
  box-shadow: none;
  right: 2% !important;
  bottom: 2% !important;
}
.routingTransition-enter-active {
  transition: all 0.5s ease-out;
}

.routingTransition-leave-active {
  transition: all 0.5s;
}
.routingTransition-enter-from,
.routingTransitione-leave-to {
  opacity: 0;
}

.routingTransition-enter-to,
.routingTransition-leave-from {
  opacity: 1;
}
@media screen and (max-width: 1480px) {
  .el-backtop {
    right: 2% !important;
    bottom: 5% !important;
  }
}
</style>
