(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3256],{3256:n=>{n.exports="@import '@taiga-ui/core/styles/taiga-ui-local';\n\ntui-wrapper-example-1 {\n    --tui-background-accent-1: #6200ee;\n    --tui-background-accent-1-hover: #6e14ef;\n    --tui-background-accent-1-pressed: #6e14ef;\n    --tui-text-primary-on-accent-1: #fff;\n}\n\n[tuiAppearance][data-appearance='material-textfield'] {\n    .transition(~'background, box-shadow');\n\n    background: #f5f5f5;\n    outline: none;\n    color: rgb(0 0 0 / 0.87);\n    border-radius: 0.25rem 0.25rem 0 0;\n    box-shadow: inset 0 -1px #8e8e8e;\n\n    .appearance-hover({\n        background: #ececec;\n        box-shadow: inset 0 -1px #1f1f1f;\n    });\n\n    .appearance-focus({\n        background: #dcdcdc;\n        box-shadow: inset 0 -2px var(--tui-background-accent-1) !important;\n\n        ~ label {\n            --tui-text-primary: var(--tui-background-accent-1);\n        }\n    });\n\n    &:invalid {\n        --tui-background-accent-1: #b00020;\n\n        box-shadow: inset 0 -1px var(--tui-background-accent-1) !important;\n\n        ~ label {\n            --tui-text-primary: #b00020 !important;\n        }\n    }\n}\n\n[tuiAppearance][data-appearance='material-button'] {\n    .transition(all);\n\n    border-radius: 0.25rem;\n    background: var(--tui-background-accent-1);\n    color: var(--tui-text-primary-on-accent-1);\n    outline: none;\n    text-transform: uppercase;\n    font-weight: bold;\n    box-shadow:\n        0 0.1875rem 0.0625rem -0.125rem rgb(0 0 0 / 0.2),\n        0 0.125rem 0.125rem 0 rgb(0 0 0 / 0.0014),\n        0 0.0625rem 0.3125rem 0 rgb(0 0 0 / 0.12);\n\n    .appearance-hover({\n        background: var(--tui-background-accent-1-hover);\n        box-shadow: 0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.2), 0rem 0.25rem 0.3125rem 0rem rgba(0, 0, 0, 0.14),\n        0rem 0.0625rem 0.625rem 0rem rgba(0, 0, 0, 0.12);\n    });\n\n    .appearance-active({\n        background: var(--tui-background-accent-1-pressed);\n        box-shadow: 0 0.3125rem 0.3125rem -0.1875rem rgba(0, 0, 0, 0.2),\n        0rem 0.5rem 0.625rem 0.0625rem rgba(0, 0, 0, 0.14), 0rem 0.1875rem 0.875rem 0.125rem rgba(0, 0, 0, 0.12);\n    });\n\n    .appearance-focus({\n        background: #883df2;\n    });\n}\n\n[tuiAppearance][data-appearance='material-checkbox'] {\n    color: var(--tui-text-primary-on-accent-1);\n    border-radius: 0.125rem;\n    border: 0.125rem solid rgb(0 0 0 / 0.54);\n    outline: none;\n\n    &::after {\n        .transition(all);\n\n        content: '';\n        position: absolute;\n        top: -0.625rem;\n        left: -0.625rem;\n        right: -0.625rem;\n        bottom: -0.625rem;\n        border-radius: 100%;\n        background: #000;\n        opacity: 0;\n        transform: scale(0);\n    }\n\n    .appearance-hover({\n        &:after {\n            opacity: 0.05;\n            transform: none;\n        }\n    });\n\n    .appearance-active({\n        &:after {\n            opacity: 0.1;\n            transform: none;\n        }\n    });\n\n    .appearance-focus({\n        &:after {\n            opacity: 0.1;\n            transform: none;\n        }\n    });\n\n    &:checked {\n        background: var(--tui-background-accent-1);\n        border-color: transparent;\n    }\n}\n"}}]);