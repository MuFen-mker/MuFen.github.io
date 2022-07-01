# 【前端】Axios在vue3中的使用教程及注意事项

##### By : [Fannnnf](https://blog.csdn.net/qq_42475234)

##### [原文链接](https://blog.csdn.net/qq_42475234/article/details/124578128?spm=1001.2101.3001.6650.11&amp;utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~default-11-124578128-blog-123682618.pc_relevant_antiscanv4&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blo)



## 引入

首先运行命令```npm install --save axios vue-axios```安装axios和vue-axios

在vue3项目的main.js文件中插入以下代码引入axios，注意vue-axios和axios需要搭配使用

```javascript
import axios from 'axios'; import VueAxios from 'vue-axios'
axios.defaults.baseURL = 'https://www.xxxx.com/
'axios.defaults.baseURL = 'https://www.xxxx.com/';
app.use(VueAxios,axios);
```



## 使用

在vue3页面的```export default{```前插入```const axios = require('axios');```在页面中引入axios

#### Get请求



```javascript
axios({
    method:'get',
    url:'user/login',//这里由于之前设置了baseURL,所以直接跳过顶级域名
    params:{
      username:username,
      password:pwd,
      userlevel:"1",
    }
  })
  .then(function (response) {
    if (response.data.statuscode==3) {
      //密码正确
    }else{
      router.push('/force');//密码错误
    }
  })
  .catch(function (error) {
      console.log("catch"+error);
      Toast('登陆失败，请检查网络');
  });
})

```

