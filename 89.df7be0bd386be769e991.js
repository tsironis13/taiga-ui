(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{G957:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputCardModule",(function(){return Ce}));var o,a=n("An66"),r=n("3kIJ"),i=n("1VvW"),d=n("T8fS"),l=n("SVIu"),c=n("Qq0t"),u=n("dvRg"),s=n("Piem"),p=n("kZht"),m=n("LusI"),C=n("K/iL"),f=n("OZlg"),b=n("e0eB"),g=n("iyc4"),h=n("Kw97"),E=n("Ui/K"),y=n("kbry"),x=n("oqXf");o=$localize`:␟55e971bc370c0719311d739ac5400bc8dcc4915a␟8368729506777256792:${"\ufffd#2\ufffd"}:START_TAG_CODE:form${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: tag is used for better autocomplete
`;let S=(()=>{class e{constructor(){this.form=new r.FormGroup({card:new r.FormControl(""),expire:new r.FormControl(""),cvc:new r.FormControl("")})}get card(){const e=this.form.get("card").value;if(e.length<7)return null;switch(e.charAt(0)){case"0":case"1":case"2":return"https://ng-web-apis.github.io/dist/assets/images/common.svg";case"3":case"4":case"5":return"https://ng-web-apis.github.io/dist/assets/images/geolocation.svg";case"6":case"7":return"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg";case"8":case"9":default:return"https://ng-web-apis.github.io/dist/assets/images/payment-request.svg"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-card-example-1"]],decls:10,vars:5,consts:[["tuiGroup","",3,"formGroup"],["formControlName","card",3,"autocompleteEnabled","cardSrc"],["formControlName","expire",3,"autocompleteEnabled"],["formControlName","cvc",3,"autocompleteEnabled"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,o),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"form",0),p["\u0275\u0275elementStart"](4,"tui-input-card",1),p["\u0275\u0275text"](5," Card number "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"tui-input-expire",2),p["\u0275\u0275text"](7," Expire date "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"tui-input-cvc",3),p["\u0275\u0275text"](9," CVC/CVV "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("formGroup",t.form),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("autocompleteEnabled",!0)("cardSrc",t.card),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("autocompleteEnabled",!0),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("autocompleteEnabled",!0))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,h.a,r.FormGroupDirective,E.a,r.NgControlStatus,r.FormControlName,y.a,x.a],encapsulation:2,changeDetection:0}),e})();var v,T,V=n("EPR0"),O=n("KJKW"),_=n("WecH"),P=n("Wqyg"),w=n("2wTY"),D=n("eB8V"),A=n("gEyt"),G=n("RlDx"),$=n("6doR"),I=n("yHor"),M=n("zGJC"),F=n("FSyC"),H=n("u8jZ"),z=n("DkUU");function L(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,v),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275element"](3,"code"),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-doc-example",2),p["\u0275\u0275element"](6,"tui-input-card-example-1"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("content",e.example1)}}v=$localize`:␟2f640a16c0e05689a9493fa51d084298a92231d2␟6470927994758536071:${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:InputCard${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: can be used with ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:InputExpire${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:InputCVC${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: to input a card `,v=p["\u0275\u0275i18nPostprocess"](v),T=$localize`:␟2991990b36a95db17cd97eabd9f31582060b991a␟1504302675191121980: Add ${"\ufffd#5\ufffd"}:START_TAG_CODE:tuiCreateLuhnValidator(customMessage?)${"\ufffd/#5\ufffd"}:CLOSE_TAG_CODE: to control validators to validate it with Luhn algorithm `;const N=function(){return[]};function R(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"form",8),p["\u0275\u0275elementStart"](1,"tui-input-card",9),p["\u0275\u0275listener"]("binChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).onBinChange(t)})),p["\u0275\u0275text"](2," Card number "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-input-expire",10),p["\u0275\u0275text"](4," Expire date "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-input-cvc",11),p["\u0275\u0275text"](6," CVC/CVV "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](7,"tui-error",12),p["\u0275\u0275pipe"](8,"async"),p["\u0275\u0275pipe"](9,"tuiFieldError"),p["\u0275\u0275elementEnd"]()}if(2&e){const e=p["\u0275\u0275nextContext"](2);p["\u0275\u0275property"]("formGroup",e.control),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("autocompleteEnabled",e.autocompleteEnabledCard)("cardSrc",e.cardSrc)("focusable",e.focusable)("readOnly",e.readOnly)("tuiTextfieldSize",e.size)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldLabelOutside",e.labelOutside)("pseudoInvalid",e.pseudoInvalid)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed)("pseudoFocused",e.pseudoFocused)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("autocompleteEnabled",e.autocompleteEnabledExpire)("focusable",e.focusable)("readOnly",e.readOnly)("tuiTextfieldSize",e.size)("tuiTextfieldLabelOutside",e.labelOutside)("pseudoInvalid",e.pseudoInvalid)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed)("pseudoFocused",e.pseudoFocused),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("autocompleteEnabled",e.autocompleteEnabledCVC)("focusable",e.focusable)("length",e.length)("readOnly",e.readOnly)("tuiTextfieldSize",e.size)("tuiTextfieldLabelOutside",e.labelOutside)("pseudoInvalid",e.pseudoInvalid)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed)("pseudoFocused",e.pseudoFocused)("tuiHintContent",e.hintContentCVC)("tuiHintDirection",e.hintDirectionCVC)("tuiHintMode",e.hintModeCVC),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("error",p["\u0275\u0275pipeBind1"](8,38,p["\u0275\u0275pipeBind1"](9,40,p["\u0275\u0275pureFunction0"](42,N))))}}var B,k,j,q,U,J,K,W,Z,Q,X;function Y(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,B),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function ee(e,t){1&e&&p["\u0275\u0275i18n"](0,k)}function te(e,t){1&e&&p["\u0275\u0275i18n"](0,j)}function ne(e,t){1&e&&p["\u0275\u0275i18n"](0,q)}function oe(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-documentation"),p["\u0275\u0275template"](1,Y,2,0,"ng-template",13),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).disabledCard=t})),p["\u0275\u0275template"](2,ee,1,0,"ng-template",14),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).autocompleteEnabledCard=t})),p["\u0275\u0275template"](3,te,1,0,"ng-template",15),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).cardSrcSelected=t})),p["\u0275\u0275template"](4,ne,1,0,"ng-template",16),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"inherited-documentation")}if(2&e){const e=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.disabledCard),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.autocompleteEnabledCard),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.cardSrcVariants)("documentationPropertyValue",e.cardSrcSelected)}}function ae(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,U),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function re(e,t){1&e&&p["\u0275\u0275i18n"](0,J)}function ie(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-documentation"),p["\u0275\u0275template"](1,ae,2,0,"ng-template",13),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).disabledExpire=t})),p["\u0275\u0275template"](2,re,1,0,"ng-template",14),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).autocompleteEnabledExpire=t})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](3,"inherited-documentation")}if(2&e){const e=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.disabledExpire),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.autocompleteEnabledExpire)}}function de(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,K),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function le(e,t){1&e&&p["\u0275\u0275i18n"](0,W)}function ce(e,t){1&e&&p["\u0275\u0275i18n"](0,Z)}function ue(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-documentation"),p["\u0275\u0275template"](1,de,2,0,"ng-template",13),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).disabledCVC=t})),p["\u0275\u0275template"](2,le,1,0,"ng-template",14),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).autocompleteEnabledCVC=t})),p["\u0275\u0275template"](3,ce,1,0,"ng-template",17),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).length=t})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](4,"inherited-documentation")}if(2&e){const e=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.disabledCVC),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.autocompleteEnabledCVC),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.lengthVariants)("documentationPropertyValue",e.length)}}function se(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-demo",3),p["\u0275\u0275template"](1,R,10,43,"ng-template"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"div",4),p["\u0275\u0275elementStart"](3,"p"),p["\u0275\u0275i18nStart"](4,T),p["\u0275\u0275element"](5,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"tui-accordion",5),p["\u0275\u0275elementStart"](7,"tui-accordion-item",6),p["\u0275\u0275text"](8," TuiInputCardComponent "),p["\u0275\u0275template"](9,oe,6,4,"ng-template",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](10,"tui-accordion-item",6),p["\u0275\u0275text"](11," TuiInputExpireComponent "),p["\u0275\u0275template"](12,ie,4,2,"ng-template",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](13,"tui-accordion-item",6),p["\u0275\u0275text"](14," TuiInputCVCComponent "),p["\u0275\u0275template"](15,ue,5,4,"ng-template",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("control",e.control),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("closeOthers",!1),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("open",!0),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("open",!1),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("open",!1)}}function pe(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",18),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275i18nStart"](2,Q),p["\u0275\u0275element"](3,"code"),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275element"](5,"code"),p["\u0275\u0275element"](6,"tui-doc-code",19),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"li"),p["\u0275\u0275elementStart"](8,"p"),p["\u0275\u0275i18n"](9,X),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](10,"tui-doc-code",20),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("code",e.exampleModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleHtml)}}B=$localize`:␟2c6fe3ffbb7436fff8b7e8237f816105f5674c5b␟8188315960463628611: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,k=$localize`:␟d5d2227345f3c4b746809be2d872f34f819f8090␟3717227958474842046: Browser autocomplete of card `,j=$localize`:␟dcc7e3b746f7cded22fc2e353f17e985980623f7␟485699365067563704: SVG card icon `,q=$localize`:␟fb5491175d895b16c29c18e6ee0deaac92726d60␟3654424801956026296: BIN value (card first 6 symbols) `,U=$localize`:␟2c6fe3ffbb7436fff8b7e8237f816105f5674c5b␟8188315960463628611: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,J=$localize`:␟d5d2227345f3c4b746809be2d872f34f819f8090␟3717227958474842046: Browser autocomplete of card `,K=$localize`:␟2c6fe3ffbb7436fff8b7e8237f816105f5674c5b␟8188315960463628611: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,W=$localize`:␟d5d2227345f3c4b746809be2d872f34f819f8090␟3717227958474842046: Browser autocomplete of card `,Z=$localize`:␟f9633c5a291f65405f5a5ebdb40846783f6d65a1␟8094181198746722162: Code length `,Q=$localize`:␟ae4597c634cd72fb51db1738adfcb64703005369␟3557620798016058872: Import ${"[\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiInputCardModule${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: , ${"[\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiInputCVCModule${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: , ${"[\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiInputExpireModule${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: modules into the module where you want to use them: ${"\ufffd#6\ufffd"}:START_TAG_TUI_DOC_CODE:${"\ufffd/#6\ufffd"}:CLOSE_TAG_TUI_DOC_CODE:`,Q=p["\u0275\u0275i18nPostprocess"](Q),X=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let me=(()=>{class e extends m.a{constructor(e){super(),this.alertService=e,this.exampleModule=n.e(752).then(n.bind(null,"B9aH")),this.exampleHtml=n.e(753).then(n.bind(null,"8LU0")),this.example1={TypeScript:n.e(751).then(n.bind(null,"b1w4")),HTML:n.e(750).then(n.bind(null,"8fil"))},this.card="",this.lengthVariants=[3,4],this.length=this.lengthVariants[0],this.cleaner=!1,this.exampleText="0000 0000 0000 0000",this.hintContentCVC=null,this.hintDirectionCVC="bottom-left",this.hintModeCVC=null,this.cards={common:"https://ng-web-apis.github.io/dist/assets/images/common.svg",universal:"https://ng-web-apis.github.io/dist/assets/images/universal.svg",intersection:"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg",mutation:"https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg"},this.cardSrcVariants=Object.keys(this.cards),this.cardSrcSelected=null,this.autocompleteEnabledCard=!1,this.autocompleteEnabledCVC=!1,this.autocompleteEnabledExpire=!1,this.control=new r.FormGroup({card:new r.FormControl("",[r.Validators.required,Object(d.l)("Invalid card number")]),expire:new r.FormControl("",r.Validators.required),cvc:new r.FormControl("",r.Validators.required)})}get cardSrc(){return null===this.cardSrcSelected?null:this.cards[this.cardSrcSelected]}get disabledCard(){return this.isDisabled("card")}set disabledCard(e){this.toggleDisabled(e,"card")}get disabledExpire(){return this.isDisabled("expire")}set disabledExpire(e){this.toggleDisabled(e,"expire")}get disabledCVC(){return this.isDisabled("cvc")}set disabledCVC(e){this.toggleDisabled(e,"cvc")}isDisabled(e){return this.control.get(e).disabled}toggleDisabled(e,t){e?this.control.get(t).disable():this.control.get(t).enable()}onBinChange(e){this.alertService.open("bin: "+e).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(p["\u0275\u0275directiveInject"](c.Z))},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-input-card"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:C.a,useExisting:Object(p.forwardRef)(()=>e)}]),p["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputCard","package","ADDON-COMMERCE","type","components"],["pageTab",""],["id","group","heading","tui-group",3,"content"],[3,"control"],[1,"b-full-width","tui-space_bottom-6"],[1,"b-full-width",3,"closeOthers"],[3,"open"],["tuiAccordionItemContent",""],[1,"form",3,"formGroup"],["formControlName","card",1,"control",3,"autocompleteEnabled","cardSrc","focusable","readOnly","tuiTextfieldSize","tuiTextfieldCleaner","tuiTextfieldLabelOutside","pseudoInvalid","pseudoHovered","pseudoPressed","pseudoFocused","tuiHintContent","tuiHintDirection","tuiHintMode","binChange"],["formControlName","expire",1,"control",3,"autocompleteEnabled","focusable","readOnly","tuiTextfieldSize","tuiTextfieldLabelOutside","pseudoInvalid","pseudoHovered","pseudoPressed","pseudoFocused"],["formControlName","cvc",1,"control",3,"autocompleteEnabled","focusable","length","readOnly","tuiTextfieldSize","tuiTextfieldLabelOutside","pseudoInvalid","pseudoHovered","pseudoPressed","pseudoFocused","tuiHintContent","tuiHintDirection","tuiHintMode"],["formControlName","card",1,"error",3,"error"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","autocompleteEnabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","cardSrc","documentationPropertyMode","input","documentationPropertyType","string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","binChange","documentationPropertyMode","output","documentationPropertyType","string | null"],["documentationPropertyName","length","documentationPropertyMode","input","documentationPropertyType","3 | 4",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,L,7,1,"ng-template",1),p["\u0275\u0275template"](2,se,16,5,"ng-template",1),p["\u0275\u0275template"](3,pe,11,2,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[f.a,b.a,g.a,S,V.a,O.a,_.a,P.a,r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,E.a,r.NgControlStatus,r.FormControlName,w.b,D.b,A.b,G.a,y.a,x.a,$.a,I.a,M.a,F.a,H.a],pipes:[a.b,z.a],styles:[".form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.control[_ngcontent-%COMP%]{flex:1;margin-bottom:.25rem}.control[_ngcontent-%COMP%]:not(:last-child){margin-right:1.25rem}.error[_ngcontent-%COMP%]{min-width:100%}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}"],changeDetection:0}),e})(),Ce=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[d.e,d.c,d.f,c.xb,c.Db,c.ob,u.P,u.w,a.c,c.yb,c.dc,r.ReactiveFormsModule,l.m,s.a,i.f.forChild(Object(l.u)(me))]]}),e})()}}]);