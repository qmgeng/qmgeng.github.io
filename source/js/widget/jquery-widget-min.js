!function(e){"function"==typeof define&&define.amd?define("jquery-widget",["jquery-align"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){"use strict";function t(t,n){n?"string"==typeof n?t.html(n):(n instanceof e||f(n))&&t.append(n):n===!1&&t.remove()}function n(n,d){var a=d.css,l=n.find(".wd-ctn"),f=n.find(".wd-tt"),u=n.find(".wd-ft"),r=d.title,p=d.content,h=d.footer,w=!1;if(n.addClass(a.panel),n.css({"z-index":++i}),t(f,r),t(l,p),t(u,h),f.addClass(a.title),l.addClass(a.content),u.addClass(a.footer),l.css({width:d.width,height:d.height,"min-width":d.width,"min-height":d.height}),d.closeable){var v=e('<button class="wd-close">'+d.closeText+"</button>");v.on("click",function(){n.close()}).addClass(a.close),u.append(v)}d.dragable&&!d.align.fixed&&o(n);var g;d.modal&&(g=e('<div class="wd-ui-modal"></div>'),g.width(s.width()),g.height(s.height()),g.click(function(e){e.stopPropagation()}),g.hide(),c.append(g));var m=n.hide;n.hide=function(){m.call(n),d.modal&&g.hide()};var y=n.show;n.show=function(){y.call(n),n.align(d.align),n.css("min-width",n.width()),d.modal&&g.show().align({base:"screen",fixed:!0})},n.open=function(){w||(w=!w,n.show(),d.open.call(n))},n.close=function(){w&&(w=!w,n.hide(),d.close.call(n))},n.isOpened=function(){return w},n.destroy=function(){n.remove()},n.on("click",function(){n.css("z-index",++i)}),c.append(n),d.autoOpen?n.open():(n.hide(),d.modal&&g.hide())}function o(t){function n(e){e.preventDefault(),e.stopPropagation()}function o(t){var o=e(t.target).offset();s.x=t.pageX,s.y=t.pageY,l.x=o.left,l.y=o.top,a.on({mousemove:i,mouseup:d,selectstart:n}),c.addClass("wd-ui-move")}function i(e){var n={x:e.pageX-s.x,y:e.pageY-s.y},o={x:l.x+n.x,y:l.y+n.y};t.align({base:[o.x,o.y],points:["cc","tl"]})}function d(){a.off({mousemove:i,mouseup:d,selectstart:n}),c.removeClass("wd-ui-move")}var c=t.find(".wd-tt"),s={},l={};c.on("mousedown",o)}var i=1e6,d={content:"",title:"",footer:"",modal:!1,css:{panel:"wd-ui-pn",title:"wd-ui-tt",content:"wd-ui-ctn",footer:"wd-ui-ft",close:"wd-ui-close"},dragable:!0,closeable:!0,autoOpen:!0,closeText:"close",align:{base:"screen",points:["cc","cc"],fixed:!1,offset:[0,0]},width:"auto",height:"auto",close:function(){},open:function(){}},c=e("body"),s=e(window),a=e(document),l=e('<div class="wd-pn"><div class="wd-tt"></div><div class="wd-ctn"></div><div class="wd-ft"></div></div>'),f="object"==typeof HTMLElement?function(e){return e instanceof HTMLElement}:function(e){return e&&"object"==typeof e&&1===e.nodeType&&"string"==typeof e.nodeName};e.widget=function(t){t=e.extend({},d,t);var o=l.clone();return n(o,t),o}});