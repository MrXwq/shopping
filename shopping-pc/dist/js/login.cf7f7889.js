(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"614c":function(e,r,o){"use strict";var t=o("66b7"),s=o.n(t);s.a},"66b7":function(e,r,o){},"7cdf":function(e,r,o){var t=o("5ca1");t(t.S,"Number",{isInteger:o("9c12")})},"9c12":function(e,r,o){var t=o("d3f4"),s=Math.floor;e.exports=function(e){return!t(e)&&isFinite(e)&&s(e)===e}},a55b:function(e,r,o){"use strict";o.r(r);var t=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"login"},[o("div",{staticClass:"login-window"},[o("el-tabs",{attrs:{type:"border-card"}},[o("el-tab-pane",{attrs:{label:"登录"}},[o("el-form",{ref:"loginForm",attrs:{"label-position":e.labelPosition,"label-width":"90px",model:e.loginForm,rules:e.rules,"status-icon":""}},[o("el-form-item",{attrs:{label:"手机号",prop:"tel"}},[o("el-input",{model:{value:e.loginForm.tel,callback:function(r){e.$set(e.loginForm,"tel",e._n(r))},expression:"loginForm.tel"}})],1),o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.login("loginForm")}}},[e._v("登录")]),o("el-button",{on:{click:function(r){return e.resetForm("loginForm")}}},[e._v("重置")])],1)],1)],1),o("el-tab-pane",{attrs:{label:"注册"}},[o("el-form",{ref:"regForm",attrs:{"label-position":e.labelPosition,"label-width":"90px",model:e.regForm,rules:e.rules,"status-icon":""}},[o("el-form-item",{attrs:{label:"手机号",prop:"tel"}},[o("el-input",{model:{value:e.regForm.tel,callback:function(r){e.$set(e.regForm,"tel",e._n(r))},expression:"regForm.tel"}})],1),o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.regForm.password,callback:function(r){e.$set(e.regForm,"password",r)},expression:"regForm.password"}})],1),o("el-form-item",{attrs:{label:"确认密码",prop:"repassword"}},[o("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.regForm.repassword,callback:function(r){e.$set(e.regForm,"repassword",r)},expression:"regForm.repassword"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.register("regForm")}}},[e._v("注册")]),o("el-button",{on:{click:function(r){return e.resetForm("regForm")}}},[e._v("重置")])],1)],1)],1)],1)],1)])},s=[],a=(o("c5f6"),o("7cdf"),{data:function(){var e=this,r=function(e,r,o){if(!r)return o(new Error("电话不能为空"));setTimeout(function(){Number.isInteger(r)?o():o(new Error("请输入数字值"))})},o=function(r,o,t){""===o?t(new Error("请输入密码")):(""!==e.regForm.password&&e.$refs.regForm.validateField("repassword"),t())},t=function(r,o,t){""===o?t(new Error("请再次输入密码")):o!==e.regForm.password?t(new Error("两次输入密码不一致!")):t()};return{rules:{password:[{validator:o,trigger:"blur"}],repassword:[{validator:t,trigger:"blur"}],tel:[{validator:r,trigger:"blur"}]},labelPosition:"left",loginForm:{tel:"",password:""},regForm:{tel:"",password:"",repassword:""}}},methods:{login:function(e){var r=this;console.log("用户登录",this.loginForm),console.log("用户登录状态",this.$store.state.loginRole),this.axios.post("http://127.0.0.1:7001/api/login",this.loginForm).then(function(e){console.log("用户登录返回参数",e),e&&e.data&&0===e.data.code&&e.data.data&&e.data.data[0]&&e.data.data[0].id?(r.$store.dispatch("userLogin",{userId:e.data.data[0].id,roleId:e.data.data[0].roleId}),console.log("用户登录状态",r.$store.state.loginRole,r.$store.state.userId),r.$router.push({name:"home"}),r.$message({message:"登录成功！",type:"success"})):r.$message({message:e.data.message,type:"warning"})}),this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log("账号密码不匹配")})},register:function(e){var r=this;console.log("用户注册",this.regForm),this.$refs[e].validate(function(o){if(!o)return console.log("error submit!!"),!1;console.log("输入信息正确"),r.$refs[e].resetFields()});var o=this.regForm,t=o.tel,s=o.password,a=o.repassword;""!=t&&""!=s&&""!=a&&(s===a?this.axios.post("http://127.0.0.1:7001/api/user",this.regForm).then(function(e){console.log("用户注册返回参数",e),0===e.data.code?r.$message({message:"注册成功！",type:"success"}):r.$message({message:e.data.message,type:"warning"})}):this.$message({message:"两次输入的密码不一致",type:"warning"}))},resetForm:function(e){this.$refs[e].resetFields()}}}),l=a,n=(o("614c"),o("2877")),i=Object(n["a"])(l,t,s,!1,null,"d9626554",null);r["default"]=i.exports}}]);
//# sourceMappingURL=login.cf7f7889.js.map