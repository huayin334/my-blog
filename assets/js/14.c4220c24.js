(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{469:function(t,s,a){"use strict";a.r(s);var r=a(2),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"hash模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash模式"}},[t._v("#")]),t._v(" hash模式")]),t._v(" "),a("p",[t._v("Window.loaction.hash('#home')")]),t._v(" "),a("p",[t._v("就可以跳转到http://101.21.12.12.index.html/#home")]),t._v(" "),a("p",[t._v('每一次改变#后的部分，都会在浏览器的访问历史中增加一个记录，使用"后退"按钮，就可以回到上一个位置。')]),t._v(" "),a("p",[t._v("不会刷新网页，不会重新请求，#代表位置 #后面的东西代表位置的标识符")]),t._v(" "),a("h2",{attrs:{id:"html5的history模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html5的history模式"}},[t._v("#")]),t._v(" html5的history模式")]),t._v(" "),a("p",[t._v("栈结构：有一个栈顶，一个栈底，")]),t._v(" "),a("p",[t._v("入栈：每次新进入的元素都在栈顶")]),t._v(" "),a("p",[t._v("出栈：每次都是把栈顶的元素移除")]),t._v(" "),a("p",[t._v("所以是先进后出～")]),t._v(" "),a("p",[t._v("堆是先进先出～")]),t._v(" "),a("p",[t._v("history.pushState({},'','me')")]),t._v(" "),a("p",[t._v("history.pushState({},'','you')")]),t._v(" "),a("p",[t._v("history.back() 这样会回到me，等同于history.go(-1),如果是-2就倒退两个。")]),t._v(" "),a("p",[t._v("history.forward()等价于history.go(1)")]),t._v(" "),a("p",[t._v("history.replaceState({},'','world')")]),t._v(" "),a("p",[t._v("这个就回不到历史")]),t._v(" "),a("p",[t._v("vue中默认的是hash模式")]),t._v(" "),a("p",[t._v("可以改成history")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gdl6xoz1nuj31qk0smn49.jpg",alt:"image-20200407143342181"}})]),t._v(" "),a("p",[t._v("vue中默认的是history.pushState")]),t._v(" "),a("p",[t._v("假如想使用replace，就在router-link中加上replace属性")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gdl7gh6ul1j31j20f6425.jpg",alt:"image-20200407145148721"}})]),t._v(" "),a("h2",{attrs:{id:"通过代码跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过代码跳转"}},[t._v("#")]),t._v(" 通过代码跳转")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/about"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//记得把之前的记录清除掉，这样才能不能就到历史记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/about"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("同样的 replace不能回到历史记录")])])}),[],!1,null,null,null);s.default=n.exports}}]);