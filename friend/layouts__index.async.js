(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{A0qh:function(e,t,a){e.exports={normal:"normal___YzYMc",content:"content___3AoQj",footer:"footer___2Jchz"}},aArQ:function(e,t,a){"use strict";a.r(t);var n=a("mXGw"),l=a.n(n),i=(a("uWci"),a("jQ27")),s=(a("+hTF"),a("e9dt")),o=(a("HtAr"),a("HK2H")),r=(a("mgoV"),a("qsts")),c=r["a"].Item;class d extends l.a.Component{constructor(){super(...arguments),this.state={visible:!1,selected:""},this.onSelect=(e=>{console.log(e),this.setState({visible:!1,selected:e.props.value}),window.location.href="1"===e.key?"http://mp.weixin.qq.com/mp/homepage?__biz=MzU2Mzk1NzkwOA==&hid=4&sn=efd11249c0dddfbd049a1a6fc6ba4fc3&scene=18#wechat_redirect":"http://mp.weixin.qq.com/mp/homepage?__biz=MzU2Mzk1NzkwOA==&hid=3&sn=f2e1f2cb731352aed2602b97f4a72016&scene=18#wechat_redirect"}),this.handleVisibleChange=(e=>{this.setState({visible:e})})}render(){return l.a.createElement("div",null,l.a.createElement(s["a"],{mode:"light",rightContent:l.a.createElement(r["a"],{mask:!0,overlayClassName:"fortest",overlayStyle:{color:"currentColor"},visible:this.state.visible,overlay:[l.a.createElement(c,{key:"1",value:"scan","data-seed":"logId"},"\u5b66\u4e60\u6253\u5361"),l.a.createElement(c,{key:"2",value:"special",style:{whiteSpace:"nowrap"}},"\u5b9e\u6218\u9879\u76ee")],align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:this.handleVisibleChange,onSelect:this.onSelect},l.a.createElement("div",{style:{height:"100%",padding:"0 15px",marginRight:"-15px",display:"flex",alignItems:"center"}},l.a.createElement(o["a"],{type:"ellipsis"})))},"\u8da3\u8c08\u524d\u7aef-\u670b\u53cb\u5708"),l.a.createElement(i["a"],{marqueeProps:{loop:!0,style:{padding:"0 7.5px"}}},"\u901a\u77e5: \u8da3\u8c08\u524d\u7aef\u516c\u4f17\u53f7\u5f00\u542f\u5185\u90e8\u670b\u53cb\u5708\u529f\u80fd,\u5927\u5bb6\u53ef\u4ee5\u628a\u5e73\u65f6\u7684\u751f\u6d3b,\u5f00\u5fc3\u6216\u8005\u4e0d\u5f00\u5fc3\u7684\u4e8b\u5206\u4eab\u51fa\u6765\u54c8~"))}}var m=d,h=a("A0qh"),p=a.n(h);function f(e){var t=e.location.pathname,a=["","/"].indexOf(t)>-1;return a?l.a.createElement("div",{className:p.a.normal},l.a.createElement(m,null),l.a.createElement("div",{className:p.a.content,id:"scrollDom"},e.children),l.a.createElement("footer",{className:p.a.footer},l.a.createElement("a",{href:"https://juejin.im/user/5b985481f265da0a87264251"},"\u5f90\u5c0f\u5915"))):e.children}t["default"]=f}}]);