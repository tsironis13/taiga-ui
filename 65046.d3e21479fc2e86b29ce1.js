(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[65046],{65046:n=>{n.exports='<ng-container *tuiLet="count$ | async as count">\n    <div *ngIf="count | tuiIsPresent; else loading">\n        count is\n        <code>{{ count | json }}</code>\n    </div>\n\n    <ng-template #loading>\n        <div>\n            count is\n            <code>{{ count | json }}</code>\n            while it\'s loading\n        </div>\n    </ng-template>\n</ng-container>\n\n<button\n    tuiButton\n    size="m"\n    type="button"\n    class="tui-space_top-4"\n    (click)="loadCount()"\n>\n    Load count\n</button>\n'}}]);