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
        name: 'ngrx/signals',
        languageOptions: {
            parser,
        },
        rules: {
            '@ngrx/enforce-type-call': 'error',
            '@ngrx/prefer-protected-state': 'error',
            '@ngrx/signal-store-feature-should-use-generic-type': 'error',
        },
    },
];
//# sourceMappingURL=signals.js.map