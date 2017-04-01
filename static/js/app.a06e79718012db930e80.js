webpackJsonp([1],{18:function(t,e,i){"use strict";var s=i(83),a=i.n(s),n=i(85),c=i.n(n),o=i(86),r=i.n(o),u=i(87),l=i.n(u),d=function(){function t(){r()(this,t),this._hasTouch="ontouchstart"in window,this.init(),this.touch={start:null,end:null},this.state={swiping:!1,global:!1},this.queue={swiping:[],swiped:[],"swipe-left":[],"swipe-right":[],"swipe-up":[],"swipe-down":[]}}return l()(t,[{key:"init",value:function(){this._hasTouch&&(window.document.body.addEventListener("touchstart",this.touchStart.bind(this),!1),window.document.body.addEventListener("touchmove",this.touchMove.bind(this),!1),window.document.body.addEventListener("touchend",this.touchEnd.bind(this),!1),window.document.body.addEventListener("touchcancel",this.touchCancel.bind(this),!1))}},{key:"setGlobal",value:function(){this.state.global=!0}},{key:"cancelGlobal",value:function(){this.state.global=!1}},{key:"listen",value:function(t,e,i){var s=void 0;if(e){var a=e.getBoundingClientRect();s={x:a.left,y:a.top,width:a.width,height:a.height}}else s=null;var n=9999*Math.random()+t;this.queue[t].push({$el:e,token:n,func:i,rect:s})}},{key:"leave",value:function(t,e){if(!this.queue[t])return!1;for(var i=0,s=this.queue[t].length;i<s;i++)if(this.queue[t].token===e)return this.queue[t].splice(i-1,1),!0;return!1}},{key:"update",value:function(){var t=c()(this.queue),e=void 0,i=!0,s=!1,n=void 0;try{for(var o,r=a()(t);!(i=(o=r.next()).done);i=!0){var u=o.value;this.queue[u].forEach(function(t){t.$el&&(e=t.$el.getBoundingClientRect(),t.rect={x:e.left,y:e.top,width:e.width,height:e.height})})}}catch(t){s=!0,n=t}finally{try{!i&&r.return&&r.return()}finally{if(s)throw n}}}},{key:"clear",value:function(){var t=c()(this.queue),e=!0,i=!1,s=void 0;try{for(var n,o=a()(t);!(e=(n=o.next()).done);e=!0){var r=n.value;this.queue[r].length=0}}catch(t){i=!0,s=t}finally{try{!e&&o.return&&o.return()}finally{if(i)throw s}}}},{key:"notice",value:function(t,e){for(var i={},s=!0,a=null,n=0,c=this.queue[t].length;n<c;n++)i=this.queue[t][n].rect,i?this.rectIn(e,i)&&!this.state.global&&(this.queue[t][n].func(this.touch.start,this.touch.end),s=!1):a=this.queue[t][n].func;s&&a&&a(this.touch.start,this.touch.end)}},{key:"rectIn",value:function(t,e){return t.x>e.x&&t.x+t.width<e.x+e.width&&t.y>e.y&&t.y+t.height<e.y+e.height}},{key:"getRect",value:function(t,e){var i={};return t.x<e.x?(i.x=t.x,i.width=e.x-t.x):(i.x=e.x,i.width=t.x-e.x),t.y<e.y?(i.y=t.y,i.height=e.y-t.y):(i.y=e.y,i.height=t.y-e.y),i}},{key:"getPosition",value:function(t){for(var e=t.touches.length,i=[],s=0;s<e;s++)i.push({x:t.touches[s].pageX,y:t.touches[s].pageY});return i}},{key:"getDistance",value:function(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}},{key:"getAngle",value:function(t,e){return 180*Math.atan2(e.y-t.y,e.x-t.x)/Math.PI}},{key:"touchStart",value:function(t){this.state.swiping=!0,this.touch.start=this.getPosition(t)[0]}},{key:"touchMove",value:function(t){this.touch.end=this.getPosition(t)[0],this.notice("swiping",this.getRect(this.touch.end,this.touch.start))}},{key:"touchEnd",value:function(t){this.notice("swiped",this.getRect(this.touch.end,this.touch.start)),this.state.swiping=!0;var e=this.getAngle(this.touch.end,this.touch.start);e>-45&&e<45&&this.notice("swipe-left",this.getRect(this.touch.end,this.touch.start)),(e<-135||e>135)&&this.notice("swipe-right",this.getRect(this.touch.end,this.touch.start)),e>45&&e<135&&this.notice("swipe-up",this.getRect(this.touch.end,this.touch.start)),e<-45&&e>-135&&this.notice("swipe-down",this.getRect(this.touch.end,this.touch.start))}},{key:"touchCancel",value:function(t){console.log(t)}}]),t}();e.a=d},29:function(t,e,i){i(47);var s=i(0)(i(88),i(40),null,null);t.exports=s.exports},30:function(t,e,i){"use strict";var s=i(17),a=i(50),n=i(34),c=i.n(n),o=i(33),r=i.n(o),u=i(36),l=i.n(u),d=i(35),h=i.n(d);i(18);s.a.use(a.a);var v=[{path:"/message",component:c.a},{path:"/left",component:r.a},{path:"/shopping",component:l.a},{path:"/my",component:h.a},{path:"/",redirect:"/message"}],g=new a.a({routes:v});e.a=g},31:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSI3NHB4IiBoZWlnaHQ9Ijc0cHgiIHZpZXdCb3g9IjAgMCA3NCA3NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuOC4zICgyOTgwMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPlNsaWNlIDE8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPg0KICAgICAgICA8cGF0aCBkPSJNNTUuNDY4Mjg1NCw0NS4xNTM1MzU3IEw1NS40NjgyODU0LDQ1LjE1MzUzNTcgQzU1LjY5MjgwODIsNDQuODY2MDcxIDU3LjE0ODA4MDMsNDUuMDU4MzQzMiA1OC43MjIzNTY4LDQ1LjU4NDIwMDQgTDU5LjA1MDIyMDQsNDUuNjkzNzE3IEw1OS40MjA2MzYyLDQ1LjU3MjA0MzIgQzYwLjk5OTQyOTQsNDUuMDUzNDQzMiA2Mi4yNzkyOTQzLDQ1LjE1MzUzNTcgNjIuMjc5Mjk0Myw0NS4xNTM1MzU3IEw2Mi4yNzkyOTQzLDQ1LjE1MzUzNTcgTDYxLjc1ODQ4MDksNzMuNDgzMjc4OSBDNjEuNzI3OTc2MSw3NS4xNDI1OTMzIDYwLjM1MTQzOSw3Ni40ODc3MzM1IDU4LjcwMzY2Nyw3Ni40ODc3MzM1IEw1OC44NzQ0LDc2LjQ4NzczMzUgQzU3LjIxNzc3NzcsNzYuNDg3NzMzNSA1NS44NTczNTE2LDc1LjE0MTM0MjIgNTUuODM1ODM5Nyw3My40ODMyNzg5IEw1NS40NjgyODU0LDQ1LjE1MzUzNTcgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPg0KICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjYuODExMDA4OTMiIGhlaWdodD0iMzEuNDY3NjE0NCIgZmlsbD0id2hpdGUiPg0KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4NCiAgICAgICAgPC9tYXNrPg0KICAgIDwvZGVmcz4NCiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPHVzZSBpZD0iUmVjdGFuZ2xlLTEiIHN0cm9rZT0iIzk3OTc5NyIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IiM5QjlCOUIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU4Ljg3Mzc5MCwgNjAuNzUzOTI2KSByb3RhdGUoLTQ1LjAwMDAwMCkgdHJhbnNsYXRlKC01OC44NzM3OTAsIC02MC43NTM5MjYpICIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+DQogICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMSIgc3Ryb2tlPSIjOTc5Nzk3IiBzdHJva2Utd2lkdGg9IjMiIGN4PSIzMCIgY3k9IjMwIiByPSIyNiI+PC9jaXJjbGU+DQogICAgPC9nPg0KPC9zdmc+"},32:function(t,e,i){i(49);var s=i(0)(i(89),i(42),null,null);t.exports=s.exports},33:function(t,e,i){i(44);var s=i(0)(null,i(37),"data-v-34e04c17",null);t.exports=s.exports},34:function(t,e,i){i(48);var s=i(0)(i(90),i(41),null,null);t.exports=s.exports},35:function(t,e,i){i(45);var s=i(0)(null,i(38),"data-v-3bc53d3c",null);t.exports=s.exports},36:function(t,e,i){i(46);var s=i(0)(null,i(39),"data-v-3bc8c8f8",null);t.exports=s.exports},37:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("111")])},staticRenderFns:[]}},38:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("333")])},staticRenderFns:[]}},39:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("444")])},staticRenderFns:[]}},40:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app"},[i("transition",{attrs:{name:"slide-left"}},[i("router-view")],1),t._v(" "),i("footer",{staticClass:"aui-bar aui-bar-tab",attrs:{id:"footer"}},[i("router-link",{staticClass:"aui-bar-tab-item",attrs:{to:"/message"}},[i("i",{staticClass:"aui-iconfont aui-icon-home"}),t._v(" "),i("div",{staticClass:"aui-bar-tab-label"},[t._v("首页")])]),t._v(" "),i("router-link",{staticClass:"aui-bar-tab-item",attrs:{tapmode:"",to:"/shopping"}},[i("i",{staticClass:"aui-iconfont aui-icon-star"}),t._v(" "),i("div",{staticClass:"aui-bar-tab-label"},[t._v("收藏")])]),t._v(" "),i("router-link",{staticClass:"aui-bar-tab-item",attrs:{tapmode:"",to:"/my"}},[i("div",{staticClass:"aui-badge"},[t._v("99")]),t._v(" "),i("i",{staticClass:"aui-iconfont aui-icon-cart"}),t._v(" "),i("div",{staticClass:"aui-bar-tab-label"},[t._v("购物车")])]),t._v(" "),i("router-link",{staticClass:"aui-bar-tab-item",attrs:{tapmode:"",to:"/left"}},[i("div",{staticClass:"aui-dot"}),t._v(" "),i("i",{staticClass:"aui-iconfont aui-icon-my"}),t._v(" "),i("div",{staticClass:"aui-bar-tab-label"},[t._v("我的")])])],1)],1)},staticRenderFns:[]}},41:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cov-view cov-message"},[i("header",{staticClass:"cov-view-header"},[i("div",{staticClass:"cov-view-header-right"},[i("svg",{staticClass:"cov-message-sub-nav-plus-icon",attrs:{viewBox:"0 0 169 169",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[i("title",[t._v("msg-plus")]),t._v(" "),i("desc",[t._v("Created with Sketch.")]),t._v(" "),i("defs",[i("path",{attrs:{d:"M90,72 L90,6.00237186 C90,2.68870899 87.3137085,0 84,0 C80.6930342,0 78,2.68735342 78,6.00237186 L78,72 L6.00237186,72 C2.68870899,72 0,74.6862915 0,78 C0,81.3069658 2.68735342,84 6.00237186,84 L78,84 L78,162.997628 C78,166.311291 80.6862915,169 84,169 C87.3069658,169 90,166.312647 90,162.997628 L90,84 L162.997628,84 C166.311291,84 169,81.3137085 169,78 C169,74.6930342 166.312647,72 162.997628,72 L90,72 Z",id:"msg-plus-1"}}),t._v(" "),i("mask",{attrs:{id:"mask-2",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox",x:"0",y:"0",width:"169",height:"169",fill:"white"}},[i("use",{attrs:{"xlink:href":"#msg-plus-1"}})])]),t._v(" "),i("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[i("use",{attrs:{id:"msg-plus",stroke:"#FFFFFF",mask:"url(#mask-2)","stroke-width":"2",fill:"#FFFFFF","xlink:href":"#msg-plus-1"}})])])])]),t._v(" "),i("div",{staticClass:"view-container"},[i("div",{staticClass:"cov-loading"},[t._v("释放立即刷新")]),t._v(" "),i("div",{staticClass:"cov-message-search-box",style:{transform:"translate3d(0,"+t.top+"px,0)"}},[t._m(0)]),t._v(" "),i("div",{staticClass:"cov-message-chat-box",style:{transform:"translate3d(0,"+t.top+"px,0)"}},t._l(t.messages,function(t){return i("message",{directives:[{name:"link",rawName:"v-link",value:{name:"chat"},expression:"{ name: 'chat' }"}],attrs:{message:t}})}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cov-message-search"},[s("img",{staticClass:"cov-message-search-icon",attrs:{src:i(31)}}),t._v(" "),s("span",[t._v("搜索")])])}]}},42:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cov-message-chat-row",class:{"menu-active":t.menu}},[i("div",{staticClass:"cov-message-chat-item",style:{transform:"translate3d("+t.swiping+"px, 0, 0)"}},[i("div",{staticClass:"cov-message-chat-avatar",style:{"background-image":"url("+t.message.avatar+")"}}),t._v(" "),i("div",{staticClass:"cov-message-chat-content"},[i("div",{staticClass:"cov-message-chat-title"},[t._v(t._s(t.message.title))]),t._v(" "),i("div",{staticClass:"cov-message-chat-preview"},[t._v(t._s(t.message.preview))])]),t._v(" "),i("div",{staticClass:"cov-message-chat-info"},[i("div",{staticClass:"cov-message-chat-content-time"},[t._v(t._s(t.message.time))]),t._v(" "),i("div",{staticClass:"cov-message-chat-content-count"},[i("span",{staticClass:"cov-message-chat-content-count-icon"},[t._v(t._s(t.message.count))])])])]),t._v(" "),i("div",{staticClass:"cov-message-menu",style:{transform:"translate3d("+t.swiping+"px, 0, 0)"}},[i("div",{staticClass:"cov-message-menu-item"},[t._v("置顶")]),t._v(" "),i("div",{staticClass:"cov-message-menu-item delete"},[t._v("删除")])])])},staticRenderFns:[]}},44:function(t,e){},45:function(t,e){},46:function(t,e){},47:function(t,e){},48:function(t,e){},49:function(t,e){},88:function(t,e,i){i(91)},89:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{message:Object},data:function(){return{closeToken:"",swiping:0,menu:!1}},mounted:function(){this.add()},methods:{add:function(){var t=this;this.$swipe.listen("swipe-left",this.$el,function(){t.swiping=-180,t.menu=!0,t.closeToken=t.$swipe.listen("swipe-right",t.$el,function(){t.swiping=0,t.menu=!1,t.$swipe.leave("swipe-right",t.closeToken)})}),this.$swipe.listen("swiping",this.$el,function(e,i){e.x>i.x&&t.swiping>-180&&(t.swiping=-(e.x-i.x))}),this.$swipe.listen("swiped",this.$el,function(e,i){t.menu||(t.swiping=0)})}}}},90:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(32),a=i.n(s);e.default={created:function(){var t=this;this.$swipe.listen("swiping",null,function(e,i){i.y-e.y>20&&(t.swipingTimer&&clearTimeout(t.swipingTimer),t.swipingTimer=setTimeout(function(){t.moving(0),t.swipingTimer=null},200),t.refresh(),t.moving(i.y-e.y-20))}),this.$el.getElementsByClassName("view-container")[0].addEventListener("scroll",function(){t.$swipe.update()},!1)},data:function(){return{swipingTimer:null,refreshTimer:null,top:0,loading:!1,messages:[{avatar:"http://tp1.sinaimg.cn/1765813240/180/40054316852/1",title:"Awe",preview:"JavaScript performance updates in Microsoft Edge and",time:"上午 12:20",count:99},{avatar:"http://tp1.sinaimg.cn/1765813240/180/40054316852/1",title:"Awe",preview:"卧槽",time:"上午 12:20",count:10},{avatar:"http://tp1.sinaimg.cn/1765813240/180/40054316852/1",title:"Awe",preview:"JavaScript performance updates in Microsoft Edge and",time:"上午 12:20",count:10},{avatar:"http://tp1.sinaimg.cn/1765813240/180/40054316852/1",title:"Awe",preview:"卧槽",time:"上午 12:20",count:10},{avatar:"http://tp1.sinaimg.cn/1765813240/180/40054316852/1",title:"Awe",preview:"JavaScript performance updates in Microsoft Edge and",time:"上午 12:20",count:99},{avatar:"http://tp1.sinaimg.cn/1765813240/180/40054316852/1",title:"Awe",preview:"卧槽",time:"上午 12:20",count:10},{avatar:"http://tp1.sinaimg.cn/1765813240/180/40054316852/1",title:"Awe",preview:"JavaScript performance updates in Microsoft Edge and",time:"上午 12:20",count:10},{avatar:"http://tp1.sinaimg.cn/1765813240/180/40054316852/1",title:"Awe",preview:"卧槽",time:"上午 12:20",count:10},{avatar:"http://tp1.sinaimg.cn/1765813240/180/40054316852/1",title:"Awe",preview:"JavaScript performance updates in Microsoft Edge and",time:"上午 12:20",count:99},{avatar:"http://tp1.sinaimg.cn/1765813240/180/40054316852/1",title:"Awe",preview:"卧槽",time:"上午 12:20",count:10},{avatar:"http://tp1.sinaimg.cn/1765813240/180/40054316852/1",title:"Awe",preview:"JavaScript performance updates in Microsoft Edge and",time:"上午 12:20",count:10},{avatar:"http://tp1.sinaimg.cn/1765813240/180/40054316852/1",title:"Awe",preview:"卧槽",time:"上午 12:20",count:10}]}},components:{Message:a.a},methods:{moving:function(t){this.top=t},refresh:function(){var t=this;this.refreshTimer&&clearTimeout(this.refreshTimer),this.refreshTimer=setTimeout(function(){t.loading=!1,t.refreshTimer=!1},2e3),this.loading=!0}}}},91:function(t,e){!function(t,e){"use strict";var i={};!function(){var s=e.querySelector('meta[name="viewport"]'),a=e.querySelector('meta[name="hotcss"]'),n=t.devicePixelRatio||1,c=768,o=0;if(n=n>=3?3:n>=2?2:1,a){var r=a.getAttribute("content");if(r){var u=r.match(/initial\-dpr=([\d\.]+)/);u&&(n=parseFloat(u[1]));var l=r.match(/max\-width=([\d\.]+)/);l&&(c=parseFloat(l[1]));var d=r.match(/design\-width=([\d\.]+)/);d&&(o=parseFloat(d[1]))}}e.documentElement.setAttribute("data-dpr",n),i.dpr=n,e.documentElement.setAttribute("max-width",c),i.maxWidth=c,o&&(e.documentElement.setAttribute("design-width",o),i.designWidth=o);var h=1/n,v="width=device-width, initial-scale="+h+", minimum-scale="+h+", maximum-scale="+h+", user-scalable=no";s?s.setAttribute("content",v):(s=e.createElement("meta"),s.setAttribute("name","viewport"),s.setAttribute("content",v),e.head.appendChild(s))}(),i.px2rem=function(t,e){return e||(e=parseInt(i.designWidth,10)),320*parseInt(t,10)/e/20},i.rem2px=function(t,e){return e||(e=parseInt(i.designWidth,10)),20*t*e/320},i.mresize=function(){var s=e.documentElement.getBoundingClientRect().width||t.innerWidth;if(i.maxWidth&&s/i.dpr>i.maxWidth&&(s=i.maxWidth*i.dpr),!s)return!1;e.documentElement.style.fontSize=20*s/320+"px",i.callback&&i.callback()},i.mresize(),t.addEventListener("resize",function(){clearTimeout(i.tid),i.tid=setTimeout(i.mresize,33)},!1),t.addEventListener("load",i.mresize,!1),setTimeout(function(){i.mresize()},333),t.hotcss=i}(window,document)},92:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(17),a=i(29),n=i.n(a),c=i(30),o=i(18);s.a.config.debug=!0;var r=new o.a;s.a.prototype.$swipe=r;var u=null;s.a.prototype.$Cov={setRoot:function(t){u=t},hideGlobalNav:function(){u.state.globalNavShow=!1},showGlobalNav:function(){u.state.globalNavShow=!0}},new s.a({el:"#app",router:c.a,render:function(t){return t(n.a)}})}},[92]);
//# sourceMappingURL=app.a06e79718012db930e80.js.map