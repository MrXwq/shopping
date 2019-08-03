(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cart"],{"5bb6":function(t,e,a){},"77a0":function(t,e,a){"use strict";var s=a("5bb6"),o=a.n(s);o.a},ac6a:function(t,e,a){for(var s=a("cadf"),o=a("0d58"),i=a("2aba"),r=a("7726"),l=a("32e9"),n=a("84f2"),c=a("2b4c"),u=c("iterator"),d=c("toStringTag"),m=n.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=o(f),g=0;g<p.length;g++){var h,b=p[g],L=f[b],v=r[b],S=v&&v.prototype;if(S&&(S[u]||l(S,u,m),S[d]||l(S,d,b),n[b]=m,L))for(h in s)S[h]||i(S,h,s[h],!0)}},b789:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.cartList}},[a("el-table-column",{attrs:{prop:"detail.name",label:"商品",align:"center"}}),a("el-table-column",{attrs:{prop:"productNum",label:"数量",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input-number",{attrs:{min:1,label:"描述文字"},on:{change:function(a){return t.handleChange(e.row.id,e.row.productNum)}},model:{value:e.row.productNum,callback:function(a){t.$set(e.row,"productNum",a)},expression:"scope.row.productNum"}})]}}])}),a("el-table-column",{attrs:{prop:"sumPrice",label:"总价",align:"center"}}),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return t.handleDelete(e.row.id)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"cart-bar"},[a("div",{staticClass:"total-price"},[t._v("合计："+t._s(t.totalPrice))]),a("div",{staticClass:"cart-pay"},[a("el-button",{attrs:{type:"success"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("立即结算")]),a("el-dialog",{attrs:{title:"收货地址",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"姓名","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"电话","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}})],1),a("el-form-item",{attrs:{label:"地址","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.settlementCart}},[t._v("确 定")])],1)],1)],1)])],1)},o=[],i=(a("ac6a"),{data:function(){return{userId:-1,cartList:[],dialogFormVisible:!1,form:{name:"",tel:"",address:""},formLabelWidth:"120px"}},created:function(){},mounted:function(){console.log("挂载Cart组件"),this.getUserId(),this.getCartList()},methods:{getUserId:function(){var t=0!==this.$store.state.loginRole,e=this.$store.state.userId;console.log("当前用户是否登录：",t),console.log("当前登录用户的userId：",e),t?this.userId=e:(this.$router.push({name:"login"}),this.$message({message:"用户未登录，请登录后重试",type:"warning"}))},getCartList:function(){var t=this;console.log("获取购物车列表"),this.axios.get("http://127.0.0.1:7001/api/usercart/".concat(this.userId)).then(function(e){console.log("获取购物车列表返回参数",e),e.data.data.forEach(function(t){console.log("购物车商品的数量："+t.productNum)}),t.cartList=e.data.data})},settlementCart:function(){var t=this;this.dialogFormVisible=!1,this.getUserId();var e=this.userId||this.$store.state.userId,a={address:this.form.address};console.log("结算购物车入参：",a),this.axios.post("http://127.0.0.1:7001/api/settlement/".concat(e),a).then(function(e){console.log("结算购物车返回参数",e),0===e.data.code?(t.$message({message:"下单成功",type:"success"}),t.getCartList()):t.$message({message:e.data.message,type:"warning"})})},handleDelete:function(t){var e=this;this.axios.delete("http://127.0.0.1:7001/api/cart/".concat(t)).then(function(t){console.log("删除活动商品返回参数",t),t&&t.data&&0===t.data.code?(e.$message({message:"删除成功",type:"success"}),e.getCartList()):e.$message({message:t.data.message||"网络繁忙",type:"warnning"})})},handleChange:function(t,e){var a=this;this.axios.put("http://127.0.0.1:7001/api/cart/".concat(t),{productNum:e}).then(function(t){a.getCartList()})}},computed:{totalPrice:function(){var t=0;return this.cartList.forEach(function(e){t+=e.sumPrice}),t}}}),r=i,l=(a("77a0"),a("2877")),n=Object(l["a"])(r,s,o,!1,null,"3314b235",null);e["default"]=n.exports}}]);
//# sourceMappingURL=cart.1b9a1737.js.map