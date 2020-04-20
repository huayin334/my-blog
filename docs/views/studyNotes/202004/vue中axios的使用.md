---
title: vue中axios的使用
date: 2020-04-20
tags:
 - axios
categories: 
 - 技术
---
#### 下载axios

```
npm i axios -S
//运行依赖
```



#### 在main.js中引入

```
import axios from 'axios'
```



#### 最基本的使用

```
axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}).then(res => {
  console.log(res)
})
```

