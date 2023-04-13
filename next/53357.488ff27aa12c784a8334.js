(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[53357],{53357:(e,t,o)=>{o.r(t),o.d(t,{ExampleTuiEditorUploadImagesModule:()=>z});var i=o(12057),r=o(24751),n=o(33982),a=o(29851),u=o(48014),s=o(68807),d=o(3497),l=o(55908),c=o(74788),p=o(88331),g=o(66596),T=o(57068),m=o(22759),h=o(71289),I=o(88002),v=o(43190),L=o(68939);function f(e){return t=>{const o=new FileReader;return e.loading$.next(!0),o.readAsDataURL(t),(0,m.R)(o,"load").pipe((0,h.g)(2e3),(0,I.U)((()=>String(o.result))),(0,v.w)((t=>e.save(t))),(0,L.x)((()=>e.loading$.next(!1))))}}var M=o(64762),y=o(26215),Z=o(94402),b=o(53585);let w=(()=>{class e{constructor(){this.loading$=new y.X(!1)}static createBody(e){const t=new FormData;return t.append("image",e.split(",").pop()||""),new URLSearchParams(t)}get isLoading(){return this.loading$.getValue()}save(t){const{host:o,apiKey:i,expiration:r}=b.environment.imgbb;return(0,Z.D)(fetch(`${o}/1/upload?key=${i}&expiration=${r}`,{method:"POST",body:e.createBody(t),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((e=>(0,M.mG)(this,void 0,void 0,(function*(){return e.json()}))))).pipe((0,I.U)((e=>e.data.url)))}}return e.ɵfac=function(t){return new(t||e)},e.ɵprov=c.Yz7({token:e,factory:e.ɵfac,providedIn:"root"}),e})();var _=o(23184),A=o(69303),E=o(21082),x=o(36951),D=o(20179),N=o(7114);const S=function(){return[]};let U=(()=>{class e{constructor(e,t){this.doc=e,this.imgbbService=t,this.builtInTools=[u.TuiEditorTool.Undo,u.TuiEditorTool.Img],this.control=new r.NI(""),this.validator=({value:e})=>this.editor.focused||this.imgbbService.isLoading||!this.doc.hasFocus()||e.length?null:{empty:new s.TuiValidationError("ERROR: content must not be empty")},this.control.patchValue('<img data-type="image-editor" src="/assets/images/lumberjack.png" width="300"><p>Try to drag right border of image!</p><p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.</p><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxzdHlsZT4uYXtmaWxsOiNkZDAwMzF9LmJ7ZmlsbDojYzMwMDJmfS5je2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGNsYXNzPSJhIiBkPSJtNDMuNiAxMi42bC0yLjggMjQuNy0xNS44IDguNy0xNS44LTguNy0yLjgtMjQuNyAxOC42LTYuNnoiLz48cGF0aCBjbGFzcz0iYiIgZD0ibTI1IDZsMTguNiA2LjYtMi44IDI0LjctMTUuOCA4Ljd2LTE1LjMtMjAuMy00LjR6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iYyIgZD0ibTM2LjYgMzYuNWgtNC4zbC0yLjQtNS44aC05LjlsLTIuMyA1LjhoLTQuM2wxMS42LTI2LjF6bS0xMS42LTE3LjZsLTMuNCA4LjJoNi44eiIvPjwvc3ZnPg==" />')}}return e.ɵfac=function(t){return new(t||e)(c.Y36(i.K0),c.Y36(w))},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-editor-upload-images-example-1"]],viewQuery:function(e,t){if(1&e&&c.Gf(u.TuiEditorComponent,7),2&e){let e;c.iGM(e=c.CRH())&&(t.editor=e.first)}},features:[c._Bn([s.TuiDestroyService,{provide:u.TUI_EDITOR_EXTENSIONS,deps:[c.zs3],useFactory:e=>[Promise.resolve().then(o.bind(o,2823)).then((({StarterKit:e})=>e)),Promise.resolve().then(o.bind(o,53380)).then((({createImageEditorExtension:t})=>t(e))),Promise.resolve().then(o.bind(o,44632)).then((({default:e})=>e.configure({inline:!0,allowBase64:!0})))]},{provide:u.TUI_EDITOR_MIN_IMAGE_WIDTH,useValue:150},{provide:u.TUI_EDITOR_MAX_IMAGE_WIDTH,useValue:400},{provide:u.TUI_IMAGE_LOADER,useFactory:f,deps:[w]}])],decls:13,vars:16,consts:[[3,"overlay","showLoader"],[1,"editor",3,"formControl","tools","tuiValidator"],[3,"formControl","error"],[3,"content"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-loader",0),c.ALo(1,"async"),c._UZ(2,"tui-editor",1),c.qZA(),c._UZ(3,"tui-error",2),c.ALo(4,"async"),c.ALo(5,"tuiFieldError"),c.TgZ(6,"h4"),c._uU(7,"HTML:"),c.qZA(),c._UZ(8,"tui-editor-socket",3),c.TgZ(9,"h4"),c._uU(10,"Text:"),c.qZA(),c.TgZ(11,"p"),c._uU(12),c.qZA()),2&e&&(c.Q6J("overlay",!0)("showLoader",!!c.lcZ(1,9,t.imgbbService.loading$)),c.xp6(2),c.Q6J("formControl",t.control)("tools",t.builtInTools)("tuiValidator",t.validator),c.xp6(1),c.Q6J("formControl",t.control)("error",c.lcZ(4,11,c.lcZ(5,13,c.DdM(15,S)))),c.xp6(5),c.Q6J("content",t.control.value||""),c.xp6(4),c.Oqu(t.control.value))},directives:[_.k,A.a,r.JJ,r.oH,E.W,x.v,D.D],pipes:[i.Ov,N.A],encapsulation:2,changeDetection:0}),e})(),j=(()=>{class e{constructor(){this.example1={TypeScript:o.e(47614).then(o.t.bind(o,47614,17)),HTML:o.e(53474).then(o.t.bind(o,53474,17)),"./image-loader.ts":o.e(73693).then(o.t.bind(o,73693,17)),"./imgbb.service.ts":o.e(33932).then(o.t.bind(o,33932,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["editor-upload-images"]],features:[c._Bn([{provide:u.TUI_EDITOR_EXTENSIONS,useValue:u.defaultEditorExtensions}])],decls:11,vars:1,consts:[["header","Editor","package","ADDON-EDITOR","type","components"],["tuiLink","","href","https://www.tiptap.dev/"],["tuiLink","","routerLink","/icon-set","fragment","sanitizer"],["id","upload-images","heading","Upload images to a web server",3,"content"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-doc-page",0),c.TgZ(1,"p"),c._uU(2," Rich Text Editor based on "),c.TgZ(3,"a",1),c._uU(4," TipTap Editor "),c.qZA(),c._uU(5," for using with Angular forms. For safety reasons use a "),c.TgZ(6,"a",2),c._uU(7," sanitizer "),c.qZA(),c._uU(8," with this component. "),c.qZA(),c.TgZ(9,"tui-doc-example",3),c._UZ(10,"tui-editor-upload-images-example-1"),c.qZA(),c.qZA()),2&e&&(c.xp6(9),c.Q6J("content",t.example1))},directives:[p.q,g.V,n.yS,T.f,U],encapsulation:2,changeDetection:0}),e})(),z=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=c.oAB({type:e}),e.ɵinj=c.cJS({imports:[[i.ez,s.TuiActiveZoneModule,d.TuiSvgModule,d.TuiLinkModule,d.TuiHostedDropdownModule,d.TuiButtonModule,a.fV,r.u5,r.UX,u.TuiEditorModule,d.TuiLoaderModule,u.TuiEditorSocketModule,d.TuiErrorModule,l.TuiFieldErrorPipeModule,n.Bz.forChild((0,a.Ve)(j)),s.TuiValidatorModule]]}),e})()}}]);