(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[40969],{40969:n=>{n.exports='<button\n    tuiDropdownAlign="right"\n    tuiLink\n    class="link"\n    [tuiDropdown]="dropdown"\n    [(tuiDropdownOpen)]="open"\n>\n    <tui-svg\n        src="tuiIconSortDown"\n        class="sort"\n        [class.sort_ascending]="ascending"\n    />\n    {{ primary }}\n    <tui-svg\n        src="tuiIconChevronDown"\n        class="arrow"\n        [class.arrow_open]="open"\n    />\n</button>\n\n<ng-template #dropdown>\n    <tui-data-list>\n        <tui-opt-group *ngFor="let group of items">\n            <button\n                *ngFor="let item of group"\n                tuiOption\n                class="item"\n                (click)="onClick(item)"\n            >\n                {{ item }}\n                <tui-svg\n                    *ngIf="itemIsActive(item)"\n                    src="tuiIconCheck"\n                />\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n'}}]);