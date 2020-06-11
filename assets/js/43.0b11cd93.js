(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{498:function(t,a,_){"use strict";_.r(a);var s=_(2),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"_1-进程与线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-进程与线程"}},[t._v("#")]),t._v(" 1.进程与线程")]),t._v(" "),_("h3",{attrs:{id:"_1-1-概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-概念"}},[t._v("#")]),t._v(" 1.1 概念")]),t._v(" "),_("p",[t._v("js是单线程执行的，指的是一个进程只有一个主线程"),_("br"),t._v("\n进程是cpu资源分配最小的单位，线程是cpu调度的最小单位"),_("br"),t._v("\n一个进程由一个或者多个线程组成，线程是一个进程中代码的不同执行路线"),_("br"),t._v("\n一个进程的内存空间是共享的，每个线程都可以用这些共享的内存")]),t._v(" "),_("h3",{attrs:{id:"_1-2-多进程与多线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-多进程与多线程"}},[t._v("#")]),t._v(" 1.2 多进程与多线程")]),t._v(" "),_("ul",[_("li",[t._v("多进程：在同一个时间里，同一个计算机系统中如果允许两个或两个以上的进程处于运行状态"),_("br"),t._v("\n比如听歌的同时，打开编辑器敲代码。")]),t._v(" "),_("li",[t._v("多线程：程序中包含多个执行流，即一个程序中可以同时运行多个线程来执行不同的任务。")]),t._v(" "),_("li",[t._v("以 Chrome 浏览器中为例，当你打开一个 Tab 页时，其实就是创建了一个进程，一个进程中可以有多个线程（下文会详细介绍），比如渲染线程、JS 引擎线程、HTTP 请求线程等等。当你发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁。")])]),t._v(" "),_("h2",{attrs:{id:"_2-浏览器内核"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-浏览器内核"}},[t._v("#")]),t._v(" 2.浏览器内核")]),t._v(" "),_("p",[t._v("浏览器内核：通过取得页面内容，整理信息，计算和组合，最终输出可视化的图像结果，通常也被称为渲染引擎。")]),t._v(" "),_("p",[t._v("浏览器内核是多线程，在内核控制下各线程互相配合以保持同步，一个浏览器通常由以下常驻线程组成：")]),t._v(" "),_("ul",[_("li",[t._v("GUI渲染线程")]),t._v(" "),_("li",[t._v("Javascript引擎线程")]),t._v(" "),_("li",[t._v("定时触发器线程")]),t._v(" "),_("li",[t._v("事件触发线程")]),t._v(" "),_("li",[t._v("异步http请求线程")])]),t._v(" "),_("h3",{attrs:{id:"_2-1-gui渲染线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-gui渲染线程"}},[t._v("#")]),t._v(" 2.1 GUI渲染线程")]),t._v(" "),_("ul",[_("li",[t._v("主要负责页面的渲染，解析html，css，构建dom树，布局和绘制等")]),t._v(" "),_("li",[t._v("当界面需要重绘或者由于某种操作引发回流时，将执行该线程")]),t._v(" "),_("li",[t._v("该线程与js引擎线程互斥，当执行js引擎线程时，GUI渲染会被挂起，当任务队列空闲时，js引擎才会去执行GUI渲染")])]),t._v(" "),_("h3",{attrs:{id:"_2-2-js引擎线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-js引擎线程"}},[t._v("#")]),t._v(" 2.2 js引擎线程")]),t._v(" "),_("ul",[_("li",[t._v("该线程主要负责处理js脚本，执行代码")]),t._v(" "),_("li",[t._v("也主要负责执行准备好待执行的事件，即定时器技术结束，或者异步请求成功并且正确返回时，将一次进入任务队列，等待js引擎线程的执行。")]),t._v(" "),_("li",[t._v("当然，该线程与GUI渲染线程互斥，当js引擎线程执行js脚本时间过长时，将导致页面渲染的阻塞。")])]),t._v(" "),_("h3",{attrs:{id:"_2-3-定时器触发线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-定时器触发线程"}},[t._v("#")]),t._v(" 2.3 定时器触发线程")]),t._v(" "),_("ul",[_("li",[t._v("负责执行异步定时器一类的函数的线程")]),t._v(" "),_("li",[t._v("主线程依次执行代码时，遇到定时器，会将定时器交给该线程处理，当计数完毕后，事件触发")])]),t._v(" "),_("h3",{attrs:{id:"_2-4-事件触发线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-事件触发线程"}},[t._v("#")]),t._v(" 2.4 事件触发线程")]),t._v(" "),_("ul",[_("li",[t._v("主要负责将准备好的事件交给js引擎线程执行\n比如setTimeOut定时器计数结束，ajax等异步请求成功并触发回调函数，或者用户触发点击事件时，该线程会将整装待发的事件依次加入到任务队列的队尾，等待js引擎线程的执行")])]),t._v(" "),_("h3",{attrs:{id:"_2-5-异步http请求线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-异步http请求线程"}},[t._v("#")]),t._v(" 2.5 异步http请求线程")]),t._v(" "),_("ul",[_("li",[t._v("负责执行异步请求一类的函数的线程，如：promise，axios，ajax等")]),t._v(" "),_("li",[t._v("主线程依次执行代码时，遇到异步请求，会将函数交给该线程处理，当监听到状态码变更，如果有回调函数，事件触发线程会将回调函数加入到任务队列的尾部，等待js引擎线程执行。")])]),t._v(" "),_("h2",{attrs:{id:"_3-浏览器中的event-loop"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-浏览器中的event-loop"}},[t._v("#")]),t._v(" 3.浏览器中的Event Loop")]),t._v(" "),_("h3",{attrs:{id:"_3-1-macro-task和micro-task"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-macro-task和micro-task"}},[t._v("#")]),t._v(" 3.1 Macro-Task和Micro-Task")]),t._v(" "),_("p",[t._v("事件循环中的异步队列有两种：macro(宏任务)队列和micro(微任务)队列，宏任务队列可以有多个，微任务队列只有一个。")]),t._v(" "),_("ul",[_("li",[t._v("常见的macro-task 比如：setTimeout,setInterval,setImmediate,script(整体代码),I/O操作，UI渲染等。")]),t._v(" "),_("li",[t._v("常见的micro-task 比如：process.nextTick,new Promise().then(回调),MutationObserver(html5新特性)等。")])]),t._v(" "),_("h3",{attrs:{id:"_3-2-event-loop过程解析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-event-loop过程解析"}},[t._v("#")]),t._v(" 3.2 Event Loop过程解析")]),t._v(" "),_("p",[t._v("一个完整的Event Loop过程，可以概括为以下阶段")])])}),[],!1,null,null,null);a.default=v.exports}}]);