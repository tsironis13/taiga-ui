"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[4262],{4262:n=>{n.exports='import {Component} from \'@angular/core\';\nimport {TUI_SANITIZER} from \'@taiga-ui/core\';\nimport {NgDompurifySanitizer} from \'@tinkoff/ng-dompurify\';\n\n@Component({\n    selector: \'inline-svg-example\',\n    template: `\n        <tui-svg\n            class="example"\n            [src]="svg"\n        ></tui-svg>\n    `,\n    styleUrls: [\'./inline-svg.style.less\'],\n    providers: [\n        {\n            provide: TUI_SANITIZER,\n            useClass: NgDompurifySanitizer,\n        },\n    ],\n})\nexport class InlineSvgExampleComponent {\n    svg = `\n        <svg xmlns="http://www.w3.org/2000/svg"\n     viewBox="0 0 200 200"\n     preserveAspectRatio="xMidYMid slice"\n     id="svg">\n\n    <linearGradient id="grad">\n        <stop class="stop stop--1"\n              stop-color="crimson"\n              offset="0"></stop>\n        <stop class="stop stop--2"\n              stop-color="gold"\n              offset="49%"></stop>\n        <stop class="stop stop--2"\n              stop-color="gold"\n              offset="51%"></stop>\n        <stop class="stop stop--3"\n              stop-color="teal"\n              offset="100%"></stop>\n    </linearGradient>\n\n    <pattern id="pattern"\n              viewBox="0 0 50 50"\n              width="2" height="2"\n             patternUnits="userSpaceOnUse">\n        <path stroke="black"\n              stroke-width="6"\n              d="M0,50 50,0\n                 "></path>\n    </pattern>\n\n    <mask id="mask">\n        <rect width="100%" height="100%"\n          fill="white">\n        </rect>\n        <rect width="100%" height="100%"\n          fill="url(#pattern)">\n        </rect>\n    </mask>\n\n    <g mask="url(#mask)">\n        <text x="50.7%" y="50.7%" dy=".25em"\n          text-anchor="middle"\n          fill="none"\n          stroke="url(#grad)"\n          stroke-width=".25"\n          >Text</text>\n       <text x="50%" y="50%" dy=".25em"\n          text-anchor="middle"\n          fill="url(#grad)"\n          >Text</text>\n    </g>\n</svg>`;\n}\n'}}]);