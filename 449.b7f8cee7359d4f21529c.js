(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{H0jF:function(n,t,a){"use strict";a.r(t),t.default='<p i18n>Statuses</p>\n<tui-badge\n    class="tui-space_right-2"\n    [value]="-6"\n></tui-badge>\n<tui-badge\n    status="primary"\n    class="tui-space_right-2"\n    [value]="6"\n></tui-badge>\n<tui-badge\n    status="success"\n    value="Success"\n    class="tui-space_right-2"\n></tui-badge>\n<tui-badge\n    status="error"\n    value="Error"\n    class="tui-space_right-2"\n></tui-badge>\n<tui-badge\n    status="warning"\n    value="Warning"\n    class="tui-space_right-2"\n></tui-badge>\n<tui-badge\n    status="neutral"\n    value="Neutral"\n    class="tui-space_right-2"\n></tui-badge>\n<tui-badge\n    status="info"\n    value="Info"\n    class="tui-space_right-2"\n></tui-badge>\n<div\n    tuiMode="onLight"\n    class="tui-space_right-2 outline outline_dark"\n>\n    <tui-badge [value]="6"></tui-badge>\n</div>\n<div\n    tuiMode="onDark"\n    class="outline outline_light"\n>\n    <tui-badge [value]="6"></tui-badge>\n</div>\n<p i18n>\n    Use CSS and\n    <code>status="custom"</code>\n    for support colors\n</p>\n<tui-badge\n    *tuiRepeatTimes="let index of 20"\n    status="custom"\n    value="Taiga"\n    class="tui-space_horizontal-2 tui-space_vertical-2 support-{{ index + 1 }}"\n    [hoverable]="true"\n></tui-badge>\n'}}]);