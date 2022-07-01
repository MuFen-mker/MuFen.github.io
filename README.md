## MuFenの小栈

##### 基于Vue3打造的个人网站

[访问'MuFenの小栈']: https://mu-fen-github-io.vercel.app/



### 运行

```
npm install
```

```
vue-cli-service serve
```



### 环境

```json
"vue": "^3.2.13"
"vue cli": "5.4.0"
```



### 引用

```json
	"amfe-flexible": "^2.2.1",
    "axios": "^0.27.2",
    "babel-plugin-import": "^1.13.5",
    "bootstrap-vue": "^2.22.0",
    "core-js": "^3.8.3",
    "element-plus": "^2.2.6",
    "font-awesome": "^4.7.0",
    "less-loader": "^11.0.0",
    "lib-flexible": "^0.3.2",
    "nanoid": "^4.0.0",
    "prismjs": "^1.28.0",
    "vue": "^3.2.13",
    "vue-prism-editor": "^2.0.0-alpha.2",
    "vue-router": "^4.0.16",
    "vuex": "^4.0.2"
```



### 结构

```
│  .gitignore
│  babel.config.js
│  jsconfig.json
│  package-lock.json
│  package.json
│  README.md
│  Readme.txt
│  vue.config.js
│  
├─public
│      favicon.ico
│      index.html
│      
└─src
    │  App.vue
    │  main.js
    │  
    ├─assets
    │  │  AE.png
    │  │  AIMP.png
    │  │  Avatar.jpg
    │  │  CalendarBackground.jpg
    │  │  ccleane.png
    │  │  CommonWebsiteHeadFigure.jpg
    │  │  CPU-Z.png
    │  │  DG.png
    │  │  DG2.png
    │  │  DLL.png
    │  │  DLR.png
    │  │  DryingTutorialHeadFigure.jpg
    │  │  everything.png
    │  │  huoron.png
    │  │  music-one.png
    │  │  music-one.svg
    │  │  OBS.png
    │  │  playerBackground.jpg
    │  │  PS.png
    │  │  SoftwareRecommendationHeadFigure.jpg
    │  │  tasker.png
    │  │  VSC.png
    │  │  WebFromEndHeadFigure.jpg
    │  │  
    │  └─font
    │          AW.woff
    │          FZCY.woff2
    │          sweel.woff
    │          
    ├─components
    │      Content-CommonWebsite.vue
    │      Content-DryingTutorial.vue
    │      Content-Header.vue
    │      Content-Navigation.vue
    │      Content-SoftwareRecommendation.vue
    │      Content-WebFromEnd.vue
    │      Index-Bottom.vue
    │      Index-Calendar.vue
    │      Index-Header.vue
    │      Index-Music.vue
    │      Index-NavigationBar.vue
    │      LoadIng.vue
    │      
    ├─hooks
    │      drawingBackground.js
    │      headerBackground.js
    │      stopUpDownFunList.js
    │      stopUpDownFunList2.js
    │      
    ├─pages
    │      About.vue
    │      Content.vue
    │      Home.vue
    │      WebFromEnd01.vue
    │      WebFromEnd02.vue
    │      WebFromEnd03.vue
    │      WebFromEnd04.vue
    │      WebFromEnd05.vue
    │      
    └─Router
            index.js
```

