(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2230],{2230:n=>{n.exports='<tui-tabs [(activeItemIndex)]="activeItemIndex">\n    <button\n        tuiTab\n        (click)="onClick(\'Maps\')"\n    >\n        <tui-svg\n            src="tuiIconCreditCard"\n            class="tui-space_right-2"\n        />\n        Maps\n    </button>\n    <button\n        disabled\n        tuiTab\n        (click)="onClick(\'Calls\')"\n    >\n        <tui-svg\n            src="tuiIconPhone"\n            class="tui-space_right-2"\n        />\n        Calls\n    </button>\n    <button\n        tuiTab\n        (click)="onClick(\'Settings\')"\n    >\n        <tui-svg\n            src="tuiIconSettings"\n            class="tui-space_right-2"\n        />\n        Settings\n    </button>\n</tui-tabs>\n<tui-input-number\n    decimal="never"\n    class="tui-space_top-4"\n    [max]="2"\n    [min]="0"\n    [step]="1"\n    [(ngModel)]="activeItemIndex"\n>\n    activeItemIndex\n</tui-input-number>\n'}}]);