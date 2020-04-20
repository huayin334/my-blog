---
title: vue项目上线
date: 2020-04-20
tags:
 - vue
categories: 
 - 技术
---
---
typora-copy-images-to: upload
---

## [详细过程]vue+element-ui+node.js+mysql项目部署到服务器

### 1.先来看一下有哪些文件需要上传至服务器

<img src="https://gitee.com/huayin334/special_purpose_of_drawing_bed/raw/master/images/image-20200404075511662.png" alt="image-20200404075511662" style="zoom:50%;" />

上面是node后端，下面是前端源代码

### 1.1后端代码全部上传

上传至哪个文件夹都可以，这里建议把node_modules文件夹直接删除，里面放着相关依赖包，在后面会再次安装，假如安装出现问题，最好是删除重新安。。因为我之前明明安装了，一直报错。。

### 1.2前端代码只上传dist文件夹

<img src="https://tva1.sinaimg.cn/large/00831rSTgy1gdhotz0ickj30sm14agsh.jpg" alt="image-20200404135041860" style="zoom:33%;" />

前端开发完了之后，使用npm run build命令生成的dist文件夹

上传之前记得改一下index.html,自动生成的html代码里面的路径是错误的，改成以下形式或者其他可以读取到资源的形式，如果之前改过配置文件，这里生成的代码可能是对的。

![image-20200404135125674](https://tva1.sinaimg.cn/large/00831rSTgy1gdhoupnhxzj31840aygsl.jpg)



还有一个地方需要改

![image-20200404135151038](https://tva1.sinaimg.cn/large/00831rSTgy1gdhov5oyc1j317y0c64ch.jpg)

在js文件里面，有一个js划到里面最后，包含我们之前写的 baseUrl 和图片的url，记住这个位置，需要把127.0.0.1改成你的服务器公网ip，8888需要改成你的接口所用的端口，我这里接口用的8808端口。

两个8888都要改！



然后上传～，打开宝塔

![image-20200404135206279](https://tva1.sinaimg.cn/large/00831rSTgy1gdhovf6jtjj317s0iejvs.jpg)

找到tomcat->webapps

上传到这个位置

<img src="https://tva1.sinaimg.cn/large/00831rSTgy1gdhovnslhaj30v00rygms.jpg" alt="image-20200404135220055" style="zoom:33%;" />

我的node后端代码也传到这里了，其实也可以传到别的地方

 dist文件一定要传到这里

### 1.3除此之外，还需要上传mydb.sql<img src="/Users/a/Library/Application Support/typora-user-images/image-20200404075727092.png" alt="image-20200404075727092" style="zoom:50%;" />

没错！傻瓜式操作哈哈哈哈，上传到这里，添加到数据库就行了

![image-20200404135236729](https://tva1.sinaimg.cn/large/00831rSTgy1gdhovxsc12j317s0as0v1.jpg)

记得在软件商店里看看，你有没有安装这些工具

![image-20200404135252274](https://tva1.sinaimg.cn/large/00831rSTgy1gdhow7mey3j318a0igq94.jpg)

没有的话，在上面搜索，然后安装



## 2.连接数据库

### 2.1登录服务器的终端

后端node代码和数据库都传上去了，但是还没有建立连接

你可以通过宝塔或者是自己电脑的终端进入，我直接用电脑，因为宝塔好卡～

```
 ssh root@你的服务器公网ip
```

然后输入密码

这样就进来啦～

![image-20200404135323403](https://tva1.sinaimg.cn/large/00831rSTgy1gdhowrqikdj318q0baae3.jpg)

ls查看当前目录有哪些文件

cd .. 返回上一级

cd 文件名 去往哪个文件夹（按tab键可以快速补全

通过上面几个命令进入到vue_api_server文件中去

![image-20200404135339212](https://tva1.sinaimg.cn/large/00831rSTgy1gdhox1ubctj317s08mwix.jpg)



### 2.2更改node相关配置

因为我之前已经开启过node服务，并且使用的8808端口（8888端口被宝塔占用了），我这里lsof -i tcp:8808是查看8808端口有什么进程，这里可以看到是node进程，找到PID这一项，我这里是6815，然后kill 6815，这样你就可以把这个进程杀掉～，然后下次启动node服务就不会报错！

![image-20200404135350761](https://tva1.sinaimg.cn/large/00831rSTgy1gdhox83ur2j316e08iwiw.jpg)

在此之前，你需要更改vue_api_server里面一些关于数据库的配置

![image-20200404135402748](https://tva1.sinaimg.cn/large/00831rSTgy1gdhoxftymjj31820i8106.jpg)

默认的8888不能用了，随便改成什么端口，只要这个端口没被占用

我这里改的是8808，改完之后，把启动文件app.js里的监听端口也改成相应的

上图中的3306是默认的mysql数据库端口，下图的8808是指接口暴露的端口（记住这个8808）

![image-20200404135415361](https://tva1.sinaimg.cn/large/00831rSTgy1gdhoxo69u2j31820icq8z.jpg)

### 2.3开放相关端口

![image-20200404135429461](https://tva1.sinaimg.cn/large/00831rSTgy1gdhoxwzcdaj317y08utas.jpg)



在这里开放之后，我使用的是阿里云，所以在阿里云那里也开放了

![image-20200404135454557](https://tva1.sinaimg.cn/large/00831rSTgy1gdhoyc0tb7j317y0m4n14.jpg)



```
3306:mysql默认端口
2020:我自己开放的访问我的页面的端口（这里后面会讲）
8808:api的端口
```

后面两个端口都可以随便设，只要是没被占用的，都可以～

### 2.4启动node服务

首先看看有没有npm

![image-20200404135505640](https://tva1.sinaimg.cn/large/00831rSTgy1gdhoyj6ikhj319a064acl.jpg)

然后npm install

让他自己安装相关依赖包

然后运行

``` 
node app.js
```

如果这里没报错，那么就是连接成功了，命令行不能关，

假如你想关了命令行node也可以在后台执行,就运行这个命令，可以让node在后台运行～我也是昨天才知道的嘻嘻，真好用～

```
nohup node app.js > log.log &
```

![image-20200404135518952](https://tva1.sinaimg.cn/large/00831rSTgy1gdhoyrfftej317y07aac4.jpg)

![image-20200404135530173](https://tva1.sinaimg.cn/large/00831rSTgy1gdhoyyky4ej318c0a8dko.jpg)







## 3.前端vue相关配置

### 3.1更改前端vue项目的请求地址baseUrl

![image-20200404135543797](https://tva1.sinaimg.cn/large/00831rSTgy1gdhoz746q7j31880dytc2.jpg)

假如你之前没有更改，那么编辑这个js，搜索8888，一共有两处（一个是接口根地址，一个是图片上传地址）

茫茫人海中找到你，这里改成公网ip和8808

![image-20200404135607506](https://tva1.sinaimg.cn/large/00831rSTgy1gdhoznqbbej31820gs7ka.jpg)

### 3.2配置nginx

![image-20200404135622882](https://tva1.sinaimg.cn/large/00831rSTgy1gdhozvaej2j317s0ligtp.jpg)

```
   server{
         listen 2020;//页面的端口
         server_name localhost 101.37.18.96;//公网ip
         location / {
            root   /www/server/tomcat/webapps/dist;   //项目地址
            try_files $uri $uri/ /index.html; //打开的页面
         }
```



保存之后记得重载配置哦～

<img src="https://tva1.sinaimg.cn/large/00831rSTgy1gdhp01lnlhj30oc0fw3zt.jpg" alt="image-20200404135633234" style="zoom:50%;" />

### 3.3看看成果吧～

打开页面（公网ip：端口号）

http://101.37.18.96:2020/index.html

当当当当～ 出现了

![image-20200404135651003](https://tva1.sinaimg.cn/large/00831rSTgy1gdhp0e4dahj31720nqjth.jpg)

接口返回正常

![image-20200404135704977](https://tva1.sinaimg.cn/large/00831rSTgy1gdhp0lg08dj318m0fmwhn.jpg)



图片也可以上传,没有报错

![image-20200404135717392](https://tva1.sinaimg.cn/large/00831rSTgy1gdhp0twd45j31a60l678m.jpg)

在这里分享一个小技巧，这里禁用缓存，防止你之前的资源是错误的

![image-20200404135741003](https://tva1.sinaimg.cn/large/00831rSTgy1gdhp17s9l5j311i0jw410.jpg)































