(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[92213],{92213:n=>{n.exports='<section class="zoom-controller">\n    <button\n        appearance="icon"\n        iconLeft="tuiIconMinus"\n        size="xs"\n        tuiIconButton\n        tuiTheme="night"\n        type="button"\n        class="minus"\n        (click)="change(-0.25)"\n    ></button>\n    <label\n        tuiSliderThumbLabel\n        class="slider-wrapper"\n    >\n        <div\n            tuiHintAppearance="onDark"\n            tuiHintDirection="top"\n            [tuiHint]="hint"\n            [tuiHintManual]="!!(showHint$ | async)"\n        ></div>\n\n        <ng-template #hint>\n            {{ value | percent }}\n        </ng-template>\n\n        <input\n            step="any"\n            tuiSlider\n            type="range"\n            [max]="max"\n            [min]="min"\n            [(ngModel)]="value"\n        />\n    </label>\n    <button\n        appearance="icon"\n        iconLeft="tuiIconPlus"\n        size="xs"\n        tuiIconButton\n        tuiTheme="night"\n        type="button"\n        class="plus"\n        (click)="change(+0.25)"\n    ></button>\n</section>\n'}}]);