import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_SCROLLBAR_OPTIONS, TuiScrollable, TuiScrollbar} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        TuiScrollable,
        TuiScrollbar,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).nativeScrollbar;

    protected items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);

    protected add(): void {
        this.items = [...this.items, `Item #${this.items.length}`];
    }
}
