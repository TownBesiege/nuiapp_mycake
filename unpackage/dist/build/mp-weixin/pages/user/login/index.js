(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/login/index"],{5314:function(n,t,e){"use strict";e.r(t);var o=e("d400"),i=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);t["default"]=i.a},7130:function(n,t,e){"use strict";(function(n){e("ade0");o(e("66fd"));var t=o(e("bce5"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},8572:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return o}));var o={bmLogin:function(){return e.e("components/bm-login/bm-login").then(e.bind(null,"5a1c"))}},i=function(){var n=this,t=n.$createElement;n._self._c},r=[]},a313:function(n,t,e){},bce5:function(n,t,e){"use strict";e.r(t);var o=e("8572"),i=e("5314");for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("d9a0");var c,u=e("f0c5"),a=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"0c705c9b",null,!1,o["a"],c);t["default"]=a.exports},d400:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){e.e("components/bm-login/bm-login").then(function(){return resolve(e("5a1c"))}.bind(null,e)).catch(e.oe)},i={name:"login",components:{bmLogin:o},data:function(){return{myConfig:{forgetPwd_register_protocol:!0,forgetPassword:!0,register:!0,protocol:!0,quickLogin:!0,otherLoginWays:!0}}},methods:{to_phoneLogin:function(){n.navigateTo({url:"../phone-login/index"})},to_forgetPassword:function(){n.navigateTo({url:"../reset-pwd/index"})},to_protocol:function(){},login:function(t){var e=this;this.$request("/1.1/login",t).then((function(t){211!=t.code?210!=t.code?(n.setStorage({key:"userInfo",data:t}),e.$store.commit("setInfo",t),n.reLaunch({url:"/pages/cake/cake"})):n.showToast({title:"密码错误",icon:"none"}):n.showToast({title:"用户未注册",icon:"none"})}))},to_register:function(){n.navigateTo({url:"../register/index"})}}};t.default=i}).call(this,e("543d")["default"])},d9a0:function(n,t,e){"use strict";var o=e("a313"),i=e.n(o);i.a}},[["7130","common/runtime","common/vendor"]]]);