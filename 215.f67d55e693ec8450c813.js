(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{"c/xg":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiIsPresentModule",(function(){return k}));var i=n("An66"),o=n("3kIJ"),a=n("1VvW"),l=n("SVIu"),c=n("l4xa"),s=n("Qq0t"),r=n("dvRg"),p=n("kZht"),d=n("OZlg"),u=n("e0eB"),m=n("yZWP"),h=n("iyc4"),f=n("ZTXN"),S=n("ROBh"),b=(n("5uGe"),n("IdLP"),n("pBDD")),E=n("mW0F");class x{constructor(e){this.delayDurationSelector=e}call(e,t){return t.subscribe(new y(e,this.delayDurationSelector))}}class y extends b.a{constructor(e,t){super(e),this.delayDurationSelector=t,this.completed=!1,this.delayNotifierSubscriptions=[],this.index=0}notifyNext(e,t,n,i,o){this.destination.next(e),this.removeSubscription(o),this.tryComplete()}notifyError(e,t){this._error(e)}notifyComplete(e){const t=this.removeSubscription(e);t&&this.destination.next(t),this.tryComplete()}_next(e){const t=this.index++;try{const n=this.delayDurationSelector(e,t);n&&this.tryDelay(n,e)}catch(n){this.destination.error(n)}}_complete(){this.completed=!0,this.tryComplete(),this.unsubscribe()}removeSubscription(e){e.unsubscribe();const t=this.delayNotifierSubscriptions.indexOf(e);return-1!==t&&this.delayNotifierSubscriptions.splice(t,1),e.outerValue}tryDelay(e,t){const n=Object(E.a)(this,e,t);n&&!n.closed&&(this.destination.add(n),this.delayNotifierSubscriptions.push(n))}tryComplete(){this.completed&&0===this.delayNotifierSubscriptions.length&&this.destination.complete()}}var C=n("Kl/4"),_=n("zV1d"),T=n("2Zzy");function v(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1," count is "),p["\u0275\u0275elementStart"](2,"code"),p["\u0275\u0275text"](3),p["\u0275\u0275pipe"](4,"json"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]().tuiLet;p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](4,1,e))}}function g(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1," count is "),p["\u0275\u0275elementStart"](2,"code"),p["\u0275\u0275text"](3),p["\u0275\u0275pipe"](4,"json"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5," while it's loading "),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]().tuiLet;p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](4,1,e))}}function I(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,v,5,3,"div",2),p["\u0275\u0275pipe"](2,"tuiIsPresent"),p["\u0275\u0275template"](3,g,6,3,"ng-template",null,3,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.tuiLet,n=p["\u0275\u0275reference"](4);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",p["\u0275\u0275pipeBind1"](2,2,e))("ngIfElse",n)}}let L=(()=>{class e{constructor(){var e;this.loadCountSubject=new f.a,this.count$=Object(S.a)(0).pipe((e=()=>this.loadCountSubject,t=>t.lift(new x(e))))}loadCount(){this.loadCountSubject.next(),this.loadCountSubject.complete()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-is-present-example1"]],decls:4,vars:3,consts:[[4,"tuiLet"],["tuiButton","","size","m",1,"tui-space_top-4",3,"click"],[4,"ngIf","ngIfElse"],["loading",""]],template:function(e,t){1&e&&(p["\u0275\u0275template"](0,I,5,4,"ng-container",0),p["\u0275\u0275pipe"](1,"async"),p["\u0275\u0275elementStart"](2,"button",1),p["\u0275\u0275listener"]("click",(function(){return t.loadCount()})),p["\u0275\u0275text"](3," Load count\n"),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("tuiLet",p["\u0275\u0275pipeBind1"](1,1,t.count$))},directives:[C.a,_.a,i.t],pipes:[i.b,T.a,i.k],encapsulation:2,changeDetection:0}),e})();var A=n("u8jZ");const D=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];var O,w,P;function $(e,t){if(1&e&&(p["\u0275\u0275i18nStart"](0,O),p["\u0275\u0275elementStart"](1,"a",3),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-example",4),p["\u0275\u0275i18nAttributes"](4,D),p["\u0275\u0275element"](5,"tui-is-present-example1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275i18nEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example1)}}function j(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",5),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,w),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,P),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleHtml)}}O=$localize`:␟67c77779556907bb5565a9192c475001ea2f2832␟5586864015126821259: Pipe wrapper for ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:IsPresent${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK: function ${"\ufffd#3\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#5\ufffd"}:START_TAG_TUI_IS_PRESENT_EXAMPLE1:${"\ufffd/#5\ufffd"}:CLOSE_TAG_TUI_IS_PRESENT_EXAMPLE1:${"\ufffd/#3\ufffd"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,w=$localize`:␟5c88fd8d348a8c37585d1899f40e40ce6c839d17␟3782193411060426994: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiIsPresentPipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our pipe `,P=$localize`:␟0946c7e6e1334eb04ea506cdd9864968aecc69cb␟412868639087182729:Use pipe in template:`;let N=(()=>{class e{constructor(){this.exampleModule=n.e(1801).then(n.bind(null,"6Uv/")),this.exampleHtml=n.e(1802).then(n.bind(null,"CK0/")),this.example1={TypeScript:n.e(1799).then(n.bind(null,"zXp1")),HTML:n.e(1800).then(n.bind(null,"Fk3y"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-is-present"]],decls:3,vars:0,consts:[["header","IsPresent","package","CDK","type","pipes"],["pageTab",""],["pageTab","Setup"],["tuiLink","","routerLink","/utils/miscellaneous","fragment","isPresent"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,$,6,1,"ng-template",1),p["\u0275\u0275template"](2,j,10,2,"ng-template",2),p["\u0275\u0275elementEnd"]())},directives:[d.a,u.a,m.a,a.e,h.a,L,A.a],encapsulation:2,changeDetection:0}),e})(),k=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,l.m,a.f.forChild(Object(l.x)(N)),o.ReactiveFormsModule,c.Fb,s.Db,r.Gb,r.K,s.bb,c.Jb]]}),e})()}}]);