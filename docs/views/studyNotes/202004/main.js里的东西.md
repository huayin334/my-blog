---
title: vue中main.js
date: 2020-04-20
tags:
 - 心情
categories: 
 - 随笔
---

#### 有两种写法

```
new vue({
el:'#app',
render:h=>h(App)
})

new Vue({
render:h=>h(App)
}).$mount('#app')
```

这两种写法其实是一样的

先判断有没有el，然后再执行 $mount

