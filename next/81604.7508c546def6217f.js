(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[81604],{81604:n=>{n.exports="```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\n\nimport {CustomTableBarsComponent} from './custom-table-bars.component';\n\n// ...\n\nexport class LazyModule {\n  constructor() {\n    // ...\n    inject(TuiTableBarsService)\n      .showTableBar(new PolymorpheusComponent(CustomTableBarsComponent, inject(INJECTOR)))\n      .subscribe();\n    // ...\n  }\n}\n```\n"}}]);