(swan["webpackJsonp"]=swan["webpackJsonp"]||[]).push([[6],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(15),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},32:function(e,t,n){"use strict";n.r(t);var r=n(16),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},33:function(e,t,n){"use strict";n.r(t);var r=n(17),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},34:function(e,t,n){"use strict";n.r(t);var r=n(3),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"index"},[n("NumberDisplay"),e._v(" "),n("NumberSubmit")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("text",{staticClass:"title"},[e._v(e._s(e.getNumbers))])])},o=[],s={name:"NumberDisplay",computed:{getNumbers:function(){return this.$store.getters.getNumbers}}},c=s;function _(e,t,n,r,i,a,u,o){var s,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),u?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},c._ssrRegister=s):i&&(s=o?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),s)if(c.functional){c._injectStyles=s;var _=c.render;c.render=function(e,t){return s.call(t),_(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,s):[s]}return{exports:e,options:c}}function f(e){var t=n(31);t.__inject__&&t.__inject__(e)}var d=_(c,u,o,!1,f,null,"0241b896"),l=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],staticClass:"input",attrs:{type:"number"},domProps:{value:e.number},on:{input:function(t){t.target.composing||(e.number=t.target.value)}}}),e._v(" "),n("button",{on:{tap:e.addNumber}},[e._v("\n    Add new number\n  ")])])},p=[],v={name:"NumberSubmit",data:function(){return{number:0}},methods:{addNumber:function(){this.$store.dispatch("addNumber",Number(this.number))}}},b=v;function h(e){var t=n(32);t.__inject__&&t.__inject__(e)}var N=_(b,m,p,!1,h,null,"682650f4"),g=N.exports,x={name:"Index",components:{NumberDisplay:l,NumberSubmit:g}},C=x;function $(e){var t=n(33);t.__inject__&&t.__inject__(e)}var w=_(C,i,a,!1,$,null,"681a8ea6"),j=w.exports,S={navigationBarTitleText:"\u9996\u9875"};Page(Object(r["createPageConfig"])(j,"pages/index/index",{},S||{}))}},[[34,0,1,2]]]);