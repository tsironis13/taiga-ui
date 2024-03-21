(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[74131],{74131:(e,t,n)=>{n.r(t),n.d(t,{ExampleMathModule:()=>C});var r=n(76733),a=n(72133),o=n(42932),i=n(87253),u=n(64064),m=n(39854),p=n(20755),c=n(36877),s=n(43894),l=n(17894),d=n(97967),h=n(58733),g=n(90096),f=n(52891),x=n(84418);const v=function(){return{precision:3}};let Z=(()=>{var e;class t{constructor(){this.parametersForm=new a.cw({value:new a.NI(1.005),precision:new a.NI(2)})}get rounded(){const{value:e,precision:t}=this.parametersForm.value;return(0,h.tuiRound)(e??1.005,t??2)}get floored(){const{value:e,precision:t}=this.parametersForm.value;return(0,h.tuiFloor)(e??1.005,t??2)}get ceiled(){const{value:e,precision:t}=this.parametersForm.value;return(0,h.tuiCeil)(e??1.005,t??2)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-math-example-1"]],decls:12,vars:6,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2",3,"tuiNumberFormat"],["formControlName","precision",1,"tui-space_top-2"]],template:function(e,t){1&e&&(p.TgZ(0,"p"),p._uU(1),p.qZA(),p.TgZ(2,"p"),p._uU(3),p.qZA(),p.TgZ(4,"p"),p._uU(5),p.qZA(),p.TgZ(6,"form",0)(7,"div",1)(8,"tui-input-number",2),p._uU(9," value "),p.qZA(),p.TgZ(10,"tui-input-number",3),p._uU(11," precision "),p.qZA()()()),2&e&&(p.xp6(1),p.hij("",t.rounded," = round(value, precision);"),p.xp6(2),p.hij("",t.floored," = floor(value, precision);"),p.xp6(2),p.hij("",t.ceiled," = ceil(value, precision);"),p.xp6(1),p.Q6J("formGroup",t.parametersForm),p.xp6(2),p.Q6J("tuiNumberFormat",p.DdM(5,v)))},dependencies:[g.q,f.g,a._Y,a.JJ,a.JL,a.sg,a.u,x.y],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),t})(),_=(()=>{var e;class t{constructor(){this.parametersForm=new a.cw({value:new a.NI(13),fromInclude:new a.NI(5),toExclude:new a.NI(42)})}get ranged(){const{value:e,fromInclude:t,toExclude:n}=this.parametersForm.value;return(0,h.tuiInRange)(e??13,t??5,n??42)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-math-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","fromInclude",1,"tui-space_top-2"],["formControlName","toExclude",1,"tui-space_top-2"]],template:function(e,t){1&e&&(p._uU(0),p.TgZ(1,"form",0)(2,"div",1)(3,"tui-input-number",2),p._uU(4," value "),p.qZA(),p.TgZ(5,"tui-input-number",3),p._uU(6," fromInclude "),p.qZA(),p.TgZ(7,"tui-input-number",4),p._uU(8," toExclude "),p.qZA()()()),2&e&&(p.hij("",t.ranged," = inRange(value, fromInclude, toExclude); "),p.xp6(1),p.Q6J("formGroup",t.parametersForm))},dependencies:[g.q,f.g,a._Y,a.JJ,a.JL,a.sg,a.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),t})(),b=(()=>{var e;class t{constructor(){this.parametersForm=new a.cw({value:new a.NI(0),min:new a.NI(5),max:new a.NI(42)})}get normalized(){const{value:e,min:t,max:n}=this.parametersForm.value;return(0,h.tuiNormalizeToIntNumber)(e??0,t??5,n??42)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-math-example-3"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(e,t){1&e&&(p._uU(0),p.TgZ(1,"form",0)(2,"div",1)(3,"tui-input-number",2),p._uU(4," value "),p.qZA(),p.TgZ(5,"tui-input-number",3),p._uU(6," min "),p.qZA(),p.TgZ(7,"tui-input-number",4),p._uU(8," max "),p.qZA()()()),2&e&&(p.hij("",t.normalized," = normalizeToIntNumber(value, min, max); "),p.xp6(1),p.Q6J("formGroup",t.parametersForm))},dependencies:[g.q,f.g,a._Y,a.JJ,a.JL,a.sg,a.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),t})(),w=(()=>{var e;class t{constructor(){this.parametersForm=new a.cw({value:new a.NI(3),quantum:new a.NI(2)})}get quantized(){const{value:e,quantum:t}=this.parametersForm.value;return(0,h.tuiQuantize)(e??3,t??2)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-math-example-4"]],decls:7,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","quantum",1,"tui-space_top-2"]],template:function(e,t){1&e&&(p._uU(0),p.TgZ(1,"form",0)(2,"div",1)(3,"tui-input-number",2),p._uU(4," value "),p.qZA(),p.TgZ(5,"tui-input-number",3),p._uU(6," quantum "),p.qZA()()()),2&e&&(p.hij("",t.quantized," = quantize(value, quantum); "),p.xp6(1),p.Q6J("formGroup",t.parametersForm))},dependencies:[g.q,f.g,a._Y,a.JJ,a.JL,a.sg,a.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),t})(),q=(()=>{var e;class t{constructor(){this.parametersForm=new a.cw({value:new a.NI(0),min:new a.NI(5),max:new a.NI(42)})}get clamped(){const{value:e,min:t,max:n}=this.parametersForm.value;return(0,h.tuiClamp)(e??0,t??5,n??42)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-math-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(e,t){1&e&&(p._uU(0),p.TgZ(1,"form",0)(2,"div",1)(3,"tui-input-number",2),p._uU(4," value "),p.qZA(),p.TgZ(5,"tui-input-number",3),p._uU(6," min "),p.qZA(),p.TgZ(7,"tui-input-number",4),p._uU(8," max "),p.qZA()()()),2&e&&(p.hij("",t.clamped," = clamp(value, min, max); "),p.xp6(1),p.Q6J("formGroup",t.parametersForm))},dependencies:[g.q,f.g,a._Y,a.JJ,a.JL,a.sg,a.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),t})();function T(e,t){if(1&e&&(p.TgZ(0,"p"),p._uU(1,"A set of utils to calculate math"),p.qZA(),p.TgZ(2,"tui-doc-example",3),p._UZ(3,"tui-math-example-1"),p.qZA(),p.TgZ(4,"tui-doc-example",4),p._UZ(5,"tui-math-example-2"),p.qZA(),p.TgZ(6,"tui-doc-example",5),p._UZ(7,"tui-math-example-3"),p.qZA(),p.TgZ(8,"tui-doc-example",6),p._UZ(9,"tui-math-example-4"),p.qZA(),p.TgZ(10,"tui-doc-example",7),p._UZ(11,"tui-math-example-5"),p.qZA()),2&e){const e=p.oxw();p.xp6(2),p.Q6J("content",e.example1),p.xp6(2),p.Q6J("content",e.example2),p.xp6(2),p.Q6J("content",e.example3),p.xp6(2),p.Q6J("content",e.example4),p.xp6(2),p.Q6J("content",e.example5)}}function N(e,t){if(1&e&&(p.TgZ(0,"ol",8)(1,"li")(2,"p"),p._uU(3,"Import into component and use:"),p.qZA(),p._UZ(4,"tui-doc-code",9),p.qZA()()),2&e){const e=p.oxw();p.xp6(4),p.Q6J("code",e.importComponentExample)}}let U=(()=>{var e;class t{constructor(){this.importComponentExample=n.e(85334).then(n.t.bind(n,85334,17)),this.example1={TypeScript:n.e(46189).then(n.t.bind(n,46189,17)),HTML:n.e(74089).then(n.t.bind(n,74089,17)),LESS:n.e(7411).then(n.t.bind(n,7411,17))},this.example2={TypeScript:n.e(42395).then(n.t.bind(n,42395,17)),HTML:n.e(20016).then(n.t.bind(n,20016,17)),LESS:n.e(66757).then(n.t.bind(n,66757,17))},this.example3={TypeScript:n.e(6696).then(n.t.bind(n,6696,17)),HTML:n.e(14652).then(n.t.bind(n,14652,17)),LESS:n.e(17637).then(n.t.bind(n,17637,17))},this.example4={TypeScript:n.e(8018).then(n.t.bind(n,8018,17)),HTML:n.e(95511).then(n.t.bind(n,95511,17)),LESS:n.e(44971).then(n.t.bind(n,44971,17))},this.example5={TypeScript:n.e(63624).then(n.t.bind(n,63624,17)),HTML:n.e(72032).then(n.t.bind(n,72032,17)),LESS:n.e(41220).then(n.t.bind(n,41220,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["example-math"]],decls:3,vars:0,consts:[["header","Math utils","package","CDK","path","cdk/utils/math"],["pageTab",""],["pageTab","Setup"],["id","round","description","round, floor and ceil with fixed common problems of the native implementation","heading","round",3,"content"],["id","in-range","description","Checks if the value is in range","heading","inRange",3,"content"],["id","normalize-to-int-number","description","Normalizes any number to an integer within inclusive range","heading","normalizeToIntNumber",3,"content"],["id","quantize","description","Rounds a number to the closest value in a fixed discrete series","heading","quantize",3,"content"],["id","clamp","description","Clamps a value between two inclusive limits","heading","clamp",3,"content"],[1,"b-demo-steps"],["filename","my.component.ts",3,"code"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,T,12,5,"ng-template",1),p.YNc(2,N,5,1,"ng-template",2),p.qZA())},dependencies:[c.c,s.q,l.n,d.f,Z,_,b,w,q],encapsulation:2,changeDetection:0}),t})(),C=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[r.ez,m.TuiInputNumberModule,a.u5,a.UX,i.fV,o.Bz.forChild((0,i.Ve)(U)),u.TuiNumberFormatModule]}),t})()}}]);