(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shenghuojiaofeichu/add-or-update"],{"1c07":function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");i(n("66fd"));var t=i(n("3375"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},3375:function(e,t,n){"use strict";n.r(t);var i=n("bfa9"),a=n("e2d3");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("f05f");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"a22ff9f2",null,!1,i["a"],o);t["default"]=s.exports},"3c29":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,i,a,r,o){try{var u=e[r](o),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(i,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function u(e){r(o,i,a,u,s,"next",e)}function s(e){r(o,i,a,u,s,"throw",e)}u(void 0)}))}}var u=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},s=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c=function(){return n.e("components/momo-multipleSelect/momo-multipleSelect").then(n.bind(null,"bd56"))},h={data:function(){return{cross:"",ruleForm:{bianhao:this.getUUID(),yuefen:"",zhanghao:"",xingming:"",jiaofeileixing:"",jiaofeijine:"",piaoju:"",fabushijian:""},yuefenOptions:[],yuefenIndex:0,zhanghaoOptions:[],zhanghaoIndex:0,jiaofeileixingOptions:[],jiaofeileixingIndex:0,user:{},ro:{bianhao:!1,yuefen:!1,zhanghao:!1,xingming:!1,jiaofeileixing:!1,jiaofeijine:!1,piaoju:!1,fabushijian:!1}}},components:{wPicker:u,xiaEditor:s,multipleSelect:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=o(i.default.mark((function t(n){var a,r,o,u;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,this.$api.session(a);case 3:return r=t.sent,this.user=r.data,this.yuefenOptions="一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月".split(","),t.next=8,this.$api.option("kehu","zhanghao",{});case 8:if(r=t.sent,this.zhanghaoOptions=r.data,this.jiaofeileixingOptions="水费,电费,维修费,天然气,其他".split(","),this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=19;break}return this.ruleForm.id=n.id,t.next=17,this.$api.info("shenghuojiaofeichu",this.ruleForm.id);case 17:r=t.sent,this.ruleForm=r.data;case 19:if(this.cross=n.cross,!n.cross){t.next=59;break}o=e.getStorageSync("crossObj"),t.t0=i.default.keys(o);case 23:if((t.t1=t.t0()).done){t.next=59;break}if(u=t.t1.value,"bianhao"!=u){t.next=29;break}return this.ruleForm.bianhao=o[u],this.ro.bianhao=!0,t.abrupt("continue",23);case 29:if("yuefen"!=u){t.next=33;break}return this.ruleForm.yuefen=o[u],this.ro.yuefen=!0,t.abrupt("continue",23);case 33:if("zhanghao"!=u){t.next=37;break}return this.ruleForm.zhanghao=o[u],this.ro.zhanghao=!0,t.abrupt("continue",23);case 37:if("xingming"!=u){t.next=41;break}return this.ruleForm.xingming=o[u],this.ro.xingming=!0,t.abrupt("continue",23);case 41:if("jiaofeileixing"!=u){t.next=45;break}return this.ruleForm.jiaofeileixing=o[u],this.ro.jiaofeileixing=!0,t.abrupt("continue",23);case 45:if("jiaofeijine"!=u){t.next=49;break}return this.ruleForm.jiaofeijine=o[u],this.ro.jiaofeijine=!0,t.abrupt("continue",23);case 49:if("piaoju"!=u){t.next=53;break}return this.ruleForm.piaoju=o[u],this.ro.piaoju=!0,t.abrupt("continue",23);case 53:if("fabushijian"!=u){t.next=57;break}return this.ruleForm.fabushijian=o[u],this.ro.fabushijian=!0,t.abrupt("continue",23);case 57:t.next=23;break;case 59:this.styleChange(),this.$forceUpdate();case 61:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},zhanghaoChange:function(){var e=o(i.default.mark((function e(t){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.zhanghaoIndex=t.target.value,this.ruleForm.zhanghao=this.zhanghaoOptions[this.zhanghaoIndex],e.next=4,this.$api.follow("kehu","zhanghao",{columnValue:this.ruleForm.zhanghao});case 4:n=e.sent,n.data.xingming&&(this.ruleForm.xingming=n.data.xingming);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),fabushijianConfirm:function(e){console.log(e),this.ruleForm.fabushijian=e.result,this.$forceUpdate()},yuefenChange:function(e){this.yuefenIndex=e.target.value,this.ruleForm.yuefen=this.yuefenOptions[this.yuefenIndex]},jiaofeileixingChange:function(e){this.jiaofeileixingIndex=e.target.value,this.ruleForm.jiaofeileixing=this.jiaofeileixingOptions[this.jiaofeileixingIndex]},piaojuTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.piaoju="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=o(i.default.mark((function t(){var n,a,r,o,u,s,c,h,f,l;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.yuefen){t.next=3;break}return this.$utils.msg("月份不能为空"),t.abrupt("return");case 3:if(this.ruleForm.jiaofeileixing){t.next=6;break}return this.$utils.msg("缴费类型不能为空"),t.abrupt("return");case 6:if(this.ruleForm.jiaofeijine){t.next=9;break}return this.$utils.msg("缴费金额不能为空"),t.abrupt("return");case 9:if(!this.ruleForm.jiaofeijine||this.$validate.isNumber(this.ruleForm.jiaofeijine)){t.next=12;break}return this.$utils.msg("缴费金额应输入数字"),t.abrupt("return");case 12:if(!this.cross){t.next=29;break}if(e.setStorageSync("crossCleanType",!0),u=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==u){t.next=29;break}if(n||(n=e.getStorageSync("crossObj")),u.startsWith("[")){t.next=25;break}for(c in n)c==u&&(n[c]=s);return h=e.getStorageSync("crossTable"),t.next=23,this.$api.update("".concat(h),n);case 23:t.next=29;break;case 25:a=Number(e.getStorageSync("userid")),r=n["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 29:if(!r||!a){t.next=52;break}return this.ruleForm.crossuserid=a,this.ruleForm.crossrefid=r,f={page:1,limit:10,crossuserid:a,crossrefid:r},t.next=35,this.$api.list("shenghuojiaofeichu",f);case 35:if(l=t.sent,!(l.data.total>=o)){t.next=42;break}return this.$utils.msg(e.getStorageSync("tips")),e.removeStorageSync("crossCleanType"),t.abrupt("return",!1);case 42:if(!this.ruleForm.id){t.next=47;break}return t.next=45,this.$api.update("shenghuojiaofeichu",this.ruleForm);case 45:t.next=49;break;case 47:return t.next=49,this.$api.add("shenghuojiaofeichu",this.ruleForm);case 49:this.$utils.msgBack("提交成功");case 50:t.next=60;break;case 52:if(!this.ruleForm.id){t.next=57;break}return t.next=55,this.$api.update("shenghuojiaofeichu",this.ruleForm);case 55:t.next=59;break;case 57:return t.next=59,this.$api.add("shenghuojiaofeichu",this.ruleForm);case 59:this.$utils.msgBack("提交成功");case 60:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(n,"-").concat(i,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=h}).call(this,n("543d")["default"])},a09f:function(e,t,n){},bfa9:function(e,t,n){"use strict";var i={"w-picker":()=>Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},e2d3:function(e,t,n){"use strict";n.r(t);var i=n("3c29"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},f05f:function(e,t,n){"use strict";var i=n("a09f"),a=n.n(i);a.a}},[["1c07","common/runtime","common/vendor"]]]);