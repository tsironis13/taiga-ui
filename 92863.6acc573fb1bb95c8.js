(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[92863],{92863:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiAmountOptionsProvider, TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TUI_IS_MOBILE} from '@taiga-ui/cdk';\nimport {TuiTitle} from '@taiga-ui/core';\nimport {TuiAvatar, TuiBadge, TuiFadeDirective} from '@taiga-ui/kit';\nimport {TuiBlockDetails} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        AsyncPipe,\n        TuiAvatar,\n        TuiAmountPipe,\n        TuiBlockDetails,\n        TuiBadge,\n        TuiTitle,\n        TuiFadeDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [tuiAmountOptionsProvider({sign: 'always'})],\n})\nexport default class Example {\n    protected readonly isMobile = inject(TUI_IS_MOBILE);\n}\n"}}]);