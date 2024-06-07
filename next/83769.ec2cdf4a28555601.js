(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[83769],{83769:e=>{e.exports="import {AsyncPipe, NgForOf, NgIf} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiLetDirective} from '@taiga-ui/cdk';\nimport {TuiDataList, TuiInitialsPipe, TuiLoaderComponent} from '@taiga-ui/core';\nimport {TuiAvatarComponent} from '@taiga-ui/kit';\nimport {TuiComboBoxModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\nimport {databaseMockData} from './database-mock-data';\nimport {RequestService} from './request.service';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    selector: 'tui-combo-box-example-2',\n    imports: [\n        AsyncPipe,\n        NgIf,\n        NgForOf,\n        ReactiveFormsModule,\n        TuiLetDirective,\n        TuiComboBoxModule,\n        TuiDataList,\n        TuiAvatarComponent,\n        TuiLoaderComponent,\n        TuiInitialsPipe,\n        TuiTextfieldControllerModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    providers: [RequestService],\n})\nexport default class ExampleComponent {\n    protected readonly service = inject(RequestService);\n\n    protected search: string | null = '';\n\n    protected readonly control = new FormControl(databaseMockData[0]);\n}\n"}}]);