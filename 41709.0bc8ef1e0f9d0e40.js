(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[41709],{41709:e=>{e.exports='<tui-textfield\n    iconLeft="tuiIconSearchLarge"\n    iconRight="tuiIconSettingsLarge"\n>\n    <label tuiLabel>I am a label</label>\n    <input\n        placeholder="I am placeholder"\n        tuiTextfield\n        [(ngModel)]="value"\n    />\n    <tui-icon icon="tuiIconBellLarge" />\n    <tui-tooltip content="I am a hint" />\n</tui-textfield>\n\n<label tuiLabel>\n    For long labels it is better to use label outside as it can wrap to multiple lines\n    <tui-textfield\n        #m\n        iconLeft="tuiIconSearchLarge"\n        iconRight="tuiIconSettingsLarge"\n        tuiTextfieldSize="m"\n    >\n        <input\n            tuiTextfield\n            [placeholder]="m.focused ? \'I am placeholder\' : \'I am a label\'"\n            [(ngModel)]="value"\n        />\n        <tui-icon icon="tuiIconBellLarge" />\n        <tui-tooltip content="I am a hint" />\n    </tui-textfield>\n</label>\n\n<tui-textfield\n    #s\n    iconLeft="tuiIconSearchLarge"\n    iconRight="tuiIconSettingsLarge"\n    tuiTextfieldSize="s"\n>\n    <input\n        tuiTextfield\n        [placeholder]="s.focused ? \'I am placeholder\' : \'I am a label\'"\n        [(ngModel)]="value"\n    />\n    <tui-icon icon="tuiIconBellLarge" />\n    <tui-tooltip content="I am a hint" />\n</tui-textfield>\n'}}]);