(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[9408],{82880:(t,e,o)=>{o.d(e,{b:()=>a});var n=o(3497),i=o(57750);const r="Bell";class a extends i.O{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["","Some content"],this.hintDirectionVariants=n.TUI_HINT_DIRECTIONS,this.hintAppearanceVariants=["","error","onDark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.autocompleteVariants=["","off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],this.inputModeVariants=["text","numeric"],this.customContentVariants=["",r,"tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected=this.customContentVariants[0],this.inputMode=this.inputModeVariants[0],this.autocomplete="",this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.filler="",this.maxHeight=null,this.iconLeftVariants=["","tuiIconMailLarge","tuiIconPieChartLarge"],this.iconLeft=this.iconLeftVariants[0],this.hintContent=this.hintContentVariants[0],this.hintDirection=this.hintDirectionVariants[0],this.hintAppearance=this.hintAppearanceVariants[0],this.dropdownAlignVariants=["left","right"],this.dropdownAlign=n.TUI_DROPDOWN_DEFAULT_OPTIONS.align,this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["bottom","top"],this.dropdownDirection=n.TUI_DROPDOWN_DEFAULT_OPTIONS.direction,this.dropdownMinHeight=n.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight,this.dropdownMaxHeight=n.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight,this.prefixVariants=["","$","GBP","Very long text"],this.prefix=this.prefixVariants[0],this.postfix=this.prefixVariants[0],this.dropdownOffset=n.TUI_DROPDOWN_DEFAULT_OPTIONS.offset}get customContent(){return this.customContentSelected===r?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(t){t?this.control.disable():this.control.enable()}}},89104:(t,e,o)=>{o.d(e,{X:()=>P});var n=o(98204),i=o(74788),r=o(66596),a=o(33982),u=o(54476),d=o(17023);function c(t,e){1&t&&(i._uU(0," Align of dropdown (does not work together with "),i.TgZ(1,"code"),i._uU(2,"limitWidth === 'fixed'"),i.qZA(),i._uU(3," ) "))}function p(t,e){1&t&&i._uU(0," Set a vertical direction of dropdown ")}function m(t,e){1&t&&i._uU(0," Limit width of dropdown ")}function s(t,e){1&t&&(i._uU(0," Minimum height to calculate that dropdown fits to setted "),i.TgZ(1,"code"),i._uU(2,"tuiDropdownDirection"),i.qZA())}function l(t,e){1&t&&i._uU(0," Maximum height of dropdown ")}function y(t,e){1&t&&i._uU(0," Dropdown offset ")}o(155);let P=(()=>{class t{constructor(t){this.documentedComponent=t}}return t.ɵfac=function(e){return new(e||t)(i.Y36(n.x))},t.ɵcmp=i.Xpm({type:t,selectors:[["dropdown-documentation"]],decls:15,vars:9,consts:[[1,"tui-text_h6"],["tuiLink","","target","_blank","routerLink","/directives/dropdown"],["documentationPropertyName","tuiDropdownAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownDirection","documentationPropertyMode","input","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyMode","input","documentationPropertyType","TuiDropdownWidthT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMinHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownOffset","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"]],template:function(t,e){1&t&&(i.TgZ(0,"h6",0),i._uU(1," Can be expanded with "),i.TgZ(2,"a",1),i._uU(3," TuiDropdown "),i.qZA(),i.qZA(),i.TgZ(4,"p"),i._uU(5," Requires you to import "),i.TgZ(6,"code"),i._uU(7,"TuiDropdownModule"),i.qZA(),i.qZA(),i.TgZ(8,"tui-doc-documentation"),i.YNc(9,c,4,0,"ng-template",2),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownAlign=t})),i.YNc(10,p,1,0,"ng-template",3),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownDirection=t})),i.YNc(11,m,1,0,"ng-template",4),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownLimitWidth=t})),i.YNc(12,s,3,0,"ng-template",5),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownMinHeight=t})),i.YNc(13,l,1,0,"ng-template",6),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownMaxHeight=t})),i.YNc(14,y,1,0,"ng-template",7),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownOffset=t})),i.qZA()),2&t&&(i.xp6(9),i.Q6J("documentationPropertyValues",e.documentedComponent.dropdownAlignVariants)("documentationPropertyValue",e.documentedComponent.dropdownAlign),i.xp6(1),i.Q6J("documentationPropertyValues",e.documentedComponent.dropdownDirectionVariants)("documentationPropertyValue",e.documentedComponent.dropdownDirection),i.xp6(1),i.Q6J("documentationPropertyValues",e.documentedComponent.dropdownLimitWidthVariants)("documentationPropertyValue",e.documentedComponent.dropdownLimitWidth),i.xp6(1),i.Q6J("documentationPropertyValue",e.documentedComponent.dropdownMinHeight),i.xp6(1),i.Q6J("documentationPropertyValue",e.documentedComponent.dropdownMaxHeight),i.xp6(1),i.Q6J("documentationPropertyValue",e.documentedComponent.dropdownOffset))},directives:[r.V,a.yS,u.z,d.B],encapsulation:2,changeDetection:0}),t})()},19180:(t,e,o)=>{o.d(e,{F:()=>d});var n=o(12057),i=o(33982),r=o(29851),a=o(3497),u=o(74788);let d=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=u.oAB({type:t}),t.ɵinj=u.cJS({imports:[[n.ez,i.Bz,r.Lx,a.TuiLinkModule]]}),t})()},155:(t,e,o)=>{o.d(e,{X:()=>i});var n=o(3497);class i{constructor(){this.dropdownAlignVariants=["left","right"],this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownDirectionVariants=["bottom","top"],this.dropdownAlign=n.TUI_DROPDOWN_DEFAULT_OPTIONS.align,this.dropdownDirection=n.TUI_DROPDOWN_DEFAULT_OPTIONS.direction,this.dropdownLimitWidth=n.TUI_DROPDOWN_DEFAULT_OPTIONS.limitWidth,this.dropdownMinHeight=n.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight,this.dropdownMaxHeight=n.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight,this.dropdownOffset=n.TUI_DROPDOWN_DEFAULT_OPTIONS.offset}}},16406:(t,e,o)=>{o.d(e,{F:()=>s});var n=o(98204),i=o(74788),r=o(66596),a=o(33982),u=o(54476),d=o(17023);function c(t,e){1&t&&i._uU(0," Content of a hint ")}function p(t,e){1&t&&i._uU(0," Hint direction ")}function m(t,e){1&t&&i._uU(0," Hint mode ")}o(82880);let s=(()=>{class t{constructor(t){this.documentedComponent=t}}return t.ɵfac=function(e){return new(e||t)(i.Y36(n.x))},t.ɵcmp=i.Xpm({type:t,selectors:[["hint-controller-documentation"]],decls:12,vars:6,consts:[[1,"tui-text_h6"],["tuiLink","","target","_blank","routerLink","/directives/hint"],["documentationPropertyName","tuiHintContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiHintDirection","documentationPropertyMode","input","documentationPropertyType","TuiHintDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiHintAppearance","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"]],template:function(t,e){1&t&&(i.TgZ(0,"h6",0),i._uU(1," Can be expanded with "),i.TgZ(2,"a",1),i._uU(3," TuiHint "),i.qZA(),i.qZA(),i.TgZ(4,"p"),i._uU(5," Requires you to import "),i.TgZ(6,"code"),i._uU(7,"TuiHintModule"),i.qZA(),i.qZA(),i.TgZ(8,"tui-doc-documentation"),i.YNc(9,c,1,0,"ng-template",2),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.hintContent=t})),i.YNc(10,p,1,0,"ng-template",3),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.hintDirection=t})),i.YNc(11,m,1,0,"ng-template",4),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.hintAppearance=t})),i.qZA()),2&t&&(i.xp6(9),i.Q6J("documentationPropertyValues",e.documentedComponent.hintContentVariants)("documentationPropertyValue",e.documentedComponent.hintContent),i.xp6(1),i.Q6J("documentationPropertyValues",e.documentedComponent.hintDirectionVariants)("documentationPropertyValue",e.documentedComponent.hintDirection),i.xp6(1),i.Q6J("documentationPropertyValues",e.documentedComponent.hintAppearanceVariants)("documentationPropertyValue",e.documentedComponent.hintAppearance))},directives:[r.V,a.yS,u.z,d.B],encapsulation:2,changeDetection:0}),t})()},77788:(t,e,o)=>{o.d(e,{I:()=>d});var n=o(12057),i=o(33982),r=o(29851),a=o(3497),u=o(74788);let d=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=u.oAB({type:t}),t.ɵinj=u.cJS({imports:[[n.ez,i.Bz,r.Lx,a.TuiLinkModule]]}),t})()},93352:(t,e,o)=>{o.d(e,{l:()=>i});var n=o(3497);class i{constructor(){this.appearanceVariants=["","error","onDark"],this.appearance=this.appearanceVariants[0],this.directionVariants=n.TUI_HINT_DIRECTIONS,this.direction=this.directionVariants[0]}}},98204:(t,e,o)=>{o.d(e,{x:()=>n});const n=new(o(74788).OlP)("[ABSTRACT_PROPS_ACCESSOR]: Component extends AbstractExample class")},54218:(t,e,o)=>{o.d(e,{w:()=>O});var n=o(3497),i=o(82880),r=o(93352),a=o(57750),u=o(98204),d=o(74788),c=o(12057),p=o(89104),m=o(16406),s=o(15800),l=o(54476),y=o(17023);function P(t,e){1&t&&d._UZ(0,"dropdown-documentation")}function h(t,e){1&t&&d._uU(0," Component is read only ")}function V(t,e){1&t&&d._uU(0," Set invalid state regardless of control ")}function g(t,e){if(1&t){const t=d.EpF();d.ynx(0),d._UZ(1,"hint-controller-documentation"),d._UZ(2,"textfield-controller-documentation"),d.TgZ(3,"h6",1),d._uU(4," Inherited from "),d.TgZ(5,"code"),d._uU(6,"TuiReactiveControl"),d.qZA(),d.qZA(),d.TgZ(7,"tui-doc-documentation"),d.YNc(8,h,1,0,"ng-template",2),d.NdJ("documentationPropertyValueChange",(function(e){return d.CHM(t),d.oxw().documentedComponent.readOnly=e})),d.YNc(9,V,1,0,"ng-template",3),d.NdJ("documentationPropertyValueChange",(function(e){return d.CHM(t),d.oxw().documentedComponent.pseudoInvalid=e})),d.qZA(),d.BQk()}if(2&t){const t=d.oxw();d.xp6(8),d.Q6J("documentationPropertyValue",t.documentedComponent.readOnly),d.xp6(1),d.Q6J("documentationPropertyValues",t.booleanVariants)("documentationPropertyValue",t.documentedComponent.pseudoInvalid)}}function f(t,e){1&t&&d._uU(0," Element can be focused ")}function C(t,e){1&t&&d._uU(0," Native ID attribute for element. It helps users with Screen Readers to use a page ")}function T(t,e){1&t&&d._uU(0," Visual hovered state ")}function x(t,e){1&t&&d._uU(0," Visual focused state ")}function _(t,e){1&t&&d._uU(0," Visual pressed state ")}function N(t,e){1&t&&d._uU(0," Emits on focus and blur ")}function w(t,e){if(1&t){const t=d.EpF();d.ynx(0),d.TgZ(1,"h6",1),d._uU(2," Inherited from "),d.TgZ(3,"code"),d._uU(4,"TuiInteractive"),d.qZA(),d.qZA(),d.TgZ(5,"tui-doc-documentation"),d.YNc(6,f,1,0,"ng-template",4),d.NdJ("documentationPropertyValueChange",(function(e){return d.CHM(t),d.oxw().documentedComponent.focusable=e})),d.YNc(7,C,1,0,"ng-template",5),d.YNc(8,T,1,0,"ng-template",6),d.NdJ("documentationPropertyValueChange",(function(e){return d.CHM(t),d.oxw().documentedComponent.pseudoHovered=e})),d.YNc(9,x,1,0,"ng-template",7),d.NdJ("documentationPropertyValueChange",(function(e){return d.CHM(t),d.oxw().documentedComponent.pseudoFocused=e})),d.YNc(10,_,1,0,"ng-template",8),d.NdJ("documentationPropertyValueChange",(function(e){return d.CHM(t),d.oxw().documentedComponent.pseudoPressed=e})),d.YNc(11,N,1,0,"ng-template",9),d.qZA(),d.BQk()}if(2&t){const t=d.oxw();d.xp6(6),d.Q6J("documentationPropertyValue",t.documentedComponent.focusable),d.xp6(2),d.Q6J("documentationPropertyValues",t.booleanVariants)("documentationPropertyValue",t.documentedComponent.pseudoHovered),d.xp6(1),d.Q6J("documentationPropertyValues",t.booleanVariants)("documentationPropertyValue",t.documentedComponent.pseudoFocused),d.xp6(1),d.Q6J("documentationPropertyValues",t.booleanVariants)("documentationPropertyValue",t.documentedComponent.pseudoPressed)}}function U(t,e){1&t&&d._uU(0," Hint direction ")}function D(t,e){1&t&&d._uU(0," Hint mode ")}function A(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"tui-doc-documentation"),d.YNc(1,U,1,0,"ng-template",10),d.NdJ("documentationPropertyValueChange",(function(e){return d.CHM(t),d.oxw().documentedComponent.direction=e})),d.YNc(2,D,1,0,"ng-template",11),d.NdJ("documentationPropertyValueChange",(function(e){return d.CHM(t),d.oxw().documentedComponent.appearance=e})),d.qZA()}if(2&t){const t=d.oxw();d.xp6(1),d.Q6J("documentationPropertyValues",t.directionVariants)("documentationPropertyValue",t.documentedComponent.direction),d.xp6(1),d.Q6J("documentationPropertyValues",t.appearanceVariants)("documentationPropertyValue",t.documentedComponent.appearance)}}let O=(()=>{class t{constructor(t){this.documentedComponent=t,this.dropdown=!1,this.booleanVariants=[!1,!0],this.directionVariants=n.TUI_HINT_DIRECTIONS,this.appearanceVariants=["","error","onDark"]}isTuiReactiveControl(t){return t instanceof i.b}isTuiInteractive(t){return t instanceof a.O}isTuiHint(t){return t instanceof r.l}}return t.ɵfac=function(e){return new(e||t)(d.Y36(u.x))},t.ɵcmp=d.Xpm({type:t,selectors:[["inherited-documentation"]],inputs:{dropdown:"dropdown"},decls:4,vars:4,consts:[[4,"ngIf"],[1,"tui-text_h6"],["documentationPropertyName","readOnly","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","pseudoInvalid","documentationPropertyMode","input","documentationPropertyType","boolean | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","focusable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","nativeId","documentationPropertyMode","input","documentationPropertyType","string"],["documentationPropertyName","pseudoHover","documentationPropertyMode","input","documentationPropertyType","boolean | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","pseudoFocus","documentationPropertyMode","input","documentationPropertyType","boolean | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","pseudoActive","documentationPropertyMode","input","documentationPropertyType","boolean | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","focusedChange","documentationPropertyMode","output","documentationPropertyType","boolean"],["documentationPropertyName","tuiHintDirection","documentationPropertyMode","input","documentationPropertyType","TuiHintDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiHintAppearance","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"]],template:function(t,e){1&t&&(d.YNc(0,P,1,0,"dropdown-documentation",0),d.YNc(1,g,10,3,"ng-container",0),d.YNc(2,w,12,7,"ng-container",0),d.YNc(3,A,3,4,"tui-doc-documentation",0)),2&t&&(d.Q6J("ngIf",e.dropdown),d.xp6(1),d.Q6J("ngIf",e.isTuiReactiveControl(e.documentedComponent)),d.xp6(1),d.Q6J("ngIf",e.isTuiInteractive(e.documentedComponent)),d.xp6(1),d.Q6J("ngIf",e.isTuiHint(e.documentedComponent)))},directives:[c.O5,p.X,m.F,s.O,l.z,y.B],encapsulation:2,changeDetection:0}),t})()},75695:(t,e,o)=>{o.d(e,{f:()=>c});var n=o(12057),i=o(29851),r=o(19180),a=o(77788),u=o(82387),d=o(74788);let c=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=d.oAB({type:t}),t.ɵinj=d.cJS({imports:[[n.ez,i.Lx,r.F,a.I,u.J]]}),t})()},57750:(t,e,o)=>{o.d(e,{O:()=>n});class n{constructor(){this.pseudoVariants=[!1,!0],this.textAlignVariants=["left","right"],this.textAlign=this.textAlignVariants[0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}},15800:(t,e,o)=>{o.d(e,{O:()=>V});var n=o(98204),i=o(74788),r=o(66596),a=o(33982),u=o(54476),d=o(17023);function c(t,e){1&t&&i._uU(0," Shows a cross to reset a value ")}function p(t,e){1&t&&(i._uU(0," Right content (e.g. avatar with maximum size 32x32px). If it gets a string, it is inserted as "),i.TgZ(1,"code"),i._uU(2,"src"),i.qZA(),i._uU(3," or as icon name into "),i.TgZ(4,"a",10),i._uU(5," tui-svg "),i.qZA())}function m(t,e){1&t&&(i._uU(0," Label is outside a component and made with "),i.TgZ(1,"a",11),i.TgZ(2,"code"),i._uU(3,"Label"),i.qZA(),i.qZA(),i.TgZ(4,"p"),i._uU(5," ( "),i.TgZ(6,"code"),i._uU(7,"labelOutside = false"),i.qZA(),i._uU(8," does not work together with "),i.TgZ(9,"code"),i._uU(10,"size === 's'"),i.qZA(),i._uU(11," : for s-size inputs use only outside labels) "),i.qZA())}function s(t,e){1&t&&i._uU(0," Size ")}function l(t,e){1&t&&(i._uU(0," A left icon. It can be stringified svg or a name of icon registered in "),i.TgZ(1,"a",12),i.TgZ(2,"code"),i._uU(3,"SvgService"),i.qZA(),i.qZA())}function y(t,e){1&t&&i._uU(0," Pale text suggestion for input (e.g. HH:MM:SS for time) ")}function P(t,e){1&t&&i._uU(0," Uneditable text before value ")}function h(t,e){1&t&&i._uU(0," Uneditable text after value ")}o(82880);let V=(()=>{class t{constructor(t){this.documentedComponent=t}}return t.ɵfac=function(e){return new(e||t)(i.Y36(n.x))},t.ɵcmp=i.Xpm({type:t,selectors:[["textfield-controller-documentation"]],decls:17,vars:13,consts:[[1,"tui-text_h6"],["tuiLink","","target","_blank","routerLink","/directives/textfield-controller"],["documentationPropertyName","tuiTextfieldCleaner","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiTextfieldCustomContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiTextfieldLabelOutside","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiTextfieldSize","documentationPropertyMode","input","documentationPropertyType","TuiSizeS | TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiTextfieldIconLeft","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiTextfieldFiller","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiTextfieldPrefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiTextfieldPostfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["routerLink","/components/svg","tuiLink",""],["tuiLink","","routerLink","/components/label"],["tuiLink","","routerLink","/services/svg-service"]],template:function(t,e){1&t&&(i.TgZ(0,"h6",0),i._uU(1," Can be expanded with "),i.TgZ(2,"a",1),i._uU(3," TuiTextfieldController "),i.qZA(),i.qZA(),i.TgZ(4,"p"),i._uU(5," Requires you to import "),i.TgZ(6,"code"),i._uU(7,"TuiTextfieldControllerModule"),i.qZA(),i.qZA(),i.TgZ(8,"tui-doc-documentation"),i.YNc(9,c,1,0,"ng-template",2),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.cleaner=t})),i.YNc(10,p,6,0,"ng-template",3),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.customContentSelected=t})),i.YNc(11,m,12,0,"ng-template",4),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.labelOutside=t})),i.YNc(12,s,1,0,"ng-template",5),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.size=t})),i.YNc(13,l,4,0,"ng-template",6),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.iconLeft=t})),i.YNc(14,y,1,0,"ng-template",7),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.filler=t})),i.YNc(15,P,1,0,"ng-template",8),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.prefix=t})),i.YNc(16,h,1,0,"ng-template",9),i.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.postfix=t})),i.qZA()),2&t&&(i.xp6(9),i.Q6J("documentationPropertyValue",e.documentedComponent.cleaner),i.xp6(1),i.Q6J("documentationPropertyValues",e.documentedComponent.customContentVariants)("documentationPropertyValue",e.documentedComponent.customContentSelected),i.xp6(1),i.Q6J("documentationPropertyValue",e.documentedComponent.labelOutside),i.xp6(1),i.Q6J("documentationPropertyValues",e.documentedComponent.sizeVariants)("documentationPropertyValue",e.documentedComponent.size),i.xp6(1),i.Q6J("documentationPropertyValues",e.documentedComponent.iconLeftVariants)("documentationPropertyValue",e.documentedComponent.iconLeft),i.xp6(1),i.Q6J("documentationPropertyValue",e.documentedComponent.filler),i.xp6(1),i.Q6J("documentationPropertyValues",e.documentedComponent.prefixVariants)("documentationPropertyValue",e.documentedComponent.prefix),i.xp6(1),i.Q6J("documentationPropertyValues",e.documentedComponent.prefixVariants)("documentationPropertyValue",e.documentedComponent.postfix))},directives:[r.V,a.yS,u.z,d.B],encapsulation:2,changeDetection:0}),t})()},82387:(t,e,o)=>{o.d(e,{J:()=>d});var n=o(12057),i=o(33982),r=o(29851),a=o(3497),u=o(74788);let d=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=u.oAB({type:t}),t.ɵinj=u.cJS({imports:[[n.ez,i.Bz,r.Lx,a.TuiLinkModule]]}),t})()}}]);