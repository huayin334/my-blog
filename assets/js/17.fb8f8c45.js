(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{472:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"跨域的解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域的解决方案"}},[a._v("#")]),a._v(" 跨域的解决方案")]),a._v(" "),s("h3",{attrs:{id:"什么是跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是跨域"}},[a._v("#")]),a._v(" 什么是跨域")]),a._v(" "),s("p",[a._v("什么是同源策略？"),s("br"),a._v("\n同源策略/SOP（Same origin policy）是一种约定，由Netscape公司1995年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击。"),s("br"),a._v('\n所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。'),s("br"),a._v("\n所以跨域就是指，协议，域名，端口有任意一个不同，那么就出现了跨域\n解决跨域的方法我们可以根据我们想要实现的目的来划分。"),s("br"),a._v("\n首先我们如果只是想要实现主域名下的不同子域名的跨域操作，我们可以使用设置 document.domain 来解决。")]),a._v(" "),s("h3",{attrs:{id:"document-domain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document-domain"}},[a._v("#")]),a._v(" document.domain")]),a._v(" "),s("p",[a._v("将 document.domain 设置为主域名，来实现相同子域名的跨域操作，这个时候主域名下的 cookie 就能够被子域名所访问。同时如果文档中含有主域名相同，子域名不同的 iframe 的话，我们也可以对这个 iframe 进行操作。")]),a._v(" "),s("p",[a._v("如果是想要解决不同跨域窗口间的通信问题，比如说一个页面想要和页面的中的不同源的 iframe 进行通信的问题，我们可以使用 location.hash 或者 window.name 或者 postMessage 来解决。")]),a._v(" "),s("h3",{attrs:{id:"location-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location-hash"}},[a._v("#")]),a._v(" location.hash")]),a._v(" "),s("p",[a._v("我们可以在主页面动态的修改 iframe 窗口的 hash 值，然后在 iframe 窗口里实现监听函数来实现这样一个单向的通信。因为在 iframe 是没有办法访问到不同源的父级窗口的，所以我们不能直接修改父级窗口的 hash 值来实现通信，我们可以在 iframe 中再加入一个 iframe ，这个 iframe 的内容是和父级页面同源的，所以我们可以 window.parent.parent 来修改最顶级页面的 src，以此来实现双向通信。")]),a._v(" "),s("h3",{attrs:{id:"window-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window-name"}},[a._v("#")]),a._v(" window.name")]),a._v(" "),s("p",[a._v("主要是基于同一个窗口中设置了 window.name 后不同源的页面也可以访问，所以不同源的子页面可以首先在 window.name 中写入数据，然后跳转到一个和父级同源的页面。这个时候级页面就可以访问同源的子页面中 window.name 中的数据了，这种方式的好处是可以传输的数据量大。")]),a._v(" "),s("h3",{attrs:{id:"postmessage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postmessage"}},[a._v("#")]),a._v(" postMessage")]),a._v(" "),s("p",[a._v("这是一个 h5 中新增的一个 api。通过它我们可以实现多窗口间的信息传递，通过获取到指定窗口的引用，然后调用 postMessage 来发送信息，在窗口中我们通过对 message 信息的监听来接收信息，以此来实现不同源间的信息交换。")]),a._v(" "),s("p",[a._v("如果是像解决 ajax 无法提交跨域请求的问题，我们可以使用 jsonp、cors、websocket 协议、服务器代理来解决问题。")]),a._v(" "),s("h3",{attrs:{id:"使用-jsonp-来实现跨域请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-jsonp-来实现跨域请求"}},[a._v("#")]),a._v(" 使用 jsonp 来实现跨域请求")]),a._v(" "),s("p",[a._v("它的主要原理是通过动态构建 script  标签来实现跨域请求，因为浏览器对 script 标签的引入没有跨域的访问限制 。通过在请求的 url 后指定一个回调函数，然后服务器在返回数据的时候，构建一个 json 数据的包装，这个包装就是回调函数，然后返回给前端，前端接收到数据后，因为请求的是脚本文件，所以会直接执行，这样我们先前定义好的回调函数就可以被调用，从而实现了跨域请求的处理。这种方式只能用于 get 请求。")]),a._v(" "),s("h3",{attrs:{id:"使用-cors-的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-cors-的方式"}},[a._v("#")]),a._v(" 使用 CORS 的方式")]),a._v(" "),s("p",[a._v('CORS 是一个 W3C 标准，全称是"跨域资源共享"。CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，因此我们只需要在服务器端配置就行。浏览器将 CORS 请求分成两类：简单请求和非简单请求。对于简单请求，浏览器直接发出 CORS 请求。具体来说，就是会在头信息之中，增加一个 Origin 字段。Origin 字段用来说明本次请求来自哪个源。服务器根据这个值，决定是否同意这次请求。对于如果 Origin 指定的源，不在许可范围内，服务器会返回一个正常的 HTTP 回应。浏览器发现，这个回应的头信息没有包含 Access-Control-Allow-Origin 字段，就知道出错了，从而抛出一个错误，ajax 不会收到响应信息。如果成功的话会包含一些以 Access-Control- 开头的字段。')]),a._v(" "),s("p",[a._v("非简单请求，浏览器会先发出一次预检请求，来判断该域名是否在服务器的白名单中，如果收到肯定回复后才会发起请求。")]),a._v(" "),s("h3",{attrs:{id:"使用-websocket-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-websocket-协议"}},[a._v("#")]),a._v(" 使用 websocket 协议")]),a._v(" "),s("p",[a._v("这个协议没有同源限制。")]),a._v(" "),s("h3",{attrs:{id:"使用服务器来代理跨域的访问请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用服务器来代理跨域的访问请求"}},[a._v("#")]),a._v(" 使用服务器来代理跨域的访问请求")]),a._v(" "),s("p",[a._v("就是有跨域的请求操作时发送请求给后端，让后端代为请求，然后最后将获取的结果发返回。")])])}),[],!1,null,null,null);t.default=r.exports}}]);