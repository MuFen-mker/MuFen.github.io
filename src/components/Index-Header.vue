<template>
  <div class="header">
    <div class="avatarAndTitle">
      <img src="@/assets/Avatar.jpg" />
      <h1>
        <span>{{ master }}</span
        >{{ title }}
      </h1>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
export default {
  name: 'Index-Header',
  setup() {
    let pageText = reactive({
      master: 'MuFen',
      title: ' の 小栈',
    })
    return {
      ...toRefs(pageText),
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 24px;
}
.header {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
span {
  border-bottom: 3px solid orange;
  border-radius: 0 0 5px 5px;
}
.avatarAndTitle {
  margin-top: 3%;
  text-align: center;
}
.avatarAndTitle img {
  width: 96px;
  border-radius: 90%;
}
.avatarAndTitle h1 {
  margin-top: 0.5%;
}
@media screen and (max-width: 746px) {
  .avatarAndTitle img {
    width: 85px;
  }
  h1 {
    font-size: 24px;
  }
}
@media screen and (max-width: 610px) {
  .avatarAndTitle img {
    width: 66px;
  }
  h1 {
    font-size: 20px;
  }
}
@media screen and (max-width: 610px) {
  .avatarAndTitle img {
    width: 58px;
  }
  h1 {
    font-size: 18px;
  }
}
</style>
