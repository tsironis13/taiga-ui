(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[72570],{72570:n=>{n.exports='<tui-axes\n    axisY="none"\n    class="axes"\n    [axisXLabels]="axisXLabels"\n    [axisYSecondaryLabels]="axisYSecondaryLabels"\n    [horizontalLines]="2"\n    [horizontalLinesHandler]="horizontalLinesHandler"\n    [verticalLines]="4"\n    [verticalLinesHandler]="verticalLinesHandler"\n>\n    <tui-bar-chart\n        class="chart"\n        [max]="maxValue"\n        [tuiHintContent]="hint"\n        [value]="value"\n    ></tui-bar-chart>\n</tui-axes>\n\n<ng-template\n    #hint\n    let-setIndex\n>\n    <p\n        *ngFor="let item of value; let index = index"\n        class="hint"\n    >\n        <span\n            class="dot"\n            [style.background]="getBackground(index)"\n        ></span>\n        <span class="name">{{ getSetName(index) }}</span>\n        <tui-money\n            [singleColor]="true"\n            [value]="item[setIndex] * 1000"\n        ></tui-money>\n    </p>\n</ng-template>\n'}}]);