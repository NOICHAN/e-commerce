"use strict";(self["webpackChunke_commerce"]=self["webpackChunke_commerce"]||[]).push([[619],{4099:function(e,a,l){l.d(a,{Z:function(){return c}});var s=l(3396);const n={class:"mb-5"},i=(0,s.Uk)("登入"),t=(0,s.Uk)("註冊");function o(e,a){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(l,{class:"fs-2 mx-2",to:"/user/login"},{default:(0,s.w5)((()=>[i])),_:1}),(0,s.Wm)(l,{class:"fs-2 mx-2",to:"/user/signup"},{default:(0,s.w5)((()=>[t])),_:1})])}var r=l(89);const m={},d=(0,r.Z)(m,[["render",o],["__scopeId","data-v-3d03a8da"]]);var c=d},1619:function(e,a,l){l.r(a),l.d(a,{default:function(){return g}});var s=l(3396),n=l(7139);const i={class:"container"},t={class:"col-10 col-md-6 bg-white px-5 d-flex flex-column align-items-center"},o=(0,s._)("h3",{class:"my-5 h1 text-primary fw-bold text-center"},"會員註冊",-1),r=(0,s._)("div",{class:"my-5"},[(0,s._)("button",{type:"submit",class:"btn btn-outline-warning btn-lg"},"註冊")],-1);function m(e,a,l,m,d,c){const u=(0,s.up)("ToggleLogInSignUp"),p=(0,s.up)("v-field"),g=(0,s.up)("error-message"),f=(0,s.up)("v-form");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(f,{class:"row justify-content-center",onSubmit:c.signUp},{default:(0,s.w5)((({errors:e})=>[(0,s._)("div",t,[o,(0,s.Wm)(u),(0,s.Wm)(p,{type:"email",class:(0,n.C_)(["form-control mb-4",{"is-invalid":e["email"]}]),placeholder:"請輸入E-mail",name:"email",rules:"email|required",modelValue:d.signUpData.signUpEmail,"onUpdate:modelValue":a[0]||(a[0]=e=>d.signUpData.signUpEmail=e)},null,8,["class","modelValue"]),(0,s.Wm)(g,{class:"invalid-feedback",name:"email"}),(0,s.Wm)(p,{type:"password",class:(0,n.C_)(["form-control my-4",{"is-invalid":e["密碼"]}]),placeholder:"請輸入密碼(英文大小寫有別)",name:"密碼",rules:"min:8|required"},null,8,["class"]),(0,s.Wm)(g,{class:"invalid-feedback",name:"密碼"}),(0,s.Wm)(p,{type:"password",class:(0,n.C_)(["form-control my-4",{"is-invalid":e["確認密碼"]}]),placeholder:"請再輸入一次密碼",name:"確認密碼",rules:"confirmed:@密碼|required",modelValue:d.signUpData.signUpPassword,"onUpdate:modelValue":a[1]||(a[1]=e=>d.signUpData.signUpPassword=e)},null,8,["class","modelValue"]),(0,s.Wm)(g,{class:"invalid-feedback",name:"確認密碼"}),(0,s.Wm)(p,{type:"text",class:(0,n.C_)(["form-control my-4",{"is-invalid":e["姓名"]}]),placeholder:"請輸入中文姓名",name:"姓名",rules:"required",modelValue:d.signUpData.signUpName,"onUpdate:modelValue":a[2]||(a[2]=e=>d.signUpData.signUpName=e)},null,8,["class","modelValue"]),(0,s.Wm)(g,{class:"invalid-feedback",name:"姓名"}),(0,s.Wm)(p,{type:"tel",class:(0,n.C_)(["form-control mt-4",{"is-invalid":e["手機號碼"]}]),placeholder:"請輸入手機號碼",name:"手機號碼",rules:"digits:10|required",modelValue:d.signUpData.signUpTel,"onUpdate:modelValue":a[3]||(a[3]=e=>d.signUpData.signUpTel=e)},null,8,["class","modelValue"]),(0,s.Wm)(g,{class:"invalid-feedback",name:"手機號碼"}),r])])),_:1},8,["onSubmit"])])}var d=l(4099),c={data(){return{signUpData:{signUpEmail:"",signUpPassword:"",signUpName:"",signUpTel:""}}},methods:{signUp(){this.$alert("註冊成功，請再次重新登入，將於5秒後自動回首頁。"),setTimeout((()=>{this.$router.push("/")}),5e3)}},components:{ToggleLogInSignUp:d.Z}},u=l(89);const p=(0,u.Z)(c,[["render",m]]);var g=p}}]);
//# sourceMappingURL=619.fba5d9c0.js.map