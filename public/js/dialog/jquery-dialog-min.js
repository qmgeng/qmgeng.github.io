!function(t){"function"==typeof define&&define.amd?define("jquery-dialog",["jquery-widget"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){"use strict";function i(i,e,n){t.each(i,function(t,i){d[e](i,n)})}function e(i){var e=i.data("dlg_data"),n=e.config,o=n.css,a=t('<div class="wd-tt-ctn"><div class="wd-tt-text">'+(n.title||"")+"<div></div>");if(n.closeable||n.minify||n.maxify){var f=t("<div></div>");n.closeable&&f.append('<button class="wd-tp-op wd-tp-close '+o.topClose+'">&#xe603;</button>'),n.maxify&&f.append('<button class="wd-tp-op wd-tp-max '+o.topMaxify+'">&#xe601;</button>'),n.minify&&f.append('<button class="wd-tp-op wd-tp-min '+o.topMinify+'">&#xe604;</button>'),a.prepend(f)}n.title=a,n.closeable=!1;var c=t.widget(n);e.widget=c,c.delegate(".wd-tp-close","click",function(t){t.stopPropagation(),d.close(i)}),c.delegate(".wd-tp-min","click",function(t){t.stopPropagation(),d.minify(i)}),c.delegate(".wd-tp-max","click",function(t){t.stopPropagation(),d.maxify(i)})}var n={title:"",footer:"",modal:!1,draggable:!0,closeable:!0,autoOpen:!0,minify:!0,maxify:!0,css:{panel:"wd-ui-pn",title:"wd-ui-tt",content:"wd-ui-ctn",footer:"wd-ui-ft",close:"wd-ui-close",topClose:"wd-ui-tp-close",topMinify:"wd-ui-tp-min",topMaxify:"wd-ui-tp-max"},minimize:function(){},maximize:function(){}},d={},o=t(window);d.close=function(t){var i=t.data("dlg_data").widget;i.close()},d.open=function(t){var i=t.data("dlg_data").widget;i.open()},d.minify=function(t,i){var e=t.data("dlg_data").widget;"true"===i?(e.find(".wd-ctn").hide(),e.find(".wd-ft").hide()):"false"===i?(e.find(".wd-ctn").show(),e.find(".wd-ft").show()):(e.find(".wd-ctn").toggle(),e.find(".wd-ft").toggle())},d.maxify=function(t,i){var e=t.data("dlg_data"),n=e.widget;console.log(e,i),i===!0?(e.originSize={width:n.width(),height:n.height()},n.width(o.width()),n.find(".wd-ctn").height(o.height()-n.find(".wd-tt").outerHeight()-n.find(".wd-ft").outerHeight()),n.align({base:"screen"})):i===!1?(n.width(e.originSize.width),n.height(e.originSize.height),delete e.originSize,n.align({base:"screen"})):e.originSize?d.maxify(t,!1):d.maxify(t,!0)},t.fn.dialog=function(d,o){var a=this;return"string"==typeof d?void i(a,d,o):(d=t.extend(!0,{},n,d),t.each(a,function(i,n){n=t(n),d.content=n,n.data("dlg_data",{config:d}),e(n)}),a)}});