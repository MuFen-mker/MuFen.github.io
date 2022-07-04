# vue中 关于$emit的用法

##### By : [榴莲不好吃](https://blog.csdn.net/l284969634)

##### [原文链接](https://blog.csdn.net/sllailcp/article/details/78595077?ops_request_misc=%7B%22request%5Fid%22%3A%22165603777616782248551233%22%2C%22scm%22%3A%2220140713.130102334.pc%5Fall.%22%7D&request_id=165603777616782248551233&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~hot_rank-1-78595077-null-null.142^v21^control,157^v15^new_3&utm_term=Vue&spm=1018.2226.3001.4449)



## vue2.x

1、父组件可以使用 props 把数据传给子组件。
2、子组件可以使用 $emit,让父组件[监听](https://so.csdn.net/so/search?q=监听&spm=1001.2101.3001.7020)到自定义事件 。

vm.$emit( event, arg ) //触发当前实例上的事件

vm.$on( event, fn );//监听event事件后运行 fn； 

#### 例如

#### 子组件：

```javascript
<template>
  <div class="train-city">
    <h3>父组件传给子组件的toCity:{{sendData}}</h3> 
    <br/><button @click='select(`大连`)'>点击此处将‘大连’发射给父组件</button>
  </div>
</template>
<script>
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
</script>
```



#### 父组件：

```javascript
<template>
    <div>
        <div>父组件的toCity{{toCity}}</div>
        <train-city @showCityName="updateCity" :sendData="toCity"></train-city>
    </div>
<template>
<script>
  import TrainCity from "./train-city";
  export default {
    name:'index',
    components: {TrainCity},
    data () {
      return {
        toCity:"北京"
      }
    },
    methods:{
      updateCity(data){//触发子组件城市选择-选择城市的事件
        this.toCity = data.cityname;//改变了父组件的值
        console.log('toCity:'+this.toCity)
      }
    }
  }
</script>
```





## vue3.x

#### 子组件

```javascript
<template>
  <div class="train-city">
    <h3>父组件传给子组件的toCity:{{sendData}}</h3> 
    <br/><button @click='select(`大连`)'>点击此处将‘大连’发射给父组件</button>
  </div>
</template>
 
<script>
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
      select: () => { emit('showCityName') }
    }
  },
}
</script>
```



#### 父组件

```javascript
<template>
    <div>
        <div>父组件的toCity{{toCity}}</div>
        <train-city @showCityName="updateCity" :sendData="toCity"></train-city>
    </div>
<template>
<script>
import TrainCity from "./train-city";
import { reactive, toRefs} from '@vue';
export default {
  name: "parent-com",
  components: { TrainCity },
  setup() {
    const state = reactive({ toCity:"北京" })  
 
    const updateCity = (data) => {
         state.toCity = data.cityname;//改变了父组件的值
         console.log('toCity:' + state.toCity)
    }
 
    return {
      ...toRefs(state ),
      updateCity
    }
  },
}
</script>
```

