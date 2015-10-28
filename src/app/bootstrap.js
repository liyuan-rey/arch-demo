// bootstrap.js

// ���Ƽ�ʹ�ö�����bootstrap.js������Ĵ�����٣�����ֱ����main.js�д����
// ����ֻ��һ����������
define([
    'require',
    'angular',
    'angular-ui-router', 
    './app.module',
    './app.routes'
], function (require, ng) {
    'use strict';

    // ���Ƽ�ʹ������['domReady!']��ʽ�������requirejs�������չ������amd��Լ����
    // ��ʹ������amd��������������ʱ�����ܻ��������⡣
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
