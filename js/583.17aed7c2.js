"use strict";(self["webpackChunke_commerce"]=self["webpackChunke_commerce"]||[]).push([[583],{1979:function(e,a,t){t.d(a,{Z:function(){return b}});var o=t(3396),n=t(7139),l=t(9242);const s={"aria-label":"Page navigation example"},i={class:"pagination justify-content-center mb-0 pb-3"},d=(0,o._)("span",{"aria-hidden":"true"},"«",-1),p=[d],u=["onClick"],c=(0,o._)("span",{"aria-hidden":"true"},"»",-1),r=[c];function m(e,a,t,d,c,m){return(0,o.wg)(),(0,o.iD)("nav",s,[(0,o._)("ul",i,[(0,o._)("li",{class:(0,n.C_)(["page-item",{disabled:!t.pages.has_pre}])},[(0,o._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:a[0]||(a[0]=(0,l.iM)((a=>e.$emit("emit-pages",t.pages.current_page-1)),["prevent"]))},p)],2),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.pages.total_pages,(a=>((0,o.wg)(),(0,o.iD)("li",{class:(0,n.C_)(["page-item",{active:a===t.pages.current_page}]),key:a},[(0,o._)("a",{class:"page-link",href:"#",onClick:(0,l.iM)((t=>e.$emit("emit-pages",a)),["prevent"])},(0,n.zw)(a),9,u)],2)))),128)),(0,o._)("li",{class:(0,n.C_)(["page-item",{disabled:!t.pages.has_next}])},[(0,o._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:a[1]||(a[1]=(0,l.iM)((a=>e.$emit("emit-pages",t.pages.current_page+1)),["prevent"]))},r)],2)])])}var _={props:["pages"]},h=t(89);const g=(0,h.Z)(_,[["render",m]]);var b=g},8583:function(e,a,t){t.r(a),t.d(a,{default:function(){return T}});var o=t(3396),n=t(7139);const l={class:"text-end"},s={class:"table mt-4"},i=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"名稱"),(0,o._)("th",null,"折扣百分比"),(0,o._)("th",null,"到期日"),(0,o._)("th",null,"是否啟用"),(0,o._)("th",{class:"d-none d-sm-block"},"編輯")])],-1),d={key:0,class:"text-success"},p={key:1,class:"text-muted"},u={class:"d-none d-sm-block"},c={class:"btn-group"},r=["onClick"],m=["onClick"];function _(e,a,t,_,h,g){const b=(0,o.up)("Loading"),C=(0,o.up)("Pagination"),f=(0,o.up)("CouponModal"),v=(0,o.up)("DelModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(b,{loading:h.isLoading},null,8,["loading"]),(0,o._)("div",null,[(0,o._)("div",l,[(0,o._)("button",{class:"btn btn-outline-primary mt-2",onClick:a[0]||(a[0]=e=>g.openCouponModal(!0))}," 新增優惠券 ")]),(0,o._)("table",s,[i,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.coupons,((a,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("td",null,(0,n.zw)(a.title),1),(0,o._)("td",null,(0,n.zw)(a.percent)+"%",1),(0,o._)("td",null,(0,n.zw)(e.$filters.date(a.due_date)),1),(0,o._)("td",null,[a.is_enabled?((0,o.wg)(),(0,o.iD)("span",d,"啟用")):((0,o.wg)(),(0,o.iD)("span",p,"未起用"))]),(0,o._)("td",u,[(0,o._)("div",c,[(0,o._)("button",{class:"btn btn-outline-info btn-sm",onClick:e=>g.openCouponModal(!1,a)},"編輯",8,r),(0,o._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>g.openDelCouponModal(a)},"刪除",8,m)])])])))),128))])])]),(0,o.Wm)(C,{pages:h.pagination,onEmitPages:g.getCoupons},null,8,["pages","onEmitPages"]),(0,o.Wm)(f,{coupon:h.tempCoupon,ref:"couponModal",onUpdateCoupon:g.upsertCoupon},null,8,["coupon","onUpdateCoupon"]),(0,o.Wm)(v,{item:h.tempCoupon,ref:"delModal",onDelItem:g.delCoupon},null,8,["item","onDelItem"])],64)}t(1703);var h=t(2734),g=t(9242);const b={class:"modal fade",id:"couponModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal",role:"dialog"},C={class:"modal-content border-0"},f=(0,o._)("div",{class:"modal-header bg-primary text-white"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"}," 優惠券 "),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},w={class:"mb-3"},k=(0,o._)("label",{for:"title"},[(0,o.Uk)("標題"),(0,o._)("span",{class:"text-danger ms-1"},"*")],-1),y={class:"mb-3"},M=(0,o._)("label",{for:"coupon_code"},[(0,o.Uk)("優惠碼"),(0,o._)("span",{class:"text-danger ms-1"},"*")],-1),$={class:"mb-3"},x=(0,o._)("label",{for:"due_date"},[(0,o.Uk)("到期日"),(0,o._)("span",{class:"text-danger ms-1"},"*")],-1),D={class:"mb-3"},U=(0,o._)("label",{for:"price"},[(0,o.Uk)("折扣百分比"),(0,o._)("span",{class:"text-danger ms-1"},"*")],-1),V={class:"mb-3"},W={class:"form-check"},Z={class:"form-check-label",for:"is_enabled"},L=(0,o.Uk)(" 是否啟用 "),P=(0,o._)("div",{class:"modal-footer"},[(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消"),(0,o._)("button",{type:"submit",class:"btn btn-primary"},"確認 ")],-1);function E(e,a,t,l,s,i){const d=(0,o.up)("v-field"),p=(0,o.up)("error-message"),u=(0,o.up)("v-form");return(0,o.wg)(),(0,o.iD)("div",b,[(0,o.Wm)(u,{class:"modal-dialog",role:"document",onSubmit:a[5]||(a[5]=a=>e.$emit("update-coupon",s.tempCoupon))},{default:(0,o.w5)((({errors:e})=>[(0,o._)("div",C,[f,(0,o._)("div",v,[(0,o._)("div",w,[k,(0,o.Wm)(d,{type:"text",class:(0,n.C_)(["form-control",{"is-invalid":e["標題"]}]),id:"title",name:"標題",rules:"required",modelValue:s.tempCoupon.title,"onUpdate:modelValue":a[0]||(a[0]=e=>s.tempCoupon.title=e),placeholder:"請輸入標題(必填)"},null,8,["class","modelValue"]),(0,o.Wm)(p,{class:"invalid-feedback",name:"標題"})]),(0,o._)("div",y,[M,(0,o.Wm)(d,{type:"text",class:(0,n.C_)(["form-control",{"is-invalid":e["優惠碼"]}]),id:"coupon_code",name:"優惠碼",rules:"required",modelValue:s.tempCoupon.code,"onUpdate:modelValue":a[1]||(a[1]=e=>s.tempCoupon.code=e),placeholder:"請輸入優惠碼(必填)"},null,8,["class","modelValue"]),(0,o.Wm)(p,{class:"invalid-feedback",name:"優惠碼"})]),(0,o._)("div",$,[x,(0,o.Wm)(d,{type:"date",class:(0,n.C_)(["form-control",{"is-invalid":e["到期日"]}]),id:"due_date",name:"到期日",rules:"required",value:s.due_date[0],modelValue:s.due_date,"onUpdate:modelValue":a[2]||(a[2]=e=>s.due_date=e)},null,8,["class","value","modelValue"]),(0,o.Wm)(p,{class:"invalid-feedback",name:"到期日"})]),(0,o._)("div",D,[U,(0,o.Wm)(d,{type:"number",class:(0,n.C_)(["form-control",{"is-invalid":e["折扣百分比"]}]),id:"price",name:"折扣百分比",rules:"required",modelValue:s.tempCoupon.percent,"onUpdate:modelValue":a[3]||(a[3]=e=>s.tempCoupon.percent=e),modelModifiers:{number:!0},placeholder:"請輸入折扣百分比(必填)"},null,8,["class","modelValue"]),(0,o.Wm)(p,{class:"invalid-feedback",name:"折扣百分比"})]),(0,o._)("div",V,[(0,o._)("div",W,[(0,o._)("label",Z,[(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":a[4]||(a[4]=e=>s.tempCoupon.is_enabled=e)},null,512),[[g.e8,s.tempCoupon.is_enabled]]),L])])])]),P])])),_:1})],512)}var q=t(1339),z={props:{coupon:{}},data(){return{modal:{},tempCoupon:{},due_date:""}},watch:{coupon(){this.tempCoupon=this.coupon;const e=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");this.due_date=e},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[q.Z]},N=t(89);const O=(0,N.Z)(z,[["render",E]]);var F=O,H=t(6076),I=t(1979),S=t(1870),Y={data(){return{coupons:[],tempCoupon:{},pagination:{},isNew:!1,isLoading:!1}},components:{CouponModal:F,DelModal:H.Z,Pagination:I.Z,Loading:S.Z},methods:{async getCoupons(e=1){try{const a=`${this.$apiUrl}/admin/coupons?page=${e}`;this.isLoading=!0;const t=await this.$http.get(a);if(!t.data.success)throw new Error("updateOrderFailed");this.coupons=t.data.coupons,this.pagination=t.data.pagination}catch(a){(0,h.Z)(this.$alert,a.message)}finally{this.isLoading=!1}},openCouponModal(e,a){this.tempCoupon=e?{due_date:(new Date).getTime()/1e3,is_enabled:0,percent:100}:{...a},this.isNew=e;const t=this.$refs.couponModal;t.showModal()},async upsertCoupon(e){try{this.tempCoupon=e;let a="post",t=1,o=`${this.$apiUrl}/admin/coupon`;this.isNew||(o=`${this.$apiUrl}/admin/coupon/${e.id}`,a="put",t=this.pagination.current_page);const n=await this.$http[a](o,{data:this.tempCoupon});if(!n.data.success)throw new Error("updateOrderFailed");await this.getCoupons(t)}catch(a){(0,h.Z)(this.$alert,a.message)}finally{const e=this.$refs.couponModal;e.hideModal()}},openDelCouponModal(e){this.tempCoupon={...e};const a=this.$refs.delModal;a.showModal()},async delCoupon(){try{const e=`${this.$apiUrl}/admin/coupon/${this.tempCoupon.id}`,a=await this.$http.delete(e);if(!a.data.success)throw new Error("updateOrderFailed");await this.getCoupons(this.pagination.current_page)}catch(e){(0,h.Z)(this.$alert,e.message)}finally{const e=this.$refs.delModal;e.hideModal()}}},async mounted(){await this.getCoupons()}};const K=(0,N.Z)(Y,[["render",_]]);var T=K}}]);
//# sourceMappingURL=583.17aed7c2.js.map