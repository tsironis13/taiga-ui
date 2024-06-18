(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[74804],{74804:n=>{n.exports="import {NgForOf, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiIsString, TuiItemDirective} from '@taiga-ui/cdk';\nimport {\n    TuiDataListComponent,\n    TuiDropdownDirective,\n    TuiDropdownOpenDirective,\n    TuiIcon,\n    TuiOptionComponent,\n} from '@taiga-ui/core';\nimport {TuiChevron, TuiTabDirective, TuiTabsWithMoreComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [\n        TuiTabsWithMoreComponent,\n        TuiItemDirective,\n        NgForOf,\n        NgIf,\n        TuiTabDirective,\n        TuiChevron,\n        TuiDropdownDirective,\n        TuiDropdownOpenDirective,\n        TuiDataListComponent,\n        TuiOptionComponent,\n        TuiIcon,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected open = false;\n    protected readonly collaborators = ['Carol Cleveland', 'Neil Innes'];\n\n    protected readonly tabs = [\n        'John Cleese',\n        'Eric Idle',\n        this.collaborators,\n        'Michael Palin',\n        'Terry Jones',\n        'Terry Gilliam',\n        'Graham Chapman',\n    ];\n\n    protected activeElement = String(this.tabs[0]);\n\n    protected get activeItemIndex(): number {\n        if (this.collaborators.includes(this.activeElement)) {\n            return this.tabs.indexOf(this.collaborators);\n        }\n\n        return this.tabs.indexOf(this.activeElement);\n    }\n\n    protected stop(event: Event): void {\n        // We need to stop tab custom event so parent component does not think its active\n        event.stopPropagation();\n    }\n\n    protected onClick(activeElement: string): void {\n        this.activeElement = activeElement;\n    }\n\n    protected isString(tab: unknown): tab is string {\n        return tuiIsString(tab);\n    }\n}\n"}}]);