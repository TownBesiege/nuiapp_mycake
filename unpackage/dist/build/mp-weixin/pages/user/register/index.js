(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/register/index"],{"0250":function(n,e,t){"use strict";var o=t("0b71"),i=t.n(o);i.a},"0b71":function(n,e,t){},"16dc":function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return o}));var o={bmLogin:function(){return t.e("components/bm-login/bm-login").then(t.bind(null,"5a1c"))}},i=function(){var n=this,e=n.$createElement;n._self._c},u=[]},"1d79":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){t.e("components/bm-login/bm-login").then(function(){return resolve(t("5a1c"))}.bind(null,t)).catch(t.oe)},i={name:"register",components:{bmLogin:o},data:function(){return{myConfig:{forgetPwd_register_protocol:!1,rememberPassword:!1,quickLogin:!0,otherLoginWays:!1,login_btn_value:"注册",phone_login_text:"返回账号密码登录"}}},methods:{to_forgetPassword:function(){n.navigateTo({url:"../phone-login/index"})},login:function(e){this.$request("/1.1/users",e,"post").then((function(e){e.object,e.code;console.log("返回结果",e);var t=202==e.code?"该用户名已被使用":"注册成功";n.showToast({title:t,icon:"none"}),ths.toLogin()}))},to_phone_login:function(){n.navigateTo({url:"../phone-login/index"})},toLogin:function(){n.navigateTo({url:"/pages/user/login/index"})}}};e.default=i}).call(this,t("543d")["default"])},"4afc":function(n,e,t){"use strict";(function(n){t("ade0");o(t("66fd"));var e=o(t("69b2"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},"69b2":function(n,e,t){"use strict";t.r(e);var o=t("16dc"),i=t("d85f");for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);t("0250");var r,c=t("f0c5"),a=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"02e22f79",null,!1,o["a"],r);e["default"]=a.exports},d85f:function(n,e,t){"use strict";t.r(e);var o=t("1d79"),i=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=i.a}},[["4afc","common/runtime","common/vendor"]]]);