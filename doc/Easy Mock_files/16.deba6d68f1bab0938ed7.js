webpackJsonp([16],{168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(234),a=n.n(s),r=n(235),u=n(1),o=u(a.a,r.a,!1,null,null,null);t.default=o.exports},234:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(20),r=s(a),u=n(19),o=s(u);t.default={beforeMount:function(){this.logOut()},methods:{logOut:function(){this.$ls.remove("user"),r.default.remove(o.default.storageNamespace+"token"),this.$store.commit("user/SET_VALUE",{}),this.$router.push("/login")}}}},235:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.pageAnimated,expression:"pageAnimated"}],staticStyle:{padding:"20px"}},[e._v(e._s(e.$t("c.logOut.text")))])])},a=[],r={render:s,staticRenderFns:a};t.a=r}});