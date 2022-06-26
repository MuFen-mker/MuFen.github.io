<template>
  <div v-show="disPlayHomePage" class="homePage">
    <Index-Header></Index-Header>
    <Index-NavigationBar></Index-NavigationBar>
    <Index-Calendar></Index-Calendar>
    <Index-Bottom></Index-Bottom>
  </div>
</template>

<script>
import IndexHeader from '@/components/Index-Header.vue'
import IndexNavigationBar from '@/components/Index-NavigationBar.vue'
import IndexCalendar from '@/components/Index-Calendar.vue'
import IndexBottom from '@/components/Index-Bottom.vue'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'IndexComponent',
  components: {
    IndexHeader,
    IndexNavigationBar,
    IndexCalendar,
    IndexBottom,
  },
  setup() {
    // 声明路由
    const $router = useRouter()
    let disPlayHomePage = ref(false)

    // 监听路由
    watch(
      () => $router.currentRoute.value.path,
      (newValue) => {
        if (newValue == '/loading...') {
          disPlayHomePage.value = false
        } else if (newValue == '/home') {
          disPlayHomePage.value = true
        }
      },
      { immediate: true }
    )
    return{
      disPlayHomePage
    }
  },
}
</script>

<style scoped>
/* .homePage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
} */
</style>
