(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{h9W5:function(t,r,e){"use strict";e.r(r),e.d(r,"OrdersModule",(function(){return P}));var s=e("ofXK"),o=e("PCNd"),c=e("tyNb"),i=e("fXoL"),b=e("tc9g"),n=e("AytR"),d=e("tk/3");let a=(()=>{class t{constructor(t){this.http=t,this.baseUrl=n.a.apiUrl}getOrdersForUser(){return this.http.get(this.baseUrl+"orders")}getOrderDetailed(t){return this.http.get(this.baseUrl+"orders/"+t)}}return t.\u0275fac=function(r){return new(r||t)(i.Ub(d.b))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=e("GJcC"),u=e("PoZw");function p(t,r){if(1&t&&(i.Qb(0,"div",2),i.Qb(1,"div",3),i.Lb(2,"app-basket-summary",4),i.Pb(),i.Qb(3,"div",5),i.Lb(4,"app-order-totals",6),i.Pb(),i.Pb()),2&t){const t=i.Zb();i.zb(2),i.fc("items",t.order.orderItems)("isBasket",!1)("isOrder",!0),i.zb(2),i.fc("shippingPrice",t.order.shippingPrice)("subtotal",t.order.subtotal)("total",t.order.total)}}let h=(()=>{class t{constructor(t,r,e){this.route=t,this.breadcrumbService=r,this.ordersService=e,this.breadcrumbService.set("@OrderDetailed","")}ngOnInit(){this.ordersService.getOrderDetailed(+this.route.snapshot.paramMap.get("id")).subscribe(t=>{this.order=t,this.breadcrumbService.set("@OrderDetailed",`Order# ${t.id} - ${t.status}`)},t=>{console.log(t)})}}return t.\u0275fac=function(r){return new(r||t)(i.Kb(c.a),i.Kb(b.c),i.Kb(a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-order-detailed"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-8"],[3,"items","isBasket","isOrder"],[1,"col-4"],[3,"shippingPrice","subtotal","total"]],template:function(t,r){1&t&&(i.Qb(0,"div",0),i.wc(1,p,5,6,"div",1),i.Pb()),2&t&&(i.zb(1),i.fc("ngIf",r.order))},directives:[s.m,l.a,u.a],styles:[""]}),t})();function f(t,r){if(1&t&&(i.Qb(0,"tr",6),i.Qb(1,"th"),i.yc(2),i.Pb(),i.Qb(3,"td"),i.yc(4),i.ac(5,"date"),i.Pb(),i.Qb(6,"td"),i.yc(7),i.ac(8,"currency"),i.Pb(),i.Qb(9,"td"),i.yc(10),i.Pb(),i.Pb()),2&t){const t=r.$implicit;i.hc("routerLink","/orders/",t.id,""),i.zb(2),i.Ac("# ",t.id,""),i.zb(2),i.zc(i.cc(5,5,t.orderDate,"medium")),i.zb(3),i.zc(i.bc(8,8,t.total)),i.zb(3),i.zc(t.status)}}const m=[{path:"",component:(()=>{class t{constructor(t){this.ordersService=t}ngOnInit(){this.getOrders()}getOrders(){this.ordersService.getOrdersForUser().subscribe(t=>{this.orders=t},t=>{console.log(t)})}}return t.\u0275fac=function(r){return new(r||t)(i.Kb(a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-orders"]],decls:16,vars:1,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-12"],[1,"table","table-hover",2,"cursor","pointer"],[1,"thead-light"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,r){1&t&&(i.Qb(0,"div",0),i.Qb(1,"div",1),i.Qb(2,"div",2),i.Qb(3,"table",3),i.Qb(4,"thead",4),i.Qb(5,"tr"),i.Qb(6,"th"),i.yc(7,"Order"),i.Pb(),i.Qb(8,"th"),i.yc(9,"Date"),i.Pb(),i.Qb(10,"th"),i.yc(11,"Total"),i.Pb(),i.Qb(12,"th"),i.yc(13,"Status"),i.Pb(),i.Pb(),i.Pb(),i.Qb(14,"tbody"),i.wc(15,f,11,10,"tr",5),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb()),2&t&&(i.zb(15),i.fc("ngForOf",r.orders))},directives:[s.l,c.d],pipes:[s.f,s.d],styles:[""]}),t})()},{path:":id",component:h,data:{breadcrumb:{alias:"OrderDetailed"}}}];let g=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(r){return new(r||t)},imports:[[c.g.forChild(m)],c.g]}),t})(),P=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(r){return new(r||t)},imports:[[s.c,g,o.a]]}),t})()}}]);