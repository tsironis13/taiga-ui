(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{YwjT:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiFormatDateModule",(function(){return ee}));var a=n("An66"),r=n("1VvW"),o=n("SVIu"),i=n("Qq0t"),u=n("kZht"),s=n("OZlg"),l=n("e0eB"),d=n("iyc4"),c={};function m(){return c}function f(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){f(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===h(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function g(e,t){f(2,arguments);var n=p(e),a=p(t),r=n.getTime()-a.getTime();return r<0?-1:r>0?1:r}function b(e,t){f(2,arguments);var n=p(e),a=p(t),r=n.getFullYear()-a.getFullYear(),o=n.getMonth()-a.getMonth();return 12*r+o}function v(e){f(1,arguments);var t=p(e);return t.setHours(23,59,59,999),t}function y(e){f(1,arguments);var t=p(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function w(e){f(1,arguments);var t=p(e);return v(t).getTime()===y(t).getTime()}function M(e,t){f(2,arguments);var n,a=p(e),r=p(t),o=g(a,r),i=Math.abs(b(a,r));if(i<1)n=0;else{1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-o*i);var u=g(a,r)===-o;w(p(e))&&1===i&&1===g(e,r)&&(u=!1),n=o*(i-Number(u))}return 0===n?0:n}function S(e,t){return f(2,arguments),p(e).getTime()-p(t).getTime()}var D={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function T(e){return e?D[e]:D.trunc}function x(e,t,n){f(2,arguments);var a=S(e,t)/1e3;return T(null==n?void 0:n.roundingMethod)(a)}var P={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function W(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,a=e.formats[n]||e.formats[e.defaultWidth];return a}}var C={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function k(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):r;a=e.formattingValues[o]||e.formattingValues[r]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[u]||e.values[i]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function E(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;var i,u=o[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?A(s,(function(e){return e.test(u)})):j(s,(function(e){return e.test(u)}));i=e.valueCallback?e.valueCallback(l):l,i=n.valueCallback?n.valueCallback(i):i;var d=t.slice(u.length);return{value:i,rest:d}}}function j(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function A(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function F(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.match(e.matchPattern);if(!a)return null;var r=a[0],o=t.match(e.parsePattern);if(!o)return null;var i=e.valueCallback?e.valueCallback(o[0]):o[0];i=n.valueCallback?n.valueCallback(i):i;var u=t.slice(r.length);return{value:i,rest:u}}}var O={code:"en-US",formatDistance:function(e,t,n){var a,r=P[e];return a="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:{date:W({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:W({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:W({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},formatRelative:function(e,t,n,a){return C[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:k({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:k({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:k({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:k({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:k({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:F({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:E({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:E({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:E({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:E({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:E({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function X(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function Y(e){return X({},e)}function N(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var z=n("8lHc"),H=n("YtkY");let q=(()=>{class e extends i.ub{format(e){return Object(z.a)(0,1e3).pipe(Object(H.a)(()=>function(e,t,n){var a,r;f(2,arguments);var o=m(),i=null!==(a=null!==(r=null==n?void 0:n.locale)&&void 0!==r?r:o.locale)&&void 0!==a?a:O;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var u=g(e,t);if(isNaN(u))throw new RangeError("Invalid time value");var s,l,d=X(Y(n),{addSuffix:Boolean(null==n?void 0:n.addSuffix),comparison:u});u>0?(s=p(t),l=p(e)):(s=p(e),l=p(t));var c,h=x(l,s),b=(N(l)-N(s))/1e3,v=Math.round((h-b)/60);if(v<2)return null!=n&&n.includeSeconds?h<5?i.formatDistance("lessThanXSeconds",5,d):h<10?i.formatDistance("lessThanXSeconds",10,d):h<20?i.formatDistance("lessThanXSeconds",20,d):h<40?i.formatDistance("halfAMinute",0,d):i.formatDistance(h<60?"lessThanXMinutes":"xMinutes",1,d):0===v?i.formatDistance("lessThanXMinutes",1,d):i.formatDistance("xMinutes",v,d);if(v<45)return i.formatDistance("xMinutes",v,d);if(v<90)return i.formatDistance("aboutXHours",1,d);if(v<1440){var y=Math.round(v/60);return i.formatDistance("aboutXHours",y,d)}if(v<2520)return i.formatDistance("xDays",1,d);if(v<43200){var w=Math.round(v/1440);return i.formatDistance("xDays",w,d)}if(v<86400)return c=Math.round(v/43200),i.formatDistance("aboutXMonths",c,d);if((c=M(l,s))<12){var S=Math.round(v/43200);return i.formatDistance("xMonths",S,d)}var D=c%12,T=Math.floor(c/12);return D<3?i.formatDistance("aboutXYears",T,d):D<9?i.formatDistance("overXYears",T,d):i.formatDistance("almostXYears",T+1,d)}(e,Date.now())))}}return e.\u0275fac=function(t){return J(t||e)},e.\u0275prov=u["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const J=u["\u0275\u0275getInheritedFactory"](q);var $=n("HTB9");let I=(()=>{class e{constructor(){this.now=Date.now()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-date-example-1"]],features:[u["\u0275\u0275ProvidersFeature"]([{provide:i.ub,useClass:q}])],decls:3,vars:5,template:function(e,t){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275pipe"](1,"async"),u["\u0275\u0275pipe"](2,"tuiFormatDate")),2&e&&u["\u0275\u0275textInterpolate1"]("Page refreshed ",u["\u0275\u0275pipeBind1"](1,1,u["\u0275\u0275pipeBind1"](2,3,t.now))," ago\n")},pipes:[a.b,$.a],encapsulation:2,changeDetection:0}),e})();var B,_,R=n("u8jZ");B=$localize`:␟31190c4fd218df32d211943c6721c5de82815e59␟5415457061839915323:Pipe to format timestamps/dates dynamically`,_=$localize`:␟f56585a3c184ecfd1b0c7d11db6ac349a76fa4dd␟5394200632017541262: Differs from built-in Angular date formatting pipe because it returns an ${"\ufffd#4\ufffd"}:START_TAG_CODE:Observable${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE:`;const V=["heading",$localize`:␟3670ebe91a9343232e6f22b9740a749eb82560d8␟1926908801765225875:Custom service`];function G(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18n"](1,B),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,_),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-doc-example",3),u["\u0275\u0275i18nAttributes"](6,V),u["\u0275\u0275element"](7,"tui-format-date-example-1"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("content",e.example1)}}var L,Q,U;function Z(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",4),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,L),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18n"](8,Q),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](9,"tui-doc-code",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"li"),u["\u0275\u0275elementStart"](11,"p"),u["\u0275\u0275i18n"](12,U),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](13,"tui-doc-code",7),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",e.exampleModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",e.exampleHtml),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",e.exampleTs)}}L=$localize`:␟a3ff07ceb026c8427062ff77040f4ec062e2560e␟214518388591205631: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFormatDatePipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use the pipe `,Q=$localize`:␟cbcdfa56cc5eb16d7a9378a2845caaa8a855ff9b␟2759379636501777950:Use pipe in template`,U=$localize`:␟38e42681839cdcf9b3c5fed5a3ced28d94d804ed␟8875486908016872788:Provide custom service for formatting`;let K=(()=>{class e{constructor(){this.exampleModule=n.e(1788).then(n.bind(null,"xjNr")),this.exampleHtml=n.e(1789).then(n.bind(null,"slz2")),this.exampleTs=n.e(1790).then(n.bind(null,"fk3H")),this.example1={TypeScript:n.e(1786).then(n.bind(null,"0eqi")),HTML:n.e(1785).then(n.bind(null,"17kc")),"service.ts":n.e(1787).then(n.bind(null,"/LaJ"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-format-date"]],decls:3,vars:0,consts:[["header","FormatDate","package","CORE","type","pipes"],["pageTab",""],["pageTab","Setup"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275template"](1,G,8,1,"ng-template",1),u["\u0275\u0275template"](2,Z,14,3,"ng-template",2),u["\u0275\u0275elementEnd"]())},directives:[s.a,l.a,d.a,I,R.a],encapsulation:2,changeDetection:0}),e})(),ee=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,o.m,i.tb,r.f.forChild(Object(o.x)(K))]]}),e})()}}]);