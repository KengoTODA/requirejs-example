requirejs.config({
    shim: {
        'basic.plugin': ['basic']
    }
});
define(['basic.plugin'], function () {
    window.basic.plugin('hello, world!');
});
