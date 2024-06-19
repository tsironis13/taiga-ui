(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[44131],{44131:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {assets} from '@demo/utils';\nimport type {TuiBooleanHandler} from '@taiga-ui/cdk';\nimport {TuiLet} from '@taiga-ui/cdk';\nimport {TuiDataList, TuiInitialsPipe} from '@taiga-ui/core';\nimport {TuiAvatarComponent, TuiDataListWrapper} from '@taiga-ui/kit';\nimport {TuiSelectModule} from '@taiga-ui/legacy';\nimport {delay, of} from 'rxjs';\n\nclass User {\n    constructor(\n        public readonly firstName: string,\n        public readonly lastName: string,\n        public readonly avatarUrl: string | null = null,\n    ) {}\n\n    public toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst databaseMockData: readonly User[] = [\n    new User('Roman', 'Sedov', 'https://avatars.githubusercontent.com/u/10106368'),\n    new User('Alex', 'Inkin', assets`/images/avatar.jpg`),\n    new User('Dmitriy', 'Demenskiy'),\n    new User('Evgeniy', 'Mamaev'),\n    new User('Ivan', 'Ishmametiev'),\n    new User('Igor', 'Katsuba'),\n    new User('Yulia', 'Tsareva'),\n];\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent6\",\n    imports: [\n        TuiSelectModule,\n        TuiLet,\n        AsyncPipe,\n        FormsModule,\n        TuiDataListWrapper,\n        TuiDataList,\n        TuiAvatarComponent,\n        TuiInitialsPipe,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected value = null;\n\n    protected readonly items$ = of(databaseMockData).pipe(delay(5000));\n\n    protected readonly disabledItemHandler: TuiBooleanHandler<User> = ({avatarUrl}) =>\n        !!avatarUrl;\n}\n"}}]);