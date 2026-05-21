
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/views/suspend/suspend.component.ts": [
    "chunk-4IBEV25I.js"
  ],
  "src/app/views/dashboard/home/home.component.ts": [
    "chunk-ITITGRBE.js"
  ],
  "src/app/views/message-data-management/message-file-import/message-file-import.component.ts": [
    "chunk-AK4ODGUH.js",
    "chunk-4IUBZLKW.js"
  ],
  "src/app/views/message-data-management/message-file-export/message-file-export.component.ts": [
    "chunk-6IF6A32U.js",
    "chunk-4IUBZLKW.js"
  ],
  "node_modules/.pnpm/@angular+animations@21.2.13_@angular+core@21.2.13_@angular+compiler@21.2.13_rxjs@7.8.2_zone.js@0.15.1_/node_modules/@angular/animations/fesm2022/browser.mjs": [
    "chunk-WWWL7G52.js"
  ]
},
  assets: {
    'index.csr.html': {size: 70507, hash: '2e07becde62056d0f98676bc8d3798c4f8ff42cfbc26db469b317578dfa39d09', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1902, hash: 'be6238b82508c795d683af27f290677dc066b1b648eae11e253b6fe6550a8704', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UGKZ47SY.css': {size: 150719, hash: 'h4/Knva4sos', text: () => import('./assets-chunks/styles-UGKZ47SY_css.mjs').then(m => m.default)}
  },
};
