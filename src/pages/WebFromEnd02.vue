<template>
  <transition name="enterAnAnimation">
    <div style="overflow-x: auto" v-if="shows" class="webFromEndText">
      <div @click="backToTheUpperLevel()" class="Return">
        <div class="returnBottom">
          <double-left theme="outline" size="100%" fill="#000000" />
        </div>
        <span>返回</span>
      </div>
      <div class="webFromEndBody">
        <h1>vue2.x</h1>
        <p>1、父组件可以使用 props 把数据传给子组件。</p>
        <p>2、子组件可以使用 $emit,让父组件监听到自定义事件 。</p>
        <br />
        <p>vm.$emit( event, arg ) //触发当前实例上的事件</p>
        <br />
        <p>vm.$on( event, fn );//监听event事件后运行 fn；</p>
        <br />
        <p>例如：子组件：</p>
        <prism-editor
          class="code"
          v-model="code1"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <h1>父组件：</h1>
        <prism-editor
          class="code"
          v-model="code2"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <h1>vue3.x</h1>
        <p>子组件</p>
        <prism-editor
          class="code"
          v-model="code3"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <p>父组件</p>
        <prism-editor
          class="code"
          v-model="code4"
          :highlight="highlighter"
          language="js"
        >
        </prism-editor>
        <h1>作者:榴莲不好吃</h1>
        <a
          target="_blank"
          href="https://blog.csdn.net/sllailcp/article/details/78595077?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165603777616782248551233%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165603777616782248551233&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~hot_rank-1-78595077-null-null.142^v21^control,157^v15^new_3&utm_term=Vue&spm=1018.2226.3001.4449"
        >
          <div class="linkIcon">
            <link-one theme="outline" size="100%" fill="#333" />
          </div>
          vue中 关于$emit的用法</a
        >
      </div>
    </div>
  </transition>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles
import { reactive, ref, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { DoubleLeft, LinkOne } from '@icon-park/vue-next'
import { useRouter } from 'vue-router'
export default {
  name: 'webFromEndText',
  components: {
    DoubleLeft,
    LinkOne,
    PrismEditor,
  },
  setup() {
    const $router = useRouter()

    let shows = ref(false)

    let CodeData = reactive({
      code1:
        "<template>\n  <div class=\"train-city\">\n    <h3>父组件传给子组件的toCity:{{sendData}}</h3>\n    <br/><button @click='select(`大连`)'>点击此处将‘大连’发射给父组件</button>\n  </div>\n</template>\n<script>\n  export default {\n    name:'trainCity',\n    props:['sendData'], // 用来接收父组件传给子组件的数据\n    methods:{\n      select(val) {\n        let data = {\n          cityname: val\n        };\n        this.$emit('showCityName',data);//select事件触发后，自动触发showCityName事件\n      }\n    }\n  }\n<\/script>",
      code2:
        '<template>\n    <div>\n        <div>父组件的toCity{{toCity}}</div>\n        <train-city @showCityName="updateCity" :sendData="toCity"></train-city>\n    </div>\n<template>\n<script>\n  import TrainCity from "./train-city";\n  export default {\n    name:\'index\',\n    components: {TrainCity},\n    data () {\n      return {\n        toCity:"北京"\n      }\n    },\n    methods:{\n      updateCity(data){//触发子组件城市选择-选择城市的事件\n        this.toCity = data.cityname;//改变了父组件的值\n        console.log(\'toCity:\'+this.toCity)\n      }\n    }\n  }\n<\/script>',
      code3:
        '<template>\n  <div class="train-city">\n    <h3>父组件传给子组件的toCity:{{sendData}}</h3> \n    <br/><button @click=\'select(`大连`)\'>点击此处将‘大连’发射给父组件</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: "train-city",\n  props:{\n    sendData:{\n      Type:String,\n      default:""\n    }\n  },\n  emits: ["showCityName"],\n  setup(props,{emit}) {\n    return {\n      select: () => { emit(\'showCityName\') }\n    }\n  },\n}\n<\/script>',
      code4:
        '<template>\n    <div>\n        <div>父组件的toCity{{toCity}}</div>\n        <train-city @showCityName="updateCity" :sendData="toCity"></train-city>\n    </div>\n<template>\n<script>\nimport TrainCity from "./train-city";\nimport { reactive, toRefs} from \'@vue\';\nexport default {\n  name: "parent-com",\n  components: { TrainCity },\n  setup() {\n    const state = reactive({ toCity:"北京" })\n\n    const updateCity = (data) => {\n         state.toCity = data.cityname;//改变了父组件的值\n         console.log(\'toCity:\' + state.toCity)\n    }\n\n    return {\n      ...toRefs(state ),\n      updateCity\n    }\n  },\n}\n<\/script>',
    })
    let inCodeData = reactive({})

    const backToTheUpperLevel = function () {
      shows.value = false
      setTimeout(() => {
        $router.push({ name: 'WebFromEnd' })
      }, 1000)
    }
    onMounted(() => {
      shows.value = true
    })
    return {
      ...toRefs(CodeData),
      ...toRefs(inCodeData),
      shows,
      backToTheUpperLevel,
    }
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js)
    },
  },
}
</script>

<style scoped>
.linkIcon {
  height: 24px;
  display: inline-block;
}
.returnBottom > .i-icon {
  height: 48px;
}
.inCode {
  background: #f0f0f0;
  color: rgb(0, 0, 0);
  font-family: 'JetBrains';
  font-size: 16px;
  width: auto;
  padding: 5px;
  display: inline-block;
}
.code {
  background: #f0f0f0;
  color: rgb(0, 0, 0);
  font-family: 'JetBrains';
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

.webFromEndText {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border: 3px solid black;
  background: white;
  z-index: 999999999999;
  box-sizing: border-box;
}
.webFromEndBody {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% auto;
  width: 70%;
}
.webFromEndBody > p {
  font-size: 16px;
  display: flex;
  align-items: center;
}
.webFromEndBody > h1 {
  font-size: 24px;
  margin: 16px 0;
}
.webFromEndBody > a {
  font-size: 24px;
  text-decoration: none;
  margin-top: 1%;
  color: black;
}
.webFromEndBody > a:hover {
  color: rgb(57, 192, 255);
}
.Return {
  position: fixed;
  display: flex;
  align-items: center;
  top: 30px;
  left: 20px;
  font-size: 24px;
  padding: 16px 32px 16px 16px;
}
.Return span {
  display: flex;
  align-items: center;
}
.Return:hover {
  background: rgb(240, 240, 240);
}
.enterAnAnimation-enter-active {
  animation: enterAnAnimation 0.8s;
}
.enterAnAnimation-leave-active {
  animation: enterAnAnimation 0.8s reverse;
}
@keyframes enterAnAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@media screen and (max-width: 1200px) {
  .webFromEndBody {
    margin: 100px auto;
    width: 98%;
    align-items: flex-start;
  }
  .Return {
    top: 5px;
    left: 5px;
    background: gainsboro;
    border-radius: 5px;
    z-index: 999999;
  }
}
@media screen and (max-width: 840px) {
  .webFromEndBody > h1 {
    font-size: 18px;
  }
  .webFromEndBody > p {
    font-size: 12px;
  }
  .inCode {
    font-size: 12px;
  }
  .code {
    font-size: 12px;
  }
  .Return[data-v-2bbe7d42] {
    font-size: 20px;
    padding: 10px 24px 10px 18px;
  }
  .webFromEndBody > a {
    font-size: 18px;
  }
  .linkIcon {
    height: 18px;
  }
  .returnBottom > .i-icon {
    height: 30px;
  }
}
@media screen and (max-width: 700px) {
  .webFromEndBody > h1 {
    font-size: 14px;
  }
  .webFromEndBody > p {
    transform: scale(90%);
  }
  .Return[data-v-2bbe7d42] {
    font-size: 16px;
    padding: 10px 24px 10px 18px;
  }
  .webFromEndBody > a {
    font-size: 14px;
  }
  .linkIcon {
    height: 14px;
  }
  .returnBottom > .i-icon {
    height: 24px;
  }
  .code {
    transform: scale(90%);
    width: 112%;
    margin: 0 0 0 -6%;
  }
}
@media screen and (max-width: 585px) {
  .webFromEndBody > h1 {
    font-size: 12px;
  }
  .webFromEndBody > p {
    transform: scale(80%);
    margin: 0 0 0 -7%;
  }
  .Return[data-v-2bbe7d42] {
    font-size: 12px;
    padding: 10px 24px 10px 18px;
  }
  .webFromEndBody > a {
    font-size: 12px;
  }
  .linkIcon {
    height: 12px;
  }
  .returnBottom > .i-icon {
    height: 16px;
  }
  .code {
    transform: scale(80%);
    width: 126%;
    margin: 0 0 0 -13%;
  }
}
@media screen and (max-width: 500px) {
  .webFromEndBody > h1 {
    font-size: 12px;
  }
  .webFromEndBody > p {
    transform: scale(70%);
    margin: 0 0 0 -22%;
    width: 143%;
  }
  .Return[data-v-2bbe7d42] {
    font-size: 12px;
    padding: 10px 24px 10px 18px;
  }
  .webFromEndBody > a {
    font-size: 12px;
  }
  .linkIcon {
    height: 12px;
  }
  .returnBottom > .i-icon {
    height: 12px;
  }
  .code {
    transform: scale(70%);
    width: 142%;
    margin: 0 0 0 -21%;
  }
}
@media screen and (max-width: 450px) {
  .webFromEndBody > h1 {
    font-size: 12px;
  }
  .webFromEndBody > p {
    transform: scale(60%);
    margin: 0 0 0 -28%;
    width: 143%;
  }
  .Return[data-v-2bbe7d42] {
    font-size: 12px;
    padding: 10px 24px 10px 18px;
  }
  .webFromEndBody > a {
    font-size: 12px;
  }
  .linkIcon {
    height: 12px;
  }
  .returnBottom > .i-icon {
    height: 12px;
  }
  .code {
    transform: scale(60%);
    width: 166%;
    margin: 0 0 0 -33%;
  }
}
</style>
