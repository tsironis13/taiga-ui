(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[95839],{95839:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-items-with-more-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiItemsWithMoreExample1 {\n    readonly items = [\n        'John Cleese',\n        'Eric Idle',\n        'Graham Chapman',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n    ];\n\n    readonly required = 3;\n\n    getRemaining(index: number): number {\n        const offset = index < this.required ? index + 2 : index + 1;\n\n        return this.items.length - offset;\n    }\n}\n"}}]);