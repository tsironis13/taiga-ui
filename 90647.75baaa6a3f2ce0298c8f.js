(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[90647],{90647:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiPrimitiveTextfieldModule:()=>Pe});var i=n(12057),o=n(24751),a=n(33982),u=n(29851),r=n(3497),l=n(55908),c=n(89570),s=n(74788);let d=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[[o.u5,i.ez,u.Lx,u.mG,r.TuiModeModule,l.TuiAccordionModule]]}),e})(),p=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({}),e})();var m=n(77788),f=n(75695),g=n(82387),h=n(98204),x=n(57750),y=n(88331),T=n(37159),v=n(57068),C=n(79121),P=n(66596),Z=n(68807),b=n(63060),V=n(62733),M=n(88494),A=n(91030),_=n(34880),w=n(2697),U=n(67446),N=n(29070),J=n(54255),q=n(15491);function H(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-svg",4),s.NdJ("click",(function(){return s.CHM(e),s.oxw().togglePasswordVisibility()})),s.qZA()}if(2&e){const e=s.oxw(),t=s.MAs(6);s.Q6J("tuiHint",t)("src",e.icon)}}function I(e,t){if(1&e&&s._uU(0),2&e){const e=s.oxw();s.Oqu(e.hint)}}const O=["*"];let L=(()=>{class e extends Z.AbstractTuiControl{constructor(e,t){super(e,t),this.isPasswordHidden=!0}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return!!this.textfield&&this.textfield.focused}get icon(){return this.isPasswordHidden?"tuiIconEyeOffLarge":"tuiIconEyeLarge"}get hint(){return this.isPasswordHidden?"Show password":"Hide password"}get inputType(){return this.isPasswordHidden?"password":"text"}onFocused(e){this.updateFocused(e)}togglePasswordVisibility(){this.isPasswordHidden=!this.isPasswordHidden}getFallbackValue(){return""}}return e.ɵfac=function(t){return new(t||e)(s.Y36(o.a5,10),s.Y36(s.sBO))},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-primitive-textfield-example-1"]],viewQuery:function(e,t){if(1&e&&s.Gf(r.TuiPrimitiveTextfieldComponent,5),2&e){let e;s.iGM(e=s.CRH())&&(t.textfield=e.first)}},features:[s.qOj],ngContentSelectors:O,decls:7,vars:7,consts:[[3,"tuiTextfieldIcon","invalid","focusable","disabled","readOnly","value","valueChange","focusedChange"],["tuiTextfield","",3,"type"],["iconContent",""],["hintContent",""],["tuiWrapper","","appearance","icon",1,"icon",3,"tuiHint","src","click"]],template:function(e,t){if(1&e&&(s.F$t(),s.TgZ(0,"tui-primitive-textfield",0),s.NdJ("valueChange",(function(e){return t.value=e}))("focusedChange",(function(e){return t.onFocused(e)})),s.Hsn(1),s._UZ(2,"input",1),s.qZA(),s.YNc(3,H,1,2,"ng-template",null,2,s.W1O),s.YNc(5,I,1,1,"ng-template",null,3,s.W1O)),2&e){const e=s.MAs(4);s.Q6J("tuiTextfieldIcon",e)("invalid",t.computedInvalid)("focusable",t.focusable)("disabled",t.disabled)("readOnly",t.readOnly)("value",t.value),s.xp6(2),s.Q6J("type",t.inputType)}},directives:[b.y,V.B,M.AW,A.M,_.P,w.o,U.D,N.x,J.t,q.D],styles:["[_nghost-%COMP%]{display:block}.icon[_ngcontent-%COMP%]{cursor:pointer;pointer-events:auto}"],changeDetection:0}),e})();var F=n(10200),S=n(68874),Q=n(64374),k=n(88135);function D(e,t){1&e&&s._UZ(0,"tui-svg",7)}let Y=(()=>{class e extends Z.AbstractTuiControl{constructor(e,t){super(e,t)}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return!!this.textfield&&this.textfield.focused}onFocused(e){this.updateFocused(e)}getFallbackValue(){return""}}return e.ɵfac=function(t){return new(t||e)(s.Y36(o.a5,10),s.Y36(s.sBO))},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-primitive-textfield-example-2"]],viewQuery:function(e,t){if(1&e&&s.Gf(r.TuiPrimitiveTextfieldComponent,5),2&e){let e;s.iGM(e=s.CRH())&&(t.textfield=e.first)}},features:[s._Bn([(0,r.tuiTextfieldOptionsProvider)({iconCleaner:"tuiIconChevronUp"})]),s.qOj],decls:11,vars:5,consts:[["tuiTextfieldSize","m",1,"b-form",3,"tuiTextfieldLabelOutside","tuiTextfieldCleaner"],["tuiLabel","Modified cleaner icon"],[3,"value","valueChange","focusedChange"],["tuiTextfield","","type","email"],["tuiLabel","Override modified cleaner icon",1,"tui-space_top-4"],[3,"iconCleaner","value","valueChange","focusedChange"],["iconCleaner",""],["src","tuiIconEdit2"]],template:function(e,t){if(1&e&&(s.TgZ(0,"form",0),s.TgZ(1,"label",1),s.TgZ(2,"tui-primitive-textfield",2),s.NdJ("valueChange",(function(e){return t.value=e}))("focusedChange",(function(e){return t.onFocused(e)})),s._uU(3," Type an email "),s._UZ(4,"input",3),s.qZA(),s.qZA(),s.TgZ(5,"label",4),s.TgZ(6,"tui-primitive-textfield",5),s.NdJ("valueChange",(function(e){return t.value=e}))("focusedChange",(function(e){return t.onFocused(e)})),s._uU(7," Type an email "),s._UZ(8,"input",3),s.qZA(),s.qZA(),s.qZA(),s.YNc(9,D,1,0,"ng-template",null,6,s.W1O)),2&e){const e=s.MAs(10);s.Q6J("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),s.xp6(2),s.Q6J("value",t.value),s.xp6(4),s.Q6J("iconCleaner",e)("value",t.value)}},directives:[o._Y,o.JL,o.F,F.s,S.x,Q.b,k.A,b.y,V.B,A.M,_.P],encapsulation:2,changeDetection:0}),e})();var z=n(20714),B=n(6707),E=n(87205),W=n(3729),G=n(44998),R=n(89437),j=n(84848),X=n(54476),$=n(17023),K=n(16406),ee=n(15800),te=n(54218),ne=n(44124),ie=n(76349);const oe=["interactiveContent"];function ae(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"p"),s._uU(1," PrimitiveTextfield is a flexible string input that can be used as a base for complex inputs. Use it as a basis for other components. "),s.TgZ(2,"strong"),s._uU(3,"Does not work with Angular forms"),s.qZA(),s.qZA(),s.TgZ(4,"tui-doc-example",2),s.TgZ(5,"tui-notification",3),s._uU(6," Simplified version of "),s.TgZ(7,"a",4),s.TgZ(8,"code"),s._uU(9,"InputPassword"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(10,"tui-primitive-textfield-example-1",5),s.NdJ("ngModelChange",(function(t){return s.CHM(e),s.oxw().password=t})),s._uU(11," Type a password "),s.qZA(),s.qZA(),s.TgZ(12,"tui-doc-example",6),s.TgZ(13,"tui-notification",3),s._uU(14," If you need to set some attributes or listen to events on native "),s.TgZ(15,"code"),s._uU(16,"input"),s.qZA(),s._uU(17," , you can put it inside with "),s.TgZ(18,"code"),s._uU(19,"Textfield"),s.qZA(),s._uU(20," directive as shown below "),s.qZA(),s.TgZ(21,"tui-primitive-textfield-example-2",7),s.NdJ("ngModelChange",(function(t){return s.CHM(e),s.oxw().example2Value=t})),s.qZA(),s.qZA()}if(2&e){const e=s.oxw();s.xp6(4),s.Q6J("content",e.example1),s.xp6(6),s.Q6J("ngModel",e.password),s.xp6(2),s.Q6J("content",e.example2),s.xp6(9),s.Q6J("ngModel",e.example2Value)}}function ue(e,t){if(1&e&&(s._UZ(0,"tui-avatar",22),s._uU(1)),2&e){const e=t.$implicit;s.Q6J("text",e),s.xp6(1),s.hij(" ",e," ")}}function re(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-svg",23),s.NdJ("click",(function(){return s.CHM(e),s.oxw(2).onClick()})),s.qZA()}}function le(e,t){1&e&&s._uU(0," Disabled state ")}function ce(e,t){1&e&&s._uU(0," Native input allows inputting ")}function se(e,t){1&e&&(s._uU(0," Pale text suggestion for input (e.g. HH:MM:SS for time). Use "),s.TgZ(1,"code"),s._uU(2,"tuiTextfieldFiller"),s.qZA(),s._uU(3," instead "))}function de(e,t){1&e&&(s._uU(0," Icon content. If content is a string, it is used as stringified svg or a name of icon registered in "),s.TgZ(1,"a",24),s.TgZ(2,"code"),s._uU(3,"SvgService"),s.qZA(),s.qZA(),s.TgZ(4,"p"),s._uU(5," Requires you to import "),s.TgZ(6,"code"),s._uU(7,"TuiTextfieldControllerModule"),s.qZA(),s.qZA())}function pe(e,t){1&e&&(s._uU(0," Uneditable text before value. For example, currency symbol in "),s.TgZ(1,"a",25),s.TgZ(2,"code"),s._uU(3,"InputNumber"),s.qZA(),s.qZA(),s._uU(4," . "))}function me(e,t){1&e&&(s._uU(0," Uneditable text after value. For example, currency symbol in "),s.TgZ(1,"a",25),s.TgZ(2,"code"),s._uU(3,"InputNumber"),s.qZA(),s.qZA(),s._uU(4," . "))}function fe(e,t){1&e&&s._uU(0," Component is read only ")}function ge(e,t){1&e&&s._uU(0," Invalid state ")}function he(e,t){1&e&&s._uU(0," Value ")}function xe(e,t){1&e&&s._uU(0," Custom align content by text-align ")}function ye(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-doc-demo"),s.TgZ(1,"tui-primitive-textfield",8),s.NdJ("valueChange",(function(t){return s.CHM(e),s.oxw().value=t})),s._uU(2," Component label "),s.qZA(),s.qZA(),s.YNc(3,ue,2,2,"ng-template",null,9,s.W1O),s.YNc(5,re,1,0,"ng-template",null,10,s.W1O),s.TgZ(7,"tui-doc-documentation"),s.YNc(8,le,1,0,"ng-template",11),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().disabled=t})),s.YNc(9,ce,1,0,"ng-template",12),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().editable=t})),s.YNc(10,se,4,0,"ng-template",13),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().filler=t})),s.YNc(11,de,8,0,"ng-template",14),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().selectedIcon=t})),s.YNc(12,pe,5,0,"ng-template",15),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().prefix=t})),s.YNc(13,me,5,0,"ng-template",16),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().postfix=t})),s.YNc(14,fe,1,0,"ng-template",17),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().readOnly=t})),s.YNc(15,ge,1,0,"ng-template",18),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().invalid=t})),s.YNc(16,he,1,0,"ng-template",19),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().value=t})),s.qZA(),s._UZ(17,"hint-controller-documentation"),s._UZ(18,"textfield-controller-documentation"),s._UZ(19,"inherited-documentation"),s.TgZ(20,"tui-doc-documentation",20),s.YNc(21,xe,1,0,"ng-template",21),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().textAlign=t})),s.qZA()}if(2&e){const e=s.oxw();s.xp6(1),s.Udp("text-align",e.textAlign),s.Q6J("focusable",e.focusable)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldCustomContent",e.customContent)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("tuiTextfieldFiller",e.filler)("pseudoActive",e.pseudoPressed)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("disabled",e.disabled)("editable",e.editable)("filler",e.filler)("tuiTextfieldIcon",e.iconContent)("tuiTextfieldIconLeft",e.iconLeft)("readOnly",e.readOnly)("tuiTextfieldPrefix",e.prefix)("tuiTextfieldPostfix",e.postfix)("invalid",e.invalid)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintAppearance",e.hintAppearance)("value",e.value),s.xp6(7),s.Q6J("documentationPropertyValue",e.disabled),s.xp6(1),s.Q6J("documentationPropertyValue",e.editable),s.xp6(1),s.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValue",e.filler),s.xp6(1),s.Q6J("documentationPropertyValues",e.iconVariants)("documentationPropertyValue",e.selectedIcon),s.xp6(1),s.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValue",e.prefix),s.xp6(1),s.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValue",e.postfix),s.xp6(1),s.Q6J("documentationPropertyValue",e.readOnly),s.xp6(1),s.Q6J("documentationPropertyValue",e.invalid),s.xp6(1),s.Q6J("documentationPropertyValue",e.value),s.xp6(5),s.Q6J("documentationPropertyValues",e.textAlignVariants)("documentationPropertyValue",e.textAlign)}}function Te(e,t){if(1&e&&(s.TgZ(0,"ol",26),s.TgZ(1,"li"),s.TgZ(2,"p"),s._uU(3," Import "),s.TgZ(4,"code"),s._uU(5,"TuiPrimitiveTextfieldModule"),s.qZA(),s._uU(6," into a module where you want to use our component "),s.qZA(),s._UZ(7,"tui-doc-code",27),s.qZA(),s.TgZ(8,"li"),s.TgZ(9,"p"),s._uU(10,"Add to the template:"),s.qZA(),s._UZ(11,"tui-doc-code",28),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(7),s.Q6J("code",e.exampleModule),s.xp6(4),s.Q6J("code",e.exampleHtml)}}const ve="Bell";let Ce=(()=>{class e extends x.O{constructor(){super(...arguments),this.interactiveIcon="",this.example1={TypeScript:n.e(75945).then(n.t.bind(n,75945,17)),HTML:n.e(34943).then(n.t.bind(n,34943,17)),LESS:n.e(35047).then(n.t.bind(n,35047,17))},this.example2={TypeScript:n.e(74039).then(n.t.bind(n,74039,17)),HTML:n.e(80036).then(n.t.bind(n,80036,17))},this.exampleModule=n.e(67875).then(n.t.bind(n,67875,17)),this.exampleHtml=n.e(83057).then(n.t.bind(n,83057,17)),this.themes=["Taiga UI","Bootstrap","Material"],this.theme=this.themes[0],this.iconVariants=["","tuiIconSearchLarge","Interactive content"],this.selectedIcon=this.iconVariants[0],this.iconLeftVariants=["","tuiIconPieChartLarge","tuiIconCreditCardLarge"],this.iconLeft="",this.iconAlignVariants=["left","right"],this.iconAlign=this.iconAlignVariants[1],this.typeVariants=["text","email","password","tel","url"],this.cleaner=!1,this.editable=!0,this.filler="",this.prefix="",this.postfix="",this.maxLengthVariants=[10],this.maxLength=null,this.inputModeVariants=["text","numeric"],this.inputMode=this.inputModeVariants[0],this.customContentVariants=["",ve,"<span>LongTextContent</span>"],this.customContentSelected=this.customContentVariants[0],this.password="",this.example2Value="mail@example.com",this.value="",this.exampleText="",this.disabled=!1,this.readOnly=!1,this.labelOutside=!1,this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[2],this.hintContentVariants=["","Ivan Ivanov"],this.hintDirectionVariants=r.TUI_HINT_DIRECTIONS,this.hintAppearanceVariants=["","error","onDark"],this.invalid=!1,this.hintContent=this.hintContentVariants[0],this.hintDirection=this.hintDirectionVariants[0],this.hintAppearance=this.hintAppearanceVariants[0]}get customContent(){return this.customContentSelected===ve?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get iconContent(){return""===this.selectedIcon?"":this.interactiveIcon&&"tuiIconSearchLarge"!==this.selectedIcon?this.interactiveIcon:"tuiIconSearchLarge"}get isBootstrap(){return this.theme===this.themes[1]}get isMaterial(){return this.theme===this.themes[2]}get placeholder(){return this.isBootstrap?"Type a value":"Theming sample"}get customizationSize(){return this.isBootstrap?"s":"l"}onClick(){console.info("Interactive icon clicked")}}return e.ɵfac=function(){let t;return function(n){return(t||(t=s.n5z(e)))(n||e)}}(),e.ɵcmp=s.Xpm({type:e,selectors:[["example-tui-primitive-textfield"]],viewQuery:function(e,t){if(1&e&&s.Gf(oe,5),2&e){let e;s.iGM(e=s.CRH())&&(t.interactiveIcon=e.first)}},features:[s._Bn([{provide:h.x,useExisting:(0,s.Gpc)((()=>e))}]),s.qOj],decls:4,vars:0,consts:[["header","PrimitiveTextfield","package","CORE","type","components"],["pageTab",""],["id","example-size","heading","sizes",3,"content"],[1,"tui-space_bottom-4","b-form"],["tuiLink","","routerLink","/components/input-password"],[1,"b-form",3,"ngModel","ngModelChange"],["id","options","heading","Options",3,"content"],[3,"ngModel","ngModelChange"],[3,"focusable","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiTextfieldFiller","pseudoActive","pseudoFocus","pseudoHover","disabled","editable","filler","tuiTextfieldIcon","tuiTextfieldIconLeft","readOnly","tuiTextfieldPrefix","tuiTextfieldPostfix","invalid","tuiHintContent","tuiHintDirection","tuiHintAppearance","value","valueChange"],["template",""],["interactiveContent",""],["documentationPropertyName","disabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","editable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","filler","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiTextfieldIcon","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","prefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","readOnly","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","invalid","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input-output","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyType","string","documentationPropertyName","style.text-align",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["size","xs",1,"avatar",3,"text"],["src","tuiIconCalendarLarge",1,"icon-button",3,"click"],["tuiLink","","routerLink","/services/svg-service"],["tuiLink","","routerLink","/components/input-number"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-doc-page",0),s.YNc(1,ae,22,4,"ng-template",1),s.YNc(2,ye,22,39,"ng-template",1),s.YNc(3,Te,12,2,"ng-template",1),s.qZA())},directives:[y.q,T.n,v.f,C.L,P.V,a.yS,L,o.JJ,o.On,Y,z.F,b.y,V.B,Q.b,B.B,S.x,F.s,E.k,M.AW,W.aR,G.A,R.T,j.bZ,X.z,$.B,K.F,ee.O,te.w,ne.J,_.P,ie.c],styles:["[_nghost-%COMP%]{display:block}.icon-button[_ngcontent-%COMP%]{position:relative}.avatar[_ngcontent-%COMP%]{margin-right:.5rem}.label[_ngcontent-%COMP%]{width:22.5rem}.input[_ngcontent-%COMP%]{margin-top:.25rem}"],changeDetection:0}),e})(),Pe=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[[i.ez,o.u5,o.UX,f.f,m.I,g.J,r.TuiPrimitiveTextfieldModule,r.TuiTextfieldControllerModule,r.TuiNotificationModule,l.TuiAvatarModule,r.TuiLinkModule,r.TuiSvgModule,r.TuiButtonModule,c.wq,r.TuiHintModule,l.TuiRadioListModule,d,r.TuiLabelModule,r.TuiWrapperModule,p,u.fV,a.Bz.forChild((0,u.Ve)(Ce))]]}),e})()}}]);