(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[32525],{32525:(e,o,t)=>{t.r(o),t.d(o,{IconSetModule:()=>w});var n=t(50506),i=t(12057),a=t(24751),u=t(33982),r=t(29851),s=t(3497),c=t(55908),d=t(67350),p=t(74788),l=t(88331),g=t(66596),Z=t(76189),f=t(88618),_=t(79121),h=t(57068),T=t(92483),m=t(48706),y=t(84848),U=t(64374);const A={tuiIconCalendarLarge:"date_range-24px",tuiIconHelpCircle:"help-24px",tuiIconInfo:"info-16px",tuiIconXLarge:"clear-24px",tuiIconChevronLeftLarge:"keyboard_arrow_left-24px",tuiIconChevronRightLarge:"keyboard_arrow_right-24px"};function q(e){return`assets/icons/${A[e]}.svg#${A[e]}`}let x=(()=>{class e{constructor(){this.date=null}}return e.ɵfac=function(o){return new(o||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-icon-set-example-1"]],features:[p._Bn([(0,s.tuiSvgOptionsProvider)({path:q})])],decls:8,vars:2,consts:[[1,"b-form"],["tuiHintContent","You can use any icons you want",1,"tui-space_top-4",3,"tuiTextfieldCleaner","ngModel","ngModelChange"]],template:function(e,o){1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"tui-notification"),p._uU(2," As usual with the DI this is hierarchical. Meaning you can provide different "),p.TgZ(3,"code"),p._uU(4,"TUI_SVG_OPTIONS"),p.qZA(),p._uU(5," and use different icons across your app. "),p.qZA(),p.TgZ(6,"tui-input-date-range",1),p.NdJ("ngModelChange",(function(e){return o.date=e})),p._uU(7," Pick your favorite date range "),p.qZA(),p.qZA()),2&e&&(p.xp6(6),p.Q6J("tuiTextfieldCleaner",!0)("ngModel",o.date))},directives:[_.L,T.H,m.d,y.bZ,U.b,a.JJ,a.On],encapsulation:2}),e})();var k=t(76349),b=t(92164);function I(e,o){if(1&e&&(p.TgZ(0,"tui-doc-copy",13),p.TgZ(1,"code"),p._uU(2),p.qZA(),p.qZA()),2&e){const e=o.$implicit;p.Q6J("cdkCopyToClipboard",e),p.xp6(2),p.Oqu(e)}}let v=(()=>{class e{constructor(){this.exampleSanitizer=t.e(79654).then(t.t.bind(t,79654,17)),this.example1={"process-icons.js":t.e(31832).then(t.t.bind(t,31832,17)),"process-icons.ts":t.e(37650).then(t.t.bind(t,37650,17)),TypeScript:t.e(35222).then(t.t.bind(t,35222,17)),HTML:t.e(27390).then(t.t.bind(t,27390,17))},this.names=Object.keys(d.tuiKitIcons),this.expanded=!1}toggle(){this.expanded=!this.expanded}}return e.ɵfac=function(o){return new(o||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["icon-set"]],decls:71,vars:4,consts:[["header","Icons set"],["tuiLink","","routerLink","/components/svg"],["tuiButton","","type","button",3,"click"],[3,"expanded"],[1,"wrapper"],[3,"cdkCopyToClipboard",4,"ngFor","ngForOf"],["status","warning"],["id","material","heading","Material icons",3,"content"],["id","sanitizer",1,"sanitizer-example"],["tuiLink","","routerLink","/components/editor"],["tuiLink","","rel","noreferrer","href","https://github.com/tinkoff/ng-dompurify","target","_blank"],["tuiLink","","rel","noreferrer","href","https://github.com/cure53/DOMPurify","target","_blank"],["filename","app.module.ts",3,"code"],[3,"cdkCopyToClipboard"]],template:function(e,o){1&e&&(p.TgZ(0,"tui-doc-page",0),p.TgZ(1,"p"),p._uU(2," Taiga UI uses "),p.TgZ(3,"a",1),p.TgZ(4,"code"),p._uU(5,"tui-svg"),p.qZA(),p.qZA(),p._uU(6," component to display SVG icons. It can show icons by name, link or source code. Several icon names are hardcoded into kit components so if you want to switch to a different icon set you would need to provide a mapping. "),p.qZA(),p.TgZ(7,"p"),p.TgZ(8,"button",2),p.NdJ("click",(function(){return o.toggle()})),p._uU(9," Show names "),p.qZA(),p.qZA(),p.TgZ(10,"tui-expand",3),p.TgZ(11,"div",4),p.YNc(12,I,3,2,"tui-doc-copy",5),p.qZA(),p.qZA(),p.TgZ(13,"p"),p._uU(14," These are keys of following dictionaries: "),p.TgZ(15,"code"),p._uU(16,"tuiCoreIcons"),p.qZA(),p._uU(17," and "),p.TgZ(18,"code"),p._uU(19,"tuiKitIcons"),p.qZA(),p._uU(20," . It is not required to provide all those icons, you can gradually add the ones you need depending on components you use. "),p.qZA(),p.TgZ(21,"p"),p._uU(22," There are two ways to add icons: bundled and as assets. Bundled icons have the benefit of immediate display but increase your app size. Assets work like regular "),p.TgZ(23,"code"),p._uU(24,'img src="xxx"'),p.qZA(),p._uU(25," with all the benefits of caching. In both cases you can control color with CSS "),p.TgZ(26,"code"),p._uU(27,"color"),p.qZA(),p._uU(28," style. "),p.qZA(),p.TgZ(29,"tui-notification",6),p._uU(30," Make sure you mark regions in your icons that need to be colored with "),p.TgZ(31,"code"),p._uU(32,'fill="currentColor"'),p.qZA(),p._uU(33," or "),p.TgZ(34,"code"),p._uU(35,'stroke="currentColor"'),p.qZA(),p._uU(36," . "),p.qZA(),p.TgZ(37,"p"),p._uU(38," If you want to bundle your icons, you need to provide "),p.TgZ(39,"code"),p._uU(40,"TUI_ICONS"),p.qZA(),p._uU(41," token with a dictionary of name to source code. Also you need to process your icons by "),p.TgZ(42,"code"),p._uU(43,"processIcons"),p.qZA(),p._uU(44," from "),p.TgZ(45,"code"),p._uU(46,"@taiga-ui/icons/scripts"),p.qZA(),p._uU(47," package. Then move icons to the assets folder and provide "),p.TgZ(48,"code"),p._uU(49,"TUI_SVG_OPTIONS"),p.qZA(),p._uU(50," as seen in example below: "),p.qZA(),p.TgZ(51,"tui-doc-example",7),p._UZ(52,"tui-icon-set-example-1"),p.qZA(),p.TgZ(53,"section",8),p.TgZ(54,"h2"),p._uU(55,"Sanitizer"),p.qZA(),p.TgZ(56,"p"),p._uU(57," If you use unsafe icons or "),p.TgZ(58,"a",9),p._uU(59," Editor component "),p.qZA(),p._uU(60," you need to provide "),p.TgZ(61,"code"),p._uU(62,"TUI_SANITIZER"),p.qZA(),p._uU(63," token, which is responsible for removing malicious code from the svg. We recommend to use "),p.TgZ(64,"a",10),p._uU(65," NgDompurify "),p.qZA(),p._uU(66," as a sanitizer. This library implements "),p.TgZ(67,"a",11),p._uU(68," DOMPurify "),p.qZA(),p._uU(69," as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. "),p.qZA(),p._UZ(70,"tui-doc-code",12),p.qZA(),p.qZA()),2&e&&(p.xp6(10),p.Q6J("expanded",o.expanded),p.xp6(2),p.Q6J("ngForOf",o.names),p.xp6(39),p.Q6J("content",o.example1),p.xp6(19),p.Q6J("code",o.exampleSanitizer))},directives:[l.q,g.V,u.yS,Z.v,f.S,i.sg,_.L,h.f,x,k.c,b.f,n.i3],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.sanitizer-example[_ngcontent-%COMP%]{display:block;padding-top:3.5rem}"],changeDetection:0}),e})(),w=(()=>{class e{}return e.ɵfac=function(o){return new(o||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[[i.ez,a.u5,n.Iq,r.k7,s.TuiLinkModule,s.TuiExpandModule,s.TuiButtonModule,c.TuiInputDateRangeModule,s.TuiNotificationModule,s.TuiTextfieldControllerModule,s.TuiHintModule,r.fV,u.Bz.forChild((0,r.Ve)(v))]]}),e})()}}]);