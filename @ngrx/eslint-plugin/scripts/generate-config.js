"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const prettier_1 = require("prettier");
const rules_1 = require("../src/utils/helper-functions/rules");
(async () => {
    const prettierConfig = await (0, prettier_1.resolveConfig)(__dirname);
    const RULE_MODULE = '@ngrx';
    const CONFIG_DIRECTORY = './modules/eslint-plugin/src/configs/';
    const isModule = (rule, moduleName) => rule.meta.docs?.ngrxModule === moduleName;
    const isTypeChecked = (rule) => rule.meta.docs?.requiresTypeChecking === true;
    writeConfig('all', (rule) => !isTypeChecked(rule));
    writeConfig('all-type-checked', (_rule) => true);
    writeConfig('store', (rule) => isModule(rule, 'store') && !isTypeChecked(rule));
    writeConfig('effects', (rule) => isModule(rule, 'effects') && !isTypeChecked(rule));
    writeConfig('effects-type-checked', (rule) => isModule(rule, 'effects'));
    writeConfig('component-store', (rule) => isModule(rule, 'component-store') && !isTypeChecked(rule));
    writeConfig('operators', (rule) => isModule(rule, 'operators') && !isTypeChecked(rule));
    writeConfig('signals', (rule) => isModule(rule, 'signals') && !isTypeChecked(rule));
    writeConfig('signals-type-checked', (rule) => isModule(rule, 'signals'));
    async function writeConfig(configName, predicate) {
        const rulesForConfig = Object.entries(rules_1.rulesForGenerate).filter(([_, rule]) => predicate(rule));
        const configRules = rulesForConfig.reduce((rules, [ruleName, _rule]) => {
            rules[`${RULE_MODULE}/${ruleName}`] = 'error';
            return rules;
        }, {});
        const tsCode = `
      /**
     * DO NOT EDIT
     * This file is generated
     */

      import type { TSESLint } from '@typescript-eslint/utils';

      export default (
        plugin: TSESLint.FlatConfig.Plugin,
        parser: TSESLint.FlatConfig.Parser,
      ): TSESLint.FlatConfig.ConfigArray => [
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
          name: 'ngrx/${configName}',
          languageOptions: {
            parser,
          },
          rules: ${JSON.stringify(configRules, null, 2)}
        },
      ];`;
        const tsConfigFormatted = await (0, prettier_1.format)(tsCode, {
            parser: 'typescript',
            ...prettierConfig,
        });
        (0, fs_1.writeFileSync)((0, path_1.join)(CONFIG_DIRECTORY, `${configName}.ts`), tsConfigFormatted);
        const jsonConfig = {
            parser: '@typescript-eslint/parser',
            plugins: ['@ngrx'],
            rules: configRules,
        };
        const jsonConfigFormatted = await (0, prettier_1.format)(JSON.stringify(jsonConfig, null, 2), {
            parser: 'json',
            ...prettierConfig,
        });
        (0, fs_1.writeFileSync)((0, path_1.join)(CONFIG_DIRECTORY, `${configName}.json`), jsonConfigFormatted);
    }
})();
//# sourceMappingURL=generate-config.js.map