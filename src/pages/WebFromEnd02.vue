<template>
  <transition name="enterAnAnimation">
    <div style="overflow-x: auto" v-if="shows" class="webFromEndText">
      <div @click="backToTheUpperLevel()" class="Return">
        <double-left theme="outline" size="40" fill="#000000" /><span
          >返回</span
        >
      </div>
      <div class="webFromEndBody">
        <h1>vue2.x</h1>
        <p>1、父组件可以使用 props 把数据传给子组件</p>
        <p>2、子组件可以使用 $emit,让父组件监听到自定义事件 。</p>
        <p>vm.$emit( event, arg ) //触发当前实例上的事件</p>
        <p>vm.$on( event, fn );//监听event事件后运行 fn；</p>
        <h1>子组件：</h1>
        <pre>
          &lt;template&gt;
            &lt;div class="train-city"&gt;
             &lt;h3&gt;父组件传给子组件的toCity:\{\{ sendData \}\}&lt;/h3&gt; 
               &lt;br/&gt;&lt;button @click='select(`大连`)'&gt;点击此处将‘大连’发射给父组件&lt;/button&gt;
            &lt;/div&gt;
          &lt;/template&gt;
          &lt;script&gt;
              export default {
                name:'trainCity',
                props:['sendData'], // 用来接收父组件传给子组件的数据
                methods:{
                  select(val) {
                    let data = {
                      cityname: val
                    };
                    this.$emit('showCityName',data);//select事件触发后，自动触发showCityName事件
                  }
                }
              }
          &lt;/script&gt;
        </pre>
        <h1>父组件：</h1>
        <pre>
            &lt;template&gt;
              &lt;div&gt;
                &lt;div&gt;父组件的toCity{\{ toCity }\}&gt;/div&gt;
                &lt;train-city @showCityName="updateCity" :sendData="toCity"&gt;&lt;/train-city&gt;
              &lt;/div&gt;
            &lt;template&gt;
            &lt;script&gt;
              import TrainCity from './train-city'
              export default {
                name: 'index',
                components: { TrainCity },
                data() {
                  return {
                    toCity: '北京',
                  }
                },
                methods: {
                  updateCity(data) {
                    //触发子组件城市选择-选择城市的事件
                    this.toCity = data.cityname //改变了父组件的值
                    console.log('toCity:' + this.toCity)
                  },
                },
              }
            &lt;/script&gt;&lt;/template
          &gt;&lt;/template
        &gt;
        </pre>
        <br />
        <br />
        <h1>vue3.x</h1>
        <br />
        <h1>子组件</h1>
        <pre>
            &lt;template&gt;
              &lt;div class="train-city"&gt;
                &lt;h3&gt;父组件传给子组件的toCity:{\{ sendData }\}&lt;/h3&gt; 
                &lt;br/&gt;&lt;button @click='select(`大连`)'&gt;点击此处将‘大连’发射给父组件&lt;/button&gt;
              &lt;/div&gt;
            &lt;/template&gt;
 
            &lt;script&gt;
            export default {
              name: "train-city",
              props:{
                sendData:{
                  Type:String,
                  default:""
                }
              },
              emits: ["showCityName"],
              setup(props,{emit}) {
                return {
                  select: () =&lt; { emit('showCityName') }
                }
              },
            }
            &lt;/script&gt;
        </pre>
        <h1>父组件</h1>
        <pre>
          &lt;template&gt;
            &lt;div&gt;
                &lt;div&gt;父组件的toCity{/{ toCity }/}&lt;/div&gt;
                &lt;train-city @showCityName="updateCity" :sendData="toCity"&gt;&lt;/train-city&gt;
            &lt;/div&gt;
          &lt;template&gt;
          &lt;script&gt;
          import TrainCity from "./train-city";
          import { reactive, toRefs} from '@vue';
          export default {
          name: "parent-com",
          components: { TrainCity },
          setup() {
            const state = reactive({ toCity:"北京" })  

            const updateCity = (data) =&lt; {
                state.toCity = data.cityname;//改变了父组件的值
                console.log('toCity:' + state.toCity)
            }

            return {
              ...toRefs(state ),
              updateCity
            }
          },
          }
          &lt;/script&gt;
        </pre>
        <h1>作者:榴莲不好吃</h1>
        <a
          target="_blank"
          href="https://blog.csdn.net/sllailcp/article/details/78595077?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165603777616782248551233%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165603777616782248551233&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~hot_rank-1-78595077-null-null.142^v21^control,157^v15^new_3&utm_term=Vue&spm=1018.2226.3001.4449"
          ><link-one theme="outline" size="24" fill="#333" />vue中
          关于$emit的用法</a
        >
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { DoubleLeft, LinkOne } from '@icon-park/vue-next'
import { useRouter } from 'vue-router'
export default {
  name: 'webFromEndText',
  components: {
    DoubleLeft,
    LinkOne,
  },
  setup() {
    const $router = useRouter()

    let shows = ref(false)

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
      shows,
      backToTheUpperLevel,
    }
  },
}
</script>

<style scoped>
pre {
  background: rgb(233, 233, 233);
  padding: 1%;
  width: 50%;
  margin: 0.5%;
  color: black;
  font-family: 'AW';
  font-size: 12.8px;
}
code {
  background: rgb(233, 233, 233);
  padding: 1%;
  width: 50%;
  margin: 0.5%;
  color: black;
  font-family: 'AW';
  font-size: 12.8px;
}
.webFromEndText {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border: 3px solid black;
  background: white;
  z-index: 999;
  box-sizing: border-box;
}
.webFromEndBody {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% 0;
}
.webFromEndBody > p {
  font-size: 16px;
  display: inline-block;
}
.webFromEndBody > h1 {
  font-size: 24px;
  margin: 16px 0 0 3.2px;
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
  top: 160px;
  left: 32px;
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
</style>
