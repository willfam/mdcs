"use strict";
/**
 * DO NOT EDIT
 * This file is generated
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (plugin, parser) => [
    {
        name: 'ngrx/base',
        languageOptions: {
            parser,
        },
        plugins: {
            '@ngrx': plugin,
        },
    },
    {
        name: 'ngrx/signals-type-checked',
        languageOptions: {
            parser,
        },
        rules: {
            '@ngrx/enforce-type-call': 'error',
            '@ngrx/prefer-protected-state': 'error',
            '@ngrx/signal-state-no-arrays-at-root-level': 'error',
            '@ngrx/signal-store-feature-should-use-generic-type': 'error',
            '@ngrx/with-state-no-arrays-at-root-level': 'error',
        },
    },
];
//# sourceMappingURL=signals-type-checked.js.map