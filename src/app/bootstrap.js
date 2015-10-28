// bootstrap.js

// 不推荐使用独立的bootstrap.js，这里的代码较少，可以直接在main.js中处理掉
// 这里只是一个反面例子
define([
    'require',
    'angular',
    'angular-ui-router', 
    './app.module',
    './app.routes'
], function (require, ng) {
    'use strict';

    // 不推荐使用这种['domReady!']方式，这个是requirejs自身的扩展，不是amd的约定，
    // 在使用其他amd加载器或打包工具时，可能会遇到问题。
    // require(['domReady!'], function (doc) {
    //     ng.bootstrap(doc, ['app']);
    // });
    
    require(['domReady'], function (domReady) {
        domReady(function () {
            //document.getElementByName...
            ng.bootstrap(document, ['app']);
        })
    })
});
