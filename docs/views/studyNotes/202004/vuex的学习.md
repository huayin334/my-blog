---
title: vuex学习
date: 2020-04-20
tags:
 - vuex
categories: 
 - 技术
---
### vuex是什么？

```
1.专为vue.js应用程序开发的状态管理模式
简单的可以理解成需要多个组件共享的变量全部储存到一个对象里，而且可以做到响应式
```

### 下载vuex

```
npm i vuex -S
//运行依赖（开发完了之后，还有用）
```

### 引入

```
如同router ，我们也创建一个文件夹store（仓库）用来引入vuex
在store中建一个文件index.js

import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    num: 1000
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {}
})

// 3.导出store共享
export default store
```



```
公共的需要使用的变量，可以写到state里面去

其他地方组件这样使用：
$store.state.变量名
```



