(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[23261],{23261:n=>{n.exports="import {AsyncPipe, NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TUI_ALWAYS_DASHED,\n    TUI_ALWAYS_NONE,\n    TuiAxesComponent,\n    TuiBarChartComponent,\n} from '@taiga-ui/addon-charts';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {tuiCeil, tuiPure} from '@taiga-ui/cdk';\nimport {TuiHintModule} from '@taiga-ui/core';\n\nconst BENJI = 100;\n\n@Component({\n    standalone: true,\n    imports: [\n        TuiAxesComponent,\n        TuiBarChartComponent,\n        TuiHintModule,\n        TuiAmountPipe,\n        AsyncPipe,\n        NgForOf,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    private readonly setNames = ['cdk', 'core', 'kit', 'charts'];\n\n    protected readonly value: ReadonlyArray<[number, number, number, number]> = [\n        [10, 20, 3, 7],\n        [15, 18, 24, 1],\n        [34, 23, 12, 9],\n        [30, 14, 18, 14],\n    ];\n\n    protected readonly maxValue = 40;\n\n    protected readonly axisYSecondaryLabels = [\n        '',\n        `${this.getMax(this.value) / 2} k`,\n        `${this.getMax(this.value)} k`,\n    ];\n\n    protected readonly axisXLabels = ['Q1', 'Q2', 'Q3', 'Q4'];\n\n    protected readonly horizontalLinesHandler = TUI_ALWAYS_DASHED;\n\n    protected readonly verticalLinesHandler = TUI_ALWAYS_NONE;\n\n    protected getPercent(set: [number, number, number, number]): number {\n        return (BENJI * Math.max(...set)) / this.getMax(this.value);\n    }\n\n    protected getSetName(index: number): string {\n        return this.setNames[index];\n    }\n\n    protected getBackground(index: number): string {\n        return `var(--tui-chart-${index})`;\n    }\n\n    @tuiPure\n    private getMax(value: ReadonlyArray<[number, number, number, number]>): number {\n        return tuiCeil(\n            value.reduce((max, value) => Math.max(...value, max), 0),\n            -1,\n        );\n    }\n}\n"}}]);