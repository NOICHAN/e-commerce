"use strict";(self["webpackChunke_commerce"]=self["webpackChunke_commerce"]||[]).push([[753],{2734:function(t,e){const s={updateOrderFailed:"更新失敗,請稍後再試"};e["Z"]=(t,e)=>{s[e]?t(s[e]):t("sorry，目前服務不可用，請稍後再試或聯絡管理員。")}},1870:function(t,e,s){s.d(e,{Z:function(){return d}});var r=s(3396),n=s(8138);const a=(0,r._)("img",{src:n,alt:""},null,-1);function l(t,e,s,n,l,i){const o=(0,r.up)("VLoading");return(0,r.wg)(),(0,r.j4)(o,{active:l.isLoading},{default:(0,r.w5)((()=>[a])),_:1},8,["active"])}var i={props:{loading:{type:Boolean}},data(){return{isLoading:!1}},watch:{loading(){this.isLoading=this.loading}}},o=s(89);const c=(0,o.Z)(i,[["render",l]]);var d=c},8753:function(t,e,s){s.r(e),s.d(e,{default:function(){return W}});var r=s(3396),n=s(7139),a=s(9242);const l=t=>((0,r.dD)("data-v-c37f5518"),t=t(),(0,r.Cn)(),t),i={class:"row flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start bg-white py-5"},o={class:"col-10 col-md-8 col-lg-5"},c=l((()=>(0,r._)("h3",{class:"text-warning mb-3"},[(0,r._)("i",{class:"bi bi-card-checklist"}),(0,r.Uk)(" 確認資料 ")],-1))),d=l((()=>(0,r._)("p",null,"感謝您訂購毛孩一家一商品，我們已收收訂單，確認付款後會立即準備出貨。",-1))),u=l((()=>(0,r._)("p",null,"以下是您的個人資料，請詳細核對，如有誤造成無法至指定日送達，我們將不負任何責任。",-1))),g={class:"table mb-5"},p={class:"mb-3"},_=l((()=>(0,r._)("th",null,"Email",-1))),w=l((()=>(0,r._)("th",null,"姓名",-1))),f=l((()=>(0,r._)("th",null,"收件人電話",-1))),h=l((()=>(0,r._)("th",null,"收件人地址",-1))),m={class:"col-10 col-md-8 col-lg-5"},y=l((()=>(0,r._)("h3",{class:"text-warning mb-3"},[(0,r._)("i",{class:"bi bi-credit-card-2-back"}),(0,r.Uk)(" 訂單資訊 ")],-1))),b={class:"col-4"},x=["src"],v={class:"col-8 d-flex flex-column justify-content-between px-3 body"},$={class:"d-flex justify-content-between align-items-center"},k={class:"mb-0"},L={class:"text-nowrap"},z={class:"align-self-end"},O={class:"d-flex justify-content-between align-items-center fs-5 mb-2"},D=l((()=>(0,r._)("strong",{class:"text-nowrap"},"總計",-1))),Z={key:0,class:"text-nowrap text-success"},j={key:1,class:"text-nowrap text-danger"},I={class:"d-flex justify-content-between align-items-center fs-5"},C=l((()=>(0,r._)("strong",{class:"text-nowrap"},"付款狀態",-1))),U={key:0,class:"text-success"},F={key:1,class:"text-danger text-nowrap"},E={class:"text-end mt-5"};function H(t,e,s,l,H,Y){const q=(0,r.up)("Loading");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(q,{loading:H.isLoading},null,8,["loading"]),(0,r._)("div",i,[(0,r._)("div",o,[c,d,u,(0,r._)("table",g,[(0,r._)("tbody",null,[(0,r._)("tr",p,[_,(0,r._)("td",null,[(0,r._)("span",null,(0,n.zw)(H.order.user.email),1)])]),(0,r._)("tr",null,[w,(0,r._)("td",null,[(0,r._)("span",null,(0,n.zw)(H.order.user.name),1)])]),(0,r._)("tr",null,[f,(0,r._)("td",null,[(0,r._)("span",null,(0,n.zw)(H.order.user.tel),1)])]),(0,r._)("tr",null,[h,(0,r._)("td",null,[(0,r._)("span",null,(0,n.zw)(H.order.user.address),1)])])])])]),(0,r._)("div",m,[y,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(H.order.products,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"row mb-4 g-0",key:e.id},[(0,r._)("div",b,[(0,r._)("img",{src:e.product.imageUrl,alt:"item.product.title"},null,8,x)]),(0,r._)("div",v,[(0,r._)("div",$,[(0,r._)("h4",k,(0,n.zw)(e.product.title),1),(0,r._)("strong",L,"X "+(0,n.zw)(e.qty),1)]),(0,r._)("span",z,"$ "+(0,n.zw)(t.$filters.currency(e.product.price)),1)])])))),128)),(0,r._)("div",O,[D,H.order.is_paid?((0,r.wg)(),(0,r.iD)("strong",Z," $ "+(0,n.zw)(t.$filters.currency(H.order.total)),1)):((0,r.wg)(),(0,r.iD)("strong",j," $ "+(0,n.zw)(t.$filters.currency(H.order.total)),1))]),(0,r._)("div",I,[C,H.order.is_paid?((0,r.wg)(),(0,r.iD)("strong",U,"付款完成")):((0,r.wg)(),(0,r.iD)("strong",F,"尚未付款"))]),(0,r.wy)((0,r._)("div",E,[(0,r._)("button",{type:"button",class:"btn btn-outline-info",onClick:e[0]||(e[0]=(...t)=>Y.payOrder&&Y.payOrder(...t))},"確認付款 ")],512),[[a.F8,!H.order.is_paid]])])])],64)}s(1703);var Y=s(2734),q=s(1870),B={data(){return{order:{user:{}},orderId:"",isLoading:!1}},components:{Loading:q.Z},methods:{async getOrder(){try{const t=`${this.$apiUrl}/order/${this.orderId}`;this.isLoading=!0;const e=await this.$http.get(t);if(!e.data.success)throw new Error("updateOrderFailed");this.order=e.data.order}catch(t){(0,Y.Z)(this.$alert,t.message)}finally{this.isLoading=!1}},async payOrder(){try{const t=`${this.$apiUrl}/pay/${this.orderId}`,e=await this.$http.post(t);if(!e.data.success)throw new Error("updateOrderFailed");await this.getOrder()}catch(t){(0,Y.Z)(this.$alert,t.message)}}},async mounted(){this.orderId=this.$route.params.orderId,await this.getOrder()}},K=s(89);const V=(0,K.Z)(B,[["render",H],["__scopeId","data-v-c37f5518"]]);var W=V},8138:function(t,e,s){t.exports=s.p+"img/loadingCat.d60cde16.gif"}}]);
//# sourceMappingURL=753.f6385856.js.map