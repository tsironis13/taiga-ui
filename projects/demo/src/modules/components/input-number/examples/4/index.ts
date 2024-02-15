import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNumberFormatProvider} from '@taiga-ui/core';
import {of} from 'rxjs';

@Component({
    selector: 'tui-input-number-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiNumberFormatProvider(of({decimalSeparator: '.', thousandSeparator: ','})),
    ],
})
export class TuiInputNumberExample4 {
    value = 1234.56;
}
