"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[2180],{2180:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-card-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputCardExample1 {\n    readonly form = new FormGroup({\n        card: new FormControl(``),\n        expire: new FormControl(``),\n        cvc: new FormControl(``),\n    });\n\n    get card(): string | null {\n        const value: string | null | undefined = this.form.get(`card`)?.value;\n\n        if ((value?.length ?? 0) < 7) {\n            return null;\n        }\n\n        switch (value?.charAt(0)) {\n            case `0`:\n            case `1`:\n            case `2`:\n                return `https://ng-web-apis.github.io/dist/assets/images/common.svg`;\n            case `3`:\n            case `4`:\n            case `5`:\n                return `https://ng-web-apis.github.io/dist/assets/images/geolocation.svg`;\n            case `6`:\n            case `7`:\n                return `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`;\n            case `8`:\n            case `9`:\n            default:\n                return `https://ng-web-apis.github.io/dist/assets/images/payment-request.svg`;\n        }\n    }\n}\n"}}]);