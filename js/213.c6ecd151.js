"use strict";(self["webpackChunke_commerce"]=self["webpackChunke_commerce"]||[]).push([[213],{1979:function(e,t,l){l.d(t,{Z:function(){return w}});var a=l(3396),r=l(7139),s=l(9242);const d={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center mb-0 pb-3"},i=(0,a._)("span",{"aria-hidden":"true"},"«",-1),o=[i],u=["onClick"],c=(0,a._)("span",{"aria-hidden":"true"},"»",-1),p=[c];function _(e,t,l,i,c,_){return(0,a.wg)(),(0,a.iD)("nav",d,[(0,a._)("ul",n,[(0,a._)("li",{class:(0,r.C_)(["page-item",{disabled:!l.pages.has_pre}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,s.iM)((t=>e.$emit("emit-pages",l.pages.current_page-1)),["prevent"]))},o)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(t=>((0,a.wg)(),(0,a.iD)("li",{class:(0,r.C_)(["page-item",{active:t===l.pages.current_page}]),key:t},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((l=>e.$emit("emit-pages",t)),["prevent"])},(0,r.zw)(t),9,u)],2)))),128)),(0,a._)("li",{class:(0,r.C_)(["page-item",{disabled:!l.pages.has_next}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,s.iM)((t=>e.$emit("emit-pages",l.pages.current_page+1)),["prevent"]))},p)],2)])])}var m={props:["pages"]},h=l(89);const g=(0,h.Z)(m,[["render",_]]);var w=g},7213:function(e,t,l){l.r(t),l.d(t,{default:function(){return ce}});var a=l(3396),r=l(7139),s=l(9242);const d={class:"table"},n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"購買時間"),(0,a._)("th",null,"Email"),(0,a._)("th",null,"購買款項"),(0,a._)("th",null,"應付金額"),(0,a._)("th",null,"是否付款"),(0,a._)("th",{class:"d-none d-sm-block border-0"},"編輯")])],-1),i={class:"text-break"},o={class:"text-break"},u={class:"list-unstyled"},c={class:"text-nowrap"},p={class:"form-check form-switch"},_=["for"],m=["id","onUpdate:modelValue","onChange"],h={key:0},g={key:1},w={class:"d-none d-sm-table-cell"},b={class:"btn-group"},f=["onClick"],y=["onClick"];function O(e,t,l,O,k,$){const v=(0,a.up)("Loading"),D=(0,a.up)("Pagination"),M=(0,a.up)("OrderModal"),z=(0,a.up)("DelModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(v,{loading:k.isLoading},null,8,["loading"]),(0,a._)("table",d,[n,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(k.orders,((t,l)=>((0,a.wg)(),(0,a.iD)("tr",{key:l},[(0,a._)("td",i,(0,r.zw)(e.$filters.date(t.create_at)),1),(0,a._)("td",o,(0,r.zw)(t.user.email),1),(0,a._)("td",null,[(0,a._)("ul",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.products,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t},[(0,a._)("p",null,(0,r.zw)(e.product.title),1),(0,a._)("p",null," 數量："+(0,r.zw)(e.qty)+" "+(0,r.zw)(e.unit),1)])))),128))])]),(0,a._)("td",c,"$ "+(0,r.zw)(e.$filters.currency(t.total)),1),(0,a._)("td",null,[(0,a._)("div",p,[(0,a._)("label",{class:"form-check-label",for:`paidSwitch${t.id}`},[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${t.id}`,"onUpdate:modelValue":e=>t.is_paid=e,onChange:e=>$.updateOrder(t)},null,40,m),[[s.e8,t.is_paid]])],8,_),t.is_paid?((0,a.wg)(),(0,a.iD)("span",h,"已付款")):((0,a.wg)(),(0,a.iD)("span",g,"未付款"))])]),(0,a._)("td",w,[(0,a._)("div",b,[(0,a._)("button",{class:"btn btn-outline-info btn-sm",onClick:e=>$.openOrderModal(t)},"檢視",8,f),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>$.openDelOrderModal(t)},"刪除",8,y)])])])))),128))])]),(0,a.Wm)(D,{pages:k.pagination,onEmitPages:$.getOrders},null,8,["pages","onEmitPages"]),(0,a.Wm)(M,{order:k.tempOrder,ref:"orderModal"},null,8,["order"]),(0,a.Wm)(z,{item:k.tempOrder,ref:"delModal",onDelItem:$.delOrder},null,8,["item","onDelItem"])],64)}l(1703);const k={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},$={class:"modal-dialog modal-xl",role:"document"},v={class:"modal-content border-0"},D=(0,a._)("div",{class:"modal-header bg-primary text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"訂單細節")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},z={class:"row"},x={class:"col-md-4"},C=(0,a._)("h3",null,"用戶資料",-1),Z={class:"table"},L={key:0},E=(0,a._)("th",{style:{width:"100px"}},"姓名",-1),P=(0,a._)("th",null,"Email",-1),H=(0,a._)("th",null,"電話",-1),U=(0,a._)("th",null,"地址",-1),Y={class:"col-md-8"},K=(0,a._)("h3",null,"訂單細節",-1),W={class:"table"},q=(0,a._)("th",{style:{width:"100px"}},"訂單編號",-1),F=(0,a._)("th",null,"下單時間",-1),j=(0,a._)("th",null,"付款時間",-1),I={key:0},S={key:1},V=(0,a._)("th",null,"付款狀態",-1),N={key:0,class:"text-success"},A={key:1,class:"text-muted"},B=(0,a._)("th",null,"總金額",-1),G=(0,a._)("h3",null,"選購商品",-1),J={class:"table"},Q=(0,a._)("thead",null,[(0,a._)("tr")],-1),R={class:"text-end"},T=(0,a._)("div",{class:"modal-footer"},[(0,a._)("button",{type:"button",class:"btn btn-outline-primary","data-bs-dismiss":"modal"},"關閉 ")],-1);function X(e,t,l,s,d,n){return(0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",$,[(0,a._)("div",v,[D,(0,a._)("div",M,[(0,a._)("div",z,[(0,a._)("div",x,[C,(0,a._)("table",Z,[d.tempOrder.user?((0,a.wg)(),(0,a.iD)("tbody",L,[(0,a._)("tr",null,[E,(0,a._)("td",null,(0,r.zw)(d.tempOrder.user.name),1)]),(0,a._)("tr",null,[P,(0,a._)("td",null,(0,r.zw)(d.tempOrder.user.email),1)]),(0,a._)("tr",null,[H,(0,a._)("td",null,(0,r.zw)(d.tempOrder.user.tel),1)]),(0,a._)("tr",null,[U,(0,a._)("td",null,(0,r.zw)(d.tempOrder.user.address),1)])])):(0,a.kq)("",!0)])]),(0,a._)("div",Y,[K,(0,a._)("table",W,[(0,a._)("tbody",null,[(0,a._)("tr",null,[q,(0,a._)("td",null,(0,r.zw)(d.tempOrder.id),1)]),(0,a._)("tr",null,[F,(0,a._)("td",null,(0,r.zw)(e.$filters.date(d.tempOrder.create_at)),1)]),(0,a._)("tr",null,[j,(0,a._)("td",null,[d.tempOrder.paid_date?((0,a.wg)(),(0,a.iD)("span",I,(0,r.zw)(e.$filters.date(d.tempOrder.paid_date)),1)):((0,a.wg)(),(0,a.iD)("span",S,"時間不正確"))])]),(0,a._)("tr",null,[V,(0,a._)("td",null,[d.tempOrder.is_paid?((0,a.wg)(),(0,a.iD)("strong",N,"已付款")):((0,a.wg)(),(0,a.iD)("span",A,"尚未付款"))])]),(0,a._)("tr",null,[B,(0,a._)("td",null,(0,r.zw)(e.$filters.currency(d.tempOrder.total)),1)])])]),G,(0,a._)("table",J,[Q,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.tempOrder.products,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("th",null,(0,r.zw)(t.product.title),1),(0,a._)("td",null,(0,r.zw)(t.qty)+" / "+(0,r.zw)(t.product.unit),1),(0,a._)("td",R,(0,r.zw)(e.$filters.currency(t.final_total)),1)])))),128))])])])])]),T])])],512)}var ee=l(1339),te={props:{order:{type:Object,default(){return{}}}},data(){return{modal:{},tempOrder:{}}},watch:{order(){this.tempOrder=this.order}},mixins:[ee.Z]},le=l(89);const ae=(0,le.Z)(te,[["render",X]]);var re=ae,se=l(6076),de=l(1979),ne=l(2734),ie=l(1870),oe={data(){return{orders:[],pagination:{},tempOrder:{},isLoading:!1}},components:{OrderModal:re,DelModal:se.Z,Pagination:de.Z,Loading:ie.Z},methods:{async getOrders(e=1){try{const t=`${this.$apiUrl}/admin/orders?page=${e}`;this.isLoading=!0;const l=await this.$http.get(t);if(!l.data.success)throw new Error("updateOrderFailed");this.orders=l.data.orders,this.pagination=l.data.pagination}catch(t){(0,ne.Z)(this.$alert,t.message)}finally{this.isLoading=!1}},openOrderModal(e){this.tempOrder={...e};const t=this.$refs.orderModal;t.showModal()},async updateOrder(e){try{const t=`${this.$apiUrl}/admin/order/${e.id}`,l={is_paid:e.is_paid},a=await this.$http.put(t,{data:l});if(!a.data.success)throw new Error("updateOrderFailed")}catch(t){(0,ne.Z)(this.$alert,t.message)}finally{await this.getOrders(this.pagination.current_page)}},openDelOrderModal(e){this.tempOrder={...e};const t=this.$refs.delModal;t.showModal()},async delOrder(){try{const e=`${this.$apiUrl}/admin/order/${this.tempOrder.id}`,t=await this.$http.delete(e);if(!t.data.success)throw new Error("updateOrderFailed");await this.getOrders(this.pagination.current_page)}catch(e){(0,ne.Z)(this.$alert,e.message)}finally{const e=this.$refs.delModal;e.hideModal()}}},async mounted(){await this.getOrders()}};const ue=(0,le.Z)(oe,[["render",O]]);var ce=ue}}]);
//# sourceMappingURL=213.c6ecd151.js.map