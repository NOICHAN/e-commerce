"use strict";(self["webpackChunke_commerce"]=self["webpackChunke_commerce"]||[]).push([[354],{2734:function(e,s){const a={updateOrderFailed:"更新失敗,請稍後再試"};s["Z"]=(e,s)=>{a[s]?e(a[s]):e("sorry，目前服務不可用，請稍後再試或聯絡管理員。")}},5601:function(e,s,a){a.d(s,{Z:function(){return d}});var n=a(3396);const o={class:"mb-5"},t=(0,n.Uk)("登入"),l=(0,n.Uk)("註冊");function r(e,s){const a=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(a,{class:"fs-2 mx-2",to:"/user/login"},{default:(0,n.w5)((()=>[t])),_:1}),(0,n.Wm)(a,{class:"fs-2 mx-2",to:"/user/signup"},{default:(0,n.w5)((()=>[l])),_:1})])}var i=a(89);const c={},u=(0,i.Z)(c,[["render",r],["__scopeId","data-v-35e32c13"]]);var d=u},4354:function(e,s,a){a.r(s),a.d(s,{default:function(){return b}});var n=a(3396),o=a(7139);const t={class:"container"},l={class:"col-10 col-md-6 bg-white d-flex flex-column align-items-center"},r=(0,n._)("h3",{class:"my-5 h1 text-primary fw-bold"},"會員登入",-1),i={class:"form-floating mb-4 w-75"},c=(0,n._)("label",{for:"floatingInput"},"Email 帳號",-1),u={class:"form-floating w-75"},d=(0,n._)("label",{for:"floatingPassword"},"密碼",-1),m=(0,n._)("div",{class:"my-5"},[(0,n._)("button",{type:"submit",class:"btn btn-outline-info btn-lg"},"登入")],-1);function p(e,s,a,p,f,g){const h=(0,n.up)("ToggleLogInSignUp"),w=(0,n.up)("v-field"),v=(0,n.up)("error-message"),b=(0,n.up)("v-form");return(0,n.wg)(),(0,n.iD)("div",t,[(0,n.Wm)(b,{class:"row justify-content-center",onSubmit:g.signIn},{default:(0,n.w5)((({errors:e})=>[(0,n._)("div",l,[r,(0,n.Wm)(h),(0,n._)("div",i,[(0,n.Wm)(w,{type:"email",class:(0,o.C_)(["form-control",{"is-invalid":e["email"]}]),id:"floatingInput",placeholder:"name@example.com",modelValue:f.user.username,"onUpdate:modelValue":s[0]||(s[0]=e=>f.user.username=e),name:"email",rules:"email|required"},null,8,["modelValue","class"]),c,(0,n.Wm)(v,{class:"invalid-feedback",name:"email"})]),(0,n._)("div",u,[(0,n.Wm)(w,{type:"password",name:"密碼",class:(0,o.C_)(["form-control",{"is-invalid":e["密碼"]}]),id:"floatingPassword",placeholder:"Password",modelValue:f.user.password,"onUpdate:modelValue":s[1]||(s[1]=e=>f.user.password=e),rules:"min:8|required"},null,8,["class","modelValue"]),d,(0,n.Wm)(v,{class:"invalid-feedback",name:"密碼"})]),m])])),_:1},8,["onSubmit"])])}var f=a(5601),g=a(2734),h={data(){return{user:{username:"",password:""}}},methods:{async signIn(){try{const e="https://vue3-course-api.hexschool.io/admin/signin",s=await this.$http.post(e,this.user);if(s.data.success){const{token:e,expired:a}=s.data;document.cookie=`petToken=${e}; expires=${new Date(a)}`,this.$router.push("/dashboard/products")}else this.$alert("帳號或密碼錯誤。")}catch(e){(0,g.Z)(this.$alert,e.message)}}},components:{ToggleLogInSignUp:f.Z}},w=a(89);const v=(0,w.Z)(h,[["render",p]]);var b=v}}]);
//# sourceMappingURL=354.29c131ca.js.map