webpackJsonp([3],{14:function(e,t,o){"use strict";function r(e){o(225)}Object.defineProperty(t,"__esModule",{value:!0});var i=o(227),c=o.n(i),p=o(228),s=o(1),n=r,a=s(c.a,p.a,!1,n,null,null);t.default=a.exports},225:function(e,t,o){var r=o(226);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);o(149)("75d5e91c",r,!0)},226:function(e,t,o){t=e.exports=o(148)(),t.push([e.i,'.em-project__list{margin-top:20px}.em-project__list .ivu-row{margin-left:-10px;margin-right:-10px}.em-project__list .ivu-col{padding-left:10px;padding-right:10px}.em-project__item{background:#fff;padding:0 14px 20px;-webkit-box-shadow:0 1px 5px #e5e5e5;box-shadow:0 1px 5px #e5e5e5;border-radius:4px;-webkit-transition:all .3s;transition:all .3s;position:relative;margin-bottom:20px;cursor:pointer}.em-project__item:hover{background:#fbfbfb}.em-project__item.is-group .project-collect,.em-project__item.is-group h2,.em-project__item.is-group i,.em-project__item.is-join .project-collect,.em-project__item.is-join h2,.em-project__item.is-join i{color:#fff}.em-project__item.is-group .ivu-btn:hover,.em-project__item.is-group .project-description,.em-project__item.is-group .project-member,.em-project__item.is-group .project-url,.em-project__item.is-join .ivu-btn:hover,.em-project__item.is-join .project-description,.em-project__item.is-join .project-member,.em-project__item.is-join .project-url{background:#fff;border-color:#fff}.em-project__item.is-group .ivu-btn,.em-project__item.is-join .ivu-btn{border-color:#fff}.em-project__item h2{font-weight:700;font-size:14px}.em-project__item .project-collect{text-align:center;font-size:26px;color:#f84c5b}.em-project__item .project-collect i{cursor:pointer}.em-project__item .project-description,.em-project__item .project-member,.em-project__item .project-url,.em-project__item h2{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.em-project__item .project-description,.em-project__item .project-member,.em-project__item .project-url{padding:10px;border:1px solid #eee;border-radius:4px;margin-top:10px;background:#f5f5f5}.em-project__item .project-description:before,.em-project__item .project-member:before,.em-project__item .project-url:before{content:"";display:block;width:20px;height:2px;background:#f84c5b;border-radius:4px;margin-bottom:3px}.em-project__item .project-description:before{background:#2d8cf0}.em-project__item .project-member{display:-webkit-box;display:-ms-flexbox;display:flex}.em-project__item .project-member:before{display:none}.em-project__item .project-member img{width:20px;height:20px;display:block;border-radius:4px;margin-right:12px}.em-project__item .project-control{margin-top:10px;margin-left:1px;width:100%}.em-project__item .project-control .ivu-btn{width:33%}.em-project__item.is-group{background:#f84c5b}.em-project__item.is-group:hover{background:rgba(248,76,91,.9)}.em-project__item.is-group .ivu-btn:hover i{color:#f84c5b}.em-project__item.is-join{background:#2d8cf0}.em-project__item.is-join:hover{background:rgba(45,140,240,.9)}.em-project__item.is-join .ivu-btn:hover i{color:#2d8cf0}.list-complete-item{-webkit-transition:all 1s;transition:all 1s}.list-complete-enter,.list-complete-leave-to{opacity:0;-webkit-transform:translateX(30px);-ms-transform:translateX(30px);transform:translateX(30px)}.list-complete-leave-active{position:absolute}',""])},227:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(19),c=r(i),p=o(37),s=r(p),n=o(34),a=r(n),l=o(3),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(l);t.default={name:"project",data:function(){return{filterByAuthor:this.$t("p.project.filter[0]"),cliped:!1,removeModal:{show:!1,project:{},inputModel:""}}},asyncData:function(e){var t=e.store,o=e.route;return t.commit("project/INIT_REQUEST"),t.dispatch("project/INIT_PAGE",o),t.dispatch("project/FETCH")},mounted:function(){var e=this;this.$on("query",(0,a.default)(function(t){e.$store.dispatch("project/QUERY",t)},500))},computed:{page:function(){var e=this.$route;switch(e.fullPath){case"/workbench":return{title:this.$t("p.project.header.title[2]"),description:this.$t("p.project.header.description[2]"),placeholder:this.$t("p.project.placeholder[2]"),icon:"code-working",type:2};case"/":return{title:this.$t("p.project.header.title[0]"),description:this.$t("p.project.header.description[0]"),placeholder:this.$t("p.project.placeholder[0]"),icon:"person",type:0};default:var t=e.query&&e.query.name||"";return{title:this.$t("p.project.header.title[1]",{groupName:t}),description:this.$t("p.project.header.description[1]",{groupName:t}),placeholder:this.$t("p.project.placeholder[1]"),icon:"person-stalker",type:1}}},projects:function(){return this.$store.state.project.list},user:function(){return this.$store.state.user},keywords:function(){return this.$store.state.project.keywords}},watch:{$route:function(){this.filterByAuthor=this.$t("p.project.filter[0]"),this.$store.commit("project/INIT_REQUEST"),this.$store.dispatch("project/INIT_PAGE",this.$route),this.$store.dispatch("project/FETCH")}},methods:{go:function(e){this.cliped||this.$router.push("/project/"+e._id)},clip:function(e){var t=this,o=new s.default(".copy-url",{text:function(){return location.origin+c.default.mockPrefix+e._id+e.url}});this.cliped=!0,o.on("success",function(e){e.clearSelection(),o.destroy(),t.cliped=!1,t.$Message.success(t.$t("p.project.copySuccess"))})},handleFilter:function(e){var t=0;e===this.$t("p.project.filter[1]")?t=1:e===this.$t("p.project.filter[2]")&&(t=2),this.$store.commit("project/INIT_REQUEST"),this.$store.commit("project/SET_REQUEST_PARAMS",{filterByAuthor:t}),this.$store.dispatch("project/FETCH")},handleWorkbench:function(e){this.$store.dispatch("project/WORKBENCH",e)},removeConfirm:function(e){this.removeModal.show=!0,this.removeModal.project=e,this.removeModal.inputModel=""},remove:function(){var e=this,t=this.removeModal.project._id;this.$store.dispatch("project/REMOVE",t).then(function(){e.removeModal.show=!1,e.$Message.success(e.$t("p.project.deleteSuccess",{name:e.removeModal.project.name})),e.$store.commit("project/SET_REQUEST_PARAMS",{pageIndex:1}),e.$store.dispatch("project/FETCH")})},clone:function(e){var t=this;return d.project.copy({data:{id:e._id}}).then(function(e){e.data.success&&(t.$Message.success(t.$t("p.project.cloneSuccess")),t.$store.commit("project/SET_REQUEST_PARAMS",{pageIndex:1}),t.$store.dispatch("project/FETCH"))})},loading:function(){var e=this;this.$store.dispatch("project/FETCH").then(function(t){e.$refs.loading.stop(),t&&0===t.length&&e.$refs.loading.destroy()})}}}},228:function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"em-project"},[o("em-placeholder",{attrs:{show:0===e.projects.length}},[o("Icon",{attrs:{type:e.keywords?"outlet":"happy-outline"}}),o("p",[e._v(e._s(e.keywords?e.$t("p.project.placeholder[3]"):e.page.placeholder))])],1),o("em-keyboard-short"),o("em-header",{attrs:{icon:e.page.icon,title:e.page.title,description:e.page.description}},[0===e.page.type?o("Radio-group",{attrs:{type:"button"},on:{"on-change":e.handleFilter},model:{value:e.filterByAuthor,callback:function(t){e.filterByAuthor=t},expression:"filterByAuthor"}},[o("Radio",{attrs:{label:e.$t("p.project.filter[0]")}}),o("Radio",{attrs:{label:e.$t("p.project.filter[1]")}}),o("Radio",{attrs:{label:e.$t("p.project.filter[2]")}})],1):e._e()],1),o("Modal",{attrs:{width:"360"},model:{value:e.removeModal.show,callback:function(t){e.$set(e.removeModal,"show",t)},expression:"removeModal.show"}},[o("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[o("Icon",{attrs:{type:"information-circled"}}),o("span",[e._v(" "+e._s(e.$t("p.project.modal.delete.title")))])],1),o("div",[o("p",[e._v(e._s(e.$tc("p.project.modal.delete.description",1))+" "),o("strong",{staticStyle:{"word-break":"break-all"}},[e._v("\n        "+e._s(e.removeModal.project.user&&e.removeModal.project.user.nick_name||e.removeModal.project.group&&e.removeModal.project.group.name)+" / "+e._s(e.removeModal.project.name))])]),o("p",[e._v(e._s(e.$tc("p.project.modal.delete.description",2)))]),o("i-input",{staticStyle:{"margin-top":"10px"},attrs:{placeholder:e.$t("p.project.modal.delete.placeholder")},model:{value:e.removeModal.inputModel,callback:function(t){e.$set(e.removeModal,"inputModel",t)},expression:"removeModal.inputModel"}})],1),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{type:"error",size:"large",long:"",disabled:e.removeModal.project.name!==e.removeModal.inputModel},on:{click:e.remove}},[e._v(e._s(e.$t("p.project.modal.delete.button")))])],1)]),o("transition",{attrs:{name:"fade"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.pageAnimated,expression:"pageAnimated"}],staticClass:"em-container em-project__list"},[o("div",{staticClass:"ivu-row"},[o("transition-group",{attrs:{name:"list-complete"}},e._l(e.projects,function(t,r){return o("div",{key:r,staticClass:"ivu-col ivu-col-span-6 list-complete-item"},[o("div",{staticClass:"em-project__item",class:{"is-join":2===e.page.type||0===e.page.type&&e.user.id&&t.user._id!==e.user.id,"is-group":1===e.page.type},on:{click:function(o){e.go(t)}}},[o("div",{staticClass:"project-collect"},[o("transition",{attrs:{name:"zoom",mode:"out-in"}},[o("Icon",{key:t.extend.is_workbench,attrs:{type:t.extend.is_workbench?"android-star":"android-star-outline"},nativeOn:{click:function(o){o.stopPropagation(),e.handleWorkbench(t.extend)}}})],1)],1),o("h2",[e._v(e._s(t.name))]),o("div",{staticClass:"project-description"},[e._v(e._s(t.description))]),o("div",{staticClass:"project-url"},[e._v(e._s(t.url))]),0===e.page.type?o("div",{staticClass:"project-member"},[o("img",{attrs:{src:t.user.head_img}}),e._l(t.members,function(t,r){return r<5?o("img",{key:r,attrs:{src:t.head_img}}):e._e()})],2):e._e(),o("Button-group",{staticClass:"project-control"},[o("Button",{staticClass:"copy-url",attrs:{type:"ghost",icon:"link",title:e.$t("p.project.control[0]")},on:{click:function(o){e.clip(t)}}}),o("Button",{staticStyle:{width:"34%"},attrs:{type:"ghost",icon:"ios-copy",title:e.$t("p.project.control[1]")},on:{click:function(o){o.stopPropagation(),e.clone(t)}}}),o("Button",{attrs:{type:"ghost",icon:"trash-b",title:e.$t("p.project.control[2]")},on:{click:function(o){o.stopPropagation(),e.removeConfirm(t)}}})],1)],1)])}))],1)])]),2!==e.page.type?o("em-loading",{ref:"loading",on:{loading:e.loading}}):e._e()],1)},i=[],c={render:r,staticRenderFns:i};t.a=c}});