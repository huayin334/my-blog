(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{477:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"事件流：从页面中接收事件的顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件流：从页面中接收事件的顺序"}},[t._v("#")]),t._v(" 事件流：从页面中接收事件的顺序")]),t._v(" "),s("h3",{attrs:{id:"三个阶段："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三个阶段："}},[t._v("#")]),t._v(" 三个阶段：")]),t._v(" "),s("ul",[s("li",[t._v("1.捕获阶段，从上到下，从大的元素到小的元素")]),t._v(" "),s("li",[t._v("2.当前目标阶段")]),t._v(" "),s("li",[t._v("3.冒泡阶段，从下到上，从小的元素到大的元素")])]),t._v(" "),s("h3",{attrs:{id:"注意："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意："}},[t._v("#")]),t._v(" 注意：")]),t._v(" "),s("ul",[s("li",[t._v("js代码只执行捕获或者冒泡其中的一个阶段")]),t._v(" "),s("li",[t._v("onclick和attachEvent(ie)，只能得到冒泡阶段")]),t._v(" "),s("li",[t._v("addEventListener的第三个参数默认为false，此时是冒泡阶段。假如写true，则是捕获阶段")]),t._v(" "),s("li",[t._v("在实际开发中很少使用捕获阶段，一般都是使用冒泡阶段（事件冒泡）")])]),t._v(" "),s("h3",{attrs:{id:"事件委托"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[t._v("#")]),t._v(" 事件委托")]),t._v(" "),s("p",[t._v("冒泡可以用来进行事件委托，只给ul绑定事件，点击li时，因为有冒泡，所以也可以执行，这样就只需要绑定一个事件，而且新加的元素也可以使用这个事件。")])])}),[],!1,null,null,null);a.default=r.exports}}]);