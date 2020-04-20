---
title: location.hash和history
date: 2020-04-20
tags:
 - 路由
categories: 
 - 技术
---

## hash模式

Window.loaction.hash('#home')

就可以跳转到http://101.21.12.12.index.html/#home



每一次改变#后的部分，都会在浏览器的访问历史中增加一个记录，使用"后退"按钮，就可以回到上一个位置。

不会刷新网页，不会重新请求，#代表位置 #后面的东西代表位置的标识符

## html5的history模式

栈结构：有一个栈顶，一个栈底，

入栈：每次新进入的元素都在栈顶

出栈：每次都是把栈顶的元素移除

所以是先进后出～

堆是先进先出～

history.pushState({},'','me')

history.pushState({},'','you')

history.back() 这样会回到me，等同于history.go(-1),如果是-2就倒退两个。

history.forward()等价于history.go(1)



history.replaceState({},'','world')

这个就回不到历史



vue中默认的是hash模式

可以改成history

![image-20200407143342181](https://tva1.sinaimg.cn/large/00831rSTgy1gdl6xoz1nuj31qk0smn49.jpg)



vue中默认的是history.pushState

假如想使用replace，就在router-link中加上replace属性

![image-20200407145148721](https://tva1.sinaimg.cn/large/00831rSTgy1gdl7gh6ul1j31j20f6425.jpg)

## 通过代码跳转

```javascript
this.$router.push("/about");
//记得把之前的记录清除掉，这样才能不能就到历史记录
this.$router.replace("/about");
```

同样的 replace不能回到历史记录