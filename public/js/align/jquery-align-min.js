!function(e){"function"==typeof define&&define.amd?define("jquery-align",["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){"use strict";function t(t,i,n){var s,o,a,f={x:0,y:0},u=i[0],x=0;switch(e.isFunction(t.preventDefault)?(t.pageX||(t=new e.Event(t)),f.x=t.pageX,f.y=t.pageY,o=0,x=0):"string"==typeof t?"screen"===t?(f.x=0,f.y=n?0:c.scrollTop(),o=r.width(),x=r.height()):"page"===t?(f.x=0,f.y=0,o=c.width(),x=c.height()):a=e(t):e.isArray(t)?(f.x=t[0],f.y=t[1],o=0,x=0):t instanceof e&&(a=t),a&&(s=a.offset(),f.x=s.left,f.y=s.top,o=a.outerWidth(),x=a.outerHeight()),u.charAt(0)){case"c":f.y+=x/2;break;case"b":f.y+=x}switch(u.charAt(1)){case"c":f.x+=o/2;break;case"r":f.x+=o}return f}function i(e,t,i){var n={x:t[0],y:t[1]},s=e.outerWidth(!0),c=e.outerHeight(!0),r=i[1];switch(r.charAt(0)){case"c":n.y-=c/2;break;case"b":n.y-=c}switch(r.charAt(1)){case"c":n.x-=s/2;break;case"r":n.x-=s}return n}function n(e){var t,i,n=e.parent();for(i=n.css("position");!n.is("html")&&"absolute"!==i&&"fixed"!==i;)n=n.parent(),i=n.css("position");return t=n.offset(),{x:t.left,y:t.top}}var s={base:"screen",points:["cc","cc"],fixed:!1,offset:[0,0]},c=e(document),r=e(window);e.fn.align=function(c){c=e.extend({},s,c),c.fixed="screen"===c.base&&c.fixed;var r=this,o=t(c.base,c.points,c.fixed);e.each(r,function(t,s){s=e(s);var r=i(s,c.offset,c.points),a=n(s);s.css({position:c.fixed?"fixed":"absolute",left:o.x+r.x-a.x,top:o.y+r.y-a.y})})}});