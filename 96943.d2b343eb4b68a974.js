(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[96943],{96943:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var i,a=n(84911),o=n(4594),r=n(35548),c=n(97177),s=n(25726),l=n(39527),d=n(42436),g=n(59189);function u(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"tui-legend-item",4,5),r.NdJ("click",(function(){const t=r.CHM(e).index,n=r.oxw();return r.KtG(n.onClick(t))}))("keydown.delete",(function(){const t=r.CHM(e).index,n=r.oxw();return r.KtG(n.toggle(t))})),r._UZ(2,"input",6),r.TgZ(3,"span"),r._uU(4),r.ALo(5,"async"),r.ALo(6,"tuiAmount"),r.qZA(),r.TgZ(7,"tui-icon",7),r.NdJ("click.stop",(function(){const t=r.CHM(e).index,n=r.oxw();return r.KtG(n.toggle(t))})),r.qZA()()}if(2&e){const e=t.$implicit,n=t.index,i=r.MAs(1),a=r.oxw();r.Q6J("color","var(--tui-chart-categorical-0"+n+")")("disabled",!a.isEnabled(n))("text",e),r.xp6(2),r.Q6J("checked",!i.disabled),r.xp6(2),r.Oqu(r.lcZ(5,7,r.xi3(6,9,a.data[n]||0,"RUB"))),r.xp6(3),r.ekj("disable_rotated",i.disabled)}}class m{constructor(){this.alerts=(0,r.f3M)(d.J9F),this.enabled=new Array(5).fill(!0),this.data=[13769,12367,10172,3018,2592],this.sum=(0,l.smb)(...this.data),this.labels=["Axes","Faxes","Taxes","Saxes","Other"]}get value(){return this.getValue(this.data,this.enabled)}isEnabled(e){return this.enabled[e]}toggle(e){this.enabled=this.enabled.map(((t,n)=>n===e?!t:t))}onClick(e){this.isEnabled(e)?this.alerts.open(`Category spending: ${(0,d.lx_)(this.data[e]??0)} ₽`,{label:this.labels[e]}).subscribe():this.toggle(e)}getValue(e,t){return e.map(((e,n)=>t[n]?e:0))}}(i=m).ɵfac=function(e){return new(e||i)},i.ɵcmp=r.Xpm({type:i,selectors:[["ng-component"]],standalone:!0,exportAs:"Example2",features:[r.jDz],decls:6,vars:2,consts:[[1,"wrapper"],["size","s",1,"chart",3,"value"],[1,"legend"],["class","item",3,"color","disabled","text","click","keydown.delete",4,"ngFor","ngForOf"],[1,"item",3,"color","disabled","text","click","keydown.delete"],["item",""],["size","s","tuiCheckbox","","type","checkbox",3,"checked"],["icon","@tui.x",1,"disable",3,"click.stop"]],template:function(e,t){1&e&&(r.TgZ(0,"tui-notification"),r._uU(1," In case you need to be able to toggle a category by separate action, for example, if clicking on it should expand it for more details\n"),r.qZA(),r.TgZ(2,"div",0),r._UZ(3,"tui-ring-chart",1),r.TgZ(4,"div",2),r.YNc(5,u,8,12,"tui-legend-item",3),r.qZA()()),2&e&&(r.xp6(3),r.Q6J("value",t.value),r.xp6(2),r.Q6J("ngForOf",t.labels))},dependencies:[d.tK9,c.rT,g.u3Z,o.sg,c.B1,s.E1,o.Ov,d.RJr],styles:["[_nghost-%COMP%]{--tui-chart-categorical-00: #c779d0;--tui-chart-categorical-01: #feac5e;--tui-chart-categorical-02: #ff5f6d;--tui-chart-categorical-03: #4bc0c8;--tui-chart-categorical-04: #9795cd}.chart[_ngcontent-%COMP%]{pointer-events:none}.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:1rem}@media screen and (max-width: 47.9625em){.wrapper[_ngcontent-%COMP%]{flex-direction:column}}.disable[_ngcontent-%COMP%]{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:.25rem;will-change:transform;color:var(--tui-text-secondary);pointer-events:auto;border:.25rem solid transparent;width:1.5rem;height:1.5rem}.disable[_ngcontent-%COMP%]:hover{color:var(--tui-text-primary)}.disable_rotated[_ngcontent-%COMP%]{transform:rotate(45deg)}.legend[_ngcontent-%COMP%]{margin:0 0 0 2rem;justify-content:center}@media screen and (max-width: 47.9625em){.legend[_ngcontent-%COMP%]{margin:2rem 0 0}}.item[_ngcontent-%COMP%]{margin:0 .5rem .75rem 0}"],changeDetection:0}),(0,a.gn)([l.UMq],m.prototype,"getValue",null);const p=m}}]);