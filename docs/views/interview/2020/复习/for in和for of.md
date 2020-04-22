---
title: for in和for of
date: 2020-04-22 20:22
tags:
 - js
categories: 
 - 面试
---

#### for...in循环出的是key  
#### for...of循环出的是value
for of是es6新加的，而且不能用来循环遍历普通对象
______

所以循环对象建议使用for..in，循环数组建议使用for..of
```js
  var obj = {
    hhh:'1234',
    hisadh:9237103
  }
  for (let k in obj) {
    console.log(k);//key
    console.log(obj[k])//value
  }
```

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ge2ua1md5rj307i05oaa2.jpg" alt="image-20200422205554890" style="zoom:50%;" />

```js
 console.log(Object.keys(obj))
 //会将对象的key添加到数组中，并返回数组
```

```js
  let arr2 = [2,3243,345,342,67,54]
  for (let v of arr2) {
    console.log(v);//value
  }
  for (let i in arr2) {
      console.log(i);//索引
  }
```

