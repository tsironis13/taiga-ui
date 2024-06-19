(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7792],{7792:e=>{e.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiItem} from '@taiga-ui/cdk';\nimport {TuiChip, TuiItemsWithMore} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [TuiItemsWithMore, TuiChip, TuiItem, NgForOf],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Page {\n    protected readonly items = [\n        'John Cleese',\n        'Eric Idle',\n        'Graham Chapman',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n    ];\n\n    protected readonly required = 3;\n\n    protected getRemaining(index: number): number {\n        const offset = index < this.required ? index + 2 : index + 1;\n\n        return this.items.length - offset;\n    }\n}\n"}}]);