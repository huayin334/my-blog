---
title: 一些可视化的库
date: 2020-04-26 11:44:00
tags:
 - 可视化
categories: 
 - 技术
---
### D3.js和Echarts的区别  
(1) 对于客户需求要求的图表拥有大量的用户交互场景，用d3比较方便，因为d3中svg画图支持事件处理器，他是基于dom进行操作的。想要实现某个操作，直接调用相关的方法实现效果就行，他那个里面存在链式语法，这个和jQuery的链式调用差不多，简单易读。

(2) 对于大量的数据展示并且对于用户交互场景没什么要求，就只是展示数据，那我建议使用echarts，如果使用d3的话展示的每一个数据都是一个标签，那么当数据发生改变的时候这时候图表会重新渲染，会不停的操作dom，操作dom是很耗费性能的。

(3) 从兼容性方面考虑：echarts兼容到IE6及以上的所有主流浏览器，而d3兼容IE9及以上以及所有的主流浏览器，如果项目考虑兼容IE6，建议使用echarts。

[D3文档](https://d3js.org.cn/document/)  
[Echarts文档](https://www.echartsjs.com/examples/zh/index.html)

### Three.js和其它webgl框架
#### 什么是WEBGL？
WebGL (Web图形库) 是一种JavaScript API，用于在任何兼容的Web浏览器中呈现交互式3D和2D图形，而无需使用插件。WebGL通过引入一个与OpenGL ES 2.0紧密相符合的API，可以在HTML5 元素中使用。（MDN简介）
在我的理解，WebGL给我们提供了一系列的图形接口，能够让我们通过js去使用GPU来进行浏览器图形渲染的工具。

#### 什么是Three.js
Three.js是一款webGL框架，由于其易用性被广泛应用。Three.js在WebGL的api接口基础上，又进行的一层封装。它是由居住在西班牙巴塞罗那的程序员Ricardo Cabbello Miguel开发的，此人更出名的网名叫做Mr.doob。Three.js以简单、直观的方式封装了3D图形编程中常用的对象。Three.js在开发中使用了很多图形引擎的高级技巧，极大地提高了性能。另外，由于内置了很多常用对象和极易上手的工具，Three.js的功能也非常强大。最后，Three.js还是完全开源的，你可以在GitHub上找到它的源代码，并且有很多人贡献代码，帮助Mr.doob一起维护这个框架。

#### WebGL和Three.js的关系，相当于JavaScript和Jquery的关系。
                 