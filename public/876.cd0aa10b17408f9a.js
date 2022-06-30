"use strict";(self.webpackChunkfirebaseapp=self.webpackChunkfirebaseapp||[]).push([[876],{4876:(I,u,l)=>{l.r(u),l.d(u,{ScheduleModule:()=>U});var d=l(441),e=l(5e3),h=l(7078),p=l(8050),_=l(4847),m=l(7955),a=l(9808);let g=(()=>{class s{constructor(){this.offset=0,this.move=new e.vpe}ngOnInit(){}moveDate(t){this.offset=t,this.move.emit(t)}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-schedule-controls"]],inputs:{selected:"selected"},outputs:{move:"move"},decls:8,vars:4,consts:[[1,"d-flex","justify-content-between","bg-light","align-items-center"],[1,"btn","btn-outline-info",3,"click"],[1,"bi","bi-arrow-bar-left"],[1,"bi","bi-arrow-bar-right"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.moveDate(n.offset-1)}),e._UZ(2,"i",2),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"button",1),e.NdJ("click",function(){return n.moveDate(n.offset+1)}),e._UZ(7,"i",3),e.qZA()()),2&t&&(e.xp6(4),e.hij("",e.xi3(5,1,n.selected,"mediumDate")," "))},pipes:[a.uU],styles:[""],changeDetection:0}),s})();function f(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"button",2),e.NdJ("click",function(){const o=e.CHM(t).index;return e.oxw().selectDay(o)}),e.TgZ(1,"span"),e._uU(2),e.qZA()()}if(2&s){const t=i.$implicit,n=i.index,c=e.oxw();e.ekj("active",n===c.selected),e.xp6(2),e.hij(" ",t," ")}}let S=(()=>{class s{constructor(){this.select=new e.vpe,this.days=["M","T","W","T","F","S","S"]}selectDay(t){this.select.emit(t)}ngOnInit(){}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-schedule-days"]],inputs:{selected:"selected"},outputs:{select:"select"},decls:2,vars:1,consts:[[1,"d-flex","justify-content-between","mt-4"],["class","btn btn-outline-info rounded-circle","style","width: 40px ;height: 40px;",3,"active","click",4,"ngFor","ngForOf"],[1,"btn","btn-outline-info","rounded-circle",2,"width","40px","height","40px",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,f,3,3,"button",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",n.days))},directives:[a.sg],styles:[""],changeDetection:0}),s})();var v=l(1212);function y(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",5),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return c.onSelect("meals",c.section.meals)}),e.TgZ(1,"span"),e._uU(2),e.ALo(3,"join"),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(2),e.hij(" ",e.lcZ(3,1,t.section.meals)," ")}}function T(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().onSelect("meals")}),e.TgZ(1,"span",7),e._UZ(2,"i",8),e.qZA(),e.TgZ(3,"div"),e._uU(4,"Assign Meal"),e.qZA()()}}function Z(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",5),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return c.onSelect("workouts",c.section.workouts)}),e._uU(1),e.TgZ(2,"span"),e._uU(3),e.ALo(4,"join"),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(1),e.hij(" ",t.name," "),e.xp6(2),e.hij(" ",e.lcZ(4,2,t.section.workouts)," ")}}function C(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().onSelect("workouts")}),e.TgZ(1,"span",7),e._UZ(2,"i",8),e.qZA(),e.TgZ(3,"div"),e._uU(4,"Assign workout"),e.qZA()()}}let x=(()=>{class s{constructor(){this.select=new e.vpe}onSelect(t,n=[]){this.select.emit({type:t,assigned:n,data:this.section})}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["schedule-section"]],inputs:{name:"name",section:"section"},outputs:{select:"select"},decls:10,vars:7,consts:[[1,"mt-3"],[1,"border","p-2","bg-primary","text-light"],[3,"click",4,"ngIf","ngIfElse"],["addMeal",""],["addWorkout",""],[3,"click"],[1,"d-flex","my-3","align-items-center",3,"click"],[1,"btn","d-flex","me-2","justify-content-center","align-items-center","btn-outline-primary","rounded-circle",2,"height","35px","width","35px"],[1,"bi","bi-plus-lg"]],template:function(t,n){if(1&t&&(e._UZ(0,"div",0),e.TgZ(1,"div",1),e._uU(2),e.ALo(3,"uppercase"),e.qZA(),e.YNc(4,y,4,3,"div",2),e.YNc(5,T,5,0,"ng-template",null,3,e.W1O),e.YNc(7,Z,5,4,"div",2),e.YNc(8,C,5,0,"ng-template",null,4,e.W1O)),2&t){const c=e.MAs(6),o=e.MAs(9);e.xp6(2),e.hij(" ",e.lcZ(3,5,n.name)," "),e.xp6(2),e.Q6J("ngIf",n.section.meals)("ngIfElse",c),e.xp6(3),e.Q6J("ngIf",n.section.workouts)("ngIfElse",o)}},directives:[a.O5],pipes:[a.gd,v.A],encapsulation:2}),s})();function A(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"schedule-section",3),e.NdJ("select",function(c){const r=e.CHM(t).$implicit;return e.oxw().selectSection(c,r.key)}),e.qZA()}if(2&s){const t=i.$implicit,n=e.oxw();e.Q6J("name",t.name)("section",n.getSection(t.key))}}let k=(()=>{class s{constructor(){this.sections=[{key:"morning",name:"Morning"},{key:"launch",name:"Launch"},{key:"evening",name:"Evening"},{key:"snacks",name:"Snacks and Drinks"}],this.change=new e.vpe,this.select=new e.vpe,this.date=new Date}set date(t){this.selectedDate=new Date(t.getTime())}ngOnChanges(t){this.selectedDayIndex=this.getToday(this.selectedDate),this.selectedWeek=this.getStartOfWeek(new Date(this.selectedDate))}selectDay(t){const n=new Date(this.selectedWeek);n.setDate(n.getDate()+t),this.change.emit(n)}getToday(t){let n=t.getDay()-1;return n<0&&(n=6),n}onChange(t){const n=this.getStartOfWeek(new Date),c=new Date(n.getFullYear(),n.getMonth(),n.getDate());c.setDate(c.getDate()+7*t),this.change.emit(c)}getSection(t){return this.items&&this.items[t]||{}}getStartOfWeek(t){const n=t.getDay(),c=t.getDate()-n+(0===n?-6:1);return new Date(t.setDate(c))}selectSection({type:t,assigned:n,data:c},o){const r=this.selectedDate;console.log("dataeeeeee",r),this.select.emit({type:t,assigned:n,section:o,day:r,data:c})}ngOnInit(){}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-schedule-calendar"]],inputs:{date:"date",items:"items"},outputs:{change:"change",select:"select"},features:[e.TTD],decls:4,vars:3,consts:[[3,"selected","move"],[3,"selected","select"],[3,"name","section","select",4,"ngFor","ngForOf"],[3,"name","section","select"]],template:function(t,n){1&t&&(e.TgZ(0,"app-schedule-controls",0),e.NdJ("move",function(o){return n.onChange(o)}),e.qZA(),e._UZ(1,"hr"),e.TgZ(2,"app-schedule-days",1),e.NdJ("select",function(o){return n.selectDay(o)}),e.qZA(),e.YNc(3,A,1,2,"schedule-section",2)),2&t&&(e.Q6J("selected",n.selectedDate),e.xp6(2),e.Q6J("selected",n.selectedDayIndex),e.xp6(1),e.Q6J("ngForOf",n.sections))},directives:[g,S,a.sg,x],styles:[""]}),s})();function b(s,i){1&s&&(e.TgZ(0,"span"),e._uU(1," Nothing here "),e.qZA())}function w(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",5),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw().toggleItem(o.name)}),e._uU(1),e.qZA()}if(2&s){const t=i.$implicit,n=e.oxw();e.ekj("active",n.exists(t.name)),e.xp6(1),e.hij(" ",t.name," ")}}let D=(()=>{class s{constructor(){this.update=new e.vpe,this.cancel=new e.vpe}getRoute(t){return[`../${t}/new`]}ngOnInit(){this.selected=[...this.section.assigned]}exists(t){return!!~this.selected.indexOf(t)}updateAssign(){this.update.emit({[this.section.type]:this.selected})}cancelAssign(){this.cancel.emit()}toggleItem(t){this.exists(t)&&(this.selected=this.selected.filter(n=>n!==t)),this.selected=[...this.selected,t]}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["schedule-assign"]],inputs:{section:"section",list:"list"},outputs:{update:"update",cancel:"cancel"},decls:13,vars:5,consts:[[1,"btn","btn-primary",3,"routerLink"],[4,"ngIf"],[3,"active","click",4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger",3,"click"],[3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div")(1,"h1"),e._uU(2),e.qZA(),e.TgZ(3,"button",0),e._uU(4),e.qZA(),e.TgZ(5,"div"),e.YNc(6,b,2,0,"span",1),e.YNc(7,w,2,3,"div",2),e.TgZ(8,"div")(9,"button",3),e.NdJ("click",function(){return n.updateAssign()}),e._uU(10," Update "),e.qZA(),e.TgZ(11,"button",4),e.NdJ("click",function(){return n.cancelAssign()}),e._uU(12," Cancel "),e.qZA()()()()),2&t&&(e.xp6(2),e.hij(" Assign ",n.section.type,""),e.xp6(1),e.Q6J("routerLink",n.getRoute(n.section.type)),e.xp6(1),e.hij(" New ",n.section.type," "),e.xp6(2),e.Q6J("ngIf",!(null!=n.list&&n.list.length)),e.xp6(1),e.Q6J("ngForOf",n.list))},directives:[d.rH,a.O5,a.sg],styles:[""]}),s})();function J(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"schedule-assign",6),e.NdJ("update",function(c){return e.CHM(t),e.oxw().assignItem(c)})("cancel",function(){return e.CHM(t),e.oxw().closeAssign()}),e.ALo(1,"async"),e.ALo(2,"async"),e.qZA()}if(2&s){const t=e.oxw();e.Q6J("section",e.lcZ(1,2,t.selected$))("list",e.lcZ(2,4,t.list$))}}let F=(()=>{class s{constructor(t,n,c,o){this.store=t,this.scheduleService=n,this.mealService=c,this.workoutService=o,this.open=!1,this.subscription=[]}ngOnInit(){this.date$=this.store.select("date"),this.schedule$=this.store.select("schedule"),this.selected$=this.store.select("selected"),this.list$=this.store.select("list"),this.subscription=[this.scheduleService.schedule$.subscribe(),this.scheduleService.selected$.subscribe(),this.scheduleService.items$.subscribe(),this.mealService.meals$.subscribe(),this.workoutService.workouts$.subscribe(),this.scheduleService.list$.subscribe()]}ngOnDestroy(){this.subscription.forEach(t=>t.unsubscribe())}changeDate(t){this.scheduleService.updateDate(t)}changeSection(t){console.log(t),this.open=!0,this.scheduleService.selectSection(t)}assignItem(t){this.scheduleService.updateItems(t),this.closeAssign()}closeAssign(){this.open=!1}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(h.y),e.Y36(p.u),e.Y36(_.Q),e.Y36(m.$))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-schedule"]],decls:8,vars:7,consts:[[1,"container"],[1,"row"],[1,"col-md-5","offset-md-3"],[1,"bg-light","p-3","rounded-2","shadow-sm"],[3,"date","items","select","change"],[3,"section","list","update","cancel",4,"ngIf"],[3,"section","list","update","cancel"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"app-schedule-calendar",4),e.NdJ("select",function(o){return n.changeSection(o)})("change",function(o){return n.changeDate(o)}),e.ALo(5,"async"),e.ALo(6,"async"),e.qZA(),e.YNc(7,J,3,6,"schedule-assign",5),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("date",e.lcZ(5,3,n.date$))("items",e.lcZ(6,5,n.schedule$)),e.xp6(3),e.Q6J("ngIf",n.open))},directives:[k,a.O5,D],pipes:[a.Ov],styles:[""]}),s})();var N=l(4774);const O=[{path:"",component:F}];let U=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[],imports:[[a.ez,N.m.forRoot(),d.Bz.forChild(O)]]}),s})()}}]);