---
title: vuepress
date: 2020-04-20
tags:
 - vuepress
categories: 
 - 技术
---
#### 安装初始化

首先检查node和npm是否安装

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gdzzvlzba6j30d004e0t0.jpg" alt="image-20200420095259490" style="zoom:50%;" />

安装初始化

全局安装：

```
npm i -g vuepress
```



创建一个文件夹 作为目录

```
mkdir vuepress-blog
#该目录为整本书的项目目录
```



项目初始化

```
#进入项目目录
cd vuepress-blog
#初始化 自动生成package.json文件
npm init -y
```

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ge0012k772j30mm0d4abb.jpg" alt="image-20200420095817192" style="zoom:50%;" />

在当前目录中创建一个docs目录

```
#存放博客内容
mkdir docs
```

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ge003keervj30li03sq3k.jpg" alt="image-20200420100041395" style="zoom:50%;" />



在docs文件夹中新建一个README.md

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ge009846w4j314q0n2gp9.jpg" alt="image-20200420100606856" style="zoom:50%;" />

```
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```



#### 核心配置

1.进入docs文件夹，新建 .vuepress文件夹

```
cd docs
mkdir .vuepress
```



<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ge00byly0cj30yk0bedkl.jpg" alt="image-20200420100845117" style="zoom:50%;" />

2.在.vuepress中新建一个config.js

配置如下

```
module.exports = {
  title: '这是标题',
  description: '君哥带你上王者',
  //./代表当前目录，运行时候vuepress-blog是根目录，所以在vuepress-bog目录下新建dist
  dest: './dist',
  port: '7777',
  head: [
    ['link', {rel: 'icon', href: '/logo.jpg'}]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [{
      text: '导航栏1', link: '/guide/',
      text: '导航栏2', link: '/guide/'
    }],
    sidebar: {'/guide/':[
        {
          title:'新手指南',
          collapsable: true,
          children:[
            '/guide/notes/one',
          ]
        },
        {
          title:'知码学院',
          collapsable: true,
          children:[
            '/guide/notes/two',
          ]
        }
      ]
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  }
}
```



注意：./ ../和/分别代表当前目录 上一级目录和根目录

3.运行

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ge00rfdpz4j30n4028q37.jpg" alt="image-20200420102337556" style="zoom:67%;" />

```
vuepress dev docs
//假如提示没有权限，就在前面加上sudo
```



#### 导航栏配置
留一个坑先
