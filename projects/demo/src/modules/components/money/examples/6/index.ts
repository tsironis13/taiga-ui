import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNumberFormatProvider} from '@taiga-ui/core';
import {of} from 'rxjs';

@Component({
    selector: 'tui-money-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiNumberFormatProvider(of({rounding: 'round'}))],
})
export class TuiMoneyExample6 {}
