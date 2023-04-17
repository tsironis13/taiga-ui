(window.webpackJsonp=window.webpackJsonp||[]).push([[598],{CqnN:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiContextWithImplicit,\n    TuiIdentityMatcher,\n    TuiStringHandler,\n} from '@taiga-ui/cdk';\n\nconst INCOME = {\n    name: 'Income',\n    items: [\n        'Donations',\n        'Product placement',\n        'Sponsorship',\n        'Found on the street',\n        'Unexpected inheritance',\n        'Investments',\n        'Color copier',\n    ],\n};\n\nconst EXPENSES = {\n    name: 'Expenses',\n    items: [\n        'Energy drinks',\n        'Coffee',\n        'Ramen',\n        'Bills',\n        'Back medicine',\n        'Warhammer 40000 figurines',\n    ],\n};\n\n@Component({\n    selector: 'tui-data-list-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    styles: [\n        `\n            .control {\n                width: 320px;\n            }\n        `,\n    ],\n})\nexport class TuiDataListExample4 {\n    value = [];\n\n    readonly items = [INCOME, EXPENSES];\n\n    readonly identityMatcher: TuiIdentityMatcher<readonly string[]> = (items1, items2) =>\n        items1.length === items2.length && items1.every(item => items2.includes(item));\n\n    readonly valueContent: TuiStringHandler<TuiContextWithImplicit<readonly string[]>> =\n        ({$implicit}) => {\n            if (!$implicit.length) {\n                return 'All';\n            }\n\n            const selected = this.items.find(({items}) =>\n                this.identityMatcher($implicit, items),\n            );\n\n            return selected ? `${selected.name} only` : `Selected: ${$implicit.length}`;\n        };\n}\n"}}]);