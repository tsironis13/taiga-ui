(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[31789],{31789:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiButton} from '@taiga-ui/core';\nimport {\n    TuiBadgedContentComponent,\n    TuiBadgeNotificationComponent,\n    TuiChip,\n    TuiFadeDirective,\n} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [\n        TuiChip,\n        TuiAmountPipe,\n        AsyncPipe,\n        TuiBadgedContentComponent,\n        TuiBadgeNotificationComponent,\n        TuiButton,\n        TuiFadeDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected selected = false;\n}\n"}}]);