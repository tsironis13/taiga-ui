(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[24580],{24580:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDataList, TuiDropdown} from '@taiga-ui/core';\nimport {TuiChevron, TuiSwitch, TuiTabs} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        TuiTabs,\n        TuiChevron,\n        TuiDropdown,\n        TuiDataList,\n        ReactiveFormsModule,\n        TuiSwitch,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly testForm = new FormGroup({\n        option: new FormControl(false),\n    });\n\n    protected open = false;\n    protected openSettings = false;\n\n    protected index = 0;\n\n    protected onClick(): void {\n        this.open = false;\n        this.index = 1;\n    }\n}\n"}}]);