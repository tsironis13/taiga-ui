(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{"8bCa":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiValidatorModule",(function(){return F}));var a=n("An66"),o=n("3kIJ"),l=n("1VvW"),r=n("SVIu"),i=n("l4xa"),c=n("Qq0t"),m=n("dvRg"),d=n("kZht"),p=n("OZlg"),u=n("e0eB"),s=n("iyc4"),f=n("GdrL"),b=n("71sB"),g=n("TjIJ"),h=n("jTus"),C=n("fP8s"),E=n("OWJi"),v=n("EmN8"),x=n("bYz0"),y=n("LhIY");function S(e,t){if(1&e&&d["\u0275\u0275element"](0,"tui-data-list-wrapper",6),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("items",e.items)}}function w(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-input",7),d["\u0275\u0275text"](1," Contact "),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("tuiValidator",e.validator)}}function T(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-input-phone",8),d["\u0275\u0275text"](1,"Contact"),d["\u0275\u0275elementEnd"]())}const M=function(){return{standalone:!0}};let V=(()=>{class e{constructor(){this.items=["Email","Phone"],this.type=this.items[0],this.group=new o.FormGroup({name:new o.FormControl("",o.Validators.required),contact:new o.FormControl("",o.Validators.required)}),this.validator=o.Validators.email}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-validator-example-1"]],decls:9,vars:6,consts:[[1,"b-form",3,"formGroup"],["formControlName","name"],[1,"tui-space_vertical-3",3,"ngModelOptions","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],["formControlName","contact",3,"tuiValidator",4,"ngIf","ngIfElse"],["phone",""],[3,"items"],["formControlName","contact",3,"tuiValidator"],["formControlName","contact"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"tui-input",1),d["\u0275\u0275text"](2,"Name"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-select",2),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.type=e})),d["\u0275\u0275text"](4," Connection "),d["\u0275\u0275template"](5,S,1,1,"tui-data-list-wrapper",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](6,w,2,1,"tui-input",4),d["\u0275\u0275template"](7,T,2,0,"ng-template",null,5,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275reference"](8);d["\u0275\u0275property"]("formGroup",t.group),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngModelOptions",d["\u0275\u0275pureFunction0"](5,M))("ngModel",t.type),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngIf",t.type===t.items[0])("ngIfElse",e)}},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,f.a,b.a,o.NgControlStatus,o.FormControlName,g.a,h.a,o.NgModel,C.a,a.t,E.a,v.a,x.a,y.a],encapsulation:2,changeDetection:0}),e})();var _=n("u8jZ");const O=["header",$localize`:␟e9989acc7c8ce4e53c98e725c4ccddb26500a12c␟676188202391799015:Validator`];var A;A=$localize`:␟31386b4456fc6b3d900fca512c4eb3cfd8f4cb03␟3877732538093888358:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiValidator${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows set validators for form control on the fly `;const G=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function N(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18nStart"](1,A),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](4,G),d["\u0275\u0275element"](5,"tui-validator-example-1"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example1)}}var I,D;function $(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",4),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,I),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,D),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml)}}I=$localize`:␟882bd28a9551de615e0f39bd9b0d55c6c1b1d514␟2747244216500749928: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiValidatorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our directive: `,D=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let k=(()=>{class e{constructor(){this.exampleModule=n.e(1697).then(n.bind(null,"2qkE")),this.exampleHtml=n.e(1698).then(n.bind(null,"2W/Z")),this.example1={TypeScript:n.e(1696).then(n.bind(null,"1Jpz")),HTML:n.e(1695).then(n.bind(null,"kVeO"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-validator"]],decls:4,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],["pageTab","Setup"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,O),d["\u0275\u0275template"](2,N,6,1,"ng-template",1),d["\u0275\u0275template"](3,$,10,2,"ng-template",2),d["\u0275\u0275elementEnd"]())},directives:[p.a,u.a,s.a,V,_.a],encapsulation:2,changeDetection:0}),e})(),F=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,o.FormsModule,o.ReactiveFormsModule,m.cb,m.Gb,i.ic,m.ib,c.gb,m.K,r.m,l.f.forChild(Object(r.u)(k))]]}),e})()}}]);