(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[47002],{47002:n=>{n.exports="import {Component} from '@angular/core';\nimport {RouterLink, RouterLinkActive} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {DemoRoute} from '@demo/routes';\nimport {TuiRepeatTimes} from '@taiga-ui/cdk';\nimport {\n    TuiAppearance,\n    TuiButton,\n    TuiDataListComponent,\n    TuiDropdown,\n    TuiExpand,\n    TuiIcon,\n    TuiOptionComponent,\n    TuiSurface,\n    TuiTitle,\n} from '@taiga-ui/core';\nimport {TuiNavigationModule} from '@taiga-ui/experimental';\nimport {\n    TuiAvatarComponent,\n    TuiBadgeDirective,\n    TuiBadgeNotificationComponent,\n    TuiChevron,\n    TuiFadeDirective,\n    TuiTabDirective,\n    TuiTabsHorizontalDirective,\n} from '@taiga-ui/kit';\nimport {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiNavigationModule,\n        TuiButton,\n        TuiIcon,\n        TuiChevron,\n        TuiDropdown,\n        TuiFadeDirective,\n        TuiDataListComponent,\n        TuiOptionComponent,\n        TuiBadgeNotificationComponent,\n        TuiAvatarComponent,\n        RouterLink,\n        RouterLinkActive,\n        TuiAppearance,\n        TuiExpand,\n        TuiBadgeDirective,\n        TuiTabsHorizontalDirective,\n        TuiTabDirective,\n        TuiRepeatTimes,\n        TuiCardLarge,\n        TuiHeader,\n        TuiSurface,\n        TuiTitle,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected open = false;\n    protected expanded = false;\n    protected submenu = false;\n    protected readonly routes = DemoRoute;\n}\n"}}]);