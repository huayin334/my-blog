---
title: margin合并或是塌陷
date: 2020-04-20
tags:
 - CSS
categories: 
 - 技术
---

#### 什么时候会发生margin合并或塌陷

```javascript
必要条件：
margin必须是邻接的
处于常规文档（不是float或者绝对定位），而且是在同一个BFC（块状格式化上下文）
没有padding和border相隔
都是处于垂直方向的外边距
```

