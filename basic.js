!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).LottieInteractivity={})}(this,(function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function o(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}var s={player:"lottie-player"},l="[lottieInteractivity]:",c=function(){function e(){var i=this,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,A=c.actions,C=c.container,T=c.mode,H=c.player,O=r(c,["actions","container","mode","player"]);if(n(this,e),p.set(this,{writable:!0,value:function(){if(i.player){var e=function(){i.player.addEventListener("enterFrame",o(i,E)),i.container.addEventListener("mouseenter",o(i,w)),i.container.addEventListener("mouseleave",o(i,I)),i.container.addEventListener("touchstart",o(i,w),{passive:!0}),i.container.addEventListener("touchend",o(i,I),{passive:!0})};i.stateHandler.set("loop",(function(){i.actions[i.interactionIdx].loop?i.player.loop=parseInt(i.actions[i.interactionIdx].loop)-1:i.player.loop=!0,i.player.autoplay=!0})),i.stateHandler.set("autoplay",(function(){i.player.loop=!1,i.player.autoplay=!0})),i.stateHandler.set("click",(function(){i.player.loop=!1,i.player.autoplay=!1,i.container.addEventListener("click",o(i,d))})),i.stateHandler.set("hover",(function(){i.player.loop=!1,i.player.autoplay=!1,i.container.addEventListener("mouseenter",o(i,d)),i.container.addEventListener("touchstart",o(i,d),{passive:!0})})),i.transitionHandler.set("click",(function(){i.container.addEventListener("click",o(i,y))})),i.transitionHandler.set("hover",(function(){i.container.addEventListener("mouseenter",o(i,y)),i.container.addEventListener("touchstart",o(i,y),{passive:!0})})),i.transitionHandler.set("hold",e),i.transitionHandler.set("pauseHold",e),i.transitionHandler.set("repeat",(function(){i.player.loop=!0,i.player.autoplay=!0;i.player.addEventListener("loopComplete",(function e(){o(i,L).call(i,{handler:e})}))})),i.transitionHandler.set("onComplete",(function(){"loop"===i.actions[i.interactionIdx].state?i.player.addEventListener("loopComplete",o(i,f)):i.player.addEventListener("complete",o(i,f))})),i.transitionHandler.set("seek",(function(){i.player.stop(),i.player.addEventListener("enterFrame",o(i,g)),i.container.addEventListener("mousemove",o(i,u)),i.container.addEventListener("touchmove",o(i,v),{passive:!1}),i.container.addEventListener("mouseout",o(i,m))}))}}}),d.set(this,{writable:!0,value:function(){var e=i.actions[i.interactionIdx].forceFlag;e||!0!==i.player.isPaused?e&&o(i,b).call(i,!0):o(i,b).call(i,!0)}}),h.set(this,{writable:!0,value:function(){0===i.clickCounter?(i.player.play(),i.clickCounter++):(i.clickCounter++,i.player.setDirection(-1*i.player.playDirection),i.player.play())}}),y.set(this,{writable:!0,value:function(){var e=i.actions[i.interactionIdx].forceFlag,t=i.actions[i.interactionIdx].state,n=i.actions[i.interactionIdx].transition;if("chain"===i.mode){if(i.actions[i.interactionIdx].count){var a=parseInt(i.actions[i.interactionIdx].count);if(i.clickCounter<a-1)return void(i.clickCounter+=1)}return i.clickCounter=0,!e&&"click"===n&&"click"===t||"hover"===n&&"hover"===t?i.transitionHandler.get("onComplete").call():i.nextInteraction(),i.container.removeEventListener("click",o(i,y)),void i.container.removeEventListener("mouseenter",o(i,y))}e||!0!==i.player.isPaused?e&&i.player.goToAndPlay(0,!0):i.player.goToAndPlay(0,!0)}}),u.set(this,{writable:!0,value:function(e){o(i,P).call(i,e.clientX,e.clientY)}}),v.set(this,{writable:!0,value:function(e){e.cancelable&&e.preventDefault(),o(i,P).call(i,e.touches[0].clientX,e.touches[0].clientY)}}),m.set(this,{writable:!0,value:function(){o(i,P).call(i,-1,-1)}}),f.set(this,{writable:!0,value:function(){"loop"===i.actions[i.interactionIdx].state?i.player.removeEventListener("loopComplete",o(i,f)):i.player.removeEventListener("complete",o(i,f)),i.nextInteraction()}}),L.set(this,{writable:!0,value:function(e){var t=e.handler,n=1;i.actions[i.interactionIdx].repeat&&(n=i.actions[i.interactionIdx].repeat),i.playCounter>=n-1?(i.playCounter=0,i.player.removeEventListener("loopComplete",t),i.player.loop=!1,i.player.autoplay=!1,i.nextInteraction()):i.playCounter+=1}}),g.set(this,{writable:!0,value:function(){var e=i.actions[i.interactionIdx].frames;e&&i.player.currentFrame>=parseInt(e[1])-1&&(i.player.removeEventListener("enterFrame",o(i,g)),i.container.removeEventListener("mousemove",o(i,u)),i.container.removeEventListener("mouseout",o(i,m)),setTimeout(i.nextInteraction,0))}}),E.set(this,{writable:!0,value:function(){var e=i.actions[i.interactionIdx].frames;(e&&i.player.currentFrame>=e[1]||i.player.currentFrame>=i.player.totalFrames-1)&&(i.player.removeEventListener("enterFrame",o(i,E)),i.container.removeEventListener("mouseenter",o(i,w)),i.container.removeEventListener("mouseleave",o(i,I)),i.container.removeEventListener("touchstart",o(i,w),{passive:!0}),i.container.removeEventListener("touchend",o(i,I),{passive:!0}),i.player.pause(),i.holdStatus=!1,i.nextInteraction())}}),w.set(this,{writable:!0,value:function(){-1!==i.player.playDirection&&null!==i.holdStatus&&i.holdStatus||(i.player.setDirection(1),i.player.play(),i.holdStatus=!0)}}),I.set(this,{writable:!0,value:function(){"hold"===i.actions[i.interactionIdx].transition||"hold"===i.actions[0].type?(i.player.setDirection(-1),i.player.play()):"pauseHold"!==i.actions[i.interactionIdx].transition&&"pauseHold"!==i.actions[0].type||i.player.pause(),i.holdStatus=!1}}),x.set(this,{writable:!0,value:function(){var e=i.actions[i.interactionIdx].state,t=i.actions[i.interactionIdx].transition;"hover"!==e&&"click"!==e||(i.container.removeEventListener("click",o(i,d)),i.container.removeEventListener("mouseenter",o(i,d))),"hover"!==t&&"click"!==t||(i.container.removeEventListener("click",o(i,y)),i.container.removeEventListener("mouseenter",o(i,y)),i.container.removeEventListener("touchstart",o(i,y),{passive:!0}))}}),a(this,"jumpToInteraction",(function(e){o(i,x).call(i),i.interactionIdx=e,i.interactionIdx<0?i.interactionIdx=0:i.interactionIdx,i.nextInteraction(!1)})),a(this,"nextInteraction",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];i.oldInterctionIdx=i.interactionIdx,o(i,x).call(i);var t=i.actions[i.interactionIdx].jumpTo;t?t>=0&&t<i.actions.length?(i.interactionIdx=t,o(i,S).call(i,{ignorePath:!1})):(i.interactionIdx=0,i.player.goToAndStop(0,!0),o(i,S).call(i,{ignorePath:!1})):(e&&i.interactionIdx++,i.interactionIdx>=i.actions.length?i.actions[i.actions.length-1].reset?(i.interactionIdx=0,i.player.resetSegments(!0),i.actions[i.interactionIdx].frames?i.player.goToAndStop(i.actions[i.interactionIdx].frames,!0):i.player.goToAndStop(0,!0),o(i,S).call(i,{ignorePath:!1})):(i.interactionIdx=i.actions.length-1,o(i,S).call(i,{ignorePath:!1})):o(i,S).call(i,{ignorePath:!1})),i.container.dispatchEvent(new CustomEvent("transition",{bubbles:!0,composed:!0,detail:{oldIndex:i.oldInterctionIdx,newIndex:i.interactionIdx}}))})),b.set(this,{writable:!0,value:function(e){var t=i.actions[i.interactionIdx].frames;if(!t)return i.player.resetSegments(!0),void i.player.goToAndPlay(0,!0);"string"==typeof t?i.player.goToAndPlay(t,e):i.player.playSegments(t,e)}}),k.set(this,{writable:!0,value:function(){var e=i.actions[i.interactionIdx].path;if(!e)if("object"===t(i.enteredPlayer)&&"AnimationItem"===i.enteredPlayer.constructor.name){if(e=i.enteredPlayer,i.player===e)return void o(i,S).call(i,{ignorePath:!0})}else{var n=(e=i.loadedAnimation).substr(e.lastIndexOf("/")+1);if(n=n.substr(0,n.lastIndexOf(".json")),i.player.fileName===n)return void o(i,S).call(i,{ignorePath:!0})}var a=i.container.getBoundingClientRect(),r="width: "+a.width+"px !important; height: "+a.height+"px !important; background: "+i.container.style.background;if(i.container.setAttribute("style",r),"object"!==t(i.enteredPlayer)||"AnimationItem"!==i.enteredPlayer.constructor.name){if("string"==typeof i.enteredPlayer){var s=document.querySelector(i.enteredPlayer);s&&"LOTTIE-PLAYER"===s.nodeName&&(i.attachedListeners||(s.addEventListener("ready",(function(){i.container.style.width="",i.container.style.height=""})),s.addEventListener("load",(function(){i.player=s.getLottie(),o(i,S).call(i,{ignorePath:!0})})),i.attachedListeners=!0),s.load(e))}else i.enteredPlayer instanceof HTMLElement&&"LOTTIE-PLAYER"===i.enteredPlayer.nodeName&&(i.attachedListeners||(i.enteredPlayer.addEventListener("ready",(function(){i.container.style.width="",i.container.style.height=""})),i.enteredPlayer.addEventListener("load",(function(){i.player=i.enteredPlayer.getLottie(),o(i,S).call(i,{ignorePath:!0})})),i.attachedListeners=!0),i.enteredPlayer.load(e));if(!i.player)throw new Error("".concat(l," Specified player is invalid."),i.enteredPlayer)}else{if(!window.lottie)throw new Error("".concat(l," A Lottie player is required."));i.stop(),i.player.destroy(),i.container.innerHTML="","object"===t(e)&&"AnimationItem"===e.constructor.name?i.player=window.lottie.loadAnimation({loop:!1,autoplay:!1,animationData:e.animationData,container:i.container}):i.player=window.lottie.loadAnimation({loop:!1,autoplay:!1,path:e,container:i.container}),i.player.addEventListener("DOMLoaded",(function(){i.container.style.width="",i.container.style.height="",o(i,S).call(i,{ignorePath:!0})}))}i.clickCounter=0,i.playCounter=0}}),S.set(this,{writable:!0,value:function(e){var t=e.ignorePath,n=i.actions[i.interactionIdx].frames,a=i.actions[i.interactionIdx].state,r=i.actions[i.interactionIdx].transition,s=i.actions[i.interactionIdx].path,l=i.stateHandler.get(a),c=i.transitionHandler.get(r),p=i.actions[i.interactionIdx].speed?i.actions[i.interactionIdx].speed:1,d=i.actions[i.interactionIdx].delay?i.actions[i.interactionIdx].delay:0;t||!(s||i.actions[i.actions.length-1].reset&&0===i.interactionIdx)?setTimeout((function(){n&&(i.player.autoplay=!1,i.player.resetSegments(!0),i.player.goToAndStop(n[0],!0)),l?l.call():"none"===a&&(i.player.loop=!1,i.player.autoplay=!1),c&&c.call(),i.player.autoplay&&(i.player.resetSegments(!0),o(i,b).call(i,!0)),i.player.setSpeed(p)}),d):o(i,k).call(i)}}),P.set(this,{writable:!0,value:function(e,t){if(-1!==e&&-1!==t){var n=i.getContainerCursorPosition(e,t);e=n.x,t=n.y}var a=i.actions.find((function(n){var i=n.position;if(i){if(Array.isArray(i.x)&&Array.isArray(i.y))return e>=i.x[0]&&e<=i.x[1]&&t>=i.y[0]&&t<=i.y[1];if(!Number.isNaN(i.x)&&!Number.isNaN(i.y))return e===i.x&&t===i.y}return!1}));if(a)if("seek"===a.type||"seek"===a.transition){var r=(e-a.position.x[0])/(a.position.x[1]-a.position.x[0]),o=(t-a.position.y[0])/(a.position.y[1]-a.position.y[0]);i.player.playSegments(a.frames,!0),a.position.y[0]<0&&a.position.y[1]>1?i.player.goToAndStop(Math.floor(r*i.player.totalFrames),!0):i.player.goToAndStop(Math.ceil((r+o)/2*i.player.totalFrames),!0)}else"loop"===a.type?i.player.playSegments(a.frames,!0):"play"===a.type?(!0===i.player.isPaused&&i.player.resetSegments(),i.player.playSegments(a.frames)):"stop"===a.type&&(i.player.resetSegments(!0),i.player.goToAndStop(a.frames[0],!0))}}),M.set(this,{writable:!0,value:function(){var e=i.getContainerVisibility(),t=i.actions.find((function(t){var n=t.visibility;return e>=n[0]&&e<=n[1]}));if(t)if("seek"===t.type){var n=t.frames[0],a=2==t.frames.length?t.frames[1]:i.player.totalFrames-1;null!==i.assignedSegment&&(i.player.resetSegments(!0),i.assignedSegment=null),i.player.goToAndStop(n+Math.round((e-t.visibility[0])/(t.visibility[1]-t.visibility[0])*(a-n)),!0)}else"loop"===t.type?(i.player.loop=!0,(null===i.assignedSegment||i.assignedSegment!==t.frames||!0===i.player.isPaused)&&(i.player.playSegments(t.frames,!0),i.assignedSegment=t.frames)):"play"===t.type?i.scrolledAndPlayed||(i.scrolledAndPlayed=!0,i.player.resetSegments(!0),t.frames?i.player.playSegments(t.frames,!0):i.player.play()):"stop"===t.type&&i.player.goToAndStop(t.frames[0],!0)}}),this.enteredPlayer=H,"object"!==t(H)||"AnimationItem"!==H.constructor.name){if("string"==typeof H){var W=document.querySelector(H);W&&"LOTTIE-PLAYER"===W.nodeName&&(H=W.getLottie())}else H instanceof HTMLElement&&"LOTTIE-PLAYER"===H.nodeName&&(H=H.getLottie());if(!H){var j=l+"Specified player:"+H+" is invalid.";throw new Error(j)}}"string"==typeof C&&(C=document.querySelector(C)),C||(C=H.wrapper),this.player=H,this.loadedAnimation=this.player.path+this.player.fileName+".json",this.attachedListeners=!1,this.container=C,this.mode=T,this.actions=A,this.options=O,this.assignedSegment=null,this.scrolledAndPlayed=!1,this.interactionIdx=0,this.oldInterctionIdx=0,this.clickCounter=0,this.playCounter=0,this.stateHandler=new Map,this.transitionHandler=new Map}var c,A,C;return c=e,(A=[{key:"getContainerVisibility",value:function(){var e=this.container.getBoundingClientRect(),t=e.top,n=e.height;return(window.innerHeight-t)/(window.innerHeight+n)}},{key:"getContainerCursorPosition",value:function(e,t){var n=this.container.getBoundingClientRect(),i=n.top;return{x:(e-n.left)/n.width,y:(t-i)/n.height}}},{key:"initScrollMode",value:function(){this.player.stop(),window.addEventListener("scroll",o(this,M),!0)}},{key:"initCursorMode",value:function(){this.actions&&1===this.actions.length?"click"===this.actions[0].type?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("click",o(this,y))):"hover"===this.actions[0].type?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("mouseenter",o(this,y)),this.container.addEventListener("touchstart",o(this,y),{passive:!0})):"toggle"===this.actions[0].type?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("click",o(this,h))):"hold"===this.actions[0].type||"pauseHold"===this.actions[0].type?(this.container.addEventListener("mouseenter",o(this,w)),this.container.addEventListener("mouseleave",o(this,I)),this.container.addEventListener("touchstart",o(this,w),{passive:!0}),this.container.addEventListener("touchend",o(this,I),{passive:!0})):"seek"===this.actions[0].type&&(this.player.loop=!0,this.player.stop(),this.container.addEventListener("mousemove",o(this,u)),this.container.addEventListener("touchmove",o(this,v),{passive:!1}),this.container.addEventListener("mouseout",o(this,m))):(this.player.loop=!0,this.player.stop(),this.container.addEventListener("mousemove",o(this,u)),this.container.addEventListener("mouseleave",o(this,m)),o(this,P).call(this,-1,-1))}},{key:"initChainMode",value:function(){o(this,p).call(this),this.player.loop=!1,this.player.stop(),o(this,S).call(this,{ignorePath:!1})}},{key:"start",value:function(){var e=this;"scroll"===this.mode?this.player.isLoaded?this.initScrollMode():this.player.addEventListener("DOMLoaded",(function(){e.initScrollMode()})):"cursor"===this.mode?this.player.isLoaded?this.initCursorMode():this.player.addEventListener("DOMLoaded",(function(){e.initCursorMode()})):"chain"===this.mode&&(this.player.isLoaded?this.initChainMode():this.player.addEventListener("DOMLoaded",(function(){e.initChainMode()})))}},{key:"redefineOptions",value:function(e){var n=e.actions,i=e.container,a=e.mode,o=e.player,s=r(e,["actions","container","mode","player"]);if(this.stop(),this.enteredPlayer=o,"object"!==t(o)||"AnimationItem"!==o.constructor.name){if("string"==typeof o){var c=document.querySelector(o);c&&"LOTTIE-PLAYER"===c.nodeName&&(o=c.getLottie())}else o instanceof HTMLElement&&"LOTTIE-PLAYER"===o.nodeName&&(o=o.getLottie());if(!o)throw new Error(l+"Specified player:"+o+" is invalid.",o)}"string"==typeof i&&(i=document.querySelector(i)),i||(i=o.wrapper),this.player=o,this.loadedAnimation=this.player.path+this.player.fileName+".json",this.attachedListeners=!1,this.container=i,this.mode=a,this.actions=n,this.options=s,this.assignedSegment=null,this.scrolledAndPlayed=!1,this.interactionIdx=0,this.clickCounter=0,this.playCounter=0,this.holdStatus=null,this.stateHandler=new Map,this.transitionHandler=new Map,this.start()}},{key:"stop",value:function(){if("scroll"===this.mode&&window.removeEventListener("scroll",o(this,M),!0),"cursor"===this.mode&&(this.container.removeEventListener("click",o(this,y)),this.container.removeEventListener("click",o(this,h)),this.container.removeEventListener("mouseenter",o(this,y)),this.container.removeEventListener("touchstart",o(this,y)),this.container.removeEventListener("touchmove",o(this,v)),this.container.removeEventListener("mousemove",o(this,u)),this.container.removeEventListener("mouseleave",o(this,m)),this.container.removeEventListener("touchstart",o(this,w)),this.container.removeEventListener("touchend",o(this,I))),"chain"===this.mode&&(this.container.removeEventListener("click",o(this,y)),this.container.removeEventListener("click",o(this,d)),this.container.removeEventListener("mouseenter",o(this,y)),this.container.removeEventListener("touchstart",o(this,y)),this.container.removeEventListener("touchmove",o(this,v)),this.container.removeEventListener("mouseenter",o(this,d)),this.container.removeEventListener("touchstart",o(this,d)),this.container.removeEventListener("mouseenter",o(this,w)),this.container.removeEventListener("touchstart",o(this,w)),this.container.removeEventListener("mouseleave",o(this,I)),this.container.removeEventListener("mousemove",o(this,u)),this.container.removeEventListener("mouseout",o(this,m)),this.container.removeEventListener("touchend",o(this,I)),this.player))try{this.player.removeEventListener("loopComplete",o(this,f)),this.player.removeEventListener("complete",o(this,f)),this.player.removeEventListener("enterFrame",o(this,g)),this.player.removeEventListener("enterFrame",o(this,E))}catch(e){}this.player=null}}])&&i(c.prototype,A),C&&i(c,C),e}(),p=new WeakMap,d=new WeakMap,h=new WeakMap,y=new WeakMap,u=new WeakMap,v=new WeakMap,m=new WeakMap,f=new WeakMap,L=new WeakMap,g=new WeakMap,E=new WeakMap,w=new WeakMap,I=new WeakMap,x=new WeakMap,b=new WeakMap,k=new WeakMap,S=new WeakMap,P=new WeakMap,M=new WeakMap,A=function(e){var t=new c(e);return t.start(),t};e.LottieInteractivity=c,e.create=A,e.default=A,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=lottie-interactivity.min.js.map
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self)["lottie-player"]={})}(this,(function(exports){"use strict";function _asyncIterator(t){var e,r,i,s=2;for("undefined"!=typeof Symbol&&(r=Symbol.asyncIterator,i=Symbol.iterator);s--;){if(r&&null!=(e=t[r]))return e.call(t);if(i&&null!=(e=t[i]))return new AsyncFromSyncIterator(e.call(t));r="@@asyncIterator",i="@@iterator"}throw new TypeError("Object is not async iterable")}function AsyncFromSyncIterator(t){function e(t){if(Object(t)!==t)return Promise.reject(new TypeError(t+" is not an object."));var e=t.done;return Promise.resolve(t.value).then((function(t){return{value:t,done:e}}))}return AsyncFromSyncIterator=function(t){this.s=t,this.n=t.next},AsyncFromSyncIterator.prototype={s:null,n:null,next:function(){return e(this.n.apply(this.s,arguments))},return:function(t){var r=this.s.return;return void 0===r?Promise.resolve({value:t,done:!0}):e(r.apply(this.s,arguments))},throw:function(t){var r=this.s.return;return void 0===r?Promise.reject(t):e(r.apply(this.s,arguments))}},new AsyncFromSyncIterator(t)}var REACT_ELEMENT_TYPE;function _jsx(t,e,r,i){REACT_ELEMENT_TYPE||(REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),1===a)e.children=i;else if(a>1){for(var n=new Array(a),o=0;o<a;o++)n[o]=arguments[o+3];e.children=n}if(e&&s)for(var h in s)void 0===e[h]&&(e[h]=s[h]);else e||(e=s||{});return{$$typeof:REACT_ELEMENT_TYPE,type:t,key:void 0===r?null:""+r,ref:null,props:e,_owner:null}}function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function _objectSpread2(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach((function(e){_defineProperty(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _wrapRegExp(){_wrapRegExp=function(t,e){return new r(t,void 0,e)};var t=RegExp.prototype,e=new WeakMap;function r(t,i,s){var a=new RegExp(t,i);return e.set(a,s||e.get(t)),_setPrototypeOf(a,r.prototype)}function i(t,r){var i=e.get(r);return Object.keys(i).reduce((function(e,r){return e[r]=t[i[r]],e}),Object.create(null))}return _inherits(r,RegExp),r.prototype.exec=function(e){var r=t.exec.call(this,e);return r&&(r.groups=i(r,this)),r},r.prototype[Symbol.replace]=function(r,s){if("string"==typeof s){var a=e.get(this);return t[Symbol.replace].call(this,r,s.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+a[e]})))}if("function"==typeof s){var n=this;return t[Symbol.replace].call(this,r,(function(){var t=arguments;return"object"!=typeof t[t.length-1]&&(t=[].slice.call(t)).push(i(t,n)),s.apply(this,t)}))}return t[Symbol.replace].call(this,r,s)},_wrapRegExp.apply(this,arguments)}function _AwaitValue(t){this.wrapped=t}function _AsyncGenerator(t){var e,r;function i(e,r){try{var a=t[e](r),n=a.value,o=n instanceof _AwaitValue;Promise.resolve(o?n.wrapped:n).then((function(t){o?i("return"===e?"return":"next",t):s(a.done?"return":"normal",t)}),(function(t){i("throw",t)}))}catch(t){s("throw",t)}}function s(t,s){switch(t){case"return":e.resolve({value:s,done:!0});break;case"throw":e.reject(s);break;default:e.resolve({value:s,done:!1})}(e=e.next)?i(e.key,e.arg):r=null}this._invoke=function(t,s){return new Promise((function(a,n){var o={key:t,arg:s,resolve:a,reject:n,next:null};r?r=r.next=o:(e=r=o,i(t,s))}))},"function"!=typeof t.return&&(this.return=void 0)}function _wrapAsyncGenerator(t){return function(){return new _AsyncGenerator(t.apply(this,arguments))}}function _awaitAsyncGenerator(t){return new _AwaitValue(t)}function _asyncGeneratorDelegate(t,e){var r={},i=!1;function s(r,s){return i=!0,s=new Promise((function(e){e(t[r](s))})),{done:!1,value:e(s)}}return r["undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator"]=function(){return this},r.next=function(t){return i?(i=!1,t):s("next",t)},"function"==typeof t.throw&&(r.throw=function(t){if(i)throw i=!1,t;return s("throw",t)}),"function"==typeof t.return&&(r.return=function(t){return i?(i=!1,t):s("return",t)}),r}function asyncGeneratorStep(t,e,r,i,s,a,n){try{var o=t[a](n),h=o.value}catch(t){return void r(t)}o.done?e(h):Promise.resolve(h).then(i,s)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(i,s){var a=t.apply(e,r);function n(t){asyncGeneratorStep(a,i,s,n,o,"next",t)}function o(t){asyncGeneratorStep(a,i,s,n,o,"throw",t)}n(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _defineEnumerableProperties(t,e){for(var r in e){(a=e[r]).configurable=a.enumerable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,r,a)}if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(e),s=0;s<i.length;s++){var a,n=i[s];(a=e[n]).configurable=a.enumerable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,n,a)}return t}function _defaults(t,e){for(var r=Object.getOwnPropertyNames(e),i=0;i<r.length;i++){var s=r[i],a=Object.getOwnPropertyDescriptor(e,s);a&&a.configurable&&void 0===t[s]&&Object.defineProperty(t,s,a)}return t}function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _extends(){return _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},_extends.apply(this,arguments)}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),i.forEach((function(e){_defineProperty(t,e,r[e])}))}return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,_setPrototypeOf(t,e)}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function _construct(t,e,r){return _construct=_isNativeReflectConstruct()?Reflect.construct:function(t,e,r){var i=[null];i.push.apply(i,e);var s=new(Function.bind.apply(t,i));return r&&_setPrototypeOf(s,r.prototype),s},_construct.apply(null,arguments)}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _wrapNativeSuper(t){var e="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(r,t)},_wrapNativeSuper(t)}function _instanceof(t,e){return null!=e&&"undefined"!=typeof Symbol&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):t instanceof e}function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _getRequireWildcardCache(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(t){return t?r:e})(t)}function _interopRequireWildcard(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var r=_getRequireWildcardCache(e);if(r&&r.has(t))return r.get(t);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var n=s?Object.getOwnPropertyDescriptor(t,a):null;n&&(n.get||n.set)?Object.defineProperty(i,a,n):i[a]=t[a]}return i.default=t,r&&r.set(t,i),i}function _newArrowCheck(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}function _objectDestructuringEmpty(t){if(null==t)throw new TypeError("Cannot destructure undefined")}function _objectWithoutPropertiesLoose(t,e){if(null==t)return{};var r,i,s={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(s[r]=t[r]);return s}function _objectWithoutProperties(t,e){if(null==t)return{};var r,i,s=_objectWithoutPropertiesLoose(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _possibleConstructorReturn(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var r,i=_getPrototypeOf(t);if(e){var s=_getPrototypeOf(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var i=_superPropBase(t,e);if(i){var s=Object.getOwnPropertyDescriptor(i,e);return s.get?s.get.call(arguments.length<3?t:r):s.value}},_get.apply(this,arguments)}function set(t,e,r,i){return set="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,r,i){var s,a=_superPropBase(t,e);if(a){if((s=Object.getOwnPropertyDescriptor(a,e)).set)return s.set.call(i,r),!0;if(!s.writable)return!1}if(s=Object.getOwnPropertyDescriptor(i,e)){if(!s.writable)return!1;s.value=r,Object.defineProperty(i,e,s)}else _defineProperty(i,e,r);return!0},set(t,e,r,i)}function _set(t,e,r,i,s){if(!set(t,e,r,i||t)&&s)throw new Error("failed to set property");return r}function _taggedTemplateLiteral(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function _taggedTemplateLiteralLoose(t,e){return e||(e=t.slice(0)),t.raw=e,t}function _readOnlyError(t){throw new TypeError('"'+t+'" is read-only')}function _writeOnlyError(t){throw new TypeError('"'+t+'" is write-only')}function _classNameTDZError(t){throw new Error('Class "'+t+'" cannot be referenced in computed property keys.')}function _temporalUndefined(){}function _tdz(t){throw new ReferenceError(t+" is not defined - temporal dead zone")}function _temporalRef(t,e){return t===_temporalUndefined?_tdz(e):t}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _slicedToArrayLoose(t,e){return _arrayWithHoles(t)||_iterableToArrayLimitLoose(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _toArray(t){return _arrayWithHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableRest()}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _maybeArrayLike(t,e,r){if(e&&!Array.isArray(e)&&"number"==typeof e.length){var i=e.length;return _arrayLikeToArray(e,void 0!==r&&r<i?r:i)}return t(e,r)}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _iterableToArrayLimit(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var i,s,a=[],n=!0,o=!1;try{for(r=r.call(t);!(n=(i=r.next()).done)&&(a.push(i.value),!e||a.length!==e);n=!0);}catch(t){o=!0,s=t}finally{try{n||null==r.return||r.return()}finally{if(o)throw s}}return a}}function _iterableToArrayLimitLoose(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var i=[];for(r=r.call(t),_step;!(_step=r.next()).done&&(i.push(_step.value),!e||i.length!==e););return i}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _createForOfIteratorHelper(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,s=function(){};return{s:s,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,n=!0,o=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return n=t.done,t},e:function(t){o=!0,a=t},f:function(){try{n||null==r.return||r.return()}finally{if(o)throw a}}}}function _createForOfIteratorHelperLoose(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _skipFirstGeneratorNext(t){return function(){var e=t.apply(this,arguments);return e.next(),e}}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _initializerWarningHelper(t,e){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}function _initializerDefineProperty(t,e,r,i){r&&Object.defineProperty(t,e,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function _applyDecoratedDescriptor(t,e,r,i,s){var a={};return Object.keys(i).forEach((function(t){a[t]=i[t]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,i){return i(t,e,r)||r}),a),s&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(s):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(t,e,a),a=null),a}_AsyncGenerator.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},_AsyncGenerator.prototype.next=function(t){return this._invoke("next",t)},_AsyncGenerator.prototype.throw=function(t){return this._invoke("throw",t)},_AsyncGenerator.prototype.return=function(t){return this._invoke("return",t)};var id=0;function _classPrivateFieldLooseKey(t){return"__private_"+id+++"_"+t}function _classPrivateFieldLooseBase(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}function _classPrivateFieldGet(t,e){return _classApplyDescriptorGet(t,_classExtractFieldDescriptor(t,e,"get"))}function _classPrivateFieldSet(t,e,r){return _classApplyDescriptorSet(t,_classExtractFieldDescriptor(t,e,"set"),r),r}function _classPrivateFieldDestructureSet(t,e){return _classApplyDescriptorDestructureSet(t,_classExtractFieldDescriptor(t,e,"set"))}function _classExtractFieldDescriptor(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}function _classStaticPrivateFieldSpecGet(t,e,r){return _classCheckPrivateStaticAccess(t,e),_classCheckPrivateStaticFieldDescriptor(r,"get"),_classApplyDescriptorGet(t,r)}function _classStaticPrivateFieldSpecSet(t,e,r,i){return _classCheckPrivateStaticAccess(t,e),_classCheckPrivateStaticFieldDescriptor(r,"set"),_classApplyDescriptorSet(t,r,i),i}function _classStaticPrivateMethodGet(t,e,r){return _classCheckPrivateStaticAccess(t,e),r}function _classStaticPrivateMethodSet(){throw new TypeError("attempted to set read only static private field")}function _classApplyDescriptorGet(t,e){return e.get?e.get.call(t):e.value}function _classApplyDescriptorSet(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=r}}function _classApplyDescriptorDestructureSet(t,e){if(e.set)return"__destrObj"in e||(e.__destrObj={set value(r){e.set.call(t,r)}}),e.__destrObj;if(!e.writable)throw new TypeError("attempted to set read only private field");return e}function _classStaticPrivateFieldDestructureSet(t,e,r){return _classCheckPrivateStaticAccess(t,e),_classCheckPrivateStaticFieldDescriptor(r,"set"),_classApplyDescriptorDestructureSet(t,r)}function _classCheckPrivateStaticAccess(t,e){if(t!==e)throw new TypeError("Private static access of wrong provenance")}function _classCheckPrivateStaticFieldDescriptor(t,e){if(void 0===t)throw new TypeError("attempted to "+e+" private static field before its declaration")}function _decorate(t,e,r,i){var s=_getDecoratorsApi();if(i)for(var a=0;a<i.length;a++)s=i[a](s);var n=e((function(t){s.initializeInstanceElements(t,o.elements)}),r),o=s.decorateClass(_coalesceClassElements(n.d.map(_createElementDescriptor)),t);return s.initializeClassElements(n.F,o.elements),s.runClassFinishers(n.F,o.finishers)}function _getDecoratorsApi(){_getDecoratorsApi=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(r){e.forEach((function(e){e.kind===r&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var r=t.prototype;["method","field"].forEach((function(i){e.forEach((function(e){var s=e.placement;if(e.kind===i&&("static"===s||"prototype"===s)){var a="static"===s?t:r;this.defineClassElement(a,e)}}),this)}),this)},defineClassElement:function(t,e){var r=e.descriptor;if("field"===e.kind){var i=e.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(t)}}Object.defineProperty(t,e.key,r)},decorateClass:function(t,e){var r=[],i=[],s={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,s)}),this),t.forEach((function(t){if(!_hasDecorators(t))return r.push(t);var e=this.decorateElement(t,s);r.push(e.element),r.push.apply(r,e.extras),i.push.apply(i,e.finishers)}),this),!e)return{elements:r,finishers:i};var a=this.decorateConstructor(r,e);return i.push.apply(i,a.finishers),a.finishers=i,a},addElementPlacement:function(t,e,r){var i=e[t.placement];if(!r&&-1!==i.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");i.push(t.key)},decorateElement:function(t,e){for(var r=[],i=[],s=t.decorators,a=s.length-1;a>=0;a--){var n=e[t.placement];n.splice(n.indexOf(t.key),1);var o=this.fromElementDescriptor(t),h=this.toElementFinisherExtras((0,s[a])(o)||o);t=h.element,this.addElementPlacement(t,e),h.finisher&&i.push(h.finisher);var l=h.extras;if(l){for(var p=0;p<l.length;p++)this.addElementPlacement(l[p],e);r.push.apply(r,l)}}return{element:t,finishers:i,extras:r}},decorateConstructor:function(t,e){for(var r=[],i=e.length-1;i>=0;i--){var s=this.fromClassDescriptor(t),a=this.toClassDescriptor((0,e[i])(s)||s);if(void 0!==a.finisher&&r.push(a.finisher),void 0!==a.elements){t=a.elements;for(var n=0;n<t.length-1;n++)for(var o=n+1;o<t.length;o++)if(t[n].key===t[o].key&&t[n].placement===t[o].placement)throw new TypeError("Duplicated element ("+t[n].key+")")}}return{elements:t,finishers:r}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){if(void 0!==t)return _toArray(t).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var r=_toPropertyKey(t.key),i=String(t.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var s=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var a={kind:e,key:r,placement:i,descriptor:Object.assign({},s)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),a.initializer=t.initializer),a},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:_optionalCallableProperty(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var r=_optionalCallableProperty(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:r}},runClassFinishers:function(t,e){for(var r=0;r<e.length;r++){var i=(0,e[r])(t);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");t=i}}return t},disallowProperty:function(t,e,r){if(void 0!==t[e])throw new TypeError(r+" can't have a ."+e+" property.")}};return t}function _createElementDescriptor(t){var e,r=_toPropertyKey(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===t.kind?"field":"method",key:r,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(i.decorators=t.decorators),"field"===t.kind&&(i.initializer=t.value),i}function _coalesceGetterSetter(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function _coalesceClassElements(t){for(var e=[],r=function(t){return"method"===t.kind&&t.key===a.key&&t.placement===a.placement},i=0;i<t.length;i++){var s,a=t[i];if("method"===a.kind&&(s=e.find(r)))if(_isDataDescriptor(a.descriptor)||_isDataDescriptor(s.descriptor)){if(_hasDecorators(a)||_hasDecorators(s))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");s.descriptor=a.descriptor}else{if(_hasDecorators(a)){if(_hasDecorators(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");s.decorators=a.decorators}_coalesceGetterSetter(a,s)}else e.push(a)}return e}function _hasDecorators(t){return t.decorators&&t.decorators.length}function _isDataDescriptor(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function _optionalCallableProperty(t,e){var r=t[e];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+e+"' to be a function");return r}function _classPrivateMethodGet(t,e,r){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return r}function _checkPrivateRedeclaration(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldInitSpec(t,e,r){_checkPrivateRedeclaration(t,e),e.set(t,r)}function _classPrivateMethodInitSpec(t,e){_checkPrivateRedeclaration(t,e),e.add(t)}function _classPrivateMethodSet(){throw new TypeError("attempted to reassign private method")}
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var _extendStatics=function(t,e){return _extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},_extendStatics(t,e)};function __extends(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}_extendStatics(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var _assign=function(){return _assign=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var s in e=arguments[r])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},_assign.apply(this,arguments)};function __rest(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(r[i[s]]=t[i[s]])}return r}function __decorate(t,e,r,i){var s,a=arguments.length,n=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(n=(a<3?s(n):a>3?s(e,r,n):s(e,r))||n);return a>3&&n&&Object.defineProperty(e,r,n),n}function __param(t,e){return function(r,i){e(r,i,t)}}function __metadata(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function __awaiter(t,e,r,i){return new(r||(r=Promise))((function(s,a){function n(t){try{h(i.next(t))}catch(t){a(t)}}function o(t){try{h(i.throw(t))}catch(t){a(t)}}function h(t){var e;t.done?s(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,o)}h((i=i.apply(t,e||[])).next())}))}function __generator(t,e){var r,i,s,a,n={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=2&a[0]?i.return:a[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,a[1])).done)return s;switch(i=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,i=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(!(s=n.trys,(s=s.length>0&&s[s.length-1])||6!==a[0]&&2!==a[0])){n=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){n.label=a[1];break}if(6===a[0]&&n.label<s[1]){n.label=s[1],s=a;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(a);break}s[2]&&n.ops.pop(),n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t],i=0}finally{r=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}var __createBinding=Object.create?function(t,e,r,i){void 0===i&&(i=r),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,i){void 0===i&&(i=r),t[i]=e[r]};function __exportStar(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||__createBinding(e,t,r)}function __values(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],i=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var i,s,a=r.call(t),n=[];try{for(;(void 0===e||e-- >0)&&!(i=a.next()).done;)n.push(i.value)}catch(t){s={error:t}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(s)throw s.error}}return n}function __spread(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(__read(arguments[e]));return t}function __spreadArrays(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var i=Array(t),s=0;for(e=0;e<r;e++)for(var a=arguments[e],n=0,o=a.length;n<o;n++,s++)i[s]=a[n];return i}function __spreadArray(t,e,r){if(r||2===arguments.length)for(var i,s=0,a=e.length;s<a;s++)!i&&s in e||(i||(i=Array.prototype.slice.call(e,0,s)),i[s]=e[s]);return t.concat(i||Array.prototype.slice.call(e))}function __await(t){return this instanceof __await?(this.v=t,this):new __await(t)}function __asyncGenerator(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,s=r.apply(t,e||[]),a=[];return i={},n("next"),n("throw"),n("return"),i[Symbol.asyncIterator]=function(){return this},i;function n(t){s[t]&&(i[t]=function(e){return new Promise((function(r,i){a.push([t,e,r,i])>1||o(t,e)}))})}function o(t,e){try{!function(t){t.value instanceof __await?Promise.resolve(t.value.v).then(h,l):p(a[0][2],t)}(s[t](e))}catch(t){p(a[0][3],t)}}function h(t){o("next",t)}function l(t){o("throw",t)}function p(t,e){t(e),a.shift(),a.length&&o(a[0][0],a[0][1])}}function __asyncDelegator(t){var e,r;return e={},i("next"),i("throw",(function(t){throw t})),i("return"),e[Symbol.iterator]=function(){return this},e;function i(i,s){e[i]=t[i]?function(e){return(r=!r)?{value:__await(t[i](e)),done:"return"===i}:s?s(e):e}:s}}function __asyncValues(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"==typeof __values?__values(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(r){e[r]=t[r]&&function(e){return new Promise((function(i,s){(function(t,e,r,i){Promise.resolve(i).then((function(e){t({value:e,done:r})}),e)})(i,s,(e=t[r](e)).done,e.value)}))}}}function __makeTemplateObject(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var __setModuleDefault=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function __importStar(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&__createBinding(e,t,r);return __setModuleDefault(e,t),e}function __importDefault(t){return t&&t.__esModule?t:{default:t}}function __classPrivateFieldGet(t,e,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)}function __classPrivateFieldSet(t,e,r,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,r):s?s.value=r:e.set(t,r),r
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}var t$3=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$8=Symbol(),n$5=new Map;class s$3{constructor(t,e){if(this._$cssResult$=!0,e!==e$8)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){var t=n$5.get(this.cssText);return t$3&&void 0===t&&(n$5.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}var o$5=t=>new s$3("string"==typeof t?t:t+"",e$8),r$3=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];var s=1===t.length?t[0]:r.reduce(((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1]),t[0]);return new s$3(s,e$8)},i$3=(t,e)=>{t$3?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{var r=document.createElement("style"),i=window.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=e.cssText,t.appendChild(r)}))},S$1=t$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{var e="";for(var r of t.cssRules)e+=r.cssText;return o$5(e)})(t):t
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,s$2,e$7=window.trustedTypes,r$2=e$7?e$7.emptyScript:"",h$2=window.reactiveElementPolyfillSupport,o$4={toAttribute(t,e){switch(e){case Boolean:t=t?r$2:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){var r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},n$4=(t,e)=>e!==t&&(e==e||t==t),l$3={attribute:!0,type:String,converter:o$4,reflect:!1,hasChanged:n$4},t$2;class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();var t=[];return this.elementProperties.forEach(((e,r)=>{var i=this._$Eh(r,e);void 0!==i&&(this._$Eu.set(i,r),t.push(i))})),t}static createProperty(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l$3;if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){var r="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){var s=this[t];this[e]=i,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;var t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){var e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(var i of r)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){var e=[];if(Array.isArray(t)){var r=new Set(t.flat(1/0).reverse());for(var i of r)e.unshift(S$1(i))}else void 0!==t&&e.push(S$1(t));return e}static _$Eh(t,e){var r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t,e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$3(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e){var r,i,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l$3,a=this.constructor._$Eh(t,s);if(void 0!==a&&!0===s.reflect){var n=(null!==(i=null===(r=s.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==i?i:o$4.toAttribute)(e,s.type);this._$Ei=t,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Ei=null}}_$AK(t,e){var r,i,s,a=this.constructor,n=a._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){var o=a.getPropertyOptions(n),h=o.converter,l=null!==(s=null!==(i=null===(r=h)||void 0===r?void 0:r.fromAttribute)&&void 0!==i?i:"function"==typeof h?h:null)&&void 0!==s?s:o$4.fromAttribute;this._$Ei=n,this[n]=l(e,o.type),this._$Ei=null}}requestUpdate(t,e,r){var i=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||n$4)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}_$EC(){var t=this;return _asyncToGenerator((function*(){t.isUpdatePending=!0;try{yield t._$Ep}catch(e){Promise.reject(e)}var e=t.scheduleUpdate();return null!=e&&(yield e),!t.isUpdatePending}))()}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(this.isUpdatePending){this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);var e=!1,r=this._$AL;try{(e=this.shouldUpdate(r))?(this.willUpdate(r),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(r)}}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$2||h$2({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.2.1");var i$2=globalThis.trustedTypes,s$1=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$6="lit$".concat((Math.random()+"").slice(9),"$"),o$3="?"+e$6,n$3="<".concat(o$3,">"),l$2=document,h$1=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l$2.createComment(t)},r$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var e;return d(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea)$/i,p=t=>function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return{_$litType$:t,strings:e,values:i}},$=p(1),y=p(2),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,e,r)=>{var i,s,a=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:e,n=a._$litPart$;if(void 0===n){var o=null!==(s=null==r?void 0:r.renderBefore)&&void 0!==s?s:null;a._$litPart$=n=new N(e.insertBefore(h$1(),o),o,void 0,null!=r?r:{})}return n._$AI(t),n},A=l$2.createTreeWalker(l$2,129,null,!1),C=(t,e)=>{for(var r,i=t.length-1,s=[],n=2===e?"<svg>":"",o=c,h=0;h<i;h++){for(var l=t[h],p=void 0,d=void 0,u=-1,y=0;y<l.length&&(o.lastIndex=y,null!==(d=o.exec(l)));)y=o.lastIndex,o===c?"!--"===d[1]?o=v:void 0!==d[1]?o=a:void 0!==d[2]?(g.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=f):void 0!==d[3]&&(o=f):o===f?">"===d[0]?(o=null!=r?r:c,u=-1):void 0===d[1]?u=-2:(u=o.lastIndex-d[2].length,p=d[1],o=void 0===d[3]?f:'"'===d[3]?m:_):o===m||o===_?o=f:o===v||o===a?o=c:(o=f,r=void 0);var b=o===f&&t[h+1].startsWith("/>")?" ":"";n+=o===c?l+n$3:u>=0?(s.push(p),l.slice(0,u)+"$lit$"+l.slice(u)+e$6+b):l+e$6+(-2===u?(s.push(void 0),h):b)}var P=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s$1?s$1.createHTML(P):P,s]};class E{constructor(t,e){var r,{strings:i,_$litType$:s}=t;this.parts=[];var a=0,n=0,o=i.length-1,h=this.parts,[l,p]=C(i,s);if(this.el=E.createElement(l,e),A.currentNode=this.el.content,2===s){var c=this.el.content,f=c.firstChild;f.remove(),c.append(...f.childNodes)}for(;null!==(r=A.nextNode())&&h.length<o;){if(1===r.nodeType){if(r.hasAttributes()){var d=[];for(var m of r.getAttributeNames())if(m.endsWith("$lit$")||m.startsWith(e$6)){var u=p[n++];if(d.push(m),void 0!==u){var y=r.getAttribute(u.toLowerCase()+"$lit$").split(e$6),v=/([.?@])?(.*)/.exec(u);h.push({type:1,index:a,name:v[2],strings:y,ctor:"."===v[1]?M:"?"===v[1]?H:"@"===v[1]?I:S})}else h.push({type:6,index:a})}for(var b of d)r.removeAttribute(b)}if(g.test(r.tagName)){var P=r.textContent.split(e$6),_=P.length-1;if(_>0){r.textContent=i$2?i$2.emptyScript:"";for(var x=0;x<_;x++)r.append(P[x],h$1()),A.nextNode(),h.push({type:2,index:++a});r.append(P[_],h$1())}}}else if(8===r.nodeType)if(r.data===o$3)h.push({type:2,index:a});else for(var w=-1;-1!==(w=r.data.indexOf(e$6,w+1));)h.push({type:7,index:a}),w+=e$6.length-1;a++}}static createElement(t,e){var r=l$2.createElement("template");return r.innerHTML=t,r}}function P(t,e){var r,i,s,a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,o=arguments.length>3?arguments[3]:void 0;if(e===b)return e;var h=void 0!==o?null===(r=n._$Cl)||void 0===r?void 0:r[o]:n._$Cu,l=r$1(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==l&&(null===(i=null==h?void 0:h._$AO)||void 0===i||i.call(h,!1),void 0===l?h=void 0:(h=new l(t))._$AT(t,n,o),void 0!==o?(null!==(s=(a=n)._$Cl)&&void 0!==s?s:a._$Cl=[])[o]=h:n._$Cu=h),void 0!==h&&(e=P(t,h._$AS(t,e.values),h,o)),e}class V{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e,{el:{content:r},parts:i}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:l$2).importNode(r,!0);A.currentNode=s;for(var a=A.nextNode(),n=0,o=0,h=i[0];void 0!==h;){if(n===h.index){var l=void 0;2===h.type?l=new N(a,a.nextSibling,this,t):1===h.type?l=new h.ctor(a,h.name,h.strings,this,t):6===h.type&&(l=new L(a,this,t)),this.v.push(l),h=i[++o]}n!==(null==h?void 0:h.index)&&(a=A.nextNode(),n++)}return s}m(t){var e=0;for(var r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class N{constructor(t,e,r,i){var s;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cg=null===(s=null==i?void 0:i.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){var t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=P(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),r$1(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):u(t)?this.A(t):this.$(t)}M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._$AB;return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==w&&r$1(this._$AH)?this._$AA.nextSibling.data=t:this.S(l$2.createTextNode(t)),this._$AH=t}T(t){var e,{values:r,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=E.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(r);else{var a=new V(s,this),n=a.p(this.options);a.m(r),this.S(n),this._$AH=a}}_$AC(t){var e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new E(t)),e}A(t){d(this._$AH)||(this._$AH=[],this._$AR());var e,r=this._$AH,i=0;for(var s of t)i===r.length?r.push(e=new N(this.M(h$1()),this.M(h$1()),this,this.options)):e=r[i],e._$AI(s),i++;i<r.length&&(this._$AR(e&&e._$AB.nextSibling,i),r.length=i)}_$AR(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,r=arguments.length>1?arguments[1]:void 0;for(null===(t=this._$AP)||void 0===t||t.call(this,!1,!0,r);e&&e!==this._$AB;){var i=e.nextSibling;e.remove(),e=i}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class S{constructor(t,e,r,i,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=this.strings,a=!1;if(void 0===s)t=P(this,t,e,0),(a=!r$1(t)||t!==this._$AH&&t!==b)&&(this._$AH=t);else{var n,o,h=t;for(t=s[0],n=0;n<s.length-1;n++)(o=P(this,h[r+n],e,n))===b&&(o=this._$AH[n]),a||(a=!r$1(o)||o!==this._$AH[n]),o===w?t=w:t!==w&&(t+=(null!=o?o:"")+s[n+1]),this._$AH[n]=o}a&&!i&&this.k(t)}k(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class M extends S{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===w?void 0:t}}var k=i$2?i$2.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4}k(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name)}}class I extends S{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t){var e;if((t=null!==(e=P(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:w)!==b){var r=this._$AH,i=t===w&&r!==w||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==w&&(r===w||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}var R={P:"$lit$",V:e$6,L:o$3,I:1,N:C,R:V,D:u,j:P,H:N,O:S,F:H,B:I,W:M,Z:L},z=window.litHtmlPolyfillSupport,l$1,o$2;null==z||z(E,N),(null!==(t$2=globalThis.litHtmlVersions)&&void 0!==t$2?t$2:globalThis.litHtmlVersions=[]).push("2.1.2");var r=a$1;class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e,r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){var e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s});var n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});var h={_$AK:(t,e,r)=>{t._$AK(e,r)},_$AL:t=>t._$AL};(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.1.2");
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var n$1=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{var{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e)
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,i$1=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?_objectSpread2(_objectSpread2({},e),{},{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function e$5(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):i$1(t,e)}
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function t$1(t){return e$5(_objectSpread2(_objectSpread2({},t),{},{state:!0}))}
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var e$4=(t,e,r)=>{Object.defineProperty(e,r,t)},t=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),o$1=t=>{var{finisher:e,descriptor:r}=t;return(t,i)=>{var s;if(void 0===i){var a=null!==(s=t.originalKey)&&void 0!==s?s:t.key,n=null!=r?{kind:"method",placement:"prototype",key:a,descriptor:r(t.key)}:_objectSpread2(_objectSpread2({},t),{},{key:a});return null!=e&&(n.finisher=function(t){e(t,a)}),n}var o=t.constructor;void 0!==r&&Object.defineProperty(t,i,r(i)),null==e||e(o,i)}},n;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function e$3(t){return o$1({finisher:(e,r)=>{Object.assign(e.prototype[r],t)}})}
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function i(t,e){return o$1({descriptor:r=>{var i={get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(e){var s="symbol"==typeof r?Symbol():"__"+r;i.get=function(){var e,r;return void 0===this[s]&&(this[s]=null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null),this[s]}}return i}})}
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function e$2(t){return o$1({descriptor:e=>({get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==r?r:[]},enumerable:!0,configurable:!0})})}
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function e$1(t){return o$1({descriptor:e=>({get(){var e=this;return _asyncToGenerator((function*(){var r;return yield e.updateComplete,null===(r=e.renderRoot)||void 0===r?void 0:r.querySelector(t)}))()},enumerable:!0,configurable:!0})})}
  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var e=null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function l(t){var{slot:r,selector:i}=null!=t?t:{};return o$1({descriptor:s=>({get(){var s,a="slot"+(r?"[name=".concat(r,"]"):":not([name])"),n=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(a),o=null!=n?e(n,t):[];return i?o.filter((t=>t.matches(i))):o},enumerable:!0,configurable:!0})})}
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function o(t,e,r){var i,s=t;return"object"==typeof t?(s=t.slot,i=t):i={flatten:e},r?l({slot:s,flatten:e,selector:r}):o$1({descriptor:t=>({get(){var t,e,r="slot"+(s?"[name=".concat(s,"]"):":not([name])"),a=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(r);return null!==(e=null==a?void 0:a.assignedNodes(i))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function getDefaultExportFromNamespaceIfPresent(t){return t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function getDefaultExportFromNamespaceIfNotNamed(t){return t&&Object.prototype.hasOwnProperty.call(t,"default")&&1===Object.keys(t).length?t.default:t}function getAugmentedNamespace(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})})),e}function commonjsRequire(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var lottie$1={exports:{}};(function(module){var root,factory;"undefined"!=typeof navigator&&(root=window||{},factory=function(window){var svgNS="http://www.w3.org/2000/svg",locationHref="",initialDefaultFrame=-999999,_useWebWorker=!1,subframeEnabled=!0,idPrefix="",expressionsPlugin,isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),cachedColors={},bmRnd,bmPow=Math.pow,bmSqrt=Math.sqrt,bmFloor=Math.floor,bmMax=Math.max,bmMin=Math.min,BMMath={};function ProjectInterface(){return{}}!function(){var t,e=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],r=e.length;for(t=0;t<r;t+=1)BMMath[e[t]]=Math[e[t]]}(),BMMath.random=Math.random,BMMath.abs=function(t){if("object"==typeof t&&t.length){var e,r=createSizedArray(t.length),i=t.length;for(e=0;e<i;e+=1)r[e]=Math.abs(t[e]);return r}return Math.abs(t)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;function roundValues(t){bmRnd=t?Math.round:function(t){return t}}function styleDiv(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin="0 0",t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility="visible",t.style.webkitBackfaceVisibility="visible",t.style.transformStyle="preserve-3d",t.style.webkitTransformStyle="preserve-3d",t.style.mozTransformStyle="preserve-3d"}function BMEnterFrameEvent(t,e,r,i){this.type=t,this.currentTime=e,this.totalTime=r,this.direction=i<0?-1:1}function BMCompleteEvent(t,e){this.type=t,this.direction=e<0?-1:1}function BMCompleteLoopEvent(t,e,r,i){this.type=t,this.currentLoop=r,this.totalLoops=e,this.direction=i<0?-1:1}function BMSegmentStartEvent(t,e,r){this.type=t,this.firstFrame=e,this.totalFrames=r}function BMDestroyEvent(t,e){this.type=t,this.target=e}function BMRenderFrameErrorEvent(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function BMConfigErrorEvent(t){this.type="configError",this.nativeError=t}function BMAnimationConfigErrorEvent(t,e){this.type=t,this.nativeError=e}roundValues(!1);var createElementID=(_count=0,function(){return idPrefix+"__lottie_element_"+(_count+=1)}),_count;function HSVtoRGB(t,e,r){var i,s,a,n,o,h,l,p;switch(h=r*(1-e),l=r*(1-(o=6*t-(n=Math.floor(6*t)))*e),p=r*(1-(1-o)*e),n%6){case 0:i=r,s=p,a=h;break;case 1:i=l,s=r,a=h;break;case 2:i=h,s=r,a=p;break;case 3:i=h,s=l,a=r;break;case 4:i=p,s=h,a=r;break;case 5:i=r,s=h,a=l}return[i,s,a]}function RGBtoHSV(t,e,r){var i,s=Math.max(t,e,r),a=Math.min(t,e,r),n=s-a,o=0===s?0:n/s,h=s/255;switch(s){case a:i=0;break;case t:i=e-r+n*(e<r?6:0),i/=6*n;break;case e:i=r-t+2*n,i/=6*n;break;case r:i=t-e+4*n,i/=6*n}return[i,o,h]}function addSaturationToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[1]+=e,r[1]>1?r[1]=1:r[1]<=0&&(r[1]=0),HSVtoRGB(r[0],r[1],r[2])}function addBrightnessToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[2]+=e,r[2]>1?r[2]=1:r[2]<0&&(r[2]=0),HSVtoRGB(r[0],r[1],r[2])}function addHueToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[0]+=e/360,r[0]>1?r[0]-=1:r[0]<0&&(r[0]+=1),HSVtoRGB(r[0],r[1],r[2])}var rgbToHex=function(){var t,e,r=[];for(t=0;t<256;t+=1)e=t.toString(16),r[t]=1===e.length?"0"+e:e;return function(t,e,i){return t<0&&(t=0),e<0&&(e=0),i<0&&(i=0),"#"+r[t]+r[e]+r[i]}}();function BaseEvent(){}BaseEvent.prototype={triggerEvent:function(t,e){if(this._cbs[t])for(var r=this._cbs[t],i=0;i<r.length;i+=1)r[i](e)},addEventListener:function(t,e){return this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e),function(){this.removeEventListener(t,e)}.bind(this)},removeEventListener:function(t,e){if(e){if(this._cbs[t]){for(var r=0,i=this._cbs[t].length;r<i;)this._cbs[t][r]===e&&(this._cbs[t].splice(r,1),r-=1,i-=1),r+=1;this._cbs[t].length||(this._cbs[t]=null)}}else this._cbs[t]=null}};var createTypedArray=function(){function t(t,e){var r,i=0,s=[];switch(t){case"int16":case"uint8c":r=1;break;default:r=1.1}for(i=0;i<e;i+=1)s.push(r);return s}return"function"==typeof Uint8ClampedArray&&"function"==typeof Float32Array?function(e,r){return"float32"===e?new Float32Array(r):"int16"===e?new Int16Array(r):"uint8c"===e?new Uint8ClampedArray(r):t(e,r)}:t}();function createSizedArray(t){return Array.apply(null,{length:t})}function createNS(t){return document.createElementNS(svgNS,t)}function createTag(t){return document.createElement(t)}function DynamicPropertyContainer(){}DynamicPropertyContainer.prototype={addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&(this.dynamicProperties.push(t),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){var t;this._mdf=!1;var e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(t){this.container=t,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var getBlendMode=(blendModeEnums={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"},function(t){return blendModeEnums[t]||""}),blendModeEnums,lineCapEnum={1:"butt",2:"round",3:"square"},lineJoinEnum={1:"miter",2:"round",3:"bevel"},Matrix=function(){var t=Math.cos,e=Math.sin,r=Math.tan,i=Math.round;function s(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function a(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1)}function n(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1)}function o(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1)}function h(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1)}function l(t,e){return this._t(1,e,t,1,0,0)}function p(t,e){return this.shear(r(t),r(e))}function c(i,s){var a=t(s),n=e(s);return this._t(a,n,0,0,-n,a,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,r(i),1,0,0,0,0,1,0,0,0,0,1)._t(a,-n,0,0,n,a,0,0,0,0,1,0,0,0,0,1)}function f(t,e,r){return r||0===r||(r=1),1===t&&1===e&&1===r?this:this._t(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1)}function d(t,e,r,i,s,a,n,o,h,l,p,c,f,d,m,u){return this.props[0]=t,this.props[1]=e,this.props[2]=r,this.props[3]=i,this.props[4]=s,this.props[5]=a,this.props[6]=n,this.props[7]=o,this.props[8]=h,this.props[9]=l,this.props[10]=p,this.props[11]=c,this.props[12]=f,this.props[13]=d,this.props[14]=m,this.props[15]=u,this}function m(t,e,r){return r=r||0,0!==t||0!==e||0!==r?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,r,1):this}function u(t,e,r,i,s,a,n,o,h,l,p,c,f,d,m,u){var y=this.props;if(1===t&&0===e&&0===r&&0===i&&0===s&&1===a&&0===n&&0===o&&0===h&&0===l&&1===p&&0===c)return y[12]=y[12]*t+y[15]*f,y[13]=y[13]*a+y[15]*d,y[14]=y[14]*p+y[15]*m,y[15]*=u,this._identityCalculated=!1,this;var g=y[0],v=y[1],b=y[2],P=y[3],_=y[4],E=y[5],S=y[6],x=y[7],A=y[8],w=y[9],C=y[10],k=y[11],T=y[12],D=y[13],M=y[14],F=y[15];return y[0]=g*t+v*s+b*h+P*f,y[1]=g*e+v*a+b*l+P*d,y[2]=g*r+v*n+b*p+P*m,y[3]=g*i+v*o+b*c+P*u,y[4]=_*t+E*s+S*h+x*f,y[5]=_*e+E*a+S*l+x*d,y[6]=_*r+E*n+S*p+x*m,y[7]=_*i+E*o+S*c+x*u,y[8]=A*t+w*s+C*h+k*f,y[9]=A*e+w*a+C*l+k*d,y[10]=A*r+w*n+C*p+k*m,y[11]=A*i+w*o+C*c+k*u,y[12]=T*t+D*s+M*h+F*f,y[13]=T*e+D*a+M*l+F*d,y[14]=T*r+D*n+M*p+F*m,y[15]=T*i+D*o+M*c+F*u,this._identityCalculated=!1,this}function y(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function g(t){for(var e=0;e<16;){if(t.props[e]!==this.props[e])return!1;e+=1}return!0}function v(t){var e;for(e=0;e<16;e+=1)t.props[e]=this.props[e];return t}function b(t){var e;for(e=0;e<16;e+=1)this.props[e]=t[e]}function P(t,e,r){return{x:t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}}function _(t,e,r){return t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12]}function E(t,e,r){return t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13]}function S(t,e,r){return t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}function x(){var t=this.props[0]*this.props[5]-this.props[1]*this.props[4],e=this.props[5]/t,r=-this.props[1]/t,i=-this.props[4]/t,s=this.props[0]/t,a=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/t,n=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/t,o=new Matrix;return o.props[0]=e,o.props[1]=r,o.props[4]=i,o.props[5]=s,o.props[12]=a,o.props[13]=n,o}function A(t){return this.getInverseMatrix().applyToPointArray(t[0],t[1],t[2]||0)}function w(t){var e,r=t.length,i=[];for(e=0;e<r;e+=1)i[e]=A(t[e]);return i}function C(t,e,r){var i=createTypedArray("float32",6);if(this.isIdentity())i[0]=t[0],i[1]=t[1],i[2]=e[0],i[3]=e[1],i[4]=r[0],i[5]=r[1];else{var s=this.props[0],a=this.props[1],n=this.props[4],o=this.props[5],h=this.props[12],l=this.props[13];i[0]=t[0]*s+t[1]*n+h,i[1]=t[0]*a+t[1]*o+l,i[2]=e[0]*s+e[1]*n+h,i[3]=e[0]*a+e[1]*o+l,i[4]=r[0]*s+r[1]*n+h,i[5]=r[0]*a+r[1]*o+l}return i}function k(t,e,r){return this.isIdentity()?[t,e,r]:[t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]]}function T(t,e){if(this.isIdentity())return t+","+e;var r=this.props;return Math.round(100*(t*r[0]+e*r[4]+r[12]))/100+","+Math.round(100*(t*r[1]+e*r[5]+r[13]))/100}function D(){for(var t=0,e=this.props,r="matrix3d(";t<16;)r+=i(1e4*e[t])/1e4,r+=15===t?")":",",t+=1;return r}function M(t){return t<1e-6&&t>0||t>-1e-6&&t<0?i(1e4*t)/1e4:t}function F(){var t=this.props;return"matrix("+M(t[0])+","+M(t[1])+","+M(t[4])+","+M(t[5])+","+M(t[12])+","+M(t[13])+")"}return function(){this.reset=s,this.rotate=a,this.rotateX=n,this.rotateY=o,this.rotateZ=h,this.skew=p,this.skewFromAxis=c,this.shear=l,this.scale=f,this.setTransform=d,this.translate=m,this.transform=u,this.applyToPoint=P,this.applyToX=_,this.applyToY=E,this.applyToZ=S,this.applyToPointArray=k,this.applyToTriplePoints=C,this.applyToPointStringified=T,this.toCSS=D,this.to2dCSS=F,this.clone=v,this.cloneFromProps=b,this.equals=g,this.inversePoints=w,this.inversePoint=A,this.getInverseMatrix=x,this._t=this.transform,this.isIdentity=y,this._identity=!0,this._identityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}();!function(t,e){var r=this,i=256,s=e.pow(i,6),a=e.pow(2,52),n=2*a,o=255;function h(t){var e,r=t.length,s=this,a=0,n=s.i=s.j=0,h=s.S=[];for(r||(t=[r++]);a<i;)h[a]=a++;for(a=0;a<i;a++)h[a]=h[n=o&n+t[a%r]+(e=h[a])],h[n]=e;s.g=function(t){for(var e,r=0,a=s.i,n=s.j,h=s.S;t--;)e=h[a=o&a+1],r=r*i+h[o&(h[a]=h[n=o&n+e])+(h[n]=e)];return s.i=a,s.j=n,r}}function l(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function p(t,e){var r,i=[],s=typeof t;if(e&&"object"==s)for(r in t)try{i.push(p(t[r],e-1))}catch(t){}return i.length?i:"string"==s?t:t+"\0"}function c(t,e){for(var r,i=t+"",s=0;s<i.length;)e[o&s]=o&(r^=19*e[o&s])+i.charCodeAt(s++);return f(e)}function f(t){return String.fromCharCode.apply(0,t)}e.seedrandom=function(o,d,m){var u=[],y=c(p((d=!0===d?{entropy:!0}:d||{}).entropy?[o,f(t)]:null===o?function(){try{var e=new Uint8Array(i);return(r.crypto||r.msCrypto).getRandomValues(e),f(e)}catch(e){var s=r.navigator,a=s&&s.plugins;return[+new Date,r,a,r.screen,f(t)]}}():o,3),u),g=new h(u),v=function(){for(var t=g.g(6),e=s,r=0;t<a;)t=(t+r)*i,e*=i,r=g.g(1);for(;t>=n;)t/=2,e/=2,r>>>=1;return(t+r)/e};return v.int32=function(){return 0|g.g(4)},v.quick=function(){return g.g(4)/4294967296},v.double=v,c(f(g.S),t),(d.pass||m||function(t,r,i,s){return s&&(s.S&&l(s,g),t.state=function(){return l(g,{})}),i?(e.random=t,r):t})(v,y,"global"in d?d.global:this==e,d.state)},c(e.random(),t)}([],BMMath);var BezierFactory=function(){var t={getBezierEasing:function(t,r,i,s,a){var n=a||("bez_"+t+"_"+r+"_"+i+"_"+s).replace(/\./g,"p");if(e[n])return e[n];var o=new l([t,r,i,s]);return e[n]=o,o}},e={},r=.1,i="function"==typeof Float32Array;function s(t,e){return 1-3*e+3*t}function a(t,e){return 3*e-6*t}function n(t){return 3*t}function o(t,e,r){return((s(e,r)*t+a(e,r))*t+n(e))*t}function h(t,e,r){return 3*s(e,r)*t*t+2*a(e,r)*t+n(e)}function l(t){this._p=t,this._mSampleValues=i?new Float32Array(11):new Array(11),this._precomputed=!1,this.get=this.get.bind(this)}return l.prototype={get:function(t){var e=this._p[0],r=this._p[1],i=this._p[2],s=this._p[3];return this._precomputed||this._precompute(),e===r&&i===s?t:0===t?0:1===t?1:o(this._getTForX(t),r,s)},_precompute:function(){var t=this._p[0],e=this._p[1],r=this._p[2],i=this._p[3];this._precomputed=!0,t===e&&r===i||this._calcSampleValues()},_calcSampleValues:function(){for(var t=this._p[0],e=this._p[2],i=0;i<11;++i)this._mSampleValues[i]=o(i*r,t,e)},_getTForX:function(t){for(var e=this._p[0],i=this._p[2],s=this._mSampleValues,a=0,n=1;10!==n&&s[n]<=t;++n)a+=r;var l=a+(t-s[--n])/(s[n+1]-s[n])*r,p=h(l,e,i);return p>=.001?function(t,e,r,i){for(var s=0;s<4;++s){var a=h(e,r,i);if(0===a)return e;e-=(o(e,r,i)-t)/a}return e}(t,l,e,i):0===p?l:function(t,e,r,i,s){var a,n,h=0;do{(a=o(n=e+(r-e)/2,i,s)-t)>0?r=n:e=n}while(Math.abs(a)>1e-7&&++h<10);return n}(t,a,a+r,e,i)}},t}();function extendPrototype(t,e){var r,i,s=t.length;for(r=0;r<s;r+=1)for(var a in i=t[r].prototype)Object.prototype.hasOwnProperty.call(i,a)&&(e.prototype[a]=i[a])}function getDescriptor(t,e){return Object.getOwnPropertyDescriptor(t,e)}function createProxyFunction(t){function e(){}return e.prototype=t,e}function bezFunction(){var t=Math;function e(t,e,r,i,s,a){var n=t*i+e*s+r*a-s*i-a*t-r*e;return n>-.001&&n<.001}var r=function(t,e,r,i){var s,a,n,o,h,l,p=defaultCurveSegments,c=0,f=[],d=[],m=bezierLengthPool.newElement();for(n=r.length,s=0;s<p;s+=1){for(h=s/(p-1),l=0,a=0;a<n;a+=1)o=bmPow(1-h,3)*t[a]+3*bmPow(1-h,2)*h*r[a]+3*(1-h)*bmPow(h,2)*i[a]+bmPow(h,3)*e[a],f[a]=o,null!==d[a]&&(l+=bmPow(f[a]-d[a],2)),d[a]=f[a];l&&(c+=l=bmSqrt(l)),m.percents[s]=h,m.lengths[s]=c}return m.addedLength=c,m};function i(t){this.segmentLength=0,this.points=new Array(t)}function s(t,e){this.partialLength=t,this.point=e}var a,n=(a={},function(t,r,n,o){var h=(t[0]+"_"+t[1]+"_"+r[0]+"_"+r[1]+"_"+n[0]+"_"+n[1]+"_"+o[0]+"_"+o[1]).replace(/\./g,"p");if(!a[h]){var l,p,c,f,d,m,u,y=defaultCurveSegments,g=0,v=null;2===t.length&&(t[0]!==r[0]||t[1]!==r[1])&&e(t[0],t[1],r[0],r[1],t[0]+n[0],t[1]+n[1])&&e(t[0],t[1],r[0],r[1],r[0]+o[0],r[1]+o[1])&&(y=2);var b=new i(y);for(c=n.length,l=0;l<y;l+=1){for(u=createSizedArray(c),d=l/(y-1),m=0,p=0;p<c;p+=1)f=bmPow(1-d,3)*t[p]+3*bmPow(1-d,2)*d*(t[p]+n[p])+3*(1-d)*bmPow(d,2)*(r[p]+o[p])+bmPow(d,3)*r[p],u[p]=f,null!==v&&(m+=bmPow(u[p]-v[p],2));g+=m=bmSqrt(m),b.points[l]=new s(m,u),v=u}b.segmentLength=g,a[h]=b}return a[h]});function o(t,e){var r=e.percents,i=e.lengths,s=r.length,a=bmFloor((s-1)*t),n=t*e.addedLength,o=0;if(a===s-1||0===a||n===i[a])return r[a];for(var h=i[a]>n?-1:1,l=!0;l;)if(i[a]<=n&&i[a+1]>n?(o=(n-i[a])/(i[a+1]-i[a]),l=!1):a+=h,a<0||a>=s-1){if(a===s-1)return r[a];l=!1}return r[a]+(r[a+1]-r[a])*o}var h=createTypedArray("float32",8);return{getSegmentsLength:function(t){var e,i=segmentsLengthPool.newElement(),s=t.c,a=t.v,n=t.o,o=t.i,h=t._length,l=i.lengths,p=0;for(e=0;e<h-1;e+=1)l[e]=r(a[e],a[e+1],n[e],o[e+1]),p+=l[e].addedLength;return s&&h&&(l[e]=r(a[e],a[0],n[e],o[0]),p+=l[e].addedLength),i.totalLength=p,i},getNewSegment:function(e,r,i,s,a,n,l){a<0?a=0:a>1&&(a=1);var p,c=o(a,l),f=o(n=n>1?1:n,l),d=e.length,m=1-c,u=1-f,y=m*m*m,g=c*m*m*3,v=c*c*m*3,b=c*c*c,P=m*m*u,_=c*m*u+m*c*u+m*m*f,E=c*c*u+m*c*f+c*m*f,S=c*c*f,x=m*u*u,A=c*u*u+m*f*u+m*u*f,w=c*f*u+m*f*f+c*u*f,C=c*f*f,k=u*u*u,T=f*u*u+u*f*u+u*u*f,D=f*f*u+u*f*f+f*u*f,M=f*f*f;for(p=0;p<d;p+=1)h[4*p]=t.round(1e3*(y*e[p]+g*i[p]+v*s[p]+b*r[p]))/1e3,h[4*p+1]=t.round(1e3*(P*e[p]+_*i[p]+E*s[p]+S*r[p]))/1e3,h[4*p+2]=t.round(1e3*(x*e[p]+A*i[p]+w*s[p]+C*r[p]))/1e3,h[4*p+3]=t.round(1e3*(k*e[p]+T*i[p]+D*s[p]+M*r[p]))/1e3;return h},getPointInSegment:function(e,r,i,s,a,n){var h=o(a,n),l=1-h;return[t.round(1e3*(l*l*l*e[0]+(h*l*l+l*h*l+l*l*h)*i[0]+(h*h*l+l*h*h+h*l*h)*s[0]+h*h*h*r[0]))/1e3,t.round(1e3*(l*l*l*e[1]+(h*l*l+l*h*l+l*l*h)*i[1]+(h*h*l+l*h*h+h*l*h)*s[1]+h*h*h*r[1]))/1e3]},buildBezierData:n,pointOnLine2D:e,pointOnLine3D:function(r,i,s,a,n,o,h,l,p){if(0===s&&0===o&&0===p)return e(r,i,a,n,h,l);var c,f=t.sqrt(t.pow(a-r,2)+t.pow(n-i,2)+t.pow(o-s,2)),d=t.sqrt(t.pow(h-r,2)+t.pow(l-i,2)+t.pow(p-s,2)),m=t.sqrt(t.pow(h-a,2)+t.pow(l-n,2)+t.pow(p-o,2));return(c=f>d?f>m?f-d-m:m-d-f:m>d?m-d-f:d-f-m)>-1e-4&&c<1e-4}}}!function(){for(var t=0,e=["ms","moz","webkit","o"],r=0;r<e.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[e[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[r]+"CancelAnimationFrame"]||window[e[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var r=(new Date).getTime(),i=Math.max(0,16-(r-t)),s=setTimeout((function(){e(r+i)}),i);return t=r+i,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var bez=bezFunction(),dataManager=function(){var t,e,r=1,i=[],s={onmessage:function(){},postMessage:function(e){t({data:e})}},_workerSelf={postMessage:function(t){s.onmessage({data:t})}};function a(){e||(e=function(e){if(window.Worker&&window.Blob&&_useWebWorker){var r=new Blob(["var _workerSelf = self; self.onmessage = ",e.toString()],{type:"text/javascript"}),i=URL.createObjectURL(r);return new Worker(i)}return t=e,s}((function(t){if(_workerSelf.dataManager||(_workerSelf.dataManager=function(){function t(s,a){var n,o,h,l,p,f,d=s.length;for(o=0;o<d;o+=1)if("ks"in(n=s[o])&&!n.completed){if(n.completed=!0,n.tt&&(s[o-1].td=n.tt),n.hasMask){var m=n.masksProperties;for(l=m.length,h=0;h<l;h+=1)if(m[h].pt.k.i)i(m[h].pt.k);else for(f=m[h].pt.k.length,p=0;p<f;p+=1)m[h].pt.k[p].s&&i(m[h].pt.k[p].s[0]),m[h].pt.k[p].e&&i(m[h].pt.k[p].e[0])}0===n.ty?(n.layers=e(n.refId,a),t(n.layers,a)):4===n.ty?r(n.shapes):5===n.ty&&c(n)}}function e(t,e){for(var r=0,i=e.length;r<i;){if(e[r].id===t)return e[r].layers.__used?JSON.parse(JSON.stringify(e[r].layers)):(e[r].layers.__used=!0,e[r].layers);r+=1}return null}function r(t){var e,s,a;for(e=t.length-1;e>=0;e-=1)if("sh"===t[e].ty)if(t[e].ks.k.i)i(t[e].ks.k);else for(a=t[e].ks.k.length,s=0;s<a;s+=1)t[e].ks.k[s].s&&i(t[e].ks.k[s].s[0]),t[e].ks.k[s].e&&i(t[e].ks.k[s].e[0]);else"gr"===t[e].ty&&r(t[e].it)}function i(t){var e,r=t.i.length;for(e=0;e<r;e+=1)t.i[e][0]+=t.v[e][0],t.i[e][1]+=t.v[e][1],t.o[e][0]+=t.v[e][0],t.o[e][1]+=t.v[e][1]}function s(t,e){var r=e?e.split("."):[100,100,100];return t[0]>r[0]||!(r[0]>t[0])&&(t[1]>r[1]||!(r[1]>t[1])&&(t[2]>r[2]||!(r[2]>t[2])&&null))}var a,n=function(){var t=[4,4,14];function e(t){var e,r,i,s=t.length;for(e=0;e<s;e+=1)5===t[e].ty&&(i=void 0,i=(r=t[e]).t.d,r.t.d={k:[{s:i,t:0}]})}return function(r){if(s(t,r.v)&&(e(r.layers),r.assets)){var i,a=r.assets.length;for(i=0;i<a;i+=1)r.assets[i].layers&&e(r.assets[i].layers)}}}(),o=(a=[4,7,99],function(t){if(t.chars&&!s(a,t.v)){var e,r,n,o,h,l=t.chars.length;for(e=0;e<l;e+=1)if(t.chars[e].data&&t.chars[e].data.shapes)for(n=(h=t.chars[e].data.shapes[0].it).length,r=0;r<n;r+=1)(o=h[r].ks.k).__converted||(i(h[r].ks.k),o.__converted=!0)}}),h=function(){var t=[5,7,15];function e(t){var e,r,i=t.length;for(e=0;e<i;e+=1)5===t[e].ty&&(r=void 0,"number"==typeof(r=t[e].t.p).a&&(r.a={a:0,k:r.a}),"number"==typeof r.p&&(r.p={a:0,k:r.p}),"number"==typeof r.r&&(r.r={a:0,k:r.r}))}return function(r){if(s(t,r.v)&&(e(r.layers),r.assets)){var i,a=r.assets.length;for(i=0;i<a;i+=1)r.assets[i].layers&&e(r.assets[i].layers)}}}(),l=function(){var t=[4,1,9];function e(t){var r,i,s,a=t.length;for(r=0;r<a;r+=1)if("gr"===t[r].ty)e(t[r].it);else if("fl"===t[r].ty||"st"===t[r].ty)if(t[r].c.k&&t[r].c.k[0].i)for(s=t[r].c.k.length,i=0;i<s;i+=1)t[r].c.k[i].s&&(t[r].c.k[i].s[0]/=255,t[r].c.k[i].s[1]/=255,t[r].c.k[i].s[2]/=255,t[r].c.k[i].s[3]/=255),t[r].c.k[i].e&&(t[r].c.k[i].e[0]/=255,t[r].c.k[i].e[1]/=255,t[r].c.k[i].e[2]/=255,t[r].c.k[i].e[3]/=255);else t[r].c.k[0]/=255,t[r].c.k[1]/=255,t[r].c.k[2]/=255,t[r].c.k[3]/=255}function r(t){var r,i=t.length;for(r=0;r<i;r+=1)4===t[r].ty&&e(t[r].shapes)}return function(e){if(s(t,e.v)&&(r(e.layers),e.assets)){var i,a=e.assets.length;for(i=0;i<a;i+=1)e.assets[i].layers&&r(e.assets[i].layers)}}}(),p=function(){var t=[4,4,18];function e(t){var r,i,s;for(r=t.length-1;r>=0;r-=1)if("sh"===t[r].ty)if(t[r].ks.k.i)t[r].ks.k.c=t[r].closed;else for(s=t[r].ks.k.length,i=0;i<s;i+=1)t[r].ks.k[i].s&&(t[r].ks.k[i].s[0].c=t[r].closed),t[r].ks.k[i].e&&(t[r].ks.k[i].e[0].c=t[r].closed);else"gr"===t[r].ty&&e(t[r].it)}function r(t){var r,i,s,a,n,o,h=t.length;for(i=0;i<h;i+=1){if((r=t[i]).hasMask){var l=r.masksProperties;for(a=l.length,s=0;s<a;s+=1)if(l[s].pt.k.i)l[s].pt.k.c=l[s].cl;else for(o=l[s].pt.k.length,n=0;n<o;n+=1)l[s].pt.k[n].s&&(l[s].pt.k[n].s[0].c=l[s].cl),l[s].pt.k[n].e&&(l[s].pt.k[n].e[0].c=l[s].cl)}4===r.ty&&e(r.shapes)}}return function(e){if(s(t,e.v)&&(r(e.layers),e.assets)){var i,a=e.assets.length;for(i=0;i<a;i+=1)e.assets[i].layers&&r(e.assets[i].layers)}}}();function c(t){0!==t.t.a.length||"m"in t.t.p||(t.singleShape=!0)}var f={completeData:function(e){e.__complete||(l(e),n(e),o(e),h(e),p(e),t(e.layers,e.assets),e.__complete=!0)}};return f.checkColors=l,f.checkChars=o,f.checkPathProperties=h,f.checkShapes=p,f.completeLayers=t,f}()),_workerSelf.assetLoader||(_workerSelf.assetLoader=function(){function t(t){var e=t.getResponseHeader("content-type");return e&&"json"===t.responseType&&-1!==e.indexOf("json")||t.response&&"object"==typeof t.response?t.response:t.response&&"string"==typeof t.response?JSON.parse(t.response):t.responseText?JSON.parse(t.responseText):null}return{load:function(e,r,i,s){var a,n=new XMLHttpRequest;try{n.responseType="json"}catch(t){}n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status)a=t(n),i(a);else try{a=t(n),i(a)}catch(t){s&&s(t)}};try{n.open("GET",e,!0)}catch(t){n.open("GET",r+"/"+e,!0)}n.send()}}}()),"loadAnimation"===t.data.type)_workerSelf.assetLoader.load(t.data.path,t.data.fullPath,(function(e){_workerSelf.dataManager.completeData(e),_workerSelf.postMessage({id:t.data.id,payload:e,status:"success"})}),(function(){_workerSelf.postMessage({id:t.data.id,status:"error"})}));else if("complete"===t.data.type){var e=t.data.animation;_workerSelf.dataManager.completeData(e),_workerSelf.postMessage({id:t.data.id,payload:e,status:"success"})}else"loadData"===t.data.type&&_workerSelf.assetLoader.load(t.data.path,t.data.fullPath,(function(e){_workerSelf.postMessage({id:t.data.id,payload:e,status:"success"})}),(function(){_workerSelf.postMessage({id:t.data.id,status:"error"})}))})),e.onmessage=function(t){var e=t.data,r=e.id,s=i[r];i[r]=null,"success"===e.status?s.onComplete(e.payload):s.onError&&s.onError()})}function n(t,e){var s="processId_"+(r+=1);return i[s]={onComplete:t,onError:e},s}return{loadAnimation:function(t,r,i){a();var s=n(r,i);e.postMessage({type:"loadAnimation",path:t,fullPath:window.location.origin+window.location.pathname,id:s})},loadData:function(t,r,i){a();var s=n(r,i);e.postMessage({type:"loadData",path:t,fullPath:window.location.origin+window.location.pathname,id:s})},completeAnimation:function(t,r,i){a();var s=n(r,i);e.postMessage({type:"complete",animation:t,id:s})}}}();function getFontProperties(t){for(var e=t.fStyle?t.fStyle.split(" "):[],r="normal",i="normal",s=e.length,a=0;a<s;a+=1)switch(e[a].toLowerCase()){case"italic":i="italic";break;case"bold":r="700";break;case"black":r="900";break;case"medium":r="500";break;case"regular":case"normal":r="400";break;case"light":case"thin":r="200"}return{style:i,weight:t.fWeight||r}}var FontManager=function(){var t={w:0,size:0,shapes:[]},e=[];e=e.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var r=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"],i=[65039,8205];function s(t,e){var r=createTag("span");r.setAttribute("aria-hidden",!0),r.style.fontFamily=e;var i=createTag("span");i.innerText="giItT1WQy@!-/#",r.style.position="absolute",r.style.left="-10000px",r.style.top="-10000px",r.style.fontSize="300px",r.style.fontVariant="normal",r.style.fontStyle="normal",r.style.fontWeight="normal",r.style.letterSpacing="0",r.appendChild(i),document.body.appendChild(r);var s=i.offsetWidth;return i.style.fontFamily=function(t){var e,r=t.split(","),i=r.length,s=[];for(e=0;e<i;e+=1)"sans-serif"!==r[e]&&"monospace"!==r[e]&&s.push(r[e]);return s.join(",")}(t)+", "+e,{node:i,w:s,parent:r}}function a(t,e){var r=createNS("text");r.style.fontSize="100px";var i=getFontProperties(e);return r.setAttribute("font-family",e.fFamily),r.setAttribute("font-style",i.style),r.setAttribute("font-weight",i.weight),r.textContent="1",e.fClass?(r.style.fontFamily="inherit",r.setAttribute("class",e.fClass)):r.style.fontFamily=e.fFamily,t.appendChild(r),createTag("canvas").getContext("2d").font=e.fWeight+" "+e.fStyle+" 100px "+e.fFamily,r}var n=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};n.isModifier=function(t,e){var i=t.toString(16)+e.toString(16);return-1!==r.indexOf(i)},n.isZeroWidthJoiner=function(t,e){return e?t===i[0]&&e===i[1]:t===i[1]},n.isCombinedCharacter=function(t){return-1!==e.indexOf(t)};var o={addChars:function(t){if(t){var e;this.chars||(this.chars=[]);var r,i,s=t.length,a=this.chars.length;for(e=0;e<s;e+=1){for(r=0,i=!1;r<a;)this.chars[r].style===t[e].style&&this.chars[r].fFamily===t[e].fFamily&&this.chars[r].ch===t[e].ch&&(i=!0),r+=1;i||(this.chars.push(t[e]),a+=1)}}},addFonts:function(t,e){if(t){if(this.chars)return this.isLoaded=!0,void(this.fonts=t.list);var r,i=t.list,n=i.length,o=n;for(r=0;r<n;r+=1){var h,l,p=!0;if(i[r].loaded=!1,i[r].monoCase=s(i[r].fFamily,"monospace"),i[r].sansCase=s(i[r].fFamily,"sans-serif"),i[r].fPath){if("p"===i[r].fOrigin||3===i[r].origin){if((h=document.querySelectorAll('style[f-forigin="p"][f-family="'+i[r].fFamily+'"], style[f-origin="3"][f-family="'+i[r].fFamily+'"]')).length>0&&(p=!1),p){var c=createTag("style");c.setAttribute("f-forigin",i[r].fOrigin),c.setAttribute("f-origin",i[r].origin),c.setAttribute("f-family",i[r].fFamily),c.type="text/css",c.innerText="@font-face {font-family: "+i[r].fFamily+"; font-style: normal; src: url('"+i[r].fPath+"');}",e.appendChild(c)}}else if("g"===i[r].fOrigin||1===i[r].origin){for(h=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),l=0;l<h.length;l+=1)-1!==h[l].href.indexOf(i[r].fPath)&&(p=!1);if(p){var f=createTag("link");f.setAttribute("f-forigin",i[r].fOrigin),f.setAttribute("f-origin",i[r].origin),f.type="text/css",f.rel="stylesheet",f.href=i[r].fPath,document.body.appendChild(f)}}else if("t"===i[r].fOrigin||2===i[r].origin){for(h=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),l=0;l<h.length;l+=1)i[r].fPath===h[l].src&&(p=!1);if(p){var d=createTag("link");d.setAttribute("f-forigin",i[r].fOrigin),d.setAttribute("f-origin",i[r].origin),d.setAttribute("rel","stylesheet"),d.setAttribute("href",i[r].fPath),e.appendChild(d)}}}else i[r].loaded=!0,o-=1;i[r].helper=a(e,i[r]),i[r].cache={},this.fonts.push(i[r])}0===o?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}else this.isLoaded=!0},getCharData:function(e,r,i){for(var s=0,a=this.chars.length;s<a;){if(this.chars[s].ch===e&&this.chars[s].style===r&&this.chars[s].fFamily===i)return this.chars[s];s+=1}return("string"==typeof e&&13!==e.charCodeAt(0)||!e)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",e,r,i)),t},getFontByName:function(t){for(var e=0,r=this.fonts.length;e<r;){if(this.fonts[e].fName===t)return this.fonts[e];e+=1}return this.fonts[0]},measureText:function(t,e,r){var i=this.getFontByName(e),s=t.charCodeAt(0);if(!i.cache[s+1]){var a=i.helper;if(" "===t){a.textContent="|"+t+"|";var n=a.getComputedTextLength();a.textContent="||";var o=a.getComputedTextLength();i.cache[s+1]=(n-o)/100}else a.textContent=t,i.cache[s+1]=a.getComputedTextLength()/100}return i.cache[s+1]*r},checkLoadedFonts:function(){var t,e,r,i=this.fonts.length,s=i;for(t=0;t<i;t+=1)this.fonts[t].loaded?s-=1:"n"===this.fonts[t].fOrigin||0===this.fonts[t].origin?this.fonts[t].loaded=!0:(e=this.fonts[t].monoCase.node,r=this.fonts[t].monoCase.w,e.offsetWidth!==r?(s-=1,this.fonts[t].loaded=!0):(e=this.fonts[t].sansCase.node,r=this.fonts[t].sansCase.w,e.offsetWidth!==r&&(s-=1,this.fonts[t].loaded=!0)),this.fonts[t].loaded&&(this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));0!==s&&Date.now()-this.initTime<5e3?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)},setIsLoaded:function(){this.isLoaded=!0}};return n.prototype=o,n}(),PropertyFactory=function(){var t=initialDefaultFrame,e=Math.abs;function r(t,e){var r,s=this.offsetTime;"multidimensional"===this.propType&&(r=createTypedArray("float32",this.pv.length));for(var a,n,o,h,l,p,c,f,d,m=e.lastIndex,u=m,y=this.keyframes.length-1,g=!0;g;){if(a=this.keyframes[u],n=this.keyframes[u+1],u===y-1&&t>=n.t-s){a.h&&(a=n),m=0;break}if(n.t-s>t){m=u;break}u<y-1?u+=1:(m=0,g=!1)}o=this.keyframesMetadata[u]||{};var v,b,P,_,E,S,x,A,w,C,k=n.t-s,T=a.t-s;if(a.to){o.bezierData||(o.bezierData=bez.buildBezierData(a.s,n.s||a.e,a.to,a.ti));var D=o.bezierData;if(t>=k||t<T){var M=t>=k?D.points.length-1:0;for(l=D.points[M].point.length,h=0;h<l;h+=1)r[h]=D.points[M].point[h]}else{o.__fnct?d=o.__fnct:(d=BezierFactory.getBezierEasing(a.o.x,a.o.y,a.i.x,a.i.y,a.n).get,o.__fnct=d),p=d((t-T)/(k-T));var F,I=D.segmentLength*p,R=e.lastFrame<t&&e._lastKeyframeIndex===u?e._lastAddedLength:0;for(f=e.lastFrame<t&&e._lastKeyframeIndex===u?e._lastPoint:0,g=!0,c=D.points.length;g;){if(R+=D.points[f].partialLength,0===I||0===p||f===D.points.length-1){for(l=D.points[f].point.length,h=0;h<l;h+=1)r[h]=D.points[f].point[h];break}if(I>=R&&I<R+D.points[f+1].partialLength){for(F=(I-R)/D.points[f+1].partialLength,l=D.points[f].point.length,h=0;h<l;h+=1)r[h]=D.points[f].point[h]+(D.points[f+1].point[h]-D.points[f].point[h])*F;break}f<c-1?f+=1:g=!1}e._lastPoint=f,e._lastAddedLength=R-D.points[f].partialLength,e._lastKeyframeIndex=u}}else{var V,O,L,B,$;if(y=a.s.length,v=n.s||a.e,this.sh&&1!==a.h)if(t>=k)r[0]=v[0],r[1]=v[1],r[2]=v[2];else if(t<=T)r[0]=a.s[0],r[1]=a.s[1],r[2]=a.s[2];else{var z=i(a.s),G=i(v);b=r,P=function(t,e,r){var i,s,a,n,o,h=[],l=t[0],p=t[1],c=t[2],f=t[3],d=e[0],m=e[1],u=e[2],y=e[3];return(s=l*d+p*m+c*u+f*y)<0&&(s=-s,d=-d,m=-m,u=-u,y=-y),1-s>1e-6?(i=Math.acos(s),a=Math.sin(i),n=Math.sin((1-r)*i)/a,o=Math.sin(r*i)/a):(n=1-r,o=r),h[0]=n*l+o*d,h[1]=n*p+o*m,h[2]=n*c+o*u,h[3]=n*f+o*y,h}(z,G,(t-T)/(k-T)),_=P[0],E=P[1],S=P[2],x=P[3],A=Math.atan2(2*E*x-2*_*S,1-2*E*E-2*S*S),w=Math.asin(2*_*E+2*S*x),C=Math.atan2(2*_*x-2*E*S,1-2*_*_-2*S*S),b[0]=A/degToRads,b[1]=w/degToRads,b[2]=C/degToRads}else for(u=0;u<y;u+=1)1!==a.h&&(t>=k?p=1:t<T?p=0:(a.o.x.constructor===Array?(o.__fnct||(o.__fnct=[]),o.__fnct[u]?d=o.__fnct[u]:(V=void 0===a.o.x[u]?a.o.x[0]:a.o.x[u],O=void 0===a.o.y[u]?a.o.y[0]:a.o.y[u],L=void 0===a.i.x[u]?a.i.x[0]:a.i.x[u],B=void 0===a.i.y[u]?a.i.y[0]:a.i.y[u],d=BezierFactory.getBezierEasing(V,O,L,B).get,o.__fnct[u]=d)):o.__fnct?d=o.__fnct:(V=a.o.x,O=a.o.y,L=a.i.x,B=a.i.y,d=BezierFactory.getBezierEasing(V,O,L,B).get,a.keyframeMetadata=d),p=d((t-T)/(k-T)))),v=n.s||a.e,$=1===a.h?a.s[u]:a.s[u]+(v[u]-a.s[u])*p,"multidimensional"===this.propType?r[u]=$:r=$}return e.lastIndex=m,r}function i(t){var e=t[0]*degToRads,r=t[1]*degToRads,i=t[2]*degToRads,s=Math.cos(e/2),a=Math.cos(r/2),n=Math.cos(i/2),o=Math.sin(e/2),h=Math.sin(r/2),l=Math.sin(i/2);return[o*h*n+s*a*l,o*a*n+s*h*l,s*h*n-o*a*l,s*a*n-o*h*l]}function s(){var e=this.comp.renderedFrame-this.offsetTime,r=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(e===this._caching.lastFrame||this._caching.lastFrame!==t&&(this._caching.lastFrame>=i&&e>=i||this._caching.lastFrame<r&&e<r))){this._caching.lastFrame>=e&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var s=this.interpolateValue(e,this._caching);this.pv=s}return this._caching.lastFrame=e,this.pv}function a(t){var r;if("unidimensional"===this.propType)r=t*this.mult,e(this.v-r)>1e-5&&(this.v=r,this._mdf=!0);else for(var i=0,s=this.v.length;i<s;)r=t[i]*this.mult,e(this.v[i]-r)>1e-5&&(this.v[i]=r,this._mdf=!0),i+=1}function n(){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{var t;this.lock=!0,this._mdf=this._isFirstFrame;var e=this.effectsSequence.length,r=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)r=this.effectsSequence[t](r);this.setVValue(r),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function o(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function h(t,e,r,i){this.propType="unidimensional",this.mult=r||1,this.data=e,this.v=r?e.k*r:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=n,this.setVValue=a,this.addEffect=o}function l(t,e,r,i){var s;this.propType="multidimensional",this.mult=r||1,this.data=e,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var h=e.k.length;for(this.v=createTypedArray("float32",h),this.pv=createTypedArray("float32",h),this.vel=createTypedArray("float32",h),s=0;s<h;s+=1)this.v[s]=e.k[s]*this.mult,this.pv[s]=e.k[s];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=n,this.setVValue=a,this.addEffect=o}function p(e,i,h,l){this.propType="unidimensional",this.keyframes=i.k,this.keyframesMetadata=[],this.offsetTime=e.data.st,this.frameId=-1,this._caching={lastFrame:t,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=i,this.mult=h||1,this.elem=e,this.container=l,this.comp=e.comp,this.v=t,this.pv=t,this._isFirstFrame=!0,this.getValue=n,this.setVValue=a,this.interpolateValue=r,this.effectsSequence=[s.bind(this)],this.addEffect=o}function c(e,i,h,l){var p;this.propType="multidimensional";var c,f,d,m,u=i.k.length;for(p=0;p<u-1;p+=1)i.k[p].to&&i.k[p].s&&i.k[p+1]&&i.k[p+1].s&&(c=i.k[p].s,f=i.k[p+1].s,d=i.k[p].to,m=i.k[p].ti,(2===c.length&&(c[0]!==f[0]||c[1]!==f[1])&&bez.pointOnLine2D(c[0],c[1],f[0],f[1],c[0]+d[0],c[1]+d[1])&&bez.pointOnLine2D(c[0],c[1],f[0],f[1],f[0]+m[0],f[1]+m[1])||3===c.length&&(c[0]!==f[0]||c[1]!==f[1]||c[2]!==f[2])&&bez.pointOnLine3D(c[0],c[1],c[2],f[0],f[1],f[2],c[0]+d[0],c[1]+d[1],c[2]+d[2])&&bez.pointOnLine3D(c[0],c[1],c[2],f[0],f[1],f[2],f[0]+m[0],f[1]+m[1],f[2]+m[2]))&&(i.k[p].to=null,i.k[p].ti=null),c[0]===f[0]&&c[1]===f[1]&&0===d[0]&&0===d[1]&&0===m[0]&&0===m[1]&&(2===c.length||c[2]===f[2]&&0===d[2]&&0===m[2])&&(i.k[p].to=null,i.k[p].ti=null));this.effectsSequence=[s.bind(this)],this.data=i,this.keyframes=i.k,this.keyframesMetadata=[],this.offsetTime=e.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=h||1,this.elem=e,this.container=l,this.comp=e.comp,this.getValue=n,this.setVValue=a,this.interpolateValue=r,this.frameId=-1;var y=i.k[0].s.length;for(this.v=createTypedArray("float32",y),this.pv=createTypedArray("float32",y),p=0;p<y;p+=1)this.v[p]=t,this.pv[p]=t;this._caching={lastFrame:t,lastIndex:0,value:createTypedArray("float32",y)},this.addEffect=o}var f={getProp:function(t,e,r,i,s){var a;if(e.k.length)if("number"==typeof e.k[0])a=new l(t,e,i,s);else switch(r){case 0:a=new p(t,e,i,s);break;case 1:a=new c(t,e,i,s)}else a=new h(t,e,i,s);return a.effectsSequence.length&&s.addDynamicProperty(a),a}};return f}(),TransformPropertyFactory=function(){var t=[0,0];function e(t,e,r){if(this.elem=t,this.frameId=-1,this.propType="transform",this.data=e,this.v=new Matrix,this.pre=new Matrix,this.appliedTransformations=0,this.initDynamicPropertyContainer(r||t),e.p&&e.p.s?(this.px=PropertyFactory.getProp(t,e.p.x,0,0,this),this.py=PropertyFactory.getProp(t,e.p.y,0,0,this),e.p.z&&(this.pz=PropertyFactory.getProp(t,e.p.z,0,0,this))):this.p=PropertyFactory.getProp(t,e.p||{k:[0,0,0]},1,0,this),e.rx){if(this.rx=PropertyFactory.getProp(t,e.rx,0,degToRads,this),this.ry=PropertyFactory.getProp(t,e.ry,0,degToRads,this),this.rz=PropertyFactory.getProp(t,e.rz,0,degToRads,this),e.or.k[0].ti){var i,s=e.or.k.length;for(i=0;i<s;i+=1)e.or.k[i].to=null,e.or.k[i].ti=null}this.or=PropertyFactory.getProp(t,e.or,1,degToRads,this),this.or.sh=!0}else this.r=PropertyFactory.getProp(t,e.r||{k:0},0,degToRads,this);e.sk&&(this.sk=PropertyFactory.getProp(t,e.sk,0,degToRads,this),this.sa=PropertyFactory.getProp(t,e.sa,0,degToRads,this)),this.a=PropertyFactory.getProp(t,e.a||{k:[0,0,0]},1,0,this),this.s=PropertyFactory.getProp(t,e.s||{k:[100,100,100]},1,.01,this),e.o?this.o=PropertyFactory.getProp(t,e.o,0,.01,t):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}return e.prototype={applyToMatrix:function(t){var e=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||e,this.a&&t.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&t.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&t.skewFromAxis(-this.sk.v,this.sa.v),this.r?t.rotate(-this.r.v):t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?t.translate(this.px.v,this.py.v,-this.pz.v):t.translate(this.px.v,this.py.v,0):t.translate(this.p.v[0],this.p.v[1],-this.p.v[2])},getValue:function(e){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||e){var r;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var i,s;if(r=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(i=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/r,0),s=this.p.getValueAtTime(this.p.keyframes[0].t/r,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(i=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/r,0),s=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/r,0)):(i=this.p.pv,s=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/r,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){i=[],s=[];var a=this.px,n=this.py;a._caching.lastFrame+a.offsetTime<=a.keyframes[0].t?(i[0]=a.getValueAtTime((a.keyframes[0].t+.01)/r,0),i[1]=n.getValueAtTime((n.keyframes[0].t+.01)/r,0),s[0]=a.getValueAtTime(a.keyframes[0].t/r,0),s[1]=n.getValueAtTime(n.keyframes[0].t/r,0)):a._caching.lastFrame+a.offsetTime>=a.keyframes[a.keyframes.length-1].t?(i[0]=a.getValueAtTime(a.keyframes[a.keyframes.length-1].t/r,0),i[1]=n.getValueAtTime(n.keyframes[n.keyframes.length-1].t/r,0),s[0]=a.getValueAtTime((a.keyframes[a.keyframes.length-1].t-.01)/r,0),s[1]=n.getValueAtTime((n.keyframes[n.keyframes.length-1].t-.01)/r,0)):(i=[a.pv,n.pv],s[0]=a.getValueAtTime((a._caching.lastFrame+a.offsetTime-.01)/r,a.offsetTime),s[1]=n.getValueAtTime((n._caching.lastFrame+n.offsetTime-.01)/r,n.offsetTime))}else i=s=t;this.v.rotate(-Math.atan2(i[1]-s[1],i[0]-s[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}},precalculateMatrix:function(){if(!this.a.k&&(this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1,!this.s.effectsSequence.length)){if(this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2,this.sk){if(this.sk.effectsSequence.length||this.sa.effectsSequence.length)return;this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3}this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):this.rz.effectsSequence.length||this.ry.effectsSequence.length||this.rx.effectsSequence.length||this.or.effectsSequence.length||(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}},autoOrient:function(){}},extendPrototype([DynamicPropertyContainer],e),e.prototype.addDynamicProperty=function(t){this._addDynamicProperty(t),this.elem.addDynamicProperty(t),this._isDirty=!0},e.prototype._addDynamicProperty=DynamicPropertyContainer.prototype.addDynamicProperty,{getTransformProperty:function(t,r,i){return new e(t,r,i)}}}();function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=createSizedArray(this._maxLength),this.o=createSizedArray(this._maxLength),this.i=createSizedArray(this._maxLength)}ShapePath.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var r=0;r<e;)this.v[r]=pointPool.newElement(),this.o[r]=pointPool.newElement(),this.i[r]=pointPool.newElement(),r+=1},ShapePath.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(createSizedArray(this._maxLength)),this.i=this.i.concat(createSizedArray(this._maxLength)),this.o=this.o.concat(createSizedArray(this._maxLength)),this._maxLength*=2},ShapePath.prototype.setXYAt=function(t,e,r,i,s){var a;switch(this._length=Math.max(this._length,i+1),this._length>=this._maxLength&&this.doubleArrayLength(),r){case"v":a=this.v;break;case"i":a=this.i;break;case"o":a=this.o;break;default:a=[]}(!a[i]||a[i]&&!s)&&(a[i]=pointPool.newElement()),a[i][0]=t,a[i][1]=e},ShapePath.prototype.setTripleAt=function(t,e,r,i,s,a,n,o){this.setXYAt(t,e,"v",n,o),this.setXYAt(r,i,"o",n,o),this.setXYAt(s,a,"i",n,o)},ShapePath.prototype.reverse=function(){var t=new ShapePath;t.setPathData(this.c,this._length);var e=this.v,r=this.o,i=this.i,s=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],i[0][0],i[0][1],r[0][0],r[0][1],0,!1),s=1);var a,n=this._length-1,o=this._length;for(a=s;a<o;a+=1)t.setTripleAt(e[n][0],e[n][1],i[n][0],i[n][1],r[n][0],r[n][1],a,!1),n-=1;return t};var ShapePropertyFactory=function(){var t=-999999;function e(t,e,r){var i,s,a,n,o,h,l,p,c,f=r.lastIndex,d=this.keyframes;if(t<d[0].t-this.offsetTime)i=d[0].s[0],a=!0,f=0;else if(t>=d[d.length-1].t-this.offsetTime)i=d[d.length-1].s?d[d.length-1].s[0]:d[d.length-2].e[0],a=!0;else{for(var m,u,y,g=f,v=d.length-1,b=!0;b&&(m=d[g],!((u=d[g+1]).t-this.offsetTime>t));)g<v-1?g+=1:b=!1;if(y=this.keyframesMetadata[g]||{},f=g,!(a=1===m.h)){if(t>=u.t-this.offsetTime)p=1;else if(t<m.t-this.offsetTime)p=0;else{var P;y.__fnct?P=y.__fnct:(P=BezierFactory.getBezierEasing(m.o.x,m.o.y,m.i.x,m.i.y).get,y.__fnct=P),p=P((t-(m.t-this.offsetTime))/(u.t-this.offsetTime-(m.t-this.offsetTime)))}s=u.s?u.s[0]:m.e[0]}i=m.s[0]}for(h=e._length,l=i.i[0].length,r.lastIndex=f,n=0;n<h;n+=1)for(o=0;o<l;o+=1)c=a?i.i[n][o]:i.i[n][o]+(s.i[n][o]-i.i[n][o])*p,e.i[n][o]=c,c=a?i.o[n][o]:i.o[n][o]+(s.o[n][o]-i.o[n][o])*p,e.o[n][o]=c,c=a?i.v[n][o]:i.v[n][o]+(s.v[n][o]-i.v[n][o])*p,e.v[n][o]=c}function r(){var e=this.comp.renderedFrame-this.offsetTime,r=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime,s=this._caching.lastFrame;return s!==t&&(s<r&&e<r||s>i&&e>i)||(this._caching.lastIndex=s<e?this._caching.lastIndex:0,this.interpolateShape(e,this.pv,this._caching)),this._caching.lastFrame=e,this.pv}function i(){this.paths=this.localShapeCollection}function s(t){(function(t,e){if(t._length!==e._length||t.c!==e.c)return!1;var r,i=t._length;for(r=0;r<i;r+=1)if(t.v[r][0]!==e.v[r][0]||t.v[r][1]!==e.v[r][1]||t.o[r][0]!==e.o[r][0]||t.o[r][1]!==e.o[r][1]||t.i[r][0]!==e.i[r][0]||t.i[r][1]!==e.i[r][1])return!1;return!0})(this.v,t)||(this.v=shapePool.clone(t),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function a(){if(this.elem.globalData.frameId!==this.frameId)if(this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{var t,e;this.lock=!0,this._mdf=!1,t=this.kf?this.pv:this.data.ks?this.data.ks.k:this.data.pt.k;var r=this.effectsSequence.length;for(e=0;e<r;e+=1)t=this.effectsSequence[e](t);this.setVValue(t),this.lock=!1,this.frameId=this.elem.globalData.frameId}else this._mdf=!1}function n(t,e,r){this.propType="shape",this.comp=t.comp,this.container=t,this.elem=t,this.data=e,this.k=!1,this.kf=!1,this._mdf=!1;var s=3===r?e.pt.k:e.ks.k;this.v=shapePool.clone(s),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=i,this.effectsSequence=[]}function o(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function h(e,s,a){this.propType="shape",this.comp=e.comp,this.elem=e,this.container=e,this.offsetTime=e.data.st,this.keyframes=3===a?s.pt.k:s.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var n=this.keyframes[0].s[0].i.length;this.v=shapePool.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,n),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=i,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[r.bind(this)]}n.prototype.interpolateShape=e,n.prototype.getValue=a,n.prototype.setVValue=s,n.prototype.addEffect=o,h.prototype.getValue=a,h.prototype.interpolateShape=e,h.prototype.setVValue=s,h.prototype.addEffect=o;var l=function(){var t=roundCorner;function e(t,e){this.v=shapePool.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=e.d,this.elem=t,this.comp=t.comp,this.frameId=-1,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return e.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var e=this.p.v[0],r=this.p.v[1],i=this.s.v[0]/2,s=this.s.v[1]/2,a=3!==this.d,n=this.v;n.v[0][0]=e,n.v[0][1]=r-s,n.v[1][0]=a?e+i:e-i,n.v[1][1]=r,n.v[2][0]=e,n.v[2][1]=r+s,n.v[3][0]=a?e-i:e+i,n.v[3][1]=r,n.i[0][0]=a?e-i*t:e+i*t,n.i[0][1]=r-s,n.i[1][0]=a?e+i:e-i,n.i[1][1]=r-s*t,n.i[2][0]=a?e+i*t:e-i*t,n.i[2][1]=r+s,n.i[3][0]=a?e-i:e+i,n.i[3][1]=r+s*t,n.o[0][0]=a?e+i*t:e-i*t,n.o[0][1]=r-s,n.o[1][0]=a?e+i:e-i,n.o[1][1]=r+s*t,n.o[2][0]=a?e-i*t:e+i*t,n.o[2][1]=r+s,n.o[3][0]=a?e-i:e+i,n.o[3][1]=r-s*t}},extendPrototype([DynamicPropertyContainer],e),e}(),p=function(){function t(t,e){this.v=shapePool.newElement(),this.v.setPathData(!0,0),this.elem=t,this.comp=t.comp,this.data=e,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),1===e.sy?(this.ir=PropertyFactory.getProp(t,e.ir,0,0,this),this.is=PropertyFactory.getProp(t,e.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=PropertyFactory.getProp(t,e.pt,0,0,this),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,degToRads,this),this.or=PropertyFactory.getProp(t,e.or,0,0,this),this.os=PropertyFactory.getProp(t,e.os,0,.01,this),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return t.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var t,e,r,i,s=2*Math.floor(this.pt.v),a=2*Math.PI/s,n=!0,o=this.or.v,h=this.ir.v,l=this.os.v,p=this.is.v,c=2*Math.PI*o/(2*s),f=2*Math.PI*h/(2*s),d=-Math.PI/2;d+=this.r.v;var m=3===this.data.d?-1:1;for(this.v._length=0,t=0;t<s;t+=1){r=n?l:p,i=n?c:f;var u=(e=n?o:h)*Math.cos(d),y=e*Math.sin(d),g=0===u&&0===y?0:y/Math.sqrt(u*u+y*y),v=0===u&&0===y?0:-u/Math.sqrt(u*u+y*y);u+=+this.p.v[0],y+=+this.p.v[1],this.v.setTripleAt(u,y,u-g*i*r*m,y-v*i*r*m,u+g*i*r*m,y+v*i*r*m,t,!0),n=!n,d+=a*m}},convertPolygonToPath:function(){var t,e=Math.floor(this.pt.v),r=2*Math.PI/e,i=this.or.v,s=this.os.v,a=2*Math.PI*i/(4*e),n=.5*-Math.PI,o=3===this.data.d?-1:1;for(n+=this.r.v,this.v._length=0,t=0;t<e;t+=1){var h=i*Math.cos(n),l=i*Math.sin(n),p=0===h&&0===l?0:l/Math.sqrt(h*h+l*l),c=0===h&&0===l?0:-h/Math.sqrt(h*h+l*l);h+=+this.p.v[0],l+=+this.p.v[1],this.v.setTripleAt(h,l,h-p*a*s*o,l-c*a*s*o,h+p*a*s*o,l+c*a*s*o,t,!0),n+=r*o}this.paths.length=0,this.paths[0]=this.v}},extendPrototype([DynamicPropertyContainer],t),t}(),c=function(){function t(t,e){this.v=shapePool.newElement(),this.v.c=!0,this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=t,this.comp=t.comp,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return t.prototype={convertRectToPath:function(){var t=this.p.v[0],e=this.p.v[1],r=this.s.v[0]/2,i=this.s.v[1]/2,s=bmMin(r,i,this.r.v),a=s*(1-roundCorner);this.v._length=0,2===this.d||1===this.d?(this.v.setTripleAt(t+r,e-i+s,t+r,e-i+s,t+r,e-i+a,0,!0),this.v.setTripleAt(t+r,e+i-s,t+r,e+i-a,t+r,e+i-s,1,!0),0!==s?(this.v.setTripleAt(t+r-s,e+i,t+r-s,e+i,t+r-a,e+i,2,!0),this.v.setTripleAt(t-r+s,e+i,t-r+a,e+i,t-r+s,e+i,3,!0),this.v.setTripleAt(t-r,e+i-s,t-r,e+i-s,t-r,e+i-a,4,!0),this.v.setTripleAt(t-r,e-i+s,t-r,e-i+a,t-r,e-i+s,5,!0),this.v.setTripleAt(t-r+s,e-i,t-r+s,e-i,t-r+a,e-i,6,!0),this.v.setTripleAt(t+r-s,e-i,t+r-a,e-i,t+r-s,e-i,7,!0)):(this.v.setTripleAt(t-r,e+i,t-r+a,e+i,t-r,e+i,2),this.v.setTripleAt(t-r,e-i,t-r,e-i+a,t-r,e-i,3))):(this.v.setTripleAt(t+r,e-i+s,t+r,e-i+a,t+r,e-i+s,0,!0),0!==s?(this.v.setTripleAt(t+r-s,e-i,t+r-s,e-i,t+r-a,e-i,1,!0),this.v.setTripleAt(t-r+s,e-i,t-r+a,e-i,t-r+s,e-i,2,!0),this.v.setTripleAt(t-r,e-i+s,t-r,e-i+s,t-r,e-i+a,3,!0),this.v.setTripleAt(t-r,e+i-s,t-r,e+i-a,t-r,e+i-s,4,!0),this.v.setTripleAt(t-r+s,e+i,t-r+s,e+i,t-r+a,e+i,5,!0),this.v.setTripleAt(t+r-s,e+i,t+r-a,e+i,t+r-s,e+i,6,!0),this.v.setTripleAt(t+r,e+i-s,t+r,e+i-s,t+r,e+i-a,7,!0)):(this.v.setTripleAt(t-r,e-i,t-r+a,e-i,t-r,e-i,1,!0),this.v.setTripleAt(t-r,e+i,t-r,e+i-a,t-r,e+i,2,!0),this.v.setTripleAt(t+r,e+i,t+r-a,e+i,t+r,e+i,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:i},extendPrototype([DynamicPropertyContainer],t),t}(),f={getShapeProp:function(t,e,r){var i;return 3===r||4===r?i=(3===r?e.pt:e.ks).k.length?new h(t,e,r):new n(t,e,r):5===r?i=new c(t,e):6===r?i=new l(t,e):7===r&&(i=new p(t,e)),i.k&&t.addDynamicProperty(i),i},getConstructorFunction:function(){return n},getKeyframedConstructorFunction:function(){return h}};return f}(),ShapeModifiers=(ob={},modifiers={},ob.registerModifier=function(t,e){modifiers[t]||(modifiers[t]=e)},ob.getModifier=function(t,e,r){return new modifiers[t](e,r)},ob),ob,modifiers;function ShapeModifier(){}function TrimModifier(){}function RoundCornersModifier(){}function PuckerAndBloatModifier(){}function RepeaterModifier(){}function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=createSizedArray(this._maxLength)}function DashProperty(t,e,r,i){var s;this.elem=t,this.frameId=-1,this.dataProps=createSizedArray(e.length),this.renderer=r,this.k=!1,this.dashStr="",this.dashArray=createTypedArray("float32",e.length?e.length-1:0),this.dashoffset=createTypedArray("float32",1),this.initDynamicPropertyContainer(i);var a,n=e.length||0;for(s=0;s<n;s+=1)a=PropertyFactory.getProp(t,e[s].v,0,0,this),this.k=a.k||this.k,this.dataProps[s]={n:e[s].n,p:a};this.k||this.getValue(!0),this._isAnimated=this.k}function GradientProperty(t,e,r){this.data=e,this.c=createTypedArray("uint8c",4*e.p);var i=e.k.k[0].s?e.k.k[0].s.length-4*e.p:e.k.k.length-4*e.p;this.o=createTypedArray("float32",i),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=i,this.initDynamicPropertyContainer(r),this.prop=PropertyFactory.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:shapeCollectionPool.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},ShapeModifier.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=initialDefaultFrame,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ShapeModifier.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},extendPrototype([DynamicPropertyContainer],ShapeModifier),extendPrototype([ShapeModifier],TrimModifier),TrimModifier.prototype.initModifierProperties=function(t,e){this.s=PropertyFactory.getProp(t,e.s,0,.01,this),this.e=PropertyFactory.getProp(t,e.e,0,.01,this),this.o=PropertyFactory.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},TrimModifier.prototype.addShapeToModifier=function(t){t.pathsData=[]},TrimModifier.prototype.calculateShapeEdges=function(t,e,r,i,s){var a=[];e<=1?a.push({s:t,e:e}):t>=1?a.push({s:t-1,e:e-1}):(a.push({s:t,e:1}),a.push({s:0,e:e-1}));var n,o,h=[],l=a.length;for(n=0;n<l;n+=1){var p,c;(o=a[n]).e*s<i||o.s*s>i+r||(p=o.s*s<=i?0:(o.s*s-i)/r,c=o.e*s>=i+r?1:(o.e*s-i)/r,h.push([p,c]))}return h.length||h.push([0,0]),h},TrimModifier.prototype.releasePathsData=function(t){var e,r=t.length;for(e=0;e<r;e+=1)segmentsLengthPool.release(t[e]);return t.length=0,t},TrimModifier.prototype.processShapes=function(t){var e,r,i,s;if(this._mdf||t){var a=this.o.v%360/360;if(a<0&&(a+=1),(e=this.s.v>1?1+a:this.s.v<0?0+a:this.s.v+a)>(r=this.e.v>1?1+a:this.e.v<0?0+a:this.e.v+a)){var n=e;e=r,r=n}e=1e-4*Math.round(1e4*e),r=1e-4*Math.round(1e4*r),this.sValue=e,this.eValue=r}else e=this.sValue,r=this.eValue;var o,h,l,p,c,f=this.shapes.length,d=0;if(r===e)for(s=0;s<f;s+=1)this.shapes[s].localShapeCollection.releaseShapes(),this.shapes[s].shape._mdf=!0,this.shapes[s].shape.paths=this.shapes[s].localShapeCollection,this._mdf&&(this.shapes[s].pathsData.length=0);else if(1===r&&0===e||0===r&&1===e){if(this._mdf)for(s=0;s<f;s+=1)this.shapes[s].pathsData.length=0,this.shapes[s].shape._mdf=!0}else{var m,u,y=[];for(s=0;s<f;s+=1)if((m=this.shapes[s]).shape._mdf||this._mdf||t||2===this.m){if(h=(i=m.shape.paths)._length,c=0,!m.shape._mdf&&m.pathsData.length)c=m.totalShapeLength;else{for(l=this.releasePathsData(m.pathsData),o=0;o<h;o+=1)p=bez.getSegmentsLength(i.shapes[o]),l.push(p),c+=p.totalLength;m.totalShapeLength=c,m.pathsData=l}d+=c,m.shape._mdf=!0}else m.shape.paths=m.localShapeCollection;var g,v=e,b=r,P=0;for(s=f-1;s>=0;s-=1)if((m=this.shapes[s]).shape._mdf){for((u=m.localShapeCollection).releaseShapes(),2===this.m&&f>1?(g=this.calculateShapeEdges(e,r,m.totalShapeLength,P,d),P+=m.totalShapeLength):g=[[v,b]],h=g.length,o=0;o<h;o+=1){v=g[o][0],b=g[o][1],y.length=0,b<=1?y.push({s:m.totalShapeLength*v,e:m.totalShapeLength*b}):v>=1?y.push({s:m.totalShapeLength*(v-1),e:m.totalShapeLength*(b-1)}):(y.push({s:m.totalShapeLength*v,e:m.totalShapeLength}),y.push({s:0,e:m.totalShapeLength*(b-1)}));var _=this.addShapes(m,y[0]);if(y[0].s!==y[0].e){if(y.length>1)if(m.shape.paths.shapes[m.shape.paths._length-1].c){var E=_.pop();this.addPaths(_,u),_=this.addShapes(m,y[1],E)}else this.addPaths(_,u),_=this.addShapes(m,y[1]);this.addPaths(_,u)}}m.shape.paths=u}}},TrimModifier.prototype.addPaths=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e.addShape(t[r])},TrimModifier.prototype.addSegment=function(t,e,r,i,s,a,n){s.setXYAt(e[0],e[1],"o",a),s.setXYAt(r[0],r[1],"i",a+1),n&&s.setXYAt(t[0],t[1],"v",a),s.setXYAt(i[0],i[1],"v",a+1)},TrimModifier.prototype.addSegmentFromArray=function(t,e,r,i){e.setXYAt(t[1],t[5],"o",r),e.setXYAt(t[2],t[6],"i",r+1),i&&e.setXYAt(t[0],t[4],"v",r),e.setXYAt(t[3],t[7],"v",r+1)},TrimModifier.prototype.addShapes=function(t,e,r){var i,s,a,n,o,h,l,p,c=t.pathsData,f=t.shape.paths.shapes,d=t.shape.paths._length,m=0,u=[],y=!0;for(r?(o=r._length,p=r._length):(r=shapePool.newElement(),o=0,p=0),u.push(r),i=0;i<d;i+=1){for(h=c[i].lengths,r.c=f[i].c,a=f[i].c?h.length:h.length+1,s=1;s<a;s+=1)if(m+(n=h[s-1]).addedLength<e.s)m+=n.addedLength,r.c=!1;else{if(m>e.e){r.c=!1;break}e.s<=m&&e.e>=m+n.addedLength?(this.addSegment(f[i].v[s-1],f[i].o[s-1],f[i].i[s],f[i].v[s],r,o,y),y=!1):(l=bez.getNewSegment(f[i].v[s-1],f[i].v[s],f[i].o[s-1],f[i].i[s],(e.s-m)/n.addedLength,(e.e-m)/n.addedLength,h[s-1]),this.addSegmentFromArray(l,r,o,y),y=!1,r.c=!1),m+=n.addedLength,o+=1}if(f[i].c&&h.length){if(n=h[s-1],m<=e.e){var g=h[s-1].addedLength;e.s<=m&&e.e>=m+g?(this.addSegment(f[i].v[s-1],f[i].o[s-1],f[i].i[0],f[i].v[0],r,o,y),y=!1):(l=bez.getNewSegment(f[i].v[s-1],f[i].v[0],f[i].o[s-1],f[i].i[0],(e.s-m)/g,(e.e-m)/g,h[s-1]),this.addSegmentFromArray(l,r,o,y),y=!1,r.c=!1)}else r.c=!1;m+=n.addedLength,o+=1}if(r._length&&(r.setXYAt(r.v[p][0],r.v[p][1],"i",p),r.setXYAt(r.v[r._length-1][0],r.v[r._length-1][1],"o",r._length-1)),m>e.e)break;i<d-1&&(r=shapePool.newElement(),y=!0,u.push(r),o=0)}return u},ShapeModifiers.registerModifier("tm",TrimModifier),extendPrototype([ShapeModifier],RoundCornersModifier),RoundCornersModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},RoundCornersModifier.prototype.processPath=function(t,e){var r,i=shapePool.newElement();i.c=t.c;var s,a,n,o,h,l,p,c,f,d,m,u,y=t._length,g=0;for(r=0;r<y;r+=1)s=t.v[r],n=t.o[r],a=t.i[r],s[0]===n[0]&&s[1]===n[1]&&s[0]===a[0]&&s[1]===a[1]?0!==r&&r!==y-1||t.c?(o=0===r?t.v[y-1]:t.v[r-1],l=(h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)))?Math.min(h/2,e)/h:0,p=m=s[0]+(o[0]-s[0])*l,c=u=s[1]-(s[1]-o[1])*l,f=p-(p-s[0])*roundCorner,d=c-(c-s[1])*roundCorner,i.setTripleAt(p,c,f,d,m,u,g),g+=1,o=r===y-1?t.v[0]:t.v[r+1],l=(h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)))?Math.min(h/2,e)/h:0,p=f=s[0]+(o[0]-s[0])*l,c=d=s[1]+(o[1]-s[1])*l,m=p-(p-s[0])*roundCorner,u=c-(c-s[1])*roundCorner,i.setTripleAt(p,c,f,d,m,u,g),g+=1):(i.setTripleAt(s[0],s[1],n[0],n[1],a[0],a[1],g),g+=1):(i.setTripleAt(t.v[r][0],t.v[r][1],t.o[r][0],t.o[r][1],t.i[r][0],t.i[r][1],g),g+=1);return i},RoundCornersModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.rd.v;if(0!==h)for(r=0;r<o;r+=1){if(n=(a=this.shapes[r]).localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},ShapeModifiers.registerModifier("rd",RoundCornersModifier),extendPrototype([ShapeModifier],PuckerAndBloatModifier),PuckerAndBloatModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=PropertyFactory.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},PuckerAndBloatModifier.prototype.processPath=function(t,e){var r=e/100,i=[0,0],s=t._length,a=0;for(a=0;a<s;a+=1)i[0]+=t.v[a][0],i[1]+=t.v[a][1];i[0]/=s,i[1]/=s;var n,o,h,l,p,c,f=shapePool.newElement();for(f.c=t.c,a=0;a<s;a+=1)n=t.v[a][0]+(i[0]-t.v[a][0])*r,o=t.v[a][1]+(i[1]-t.v[a][1])*r,h=t.o[a][0]+(i[0]-t.o[a][0])*-r,l=t.o[a][1]+(i[1]-t.o[a][1])*-r,p=t.i[a][0]+(i[0]-t.i[a][0])*-r,c=t.i[a][1]+(i[1]-t.i[a][1])*-r,f.setTripleAt(n,o,h,l,p,c,a);return f},PuckerAndBloatModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.amount.v;if(0!==h)for(r=0;r<o;r+=1){if(n=(a=this.shapes[r]).localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},ShapeModifiers.registerModifier("pb",PuckerAndBloatModifier),extendPrototype([ShapeModifier],RepeaterModifier),RepeaterModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=PropertyFactory.getProp(t,e.c,0,null,this),this.o=PropertyFactory.getProp(t,e.o,0,null,this),this.tr=TransformPropertyFactory.getTransformProperty(t,e.tr,this),this.so=PropertyFactory.getProp(t,e.tr.so,0,.01,this),this.eo=PropertyFactory.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Matrix,this.rMatrix=new Matrix,this.sMatrix=new Matrix,this.tMatrix=new Matrix,this.matrix=new Matrix},RepeaterModifier.prototype.applyTransforms=function(t,e,r,i,s,a){var n=a?-1:1,o=i.s.v[0]+(1-i.s.v[0])*(1-s),h=i.s.v[1]+(1-i.s.v[1])*(1-s);t.translate(i.p.v[0]*n*s,i.p.v[1]*n*s,i.p.v[2]),e.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),e.rotate(-i.r.v*n*s),e.translate(i.a.v[0],i.a.v[1],i.a.v[2]),r.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),r.scale(a?1/o:o,a?1/h:h),r.translate(i.a.v[0],i.a.v[1],i.a.v[2])},RepeaterModifier.prototype.init=function(t,e,r,i){for(this.elem=t,this.arr=e,this.pos=r,this.elemsData=i,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[r]);r>0;)r-=1,this._elements.unshift(e[r]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},RepeaterModifier.prototype.resetElements=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e]._processed=!1,"gr"===t[e].ty&&this.resetElements(t[e].it)},RepeaterModifier.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},RepeaterModifier.prototype.changeGroupRender=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]._render=e,"gr"===t[r].ty&&this.changeGroupRender(t[r].it,e)},RepeaterModifier.prototype.processShapes=function(t){var e,r,i,s,a,n=!1;if(this._mdf||t){var o,h=Math.ceil(this.c.v);if(this._groups.length<h){for(;this._groups.length<h;){var l={it:this.cloneElements(this._elements),ty:"gr"};l.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,l),this._groups.splice(0,0,l),this._currentCopies+=1}this.elem.reloadShapes(),n=!0}for(a=0,i=0;i<=this._groups.length-1;i+=1){if(o=a<h,this._groups[i]._render=o,this.changeGroupRender(this._groups[i].it,o),!o){var p=this.elemsData[i].it,c=p[p.length-1];0!==c.transform.op.v?(c.transform.op._mdf=!0,c.transform.op.v=0):c.transform.op._mdf=!1}a+=1}this._currentCopies=h;var f=this.o.v,d=f%1,m=f>0?Math.floor(f):Math.ceil(f),u=this.pMatrix.props,y=this.rMatrix.props,g=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var v,b,P=0;if(f>0){for(;P<m;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),P+=1;d&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,d,!1),P+=d)}else if(f<0){for(;P>m;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),P-=1;d&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-d,!0),P-=d)}for(i=1===this.data.m?0:this._currentCopies-1,s=1===this.data.m?1:-1,a=this._currentCopies;a;){if(b=(r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props).length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=1===this._currentCopies?this.so.v:this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1)),0!==P){for((0!==i&&1===s||i!==this._currentCopies-1&&-1===s)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9],y[10],y[11],y[12],y[13],y[14],y[15]),this.matrix.transform(g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],g[8],g[9],g[10],g[11],g[12],g[13],g[14],g[15]),this.matrix.transform(u[0],u[1],u[2],u[3],u[4],u[5],u[6],u[7],u[8],u[9],u[10],u[11],u[12],u[13],u[14],u[15]),v=0;v<b;v+=1)r[v]=this.matrix.props[v];this.matrix.reset()}else for(this.matrix.reset(),v=0;v<b;v+=1)r[v]=this.matrix.props[v];P+=1,a-=1,i+=s}}else for(a=this._currentCopies,i=0,s=1;a;)r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,a-=1,i+=s;return n},RepeaterModifier.prototype.addShape=function(){},ShapeModifiers.registerModifier("rp",RepeaterModifier),ShapeCollection.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(createSizedArray(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},ShapeCollection.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)shapePool.release(this.shapes[t]);this._length=0},DashProperty.prototype.getValue=function(t){if((this.elem.globalData.frameId!==this.frameId||t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,r=this.dataProps.length;for("svg"===this.renderer&&(this.dashStr=""),e=0;e<r;e+=1)"o"!==this.dataProps[e].n?"svg"===this.renderer?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},extendPrototype([DynamicPropertyContainer],DashProperty),GradientProperty.prototype.comparePoints=function(t,e){for(var r=0,i=this.o.length/2;r<i;){if(Math.abs(t[4*r]-t[4*e+2*r])>.01)return!1;r+=1}return!0},GradientProperty.prototype.checkCollapsable=function(){if(this.o.length/2!=this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},GradientProperty.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,r,i,s=4*this.data.p;for(e=0;e<s;e+=1)r=e%4==0?100:255,i=Math.round(this.prop.v[e]*r),this.c[e]!==i&&(this.c[e]=i,this._cmdf=!t);if(this.o.length)for(s=this.prop.v.length,e=4*this.data.p;e<s;e+=1)r=e%2==0?100:1,i=e%2==0?Math.round(100*this.prop.v[e]):this.prop.v[e],this.o[e-4*this.data.p]!==i&&(this.o[e-4*this.data.p]=i,this._omdf=!t);this._mdf=!t}},extendPrototype([DynamicPropertyContainer],GradientProperty);var buildShapeString=function(t,e,r,i){if(0===e)return"";var s,a=t.o,n=t.i,o=t.v,h=" M"+i.applyToPointStringified(o[0][0],o[0][1]);for(s=1;s<e;s+=1)h+=" C"+i.applyToPointStringified(a[s-1][0],a[s-1][1])+" "+i.applyToPointStringified(n[s][0],n[s][1])+" "+i.applyToPointStringified(o[s][0],o[s][1]);return r&&e&&(h+=" C"+i.applyToPointStringified(a[s-1][0],a[s-1][1])+" "+i.applyToPointStringified(n[0][0],n[0][1])+" "+i.applyToPointStringified(o[0][0],o[0][1]),h+="z"),h},audioControllerFactory=function(){function t(t){this.audios=[],this.audioFactory=t,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(t){this.audios.push(t)},pause:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].pause()},resume:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].resume()},setRate:function(t){var e,r=this.audios.length;for(e=0;e<r;e+=1)this.audios[e].setRate(t)},createAudio:function(t){return this.audioFactory?this.audioFactory(t):Howl?new Howl({src:[t]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(t){this.audioFactory=t},setVolume:function(t){this._volume=t,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}}(),ImagePreloader=function(){var t=function(){var t=createTag("canvas");t.width=1,t.height=1;var e=t.getContext("2d");return e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,1,1),t}();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function r(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(t,e,r){var i="";if(t.e)i=t.p;else if(e){var s=t.p;-1!==s.indexOf("images/")&&(s=s.split("/")[1]),i=e+s}else i=r,i+=t.u?t.u:"",i+=t.p;return i}function s(t){var e=0,r=setInterval(function(){(t.getBBox().width||e>500)&&(this._imageLoaded(),clearInterval(r)),e+=1}.bind(this),50)}function a(t){var e={assetData:t},r=i(t,this.assetsPath,this.path);return dataManager.loadData(r,function(t){e.img=t,this._footageLoaded()}.bind(this),function(){e.img={},this._footageLoaded()}.bind(this)),e}function n(){this._imageLoaded=e.bind(this),this._footageLoaded=r.bind(this),this.testImageLoaded=s.bind(this),this.createFootageData=a.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return n.prototype={loadAssets:function(t,e){var r;this.imagesLoadedCb=e;var i=t.length;for(r=0;r<i;r+=1)t[r].layers||(t[r].t&&"seq"!==t[r].t?3===t[r].t&&(this.totalFootages+=1,this.images.push(this.createFootageData(t[r]))):(this.totalImages+=1,this.images.push(this._createImageData(t[r]))))},setAssetsPath:function(t){this.assetsPath=t||""},setPath:function(t){this.path=t||""},loadedImages:function(){return this.totalImages===this.loadedAssets},loadedFootages:function(){return this.totalFootages===this.loadedFootagesCount},destroy:function(){this.imagesLoadedCb=null,this.images.length=0},getAsset:function(t){for(var e=0,r=this.images.length;e<r;){if(this.images[e].assetData===t)return this.images[e].img;e+=1}return null},createImgData:function(e){var r=i(e,this.assetsPath,this.path),s=createTag("img");s.crossOrigin="anonymous",s.addEventListener("load",this._imageLoaded,!1),s.addEventListener("error",function(){a.img=t,this._imageLoaded()}.bind(this),!1),s.src=r;var a={img:s,assetData:e};return a},createImageData:function(e){var r=i(e,this.assetsPath,this.path),s=createNS("image");isSafari?this.testImageLoaded(s):s.addEventListener("load",this._imageLoaded,!1),s.addEventListener("error",function(){a.img=t,this._imageLoaded()}.bind(this),!1),s.setAttributeNS("http://www.w3.org/1999/xlink","href",r),this._elementHelper.append?this._elementHelper.append(s):this._elementHelper.appendChild(s);var a={img:s,assetData:e};return a},imageLoaded:e,footageLoaded:r,setCacheType:function(t,e){"svg"===t?(this._elementHelper=e,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}},n}(),featureSupport=function(){var t={maskType:!0};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),t}(),filtersFactory=function(){var t={createFilter:function(t,e){var r=createNS("filter");return r.setAttribute("id",t),!0!==e&&(r.setAttribute("filterUnits","objectBoundingBox"),r.setAttribute("x","0%"),r.setAttribute("y","0%"),r.setAttribute("width","100%"),r.setAttribute("height","100%")),r},createAlphaToLuminanceFilter:function(){var t=createNS("feColorMatrix");return t.setAttribute("type","matrix"),t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),t}};return t}();function TextAnimatorProperty(t,e,r){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=r,this._animatorsData=createSizedArray(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(r)}function TextAnimatorDataProperty(t,e,r){var i={propType:!1},s=PropertyFactory.getProp,a=e.a;this.a={r:a.r?s(t,a.r,0,degToRads,r):i,rx:a.rx?s(t,a.rx,0,degToRads,r):i,ry:a.ry?s(t,a.ry,0,degToRads,r):i,sk:a.sk?s(t,a.sk,0,degToRads,r):i,sa:a.sa?s(t,a.sa,0,degToRads,r):i,s:a.s?s(t,a.s,1,.01,r):i,a:a.a?s(t,a.a,1,0,r):i,o:a.o?s(t,a.o,0,.01,r):i,p:a.p?s(t,a.p,1,0,r):i,sw:a.sw?s(t,a.sw,0,0,r):i,sc:a.sc?s(t,a.sc,1,0,r):i,fc:a.fc?s(t,a.fc,1,0,r):i,fh:a.fh?s(t,a.fh,0,0,r):i,fs:a.fs?s(t,a.fs,0,.01,r):i,fb:a.fb?s(t,a.fb,0,.01,r):i,t:a.t?s(t,a.t,0,0,r):i},this.s=TextSelectorProp.getTextSelectorProp(t,e.s,r),this.s.t=e.s.t}function LetterProps(t,e,r,i,s,a){this.o=t,this.sw=e,this.sc=r,this.fc=i,this.m=s,this.p=a,this._mdf={o:!0,sw:!!e,sc:!!r,fc:!!i,m:!0,p:!0}}function TextProperty(t,e){this._frameId=initialDefaultFrame,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}TextAnimatorProperty.prototype.searchProperties=function(){var t,e,r=this._textData.a.length,i=PropertyFactory.getProp;for(t=0;t<r;t+=1)e=this._textData.a[t],this._animatorsData[t]=new TextAnimatorDataProperty(this._elem,e,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:i(this._elem,this._textData.p.a,0,0,this),f:i(this._elem,this._textData.p.f,0,0,this),l:i(this._elem,this._textData.p.l,0,0,this),r:i(this._elem,this._textData.p.r,0,0,this),p:i(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=i(this._elem,this._textData.m.a,1,0,this)},TextAnimatorProperty.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,this._mdf||this._isFirstFrame||e||this._hasMaskedPath&&this._pathData.m._mdf){this._isFirstFrame=!1;var r,i,s,a,n,o,h,l,p,c,f,d,m,u,y,g,v,b,P,_=this._moreOptions.alignment.v,E=this._animatorsData,S=this._textData,x=this.mHelper,A=this._renderType,w=this.renderedLetters.length,C=t.l;if(this._hasMaskedPath){if(P=this._pathData.m,!this._pathData.n||this._pathData._mdf){var k,T=P.v;for(this._pathData.r.v&&(T=T.reverse()),n={tLength:0,segments:[]},a=T._length-1,g=0,s=0;s<a;s+=1)k=bez.buildBezierData(T.v[s],T.v[s+1],[T.o[s][0]-T.v[s][0],T.o[s][1]-T.v[s][1]],[T.i[s+1][0]-T.v[s+1][0],T.i[s+1][1]-T.v[s+1][1]]),n.tLength+=k.segmentLength,n.segments.push(k),g+=k.segmentLength;s=a,P.v.c&&(k=bez.buildBezierData(T.v[s],T.v[0],[T.o[s][0]-T.v[s][0],T.o[s][1]-T.v[s][1]],[T.i[0][0]-T.v[0][0],T.i[0][1]-T.v[0][1]]),n.tLength+=k.segmentLength,n.segments.push(k),g+=k.segmentLength),this._pathData.pi=n}if(n=this._pathData.pi,o=this._pathData.f.v,f=0,c=1,l=0,p=!0,u=n.segments,o<0&&P.v.c)for(n.tLength<Math.abs(o)&&(o=-Math.abs(o)%n.tLength),c=(m=u[f=u.length-1].points).length-1;o<0;)o+=m[c].partialLength,(c-=1)<0&&(c=(m=u[f-=1].points).length-1);d=(m=u[f].points)[c-1],y=(h=m[c]).partialLength}a=C.length,r=0,i=0;var D,M,F,I,R,V=1.2*t.finalSize*.714,O=!0;F=E.length;var L,B,$,z,G,N,j,H,q,W,U,Y,X=-1,K=o,J=f,Z=c,Q=-1,tt="",et=this.defaultPropsArray;if(2===t.j||1===t.j){var rt=0,it=0,st=2===t.j?-.5:-1,at=0,nt=!0;for(s=0;s<a;s+=1)if(C[s].n){for(rt&&(rt+=it);at<s;)C[at].animatorJustifyOffset=rt,at+=1;rt=0,nt=!0}else{for(M=0;M<F;M+=1)(D=E[M].a).t.propType&&(nt&&2===t.j&&(it+=D.t.v*st),(R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars)).length?rt+=D.t.v*R[0]*st:rt+=D.t.v*R*st);nt=!1}for(rt&&(rt+=it);at<s;)C[at].animatorJustifyOffset=rt,at+=1}for(s=0;s<a;s+=1){if(x.reset(),z=1,C[s].n)r=0,i+=t.yOffset,i+=O?1:0,o=K,O=!1,this._hasMaskedPath&&(c=Z,d=(m=u[f=J].points)[c-1],y=(h=m[c]).partialLength,l=0),tt="",U="",q="",Y="",et=this.defaultPropsArray;else{if(this._hasMaskedPath){if(Q!==C[s].line){switch(t.j){case 1:o+=g-t.lineWidths[C[s].line];break;case 2:o+=(g-t.lineWidths[C[s].line])/2}Q=C[s].line}X!==C[s].ind&&(C[X]&&(o+=C[X].extra),o+=C[s].an/2,X=C[s].ind),o+=_[0]*C[s].an*.005;var ot=0;for(M=0;M<F;M+=1)(D=E[M].a).p.propType&&((R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars)).length?ot+=D.p.v[0]*R[0]:ot+=D.p.v[0]*R),D.a.propType&&((R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars)).length?ot+=D.a.v[0]*R[0]:ot+=D.a.v[0]*R);for(p=!0,this._pathData.a.v&&(o=.5*C[0].an+(g-this._pathData.f.v-.5*C[0].an-.5*C[C.length-1].an)*X/(a-1),o+=this._pathData.f.v);p;)l+y>=o+ot||!m?(v=(o+ot-l)/h.partialLength,B=d.point[0]+(h.point[0]-d.point[0])*v,$=d.point[1]+(h.point[1]-d.point[1])*v,x.translate(-_[0]*C[s].an*.005,-_[1]*V*.01),p=!1):m&&(l+=h.partialLength,(c+=1)>=m.length&&(c=0,u[f+=1]?m=u[f].points:P.v.c?(c=0,m=u[f=0].points):(l-=h.partialLength,m=null)),m&&(d=h,y=(h=m[c]).partialLength));L=C[s].an/2-C[s].add,x.translate(-L,0,0)}else L=C[s].an/2-C[s].add,x.translate(-L,0,0),x.translate(-_[0]*C[s].an*.005,-_[1]*V*.01,0);for(M=0;M<F;M+=1)(D=E[M].a).t.propType&&(R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars),0===r&&0===t.j||(this._hasMaskedPath?R.length?o+=D.t.v*R[0]:o+=D.t.v*R:R.length?r+=D.t.v*R[0]:r+=D.t.v*R));for(t.strokeWidthAnim&&(N=t.sw||0),t.strokeColorAnim&&(G=t.sc?[t.sc[0],t.sc[1],t.sc[2]]:[0,0,0]),t.fillColorAnim&&t.fc&&(j=[t.fc[0],t.fc[1],t.fc[2]]),M=0;M<F;M+=1)(D=E[M].a).a.propType&&((R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars)).length?x.translate(-D.a.v[0]*R[0],-D.a.v[1]*R[1],D.a.v[2]*R[2]):x.translate(-D.a.v[0]*R,-D.a.v[1]*R,D.a.v[2]*R));for(M=0;M<F;M+=1)(D=E[M].a).s.propType&&((R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars)).length?x.scale(1+(D.s.v[0]-1)*R[0],1+(D.s.v[1]-1)*R[1],1):x.scale(1+(D.s.v[0]-1)*R,1+(D.s.v[1]-1)*R,1));for(M=0;M<F;M+=1){if(D=E[M].a,R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars),D.sk.propType&&(R.length?x.skewFromAxis(-D.sk.v*R[0],D.sa.v*R[1]):x.skewFromAxis(-D.sk.v*R,D.sa.v*R)),D.r.propType&&(R.length?x.rotateZ(-D.r.v*R[2]):x.rotateZ(-D.r.v*R)),D.ry.propType&&(R.length?x.rotateY(D.ry.v*R[1]):x.rotateY(D.ry.v*R)),D.rx.propType&&(R.length?x.rotateX(D.rx.v*R[0]):x.rotateX(D.rx.v*R)),D.o.propType&&(R.length?z+=(D.o.v*R[0]-z)*R[0]:z+=(D.o.v*R-z)*R),t.strokeWidthAnim&&D.sw.propType&&(R.length?N+=D.sw.v*R[0]:N+=D.sw.v*R),t.strokeColorAnim&&D.sc.propType)for(H=0;H<3;H+=1)R.length?G[H]+=(D.sc.v[H]-G[H])*R[0]:G[H]+=(D.sc.v[H]-G[H])*R;if(t.fillColorAnim&&t.fc){if(D.fc.propType)for(H=0;H<3;H+=1)R.length?j[H]+=(D.fc.v[H]-j[H])*R[0]:j[H]+=(D.fc.v[H]-j[H])*R;D.fh.propType&&(j=R.length?addHueToRGB(j,D.fh.v*R[0]):addHueToRGB(j,D.fh.v*R)),D.fs.propType&&(j=R.length?addSaturationToRGB(j,D.fs.v*R[0]):addSaturationToRGB(j,D.fs.v*R)),D.fb.propType&&(j=R.length?addBrightnessToRGB(j,D.fb.v*R[0]):addBrightnessToRGB(j,D.fb.v*R))}}for(M=0;M<F;M+=1)(D=E[M].a).p.propType&&(R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars),this._hasMaskedPath?R.length?x.translate(0,D.p.v[1]*R[0],-D.p.v[2]*R[1]):x.translate(0,D.p.v[1]*R,-D.p.v[2]*R):R.length?x.translate(D.p.v[0]*R[0],D.p.v[1]*R[1],-D.p.v[2]*R[2]):x.translate(D.p.v[0]*R,D.p.v[1]*R,-D.p.v[2]*R));if(t.strokeWidthAnim&&(q=N<0?0:N),t.strokeColorAnim&&(W="rgb("+Math.round(255*G[0])+","+Math.round(255*G[1])+","+Math.round(255*G[2])+")"),t.fillColorAnim&&t.fc&&(U="rgb("+Math.round(255*j[0])+","+Math.round(255*j[1])+","+Math.round(255*j[2])+")"),this._hasMaskedPath){if(x.translate(0,-t.ls),x.translate(0,_[1]*V*.01+i,0),this._pathData.p.v){b=(h.point[1]-d.point[1])/(h.point[0]-d.point[0]);var ht=180*Math.atan(b)/Math.PI;h.point[0]<d.point[0]&&(ht+=180),x.rotate(-ht*Math.PI/180)}x.translate(B,$,0),o-=_[0]*C[s].an*.005,C[s+1]&&X!==C[s+1].ind&&(o+=C[s].an/2,o+=.001*t.tr*t.finalSize)}else{switch(x.translate(r,i,0),t.ps&&x.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:x.translate(C[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[C[s].line]),0,0);break;case 2:x.translate(C[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[C[s].line])/2,0,0)}x.translate(0,-t.ls),x.translate(L,0,0),x.translate(_[0]*C[s].an*.005,_[1]*V*.01,0),r+=C[s].l+.001*t.tr*t.finalSize}"html"===A?tt=x.toCSS():"svg"===A?tt=x.to2dCSS():et=[x.props[0],x.props[1],x.props[2],x.props[3],x.props[4],x.props[5],x.props[6],x.props[7],x.props[8],x.props[9],x.props[10],x.props[11],x.props[12],x.props[13],x.props[14],x.props[15]],Y=z}w<=s?(I=new LetterProps(Y,q,W,U,tt,et),this.renderedLetters.push(I),w+=1,this.lettersChangedFlag=!0):(I=this.renderedLetters[s],this.lettersChangedFlag=I.update(Y,q,W,U,tt,et)||this.lettersChangedFlag)}}},TextAnimatorProperty.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],extendPrototype([DynamicPropertyContainer],TextAnimatorProperty),LetterProps.prototype.update=function(t,e,r,i,s,a){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var n=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,n=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,n=!0),this.sc!==r&&(this.sc=r,this._mdf.sc=!0,n=!0),this.fc!==i&&(this.fc=i,this._mdf.fc=!0,n=!0),this.m!==s&&(this.m=s,this._mdf.m=!0,n=!0),!a.length||this.p[0]===a[0]&&this.p[1]===a[1]&&this.p[4]===a[4]&&this.p[5]===a[5]&&this.p[12]===a[12]&&this.p[13]===a[13]||(this.p=a,this._mdf.p=!0,n=!0),n},TextProperty.prototype.defaultBoxWidth=[0,0],TextProperty.prototype.copyData=function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},TextProperty.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},TextProperty.prototype.searchProperty=function(){return this.searchKeyframes()},TextProperty.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},TextProperty.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},TextProperty.prototype.getValue=function(t){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length||t){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,r=this.keysIndex;if(this.lock)this.setCurrentData(this.currentData);else{var i;this.lock=!0,this._mdf=!1;var s=this.effectsSequence.length,a=t||this.data.d.k[this.keysIndex].s;for(i=0;i<s;i+=1)a=r!==this.keysIndex?this.effectsSequence[i](a,a.t):this.effectsSequence[i](this.currentData,a.t);e!==a&&this.setCurrentData(a),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}}},TextProperty.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,r=0,i=t.length;r<=i-1&&!(r===i-1||t[r+1].t>e);)r+=1;return this.keysIndex!==r&&(this.keysIndex=r),this.data.d.k[this.keysIndex].s},TextProperty.prototype.buildFinalText=function(t){for(var e,r,i=[],s=0,a=t.length,n=!1;s<a;)e=t.charCodeAt(s),FontManager.isCombinedCharacter(e)?i[i.length-1]+=t.charAt(s):e>=55296&&e<=56319?(r=t.charCodeAt(s+1))>=56320&&r<=57343?(n||FontManager.isModifier(e,r)?(i[i.length-1]+=t.substr(s,2),n=!1):i.push(t.substr(s,2)),s+=1):i.push(t.charAt(s)):e>56319?(r=t.charCodeAt(s+1),FontManager.isZeroWidthJoiner(e,r)?(n=!0,i[i.length-1]+=t.substr(s,2),s+=1):i.push(t.charAt(s))):FontManager.isZeroWidthJoiner(e)?(i[i.length-1]+=t.charAt(s),n=!0):i.push(t.charAt(s)),s+=1;return i},TextProperty.prototype.completeTextData=function(t){t.__complete=!0;var e,r,i,s,a,n,o,h=this.elem.globalData.fontManager,l=this.data,p=[],c=0,f=l.m.g,d=0,m=0,u=0,y=[],g=0,v=0,b=h.getFontByName(t.f),P=0,_=getFontProperties(b);t.fWeight=_.weight,t.fStyle=_.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),r=t.finalText.length,t.finalLineHeight=t.lh;var E,S=t.tr/1e3*t.finalSize;if(t.sz)for(var x,A,w=!0,C=t.sz[0],k=t.sz[1];w;){x=0,g=0,r=(A=this.buildFinalText(t.t)).length,S=t.tr/1e3*t.finalSize;var T=-1;for(e=0;e<r;e+=1)E=A[e].charCodeAt(0),i=!1," "===A[e]?T=e:13!==E&&3!==E||(g=0,i=!0,x+=t.finalLineHeight||1.2*t.finalSize),h.chars?(o=h.getCharData(A[e],b.fStyle,b.fFamily),P=i?0:o.w*t.finalSize/100):P=h.measureText(A[e],t.f,t.finalSize),g+P>C&&" "!==A[e]?(-1===T?r+=1:e=T,x+=t.finalLineHeight||1.2*t.finalSize,A.splice(e,T===e?1:0,"\r"),T=-1,g=0):(g+=P,g+=S);x+=b.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&k<x?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=A,r=t.finalText.length,w=!1)}g=-S,P=0;var D,M=0;for(e=0;e<r;e+=1)if(i=!1,13===(E=(D=t.finalText[e]).charCodeAt(0))||3===E?(M=0,y.push(g),v=g>v?g:v,g=-2*S,s="",i=!0,u+=1):s=D,h.chars?(o=h.getCharData(D,b.fStyle,h.getFontByName(t.f).fFamily),P=i?0:o.w*t.finalSize/100):P=h.measureText(s,t.f,t.finalSize)," "===D?M+=P+S:(g+=P+S+M,M=0),p.push({l:P,an:P,add:d,n:i,anIndexes:[],val:s,line:u,animatorJustifyOffset:0}),2==f){if(d+=P,""===s||" "===s||e===r-1){for(""!==s&&" "!==s||(d-=P);m<=e;)p[m].an=d,p[m].ind=c,p[m].extra=P,m+=1;c+=1,d=0}}else if(3==f){if(d+=P,""===s||e===r-1){for(""===s&&(d-=P);m<=e;)p[m].an=d,p[m].ind=c,p[m].extra=P,m+=1;d=0,c+=1}}else p[c].ind=c,p[c].extra=0,c+=1;if(t.l=p,v=g>v?g:v,y.push(g),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=v,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=y;var F,I,R,V,O=l.a;n=O.length;var L=[];for(a=0;a<n;a+=1){for((F=O[a]).a.sc&&(t.strokeColorAnim=!0),F.a.sw&&(t.strokeWidthAnim=!0),(F.a.fc||F.a.fh||F.a.fs||F.a.fb)&&(t.fillColorAnim=!0),V=0,R=F.s.b,e=0;e<r;e+=1)(I=p[e]).anIndexes[a]=V,(1==R&&""!==I.val||2==R&&""!==I.val&&" "!==I.val||3==R&&(I.n||" "==I.val||e==r-1)||4==R&&(I.n||e==r-1))&&(1===F.s.rn&&L.push(V),V+=1);l.a[a].s.totalChars=V;var B,$=-1;if(1===F.s.rn)for(e=0;e<r;e+=1)$!=(I=p[e]).anIndexes[a]&&($=I.anIndexes[a],B=L.splice(Math.floor(Math.random()*L.length),1)[0]),I.anIndexes[a]=B}t.yOffset=t.finalLineHeight||1.2*t.finalSize,t.ls=t.ls||0,t.ascent=b.ascent*t.finalSize/100},TextProperty.prototype.updateDocumentData=function(t,e){e=void 0===e?this.keysIndex:e;var r=this.copyData({},this.data.d.k[e].s);r=this.copyData(r,t),this.data.d.k[e].s=r,this.recalculate(e),this.elem.addDynamicProperty(this)},TextProperty.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},TextProperty.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},TextProperty.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var TextSelectorProp=function(){var t=Math.max,e=Math.min,r=Math.floor;function i(t,e){this._currentTextLength=-1,this.k=!1,this.data=e,this.elem=t,this.comp=t.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(t),this.s=PropertyFactory.getProp(t,e.s||{k:0},0,0,this),this.e="e"in e?PropertyFactory.getProp(t,e.e,0,0,this):{v:100},this.o=PropertyFactory.getProp(t,e.o||{k:0},0,0,this),this.xe=PropertyFactory.getProp(t,e.xe||{k:0},0,0,this),this.ne=PropertyFactory.getProp(t,e.ne||{k:0},0,0,this),this.sm=PropertyFactory.getProp(t,e.sm||{k:100},0,0,this),this.a=PropertyFactory.getProp(t,e.a,0,.01,this),this.dynamicProperties.length||this.getValue()}return i.prototype={getMult:function(i){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var s=0,a=0,n=1,o=1;this.ne.v>0?s=this.ne.v/100:a=-this.ne.v/100,this.xe.v>0?n=1-this.xe.v/100:o=1+this.xe.v/100;var h=BezierFactory.getBezierEasing(s,a,n,o).get,l=0,p=this.finalS,c=this.finalE,f=this.data.sh;if(2===f)l=h(l=c===p?i>=c?1:0:t(0,e(.5/(c-p)+(i-p)/(c-p),1)));else if(3===f)l=h(l=c===p?i>=c?0:1:1-t(0,e(.5/(c-p)+(i-p)/(c-p),1)));else if(4===f)c===p?l=0:(l=t(0,e(.5/(c-p)+(i-p)/(c-p),1)))<.5?l*=2:l=1-2*(l-.5),l=h(l);else if(5===f){if(c===p)l=0;else{var d=c-p,m=-d/2+(i=e(t(0,i+.5-p),c-p)),u=d/2;l=Math.sqrt(1-m*m/(u*u))}l=h(l)}else 6===f?(c===p?l=0:(i=e(t(0,i+.5-p),c-p),l=(1+Math.cos(Math.PI+2*Math.PI*i/(c-p)))/2),l=h(l)):(i>=r(p)&&(l=t(0,e(i-p<0?e(c,1)-(p-i):c-i,1))),l=h(l));if(100!==this.sm.v){var y=.01*this.sm.v;0===y&&(y=1e-8);var g=.5-.5*y;l<g?l=0:(l=(l-g)/y)>1&&(l=1)}return l*this.a.v},getValue:function(t){this.iterateDynamicProperties(),this._mdf=t||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,t&&2===this.data.r&&(this.e.v=this._currentTextLength);var e=2===this.data.r?1:100/this.data.totalChars,r=this.o.v/e,i=this.s.v/e+r,s=this.e.v/e+r;if(i>s){var a=i;i=s,s=a}this.finalS=i,this.finalE=s}},extendPrototype([DynamicPropertyContainer],i),{getTextSelectorProp:function(t,e,r){return new i(t,e,r)}}}(),poolFactory=function(t,e,r){var i=0,s=t,a=createSizedArray(s);return{newElement:function(){return i?a[i-=1]:e()},release:function(t){i===s&&(a=pooling.double(a),s*=2),r&&r(t),a[i]=t,i+=1}}},pooling={double:function(t){return t.concat(createSizedArray(t.length))}},pointPool=poolFactory(8,(function(){return createTypedArray("float32",2)})),shapePool=(factory=poolFactory(4,(function(){return new ShapePath}),(function(t){var e,r=t._length;for(e=0;e<r;e+=1)pointPool.release(t.v[e]),pointPool.release(t.i[e]),pointPool.release(t.o[e]),t.v[e]=null,t.i[e]=null,t.o[e]=null;t._length=0,t.c=!1})),factory.clone=function(t){var e,r=factory.newElement(),i=void 0===t._length?t.v.length:t._length;for(r.setLength(i),r.c=t.c,e=0;e<i;e+=1)r.setTripleAt(t.v[e][0],t.v[e][1],t.o[e][0],t.o[e][1],t.i[e][0],t.i[e][1],e);return r},factory),factory,shapeCollectionPool=function(){var t={newShapeCollection:function(){return e?i[e-=1]:new ShapeCollection},release:function(t){var s,a=t._length;for(s=0;s<a;s+=1)shapePool.release(t.shapes[s]);t._length=0,e===r&&(i=pooling.double(i),r*=2),i[e]=t,e+=1}},e=0,r=4,i=createSizedArray(r);return t}(),segmentsLengthPool=poolFactory(8,(function(){return{lengths:[],totalLength:0}}),(function(t){var e,r=t.lengths.length;for(e=0;e<r;e+=1)bezierLengthPool.release(t.lengths[e]);t.lengths.length=0})),bezierLengthPool=poolFactory(8,(function(){return{addedLength:0,percents:createTypedArray("float32",defaultCurveSegments),lengths:createTypedArray("float32",defaultCurveSegments)}})),markerParser=function(){function t(t){for(var e,r=t.split("\r\n"),i={},s=0,a=0;a<r.length;a+=1)2===(e=r[a].split(":")).length&&(i[e[0]]=e[1].trim(),s+=1);if(0===s)throw new Error;return i}return function(e){for(var r=[],i=0;i<e.length;i+=1){var s=e[i],a={time:s.tm,duration:s.dr};try{a.payload=JSON.parse(e[i].cm)}catch(r){try{a.payload=t(e[i].cm)}catch(t){a.payload={name:e[i]}}}r.push(a)}return r}}();function BaseRenderer(){}function SVGRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=createNS("svg");var r="";if(e&&e.title){var i=createNS("title"),s=createElementID();i.setAttribute("id",s),i.textContent=e.title,this.svgElement.appendChild(i),r+=s}if(e&&e.description){var a=createNS("desc"),n=createElementID();a.setAttribute("id",n),a.textContent=e.description,this.svgElement.appendChild(a),r+=" "+n}r&&this.svgElement.setAttribute("aria-labelledby",r);var o=createNS("defs");this.svgElement.appendChild(o);var h=createNS("g");this.svgElement.appendChild(h),this.layerElement=h,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&!1===e.hideOnTransparent),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"}},this.globalData={_mdf:!1,frameNum:-1,defs:o,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}function CanvasRenderer(t,e){this.animationItem=t,this.renderConfig={clearCanvas:!e||void 0===e.clearCanvas||e.clearCanvas,context:e&&e.context||null,progressiveLoad:e&&e.progressiveLoad||!1,preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",className:e&&e.className||"",id:e&&e.id||""},this.renderConfig.dpr=e&&e.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=e&&e.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1,_mdf:!1,renderConfig:this.renderConfig,currentGlobalAlpha:-1},this.contextData=new CVContextData,this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1,this.rendererType="canvas"}function HybridRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:e&&e.className||"",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!(e&&!1===e.hideOnTransparent),filterSize:{width:e&&e.filterSize&&e.filterSize.width||"400%",height:e&&e.filterSize&&e.filterSize.height||"400%",x:e&&e.filterSize&&e.filterSize.x||"-100%",y:e&&e.filterSize&&e.filterSize.y||"-100%"}},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}function MaskElement(t,e,r){this.data=t,this.element=e,this.globalData=r,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var i,s,a=this.globalData.defs,n=this.masksProperties?this.masksProperties.length:0;this.viewData=createSizedArray(n),this.solidPath="";var o,h,l,p,c,f,d=this.masksProperties,m=0,u=[],y=createElementID(),g="clipPath",v="clip-path";for(i=0;i<n;i+=1)if(("a"!==d[i].mode&&"n"!==d[i].mode||d[i].inv||100!==d[i].o.k||d[i].o.x)&&(g="mask",v="mask"),"s"!==d[i].mode&&"i"!==d[i].mode||0!==m?l=null:((l=createNS("rect")).setAttribute("fill","#ffffff"),l.setAttribute("width",this.element.comp.data.w||0),l.setAttribute("height",this.element.comp.data.h||0),u.push(l)),s=createNS("path"),"n"===d[i].mode)this.viewData[i]={op:PropertyFactory.getProp(this.element,d[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,d[i],3),elem:s,lastPath:""},a.appendChild(s);else{var b;if(m+=1,s.setAttribute("fill","s"===d[i].mode?"#000000":"#ffffff"),s.setAttribute("clip-rule","nonzero"),0!==d[i].x.k?(g="mask",v="mask",f=PropertyFactory.getProp(this.element,d[i].x,0,null,this.element),b=createElementID(),(p=createNS("filter")).setAttribute("id",b),(c=createNS("feMorphology")).setAttribute("operator","erode"),c.setAttribute("in","SourceGraphic"),c.setAttribute("radius","0"),p.appendChild(c),a.appendChild(p),s.setAttribute("stroke","s"===d[i].mode?"#000000":"#ffffff")):(c=null,f=null),this.storedData[i]={elem:s,x:f,expan:c,lastPath:"",lastOperator:"",filterId:b,lastRadius:0},"i"===d[i].mode){h=u.length;var P=createNS("g");for(o=0;o<h;o+=1)P.appendChild(u[o]);var _=createNS("mask");_.setAttribute("mask-type","alpha"),_.setAttribute("id",y+"_"+m),_.appendChild(s),a.appendChild(_),P.setAttribute("mask","url("+locationHref+"#"+y+"_"+m+")"),u.length=0,u.push(P)}else u.push(s);d[i].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[i]={elem:s,lastPath:"",op:PropertyFactory.getProp(this.element,d[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,d[i],3),invRect:l},this.viewData[i].prop.k||this.drawPath(d[i],this.viewData[i].prop.v,this.viewData[i])}for(this.maskElement=createNS(g),n=u.length,i=0;i<n;i+=1)this.maskElement.appendChild(u[i]);m>0&&(this.maskElement.setAttribute("id",y),this.element.maskedElement.setAttribute(v,"url("+locationHref+"#"+y+")"),a.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}function HierarchyElement(){}function FrameElement(){}function TransformElement(){}function RenderableElement(){}function RenderableDOMElement(){}function ProcessedElement(t,e){this.elem=t,this.pos=e}function SVGStyleData(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=!0===t.hd,this.pElem=createNS("path"),this.msElem=null}function SVGShapeData(t,e,r){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=r,this.lvl=e,this._isAnimated=!!r.k;for(var i=0,s=t.length;i<s;){if(t[i].mProps.dynamicProperties.length){this._isAnimated=!0;break}i+=1}}function SVGTransformData(t,e,r){this.transform={mProps:t,op:e,container:r},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}function SVGStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r,this._isAnimated=!!this._isAnimated}function SVGFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r}function SVGGradientFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,r)}function SVGGradientStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.initGradientData(t,e,r),this._isAnimated=!!this._isAnimated}function ShapeGroupData(){this.it=[],this.prevViewData=[],this.gr=createNS("g")}BaseRenderer.prototype.checkLayers=function(t){var e,r,i=this.layers.length;for(this.completeLayers=!0,e=i-1;e>=0;e-=1)this.elements[e]||(r=this.layers[e]).ip-r.st<=t-this.layers[e].st&&r.op-r.st>t-this.layers[e].st&&this.buildItem(e),this.completeLayers=!!this.elements[e]&&this.completeLayers;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:default:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t)}},BaseRenderer.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},BaseRenderer.prototype.createAudio=function(t){return new AudioElement(t,this.globalData,this)},BaseRenderer.prototype.createFootage=function(t){return new FootageElement(t,this.globalData,this)},BaseRenderer.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(t){var e;this.completeLayers=!1;var r,i=t.length,s=this.layers.length;for(e=0;e<i;e+=1)for(r=0;r<s;){if(this.layers[r].id===t[e].id){this.layers[r]=t[e];break}r+=1}},BaseRenderer.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(t,e,r){for(var i=this.elements,s=this.layers,a=0,n=s.length;a<n;)s[a].ind==e&&(i[a]&&!0!==i[a]?(r.push(i[a]),i[a].setAsParent(),void 0!==s[a].parent?this.buildElementParenting(t,s[a].parent,r):t.setHierarchy(r)):(this.buildItem(a),this.addPendingElement(t))),a+=1},BaseRenderer.prototype.addPendingElement=function(t){this.pendingElements.push(t)},BaseRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length;for(e=0;e<r;e+=1)if(t[e].xt){var i=this.createComp(t[e]);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},BaseRenderer.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}},extendPrototype([BaseRenderer],SVGRenderer),SVGRenderer.prototype.createNull=function(t){return new NullElement(t,this.globalData,this)},SVGRenderer.prototype.createShape=function(t){return new SVGShapeElement(t,this.globalData,this)},SVGRenderer.prototype.createText=function(t){return new SVGTextLottieElement(t,this.globalData,this)},SVGRenderer.prototype.createImage=function(t){return new IImageElement(t,this.globalData,this)},SVGRenderer.prototype.createComp=function(t){return new SVGCompElement(t,this.globalData,this)},SVGRenderer.prototype.createSolid=function(t){return new ISolidElement(t,this.globalData,this)},SVGRenderer.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),void 0!==this.renderConfig.focusable&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var r=createNS("clipPath"),i=createNS("rect");i.setAttribute("width",t.w),i.setAttribute("height",t.h),i.setAttribute("x",0),i.setAttribute("y",0);var s=createElementID();r.setAttribute("id",s),r.appendChild(i),this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+s+")"),e.appendChild(r),this.layers=t.layers,this.elements=createSizedArray(t.layers.length)},SVGRenderer.prototype.destroy=function(){var t;this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRenderer.prototype.updateContainerSize=function(){},SVGRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!==this.layers[t].ty){e[t]=!0;var r=this.createItem(this.layers[t]);e[t]=r,expressionsPlugin&&(0===this.layers[t].ty&&this.globalData.projectInterface.registerComposition(r),r.initExpressions()),this.appendElementInPos(r,t),this.layers[t].tt&&(this.elements[t-1]&&!0!==this.elements[t-1]?r.setMatte(e[t-1].layerId):(this.buildItem(t-1),this.addPendingElement(r)))}},SVGRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,r=this.elements.length;e<r;){if(this.elements[e]===t){t.setMatte(this.elements[e-1].layerId);break}e+=1}}},SVGRenderer.prototype.renderFrame=function(t){if(this.renderedFrame!==t&&!this.destroyed){var e;null===t?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var r=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=r-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<r;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},SVGRenderer.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){for(var i,s=0;s<e;)this.elements[s]&&!0!==this.elements[s]&&this.elements[s].getBaseElement()&&(i=this.elements[s].getBaseElement()),s+=1;i?this.layerElement.insertBefore(r,i):this.layerElement.appendChild(r)}},SVGRenderer.prototype.hide=function(){this.layerElement.style.display="none"},SVGRenderer.prototype.show=function(){this.layerElement.style.display="block"},extendPrototype([BaseRenderer],CanvasRenderer),CanvasRenderer.prototype.createShape=function(t){return new CVShapeElement(t,this.globalData,this)},CanvasRenderer.prototype.createText=function(t){return new CVTextElement(t,this.globalData,this)},CanvasRenderer.prototype.createImage=function(t){return new CVImageElement(t,this.globalData,this)},CanvasRenderer.prototype.createComp=function(t){return new CVCompElement(t,this.globalData,this)},CanvasRenderer.prototype.createSolid=function(t){return new CVSolidElement(t,this.globalData,this)},CanvasRenderer.prototype.createNull=SVGRenderer.prototype.createNull,CanvasRenderer.prototype.ctxTransform=function(t){if(1!==t[0]||0!==t[1]||0!==t[4]||1!==t[5]||0!==t[12]||0!==t[13])if(this.renderConfig.clearCanvas){this.transformMat.cloneFromProps(t);var e=this.contextData.cTr.props;this.transformMat.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),this.contextData.cTr.cloneFromProps(this.transformMat.props);var r=this.contextData.cTr.props;this.canvasContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13])}else this.canvasContext.transform(t[0],t[1],t[4],t[5],t[12],t[13])},CanvasRenderer.prototype.ctxOpacity=function(t){if(!this.renderConfig.clearCanvas)return this.canvasContext.globalAlpha*=t<0?0:t,void(this.globalData.currentGlobalAlpha=this.contextData.cO);this.contextData.cO*=t<0?0:t,this.globalData.currentGlobalAlpha!==this.contextData.cO&&(this.canvasContext.globalAlpha=this.contextData.cO,this.globalData.currentGlobalAlpha=this.contextData.cO)},CanvasRenderer.prototype.reset=function(){this.renderConfig.clearCanvas?this.contextData.reset():this.canvasContext.restore()},CanvasRenderer.prototype.save=function(t){if(this.renderConfig.clearCanvas){t&&this.canvasContext.save();var e,r=this.contextData.cTr.props;this.contextData._length<=this.contextData.cArrPos&&this.contextData.duplicate();var i=this.contextData.saved[this.contextData.cArrPos];for(e=0;e<16;e+=1)i[e]=r[e];this.contextData.savedOp[this.contextData.cArrPos]=this.contextData.cO,this.contextData.cArrPos+=1}else this.canvasContext.save()},CanvasRenderer.prototype.restore=function(t){if(this.renderConfig.clearCanvas){t&&(this.canvasContext.restore(),this.globalData.blendMode="source-over"),this.contextData.cArrPos-=1;var e,r=this.contextData.saved[this.contextData.cArrPos],i=this.contextData.cTr.props;for(e=0;e<16;e+=1)i[e]=r[e];this.canvasContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13]),r=this.contextData.savedOp[this.contextData.cArrPos],this.contextData.cO=r,this.globalData.currentGlobalAlpha!==r&&(this.canvasContext.globalAlpha=r,this.globalData.currentGlobalAlpha=r)}else this.canvasContext.restore()},CanvasRenderer.prototype.configAnimation=function(t){if(this.animationItem.wrapper){this.animationItem.container=createTag("canvas");var e=this.animationItem.container.style;e.width="100%",e.height="100%";var r="0px 0px 0px";e.transformOrigin=r,e.mozTransformOrigin=r,e.webkitTransformOrigin=r,e["-webkit-transform"]=r,e.contentVisibility=this.renderConfig.contentVisibility,this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d"),this.renderConfig.className&&this.animationItem.container.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.animationItem.container.setAttribute("id",this.renderConfig.id)}else this.canvasContext=this.renderConfig.context;this.data=t,this.layers=t.layers,this.transformCanvas={w:t.w,h:t.h,sx:0,sy:0,tx:0,ty:0},this.setupGlobalData(t,document.body),this.globalData.canvasContext=this.canvasContext,this.globalData.renderer=this,this.globalData.isDashed=!1,this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.transformCanvas=this.transformCanvas,this.elements=createSizedArray(t.layers.length),this.updateContainerSize()},CanvasRenderer.prototype.updateContainerSize=function(){var t,e,r,i;if(this.reset(),this.animationItem.wrapper&&this.animationItem.container?(t=this.animationItem.wrapper.offsetWidth,e=this.animationItem.wrapper.offsetHeight,this.animationItem.container.setAttribute("width",t*this.renderConfig.dpr),this.animationItem.container.setAttribute("height",e*this.renderConfig.dpr)):(t=this.canvasContext.canvas.width*this.renderConfig.dpr,e=this.canvasContext.canvas.height*this.renderConfig.dpr),-1!==this.renderConfig.preserveAspectRatio.indexOf("meet")||-1!==this.renderConfig.preserveAspectRatio.indexOf("slice")){var s=this.renderConfig.preserveAspectRatio.split(" "),a=s[1]||"meet",n=s[0]||"xMidYMid",o=n.substr(0,4),h=n.substr(4);r=t/e,(i=this.transformCanvas.w/this.transformCanvas.h)>r&&"meet"===a||i<r&&"slice"===a?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=t/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=e/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr)),this.transformCanvas.tx="xMid"===o&&(i<r&&"meet"===a||i>r&&"slice"===a)?(t-this.transformCanvas.w*(e/this.transformCanvas.h))/2*this.renderConfig.dpr:"xMax"===o&&(i<r&&"meet"===a||i>r&&"slice"===a)?(t-this.transformCanvas.w*(e/this.transformCanvas.h))*this.renderConfig.dpr:0,this.transformCanvas.ty="YMid"===h&&(i>r&&"meet"===a||i<r&&"slice"===a)?(e-this.transformCanvas.h*(t/this.transformCanvas.w))/2*this.renderConfig.dpr:"YMax"===h&&(i>r&&"meet"===a||i<r&&"slice"===a)?(e-this.transformCanvas.h*(t/this.transformCanvas.w))*this.renderConfig.dpr:0}else"none"===this.renderConfig.preserveAspectRatio?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr,this.transformCanvas.tx=0,this.transformCanvas.ty=0);this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1],this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip(),this.renderFrame(this.renderedFrame,!0)},CanvasRenderer.prototype.destroy=function(){var t;for(this.renderConfig.clearCanvas&&this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),t=(this.layers?this.layers.length:0)-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRenderer.prototype.renderFrame=function(t,e){if((this.renderedFrame!==t||!0!==this.renderConfig.clearCanvas||e)&&!this.destroyed&&-1!==t){var r;this.renderedFrame=t,this.globalData.frameNum=t-this.animationItem._isFirstFrame,this.globalData.frameId+=1,this.globalData._mdf=!this.renderConfig.clearCanvas||e,this.globalData.projectInterface.currentFrame=t;var i=this.layers.length;for(this.completeLayers||this.checkLayers(t),r=0;r<i;r+=1)(this.completeLayers||this.elements[r])&&this.elements[r].prepareFrame(t-this.layers[r].st);if(this.globalData._mdf){for(!0===this.renderConfig.clearCanvas?this.canvasContext.clearRect(0,0,this.transformCanvas.w,this.transformCanvas.h):this.save(),r=i-1;r>=0;r-=1)(this.completeLayers||this.elements[r])&&this.elements[r].renderFrame();!0!==this.renderConfig.clearCanvas&&this.restore()}}},CanvasRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!==this.layers[t].ty){var r=this.createItem(this.layers[t],this,this.globalData);e[t]=r,r.initExpressions()}},CanvasRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;)this.pendingElements.pop().checkParenting()},CanvasRenderer.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRenderer.prototype.show=function(){this.animationItem.container.style.display="block"},extendPrototype([BaseRenderer],HybridRenderer),HybridRenderer.prototype.buildItem=SVGRenderer.prototype.buildItem,HybridRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;)this.pendingElements.pop().checkParenting()},HybridRenderer.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){var i=this.layers[e];if(i.ddd&&this.supports3d)this.addTo3dContainer(r,e);else if(this.threeDElements)this.addTo3dContainer(r,e);else{for(var s,a,n=0;n<e;)this.elements[n]&&!0!==this.elements[n]&&this.elements[n].getBaseElement&&(a=this.elements[n],s=(this.layers[n].ddd?this.getThreeDContainerByPos(n):a.getBaseElement())||s),n+=1;s?i.ddd&&this.supports3d||this.layerElement.insertBefore(r,s):i.ddd&&this.supports3d||this.layerElement.appendChild(r)}}},HybridRenderer.prototype.createShape=function(t){return this.supports3d?new HShapeElement(t,this.globalData,this):new SVGShapeElement(t,this.globalData,this)},HybridRenderer.prototype.createText=function(t){return this.supports3d?new HTextElement(t,this.globalData,this):new SVGTextLottieElement(t,this.globalData,this)},HybridRenderer.prototype.createCamera=function(t){return this.camera=new HCameraElement(t,this.globalData,this),this.camera},HybridRenderer.prototype.createImage=function(t){return this.supports3d?new HImageElement(t,this.globalData,this):new IImageElement(t,this.globalData,this)},HybridRenderer.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.globalData,this):new SVGCompElement(t,this.globalData,this)},HybridRenderer.prototype.createSolid=function(t){return this.supports3d?new HSolidElement(t,this.globalData,this):new ISolidElement(t,this.globalData,this)},HybridRenderer.prototype.createNull=SVGRenderer.prototype.createNull,HybridRenderer.prototype.getThreeDContainerByPos=function(t){for(var e=0,r=this.threeDElements.length;e<r;){if(this.threeDElements[e].startPos<=t&&this.threeDElements[e].endPos>=t)return this.threeDElements[e].perspectiveElem;e+=1}return null},HybridRenderer.prototype.createThreeDContainer=function(t,e){var r,i,s=createTag("div");styleDiv(s);var a=createTag("div");if(styleDiv(a),"3d"===e){(r=s.style).width=this.globalData.compSize.w+"px",r.height=this.globalData.compSize.h+"px";var n="50% 50%";r.webkitTransformOrigin=n,r.mozTransformOrigin=n,r.transformOrigin=n;var o="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";(i=a.style).transform=o,i.webkitTransform=o}s.appendChild(a);var h={container:a,perspectiveElem:s,startPos:t,endPos:t,type:e};return this.threeDElements.push(h),h},HybridRenderer.prototype.build3dContainers=function(){var t,e,r=this.layers.length,i="";for(t=0;t<r;t+=1)this.layers[t].ddd&&3!==this.layers[t].ty?("3d"!==i&&(i="3d",e=this.createThreeDContainer(t,"3d")),e.endPos=Math.max(e.endPos,t)):("2d"!==i&&(i="2d",e=this.createThreeDContainer(t,"2d")),e.endPos=Math.max(e.endPos,t));for(t=(r=this.threeDElements.length)-1;t>=0;t-=1)this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)},HybridRenderer.prototype.addTo3dContainer=function(t,e){for(var r=0,i=this.threeDElements.length;r<i;){if(e<=this.threeDElements[r].endPos){for(var s,a=this.threeDElements[r].startPos;a<e;)this.elements[a]&&this.elements[a].getBaseElement&&(s=this.elements[a].getBaseElement()),a+=1;s?this.threeDElements[r].container.insertBefore(t,s):this.threeDElements[r].container.appendChild(t);break}r+=1}},HybridRenderer.prototype.configAnimation=function(t){var e=createTag("div"),r=this.animationItem.wrapper,i=e.style;i.width=t.w+"px",i.height=t.h+"px",this.resizerElem=e,styleDiv(e),i.transformStyle="flat",i.mozTransformStyle="flat",i.webkitTransformStyle="flat",this.renderConfig.className&&e.setAttribute("class",this.renderConfig.className),r.appendChild(e),i.overflow="hidden";var s=createNS("svg");s.setAttribute("width","1"),s.setAttribute("height","1"),styleDiv(s),this.resizerElem.appendChild(s);var a=createNS("defs");s.appendChild(a),this.data=t,this.setupGlobalData(t,s),this.globalData.defs=a,this.layers=t.layers,this.layerElement=this.resizerElem,this.build3dContainers(),this.updateContainerSize()},HybridRenderer.prototype.destroy=function(){var t;this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.animationItem.container=null,this.globalData.defs=null;var e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},HybridRenderer.prototype.updateContainerSize=function(){var t,e,r,i,s=this.animationItem.wrapper.offsetWidth,a=this.animationItem.wrapper.offsetHeight,n=s/a;this.globalData.compSize.w/this.globalData.compSize.h>n?(t=s/this.globalData.compSize.w,e=s/this.globalData.compSize.w,r=0,i=(a-this.globalData.compSize.h*(s/this.globalData.compSize.w))/2):(t=a/this.globalData.compSize.h,e=a/this.globalData.compSize.h,r=(s-this.globalData.compSize.w*(a/this.globalData.compSize.h))/2,i=0);var o=this.resizerElem.style;o.webkitTransform="matrix3d("+t+",0,0,0,0,"+e+",0,0,0,0,1,0,"+r+","+i+",0,1)",o.transform=o.webkitTransform},HybridRenderer.prototype.renderFrame=SVGRenderer.prototype.renderFrame,HybridRenderer.prototype.hide=function(){this.resizerElem.style.display="none"},HybridRenderer.prototype.show=function(){this.resizerElem.style.display="block"},HybridRenderer.prototype.initItems=function(){if(this.buildAllItems(),this.camera)this.camera.setup();else{var t,e=this.globalData.compSize.w,r=this.globalData.compSize.h,i=this.threeDElements.length;for(t=0;t<i;t+=1){var s=this.threeDElements[t].perspectiveElem.style;s.webkitPerspective=Math.sqrt(Math.pow(e,2)+Math.pow(r,2))+"px",s.perspective=s.webkitPerspective}}},HybridRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length,i=createTag("div");for(e=0;e<r;e+=1)if(t[e].xt){var s=this.createComp(t[e],i,this.globalData.comp,null);s.initExpressions(),this.globalData.projectInterface.registerComposition(s)}},MaskElement.prototype.getMaskProperty=function(t){return this.viewData[t].prop},MaskElement.prototype.renderFrame=function(t){var e,r=this.element.finalTransform.mat,i=this.masksProperties.length;for(e=0;e<i;e+=1)if((this.viewData[e].prop._mdf||t)&&this.drawPath(this.masksProperties[e],this.viewData[e].prop.v,this.viewData[e]),(this.viewData[e].op._mdf||t)&&this.viewData[e].elem.setAttribute("fill-opacity",this.viewData[e].op.v),"n"!==this.masksProperties[e].mode&&(this.viewData[e].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[e].invRect.setAttribute("transform",r.getInverseMatrix().to2dCSS()),this.storedData[e].x&&(this.storedData[e].x._mdf||t))){var s=this.storedData[e].expan;this.storedData[e].x.v<0?("erode"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="erode",this.storedData[e].elem.setAttribute("filter","url("+locationHref+"#"+this.storedData[e].filterId+")")),s.setAttribute("radius",-this.storedData[e].x.v)):("dilate"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="dilate",this.storedData[e].elem.setAttribute("filter",null)),this.storedData[e].elem.setAttribute("stroke-width",2*this.storedData[e].x.v))}},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" "},MaskElement.prototype.drawPath=function(t,e,r){var i,s,a=" M"+e.v[0][0]+","+e.v[0][1];for(s=e._length,i=1;i<s;i+=1)a+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[i][0]+","+e.i[i][1]+" "+e.v[i][0]+","+e.v[i][1];if(e.c&&s>1&&(a+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),r.lastPath!==a){var n="";r.elem&&(e.c&&(n=t.inv?this.solidPath+a:a),r.elem.setAttribute("d",n)),r.lastPath=a}},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null},HierarchyElement.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(t){this.hierarchy=t},setAsParent:function(){this._isParent=!0},checkParenting:function(){void 0!==this.data.parent&&this.comp.buildElementParenting(this,this.data.parent,[])}},FrameElement.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(t,e){var r,i=this.dynamicProperties.length;for(r=0;r<i;r+=1)(e||this._isParent&&"transform"===this.dynamicProperties[r].propType)&&(this.dynamicProperties[r].getValue(),this.dynamicProperties[r]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&this.dynamicProperties.push(t)}},TransformElement.prototype={initTransform:function(){this.finalTransform={mProp:this.data.ks?TransformPropertyFactory.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_opMdf:!1,mat:new Matrix},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var t,e=this.finalTransform.mat,r=0,i=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;r<i;){if(this.hierarchy[r].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}r+=1}if(this.finalTransform._matMdf)for(t=this.finalTransform.mProp.v.props,e.cloneFromProps(t),r=0;r<i;r+=1)t=this.hierarchy[r].finalTransform.mProp.v.props,e.transform(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}},globalToLocal:function(t){var e=[];e.push(this.finalTransform);for(var r,i=!0,s=this.comp;i;)s.finalTransform?(s.data.hasMask&&e.splice(0,0,s.finalTransform),s=s.comp):i=!1;var a,n=e.length;for(r=0;r<n;r+=1)a=e[r].mat.applyToPointArray(0,0,0),t=[t[0]-a[0],t[1]-a[1],0];return t},mHelper:new Matrix},RenderableElement.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(t){-1===this.renderableComponents.indexOf(t)&&this.renderableComponents.push(t)},removeRenderableComponent:function(t){-1!==this.renderableComponents.indexOf(t)&&this.renderableComponents.splice(this.renderableComponents.indexOf(t),1)},prepareRenderableFrame:function(t){this.checkLayerLimits(t)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?!0!==this.isInRange&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):!1!==this.isInRange&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var t,e=this.renderableComponents.length;for(t=0;t<e;t+=1)this.renderableComponents[t].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return 5===this.data.ty?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}},extendPrototype([RenderableElement,createProxyFunction({initElement:function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){this.hidden||this.isInRange&&!this.isTransparent||((this.baseElement||this.layerElement).style.display="none",this.hidden=!0)},show:function(){this.isInRange&&!this.isTransparent&&(this.data.hd||((this.baseElement||this.layerElement).style.display="block"),this.hidden=!1,this._isFirstFrame=!0)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}})],RenderableDOMElement),SVGStyleData.prototype.reset=function(){this.d="",this._mdf=!1},SVGShapeData.prototype.setAsAnimated=function(){this._isAnimated=!0},extendPrototype([DynamicPropertyContainer],SVGStrokeStyleData),extendPrototype([DynamicPropertyContainer],SVGFillStyleData),SVGGradientFillStyleData.prototype.initGradientData=function(t,e,r){this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.s=PropertyFactory.getProp(t,e.s,1,null,this),this.e=PropertyFactory.getProp(t,e.e,1,null,this),this.h=PropertyFactory.getProp(t,e.h||{k:0},0,.01,this),this.a=PropertyFactory.getProp(t,e.a||{k:0},0,degToRads,this),this.g=new GradientProperty(t,e.g,this),this.style=r,this.stops=[],this.setGradientData(r.pElem,e),this.setGradientOpacity(e,r),this._isAnimated=!!this._isAnimated},SVGGradientFillStyleData.prototype.setGradientData=function(t,e){var r=createElementID(),i=createNS(1===e.t?"linearGradient":"radialGradient");i.setAttribute("id",r),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse");var s,a,n,o=[];for(n=4*e.g.p,a=0;a<n;a+=4)s=createNS("stop"),i.appendChild(s),o.push(s);t.setAttribute("gf"===e.ty?"fill":"stroke","url("+locationHref+"#"+r+")"),this.gf=i,this.cst=o},SVGGradientFillStyleData.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var r,i,s,a=createNS("mask"),n=createNS("path");a.appendChild(n);var o=createElementID(),h=createElementID();a.setAttribute("id",h);var l=createNS(1===t.t?"linearGradient":"radialGradient");l.setAttribute("id",o),l.setAttribute("spreadMethod","pad"),l.setAttribute("gradientUnits","userSpaceOnUse"),s=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var p=this.stops;for(i=4*t.g.p;i<s;i+=2)(r=createNS("stop")).setAttribute("stop-color","rgb(255,255,255)"),l.appendChild(r),p.push(r);n.setAttribute("gf"===t.ty?"fill":"stroke","url("+locationHref+"#"+o+")"),"gs"===t.ty&&(n.setAttribute("stroke-linecap",lineCapEnum[t.lc||2]),n.setAttribute("stroke-linejoin",lineJoinEnum[t.lj||2]),1===t.lj&&n.setAttribute("stroke-miterlimit",t.ml)),this.of=l,this.ms=a,this.ost=p,this.maskId=h,e.msElem=n}},extendPrototype([DynamicPropertyContainer],SVGGradientFillStyleData),extendPrototype([SVGGradientFillStyleData,DynamicPropertyContainer],SVGGradientStrokeStyleData);var SVGElementsRenderer=function(){var t=new Matrix,e=new Matrix;function r(t,e,r){(r||e.transform.op._mdf)&&e.transform.container.setAttribute("opacity",e.transform.op.v),(r||e.transform.mProps._mdf)&&e.transform.container.setAttribute("transform",e.transform.mProps.v.to2dCSS())}function i(r,i,s){var a,n,o,h,l,p,c,f,d,m,u,y=i.styles.length,g=i.lvl;for(p=0;p<y;p+=1){if(h=i.sh._mdf||s,i.styles[p].lvl<g){for(f=e.reset(),m=g-i.styles[p].lvl,u=i.transformers.length-1;!h&&m>0;)h=i.transformers[u].mProps._mdf||h,m-=1,u-=1;if(h)for(m=g-i.styles[p].lvl,u=i.transformers.length-1;m>0;)d=i.transformers[u].mProps.v.props,f.transform(d[0],d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8],d[9],d[10],d[11],d[12],d[13],d[14],d[15]),m-=1,u-=1}else f=t;if(n=(c=i.sh.paths)._length,h){for(o="",a=0;a<n;a+=1)(l=c.shapes[a])&&l._length&&(o+=buildShapeString(l,l._length,l.c,f));i.caches[p]=o}else o=i.caches[p];i.styles[p].d+=!0===r.hd?"":o,i.styles[p]._mdf=h||i.styles[p]._mdf}}function s(t,e,r){var i=e.style;(e.c._mdf||r)&&i.pElem.setAttribute("fill","rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("fill-opacity",e.o.v)}function a(t,e,r){n(t,e,r),o(0,e,r)}function n(t,e,r){var i,s,a,n,o,h=e.gf,l=e.g._hasOpacity,p=e.s.v,c=e.e.v;if(e.o._mdf||r){var f="gf"===t.ty?"fill-opacity":"stroke-opacity";e.style.pElem.setAttribute(f,e.o.v)}if(e.s._mdf||r){var d=1===t.t?"x1":"cx",m="x1"===d?"y1":"cy";h.setAttribute(d,p[0]),h.setAttribute(m,p[1]),l&&!e.g._collapsable&&(e.of.setAttribute(d,p[0]),e.of.setAttribute(m,p[1]))}if(e.g._cmdf||r){i=e.cst;var u=e.g.c;for(a=i.length,s=0;s<a;s+=1)(n=i[s]).setAttribute("offset",u[4*s]+"%"),n.setAttribute("stop-color","rgb("+u[4*s+1]+","+u[4*s+2]+","+u[4*s+3]+")")}if(l&&(e.g._omdf||r)){var y=e.g.o;for(a=(i=e.g._collapsable?e.cst:e.ost).length,s=0;s<a;s+=1)n=i[s],e.g._collapsable||n.setAttribute("offset",y[2*s]+"%"),n.setAttribute("stop-opacity",y[2*s+1])}if(1===t.t)(e.e._mdf||r)&&(h.setAttribute("x2",c[0]),h.setAttribute("y2",c[1]),l&&!e.g._collapsable&&(e.of.setAttribute("x2",c[0]),e.of.setAttribute("y2",c[1])));else if((e.s._mdf||e.e._mdf||r)&&(o=Math.sqrt(Math.pow(p[0]-c[0],2)+Math.pow(p[1]-c[1],2)),h.setAttribute("r",o),l&&!e.g._collapsable&&e.of.setAttribute("r",o)),e.e._mdf||e.h._mdf||e.a._mdf||r){o||(o=Math.sqrt(Math.pow(p[0]-c[0],2)+Math.pow(p[1]-c[1],2)));var g=Math.atan2(c[1]-p[1],c[0]-p[0]),v=e.h.v;v>=1?v=.99:v<=-1&&(v=-.99);var b=o*v,P=Math.cos(g+e.a.v)*b+p[0],_=Math.sin(g+e.a.v)*b+p[1];h.setAttribute("fx",P),h.setAttribute("fy",_),l&&!e.g._collapsable&&(e.of.setAttribute("fx",P),e.of.setAttribute("fy",_))}}function o(t,e,r){var i=e.style,s=e.d;s&&(s._mdf||r)&&s.dashStr&&(i.pElem.setAttribute("stroke-dasharray",s.dashStr),i.pElem.setAttribute("stroke-dashoffset",s.dashoffset[0])),e.c&&(e.c._mdf||r)&&i.pElem.setAttribute("stroke","rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("stroke-opacity",e.o.v),(e.w._mdf||r)&&(i.pElem.setAttribute("stroke-width",e.w.v),i.msElem&&i.msElem.setAttribute("stroke-width",e.w.v))}return{createRenderFunction:function(t){switch(t.ty){case"fl":return s;case"gf":return n;case"gs":return a;case"st":return o;case"sh":case"el":case"rc":case"sr":return i;case"tr":return r;default:return null}}}}();function ShapeTransformManager(){this.sequences={},this.sequenceList=[],this.transform_key_count=0}function CVShapeData(t,e,r,i){this.styledShapes=[],this.tr=[0,0,0,0,0,0];var s,a=4;"rc"===e.ty?a=5:"el"===e.ty?a=6:"sr"===e.ty&&(a=7),this.sh=ShapePropertyFactory.getShapeProp(t,e,a,t);var n,o=r.length;for(s=0;s<o;s+=1)r[s].closed||(n={transforms:i.addTransformSequence(r[s].transforms),trNodes:[]},this.styledShapes.push(n),r[s].elements.push(n))}function BaseElement(){}function NullElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initFrame(),this.initTransform(t,e,r),this.initHierarchy()}function SVGBaseElement(){}function IShapeElement(){}function ITextElement(){}function ICompElement(){}function IImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,r),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}function ISolidElement(t,e,r){this.initElement(t,e,r)}function AudioElement(t,e,r){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,r),this._isPlaying=!1,this._canPlay=!1;var i=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(i),this._currentTime=0,this.globalData.audioController.addAudio(this),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function FootageElement(t,e,r){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.footageData=e.imageLoader.getAsset(this.assetData),this.initBaseData(t,e,r)}function SVGCompElement(t,e,r){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function SVGTextLottieElement(t,e,r){this.textSpans=[],this.renderType="svg",this.initElement(t,e,r)}function SVGShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,r),this.prevViewData=[]}function SVGTintFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");if(r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),r.setAttribute("result","f1"),t.appendChild(r),(r=createNS("feColorMatrix")).setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),r.setAttribute("result","f2"),t.appendChild(r),this.matrixFilter=r,100!==e.effectElements[2].p.v||e.effectElements[2].p.k){var i,s=createNS("feMerge");t.appendChild(s),(i=createNS("feMergeNode")).setAttribute("in","SourceGraphic"),s.appendChild(i),(i=createNS("feMergeNode")).setAttribute("in","f2"),s.appendChild(i)}}function SVGFillFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),t.appendChild(r),this.matrixFilter=r}function SVGGaussianBlurEffect(t,e){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","300%"),t.setAttribute("height","300%"),this.filterManager=e;var r=createNS("feGaussianBlur");t.appendChild(r),this.feGaussianBlur=r}function SVGStrokeEffect(t,e){this.initialized=!1,this.filterManager=e,this.elem=t,this.paths=[]}function SVGTritoneFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),r.setAttribute("result","f1"),t.appendChild(r);var i=createNS("feComponentTransfer");i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.matrixFilter=i;var s=createNS("feFuncR");s.setAttribute("type","table"),i.appendChild(s),this.feFuncR=s;var a=createNS("feFuncG");a.setAttribute("type","table"),i.appendChild(a),this.feFuncG=a;var n=createNS("feFuncB");n.setAttribute("type","table"),i.appendChild(n),this.feFuncB=n}function SVGProLevelsFilter(t,e){this.filterManager=e;var r=this.filterManager.effectElements,i=createNS("feComponentTransfer");(r[10].p.k||0!==r[10].p.v||r[11].p.k||1!==r[11].p.v||r[12].p.k||1!==r[12].p.v||r[13].p.k||0!==r[13].p.v||r[14].p.k||1!==r[14].p.v)&&(this.feFuncR=this.createFeFunc("feFuncR",i)),(r[17].p.k||0!==r[17].p.v||r[18].p.k||1!==r[18].p.v||r[19].p.k||1!==r[19].p.v||r[20].p.k||0!==r[20].p.v||r[21].p.k||1!==r[21].p.v)&&(this.feFuncG=this.createFeFunc("feFuncG",i)),(r[24].p.k||0!==r[24].p.v||r[25].p.k||1!==r[25].p.v||r[26].p.k||1!==r[26].p.v||r[27].p.k||0!==r[27].p.v||r[28].p.k||1!==r[28].p.v)&&(this.feFuncB=this.createFeFunc("feFuncB",i)),(r[31].p.k||0!==r[31].p.v||r[32].p.k||1!==r[32].p.v||r[33].p.k||1!==r[33].p.v||r[34].p.k||0!==r[34].p.v||r[35].p.k||1!==r[35].p.v)&&(this.feFuncA=this.createFeFunc("feFuncA",i)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),i=createNS("feComponentTransfer")),(r[3].p.k||0!==r[3].p.v||r[4].p.k||1!==r[4].p.v||r[5].p.k||1!==r[5].p.v||r[6].p.k||0!==r[6].p.v||r[7].p.k||1!==r[7].p.v)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.feFuncRComposed=this.createFeFunc("feFuncR",i),this.feFuncGComposed=this.createFeFunc("feFuncG",i),this.feFuncBComposed=this.createFeFunc("feFuncB",i))}function SVGDropShadowEffect(t,e){var r=e.container.globalData.renderConfig.filterSize;t.setAttribute("x",r.x),t.setAttribute("y",r.y),t.setAttribute("width",r.width),t.setAttribute("height",r.height),this.filterManager=e;var i=createNS("feGaussianBlur");i.setAttribute("in","SourceAlpha"),i.setAttribute("result","drop_shadow_1"),i.setAttribute("stdDeviation","0"),this.feGaussianBlur=i,t.appendChild(i);var s=createNS("feOffset");s.setAttribute("dx","25"),s.setAttribute("dy","0"),s.setAttribute("in","drop_shadow_1"),s.setAttribute("result","drop_shadow_2"),this.feOffset=s,t.appendChild(s);var a=createNS("feFlood");a.setAttribute("flood-color","#00ff00"),a.setAttribute("flood-opacity","1"),a.setAttribute("result","drop_shadow_3"),this.feFlood=a,t.appendChild(a);var n=createNS("feComposite");n.setAttribute("in","drop_shadow_3"),n.setAttribute("in2","drop_shadow_2"),n.setAttribute("operator","in"),n.setAttribute("result","drop_shadow_4"),t.appendChild(n);var o,h=createNS("feMerge");t.appendChild(h),o=createNS("feMergeNode"),h.appendChild(o),(o=createNS("feMergeNode")).setAttribute("in","SourceGraphic"),this.feMergeNode=o,this.feMerge=h,this.originalNodeAdded=!1,h.appendChild(o)}ShapeTransformManager.prototype={addTransformSequence:function(t){var e,r=t.length,i="_";for(e=0;e<r;e+=1)i+=t[e].transform.key+"_";var s=this.sequences[i];return s||(s={transforms:[].concat(t),finalTransform:new Matrix,_mdf:!1},this.sequences[i]=s,this.sequenceList.push(s)),s},processSequence:function(t,e){for(var r,i=0,s=t.transforms.length,a=e;i<s&&!e;){if(t.transforms[i].transform.mProps._mdf){a=!0;break}i+=1}if(a)for(t.finalTransform.reset(),i=s-1;i>=0;i-=1)r=t.transforms[i].transform.mProps.v.props,t.finalTransform.transform(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15]);t._mdf=a},processSequences:function(t){var e,r=this.sequenceList.length;for(e=0;e<r;e+=1)this.processSequence(this.sequenceList[e],t)},getNewKey:function(){return this.transform_key_count+=1,"_"+this.transform_key_count}},CVShapeData.prototype.setAsAnimated=SVGShapeData.prototype.setAsAnimated,BaseElement.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;t<e;){if("n"!==this.data.masksProperties[t].mode&&!1!==this.data.masksProperties[t].cl)return!0;t+=1}return!1},initExpressions:function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var t=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(t),0===this.data.ty||this.data.xt?this.compInterface=CompExpressionInterface(this):4===this.data.ty?(this.layerInterface.shapeInterface=ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):5===this.data.ty&&(this.layerInterface.textInterface=TextExpressionInterface(this),this.layerInterface.text=this.layerInterface.textInterface)},setBlendMode:function(){var t=getBlendMode(this.data.bm);(this.baseElement||this.layerElement).style["mix-blend-mode"]=t},initBaseData:function(t,e,r){this.globalData=e,this.comp=r,this.data=t,this.layerId=createElementID(),this.data.sr||(this.data.sr=1),this.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}},NullElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},NullElement.prototype.renderFrame=function(){},NullElement.prototype.getBaseElement=function(){return null},NullElement.prototype.destroy=function(){},NullElement.prototype.sourceRectAtTime=function(){},NullElement.prototype.hide=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement],NullElement),SVGBaseElement.prototype={initRendererElement:function(){this.layerElement=createNS("g")},createContainerElements:function(){this.matteElement=createNS("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var t,e,r,i=null;if(this.data.td){if(3==this.data.td||1==this.data.td){var s=createNS("mask");s.setAttribute("id",this.layerId),s.setAttribute("mask-type",3==this.data.td?"luminance":"alpha"),s.appendChild(this.layerElement),i=s,this.globalData.defs.appendChild(s),featureSupport.maskType||1!=this.data.td||(s.setAttribute("mask-type","luminance"),t=createElementID(),e=filtersFactory.createFilter(t),this.globalData.defs.appendChild(e),e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),(r=createNS("g")).appendChild(this.layerElement),i=r,s.appendChild(r),r.setAttribute("filter","url("+locationHref+"#"+t+")"))}else if(2==this.data.td){var a=createNS("mask");a.setAttribute("id",this.layerId),a.setAttribute("mask-type","alpha");var n=createNS("g");a.appendChild(n),t=createElementID(),e=filtersFactory.createFilter(t);var o=createNS("feComponentTransfer");o.setAttribute("in","SourceGraphic"),e.appendChild(o);var h=createNS("feFuncA");h.setAttribute("type","table"),h.setAttribute("tableValues","1.0 0.0"),o.appendChild(h),this.globalData.defs.appendChild(e);var l=createNS("rect");l.setAttribute("width",this.comp.data.w),l.setAttribute("height",this.comp.data.h),l.setAttribute("x","0"),l.setAttribute("y","0"),l.setAttribute("fill","#ffffff"),l.setAttribute("opacity","0"),n.setAttribute("filter","url("+locationHref+"#"+t+")"),n.appendChild(l),n.appendChild(this.layerElement),i=n,featureSupport.maskType||(a.setAttribute("mask-type","luminance"),e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),r=createNS("g"),n.appendChild(l),r.appendChild(this.layerElement),i=r,n.appendChild(r)),this.globalData.defs.appendChild(a)}}else this.data.tt?(this.matteElement.appendChild(this.layerElement),i=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0===this.data.ty&&!this.data.hd){var p=createNS("clipPath"),c=createNS("path");c.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var f=createElementID();if(p.setAttribute("id",f),p.appendChild(c),this.globalData.defs.appendChild(p),this.checkMasks()){var d=createNS("g");d.setAttribute("clip-path","url("+locationHref+"#"+f+")"),d.appendChild(this.layerElement),this.transformedElement=d,i?i.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+f+")")}0!==this.data.bm&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.mat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.mProp.o.v)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData),this.renderableEffectsManager=new SVGEffects(this)},setMatte:function(t){this.matteElement&&this.matteElement.setAttribute("mask","url("+locationHref+"#"+t+")")}},IShapeElement.prototype={addShapeToModifiers:function(t){var e,r=this.shapeModifiers.length;for(e=0;e<r;e+=1)this.shapeModifiers[e].addShape(t)},isShapeInAnimatedModifiers:function(t){for(var e=this.shapeModifiers.length;0<e;)if(this.shapeModifiers[0].isAnimatedWithShape(t))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;t<e;t+=1)this.shapes[t].sh.reset();for(t=(e=this.shapeModifiers.length)-1;t>=0&&!this.shapeModifiers[t].processShapes(this._isFirstFrame);t-=1);}},searchProcessedElement:function(t){for(var e=this.processedElements,r=0,i=e.length;r<i;){if(e[r].elem===t)return e[r].pos;r+=1}return 0},addProcessedElement:function(t,e){for(var r=this.processedElements,i=r.length;i;)if(r[i-=1].elem===t)return void(r[i].pos=e);r.push(new ProcessedElement(t,e))},prepareFrame:function(t){this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)}},ITextElement.prototype.initElement=function(t,e,r){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,r),this.textProperty=new TextProperty(this,t.t,this.dynamicProperties),this.textAnimator=new TextAnimatorProperty(t.t,this.renderType,this),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},ITextElement.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)},ITextElement.prototype.createPathShape=function(t,e){var r,i,s=e.length,a="";for(r=0;r<s;r+=1)i=e[r].ks.k,a+=buildShapeString(i,i.i.length,!0,t);return a},ITextElement.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},ITextElement.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},ITextElement.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},ITextElement.prototype.applyTextPropertiesToMatrix=function(t,e,r,i,s){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r])/2,0,0)}e.translate(i,s,0)},ITextElement.prototype.buildColor=function(t){return"rgb("+Math.round(255*t[0])+","+Math.round(255*t[1])+","+Math.round(255*t[2])+")"},ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement,RenderableDOMElement],ICompElement),ICompElement.prototype.initElement=function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),!this.data.xt&&e.progressiveLoad||this.buildAllItems(),this.hide()},ICompElement.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.isInRange||this.data.xt){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var r,i=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),r=i-1;r>=0;r-=1)(this.completeLayers||this.elements[r])&&(this.elements[r].prepareFrame(this.renderedFrame-this.layers[r].st),this.elements[r]._mdf&&(this._mdf=!0))}},ICompElement.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ICompElement.prototype.setElements=function(t){this.elements=t},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ICompElement.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()},extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],IImageElement),IImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=createNS("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},IImageElement.prototype.sourceRectAtTime=function(){return this.sourceRect},extendPrototype([IImageElement],ISolidElement),ISolidElement.prototype.createContent=function(){var t=createNS("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)},AudioElement.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}},extendPrototype([RenderableElement,BaseElement,FrameElement],AudioElement),AudioElement.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},AudioElement.prototype.show=function(){},AudioElement.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},AudioElement.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},AudioElement.prototype.resume=function(){this._canPlay=!0},AudioElement.prototype.setRate=function(t){this.audio.rate(t)},AudioElement.prototype.volume=function(t){this.audio.volume(t)},AudioElement.prototype.getBaseElement=function(){return null},AudioElement.prototype.destroy=function(){},AudioElement.prototype.sourceRectAtTime=function(){},AudioElement.prototype.initExpressions=function(){},FootageElement.prototype.prepareFrame=function(){},extendPrototype([RenderableElement,BaseElement,FrameElement],FootageElement),FootageElement.prototype.getBaseElement=function(){return null},FootageElement.prototype.renderFrame=function(){},FootageElement.prototype.destroy=function(){},FootageElement.prototype.initExpressions=function(){this.layerInterface=FootageInterface(this)},FootageElement.prototype.getFootageData=function(){return this.footageData},extendPrototype([SVGRenderer,ICompElement,SVGBaseElement],SVGCompElement),extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],SVGTextLottieElement),SVGTextLottieElement.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=createNS("text"))},SVGTextLottieElement.prototype.buildTextContents=function(t){for(var e=0,r=t.length,i=[],s="";e<r;)t[e]===String.fromCharCode(13)||t[e]===String.fromCharCode(3)?(i.push(s),s=""):s+=t[e],e+=1;return i.push(s),i},SVGTextLottieElement.prototype.buildNewText=function(){var t,e,r=this.textProperty.currentData;this.renderedLetters=createSizedArray(r?r.l.length:0),r.fc?this.layerElement.setAttribute("fill",this.buildColor(r.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),r.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(r.sc)),this.layerElement.setAttribute("stroke-width",r.sw)),this.layerElement.setAttribute("font-size",r.finalSize);var i=this.globalData.fontManager.getFontByName(r.f);if(i.fClass)this.layerElement.setAttribute("class",i.fClass);else{this.layerElement.setAttribute("font-family",i.fFamily);var s=r.fWeight,a=r.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",s)}this.layerElement.setAttribute("aria-label",r.t);var n,o=r.l||[],h=!!this.globalData.fontManager.chars;e=o.length;var l,p=this.mHelper,c="",f=this.data.singleShape,d=0,m=0,u=!0,y=.001*r.tr*r.finalSize;if(!f||h||r.sz){var g,v,b=this.textSpans.length;for(t=0;t<e;t+=1)h&&f&&0!==t||(n=b>t?this.textSpans[t]:createNS(h?"path":"text"),b<=t&&(n.setAttribute("stroke-linecap","butt"),n.setAttribute("stroke-linejoin","round"),n.setAttribute("stroke-miterlimit","4"),this.textSpans[t]=n,this.layerElement.appendChild(n)),n.style.display="inherit"),p.reset(),p.scale(r.finalSize/100,r.finalSize/100),f&&(o[t].n&&(d=-y,m+=r.yOffset,m+=u?1:0,u=!1),this.applyTextPropertiesToMatrix(r,p,o[t].line,d,m),d+=o[t].l||0,d+=y),h?(l=(g=(v=this.globalData.fontManager.getCharData(r.finalText[t],i.fStyle,this.globalData.fontManager.getFontByName(r.f).fFamily))&&v.data||{}).shapes?g.shapes[0].it:[],f?c+=this.createPathShape(p,l):n.setAttribute("d",this.createPathShape(p,l))):(f&&n.setAttribute("transform","translate("+p.props[12]+","+p.props[13]+")"),n.textContent=o[t].val,n.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"));f&&n&&n.setAttribute("d",c)}else{var P=this.textContainer,_="start";switch(r.j){case 1:_="end";break;case 2:_="middle";break;default:_="start"}P.setAttribute("text-anchor",_),P.setAttribute("letter-spacing",y);var E=this.buildTextContents(r.finalText);for(e=E.length,m=r.ps?r.ps[1]+r.ascent:0,t=0;t<e;t+=1)(n=this.textSpans[t]||createNS("tspan")).textContent=E[t],n.setAttribute("x",0),n.setAttribute("y",m),n.style.display="inherit",P.appendChild(n),this.textSpans[t]=n,m+=r.finalLineHeight;this.layerElement.appendChild(P)}for(;t<this.textSpans.length;)this.textSpans[t].style.display="none",t+=1;this._sizeChanged=!0},SVGTextLottieElement.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},SVGTextLottieElement.prototype.renderInnerContent=function(){if(!this.data.singleShape&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){var t,e;this._sizeChanged=!0;var r,i,s=this.textAnimator.renderedLetters,a=this.textProperty.currentData.l;for(e=a.length,t=0;t<e;t+=1)a[t].n||(r=s[t],i=this.textSpans[t],r._mdf.m&&i.setAttribute("transform",r.m),r._mdf.o&&i.setAttribute("opacity",r.o),r._mdf.sw&&i.setAttribute("stroke-width",r.sw),r._mdf.sc&&i.setAttribute("stroke",r.sc),r._mdf.fc&&i.setAttribute("fill",r.fc))}},extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement),SVGShapeElement.prototype.initSecondaryElement=function(){},SVGShapeElement.prototype.identityMatrix=new Matrix,SVGShapeElement.prototype.buildExpressionInterface=function(){},SVGShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},SVGShapeElement.prototype.filterUniqueShapes=function(){var t,e,r,i,s=this.shapes.length,a=this.stylesList.length,n=[],o=!1;for(r=0;r<a;r+=1){for(i=this.stylesList[r],o=!1,n.length=0,t=0;t<s;t+=1)-1!==(e=this.shapes[t]).styles.indexOf(i)&&(n.push(e),o=e._isAnimated||o);n.length>1&&o&&this.setShapesAsAnimated(n)}},SVGShapeElement.prototype.setShapesAsAnimated=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].setAsAnimated()},SVGShapeElement.prototype.createStyleElement=function(t,e){var r,i=new SVGStyleData(t,e),s=i.pElem;return"st"===t.ty?r=new SVGStrokeStyleData(this,t,i):"fl"===t.ty?r=new SVGFillStyleData(this,t,i):"gf"!==t.ty&&"gs"!==t.ty||(r=new("gf"===t.ty?SVGGradientFillStyleData:SVGGradientStrokeStyleData)(this,t,i),this.globalData.defs.appendChild(r.gf),r.maskId&&(this.globalData.defs.appendChild(r.ms),this.globalData.defs.appendChild(r.of),s.setAttribute("mask","url("+locationHref+"#"+r.maskId+")"))),"st"!==t.ty&&"gs"!==t.ty||(s.setAttribute("stroke-linecap",lineCapEnum[t.lc||2]),s.setAttribute("stroke-linejoin",lineJoinEnum[t.lj||2]),s.setAttribute("fill-opacity","0"),1===t.lj&&s.setAttribute("stroke-miterlimit",t.ml)),2===t.r&&s.setAttribute("fill-rule","evenodd"),t.ln&&s.setAttribute("id",t.ln),t.cl&&s.setAttribute("class",t.cl),t.bm&&(s.style["mix-blend-mode"]=getBlendMode(t.bm)),this.stylesList.push(i),this.addToAnimatedContents(t,r),r},SVGShapeElement.prototype.createGroupElement=function(t){var e=new ShapeGroupData;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=getBlendMode(t.bm)),e},SVGShapeElement.prototype.createTransformElement=function(t,e){var r=TransformPropertyFactory.getTransformProperty(this,t,this),i=new SVGTransformData(r,r.o,e);return this.addToAnimatedContents(t,i),i},SVGShapeElement.prototype.createShapeElement=function(t,e,r){var i=4;"rc"===t.ty?i=5:"el"===t.ty?i=6:"sr"===t.ty&&(i=7);var s=new SVGShapeData(e,r,ShapePropertyFactory.getShapeProp(this,t,i,this));return this.shapes.push(s),this.addShapeToModifiers(s),this.addToAnimatedContents(t,s),s},SVGShapeElement.prototype.addToAnimatedContents=function(t,e){for(var r=0,i=this.animatedContents.length;r<i;){if(this.animatedContents[r].element===e)return;r+=1}this.animatedContents.push({fn:SVGElementsRenderer.createRenderFunction(t),element:e,data:t})},SVGShapeElement.prototype.setElementStyles=function(t){var e,r=t.styles,i=this.stylesList.length;for(e=0;e<i;e+=1)this.stylesList[e].closed||r.push(this.stylesList[e])},SVGShapeElement.prototype.reloadShapes=function(){var t;this._isFirstFrame=!0;var e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},SVGShapeElement.prototype.searchShapes=function(t,e,r,i,s,a,n){var o,h,l,p,c,f,d=[].concat(a),m=t.length-1,u=[],y=[];for(o=m;o>=0;o-=1){if((f=this.searchProcessedElement(t[o]))?e[o]=r[f-1]:t[o]._render=n,"fl"===t[o].ty||"st"===t[o].ty||"gf"===t[o].ty||"gs"===t[o].ty)f?e[o].style.closed=!1:e[o]=this.createStyleElement(t[o],s),t[o]._render&&e[o].style.pElem.parentNode!==i&&i.appendChild(e[o].style.pElem),u.push(e[o].style);else if("gr"===t[o].ty){if(f)for(l=e[o].it.length,h=0;h<l;h+=1)e[o].prevViewData[h]=e[o].it[h];else e[o]=this.createGroupElement(t[o]);this.searchShapes(t[o].it,e[o].it,e[o].prevViewData,e[o].gr,s+1,d,n),t[o]._render&&e[o].gr.parentNode!==i&&i.appendChild(e[o].gr)}else"tr"===t[o].ty?(f||(e[o]=this.createTransformElement(t[o],i)),p=e[o].transform,d.push(p)):"sh"===t[o].ty||"rc"===t[o].ty||"el"===t[o].ty||"sr"===t[o].ty?(f||(e[o]=this.createShapeElement(t[o],d,s)),this.setElementStyles(e[o])):"tm"===t[o].ty||"rd"===t[o].ty||"ms"===t[o].ty||"pb"===t[o].ty?(f?(c=e[o]).closed=!1:((c=ShapeModifiers.getModifier(t[o].ty)).init(this,t[o]),e[o]=c,this.shapeModifiers.push(c)),y.push(c)):"rp"===t[o].ty&&(f?(c=e[o]).closed=!0:(c=ShapeModifiers.getModifier(t[o].ty),e[o]=c,c.init(this,t,o,e),this.shapeModifiers.push(c),n=!1),y.push(c));this.addProcessedElement(t[o],o+1)}for(m=u.length,o=0;o<m;o+=1)u[o].closed=!0;for(m=y.length,o=0;o<m;o+=1)y[o].closed=!0},SVGShapeElement.prototype.renderInnerContent=function(){var t;this.renderModifiers();var e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},SVGShapeElement.prototype.renderShape=function(){var t,e,r=this.animatedContents.length;for(t=0;t<r;t+=1)e=this.animatedContents[t],(this._isFirstFrame||e.element._isAnimated)&&!0!==e.data&&e.fn(e.data,e.element,this._isFirstFrame)},SVGShapeElement.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null},SVGTintFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute("values",r[0]-e[0]+" 0 0 0 "+e[0]+" "+(r[1]-e[1])+" 0 0 0 "+e[1]+" "+(r[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 "+i+" 0")}},SVGFillFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[2].p.v,r=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+r+" 0")}},SVGGaussianBlurEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=.3*this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=3==r?0:e,s=2==r?0:e;this.feGaussianBlur.setAttribute("stdDeviation",i+" "+s);var a=1==this.filterManager.effectElements[2].p.v?"wrap":"duplicate";this.feGaussianBlur.setAttribute("edgeMode",a)}},SVGStrokeEffect.prototype.initialize=function(){var t,e,r,i,s=this.elem.layerElement.children||this.elem.layerElement.childNodes;for(1===this.filterManager.effectElements[1].p.v?(i=this.elem.maskManager.masksProperties.length,r=0):i=1+(r=this.filterManager.effectElements[0].p.v-1),(e=createNS("g")).setAttribute("fill","none"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-dashoffset",1);r<i;r+=1)t=createNS("path"),e.appendChild(t),this.paths.push({p:t,m:r});if(3===this.filterManager.effectElements[10].p.v){var a=createNS("mask"),n=createElementID();a.setAttribute("id",n),a.setAttribute("mask-type","alpha"),a.appendChild(e),this.elem.globalData.defs.appendChild(a);var o=createNS("g");for(o.setAttribute("mask","url("+locationHref+"#"+n+")");s[0];)o.appendChild(s[0]);this.elem.layerElement.appendChild(o),this.masker=a,e.setAttribute("stroke","#fff")}else if(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v){if(2===this.filterManager.effectElements[10].p.v)for(s=this.elem.layerElement.children||this.elem.layerElement.childNodes;s.length;)this.elem.layerElement.removeChild(s[0]);this.elem.layerElement.appendChild(e),this.elem.layerElement.removeAttribute("mask"),e.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=e},SVGStrokeEffect.prototype.renderFrame=function(t){var e;this.initialized||this.initialize();var r,i,s=this.paths.length;for(e=0;e<s;e+=1)if(-1!==this.paths[e].m&&(r=this.elem.maskManager.viewData[this.paths[e].m],i=this.paths[e].p,(t||this.filterManager._mdf||r.prop._mdf)&&i.setAttribute("d",r.lastPath),t||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||r.prop._mdf)){var a;if(0!==this.filterManager.effectElements[7].p.v||100!==this.filterManager.effectElements[8].p.v){var n=.01*Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v),o=.01*Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v),h=i.getTotalLength();a="0 0 0 "+h*n+" ";var l,p=h*(o-n),c=1+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01,f=Math.floor(p/c);for(l=0;l<f;l+=1)a+="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01+" ";a+="0 "+10*h+" 0 0"}else a="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01;i.setAttribute("stroke-dasharray",a)}if((t||this.filterManager.effectElements[4].p._mdf)&&this.pathMasker.setAttribute("stroke-width",2*this.filterManager.effectElements[4].p.v),(t||this.filterManager.effectElements[6].p._mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v)&&(t||this.filterManager.effectElements[3].p._mdf)){var d=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bmFloor(255*d[0])+","+bmFloor(255*d[1])+","+bmFloor(255*d[2])+")")}},SVGTritoneFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v,s=i[0]+" "+r[0]+" "+e[0],a=i[1]+" "+r[1]+" "+e[1],n=i[2]+" "+r[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",s),this.feFuncG.setAttribute("tableValues",a),this.feFuncB.setAttribute("tableValues",n)}},SVGProLevelsFilter.prototype.createFeFunc=function(t,e){var r=createNS(t);return r.setAttribute("type","table"),e.appendChild(r),r},SVGProLevelsFilter.prototype.getTableValue=function(t,e,r,i,s){for(var a,n,o=0,h=Math.min(t,e),l=Math.max(t,e),p=Array.call(null,{length:256}),c=0,f=s-i,d=e-t;o<=256;)n=(a=o/256)<=h?d<0?s:i:a>=l?d<0?i:s:i+f*Math.pow((a-t)/d,1/r),p[c]=n,c+=1,o+=256/255;return p.join(" ")},SVGProLevelsFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e,r=this.filterManager.effectElements;this.feFuncRComposed&&(t||r[3].p._mdf||r[4].p._mdf||r[5].p._mdf||r[6].p._mdf||r[7].p._mdf)&&(e=this.getTableValue(r[3].p.v,r[4].p.v,r[5].p.v,r[6].p.v,r[7].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||r[10].p._mdf||r[11].p._mdf||r[12].p._mdf||r[13].p._mdf||r[14].p._mdf)&&(e=this.getTableValue(r[10].p.v,r[11].p.v,r[12].p.v,r[13].p.v,r[14].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||r[17].p._mdf||r[18].p._mdf||r[19].p._mdf||r[20].p._mdf||r[21].p._mdf)&&(e=this.getTableValue(r[17].p.v,r[18].p.v,r[19].p.v,r[20].p.v,r[21].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||r[24].p._mdf||r[25].p._mdf||r[26].p._mdf||r[27].p._mdf||r[28].p._mdf)&&(e=this.getTableValue(r[24].p.v,r[25].p.v,r[26].p.v,r[27].p.v,r[28].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||r[31].p._mdf||r[32].p._mdf||r[33].p._mdf||r[34].p._mdf||r[35].p._mdf)&&(e=this.getTableValue(r[31].p.v,r[32].p.v,r[33].p.v,r[34].p.v,r[35].p.v),this.feFuncA.setAttribute("tableValues",e))}},SVGDropShadowEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){if((t||this.filterManager.effectElements[4].p._mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),t||this.filterManager.effectElements[0].p._mdf){var e=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",rgbToHex(Math.round(255*e[0]),Math.round(255*e[1]),Math.round(255*e[2])))}if((t||this.filterManager.effectElements[1].p._mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),t||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var r=this.filterManager.effectElements[3].p.v,i=(this.filterManager.effectElements[2].p.v-90)*degToRads,s=r*Math.cos(i),a=r*Math.sin(i);this.feOffset.setAttribute("dx",s),this.feOffset.setAttribute("dy",a)}}};var _svgMatteSymbols=[];function SVGMatte3Effect(t,e,r){this.initialized=!1,this.filterManager=e,this.filterElem=t,this.elem=r,r.matteElement=createNS("g"),r.matteElement.appendChild(r.layerElement),r.matteElement.appendChild(r.transformedElement),r.baseElement=r.matteElement}function SVGEffects(t){var e,r,i=t.data.ef?t.data.ef.length:0,s=createElementID(),a=filtersFactory.createFilter(s,!0),n=0;for(this.filters=[],e=0;e<i;e+=1)r=null,20===t.data.ef[e].ty?(n+=1,r=new SVGTintFilter(a,t.effectsManager.effectElements[e])):21===t.data.ef[e].ty?(n+=1,r=new SVGFillFilter(a,t.effectsManager.effectElements[e])):22===t.data.ef[e].ty?r=new SVGStrokeEffect(t,t.effectsManager.effectElements[e]):23===t.data.ef[e].ty?(n+=1,r=new SVGTritoneFilter(a,t.effectsManager.effectElements[e])):24===t.data.ef[e].ty?(n+=1,r=new SVGProLevelsFilter(a,t.effectsManager.effectElements[e])):25===t.data.ef[e].ty?(n+=1,r=new SVGDropShadowEffect(a,t.effectsManager.effectElements[e])):28===t.data.ef[e].ty?r=new SVGMatte3Effect(a,t.effectsManager.effectElements[e],t):29===t.data.ef[e].ty&&(n+=1,r=new SVGGaussianBlurEffect(a,t.effectsManager.effectElements[e])),r&&this.filters.push(r);n&&(t.globalData.defs.appendChild(a),t.layerElement.setAttribute("filter","url("+locationHref+"#"+s+")")),this.filters.length&&t.addRenderableComponent(this)}function CVContextData(){var t;for(this.saved=[],this.cArrPos=0,this.cTr=new Matrix,this.cO=1,this.savedOp=createTypedArray("float32",15),t=0;t<15;t+=1)this.saved[t]=createTypedArray("float32",16);this._length=15}function CVBaseElement(){}function CVImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.img=e.imageLoader.getAsset(this.assetData),this.initElement(t,e,r)}function CVCompElement(t,e,r){this.completeLayers=!1,this.layers=t.layers,this.pendingElements=[],this.elements=createSizedArray(this.layers.length),this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function CVMaskElement(t,e){var r;this.data=t,this.element=e,this.masksProperties=this.data.masksProperties||[],this.viewData=createSizedArray(this.masksProperties.length);var i=this.masksProperties.length,s=!1;for(r=0;r<i;r+=1)"n"!==this.masksProperties[r].mode&&(s=!0),this.viewData[r]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[r],3);this.hasMasks=s,s&&this.element.addRenderableComponent(this)}function CVShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this.transformsManager=new ShapeTransformManager,this.initElement(t,e,r)}function CVSolidElement(t,e,r){this.initElement(t,e,r)}function CVTextElement(t,e,r){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this.initElement(t,e,r)}function CVEffects(){}function HBaseElement(){}function HSolidElement(t,e,r){this.initElement(t,e,r)}function HCompElement(t,e,r){this.layers=t.layers,this.supports3d=!t.hasMask,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function HShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.shapesContainer=createNS("g"),this.initElement(t,e,r),this.prevViewData=[],this.currentBBox={x:999999,y:-999999,h:0,w:0}}function HTextElement(t,e,r){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this.initElement(t,e,r)}function HImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,r)}function HCameraElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initHierarchy();var i=PropertyFactory.getProp;if(this.pe=i(this,t.pe,0,0,this),t.ks.p.s?(this.px=i(this,t.ks.p.x,1,0,this),this.py=i(this,t.ks.p.y,1,0,this),this.pz=i(this,t.ks.p.z,1,0,this)):this.p=i(this,t.ks.p,1,0,this),t.ks.a&&(this.a=i(this,t.ks.a,1,0,this)),t.ks.or.k.length&&t.ks.or.k[0].to){var s,a=t.ks.or.k.length;for(s=0;s<a;s+=1)t.ks.or.k[s].to=null,t.ks.or.k[s].ti=null}this.or=i(this,t.ks.or,1,degToRads,this),this.or.sh=!0,this.rx=i(this,t.ks.rx,0,degToRads,this),this.ry=i(this,t.ks.ry,0,degToRads,this),this.rz=i(this,t.ks.rz,0,degToRads,this),this.mat=new Matrix,this._prevMat=new Matrix,this._isFirstFrame=!0,this.finalTransform={mProp:this}}function HEffects(){}SVGMatte3Effect.prototype.findSymbol=function(t){for(var e=0,r=_svgMatteSymbols.length;e<r;){if(_svgMatteSymbols[e]===t)return _svgMatteSymbols[e];e+=1}return null},SVGMatte3Effect.prototype.replaceInParent=function(t,e){var r=t.layerElement.parentNode;if(r){for(var i,s=r.children,a=0,n=s.length;a<n&&s[a]!==t.layerElement;)a+=1;a<=n-2&&(i=s[a+1]);var o=createNS("use");o.setAttribute("href","#"+e),i?r.insertBefore(o,i):r.appendChild(o)}},SVGMatte3Effect.prototype.setElementAsMask=function(t,e){if(!this.findSymbol(e)){var r=createElementID(),i=createNS("mask");i.setAttribute("id",e.layerId),i.setAttribute("mask-type","alpha"),_svgMatteSymbols.push(e);var s=t.globalData.defs;s.appendChild(i);var a=createNS("symbol");a.setAttribute("id",r),this.replaceInParent(e,r),a.appendChild(e.layerElement),s.appendChild(a);var n=createNS("use");n.setAttribute("href","#"+r),i.appendChild(n),e.data.hd=!1,e.show()}t.setMatte(e.layerId)},SVGMatte3Effect.prototype.initialize=function(){for(var t=this.filterManager.effectElements[0].p.v,e=this.elem.comp.elements,r=0,i=e.length;r<i;)e[r]&&e[r].data.ind===t&&this.setElementAsMask(this.elem,e[r]),r+=1;this.initialized=!0},SVGMatte3Effect.prototype.renderFrame=function(){this.initialized||this.initialize()},SVGEffects.prototype.renderFrame=function(t){var e,r=this.filters.length;for(e=0;e<r;e+=1)this.filters[e].renderFrame(t)},CVContextData.prototype.duplicate=function(){var t=2*this._length,e=this.savedOp;this.savedOp=createTypedArray("float32",t),this.savedOp.set(e);var r=0;for(r=this._length;r<t;r+=1)this.saved[r]=createTypedArray("float32",16);this._length=t},CVContextData.prototype.reset=function(){this.cArrPos=0,this.cTr.reset(),this.cO=1},CVBaseElement.prototype={createElements:function(){},initRendererElement:function(){},createContainerElements:function(){this.canvasContext=this.globalData.canvasContext,this.renderableEffectsManager=new CVEffects(this)},createContent:function(){},setBlendMode:function(){var t=this.globalData;if(t.blendMode!==this.data.bm){t.blendMode=this.data.bm;var e=getBlendMode(this.data.bm);t.canvasContext.globalCompositeOperation=e}},createRenderableComponents:function(){this.maskManager=new CVMaskElement(this.data,this)},hideElement:function(){this.hidden||this.isInRange&&!this.isTransparent||(this.hidden=!0)},showElement:function(){this.isInRange&&!this.isTransparent&&(this.hidden=!1,this._isFirstFrame=!0,this.maskManager._isFirstFrame=!0)},renderFrame:function(){if(!this.hidden&&!this.data.hd){this.renderTransform(),this.renderRenderable(),this.setBlendMode();var t=0===this.data.ty;this.globalData.renderer.save(t),this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),this.renderInnerContent(),this.globalData.renderer.restore(t),this.maskManager.hasMasks&&this.globalData.renderer.restore(!0),this._isFirstFrame&&(this._isFirstFrame=!1)}},destroy:function(){this.canvasContext=null,this.data=null,this.globalData=null,this.maskManager.destroy()},mHelper:new Matrix},CVBaseElement.prototype.hide=CVBaseElement.prototype.hideElement,CVBaseElement.prototype.show=CVBaseElement.prototype.showElement,extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVImageElement),CVImageElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVImageElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVImageElement.prototype.createContent=function(){if(this.img.width&&(this.assetData.w!==this.img.width||this.assetData.h!==this.img.height)){var t=createTag("canvas");t.width=this.assetData.w,t.height=this.assetData.h;var e,r,i=t.getContext("2d"),s=this.img.width,a=this.img.height,n=s/a,o=this.assetData.w/this.assetData.h,h=this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio;n>o&&"xMidYMid slice"===h||n<o&&"xMidYMid slice"!==h?e=(r=a)*o:r=(e=s)/o,i.drawImage(this.img,(s-e)/2,(a-r)/2,e,r,0,0,this.assetData.w,this.assetData.h),this.img=t}},CVImageElement.prototype.renderInnerContent=function(){this.canvasContext.drawImage(this.img,0,0)},CVImageElement.prototype.destroy=function(){this.img=null},extendPrototype([CanvasRenderer,ICompElement,CVBaseElement],CVCompElement),CVCompElement.prototype.renderInnerContent=function(){var t,e=this.canvasContext;for(e.beginPath(),e.moveTo(0,0),e.lineTo(this.data.w,0),e.lineTo(this.data.w,this.data.h),e.lineTo(0,this.data.h),e.lineTo(0,0),e.clip(),t=this.layers.length-1;t>=0;t-=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},CVCompElement.prototype.destroy=function(){var t;for(t=this.layers.length-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy();this.layers=null,this.elements=null},CVMaskElement.prototype.renderFrame=function(){if(this.hasMasks){var t,e,r,i,s=this.element.finalTransform.mat,a=this.element.canvasContext,n=this.masksProperties.length;for(a.beginPath(),t=0;t<n;t+=1)if("n"!==this.masksProperties[t].mode){var o;this.masksProperties[t].inv&&(a.moveTo(0,0),a.lineTo(this.element.globalData.compSize.w,0),a.lineTo(this.element.globalData.compSize.w,this.element.globalData.compSize.h),a.lineTo(0,this.element.globalData.compSize.h),a.lineTo(0,0)),i=this.viewData[t].v,e=s.applyToPointArray(i.v[0][0],i.v[0][1],0),a.moveTo(e[0],e[1]);var h=i._length;for(o=1;o<h;o+=1)r=s.applyToTriplePoints(i.o[o-1],i.i[o],i.v[o]),a.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5]);r=s.applyToTriplePoints(i.o[o-1],i.i[0],i.v[0]),a.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5])}this.element.globalData.renderer.save(!0),a.clip()}},CVMaskElement.prototype.getMaskProperty=MaskElement.prototype.getMaskProperty,CVMaskElement.prototype.destroy=function(){this.element=null},extendPrototype([BaseElement,TransformElement,CVBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableElement],CVShapeElement),CVShapeElement.prototype.initElement=RenderableDOMElement.prototype.initElement,CVShapeElement.prototype.transformHelper={opacity:1,_opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[])},CVShapeElement.prototype.createStyleElement=function(t,e){var r={data:t,type:t.ty,preTransforms:this.transformsManager.addTransformSequence(e),transforms:[],elements:[],closed:!0===t.hd},i={};if("fl"===t.ty||"st"===t.ty?(i.c=PropertyFactory.getProp(this,t.c,1,255,this),i.c.k||(r.co="rgb("+bmFloor(i.c.v[0])+","+bmFloor(i.c.v[1])+","+bmFloor(i.c.v[2])+")")):"gf"!==t.ty&&"gs"!==t.ty||(i.s=PropertyFactory.getProp(this,t.s,1,null,this),i.e=PropertyFactory.getProp(this,t.e,1,null,this),i.h=PropertyFactory.getProp(this,t.h||{k:0},0,.01,this),i.a=PropertyFactory.getProp(this,t.a||{k:0},0,degToRads,this),i.g=new GradientProperty(this,t.g,this)),i.o=PropertyFactory.getProp(this,t.o,0,.01,this),"st"===t.ty||"gs"===t.ty){if(r.lc=lineCapEnum[t.lc||2],r.lj=lineJoinEnum[t.lj||2],1==t.lj&&(r.ml=t.ml),i.w=PropertyFactory.getProp(this,t.w,0,null,this),i.w.k||(r.wi=i.w.v),t.d){var s=new DashProperty(this,t.d,"canvas",this);i.d=s,i.d.k||(r.da=i.d.dashArray,r.do=i.d.dashoffset[0])}}else r.r=2===t.r?"evenodd":"nonzero";return this.stylesList.push(r),i.style=r,i},CVShapeElement.prototype.createGroupElement=function(){return{it:[],prevViewData:[]}},CVShapeElement.prototype.createTransformElement=function(t){return{transform:{opacity:1,_opMdf:!1,key:this.transformsManager.getNewKey(),op:PropertyFactory.getProp(this,t.o,0,.01,this),mProps:TransformPropertyFactory.getTransformProperty(this,t,this)}}},CVShapeElement.prototype.createShapeElement=function(t){var e=new CVShapeData(this,t,this.stylesList,this.transformsManager);return this.shapes.push(e),this.addShapeToModifiers(e),e},CVShapeElement.prototype.reloadShapes=function(){var t;this._isFirstFrame=!0;var e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[]),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame)},CVShapeElement.prototype.addTransformToStyleList=function(t){var e,r=this.stylesList.length;for(e=0;e<r;e+=1)this.stylesList[e].closed||this.stylesList[e].transforms.push(t)},CVShapeElement.prototype.removeTransformFromStyleList=function(){var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].closed||this.stylesList[t].transforms.pop()},CVShapeElement.prototype.closeStyles=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].closed=!0},CVShapeElement.prototype.searchShapes=function(t,e,r,i,s){var a,n,o,h,l,p,c=t.length-1,f=[],d=[],m=[].concat(s);for(a=c;a>=0;a-=1){if((h=this.searchProcessedElement(t[a]))?e[a]=r[h-1]:t[a]._shouldRender=i,"fl"===t[a].ty||"st"===t[a].ty||"gf"===t[a].ty||"gs"===t[a].ty)h?e[a].style.closed=!1:e[a]=this.createStyleElement(t[a],m),f.push(e[a].style);else if("gr"===t[a].ty){if(h)for(o=e[a].it.length,n=0;n<o;n+=1)e[a].prevViewData[n]=e[a].it[n];else e[a]=this.createGroupElement(t[a]);this.searchShapes(t[a].it,e[a].it,e[a].prevViewData,i,m)}else"tr"===t[a].ty?(h||(p=this.createTransformElement(t[a]),e[a]=p),m.push(e[a]),this.addTransformToStyleList(e[a])):"sh"===t[a].ty||"rc"===t[a].ty||"el"===t[a].ty||"sr"===t[a].ty?h||(e[a]=this.createShapeElement(t[a])):"tm"===t[a].ty||"rd"===t[a].ty||"pb"===t[a].ty?(h?(l=e[a]).closed=!1:((l=ShapeModifiers.getModifier(t[a].ty)).init(this,t[a]),e[a]=l,this.shapeModifiers.push(l)),d.push(l)):"rp"===t[a].ty&&(h?(l=e[a]).closed=!0:(l=ShapeModifiers.getModifier(t[a].ty),e[a]=l,l.init(this,t,a,e),this.shapeModifiers.push(l),i=!1),d.push(l));this.addProcessedElement(t[a],a+1)}for(this.removeTransformFromStyleList(),this.closeStyles(f),c=d.length,a=0;a<c;a+=1)d[a].closed=!0},CVShapeElement.prototype.renderInnerContent=function(){this.transformHelper.opacity=1,this.transformHelper._opMdf=!1,this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame),this.renderShape(this.transformHelper,this.shapesData,this.itemsData,!0)},CVShapeElement.prototype.renderShapeTransform=function(t,e){(t._opMdf||e.op._mdf||this._isFirstFrame)&&(e.opacity=t.opacity,e.opacity*=e.op.v,e._opMdf=!0)},CVShapeElement.prototype.drawLayer=function(){var t,e,r,i,s,a,n,o,h,l=this.stylesList.length,p=this.globalData.renderer,c=this.globalData.canvasContext;for(t=0;t<l;t+=1)if(("st"!==(o=(h=this.stylesList[t]).type)&&"gs"!==o||0!==h.wi)&&h.data._shouldRender&&0!==h.coOp&&0!==this.globalData.currentGlobalAlpha){for(p.save(),a=h.elements,"st"===o||"gs"===o?(c.strokeStyle="st"===o?h.co:h.grd,c.lineWidth=h.wi,c.lineCap=h.lc,c.lineJoin=h.lj,c.miterLimit=h.ml||0):c.fillStyle="fl"===o?h.co:h.grd,p.ctxOpacity(h.coOp),"st"!==o&&"gs"!==o&&c.beginPath(),p.ctxTransform(h.preTransforms.finalTransform.props),r=a.length,e=0;e<r;e+=1){for("st"!==o&&"gs"!==o||(c.beginPath(),h.da&&(c.setLineDash(h.da),c.lineDashOffset=h.do)),s=(n=a[e].trNodes).length,i=0;i<s;i+=1)"m"===n[i].t?c.moveTo(n[i].p[0],n[i].p[1]):"c"===n[i].t?c.bezierCurveTo(n[i].pts[0],n[i].pts[1],n[i].pts[2],n[i].pts[3],n[i].pts[4],n[i].pts[5]):c.closePath();"st"!==o&&"gs"!==o||(c.stroke(),h.da&&c.setLineDash(this.dashResetter))}"st"!==o&&"gs"!==o&&c.fill(h.r),p.restore()}},CVShapeElement.prototype.renderShape=function(t,e,r,i){var s,a;for(a=t,s=e.length-1;s>=0;s-=1)"tr"===e[s].ty?(a=r[s].transform,this.renderShapeTransform(t,a)):"sh"===e[s].ty||"el"===e[s].ty||"rc"===e[s].ty||"sr"===e[s].ty?this.renderPath(e[s],r[s]):"fl"===e[s].ty?this.renderFill(e[s],r[s],a):"st"===e[s].ty?this.renderStroke(e[s],r[s],a):"gf"===e[s].ty||"gs"===e[s].ty?this.renderGradientFill(e[s],r[s],a):"gr"===e[s].ty?this.renderShape(a,e[s].it,r[s].it):e[s].ty;i&&this.drawLayer()},CVShapeElement.prototype.renderStyledShape=function(t,e){if(this._isFirstFrame||e._mdf||t.transforms._mdf){var r,i,s,a=t.trNodes,n=e.paths,o=n._length;a.length=0;var h=t.transforms.finalTransform;for(s=0;s<o;s+=1){var l=n.shapes[s];if(l&&l.v){for(i=l._length,r=1;r<i;r+=1)1===r&&a.push({t:"m",p:h.applyToPointArray(l.v[0][0],l.v[0][1],0)}),a.push({t:"c",pts:h.applyToTriplePoints(l.o[r-1],l.i[r],l.v[r])});1===i&&a.push({t:"m",p:h.applyToPointArray(l.v[0][0],l.v[0][1],0)}),l.c&&i&&(a.push({t:"c",pts:h.applyToTriplePoints(l.o[r-1],l.i[0],l.v[0])}),a.push({t:"z"}))}}t.trNodes=a}},CVShapeElement.prototype.renderPath=function(t,e){if(!0!==t.hd&&t._shouldRender){var r,i=e.styledShapes.length;for(r=0;r<i;r+=1)this.renderStyledShape(e.styledShapes[r],e.sh)}},CVShapeElement.prototype.renderFill=function(t,e,r){var i=e.style;(e.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=e.o.v*r.opacity)},CVShapeElement.prototype.renderGradientFill=function(t,e,r){var i,s=e.style;if(!s.grd||e.g._mdf||e.s._mdf||e.e._mdf||1!==t.t&&(e.h._mdf||e.a._mdf)){var a,n=this.globalData.canvasContext,o=e.s.v,h=e.e.v;if(1===t.t)i=n.createLinearGradient(o[0],o[1],h[0],h[1]);else{var l=Math.sqrt(Math.pow(o[0]-h[0],2)+Math.pow(o[1]-h[1],2)),p=Math.atan2(h[1]-o[1],h[0]-o[0]),c=e.h.v;c>=1?c=.99:c<=-1&&(c=-.99);var f=l*c,d=Math.cos(p+e.a.v)*f+o[0],m=Math.sin(p+e.a.v)*f+o[1];i=n.createRadialGradient(d,m,0,o[0],o[1],l)}var u=t.g.p,y=e.g.c,g=1;for(a=0;a<u;a+=1)e.g._hasOpacity&&e.g._collapsable&&(g=e.g.o[2*a+1]),i.addColorStop(y[4*a]/100,"rgba("+y[4*a+1]+","+y[4*a+2]+","+y[4*a+3]+","+g+")");s.grd=i}s.coOp=e.o.v*r.opacity},CVShapeElement.prototype.renderStroke=function(t,e,r){var i=e.style,s=e.d;s&&(s._mdf||this._isFirstFrame)&&(i.da=s.dashArray,i.do=s.dashoffset[0]),(e.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=e.o.v*r.opacity),(e.w._mdf||this._isFirstFrame)&&(i.wi=e.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.itemsData.length=0},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVSolidElement),CVSolidElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVSolidElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVSolidElement.prototype.renderInnerContent=function(){var t=this.canvasContext;t.fillStyle=this.data.sc,t.fillRect(0,0,this.data.sw,this.data.sh)},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement,ITextElement],CVTextElement),CVTextElement.prototype.tHelper=createTag("canvas").getContext("2d"),CVTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=!1;t.fc?(e=!0,this.values.fill=this.buildColor(t.fc)):this.values.fill="rgba(0,0,0,0)",this.fill=e;var r=!1;t.sc&&(r=!0,this.values.stroke=this.buildColor(t.sc),this.values.sWidth=t.sw);var i,s,a,n,o,h,l,p,c,f,d,m,u=this.globalData.fontManager.getFontByName(t.f),y=t.l,g=this.mHelper;this.stroke=r,this.values.fValue=t.finalSize+"px "+this.globalData.fontManager.getFontByName(t.f).fFamily,s=t.finalText.length;var v=this.data.singleShape,b=.001*t.tr*t.finalSize,P=0,_=0,E=!0,S=0;for(i=0;i<s;i+=1){for(n=(a=this.globalData.fontManager.getCharData(t.finalText[i],u.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily))&&a.data||{},g.reset(),v&&y[i].n&&(P=-b,_+=t.yOffset,_+=E?1:0,E=!1),c=(l=n.shapes?n.shapes[0].it:[]).length,g.scale(t.finalSize/100,t.finalSize/100),v&&this.applyTextPropertiesToMatrix(t,g,y[i].line,P,_),d=createSizedArray(c),p=0;p<c;p+=1){for(h=l[p].ks.k.i.length,f=l[p].ks.k,m=[],o=1;o<h;o+=1)1===o&&m.push(g.applyToX(f.v[0][0],f.v[0][1],0),g.applyToY(f.v[0][0],f.v[0][1],0)),m.push(g.applyToX(f.o[o-1][0],f.o[o-1][1],0),g.applyToY(f.o[o-1][0],f.o[o-1][1],0),g.applyToX(f.i[o][0],f.i[o][1],0),g.applyToY(f.i[o][0],f.i[o][1],0),g.applyToX(f.v[o][0],f.v[o][1],0),g.applyToY(f.v[o][0],f.v[o][1],0));m.push(g.applyToX(f.o[o-1][0],f.o[o-1][1],0),g.applyToY(f.o[o-1][0],f.o[o-1][1],0),g.applyToX(f.i[0][0],f.i[0][1],0),g.applyToY(f.i[0][0],f.i[0][1],0),g.applyToX(f.v[0][0],f.v[0][1],0),g.applyToY(f.v[0][0],f.v[0][1],0)),d[p]=m}v&&(P+=y[i].l,P+=b),this.textSpans[S]?this.textSpans[S].elem=d:this.textSpans[S]={elem:d},S+=1}},CVTextElement.prototype.renderInnerContent=function(){var t,e,r,i,s,a,n=this.canvasContext;n.font=this.values.fValue,n.lineCap="butt",n.lineJoin="miter",n.miterLimit=4,this.data.singleShape||this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);var o,h=this.textAnimator.renderedLetters,l=this.textProperty.currentData.l;e=l.length;var p,c,f=null,d=null,m=null;for(t=0;t<e;t+=1)if(!l[t].n){if((o=h[t])&&(this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(o.p),this.globalData.renderer.ctxOpacity(o.o)),this.fill){for(o&&o.fc?f!==o.fc&&(f=o.fc,n.fillStyle=o.fc):f!==this.values.fill&&(f=this.values.fill,n.fillStyle=this.values.fill),i=(p=this.textSpans[t].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(a=(c=p[r]).length,this.globalData.canvasContext.moveTo(c[0],c[1]),s=2;s<a;s+=6)this.globalData.canvasContext.bezierCurveTo(c[s],c[s+1],c[s+2],c[s+3],c[s+4],c[s+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.fill()}if(this.stroke){for(o&&o.sw?m!==o.sw&&(m=o.sw,n.lineWidth=o.sw):m!==this.values.sWidth&&(m=this.values.sWidth,n.lineWidth=this.values.sWidth),o&&o.sc?d!==o.sc&&(d=o.sc,n.strokeStyle=o.sc):d!==this.values.stroke&&(d=this.values.stroke,n.strokeStyle=this.values.stroke),i=(p=this.textSpans[t].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(a=(c=p[r]).length,this.globalData.canvasContext.moveTo(c[0],c[1]),s=2;s<a;s+=6)this.globalData.canvasContext.bezierCurveTo(c[s],c[s+1],c[s+2],c[s+3],c[s+4],c[s+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.stroke()}o&&this.globalData.renderer.restore()}},CVEffects.prototype.renderFrame=function(){},HBaseElement.prototype={checkBlendMode:function(){},initRendererElement:function(){this.baseElement=createTag(this.data.tg||"div"),this.data.hasMask?(this.svgElement=createNS("svg"),this.layerElement=createNS("g"),this.maskedElement=this.layerElement,this.svgElement.appendChild(this.layerElement),this.baseElement.appendChild(this.svgElement)):this.layerElement=this.baseElement,styleDiv(this.baseElement)},createContainerElements:function(){this.renderableEffectsManager=new CVEffects(this),this.transformedElement=this.baseElement,this.maskedElement=this.layerElement,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0!==this.data.bm&&this.setBlendMode()},renderElement:function(){var t=this.transformedElement?this.transformedElement.style:{};if(this.finalTransform._matMdf){var e=this.finalTransform.mat.toCSS();t.transform=e,t.webkitTransform=e}this.finalTransform._opMdf&&(t.opacity=this.finalTransform.mProp.o.v)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},destroy:function(){this.layerElement=null,this.transformedElement=null,this.matteElement&&(this.matteElement=null),this.maskManager&&(this.maskManager.destroy(),this.maskManager=null)},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData)},addEffects:function(){},setMatte:function(){}},HBaseElement.prototype.getBaseElement=SVGBaseElement.prototype.getBaseElement,HBaseElement.prototype.destroyBaseElement=HBaseElement.prototype.destroy,HBaseElement.prototype.buildElementParenting=HybridRenderer.prototype.buildElementParenting,extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],HSolidElement),HSolidElement.prototype.createContent=function(){var t;this.data.hasMask?((t=createNS("rect")).setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.svgElement.setAttribute("width",this.data.sw),this.svgElement.setAttribute("height",this.data.sh)):((t=createTag("div")).style.width=this.data.sw+"px",t.style.height=this.data.sh+"px",t.style.backgroundColor=this.data.sc),this.layerElement.appendChild(t)},extendPrototype([HybridRenderer,ICompElement,HBaseElement],HCompElement),HCompElement.prototype._createBaseContainerElements=HCompElement.prototype.createContainerElements,HCompElement.prototype.createContainerElements=function(){this._createBaseContainerElements(),this.data.hasMask?(this.svgElement.setAttribute("width",this.data.w),this.svgElement.setAttribute("height",this.data.h),this.transformedElement=this.baseElement):this.transformedElement=this.layerElement},HCompElement.prototype.addTo3dContainer=function(t,e){for(var r,i=0;i<e;)this.elements[i]&&this.elements[i].getBaseElement&&(r=this.elements[i].getBaseElement()),i+=1;r?this.layerElement.insertBefore(t,r):this.layerElement.appendChild(t)},extendPrototype([BaseElement,TransformElement,HSolidElement,SVGShapeElement,HBaseElement,HierarchyElement,FrameElement,RenderableElement],HShapeElement),HShapeElement.prototype._renderShapeFrame=HShapeElement.prototype.renderInnerContent,HShapeElement.prototype.createContent=function(){var t;if(this.baseElement.style.fontSize=0,this.data.hasMask)this.layerElement.appendChild(this.shapesContainer),t=this.svgElement;else{t=createNS("svg");var e=this.comp.data?this.comp.data:this.globalData.compSize;t.setAttribute("width",e.w),t.setAttribute("height",e.h),t.appendChild(this.shapesContainer),this.layerElement.appendChild(t)}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.shapesContainer,0,[],!0),this.filterUniqueShapes(),this.shapeCont=t},HShapeElement.prototype.getTransformedPoint=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e=t[r].mProps.v.applyToPointArray(e[0],e[1],0);return e},HShapeElement.prototype.calculateShapeBoundingBox=function(t,e){var r,i,s,a,n,o=t.sh.v,h=t.transformers,l=o._length;if(!(l<=1)){for(r=0;r<l-1;r+=1)i=this.getTransformedPoint(h,o.v[r]),s=this.getTransformedPoint(h,o.o[r]),a=this.getTransformedPoint(h,o.i[r+1]),n=this.getTransformedPoint(h,o.v[r+1]),this.checkBounds(i,s,a,n,e);o.c&&(i=this.getTransformedPoint(h,o.v[r]),s=this.getTransformedPoint(h,o.o[r]),a=this.getTransformedPoint(h,o.i[0]),n=this.getTransformedPoint(h,o.v[0]),this.checkBounds(i,s,a,n,e))}},HShapeElement.prototype.checkBounds=function(t,e,r,i,s){this.getBoundsOfCurve(t,e,r,i);var a=this.shapeBoundingBox;s.x=bmMin(a.left,s.x),s.xMax=bmMax(a.right,s.xMax),s.y=bmMin(a.top,s.y),s.yMax=bmMax(a.bottom,s.yMax)},HShapeElement.prototype.shapeBoundingBox={left:0,right:0,top:0,bottom:0},HShapeElement.prototype.tempBoundingBox={x:0,xMax:0,y:0,yMax:0,width:0,height:0},HShapeElement.prototype.getBoundsOfCurve=function(t,e,r,i){for(var s,a,n,o,h,l,p,c=[[t[0],i[0]],[t[1],i[1]]],f=0;f<2;++f)a=6*t[f]-12*e[f]+6*r[f],s=-3*t[f]+9*e[f]-9*r[f]+3*i[f],n=3*e[f]-3*t[f],a|=0,n|=0,0==(s|=0)&&0===a||(0===s?(o=-n/a)>0&&o<1&&c[f].push(this.calculateF(o,t,e,r,i,f)):(h=a*a-4*n*s)>=0&&((l=(-a+bmSqrt(h))/(2*s))>0&&l<1&&c[f].push(this.calculateF(l,t,e,r,i,f)),(p=(-a-bmSqrt(h))/(2*s))>0&&p<1&&c[f].push(this.calculateF(p,t,e,r,i,f))));this.shapeBoundingBox.left=bmMin.apply(null,c[0]),this.shapeBoundingBox.top=bmMin.apply(null,c[1]),this.shapeBoundingBox.right=bmMax.apply(null,c[0]),this.shapeBoundingBox.bottom=bmMax.apply(null,c[1])},HShapeElement.prototype.calculateF=function(t,e,r,i,s,a){return bmPow(1-t,3)*e[a]+3*bmPow(1-t,2)*t*r[a]+3*(1-t)*bmPow(t,2)*i[a]+bmPow(t,3)*s[a]},HShapeElement.prototype.calculateBoundingBox=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]&&t[r].sh?this.calculateShapeBoundingBox(t[r],e):t[r]&&t[r].it&&this.calculateBoundingBox(t[r].it,e)},HShapeElement.prototype.currentBoxContains=function(t){return this.currentBBox.x<=t.x&&this.currentBBox.y<=t.y&&this.currentBBox.width+this.currentBBox.x>=t.x+t.width&&this.currentBBox.height+this.currentBBox.y>=t.y+t.height},HShapeElement.prototype.renderInnerContent=function(){if(this._renderShapeFrame(),!this.hidden&&(this._isFirstFrame||this._mdf)){var t=this.tempBoundingBox,e=999999;if(t.x=e,t.xMax=-e,t.y=e,t.yMax=-e,this.calculateBoundingBox(this.itemsData,t),t.width=t.xMax<t.x?0:t.xMax-t.x,t.height=t.yMax<t.y?0:t.yMax-t.y,this.currentBoxContains(t))return;var r=!1;if(this.currentBBox.w!==t.width&&(this.currentBBox.w=t.width,this.shapeCont.setAttribute("width",t.width),r=!0),this.currentBBox.h!==t.height&&(this.currentBBox.h=t.height,this.shapeCont.setAttribute("height",t.height),r=!0),r||this.currentBBox.x!==t.x||this.currentBBox.y!==t.y){this.currentBBox.w=t.width,this.currentBBox.h=t.height,this.currentBBox.x=t.x,this.currentBBox.y=t.y,this.shapeCont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h);var i=this.shapeCont.style,s="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";i.transform=s,i.webkitTransform=s}}},extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],HTextElement),HTextElement.prototype.createContent=function(){if(this.isMasked=this.checkMasks(),this.isMasked){this.renderType="svg",this.compW=this.comp.data.w,this.compH=this.comp.data.h,this.svgElement.setAttribute("width",this.compW),this.svgElement.setAttribute("height",this.compH);var t=createNS("g");this.maskedElement.appendChild(t),this.innerElem=t}else this.renderType="html",this.innerElem=this.layerElement;this.checkParenting()},HTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=this.innerElem.style,r=t.fc?this.buildColor(t.fc):"rgba(0,0,0,0)";e.fill=r,e.color=r,t.sc&&(e.stroke=this.buildColor(t.sc),e.strokeWidth=t.sw+"px");var i,s,a=this.globalData.fontManager.getFontByName(t.f);if(!this.globalData.fontManager.chars)if(e.fontSize=t.finalSize+"px",e.lineHeight=t.finalSize+"px",a.fClass)this.innerElem.className=a.fClass;else{e.fontFamily=a.fFamily;var n=t.fWeight,o=t.fStyle;e.fontStyle=o,e.fontWeight=n}var h,l,p,c=t.l;s=c.length;var f,d=this.mHelper,m="",u=0;for(i=0;i<s;i+=1){if(this.globalData.fontManager.chars?(this.textPaths[u]?h=this.textPaths[u]:((h=createNS("path")).setAttribute("stroke-linecap",lineCapEnum[1]),h.setAttribute("stroke-linejoin",lineJoinEnum[2]),h.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[u]?p=(l=this.textSpans[u]).children[0]:((l=createTag("div")).style.lineHeight=0,(p=createNS("svg")).appendChild(h),styleDiv(l)))):this.isMasked?h=this.textPaths[u]?this.textPaths[u]:createNS("text"):this.textSpans[u]?(l=this.textSpans[u],h=this.textPaths[u]):(styleDiv(l=createTag("span")),styleDiv(h=createTag("span")),l.appendChild(h)),this.globalData.fontManager.chars){var y,g=this.globalData.fontManager.getCharData(t.finalText[i],a.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily);if(y=g?g.data:null,d.reset(),y&&y.shapes&&(f=y.shapes[0].it,d.scale(t.finalSize/100,t.finalSize/100),m=this.createPathShape(d,f),h.setAttribute("d",m)),this.isMasked)this.innerElem.appendChild(h);else{if(this.innerElem.appendChild(l),y&&y.shapes){document.body.appendChild(p);var v=p.getBBox();p.setAttribute("width",v.width+2),p.setAttribute("height",v.height+2),p.setAttribute("viewBox",v.x-1+" "+(v.y-1)+" "+(v.width+2)+" "+(v.height+2));var b=p.style,P="translate("+(v.x-1)+"px,"+(v.y-1)+"px)";b.transform=P,b.webkitTransform=P,c[i].yOffset=v.y-1}else p.setAttribute("width",1),p.setAttribute("height",1);l.appendChild(p)}}else if(h.textContent=c[i].val,h.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked)this.innerElem.appendChild(h);else{this.innerElem.appendChild(l);var _=h.style,E="translate3d(0,"+-t.finalSize/1.2+"px,0)";_.transform=E,_.webkitTransform=E}this.isMasked?this.textSpans[u]=h:this.textSpans[u]=l,this.textSpans[u].style.display="block",this.textPaths[u]=h,u+=1}for(;u<this.textSpans.length;)this.textSpans[u].style.display="none",u+=1},HTextElement.prototype.renderInnerContent=function(){var t;if(this.data.singleShape){if(!this._isFirstFrame&&!this.lettersChangedFlag)return;if(this.isMasked&&this.finalTransform._matMdf){this.svgElement.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),t=this.svgElement.style;var e="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)";t.transform=e,t.webkitTransform=e}}if(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag){var r,i,s,a,n,o=0,h=this.textAnimator.renderedLetters,l=this.textProperty.currentData.l;for(i=l.length,r=0;r<i;r+=1)l[r].n?o+=1:(a=this.textSpans[r],n=this.textPaths[r],s=h[o],o+=1,s._mdf.m&&(this.isMasked?a.setAttribute("transform",s.m):(a.style.webkitTransform=s.m,a.style.transform=s.m)),a.style.opacity=s.o,s.sw&&s._mdf.sw&&n.setAttribute("stroke-width",s.sw),s.sc&&s._mdf.sc&&n.setAttribute("stroke",s.sc),s.fc&&s._mdf.fc&&(n.setAttribute("fill",s.fc),n.style.color=s.fc));if(this.innerElem.getBBox&&!this.hidden&&(this._isFirstFrame||this._mdf)){var p=this.innerElem.getBBox();if(this.currentBBox.w!==p.width&&(this.currentBBox.w=p.width,this.svgElement.setAttribute("width",p.width)),this.currentBBox.h!==p.height&&(this.currentBBox.h=p.height,this.svgElement.setAttribute("height",p.height)),this.currentBBox.w!==p.width+2||this.currentBBox.h!==p.height+2||this.currentBBox.x!==p.x-1||this.currentBBox.y!==p.y-1){this.currentBBox.w=p.width+2,this.currentBBox.h=p.height+2,this.currentBBox.x=p.x-1,this.currentBBox.y=p.y-1,this.svgElement.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),t=this.svgElement.style;var c="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";t.transform=c,t.webkitTransform=c}}}},extendPrototype([BaseElement,TransformElement,HBaseElement,HSolidElement,HierarchyElement,FrameElement,RenderableElement],HImageElement),HImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData),e=new Image;this.data.hasMask?(this.imageElem=createNS("image"),this.imageElem.setAttribute("width",this.assetData.w+"px"),this.imageElem.setAttribute("height",this.assetData.h+"px"),this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.imageElem),this.baseElement.setAttribute("width",this.assetData.w),this.baseElement.setAttribute("height",this.assetData.h)):this.layerElement.appendChild(e),e.crossOrigin="anonymous",e.src=t,this.data.ln&&this.baseElement.setAttribute("id",this.data.ln)},extendPrototype([BaseElement,FrameElement,HierarchyElement],HCameraElement),HCameraElement.prototype.setup=function(){var t,e,r,i,s=this.comp.threeDElements.length;for(t=0;t<s;t+=1)if("3d"===(e=this.comp.threeDElements[t]).type){r=e.perspectiveElem.style,i=e.container.style;var a=this.pe.v+"px",n="0px 0px 0px",o="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";r.perspective=a,r.webkitPerspective=a,i.transformOrigin=n,i.mozTransformOrigin=n,i.webkitTransformOrigin=n,r.transform=o,r.webkitTransform=o}},HCameraElement.prototype.createElements=function(){},HCameraElement.prototype.hide=function(){},HCameraElement.prototype.renderFrame=function(){var t,e,r=this._isFirstFrame;if(this.hierarchy)for(e=this.hierarchy.length,t=0;t<e;t+=1)r=this.hierarchy[t].finalTransform.mProp._mdf||r;if(r||this.pe._mdf||this.p&&this.p._mdf||this.px&&(this.px._mdf||this.py._mdf||this.pz._mdf)||this.rx._mdf||this.ry._mdf||this.rz._mdf||this.or._mdf||this.a&&this.a._mdf){if(this.mat.reset(),this.hierarchy)for(t=e=this.hierarchy.length-1;t>=0;t-=1){var i=this.hierarchy[t].finalTransform.mProp;this.mat.translate(-i.p.v[0],-i.p.v[1],i.p.v[2]),this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]),this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),this.mat.scale(1/i.s.v[0],1/i.s.v[1],1/i.s.v[2]),this.mat.translate(i.a.v[0],i.a.v[1],i.a.v[2])}if(this.p?this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]):this.mat.translate(-this.px.v,-this.py.v,this.pz.v),this.a){var s;s=this.p?[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]]:[this.px.v-this.a.v[0],this.py.v-this.a.v[1],this.pz.v-this.a.v[2]];var a=Math.sqrt(Math.pow(s[0],2)+Math.pow(s[1],2)+Math.pow(s[2],2)),n=[s[0]/a,s[1]/a,s[2]/a],o=Math.sqrt(n[2]*n[2]+n[0]*n[0]),h=Math.atan2(n[1],o),l=Math.atan2(n[0],-n[2]);this.mat.rotateY(l).rotateX(-h)}this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0),this.mat.translate(0,0,this.pe.v);var p=!this._prevMat.equals(this.mat);if((p||this.pe._mdf)&&this.comp.threeDElements){var c,f,d;for(e=this.comp.threeDElements.length,t=0;t<e;t+=1)if("3d"===(c=this.comp.threeDElements[t]).type){if(p){var m=this.mat.toCSS();(d=c.container.style).transform=m,d.webkitTransform=m}this.pe._mdf&&((f=c.perspectiveElem.style).perspective=this.pe.v+"px",f.webkitPerspective=this.pe.v+"px")}this.mat.clone(this._prevMat)}}this._isFirstFrame=!1},HCameraElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},HCameraElement.prototype.destroy=function(){},HCameraElement.prototype.getBaseElement=function(){return null},HEffects.prototype.renderFrame=function(){};var animationManager=function(){var t={},e=[],r=0,i=0,s=0,a=!0,n=!1;function o(t){for(var r=0,s=t.target;r<i;)e[r].animation===s&&(e.splice(r,1),r-=1,i-=1,s.isPaused||p()),r+=1}function h(t,r){if(!t)return null;for(var s=0;s<i;){if(e[s].elem===t&&null!==e[s].elem)return e[s].animation;s+=1}var a=new AnimationItem;return c(a,t),a.setData(t,r),a}function l(){s+=1,m()}function p(){s-=1}function c(t,r){t.addEventListener("destroy",o),t.addEventListener("_active",l),t.addEventListener("_idle",p),e.push({elem:r,animation:t}),i+=1}function f(t){var o,h=t-r;for(o=0;o<i;o+=1)e[o].animation.advanceTime(h);r=t,s&&!n?window.requestAnimationFrame(f):a=!0}function d(t){r=t,window.requestAnimationFrame(f)}function m(){!n&&s&&a&&(window.requestAnimationFrame(d),a=!1)}return t.registerAnimation=h,t.loadAnimation=function(t){var e=new AnimationItem;return c(e,null),e.setParams(t),e},t.setSpeed=function(t,r){var s;for(s=0;s<i;s+=1)e[s].animation.setSpeed(t,r)},t.setDirection=function(t,r){var s;for(s=0;s<i;s+=1)e[s].animation.setDirection(t,r)},t.play=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.play(t)},t.pause=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.pause(t)},t.stop=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.stop(t)},t.togglePause=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.togglePause(t)},t.searchAnimations=function(t,e,r){var i,s=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),a=s.length;for(i=0;i<a;i+=1)r&&s[i].setAttribute("data-bm-type",r),h(s[i],t);if(e&&0===a){r||(r="svg");var n=document.getElementsByTagName("body")[0];n.innerText="";var o=createTag("div");o.style.width="100%",o.style.height="100%",o.setAttribute("data-bm-type",r),n.appendChild(o),h(o,t)}},t.resize=function(){var t;for(t=0;t<i;t+=1)e[t].animation.resize()},t.goToAndStop=function(t,r,s){var a;for(a=0;a<i;a+=1)e[a].animation.goToAndStop(t,r,s)},t.destroy=function(t){var r;for(r=i-1;r>=0;r-=1)e[r].animation.destroy(t)},t.freeze=function(){n=!0},t.unfreeze=function(){n=!1,m()},t.setVolume=function(t,r){var s;for(s=0;s<i;s+=1)e[s].animation.setVolume(t,r)},t.mute=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.mute(t)},t.unmute=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.unmute(t)},t.getRegisteredAnimations=function(){var t,r=e.length,i=[];for(t=0;t<r;t+=1)i.push(e[t].animation);return i},t}(),AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=createElementID(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=subframeEnabled,this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=ProjectInterface(),this.imagePreloader=new ImagePreloader,this.audioController=audioControllerFactory(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this)};extendPrototype([BaseEvent],AnimationItem),AnimationItem.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";switch(t.animType?e=t.animType:t.renderer&&(e=t.renderer),e){case"canvas":this.renderer=new CanvasRenderer(this,t.rendererSettings);break;case"svg":this.renderer=new SVGRenderer(this,t.rendererSettings);break;default:this.renderer=new HybridRenderer(this,t.rendererSettings)}this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,""===t.loop||null===t.loop||void 0===t.loop||!0===t.loop?this.loop=!0:!1===t.loop?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay=!("autoplay"in t)||t.autoplay,this.name=t.name?t.name:"",this.autoloadSegments=!Object.prototype.hasOwnProperty.call(t,"autoloadSegments")||t.autoloadSegments,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.setupAnimation(t.animationData):t.path&&(-1!==t.path.lastIndexOf("\\")?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),dataManager.loadAnimation(t.path,this.configAnimation,this.onSetupError))},AnimationItem.prototype.onSetupError=function(){this.trigger("data_failed")},AnimationItem.prototype.setupAnimation=function(t){dataManager.completeAnimation(t,this.configAnimation)},AnimationItem.prototype.setData=function(t,e){e&&"object"!=typeof e&&(e=JSON.parse(e));var r={wrapper:t,animationData:e},i=t.attributes;r.path=i.getNamedItem("data-animation-path")?i.getNamedItem("data-animation-path").value:i.getNamedItem("data-bm-path")?i.getNamedItem("data-bm-path").value:i.getNamedItem("bm-path")?i.getNamedItem("bm-path").value:"",r.animType=i.getNamedItem("data-anim-type")?i.getNamedItem("data-anim-type").value:i.getNamedItem("data-bm-type")?i.getNamedItem("data-bm-type").value:i.getNamedItem("bm-type")?i.getNamedItem("bm-type").value:i.getNamedItem("data-bm-renderer")?i.getNamedItem("data-bm-renderer").value:i.getNamedItem("bm-renderer")?i.getNamedItem("bm-renderer").value:"canvas";var s=i.getNamedItem("data-anim-loop")?i.getNamedItem("data-anim-loop").value:i.getNamedItem("data-bm-loop")?i.getNamedItem("data-bm-loop").value:i.getNamedItem("bm-loop")?i.getNamedItem("bm-loop").value:"";"false"===s?r.loop=!1:"true"===s?r.loop=!0:""!==s&&(r.loop=parseInt(s,10));var a=i.getNamedItem("data-anim-autoplay")?i.getNamedItem("data-anim-autoplay").value:i.getNamedItem("data-bm-autoplay")?i.getNamedItem("data-bm-autoplay").value:!i.getNamedItem("bm-autoplay")||i.getNamedItem("bm-autoplay").value;r.autoplay="false"!==a,r.name=i.getNamedItem("data-name")?i.getNamedItem("data-name").value:i.getNamedItem("data-bm-name")?i.getNamedItem("data-bm-name").value:i.getNamedItem("bm-name")?i.getNamedItem("bm-name").value:"","false"===(i.getNamedItem("data-anim-prerender")?i.getNamedItem("data-anim-prerender").value:i.getNamedItem("data-bm-prerender")?i.getNamedItem("data-bm-prerender").value:i.getNamedItem("bm-prerender")?i.getNamedItem("bm-prerender").value:"")&&(r.prerender=!1),this.setParams(r)},AnimationItem.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e,r,i=this.animationData.layers,s=i.length,a=t.layers,n=a.length;for(r=0;r<n;r+=1)for(e=0;e<s;){if(i[e].id===a[r].id){i[e]=a[r];break}e+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(s=t.assets.length,e=0;e<s;e+=1)this.animationData.assets.push(t.assets[e]);this.animationData.__complete=!1,dataManager.completeAnimation(this.animationData,this.onSegmentComplete)},AnimationItem.prototype.onSegmentComplete=function(t){this.animationData=t,expressionsPlugin&&expressionsPlugin.initExpressions(this),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||0===t.length||!this.autoloadSegments)return this.trigger("data_ready"),void(this.timeCompleted=this.totalFrames);var e=t.shift();this.timeCompleted=e.time*this.frameRate;var r=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,dataManager.loadData(r,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},AnimationItem.prototype.loadSegments=function(){this.animationData.segments||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},AnimationItem.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},AnimationItem.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},AnimationItem.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=markerParser(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(t){this.triggerConfigError(t)}},AnimationItem.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},AnimationItem.prototype.checkLoaded=function(){!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||"canvas"!==this.renderer.rendererType)&&this.imagePreloader.loadedFootages()&&(this.isLoaded=!0,expressionsPlugin&&expressionsPlugin.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play())},AnimationItem.prototype.resize=function(){this.renderer.updateContainerSize()},AnimationItem.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},AnimationItem.prototype.renderFrame=function(){if(!1!==this.isLoaded&&this.renderer)try{this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},AnimationItem.prototype.play=function(t){t&&this.name!==t||!0===this.isPaused&&(this.isPaused=!1,this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(t){t&&this.name!==t||!1===this.isPaused&&(this.isPaused=!0,this._idle=!0,this.trigger("_idle"),this.audioController.pause())},AnimationItem.prototype.togglePause=function(t){t&&this.name!==t||(!0===this.isPaused?this.play():this.pause())},AnimationItem.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},AnimationItem.prototype.getMarkerData=function(t){for(var e,r=0;r<this.markers.length;r+=1)if((e=this.markers[r]).payload&&e.payload.name===t)return e;return null},AnimationItem.prototype.goToAndStop=function(t,e,r){if(!r||this.name===r){var i=Number(t);if(isNaN(i)){var s=this.getMarkerData(t);s&&this.goToAndStop(s.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},AnimationItem.prototype.goToAndPlay=function(t,e,r){if(!r||this.name===r){var i=Number(t);if(isNaN(i)){var s=this.getMarkerData(t);s&&(s.duration?this.playSegments([s.time,s.time+s.duration],!0):this.goToAndStop(s.time,!0))}else this.goToAndStop(i,e,r);this.play()}},AnimationItem.prototype.advanceTime=function(t){if(!0!==this.isPaused&&!1!==this.isLoaded){var e=this.currentRawFrame+t*this.frameModifier,r=!1;e>=this.totalFrames-1&&this.frameModifier>0?this.loop&&this.playCount!==this.loop?e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(r=!0,e=this.totalFrames-1):e<0?this.checkSegments(e%this.totalFrames)||(!this.loop||this.playCount--<=0&&!0!==this.loop?(r=!0,e=0):(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0)):this.setCurrentRawFrameValue(e),r&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},AnimationItem.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(t,e){var r=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?r=t:this.currentRawFrame+this.firstFrame>e&&(r=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,-1!==r&&this.goToAndStop(r,!0)},AnimationItem.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),"object"==typeof t[0]){var r,i=t.length;for(r=0;r<i;r+=1)this.segments.push(t[r])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},AnimationItem.prototype.checkSegments=function(t){return!!this.segments.length&&(this.adjustSegment(this.segments.shift(),t),!0)},AnimationItem.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.renderer=null,this.imagePreloader=null,this.projectInterface=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},AnimationItem.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},AnimationItem.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},AnimationItem.prototype.getVolume=function(){return this.audioController.getVolume()},AnimationItem.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},AnimationItem.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var r=t.p;-1!==r.indexOf("images/")&&(r=r.split("/")[1]),e=this.assetsPath+r}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},AnimationItem.prototype.getAssetData=function(t){for(var e=0,r=this.assets.length;e<r;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},AnimationItem.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":case"drawnFrame":this.triggerEvent(t,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"loopComplete":this.triggerEvent(t,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new BMCompleteEvent(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new BMDestroyEvent(t,this));break;default:this.triggerEvent(t)}"enterFrame"===t&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),"loopComplete"===t&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),"complete"===t&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(t,this.frameMult)),"segmentStart"===t&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),"destroy"===t&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(t,this))},AnimationItem.prototype.triggerRenderFrameError=function(t){var e=new BMRenderFrameErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},AnimationItem.prototype.triggerConfigError=function(t){var e=new BMConfigErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var Expressions=function(){var t={initExpressions:function(t){var e=0,r=[];t.renderer.compInterface=CompExpressionInterface(t.renderer),t.renderer.globalData.projectInterface.registerComposition(t.renderer),t.renderer.globalData.pushExpression=function(){e+=1},t.renderer.globalData.popExpression=function(){0==(e-=1)&&function(){var t,e=r.length;for(t=0;t<e;t+=1)r[t].release();r.length=0}()},t.renderer.globalData.registerExpressionProperty=function(t){-1===r.indexOf(t)&&r.push(t)}}};return t}();expressionsPlugin=Expressions;var ExpressionManager=function(){var ob={},Math=BMMath,window=null,document=null,XMLHttpRequest=null,fetch=null,frames=null;function $bm_isInstanceOfArray(t){return t.constructor===Array||t.constructor===Float32Array}function isNumerable(t,e){return"number"===t||"boolean"===t||"string"===t||e instanceof Number}function $bm_neg(t){var e=typeof t;if("number"===e||"boolean"===e||t instanceof Number)return-t;if($bm_isInstanceOfArray(t)){var r,i=t.length,s=[];for(r=0;r<i;r+=1)s[r]=-t[r];return s}return t.propType?t.v:-t}var easeInBez=BezierFactory.getBezierEasing(.333,0,.833,.833,"easeIn").get,easeOutBez=BezierFactory.getBezierEasing(.167,.167,.667,1,"easeOut").get,easeInOutBez=BezierFactory.getBezierEasing(.33,0,.667,1,"easeInOut").get;function sum(t,e){var r=typeof t,i=typeof e;if("string"===r||"string"===i)return t+e;if(isNumerable(r,t)&&isNumerable(i,e))return t+e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]+=e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t+e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]+e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}var add=sum;function sub(t,e){var r=typeof t,i=typeof e;if(isNumerable(r,t)&&isNumerable(i,e))return"string"===r&&(t=parseInt(t,10)),"string"===i&&(e=parseInt(e,10)),t-e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]-=e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t-e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]-e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}function mul(t,e){var r,i,s,a=typeof t,n=typeof e;if(isNumerable(a,t)&&isNumerable(n,e))return t*e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(s=t.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t[i]*e;return r}if(isNumerable(a,t)&&$bm_isInstanceOfArray(e)){for(s=e.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t*e[i];return r}return 0}function div(t,e){var r,i,s,a=typeof t,n=typeof e;if(isNumerable(a,t)&&isNumerable(n,e))return t/e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(s=t.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t[i]/e;return r}if(isNumerable(a,t)&&$bm_isInstanceOfArray(e)){for(s=e.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t/e[i];return r}return 0}function mod(t,e){return"string"==typeof t&&(t=parseInt(t,10)),"string"==typeof e&&(e=parseInt(e,10)),t%e}var $bm_sum=sum,$bm_sub=sub,$bm_mul=mul,$bm_div=div,$bm_mod=mod;function clamp(t,e,r){if(e>r){var i=r;r=e,e=i}return Math.min(Math.max(t,e),r)}function radiansToDegrees(t){return t/degToRads}var radians_to_degrees=radiansToDegrees;function degreesToRadians(t){return t*degToRads}var degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];function length(t,e){if("number"==typeof t||t instanceof Number)return e=e||0,Math.abs(t-e);var r;e||(e=helperLengthArray);var i=Math.min(t.length,e.length),s=0;for(r=0;r<i;r+=1)s+=Math.pow(e[r]-t[r],2);return Math.sqrt(s)}function normalize(t){return div(t,length(t))}function rgbToHsl(t){var e,r,i=t[0],s=t[1],a=t[2],n=Math.max(i,s,a),o=Math.min(i,s,a),h=(n+o)/2;if(n===o)e=0,r=0;else{var l=n-o;switch(r=h>.5?l/(2-n-o):l/(n+o),n){case i:e=(s-a)/l+(s<a?6:0);break;case s:e=(a-i)/l+2;break;case a:e=(i-s)/l+4}e/=6}return[e,r,h,t[3]]}function hue2rgb(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function hslToRgb(t){var e,r,i,s=t[0],a=t[1],n=t[2];if(0===a)e=n,i=n,r=n;else{var o=n<.5?n*(1+a):n+a-n*a,h=2*n-o;e=hue2rgb(h,o,s+1/3),r=hue2rgb(h,o,s),i=hue2rgb(h,o,s-1/3)}return[e,r,i,t[3]]}function linear(t,e,r,i,s){if(void 0!==i&&void 0!==s||(i=e,s=r,e=0,r=1),r<e){var a=r;r=e,e=a}if(t<=e)return i;if(t>=r)return s;var n,o=r===e?0:(t-e)/(r-e);if(!i.length)return i+(s-i)*o;var h=i.length,l=createTypedArray("float32",h);for(n=0;n<h;n+=1)l[n]=i[n]+(s[n]-i[n])*o;return l}function random(t,e){if(void 0===e&&(void 0===t?(t=0,e=1):(e=t,t=void 0)),e.length){var r,i=e.length;t||(t=createTypedArray("float32",i));var s=createTypedArray("float32",i),a=BMMath.random();for(r=0;r<i;r+=1)s[r]=t[r]+a*(e[r]-t[r]);return s}return void 0===t&&(t=0),t+BMMath.random()*(e-t)}function createPath(t,e,r,i){var s,a=t.length,n=shapePool.newElement();n.setPathData(!!i,a);var o,h,l=[0,0];for(s=0;s<a;s+=1)o=e&&e[s]?e[s]:l,h=r&&r[s]?r[s]:l,n.setTripleAt(t[s][0],t[s][1],h[0]+t[s][0],h[1]+t[s][1],o[0]+t[s][0],o[1]+t[s][1],s,!0);return n}function initiateExpression(elem,data,property){var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=-1!==val.indexOf("random"),elemType=elem.data.ty,transform,$bm_transform,content,effect,thisProperty=property;thisProperty.valueAtTime=thisProperty.getValueAtTime,Object.defineProperty(thisProperty,"value",{get:function(){return thisProperty.v}}),elem.comp.frameDuration=1/elem.comp.globalData.frameRate,elem.comp.displayStartTime=0;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,name=elem.data.nm,loopIn,loop_in,loopOut,loop_out,smooth,toWorld,fromWorld,fromComp,toComp,fromCompToSurface,position,rotation,anchorPoint,scale,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,scoped_bm_rt,expression_function=eval("[function _expression_function(){"+val+";scoped_bm_rt=$bm_rt}]")[0],numKeys=property.kf?data.k.length:0,active=!this.data||!0!==this.data.hd,wiggle=function(t,e){var r,i,s=this.pv.length?this.pv.length:1,a=createTypedArray("float32",s),n=Math.floor(5*time);for(r=0,i=0;r<n;){for(i=0;i<s;i+=1)a[i]+=-e+2*e*BMMath.random();r+=1}var o=5*time,h=o-Math.floor(o),l=createTypedArray("float32",s);if(s>1){for(i=0;i<s;i+=1)l[i]=this.pv[i]+a[i]+(-e+2*e*BMMath.random())*h;return l}return this.pv+a[0]+(-e+2*e*BMMath.random())*h}.bind(this);function loopInDuration(t,e){return loopIn(t,e,!0)}function loopOutDuration(t,e){return loopOut(t,e,!0)}thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty),loop_in=loopIn),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty),loop_out=loopOut),thisProperty.smooth&&(smooth=thisProperty.smooth.bind(thisProperty)),this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),time,velocity,value,text,textIndex,textTotal,selectorValue;function lookAt(t,e){var r=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],i=Math.atan2(r[0],Math.sqrt(r[1]*r[1]+r[2]*r[2]))/degToRads;return[-Math.atan2(r[1],r[2])/degToRads,i,0]}function easeOut(t,e,r,i,s){return applyEase(easeOutBez,t,e,r,i,s)}function easeIn(t,e,r,i,s){return applyEase(easeInBez,t,e,r,i,s)}function ease(t,e,r,i,s){return applyEase(easeInOutBez,t,e,r,i,s)}function applyEase(t,e,r,i,s,a){void 0===s?(s=r,a=i):e=(e-r)/(i-r),e>1?e=1:e<0&&(e=0);var n=t(e);if($bm_isInstanceOfArray(s)){var o,h=s.length,l=createTypedArray("float32",h);for(o=0;o<h;o+=1)l[o]=(a[o]-s[o])*n+s[o];return l}return(a-s)*n+s}function nearestKey(t){var e,r,i,s=data.k.length;if(data.k.length&&"number"!=typeof data.k[0])if(r=-1,(t*=elem.comp.globalData.frameRate)<data.k[0].t)r=1,i=data.k[0].t;else{for(e=0;e<s-1;e+=1){if(t===data.k[e].t){r=e+1,i=data.k[e].t;break}if(t>data.k[e].t&&t<data.k[e+1].t){t-data.k[e].t>data.k[e+1].t-t?(r=e+2,i=data.k[e+1].t):(r=e+1,i=data.k[e].t);break}}-1===r&&(r=e+1,i=data.k[e].t)}else r=0,i=0;var a={};return a.index=r,a.time=i/elem.comp.globalData.frameRate,a}function key(t){var e,r,i;if(!data.k.length||"number"==typeof data.k[0])throw new Error("The property has no keyframe at index "+t);t-=1,e={time:data.k[t].t/elem.comp.globalData.frameRate,value:[]};var s=Object.prototype.hasOwnProperty.call(data.k[t],"s")?data.k[t].s:data.k[t-1].e;for(i=s.length,r=0;r<i;r+=1)e[r]=s[r],e.value[r]=s[r];return e}function framesToTime(t,e){return e||(e=elem.comp.globalData.frameRate),t/e}function timeToFrames(t,e){return t||0===t||(t=time),e||(e=elem.comp.globalData.frameRate),t*e}function seedRandom(t){BMMath.seedrandom(randSeed+t)}function sourceRectAtTime(){return elem.sourceRectAtTime()}function substring(t,e){return"string"==typeof value?void 0===e?value.substring(t):value.substring(t,e):""}function substr(t,e){return"string"==typeof value?void 0===e?value.substr(t):value.substr(t,e):""}function posterizeTime(t){time=0===t?0:Math.floor(time*t)/t,value=valueAtTime(time)}var index=elem.data.ind,hasParent=!(!elem.hierarchy||!elem.hierarchy.length),parent,randSeed=Math.floor(1e6*Math.random()),globalData=elem.globalData;function executeExpression(t){return value=t,this.frameExpressionId===elem.globalData.frameId&&"textSelector"!==this.propType?value:("textSelector"===this.propType&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(text=elem.layerInterface.text,thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),toComp=thisLayer.toComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null,fromCompToSurface=fromComp),transform||(transform=elem.layerInterface("ADBE Transform Group"),$bm_transform=transform,transform&&(anchorPoint=transform.anchorPoint)),4!==elemType||content||(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),(hasParent=!(!elem.hierarchy||!elem.hierarchy.length))&&!parent&&(parent=elem.hierarchy[0].layerInterface),time=this.comp.renderedFrame/this.comp.globalData.frameRate,_needsRandom&&seedRandom(randSeed+time),needsVelocity&&(velocity=velocityAtTime(time)),expression_function(),this.frameExpressionId=elem.globalData.frameId,"shape"===scoped_bm_rt.propType&&(scoped_bm_rt=scoped_bm_rt.v),scoped_bm_rt)}return executeExpression}return ob.initiateExpression=initiateExpression,ob}(),expressionHelpers={searchExpressions:function(t,e,r){e.x&&(r.k=!0,r.x=!0,r.initiateExpression=ExpressionManager.initiateExpression,r.effectsSequence.push(r.initiateExpression(t,e,r).bind(r)))},getSpeedAtTime:function(t){var e=this.getValueAtTime(t),r=this.getValueAtTime(t+-.01),i=0;if(e.length){var s;for(s=0;s<e.length;s+=1)i+=Math.pow(r[s]-e[s],2);i=100*Math.sqrt(i)}else i=0;return i},getVelocityAtTime:function(t){if(void 0!==this.vel)return this.vel;var e,r,i=-.001,s=this.getValueAtTime(t),a=this.getValueAtTime(t+i);if(s.length)for(e=createTypedArray("float32",s.length),r=0;r<s.length;r+=1)e[r]=(a[r]-s[r])/i;else e=(a-s)/i;return e},getValueAtTime:function(t){return t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastFrame&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastFrame<t?this._cachingAtTime.lastIndex:0,this._cachingAtTime.value=this.interpolateValue(t,this._cachingAtTime),this._cachingAtTime.lastFrame=t),this._cachingAtTime.value},getStaticValueAtTime:function(){return this.pv},setGroupProperty:function(t){this.propertyGroup=t}};!function(){function t(t,e,r){if(!this.k||!this.keyframes)return this.pv;t=t?t.toLowerCase():"";var i,s,a,n,o,h=this.comp.renderedFrame,l=this.keyframes,p=l[l.length-1].t;if(h<=p)return this.pv;if(r?s=p-(i=e?Math.abs(p-this.elem.comp.globalData.frameRate*e):Math.max(0,p-this.elem.data.ip)):((!e||e>l.length-1)&&(e=l.length-1),i=p-(s=l[l.length-1-e].t)),"pingpong"===t){if(Math.floor((h-s)/i)%2!=0)return this.getValueAtTime((i-(h-s)%i+s)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var c=this.getValueAtTime(s/this.comp.globalData.frameRate,0),f=this.getValueAtTime(p/this.comp.globalData.frameRate,0),d=this.getValueAtTime(((h-s)%i+s)/this.comp.globalData.frameRate,0),m=Math.floor((h-s)/i);if(this.pv.length){for(n=(o=new Array(c.length)).length,a=0;a<n;a+=1)o[a]=(f[a]-c[a])*m+d[a];return o}return(f-c)*m+d}if("continue"===t){var u=this.getValueAtTime(p/this.comp.globalData.frameRate,0),y=this.getValueAtTime((p-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(u.length)).length,a=0;a<n;a+=1)o[a]=u[a]+(u[a]-y[a])*((h-p)/this.comp.globalData.frameRate)/5e-4;return o}return u+(h-p)/.001*(u-y)}}return this.getValueAtTime(((h-s)%i+s)/this.comp.globalData.frameRate,0)}function e(t,e,r){if(!this.k)return this.pv;t=t?t.toLowerCase():"";var i,s,a,n,o,h=this.comp.renderedFrame,l=this.keyframes,p=l[0].t;if(h>=p)return this.pv;if(r?s=p+(i=e?Math.abs(this.elem.comp.globalData.frameRate*e):Math.max(0,this.elem.data.op-p)):((!e||e>l.length-1)&&(e=l.length-1),i=(s=l[e].t)-p),"pingpong"===t){if(Math.floor((p-h)/i)%2==0)return this.getValueAtTime(((p-h)%i+p)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var c=this.getValueAtTime(p/this.comp.globalData.frameRate,0),f=this.getValueAtTime(s/this.comp.globalData.frameRate,0),d=this.getValueAtTime((i-(p-h)%i+p)/this.comp.globalData.frameRate,0),m=Math.floor((p-h)/i)+1;if(this.pv.length){for(n=(o=new Array(c.length)).length,a=0;a<n;a+=1)o[a]=d[a]-(f[a]-c[a])*m;return o}return d-(f-c)*m}if("continue"===t){var u=this.getValueAtTime(p/this.comp.globalData.frameRate,0),y=this.getValueAtTime((p+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(u.length)).length,a=0;a<n;a+=1)o[a]=u[a]+(u[a]-y[a])*(p-h)/.001;return o}return u+(u-y)*(p-h)/.001}}return this.getValueAtTime((i-((p-h)%i+p))/this.comp.globalData.frameRate,0)}function r(t,e){if(!this.k)return this.pv;if(t=.5*(t||.4),(e=Math.floor(e||5))<=1)return this.pv;var r,i,s=this.comp.renderedFrame/this.comp.globalData.frameRate,a=s-t,n=e>1?(s+t-a)/(e-1):1,o=0,h=0;for(r=this.pv.length?createTypedArray("float32",this.pv.length):0;o<e;){if(i=this.getValueAtTime(a+o*n),this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]+=i[h];else r+=i;o+=1}if(this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]/=e;else r/=e;return r}function i(t){this._transformCachingAtTime||(this._transformCachingAtTime={v:new Matrix});var e=this._transformCachingAtTime.v;if(e.cloneFromProps(this.pre.props),this.appliedTransformations<1){var r=this.a.getValueAtTime(t);e.translate(-r[0]*this.a.mult,-r[1]*this.a.mult,r[2]*this.a.mult)}if(this.appliedTransformations<2){var i=this.s.getValueAtTime(t);e.scale(i[0]*this.s.mult,i[1]*this.s.mult,i[2]*this.s.mult)}if(this.sk&&this.appliedTransformations<3){var s=this.sk.getValueAtTime(t),a=this.sa.getValueAtTime(t);e.skewFromAxis(-s*this.sk.mult,a*this.sa.mult)}if(this.r&&this.appliedTransformations<4){var n=this.r.getValueAtTime(t);e.rotate(-n*this.r.mult)}else if(!this.r&&this.appliedTransformations<4){var o=this.rz.getValueAtTime(t),h=this.ry.getValueAtTime(t),l=this.rx.getValueAtTime(t),p=this.or.getValueAtTime(t);e.rotateZ(-o*this.rz.mult).rotateY(h*this.ry.mult).rotateX(l*this.rx.mult).rotateZ(-p[2]*this.or.mult).rotateY(p[1]*this.or.mult).rotateX(p[0]*this.or.mult)}if(this.data.p&&this.data.p.s){var c=this.px.getValueAtTime(t),f=this.py.getValueAtTime(t);if(this.data.p.z){var d=this.pz.getValueAtTime(t);e.translate(c*this.px.mult,f*this.py.mult,-d*this.pz.mult)}else e.translate(c*this.px.mult,f*this.py.mult,0)}else{var m=this.p.getValueAtTime(t);e.translate(m[0]*this.p.mult,m[1]*this.p.mult,-m[2]*this.p.mult)}return e}function s(){return this.v.clone(new Matrix)}var a=TransformPropertyFactory.getTransformProperty;TransformPropertyFactory.getTransformProperty=function(t,e,r){var n=a(t,e,r);return n.dynamicProperties.length?n.getValueAtTime=i.bind(n):n.getValueAtTime=s.bind(n),n.setGroupProperty=expressionHelpers.setGroupProperty,n};var n=PropertyFactory.getProp;PropertyFactory.getProp=function(i,s,a,o,h){var l=n(i,s,a,o,h);l.kf?l.getValueAtTime=expressionHelpers.getValueAtTime.bind(l):l.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(l),l.setGroupProperty=expressionHelpers.setGroupProperty,l.loopOut=t,l.loopIn=e,l.smooth=r,l.getVelocityAtTime=expressionHelpers.getVelocityAtTime.bind(l),l.getSpeedAtTime=expressionHelpers.getSpeedAtTime.bind(l),l.numKeys=1===s.a?s.k.length:0,l.propertyIndex=s.ix;var p=0;return 0!==a&&(p=createTypedArray("float32",1===s.a?s.k[0].s.length:s.k.length)),l._cachingAtTime={lastFrame:initialDefaultFrame,lastIndex:0,value:p},expressionHelpers.searchExpressions(i,s,l),l.k&&h.addDynamicProperty(l),l};var o=ShapePropertyFactory.getConstructorFunction(),h=ShapePropertyFactory.getKeyframedConstructorFunction();function l(){}l.prototype={vertices:function(t,e){this.k&&this.getValue();var r,i=this.v;void 0!==e&&(i=this.getValueAtTime(e,0));var s=i._length,a=i[t],n=i.v,o=createSizedArray(s);for(r=0;r<s;r+=1)o[r]="i"===t||"o"===t?[a[r][0]-n[r][0],a[r][1]-n[r][1]]:[a[r][0],a[r][1]];return o},points:function(t){return this.vertices("v",t)},inTangents:function(t){return this.vertices("i",t)},outTangents:function(t){return this.vertices("o",t)},isClosed:function(){return this.v.c},pointOnPath:function(t,e){var r=this.v;void 0!==e&&(r=this.getValueAtTime(e,0)),this._segmentsLength||(this._segmentsLength=bez.getSegmentsLength(r));for(var i,s=this._segmentsLength,a=s.lengths,n=s.totalLength*t,o=0,h=a.length,l=0;o<h;){if(l+a[o].addedLength>n){var p=o,c=r.c&&o===h-1?0:o+1,f=(n-l)/a[o].addedLength;i=bez.getPointInSegment(r.v[p],r.v[c],r.o[p],r.i[c],f,a[o]);break}l+=a[o].addedLength,o+=1}return i||(i=r.c?[r.v[0][0],r.v[0][1]]:[r.v[r._length-1][0],r.v[r._length-1][1]]),i},vectorOnPath:function(t,e,r){1==t?t=this.v.c:0==t&&(t=.999);var i=this.pointOnPath(t,e),s=this.pointOnPath(t+.001,e),a=s[0]-i[0],n=s[1]-i[1],o=Math.sqrt(Math.pow(a,2)+Math.pow(n,2));return 0===o?[0,0]:"tangent"===r?[a/o,n/o]:[-n/o,a/o]},tangentOnPath:function(t,e){return this.vectorOnPath(t,e,"tangent")},normalOnPath:function(t,e){return this.vectorOnPath(t,e,"normal")},setGroupProperty:expressionHelpers.setGroupProperty,getValueAtTime:expressionHelpers.getStaticValueAtTime},extendPrototype([l],o),extendPrototype([l],h),h.prototype.getValueAtTime=function(t){return this._cachingAtTime||(this._cachingAtTime={shapeValue:shapePool.clone(this.pv),lastIndex:0,lastTime:initialDefaultFrame}),t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastTime&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastTime<t?this._caching.lastIndex:0,this._cachingAtTime.lastTime=t,this.interpolateShape(t,this._cachingAtTime.shapeValue,this._cachingAtTime)),this._cachingAtTime.shapeValue},h.prototype.initiateExpression=ExpressionManager.initiateExpression;var p=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(t,e,r,i,s){var a=p(t,e,r,i,s);return a.propertyIndex=e.ix,a.lock=!1,3===r?expressionHelpers.searchExpressions(t,e.pt,a):4===r&&expressionHelpers.searchExpressions(t,e.ks,a),a.k&&t.addDynamicProperty(a),a}}(),TextProperty.prototype.getExpressionValue=function(t,e){var r=this.calculateExpression(e);if(t.t!==r){var i={};return this.copyData(i,t),i.t=r.toString(),i.__complete=!1,i}return t},TextProperty.prototype.searchProperty=function(){var t=this.searchKeyframes(),e=this.searchExpressions();return this.kf=t||e,this.kf},TextProperty.prototype.searchExpressions=function(){return this.data.d.x?(this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this),this.addEffect(this.getExpressionValue.bind(this)),!0):null};var ShapePathInterface=function(t,e,r){var i=e.sh;function s(t){return"Shape"===t||"shape"===t||"Path"===t||"path"===t||"ADBE Vector Shape"===t||2===t?s.path:null}var a=propertyGroupFactory(s,r);return i.setGroupProperty(PropertyInterface("Path",a)),Object.defineProperties(s,{path:{get:function(){return i.k&&i.getValue(),i}},shape:{get:function(){return i.k&&i.getValue(),i}},_name:{value:t.nm},ix:{value:t.ix},propertyIndex:{value:t.ix},mn:{value:t.mn},propertyGroup:{value:r}}),s},propertyGroupFactory=function(t,e){return function(r){return(r=void 0===r?1:r)<=0?t:e(r-1)}},PropertyInterface=function(t,e){var r={_name:t};return function(t){return(t=void 0===t?1:t)<=0?r:e(t-1)}},ShapeExpressionInterface=function(){function t(t,n,f){var d,m=[],u=t?t.length:0;for(d=0;d<u;d+=1)"gr"===t[d].ty?m.push(e(t[d],n[d],f)):"fl"===t[d].ty?m.push(r(t[d],n[d],f)):"st"===t[d].ty?m.push(s(t[d],n[d],f)):"tm"===t[d].ty?m.push(a(t[d],n[d],f)):"tr"===t[d].ty||("el"===t[d].ty?m.push(o(t[d],n[d],f)):"sr"===t[d].ty?m.push(h(t[d],n[d],f)):"sh"===t[d].ty?m.push(ShapePathInterface(t[d],n[d],f)):"rc"===t[d].ty?m.push(l(t[d],n[d],f)):"rd"===t[d].ty?m.push(p(t[d],n[d],f)):"rp"===t[d].ty?m.push(c(t[d],n[d],f)):"gf"===t[d].ty?m.push(i(t[d],n[d],f)):m.push((t[d],n[d],function(){return null})));return m}function e(e,r,i){var s=function(t){switch(t){case"ADBE Vectors Group":case"Contents":case 2:return s.content;default:return s.transform}};s.propertyGroup=propertyGroupFactory(s,i);var a=function(e,r,i){var s,a=function(t){for(var e=0,r=s.length;e<r;){if(s[e]._name===t||s[e].mn===t||s[e].propertyIndex===t||s[e].ix===t||s[e].ind===t)return s[e];e+=1}return"number"==typeof t?s[t-1]:null};a.propertyGroup=propertyGroupFactory(a,i),s=t(e.it,r.it,a.propertyGroup),a.numProperties=s.length;var o=n(e.it[e.it.length-1],r.it[r.it.length-1],a.propertyGroup);return a.transform=o,a.propertyIndex=e.cix,a._name=e.nm,a}(e,r,s.propertyGroup),o=n(e.it[e.it.length-1],r.it[r.it.length-1],s.propertyGroup);return s.content=a,s.transform=o,Object.defineProperty(s,"_name",{get:function(){return e.nm}}),s.numProperties=e.np,s.propertyIndex=e.ix,s.nm=e.nm,s.mn=e.mn,s}function r(t,e,r){function i(t){return"Color"===t||"color"===t?i.color:"Opacity"===t||"opacity"===t?i.opacity:null}return Object.defineProperties(i,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(PropertyInterface("Color",r)),e.o.setGroupProperty(PropertyInterface("Opacity",r)),i}function i(t,e,r){function i(t){return"Start Point"===t||"start point"===t?i.startPoint:"End Point"===t||"end point"===t?i.endPoint:"Opacity"===t||"opacity"===t?i.opacity:null}return Object.defineProperties(i,{startPoint:{get:ExpressionPropertyInterface(e.s)},endPoint:{get:ExpressionPropertyInterface(e.e)},opacity:{get:ExpressionPropertyInterface(e.o)},type:{get:function(){return"a"}},_name:{value:t.nm},mn:{value:t.mn}}),e.s.setGroupProperty(PropertyInterface("Start Point",r)),e.e.setGroupProperty(PropertyInterface("End Point",r)),e.o.setGroupProperty(PropertyInterface("Opacity",r)),i}function s(t,e,r){var i,s=propertyGroupFactory(l,r),a=propertyGroupFactory(h,s);function n(r){Object.defineProperty(h,t.d[r].nm,{get:ExpressionPropertyInterface(e.d.dataProps[r].p)})}var o=t.d?t.d.length:0,h={};for(i=0;i<o;i+=1)n(i),e.d.dataProps[i].p.setGroupProperty(a);function l(t){return"Color"===t||"color"===t?l.color:"Opacity"===t||"opacity"===t?l.opacity:"Stroke Width"===t||"stroke width"===t?l.strokeWidth:null}return Object.defineProperties(l,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},strokeWidth:{get:ExpressionPropertyInterface(e.w)},dash:{get:function(){return h}},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(PropertyInterface("Color",s)),e.o.setGroupProperty(PropertyInterface("Opacity",s)),e.w.setGroupProperty(PropertyInterface("Stroke Width",s)),l}function a(t,e,r){function i(e){return e===t.e.ix||"End"===e||"end"===e?i.end:e===t.s.ix?i.start:e===t.o.ix?i.offset:null}var s=propertyGroupFactory(i,r);return i.propertyIndex=t.ix,e.s.setGroupProperty(PropertyInterface("Start",s)),e.e.setGroupProperty(PropertyInterface("End",s)),e.o.setGroupProperty(PropertyInterface("Offset",s)),i.propertyIndex=t.ix,i.propertyGroup=r,Object.defineProperties(i,{start:{get:ExpressionPropertyInterface(e.s)},end:{get:ExpressionPropertyInterface(e.e)},offset:{get:ExpressionPropertyInterface(e.o)},_name:{value:t.nm}}),i.mn=t.mn,i}function n(t,e,r){function i(e){return t.a.ix===e||"Anchor Point"===e?i.anchorPoint:t.o.ix===e||"Opacity"===e?i.opacity:t.p.ix===e||"Position"===e?i.position:t.r.ix===e||"Rotation"===e||"ADBE Vector Rotation"===e?i.rotation:t.s.ix===e||"Scale"===e?i.scale:t.sk&&t.sk.ix===e||"Skew"===e?i.skew:t.sa&&t.sa.ix===e||"Skew Axis"===e?i.skewAxis:null}var s=propertyGroupFactory(i,r);return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity",s)),e.transform.mProps.p.setGroupProperty(PropertyInterface("Position",s)),e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point",s)),e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale",s)),e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation",s)),e.transform.mProps.sk&&(e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew",s)),e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle",s))),e.transform.op.setGroupProperty(PropertyInterface("Opacity",s)),Object.defineProperties(i,{opacity:{get:ExpressionPropertyInterface(e.transform.mProps.o)},position:{get:ExpressionPropertyInterface(e.transform.mProps.p)},anchorPoint:{get:ExpressionPropertyInterface(e.transform.mProps.a)},scale:{get:ExpressionPropertyInterface(e.transform.mProps.s)},rotation:{get:ExpressionPropertyInterface(e.transform.mProps.r)},skew:{get:ExpressionPropertyInterface(e.transform.mProps.sk)},skewAxis:{get:ExpressionPropertyInterface(e.transform.mProps.sa)},_name:{value:t.nm}}),i.ty="tr",i.mn=t.mn,i.propertyGroup=r,i}function o(t,e,r){function i(e){return t.p.ix===e?i.position:t.s.ix===e?i.size:null}var s=propertyGroupFactory(i,r);i.propertyIndex=t.ix;var a="tm"===e.sh.ty?e.sh.prop:e.sh;return a.s.setGroupProperty(PropertyInterface("Size",s)),a.p.setGroupProperty(PropertyInterface("Position",s)),Object.defineProperties(i,{size:{get:ExpressionPropertyInterface(a.s)},position:{get:ExpressionPropertyInterface(a.p)},_name:{value:t.nm}}),i.mn=t.mn,i}function h(t,e,r){function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.rotation:t.pt.ix===e?i.points:t.or.ix===e||"ADBE Vector Star Outer Radius"===e?i.outerRadius:t.os.ix===e?i.outerRoundness:!t.ir||t.ir.ix!==e&&"ADBE Vector Star Inner Radius"!==e?t.is&&t.is.ix===e?i.innerRoundness:null:i.innerRadius}var s=propertyGroupFactory(i,r),a="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,a.or.setGroupProperty(PropertyInterface("Outer Radius",s)),a.os.setGroupProperty(PropertyInterface("Outer Roundness",s)),a.pt.setGroupProperty(PropertyInterface("Points",s)),a.p.setGroupProperty(PropertyInterface("Position",s)),a.r.setGroupProperty(PropertyInterface("Rotation",s)),t.ir&&(a.ir.setGroupProperty(PropertyInterface("Inner Radius",s)),a.is.setGroupProperty(PropertyInterface("Inner Roundness",s))),Object.defineProperties(i,{position:{get:ExpressionPropertyInterface(a.p)},rotation:{get:ExpressionPropertyInterface(a.r)},points:{get:ExpressionPropertyInterface(a.pt)},outerRadius:{get:ExpressionPropertyInterface(a.or)},outerRoundness:{get:ExpressionPropertyInterface(a.os)},innerRadius:{get:ExpressionPropertyInterface(a.ir)},innerRoundness:{get:ExpressionPropertyInterface(a.is)},_name:{value:t.nm}}),i.mn=t.mn,i}function l(t,e,r){function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.roundness:t.s.ix===e||"Size"===e||"ADBE Vector Rect Size"===e?i.size:null}var s=propertyGroupFactory(i,r),a="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,a.p.setGroupProperty(PropertyInterface("Position",s)),a.s.setGroupProperty(PropertyInterface("Size",s)),a.r.setGroupProperty(PropertyInterface("Rotation",s)),Object.defineProperties(i,{position:{get:ExpressionPropertyInterface(a.p)},roundness:{get:ExpressionPropertyInterface(a.r)},size:{get:ExpressionPropertyInterface(a.s)},_name:{value:t.nm}}),i.mn=t.mn,i}function p(t,e,r){function i(e){return t.r.ix===e||"Round Corners 1"===e?i.radius:null}var s=propertyGroupFactory(i,r),a=e;return i.propertyIndex=t.ix,a.rd.setGroupProperty(PropertyInterface("Radius",s)),Object.defineProperties(i,{radius:{get:ExpressionPropertyInterface(a.rd)},_name:{value:t.nm}}),i.mn=t.mn,i}function c(t,e,r){function i(e){return t.c.ix===e||"Copies"===e?i.copies:t.o.ix===e||"Offset"===e?i.offset:null}var s=propertyGroupFactory(i,r),a=e;return i.propertyIndex=t.ix,a.c.setGroupProperty(PropertyInterface("Copies",s)),a.o.setGroupProperty(PropertyInterface("Offset",s)),Object.defineProperties(i,{copies:{get:ExpressionPropertyInterface(a.c)},offset:{get:ExpressionPropertyInterface(a.o)},_name:{value:t.nm}}),i.mn=t.mn,i}return function(e,r,i){var s;function a(t){if("number"==typeof t)return 0===(t=void 0===t?1:t)?i:s[t-1];for(var e=0,r=s.length;e<r;){if(s[e]._name===t)return s[e];e+=1}return null}return a.propertyGroup=propertyGroupFactory(a,(function(){return i})),s=t(e,r,a.propertyGroup),a.numProperties=s.length,a._name="Contents",a}}(),TextExpressionInterface=function(t){var e,r;function i(t){return"ADBE Text Document"===t?i.sourceText:null}return Object.defineProperty(i,"sourceText",{get:function(){t.textProperty.getValue();var i=t.textProperty.currentData.t;return i!==e&&(t.textProperty.currentData.t=e,(r=new String(i)).value=i||new String(i)),r}}),i},LayerExpressionInterface=function(){function t(t){var e=new Matrix;return void 0!==t?this._elem.finalTransform.mProp.getValueAtTime(t).clone(e):this._elem.finalTransform.mProp.applyToMatrix(e),e}function e(t,e){var r=this.getMatrix(e);return r.props[12]=0,r.props[13]=0,r.props[14]=0,this.applyPoint(r,t)}function r(t,e){var r=this.getMatrix(e);return this.applyPoint(r,t)}function i(t,e){var r=this.getMatrix(e);return r.props[12]=0,r.props[13]=0,r.props[14]=0,this.invertPoint(r,t)}function s(t,e){var r=this.getMatrix(e);return this.invertPoint(r,t)}function a(t,e){if(this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)}return t.applyToPointArray(e[0],e[1],e[2]||0)}function n(t,e){if(this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)}return t.inversePoint(e)}function o(t){var e=new Matrix;if(e.reset(),this._elem.finalTransform.mProp.applyToMatrix(e),this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);return e.inversePoint(t)}return e.inversePoint(t)}function h(){return[1,1,1,1]}return function(l){var p;function c(t){switch(t){case"ADBE Root Vectors Group":case"Contents":case 2:return c.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return p;case 4:case"ADBE Effect Parade":case"effects":case"Effects":return c.effect;case"ADBE Text Properties":return c.textInterface;default:return null}}c.getMatrix=t,c.invertPoint=n,c.applyPoint=a,c.toWorld=r,c.toWorldVec=e,c.fromWorld=s,c.fromWorldVec=i,c.toComp=r,c.fromComp=o,c.sampleImage=h,c.sourceRectAtTime=l.sourceRectAtTime.bind(l),c._elem=l;var f=getDescriptor(p=TransformExpressionInterface(l.finalTransform.mProp),"anchorPoint");return Object.defineProperties(c,{hasParent:{get:function(){return l.hierarchy.length}},parent:{get:function(){return l.hierarchy[0].layerInterface}},rotation:getDescriptor(p,"rotation"),scale:getDescriptor(p,"scale"),position:getDescriptor(p,"position"),opacity:getDescriptor(p,"opacity"),anchorPoint:f,anchor_point:f,transform:{get:function(){return p}},active:{get:function(){return l.isInRange}}}),c.startTime=l.data.st,c.index=l.data.ind,c.source=l.data.refId,c.height=0===l.data.ty?l.data.h:100,c.width=0===l.data.ty?l.data.w:100,c.inPoint=l.data.ip/l.comp.globalData.frameRate,c.outPoint=l.data.op/l.comp.globalData.frameRate,c._name=l.data.nm,c.registerMaskInterface=function(t){c.mask=new MaskManagerInterface(t,l)},c.registerEffectsInterface=function(t){c.effect=t},c}}(),FootageInterface=(dataInterfaceFactory=function(t){function e(t){return"Outline"===t?e.outlineInterface():null}return e._name="Outline",e.outlineInterface=function(t){var e="",r=t.getFootageData();function i(t){if(r[t])return e=t,"object"==typeof(r=r[t])?i:r;var s=t.indexOf(e);if(-1!==s){var a=parseInt(t.substr(s+e.length),10);return"object"==typeof(r=r[a])?i:r}return""}return function(){return e="",r=t.getFootageData(),i}}(t),e},function(t){function e(t){return"Data"===t?e.dataInterface:null}return e._name="Data",e.dataInterface=dataInterfaceFactory(t),e}),dataInterfaceFactory,CompExpressionInterface=function(t){function e(e){for(var r=0,i=t.layers.length;r<i;){if(t.layers[r].nm===e||t.layers[r].ind===e)return t.elements[r].layerInterface;r+=1}return null}return Object.defineProperty(e,"_name",{value:t.data.nm}),e.layer=e,e.pixelAspect=1,e.height=t.data.h||t.globalData.compSize.h,e.width=t.data.w||t.globalData.compSize.w,e.pixelAspect=1,e.frameDuration=1/t.globalData.frameRate,e.displayStartTime=0,e.numLayers=t.layers.length,e},TransformExpressionInterface=function(t){function e(t){switch(t){case"scale":case"Scale":case"ADBE Scale":case 6:return e.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return e.rotation;case"ADBE Rotate X":return e.xRotation;case"ADBE Rotate Y":return e.yRotation;case"position":case"Position":case"ADBE Position":case 2:return e.position;case"ADBE Position_0":return e.xPosition;case"ADBE Position_1":return e.yPosition;case"ADBE Position_2":return e.zPosition;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return e.anchorPoint;case"opacity":case"Opacity":case 11:return e.opacity;default:return null}}var r,i,s,a;return Object.defineProperty(e,"rotation",{get:ExpressionPropertyInterface(t.r||t.rz)}),Object.defineProperty(e,"zRotation",{get:ExpressionPropertyInterface(t.rz||t.r)}),Object.defineProperty(e,"xRotation",{get:ExpressionPropertyInterface(t.rx)}),Object.defineProperty(e,"yRotation",{get:ExpressionPropertyInterface(t.ry)}),Object.defineProperty(e,"scale",{get:ExpressionPropertyInterface(t.s)}),t.p?a=ExpressionPropertyInterface(t.p):(r=ExpressionPropertyInterface(t.px),i=ExpressionPropertyInterface(t.py),t.pz&&(s=ExpressionPropertyInterface(t.pz))),Object.defineProperty(e,"position",{get:function(){return t.p?a():[r(),i(),s?s():0]}}),Object.defineProperty(e,"xPosition",{get:ExpressionPropertyInterface(t.px)}),Object.defineProperty(e,"yPosition",{get:ExpressionPropertyInterface(t.py)}),Object.defineProperty(e,"zPosition",{get:ExpressionPropertyInterface(t.pz)}),Object.defineProperty(e,"anchorPoint",{get:ExpressionPropertyInterface(t.a)}),Object.defineProperty(e,"opacity",{get:ExpressionPropertyInterface(t.o)}),Object.defineProperty(e,"skew",{get:ExpressionPropertyInterface(t.sk)}),Object.defineProperty(e,"skewAxis",{get:ExpressionPropertyInterface(t.sa)}),Object.defineProperty(e,"orientation",{get:ExpressionPropertyInterface(t.or)}),e},ProjectInterface=function(){function t(t){this.compositions.push(t)}return function(){function e(t){for(var e=0,r=this.compositions.length;e<r;){if(this.compositions[e].data&&this.compositions[e].data.nm===t)return this.compositions[e].prepareFrame&&this.compositions[e].data.xt&&this.compositions[e].prepareFrame(this.currentFrame),this.compositions[e].compInterface;e+=1}return null}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}}(),EffectsExpressionInterface=function(){var t={createEffectsInterface:function(t,r){if(t.effectsManager){var i,s=[],a=t.data.ef,n=t.effectsManager.effectElements.length;for(i=0;i<n;i+=1)s.push(e(a[i],t.effectsManager.effectElements[i],r,t));var o=t.data.ef||[],h=function(t){for(i=0,n=o.length;i<n;){if(t===o[i].nm||t===o[i].mn||t===o[i].ix)return s[i];i+=1}return null};return Object.defineProperty(h,"numProperties",{get:function(){return o.length}}),h}return null}};function e(t,i,s,a){function n(e){for(var r=t.ef,i=0,s=r.length;i<s;){if(e===r[i].nm||e===r[i].mn||e===r[i].ix)return 5===r[i].ty?l[i]:l[i]();i+=1}throw new Error}var o,h=propertyGroupFactory(n,s),l=[],p=t.ef.length;for(o=0;o<p;o+=1)5===t.ef[o].ty?l.push(e(t.ef[o],i.effectElements[o],i.effectElements[o].propertyGroup,a)):l.push(r(i.effectElements[o],t.ef[o].ty,a,h));return"ADBE Color Control"===t.mn&&Object.defineProperty(n,"color",{get:function(){return l[0]()}}),Object.defineProperties(n,{numProperties:{get:function(){return t.np}},_name:{value:t.nm},propertyGroup:{value:h}}),n.enabled=0!==t.en,n.active=n.enabled,n}function r(t,e,r,i){var s=ExpressionPropertyInterface(t.p);return t.p.setGroupProperty&&t.p.setGroupProperty(PropertyInterface("",i)),function(){return 10===e?r.comp.compInterface(t.p.v):s()}}return t}(),MaskManagerInterface=function(){function t(t,e){this._mask=t,this._data=e}return Object.defineProperty(t.prototype,"maskPath",{get:function(){return this._mask.prop.k&&this._mask.prop.getValue(),this._mask.prop}}),Object.defineProperty(t.prototype,"maskOpacity",{get:function(){return this._mask.op.k&&this._mask.op.getValue(),100*this._mask.op.v}}),function(e){var r,i=createSizedArray(e.viewData.length),s=e.viewData.length;for(r=0;r<s;r+=1)i[r]=new t(e.viewData[r],e.masksProperties[r]);return function(t){for(r=0;r<s;){if(e.masksProperties[r].nm===t)return i[r];r+=1}return null}}}(),ExpressionPropertyInterface=function(){var t={pv:0,v:0,mult:1},e={pv:[0,0,0],v:[0,0,0],mult:1};function r(t,e,r){Object.defineProperty(t,"velocity",{get:function(){return e.getVelocityAtTime(e.comp.currentFrame)}}),t.numKeys=e.keyframes?e.keyframes.length:0,t.key=function(i){if(!t.numKeys)return 0;var s="";s="s"in e.keyframes[i-1]?e.keyframes[i-1].s:"e"in e.keyframes[i-2]?e.keyframes[i-2].e:e.keyframes[i-2].s;var a="unidimensional"===r?new Number(s):Object.assign({},s);return a.time=e.keyframes[i-1].t/e.elem.comp.globalData.frameRate,a.value="unidimensional"===r?s[0]:s,a},t.valueAtTime=e.getValueAtTime,t.speedAtTime=e.getSpeedAtTime,t.velocityAtTime=e.getVelocityAtTime,t.propertyGroup=e.propertyGroup}function i(){return t}return function(s){return s?"unidimensional"===s.propType?function(e){e&&"pv"in e||(e=t);var i=1/e.mult,s=e.pv*i,a=new Number(s);return a.value=s,r(a,e,"unidimensional"),function(){return e.k&&e.getValue(),s=e.v*i,a.value!==s&&((a=new Number(s)).value=s,r(a,e,"unidimensional")),a}}(s):function(t){t&&"pv"in t||(t=e);var i=1/t.mult,s=t.data&&t.data.l||t.pv.length,a=createTypedArray("float32",s),n=createTypedArray("float32",s);return a.value=n,r(a,t,"multidimensional"),function(){t.k&&t.getValue();for(var e=0;e<s;e+=1)n[e]=t.v[e]*i,a[e]=n[e];return a}}(s):i}}(),TextExpressionSelectorPropFactory=function(){function t(t,e){return this.textIndex=t+1,this.textTotal=e,this.v=this.getValue()*this.mult,this.v}return function(e,r){this.pv=1,this.comp=e.comp,this.elem=e,this.mult=.01,this.propType="textSelector",this.textTotal=r.totalChars,this.selectorValue=100,this.lastValue=[1,1,1],this.k=!0,this.x=!0,this.getValue=ExpressionManager.initiateExpression.bind(this)(e,r,this),this.getMult=t,this.getVelocityAtTime=expressionHelpers.getVelocityAtTime,this.kf?this.getValueAtTime=expressionHelpers.getValueAtTime.bind(this):this.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(this),this.setGroupProperty=expressionHelpers.setGroupProperty}}(),propertyGetTextProp=TextSelectorProp.getTextSelectorProp;function SliderEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function AngleEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function ColorEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function PointEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function LayerIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function MaskIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function CheckboxEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function NoValueEffect(){this.p={}}function EffectsManager(t,e){var r,i=t.ef||[];this.effectElements=[];var s,a=i.length;for(r=0;r<a;r+=1)s=new GroupEffect(i[r],e),this.effectElements.push(s)}function GroupEffect(t,e){this.init(t,e)}TextSelectorProp.getTextSelectorProp=function(t,e,r){return 1===e.t?new TextExpressionSelectorPropFactory(t,e,r):propertyGetTextProp(t,e,r)},extendPrototype([DynamicPropertyContainer],GroupEffect),GroupEffect.prototype.getValue=GroupEffect.prototype.iterateDynamicProperties,GroupEffect.prototype.init=function(t,e){var r;this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var i,s=this.data.ef.length,a=this.data.ef;for(r=0;r<s;r+=1){switch(i=null,a[r].ty){case 0:i=new SliderEffect(a[r],e,this);break;case 1:i=new AngleEffect(a[r],e,this);break;case 2:i=new ColorEffect(a[r],e,this);break;case 3:i=new PointEffect(a[r],e,this);break;case 4:case 7:i=new CheckboxEffect(a[r],e,this);break;case 10:i=new LayerIndexEffect(a[r],e,this);break;case 11:i=new MaskIndexEffect(a[r],e,this);break;case 5:i=new EffectsManager(a[r],e,this);break;default:i=new NoValueEffect(a[r],e,this)}i&&this.effectElements.push(i)}};var lottie={};function setLocationHref(t){locationHref=t}function searchAnimations(){!0===standalone?animationManager.searchAnimations(animationData,standalone,renderer):animationManager.searchAnimations()}function setSubframeRendering(t){subframeEnabled=t}function setIDPrefix(t){idPrefix=t}function loadAnimation(t){return!0===standalone&&(t.animationData=JSON.parse(animationData)),animationManager.loadAnimation(t)}function setQuality(t){if("string"==typeof t)switch(t){case"high":defaultCurveSegments=200;break;default:case"medium":defaultCurveSegments=50;break;case"low":defaultCurveSegments=10}else!isNaN(t)&&t>1&&(defaultCurveSegments=t);roundValues(!(defaultCurveSegments>=50))}function inBrowser(){return"undefined"!=typeof navigator}function installPlugin(t,e){"expressions"===t&&(expressionsPlugin=e)}function getFactory(t){switch(t){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix;default:return null}}function checkReady(){"complete"===document.readyState&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(t){for(var e=queryString.split("&"),r=0;r<e.length;r+=1){var i=e[r].split("=");if(decodeURIComponent(i[0])==t)return decodeURIComponent(i[1])}return null}lottie.play=animationManager.play,lottie.pause=animationManager.pause,lottie.setLocationHref=setLocationHref,lottie.togglePause=animationManager.togglePause,lottie.setSpeed=animationManager.setSpeed,lottie.setDirection=animationManager.setDirection,lottie.stop=animationManager.stop,lottie.searchAnimations=searchAnimations,lottie.registerAnimation=animationManager.registerAnimation,lottie.loadAnimation=loadAnimation,lottie.setSubframeRendering=setSubframeRendering,lottie.resize=animationManager.resize,lottie.goToAndStop=animationManager.goToAndStop,lottie.destroy=animationManager.destroy,lottie.setQuality=setQuality,lottie.inBrowser=inBrowser,lottie.installPlugin=installPlugin,lottie.freeze=animationManager.freeze,lottie.unfreeze=animationManager.unfreeze,lottie.setVolume=animationManager.setVolume,lottie.mute=animationManager.mute,lottie.unmute=animationManager.unmute,lottie.getRegisteredAnimations=animationManager.getRegisteredAnimations,lottie.useWebWorker=function(t){_useWebWorker=t},lottie.setIDPrefix=setIDPrefix,lottie.__getFactory=getFactory,lottie.version="5.8.1";var standalone="__[STANDALONE]__",animationData="__[ANIMATIONDATA]__",renderer="",queryString;if(standalone){var scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""};queryString=myScript.src.replace(/^[^\?]+\??/,""),renderer=getQueryVariable("renderer")}var readyStateCheckInterval=setInterval(checkReady,100);return lottie},module.exports?module.exports=factory(root):(root.lottie=factory(root),root.bodymovin=root.lottie))})(lottie$1);var lottie=lottie$1.exports,_templateObject$1,styles=r$3(_templateObject$1||(_templateObject$1=_taggedTemplateLiteral(["\n  * {\n    box-sizing: border-box;\n  }\n\n  :host {\n    --lottie-player-toolbar-height: 35px;\n    --lottie-player-toolbar-background-color: transparent;\n    --lottie-player-toolbar-icon-color: #999;\n    --lottie-player-toolbar-icon-hover-color: #222;\n    --lottie-player-toolbar-icon-active-color: #555;\n    --lottie-player-seeker-track-color: #ccc;\n    --lottie-player-seeker-thumb-color: rgba(0, 107, 120, 0.8);\n    --lottie-player-seeker-display: block;\n\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n\n  .main {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n  }\n\n  .animation {\n    width: 100%;\n    height: 100%;\n    display: flex;\n  }\n  .animation.controls {\n    height: calc(100% - 35px);\n  }\n\n  .toolbar {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    background-color: var(--lottie-player-toolbar-background-color);\n    margin: 0 5px;\n    height: 35px;\n  }\n\n  .toolbar button {\n    cursor: pointer;\n    fill: var(--lottie-player-toolbar-icon-color);\n    display: flex;\n    background: none;\n    border: 0;\n    padding: 0;\n    outline: none;\n    height: 100%;\n  }\n\n  .toolbar button:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button.active {\n    fill: var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button.active:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button:focus {\n    outline: 1px dotted var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button svg {\n  }\n\n  .toolbar button.disabled svg {\n    display: none;\n  }\n\n  .seeker {\n    -webkit-appearance: none;\n    width: 95%;\n    outline: none;\n    background-color: var(--lottie-player-toolbar-background-color);\n    display: var(--lottie-player-seeker-display);\n  }\n\n  .seeker::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-webkit-slider-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -5px;\n  }\n  .seeker:focus::-webkit-slider-runnable-track {\n    background: #999;\n  }\n  .seeker::-moz-range-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-moz-range-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker::-ms-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n  .seeker::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-thumb {\n    border: 0;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker:focus::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n  }\n  .seeker:focus::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n  }\n\n  .error {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    align-items: center;\n  }\n"]))),_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,PlayerState,PlayMode,PlayerEvents;function parseSrc(t){if("object"==typeof t)return t;try{return JSON.parse(t)}catch(e){return new URL(t,window.location.href).toString()}}function isLottie(t){return["v","ip","op","layers","fr","w","h"].every((e=>Object.prototype.hasOwnProperty.call(t,e)))}function fromURL(t){return _fromURL.apply(this,arguments)}function _fromURL(){return(_fromURL=_asyncToGenerator((function*(t){if("string"!=typeof t)throw new Error("The url value must be a string");var e;try{var r=new URL(t),i=yield fetch(r.toString());e=yield i.json()}catch(t){throw new Error("An error occurred while trying to load the Lottie file from URL")}return e}))).apply(this,arguments)}exports.PlayerState=void 0,PlayerState=exports.PlayerState||(exports.PlayerState={}),PlayerState.Destroyed="destroyed",PlayerState.Error="error",PlayerState.Frozen="frozen",PlayerState.Loading="loading",PlayerState.Paused="paused",PlayerState.Playing="playing",PlayerState.Stopped="stopped",exports.PlayMode=void 0,PlayMode=exports.PlayMode||(exports.PlayMode={}),PlayMode.Bounce="bounce",PlayMode.Normal="normal",exports.PlayerEvents=void 0,PlayerEvents=exports.PlayerEvents||(exports.PlayerEvents={}),PlayerEvents.Complete="complete",PlayerEvents.Destroyed="destroyed",PlayerEvents.Error="error",PlayerEvents.Frame="frame",PlayerEvents.Freeze="freeze",PlayerEvents.Load="load",PlayerEvents.Loop="loop",PlayerEvents.Pause="pause",PlayerEvents.Play="play",PlayerEvents.Ready="ready",PlayerEvents.Rendered="rendered",PlayerEvents.Stop="stop",exports.LottiePlayer=class extends s{constructor(){super(...arguments),this.autoplay=!1,this.background="transparent",this.controls=!1,this.currentState=exports.PlayerState.Loading,this.description="Lottie animation",this.direction=1,this.hover=!1,this.intermission=1,this.loop=!1,this.mode=exports.PlayMode.Normal,this.preserveAspectRatio="xMidYMid meet",this.renderer="svg",this.speed=1,this._io=void 0,this._counter=1}load(t){var e=this;return _asyncToGenerator((function*(){if(e.shadowRoot){var r={container:e.container,loop:!1,autoplay:!1,renderer:e.renderer,rendererSettings:{preserveAspectRatio:e.preserveAspectRatio,clearCanvas:!1,progressiveLoad:!0,hideOnTransparent:!0}};try{var i=parseSrc(t),s={},a="string"==typeof i?"path":"animationData";e._lottie&&e._lottie.destroy(),e.webworkers&&lottie$1.exports.useWebWorker(!0),e._lottie=lottie$1.exports.loadAnimation(Object.assign(Object.assign({},r),{[a]:i})),e._attachEventListeners(),"path"===a?(s=yield fromURL(i),a="animationData"):s=i,isLottie(s)||(e.currentState=exports.PlayerState.Error,e.dispatchEvent(new CustomEvent(exports.PlayerEvents.Error)))}catch(t){e.currentState=exports.PlayerState.Error,e.dispatchEvent(new CustomEvent(exports.PlayerEvents.Error))}}}))()}getLottie(){return this._lottie}play(){this._lottie&&(this._lottie.play(),this.currentState=exports.PlayerState.Playing,this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Play)))}pause(){this._lottie&&(this._lottie.pause(),this.currentState=exports.PlayerState.Paused,this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Pause)))}stop(){this._lottie&&(this._counter=1,this._lottie.stop(),this.currentState=exports.PlayerState.Stopped,this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Stop)))}destroy(){this._lottie&&(this._lottie.destroy(),this._lottie=null,this.currentState=exports.PlayerState.Destroyed,this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Destroyed)),this.remove())}seek(t){if(this._lottie){var e=/^(\d+)(%?)$/.exec(t.toString());if(e){var r="%"===e[2]?this._lottie.totalFrames*Number(e[1])/100:Number(e[1]);this.seeker=r,this.currentState===exports.PlayerState.Playing?this._lottie.goToAndPlay(r,!0):(this._lottie.goToAndStop(r,!0),this._lottie.pause())}}}snapshot(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.shadowRoot){var e=this.shadowRoot.querySelector(".animation svg"),r=(new XMLSerializer).serializeToString(e);if(t){var i=document.createElement("a");i.href="data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(r)),i.download="download_".concat(this.seeker,".svg"),document.body.appendChild(i),i.click(),document.body.removeChild(i)}return r}}setSpeed(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._lottie&&this._lottie.setSpeed(t)}setDirection(t){this._lottie&&this._lottie.setDirection(t)}setLooping(t){this._lottie&&(this.loop=t,this._lottie.loop=t)}togglePlay(){return this.currentState===exports.PlayerState.Playing?this.pause():this.play()}toggleLooping(){this.setLooping(!this.loop)}resize(){this._lottie&&this._lottie.resize()}static get styles(){return styles}disconnectedCallback(){this.isConnected||(this._io&&(this._io.disconnect(),this._io=void 0),document.removeEventListener("visibilitychange",(()=>this._onVisibilityChange())),this.destroy())}render(){var t=this.controls?"main controls":"main",e=this.controls?"animation controls":"animation";return $(_templateObject||(_templateObject=_taggedTemplateLiteral([' <div\n      id="animation-container"\n      class=','\n      lang="en"\n      aria-label=','\n      role="img"\n    >\n      <div\n        id="animation"\n        class=','\n        style="background:',';"\n      >\n        ',"\n      </div>\n      ","\n    </div>"])),t,this.description,e,this.background,this.currentState===exports.PlayerState.Error?$(_templateObject2||(_templateObject2=_taggedTemplateLiteral(['<div class="error">⚠️</div>']))):void 0,this.controls?this.renderControls():void 0)}firstUpdated(){"IntersectionObserver"in window&&(this._io=new IntersectionObserver((t=>{t[0].isIntersecting?this.currentState===exports.PlayerState.Frozen&&this.play():this.currentState===exports.PlayerState.Playing&&this.freeze()})),this._io.observe(this.container)),void 0!==document.hidden&&document.addEventListener("visibilitychange",(()=>this._onVisibilityChange())),this.src&&this.load(this.src),this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Rendered))}renderControls(){var t=this.currentState===exports.PlayerState.Playing,e=this.currentState===exports.PlayerState.Paused,r=this.currentState===exports.PlayerState.Stopped;return $(_templateObject3||(_templateObject3=_taggedTemplateLiteral(['\n      <div\n        id="lottie-controls"\n        aria-label="lottie-animation-controls"\n        class="toolbar"\n      >\n        <button\n          id="lottie-play-button"\n          @click=',"\n          class=",'\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="play-pause"\n        >\n          ','\n        </button>\n        <button\n          id="lottie-stop-button"\n          @click=',"\n          class=",'\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="stop"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path d="M6 6h12v12H6V6z" />\n          </svg>\n        </button>\n        <input\n          id="lottie-seeker-input"\n          class="seeker"\n          type="range"\n          min="0"\n          step="1"\n          max="100"\n          .value=',"\n          @input=","\n          @mousedown=","\n          @mouseup=",'\n          aria-valuemin="1"\n          aria-valuemax="100"\n          role="slider"\n          aria-valuenow=','\n          tabindex="0"\n          aria-label="lottie-seek-input"\n        />\n        <button\n          id="lottie-loop-toggle"\n          @click=',"\n          class=",'\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="loop-toggle"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path\n              d="M17.016 17.016v-4.031h1.969v6h-12v3l-3.984-3.984 3.984-3.984v3h10.031zM6.984 6.984v4.031H5.015v-6h12v-3l3.984 3.984-3.984 3.984v-3H6.984z"\n            />\n          </svg>\n        </button>\n      </div>\n    '])),this.togglePlay,t||e?"active":"",$(t?_templateObject4||(_templateObject4=_taggedTemplateLiteral(['<svg\n                width="24"\n                height="24"\n                aria-hidden="true"\n                focusable="false"\n              >\n                <path\n                  d="M14.016 5.016H18v13.969h-3.984V5.016zM6 18.984V5.015h3.984v13.969H6z"\n                />\n              </svg>'])):_templateObject5||(_templateObject5=_taggedTemplateLiteral(['<svg\n                width="24"\n                height="24"\n                aria-hidden="true"\n                focusable="false"\n              >\n                <path d="M8.016 5.016L18.985 12 8.016 18.984V5.015z" />\n              </svg>']))),this.stop,r?"active":"",this.seeker,this._handleSeekChange,(()=>{this._prevState=this.currentState,this.freeze()}),(()=>{this._prevState===exports.PlayerState.Playing&&this.play()}),this.seeker,this.toggleLooping,this.loop?"active":"")}_onVisibilityChange(){!0===document.hidden&&this.currentState===exports.PlayerState.Playing?this.freeze():this.currentState===exports.PlayerState.Frozen&&this.play()}_handleSeekChange(t){if(this._lottie&&!isNaN(t.target.value)){var e=t.target.value/100*this._lottie.totalFrames;this.seek(e)}}_attachEventListeners(){this._lottie.addEventListener("enterFrame",(()=>{this.seeker=this._lottie.currentFrame/this._lottie.totalFrames*100,this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Frame,{detail:{frame:this._lottie.currentFrame,seeker:this.seeker}}))})),this._lottie.addEventListener("complete",(()=>{if(this.currentState===exports.PlayerState.Playing){if(!this.loop||this.count&&this._counter>=this.count){if(this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Complete)),this.mode!==exports.PlayMode.Bounce)return;if(0===this._lottie.currentFrame)return}this.mode===exports.PlayMode.Bounce?(this.count&&(this._counter+=.5),setTimeout((()=>{this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Loop)),this.currentState===exports.PlayerState.Playing&&(this._lottie.setDirection(-1*this._lottie.playDirection),this._lottie.play())}),this.intermission)):(this.count&&(this._counter+=1),window.setTimeout((()=>{this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Loop)),this.currentState===exports.PlayerState.Playing&&(-1===this.direction?(this.seek("99%"),this.play()):(this._lottie.stop(),this._lottie.play()))}),this.intermission))}else this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Complete))})),this._lottie.addEventListener("DOMLoaded",(()=>{this.setSpeed(this.speed),this.setDirection(this.direction),this.autoplay&&(-1===this.direction&&this.seek("100%"),this.play()),this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Ready))})),this._lottie.addEventListener("data_ready",(()=>{this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Load))})),this._lottie.addEventListener("data_failed",(()=>{this.currentState=exports.PlayerState.Error,this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Error))})),this.container.addEventListener("mouseenter",(()=>{this.hover&&this.currentState!==exports.PlayerState.Playing&&this.play()})),this.container.addEventListener("mouseleave",(()=>{this.hover&&this.currentState===exports.PlayerState.Playing&&this.stop()}))}freeze(){this._lottie&&(this._lottie.pause(),this.currentState=exports.PlayerState.Frozen,this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Freeze)))}},__decorate([e$5({type:Boolean})],exports.LottiePlayer.prototype,"autoplay",void 0),__decorate([e$5({type:String,reflect:!0})],exports.LottiePlayer.prototype,"background",void 0),__decorate([e$5({type:Boolean})],exports.LottiePlayer.prototype,"controls",void 0),__decorate([e$5({type:Number})],exports.LottiePlayer.prototype,"count",void 0),__decorate([e$5({type:String})],exports.LottiePlayer.prototype,"currentState",void 0),__decorate([e$5({type:String})],exports.LottiePlayer.prototype,"description",void 0),__decorate([e$5({type:Number})],exports.LottiePlayer.prototype,"direction",void 0),__decorate([e$5({type:Boolean})],exports.LottiePlayer.prototype,"hover",void 0),__decorate([e$5()],exports.LottiePlayer.prototype,"intermission",void 0),__decorate([e$5({type:Boolean,reflect:!0})],exports.LottiePlayer.prototype,"loop",void 0),__decorate([e$5()],exports.LottiePlayer.prototype,"mode",void 0),__decorate([e$5({type:String})],exports.LottiePlayer.prototype,"preserveAspectRatio",void 0),__decorate([e$5({type:String})],exports.LottiePlayer.prototype,"renderer",void 0),__decorate([e$5()],exports.LottiePlayer.prototype,"seeker",void 0),__decorate([e$5({type:Number})],exports.LottiePlayer.prototype,"speed",void 0),__decorate([e$5({type:String})],exports.LottiePlayer.prototype,"src",void 0),__decorate([e$5({type:Boolean})],exports.LottiePlayer.prototype,"webworkers",void 0),__decorate([i(".animation")],exports.LottiePlayer.prototype,"container",void 0),exports.LottiePlayer=__decorate([n$1("lottie-player")],exports.LottiePlayer),exports.parseSrc=parseSrc,Object.defineProperty(exports,"__esModule",{value:!0})}));
//# sourceMappingURL=lottie-player.js.map
/**
 * Kakao SDK for JavaScript - v1.42.0
 *
 * Copyright 2017 Kakao Corp.
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 * OSS Notice | KakaoSDK-Javascript
 *
 * This application is Copyright © Kakao Corp. All rights reserved.
 * The following sets forth attribution notices for third party software that may be contained in this application.
 * If you have any questions or concerns, please contact us at opensource@kakaocorp.com
 *
 *
 * crypto-js
 *
 * https://github.com/brix/crypto-js
 *
 * Copyright 2009-2013 Jeff Mott
 * Copyright 2013-2016 Evan Vosberg
 *
 * MIT License
 *
 *
 * easyXDM
 *
 * https://github.com/oyvindkinsey/easyXDM/
 *
 * Copyright 2009-2011 Øyvind Sean Kinsey, oyvind@kinsey.no
 *
 * MIT License
 *
 *
 * ES6-Promise
 *
 * https://github.com/stefanpenner/es6-promise
 *
 * Copyright 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors
 *
 * MIT License
 *
 *
 * Kakao Web2App Library
 *
 * https://github.com/kakao/web2app
 *
 * Copyright 2015 Kakao Corp. http://www.kakaocorp.com
 *
 * MIT License
 *
 *
 * lodash
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors
 *
 * MIT License
 *
 *
 * ua_parser
 *
 * https://github.com/html5crew/ua_parser
 *
 * Copyright HTML5 Tech. Team in Daum Communications Corp.
 *
 * MIT License
 *
 *
 * ``````````
 * MIT License
 *
 * Copyright (c)
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ``````````
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
      (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Kakao = global.Kakao || {}));
})(this, (function (exports) { 'use strict';

  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
  var freeGlobal$1 = freeGlobal;

  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  var root = freeGlobal$1 || freeSelf || Function('return this')();
  var root$1 = root;

  var Symbol$1 = root$1.Symbol;
  var Symbol$2 = Symbol$1;

  var objectProto$a = Object.prototype;
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$a.toString;
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;
  function getRawTag(value) {
    var isOwn = hasOwnProperty$8.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  var objectProto$9 = Object.prototype;
  var nativeObjectToString = objectProto$9.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }

  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  var symbolTag = '[object Symbol]';
  function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }

  var isArray = Array.isArray;
  var isArray$1 = isArray;

  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
  }

  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }

  var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }

  function toInteger(value) {
    var result = toFinite(value),
      remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }

  function identity(value) {
    return value;
  }

  var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var coreJsData = root$1['__core-js_shared__'];
  var coreJsData$1 = coreJsData;

  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  var funcProto$2 = Function.prototype;
  var funcToString$2 = funcProto$2.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$2.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }

  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto$1 = Function.prototype,
    objectProto$8 = Object.prototype;
  var funcToString$1 = funcProto$1.toString;
  var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$7).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  var HOT_COUNT = 800,
    HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut(func) {
    var count = 0,
      lastCalled = 0;
    return function () {
      var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  function constant(value) {
    return function () {
      return value;
    };
  }

  var defineProperty = function () {
    try {
      var func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }();
  var defineProperty$1 = defineProperty;

  var baseSetToString = !defineProperty$1 ? identity : function (func, string) {
    return defineProperty$1(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant(string),
      'writable': true
    });
  };
  var baseSetToString$1 = baseSetToString;

  var setToString = shortOut(baseSetToString$1);
  var setToString$1 = setToString;

  function arrayEach(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty$1) {
      defineProperty$1(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  var objectProto$7 = Object.prototype;
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$6.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }

  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1,
      length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }

  var nativeMax = Math.max;
  function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function () {
      var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  function baseRest(func, start) {
    return setToString$1(overRest(func, start, identity), func + '');
  }

  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
      return eq(object[index], value);
    }
    return false;
  }

  function createAssigner(assigner) {
    return baseRest(function (object, sources) {
      var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
      customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  var objectProto$6 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$6;
    return value === proto;
  }

  function baseTimes(n, iteratee) {
    var index = -1,
      result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  var argsTag$1 = '[object Arguments]';
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag$1;
  }

  var objectProto$5 = Object.prototype;
  var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
  var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
  var isArguments = baseIsArguments(function () {
    return arguments;
  }()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty$5.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  };
  var isArguments$1 = isArguments;

  function stubFalse() {
    return false;
  }

  var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;
  var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;
  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
  var Buffer = moduleExports$1 ? root$1.Buffer : undefined;
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
  var isBuffer = nativeIsBuffer || stubFalse;
  var isBuffer$1 = isBuffer;

  var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag$1 = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag$1 = '[object String]',
    weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal$1.process;
  var nodeUtil = function () {
    try {
      var types = freeModule && freeModule.require && freeModule.require('util').types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();
  var nodeUtil$1 = nodeUtil;

  var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  var isTypedArray$1 = isTypedArray;

  var objectProto$4 = Object.prototype;
  var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray$1(value),
      isArg = !isArr && isArguments$1(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && (
        key == 'length' ||
        isBuff && (key == 'offset' || key == 'parent') ||
        isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
        isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }

  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  var nativeKeys = overArg(Object.keys, Object);
  var nativeKeys$1 = nativeKeys;

  var objectProto$3 = Object.prototype;
  var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys$1(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  function keys$1(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  var objectProto$2 = Object.prototype;
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
      result = [];
    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$2.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  var assignIn = createAssigner(function (object, source) {
    copyObject(source, keysIn(source), object);
  });
  var extend = assignIn;

  var getPrototype = overArg(Object.getPrototypeOf, Object);
  var getPrototype$1 = getPrototype;

  var objectTag = '[object Object]';
  var funcProto = Function.prototype,
    objectProto$1 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype$1(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }

  function createBaseFor(fromRight) {
    return function (object, iteratee, keysFunc) {
      var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  var baseFor = createBaseFor();
  var baseFor$1 = baseFor;

  function baseForOwn(object, iteratee) {
    return object && baseFor$1(object, iteratee, keys$1);
  }

  function createBaseEach(eachFunc, fromRight) {
    return function (collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);
      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }

  var baseEach = createBaseEach(baseForOwn);
  var baseEach$1 = baseEach;

  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var defaults = baseRest(function (object, sources) {
    object = Object(object);
    var index = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : undefined;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      length = 1;
    }
    while (++index < length) {
      var source = sources[index];
      var props = keysIn(source);
      var propsIndex = -1;
      var propsLength = props.length;
      while (++propsIndex < propsLength) {
        var key = props[propsIndex];
        var value = object[key];
        if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
          object[key] = source[key];
        }
      }
    }
    return object;
  });
  var defaults$1 = defaults;

  function castFunction(value) {
    return typeof value == 'function' ? value : identity;
  }

  function forEach(collection, iteratee) {
    var func = isArray$1(collection) ? arrayEach : baseEach$1;
    return func(collection, castFunction(iteratee));
  }

  var stringTag = '[object String]';
  function isString(value) {
    return typeof value == 'string' || !isArray$1(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
  }

  var boolTag = '[object Boolean]';
  function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
  }

  function isElement(value) {
    return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
  }

  function isInteger(value) {
    return typeof value == 'number' && value == toInteger(value);
  }

  var numberTag = '[object Number]';
  function isNumber(value) {
    return typeof value == 'number' || isObjectLike(value) && baseGetTag(value) == numberTag;
  }

  function checkObjType(type) {
    return function (e) {
      return Object.prototype.toString.call(e) === "[object ".concat(type, "]");
    };
  }
  function isBlob(b) {
    return checkObjType('Blob')(b);
  }
  function isFile(f) {
    return checkObjType('File')(f);
  }
  function isFileList(fl) {
    return checkObjType('FileList')(fl);
  }
  function isURL(u) {
    var urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    return urlRegex.test(u);
  }
  function isJSONString(s) {
    try {
      JSON.parse(s);
    } catch (e) {
      return false;
    }
    return true;
  }
  function map(arr, fn) {
    return Array.prototype.slice.call(arr).map(fn);
  }
  function every(arr, fn) {
    return Array.prototype.slice.call(arr).every(fn);
  }
  function difference(a0, a1) {
    var arrays = [a0, a1];
    return arrays.reduce(function (a, b) {
      return a.filter(function (c) {
        return b.indexOf(c) === -1;
      });
    });
  }
  function keys(e) {
    return Object.keys(e || {});
  }
  function emptyFunc() {
  }
  function getRandomString() {
    return Math.random().toString(36).slice(2);
  }
  function getElement(e) {
    if (isElement(e)) {
      return e;
    } else if (isString(e)) {
      return document.querySelector(e);
    } else {
      return null;
    }
  }
  function addEvent(target, type, callback) {
    if (target.addEventListener) {
      target.addEventListener(type, callback, false);
    }
  }
  function removeEvent(target, type, callback) {
    if (target.removeEventListener) {
      target.removeEventListener(type, callback, false);
    }
  }
  function buildQueryString(params) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var esc = encode ? encodeURIComponent : function (e) {
      return e;
    };
    var ret = map(keys(params), function (k) {
      var v = params[k];
      return esc(k) + '=' + esc(isObject(v) ? JSON.stringify(v) : v);
    });
    return ret.join('&');
  }
  function ab2str(buf) {
    var bytes = Array.prototype.slice.call(new Uint8Array(buf));
    return bytes.reduce(function (acc, b) {
      return acc + String.fromCharCode.apply(null, [b]);
    }, '');
  }
  function isOneOf(elements) {
    if (!isArray$1(elements)) {
      throw new Error('elements should be an Array');
    }
    return function (e) {
      return elements.indexOf(e) > -1;
    };
  }
  function passesOneOf(validators) {
    if (!isArray$1(validators)) {
      throw new Error('validators should be an Array');
    }
    return function (e) {
      return validators.some(function (v) {
        return v(e);
      });
    };
  }
  var localStorage = function () {
    var polyfill = {
      _data: {},
      setItem: function setItem(id, val) {
        return this._data[id] = String(val);
      },
      getItem: function getItem(id) {
        return this._data.hasOwnProperty(id) ? this._data[id] : null;
      },
      removeItem: function removeItem(id) {
        return delete this._data[id];
      },
      clear: function clear() {
        return this._data = {};
      }
    };
    try {
      if ('localStorage' in window && window['localStorage'] !== null) {
        window.localStorage.setItem('store', '');
        window.localStorage.removeItem('store');
        return window.localStorage;
      } else {
        return polyfill;
      }
    } catch (e) {
      return polyfill;
    }
  }();

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function commonjsRequire (path) {
    throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }

  var ua_parser = function () {
    if (!Array.isArray) {
      Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
      };
    }
    function checkUserAgent(ua) {
      var browser = {};
      var match = /(dolfin)[ \/]([\w.]+)/.exec(ua) || /(edge)[ \/]([\w.]+)/.exec(ua) || /(chrome)[ \/]([\w.]+)/.exec(ua) || /(tizen)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || ["", "unknown"];
      if (match[1] === "webkit") {
        match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) || /(android)[ \/]([\w._\-]+);/.exec(ua) || [match[0], "safari", match[2]];
      } else if (match[1] === "mozilla") {
        if (/trident/.test(ua)) {
          match[1] = "msie";
        } else {
          match[1] = "firefox";
        }
      } else if (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua)) {
        match[1] = "polaris";
      }
      browser[match[1]] = true;
      browser.name = match[1];
      browser.version = setVersion(match[2]);
      return browser;
    }
    function setVersion(versionString) {
      var version = {};
      var versions = versionString ? versionString.split(/\.|-|_/) : ["0", "0", "0"];
      version.info = versions.join(".");
      version.major = versions[0] || "0";
      version.minor = versions[1] || "0";
      version.patch = versions[2] || "0";
      return version;
    }
    function checkPlatform(ua) {
      if (isTablet(ua)) {
        return "tablet";
      } else if (isPc(ua)) {
        return "pc";
      } else if (isMobile(ua)) {
        return "mobile";
      } else {
        return "";
      }
    }
    function isPc(ua) {
      if (ua.match(/linux|windows (nt|98)|macintosh|cros/) && !ua.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)) {
        return true;
      }
      return false;
    }
    function isTablet(ua) {
      if (ua.match(/ipad/) || ua.match(/android/) && !ua.match(/mobi|mini|fennec/) || ua.match(/macintosh/) && window.navigator.maxTouchPoints > 1) {
        return true;
      }
      return false;
    }
    function isMobile(ua) {
      if (!!ua.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|tizen.+mobile|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)) {
        return true;
      } else {
        return false;
      }
    }
    function checkOs(ua) {
      var os = {},
        match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) || (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua) ? ["", "polaris", "0.0.0"] : false) || /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(ua) || /(android)[ \/]([\w._\-]+);/.exec(ua) || (/android/.test(ua) ? ["", "android", "0.0.0"] : false) || (/(windows)/.test(ua) ? ["", "windows", "0.0.0"] : false) || /(mac) os x ([\w._\-]+)/.exec(ua) || /(tizen)[ \/]([\w._\-]+);/.exec(ua) || (/(linux)/.test(ua) ? ["", "linux", "0.0.0"] : false) || (/webos/.test(ua) ? ["", "webos", "0.0.0"] : false) || /(cros)(?:\s[\w]+\s)([\d._\-]+)/.exec(ua) || /(bada)[ \/]([\w._\-]+)/.exec(ua) || (/bada/.test(ua) ? ["", "bada", "0.0.0"] : false) || (/(rim|blackberry|bb10)/.test(ua) ? ["", "blackberry", "0.0.0"] : false) || ["", "unknown", "0.0.0"];
      if (match[1] === "iphone" || match[1] === "ipad" || match[1] === "ipod") {
        match[1] = "ios";
      } else if (match[1] === "windows" && match[2] === "98") {
        match[2] = "0.98.0";
      }
      if (match[1] === "mac" && typeof window !== 'undefined' && window.navigator.maxTouchPoints > 1) {
        match[1] = "ios";
      }
      if (match[1] === 'cros') {
        match[1] = "chrome";
      }
      os[match[1]] = true;
      os.name = match[1];
      os.version = setVersion(match[2]);
      return os;
    }
    var baseAppList = ['crios', 'fxios', 'daumapps'];
    function checkApp(ua, customAppList) {
      var app = {},
        match = null,
        checkAppList = baseAppList;
      if (Array.isArray(customAppList)) {
        checkAppList = baseAppList.concat(customAppList);
      } else if (typeof customAppList === 'string') {
        checkAppList = baseAppList.concat([customAppList]);
      }
      for (var i = 0, len = checkAppList.length; i < len; i += 1) {
        var appname = checkAppList[i];
        var regex = new RegExp('(' + appname + ')[ \\/]([\\w._\\-]+)');
        match = regex.exec(ua);
        if (match) {
          break;
        }
      }
      if (!match) {
        match = ["", ""];
      }
      if (match[1]) {
        app.isApp = true;
        app.name = match[1];
        app.version = setVersion(match[2]);
      } else {
        app.isApp = false;
      }
      return app;
    }
    function getLowerUserAgent(ua) {
      var lowerUa = '';
      if (!ua) {
        if (typeof window !== 'undefined' && window.navigator && typeof window.navigator.userAgent === 'string') {
          lowerUa = window.navigator.userAgent.toLowerCase();
        } else {
          lowerUa = '';
        }
      } else {
        lowerUa = ua.toLowerCase();
      }
      return lowerUa;
    }
    var userAgent = function userAgent(ua, customAppList) {
      var lowerUa = getLowerUserAgent(ua);
      return {
        ua: lowerUa,
        browser: checkUserAgent(lowerUa),
        platform: checkPlatform(lowerUa),
        os: checkOs(lowerUa),
        app: checkApp(lowerUa, customAppList)
      };
    };
    return userAgent;
  }();
  var ua_parser$1 = ua_parser;

  var UA$1 = ua_parser$1();
  function getOrigin() {
    var _location = location,
      protocol = _location.protocol,
      hostname = _location.hostname,
      port = _location.port;
    return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
  }
  function getNavigator() {
    return navigator;
  }
  function getUA() {
    return UA$1;
  }

  var ACCOUNT = "https://accounts.kakao.com";
  var AUTH = "https://kauth.kakao.com";
  var API$2 = "https://kapi.kakao.com";
  var SHARER_DOMAIN = "https://sharer.kakao.com";
  var PICKER_DOMAIN = "https://friend-picker.kakao.com";
  var APPS_DOMAIN = "https://apps.kakao.com";
  var CHANNEL = "https://pf.kakao.com";
  var STORY = "https://story.kakao.com";
  var STORY_POST_SCHEME = "storylink://posting";
  var REDIRECT_URI = "JS-SDK";
  var UNIVERSAL_LINK = "https://talk-apps.kakao.com";
  var TALK_LOGIN_SCHEME = "kakaokompassauth://authorize";
  var TALK_LOGIN_REDIRECT_URI = "https://kapi.kakao.com/cors/afterlogin.html";
  var TALK_INAPP_SCHEME = "kakaotalk://inappbrowser";
  var TALK_SYNCPLUGIN_SCHEME = "kakaotalk://bizplugin?plugin_id=6011263b74fc2b49c73a7298";
  var TALK_LINK_SCHEME = "kakaolink://send";
  var TALK_ANDROID_PACKAGE = "com.kakao.talk";
  var NAVI_SCHEME = "kakaonavi-sdk://navigate";
  var NAVI_FALLBACK_URL = "https://kakaonavi.kakao.com/launch/index.do";
  var DEVELOPERS = "https://developers.kakao.com";

  var origin = getOrigin();
  var UA = getUA();
  var isTalkWebview = /KAKAOTALK/i.test(UA.ua);
  var VERSION = "1.42.0".concat('');
  var navigator$1 = getNavigator();
  var KAKAO_AGENT = ["sdk/".concat(VERSION), 'os/javascript', 'sdk_type/javascript', "lang/".concat(navigator$1.userLanguage || navigator$1.language), "device/".concat(navigator$1.platform.replace(/ /g, '_')), "origin/".concat(encodeURIComponent(origin))].join(' ');
  var URL = {
    accountDomain: ACCOUNT,
    authDomain: AUTH,
    authorize: "".concat(AUTH, "/oauth/authorize"),
    loginWidget: "".concat(AUTH, "/public/widget/login/kakaoLoginWidget.html"),
    redirectUri: REDIRECT_URI,
    universalKakaoLink: "".concat(UNIVERSAL_LINK, "/scheme/"),
    talkLoginScheme: TALK_LOGIN_SCHEME,
    talkLoginRedirectUri: TALK_LOGIN_REDIRECT_URI,
    talkInappScheme: TALK_INAPP_SCHEME,
    talkSyncpluginScheme: TALK_SYNCPLUGIN_SCHEME,
    apiRemote: "".concat(API$2, "/cors/"),
    sharerDomain: SHARER_DOMAIN,
    pickerDomain: PICKER_DOMAIN,
    appsDomain: APPS_DOMAIN,
    talkLinkScheme: TALK_LINK_SCHEME,
    talkAndroidPackage: TALK_ANDROID_PACKAGE,
    channel: CHANNEL,
    channelIcon: "".concat(DEVELOPERS, "/assets/img/about/logos"),
    storyShare: "".concat(STORY, "/s/share"),
    storyChannelFollow: "".concat(STORY, "/s/follow"),
    storyIcon: "".concat(DEVELOPERS, "/sdk/js/resources/story/icon_small.png"),
    storyPostScheme: STORY_POST_SCHEME,
    naviScheme: NAVI_SCHEME,
    naviFallback: NAVI_FALLBACK_URL
  };
  var appKey$1 = null;
  function getAppKey$1() {
    return appKey$1;
  }
  function setAppKey(_appKey) {
    appKey$1 = _appKey;
  }
  function KakaoError(message) {
    Error.prototype.constructor.apply(this, arguments);
    this.name = 'KakaoError';
    this.message = message;
  }
  KakaoError.prototype = new Error();
  function logDebug(obj) {
  }
  function makeModule(subModules) {
    var module = extend.apply(void 0, [{
      cleanup: function cleanup() {
        forEach(subModules, function (e) {
          return e.cleanup && e.cleanup();
        });
      }
    }].concat(_toConsumableArray(subModules)));
    return module;
  }
  function emptyCleanups(cleanups) {
    forEach(cleanups, function (fn) {
      fn();
    });
    cleanups.length = 0;
  }
  function validate(target, validator, callerMsg) {
    if (validator(target) === false) {
      throw new KakaoError("Illegal argument for ".concat(callerMsg));
    }
  }
  function processRules() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var rules = arguments.length > 1 ? arguments[1] : undefined;
    var callerMsg = arguments.length > 2 ? arguments[2] : undefined;
    if (!isObject(params)) {
      throw new Error('params should be an Object');
    }
    if (isFunction(rules.before)) {
      rules.before(params);
    }
    if (isFunction(rules.defaults)) {
      defaults$1(params, rules.defaults(params));
    } else {
      defaults$1(params, rules.defaults);
    }
    var _rules$required = rules.required,
      required = _rules$required === void 0 ? {} : _rules$required,
      _rules$optional = rules.optional,
      optional = _rules$optional === void 0 ? {} : _rules$optional;
    var missingRequiredKeys = difference(keys(required), keys(params));
    if (missingRequiredKeys.length > 0) {
      throw new KakaoError("Missing required keys: ".concat(missingRequiredKeys.join(','), " at ").concat(callerMsg));
    }
    var allowed = extend({}, required, optional);
    var invalidKeys = difference(keys(params), keys(allowed));
    if (invalidKeys.length > 0) {
      throw new KakaoError("Invalid parameter keys: ".concat(invalidKeys.join(','), " at ").concat(callerMsg));
    }
    forEach(params, function (value, key) {
      validate(value, allowed[key], "\"".concat(key, "\" in ").concat(callerMsg));
    });
    if (isFunction(rules.after)) {
      rules.after(params);
    }
    return params;
  }
  function generateTxId() {
    var tranId = Math.random().toString(36).slice(2) + getAppKey$1() + Date.now().toString(36);
    return tranId.slice(0, 60);
  }
  function getInstallUrl(androidAppId, iOSAppId) {
    if (UA.os.android) {
      var referrer = JSON.stringify({
        appKey: appKey$1,
        KA: KAKAO_AGENT
      });
      return "market://details?id=".concat(androidAppId, "&referrer=").concat(referrer);
    } else if (UA.os.ios) {
      return "https://itunes.apple.com/app/id".concat(iOSAppId);
    } else {
      return location.href;
    }
  }
  function guardCreateEasyXDM(createEasyXDM) {
    try {
      return createEasyXDM();
    } catch (e) {
      if (e instanceof TypeError) {
        throw new KakaoError('kakao.js should be loaded from a web server');
      } else {
        throw new KakaoError("EasyXDM - ".concat(e.message));
      }
    }
  }
  var popupWindows = {};
  function windowOpen(url, name, feature) {
    var popupWindow = popupWindows[name];
    if (popupWindow && popupWindow.close && !popupWindow.closed) {
      popupWindow.close();
    }
    popupWindows[name] = window.open(url, name, feature);
    return popupWindows[name];
  }
  function applyAttributes(settings, container$, mapper) {
    forEach(mapper, function (value, key) {
      var attr = container$.getAttribute(value);
      if (attr !== null) {
        settings[key] = attr === 'true' || attr === 'false' ? attr === 'true' : attr;
      }
    });
  }
  function createHiddenIframe(id, src, cleanups) {
    var iframe = document.createElement('iframe');
    iframe.id = iframe.name = id;
    iframe.src = src;
    iframe.setAttribute('style', 'border:none; width:0; height:0; display:none; overflow:hidden;');
    document.body.appendChild(iframe);
    cleanups.push(function () {
      document.body.removeChild(iframe);
    });
  }
  function addMessageEvent(settings, requestDomain, cleanups) {
    var callback = function callback(_ref) {
      var data = _ref.data,
        origin = _ref.origin;
      if (data && origin === requestDomain) {
        var resp = JSON.parse(data);
        if (resp.code) {
          settings.fail(resp);
        } else {
          settings.success(resp);
        }
        settings.always(resp);
        removeEvent(window, 'message', callback);
      }
    };
    addEvent(window, 'message', callback);
    cleanups.push(function () {
      removeEvent(window, 'message', callback);
    });
  }
  function openPopupAndSubmitForm(params, popupParams) {
    var url = popupParams.url,
      popupName = popupParams.popupName,
      popupFeatures = popupParams.popupFeatures;
    var popup = UA.browser.msie ? {} : windowOpen('', popupName, popupFeatures);
    if (popup.focus) {
      popup.focus();
    }
    createAndSubmitForm(params, url, popupName);
    return popup;
  }
  function createAndSubmitForm(params, url) {
    var popupName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var form = document.createElement('form');
    form.setAttribute('accept-charset', 'utf-8');
    form.setAttribute('method', 'post');
    form.setAttribute('action', url);
    form.setAttribute('target', popupName);
    form.setAttribute('style', 'display:none');
    forEach(params, function (value, key) {
      var input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = isString(value) ? value : JSON.stringify(value);
      form.appendChild(input);
    });
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }

  var eventObserverMap = {};
  function subscribe(eventName, observer) {
    eventObserverMap[eventName] = eventObserverMap[eventName] || [];
    eventObserverMap[eventName].push(observer);
  }
  function unsubscribe(eventName, observer) {
    var observers = eventObserverMap[eventName];
    for (var i = 0; i < observers.length; i++) {
      if (observers[i] === observer) {
        observers.splice(i, 1);
        return;
      }
    }
  }
  function dispatch(eventName) {
    forEach(eventObserverMap[eventName], function (observer) {
      observer();
    });
  }
  var eventObserver = {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    dispatch: dispatch
  };

  var Poller = function () {
    function Poller(interval, maxCount) {
      _classCallCheck(this, Poller);
      this._interval = interval;
      this._maxCount = maxCount;
      this._count = 0;
      this._stopped = false;
      this._timeout = null;
    }
    _createClass(Poller, [{
      key: "start",
      value: function start(pollFunc, failFunc) {
        if (this._timeout !== null) {
          this.stop();
        }
        this._count = 0;
        this._stopped = false;
        this._doPolling(pollFunc, failFunc);
      }
    }, {
      key: "_doPolling",
      value: function _doPolling(pollFunc, failFunc) {
        var _this = this;
        if (this._stopped) return;
        this._timeout = setTimeout(function () {
          if (++_this._count > _this._maxCount) {
            failFunc();
          } else {
            pollFunc();
            _this._doPolling(pollFunc, failFunc);
          }
        }, this._interval);
      }
    }, {
      key: "stop",
      value: function stop() {
        this._stopped = true;
        clearTimeout(this._timeout);
        this._timeout = null;
      }
    }]);
    return Poller;
  }();

  var defaultCallbacks = {
    success: emptyFunc,
    fail: emptyFunc,
    always: emptyFunc
  };
  var loginDefaultSettings = _objectSpread2({
    throughTalk: true,
    persistAccessToken: true,
    persistRefreshToken: false
  }, defaultCallbacks);
  var loginCommonSettings = {
    success: isFunction,
    fail: isFunction,
    always: isFunction,
    persistAccessToken: isBoolean,
    persistRefreshToken: isBoolean,
    approvalType: isOneOf(['project']),
    scope: isString,
    throughTalk: isBoolean,
    plusFriendPublicId: isString,
    channelPublicId: isString,
    serviceTerms: isString,
    redirectUri: isString,
    state: isString,
    deviceType: isOneOf(['watch', 'tv']),
    nonce: isString
  };
  var shippingAddressSettings = {
    optional: {
      success: isFunction,
      fail: isFunction,
      always: isFunction,
      close: isFunction,
      returnUrl: isString,
      forceMobileLayout: isBoolean,
      enableBackButton: isBoolean
    },
    defaults: _objectSpread2(_objectSpread2({}, defaultCallbacks), {}, {
      close: emptyFunc,
      forceMobileLayout: false,
      enableBackButton: true
    })
  };
  var rules$8 = {
    createLoginButton: {
      required: {
        container: passesOneOf([isElement, isString])
      },
      optional: _objectSpread2({
        lang: isOneOf(['en', 'kr']),
        size: isOneOf(['small', 'medium', 'large'])
      }, loginCommonSettings),
      defaults: _objectSpread2({
        lang: 'kr',
        size: 'medium'
      }, loginDefaultSettings)
    },
    login: {
      optional: loginCommonSettings,
      defaults: loginDefaultSettings
    },
    authorize: {
      optional: {
        redirectUri: isString,
        approvalType: isOneOf(['project']),
        scope: isString,
        throughTalk: isBoolean,
        plusFriendPublicId: isString,
        channelPublicId: isString,
        serviceTerms: isString,
        isPopup: isBoolean,
        state: isString,
        autoLogin: isBoolean,
        deviceType: isOneOf(['watch', 'tv']),
        prompts: isString,
        reauthenticate: isBoolean,
        throughSyncplugin: isBoolean,
        loginHint: isString,
        nonce: isString,
        success: isFunction,
        fail: isFunction,
        always: isFunction
      },
      defaults: _objectSpread2({
        throughTalk: true,
        isPopup: false,
        reauthenticate: false,
        throughSyncplugin: true
      }, defaultCallbacks)
    },
    autoLogin: {
      optional: {
        success: isFunction,
        fail: isFunction,
        always: isFunction
      },
      defaults: defaultCallbacks
    },
    issueAccessToken: {
      required: {
        code: isString,
        redirectUri: isString
      },
      optional: {
        success: isFunction,
        fail: isFunction,
        always: isFunction
      },
      defaults: defaultCallbacks
    },
    selectShippingAddress: shippingAddressSettings,
    createShippingAddress: shippingAddressSettings,
    updateShippingAddress: _objectSpread2({
      required: {
        addressId: isInteger
      }
    }, shippingAddressSettings)
  };

  function openLoginPopup(url) {
    var LOGIN_POPUP_NAME = '_blank';
    return windowOpen(url, LOGIN_POPUP_NAME, getLoginPopupFeatures());
  }
  function getLoginPopupFeatures() {
    var popupWidth = 480;
    var popupHeight = 700;
    var sLeft = window.screenLeft ? window.screenLeft : window.screenX ? window.screenX : 0;
    var sTop = window.screenTop ? window.screenTop : window.screenY ? window.screenY : 0;
    var popupLeft = screen.width / 2 - popupWidth / 2 + sLeft;
    var popupTop = screen.height / 2 - popupHeight / 2 + sTop;
    return ["width=".concat(popupWidth), "height=".concat(popupHeight), "left=".concat(popupLeft), "top=".concat(popupTop), 'scrollbars=yes', 'resizable=1'].join(',');
  }
  function makeAuthUrl(params) {
    return "".concat(URL.authorize, "?").concat(buildQueryString(params));
  }
  function makeAuthParams(settings) {
    var params = {
      client_id: getAppKey$1()
    };
    if (settings.approvalType) {
      params['approval_type'] = settings.approvalType;
    }
    if (settings.scope) {
      params['scope'] = settings.scope;
    }
    if (settings.state) {
      params['state'] = settings.state;
    }
    return params;
  }
  function makeAuthExtraParams(settings) {
    var params = {};
    if (settings.plusFriendPublicId) {
      params['extra.plus_friend_public_id'] = settings.plusFriendPublicId;
    }
    if (settings.channelPublicId) {
      params['channel_public_id'] = settings.channelPublicId;
    }
    if (settings.serviceTerms) {
      params['extra.service_terms'] = settings.serviceTerms;
    }
    if (settings.autoLogin) {
      params['prompt'] = 'none';
    }
    if (settings.reauthenticate) {
      params['prompt'] = 'login';
    }
    if (settings.prompts) {
      params['prompt'] = settings.prompts;
    }
    if (settings.deviceType) {
      params['device_type'] = settings.deviceType;
    }
    if (settings.loginHint) {
      params['login_hint'] = settings.loginHint;
    }
    if (settings.nonce) {
      params['nonce'] = settings.nonce;
    }
    return params;
  }
  function makeBaseAuthParams(settings) {
    return _objectSpread2(_objectSpread2(_objectSpread2({}, makeAuthParams(settings)), makeAuthExtraParams(settings)), {}, {
      redirect_uri: settings.redirectUri || URL.redirectUri,
      response_type: 'code',
      auth_tran_id: generateTxId()
    });
  }
  function makeWebAuthParams(settings, baseAuthParams) {
    return _objectSpread2(_objectSpread2({}, baseAuthParams), {}, {
      ka: KAKAO_AGENT,
      is_popup: settings.isPopup
    });
  }
  function makeCodeUrl(authTranId) {
    var params = buildQueryString({
      client_id: getAppKey$1(),
      auth_tran_id: authTranId,
      ka: KAKAO_AGENT
    });
    return "".concat(URL.authDomain, "/apiweb/code.json?").concat(params);
  }
  function runAuthCallback(settings, resp) {
    if (resp.error) {
      settings.fail(resp);
    } else {
      settings.success(resp);
    }
    settings.always(resp);
  }

  function checkAuthorize(url, onResponse) {
    request$7({
      method: 'GET',
      url: url
    }, onResponse);
  }
  function request$7(req, onResponse) {
    var url = req.url,
      method = req.method,
      data = req.data;
    var xhr = new XMLHttpRequest();
    if (typeof xhr.withCredentials !== 'undefined') {
      xhr.open(method, url);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          onResponse(xhr);
        }
      };
      xhr.send(data);
    } else {
      var xdr = new XDomainRequest();
      xdr.open(method.toLowerCase(), url);
      xdr.onload = function () {
        onResponse({
          status: xdr.responseText ? 200 : 'error',
          response: xdr.responseText
        });
      };
      setTimeout(function () {
        xdr.send(data);
      }, 0);
    }
  }

  var poller$2 = new Poller(1000, 600);
  function authorize(settings) {
    settings = processRules(settings, rules$8.authorize, 'Auth.authorize');
    if ((settings.autoLogin || includePrompts(settings.prompts, 'none')) && !isTalkWebview) {
      handleResponse(settings, {
        error: 'auto_login',
        error_description: 'NOT_SUPPORTED_BROWSER'
      });
      return false;
    }
    if (isTalkChannelHome(settings) && isSupportImplicitLogin(settings)) {
      implicitLogin(settings).then(function (isNeedRetry) {
        if (isNeedRetry) {
          doAuthorize(settings);
        }
      });
    } else {
      doAuthorize(settings);
    }
    eventObserver.dispatch('LOGIN_START');
  }
  function doAuthorize(settings) {
    var baseAuthParams = makeBaseAuthParams(settings);
    var webAuthParams = makeWebAuthParams(settings, baseAuthParams);
    var isEasyLogin = isSupportEasyLogin(settings);
    var isSupportSyncplugin = isTalkChannelHome(settings);
    var webAuthUrl = makeAuthUrl(webAuthParams);
    var loginUrl = isEasyLogin ? makeEasyLoginUrl(settings, baseAuthParams, webAuthUrl) : webAuthUrl;
    var popup = null;
    if (isSupportSyncplugin) {
      executeSyncpluginScheme(webAuthParams);
    } else if (settings.isPopup) {
      popup = openLoginPopup(loginUrl);
    } else {
      location.href = loginUrl;
    }
    if (isEasyLogin || isSupportSyncplugin || settings.isPopup) {
      var codeUrl = makeCodeUrl(baseAuthParams.auth_tran_id);
      poller$2.start(function () {
        checkAuthorize(codeUrl, function (httpResp) {
          var isValidResp = onResponse(settings, httpResp);
          if (isValidResp) {
            poller$2.stop();
            popup && popup.close && popup.close();
          }
          if (!isEasyLogin && popup && popup.closed) {
            poller$2.stop();
          }
        });
      }, function () {
        handleResponse(settings, {
          error: 'timeout',
          error_description: 'LOGIN_TIMEOUT'
        });
      });
    }
  }
  function isSupportEasyLogin(settings) {
    var isNotInAppBrowser = UA.os.ios || UA.os.android ? !isTalkWebview : false;
    var isAccountLogin = settings.reauthenticate === true || includePrompts(settings.prompts, 'login');
    var isAutoLogin = settings.autoLogin === true || includePrompts(settings.prompts, 'none');
    return !(UA.os.android && /instagram|fb_iab/g.test(UA.ua)) && isNotInAppBrowser && !isAccountLogin && settings.throughTalk === true && !isAutoLogin;
  }
  function includePrompts(prompts, option) {
    return !!(prompts && prompts.indexOf(option) > -1);
  }
  function onResponse(settings, httpResp) {
    if (httpResp.status === 200 && httpResp.response) {
      var resp = JSON.parse(httpResp.response);
      if (resp.status === 'ok' && resp.code) {
        handleResponse(settings, {
          code: resp.code
        });
        return true;
      } else if (resp.status === 'error' && resp.error_code && resp.error_code !== '300') {
        handleResponse(settings, {
          error: resp.error,
          error_description: resp.error_description
        });
        if (resp.error_code === '700') {
          location.href = "".concat(URL.authDomain, "/error/network");
        }
        return true;
      }
    }
    return false;
  }
  function handleResponse(settings, respObj) {
    if (settings.state) {
      respObj.state = settings.state;
    }
    if (settings.redirectUri) {
      var delimiter = settings.redirectUri.indexOf('?') > -1 ? '&' : '?';
      location.href = settings.redirectUri + delimiter + buildQueryString(respObj);
    } else {
      runAuthCallback(settings, respObj);
    }
  }
  function makeEasyLoginUrl(settings, baseAuthParams, fallbackUrl) {
    var easyLoginAuthParams = _objectSpread2(_objectSpread2({}, baseAuthParams), {}, {
      is_popup: true
    });
    var getAndroidLoginIntent = function getAndroidLoginIntent() {
      return ['intent:#Intent', 'action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY', 'launchFlags=0x08880000', "S.com.kakao.sdk.talk.appKey=".concat(getAppKey$1()), "S.com.kakao.sdk.talk.redirectUri=".concat(easyLoginAuthParams.redirect_uri), "S.com.kakao.sdk.talk.kaHeader=".concat(KAKAO_AGENT), "S.com.kakao.sdk.talk.extraparams=".concat(encodeURIComponent(JSON.stringify(easyLoginAuthParams)))].concat(_toConsumableArray(settings.state ? ["S.com.kakao.sdk.talk.state=".concat(settings.state)] : []), ["S.browser_fallback_url=".concat(encodeURIComponent(fallbackUrl)), 'end;']).join(';');
    };
    var getIosLoginUniversalLink = function getIosLoginUniversalLink() {
      var iosLoginUrl = makeAuthUrl(easyLoginAuthParams);
      var iosFallbackUrl = settings.isPopup ? iosLoginUrl : fallbackUrl;
      var iosEasyLoginUrl = "".concat(iosLoginUrl, "&ka=").concat(encodeURIComponent(KAKAO_AGENT));
      var talkWebviewUrl = "".concat(URL.talkInappScheme, "?url=").concat(encodeURIComponent(iosEasyLoginUrl));
      return "".concat(URL.universalKakaoLink).concat(encodeURIComponent(talkWebviewUrl), "&web=").concat(encodeURIComponent(iosFallbackUrl));
    };
    return UA.os.android ? getAndroidLoginIntent() : getIosLoginUniversalLink();
  }
  function isTalkChannelHome(settings) {
    return settings.throughSyncplugin && isTalkWebview && /ch-home/i.test(UA.ua);
  }
  function executeSyncpluginScheme(webAuthParams) {
    var bizpluginParams = _objectSpread2(_objectSpread2({}, webAuthParams), {}, {
      is_popup: true,
      approval_window_type: 'v4_bizplugin'
    });
    var query = encodeURIComponent(buildQueryString(bizpluginParams));
    location.href = "".concat(URL.talkSyncpluginScheme, "&query=").concat(query);
  }
  function isSupportImplicitLogin(settings) {
    return settings.isPopup === false && !includePrompts(settings.prompts, 'cert') && window.kakaoweb && typeof window.kakaoweb.reqSignInLocation === 'function';
  }
  function implicitLogin(settings) {
    var baseAuthParams = makeBaseAuthParams(settings);
    var webAuthParams = makeWebAuthParams(settings, baseAuthParams);
    var implicitLoginParams = buildQueryString(_objectSpread2(_objectSpread2({}, webAuthParams), {}, {
      is_popup: false,
      prompt: 'none'
    }));
    return kakaoweb.reqSignInLocation(implicitLoginParams).then(function (location) {
      var parsed = Object.fromEntries(new window.URL(location).searchParams);
      if (parsed.error === 'consent_required' && !includePrompts(settings.prompts, 'none') || parsed.error === 'interaction_required') {
        return true;
      }
      handleResponse(settings, _objectSpread2(_objectSpread2({}, parsed.code && {
        code: parsed.code
      }), parsed.error && {
        error: parsed.error,
        error_description: parsed.error_description
      }));
      return false;
    })["catch"](function (error) {
      return false;
    });
  }

  var oauth = /*#__PURE__*/Object.freeze({
    __proto__: null,
    authorize: authorize
  });

  function isAndroidWebView() {
    return UA.os.android && (olderAndroidWebView() || oldAndroidWebView() || newerAndroidWebView());
  }
  function olderAndroidWebView() {
    return UA.os.version.major == 2 && /Version\/\d+.\d+|/i.test(UA.ua);
  }
  function oldAndroidWebView() {
    return UA.os.version.major == 4 && UA.os.version.minor < 4 && /Version\/\d+.\d+|/i.test(UA.ua);
  }
  function newerAndroidWebView() {
    return /Version\/\d+\.\d+/i.test(UA.ua) && (/Chrome\/\d+\.\d+\.\d+\.\d+ Mobile/i.test(UA.ua) || /; wv\)/i.test(UA.ua));
  }
  function isIOSKakaoTalkWebView() {
    return UA.os.ios && isTalkWebview;
  }
  function isAndroidKakaoTalkWebView() {
    return UA.os.android && isTalkWebview;
  }
  function isNewerAndroidKakaoTalkWebView() {
    return UA.os.android && isTalkWebview && UA.browser.chrome && UA.browser.version.major >= 71;
  }

  var es6Promise = {exports: {}};

  (function (module, exports) {
    (function (global, factory) {
      module.exports = factory() ;
    })(commonjsGlobal, function () {
      function objectOrFunction(x) {
        var type = typeof x;
        return x !== null && (type === 'object' || type === 'function');
      }
      function isFunction(x) {
        return typeof x === 'function';
      }
      var _isArray = void 0;
      if (Array.isArray) {
        _isArray = Array.isArray;
      } else {
        _isArray = function (x) {
          return Object.prototype.toString.call(x) === '[object Array]';
        };
      }
      var isArray = _isArray;
      var len = 0;
      var vertxNext = void 0;
      var customSchedulerFn = void 0;
      var asap = function asap(callback, arg) {
        queue[len] = callback;
        queue[len + 1] = arg;
        len += 2;
        if (len === 2) {
          if (customSchedulerFn) {
            customSchedulerFn(flush);
          } else {
            scheduleFlush();
          }
        }
      };
      function setScheduler(scheduleFn) {
        customSchedulerFn = scheduleFn;
      }
      function setAsap(asapFn) {
        asap = asapFn;
      }
      var browserWindow = typeof window !== 'undefined' ? window : undefined;
      var browserGlobal = browserWindow || {};
      var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
      var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
      var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
      function useNextTick() {
        return function () {
          return process.nextTick(flush);
        };
      }
      function useVertxTimer() {
        if (typeof vertxNext !== 'undefined') {
          return function () {
            vertxNext(flush);
          };
        }
        return useSetTimeout();
      }
      function useMutationObserver() {
        var iterations = 0;
        var observer = new BrowserMutationObserver(flush);
        var node = document.createTextNode('');
        observer.observe(node, {
          characterData: true
        });
        return function () {
          node.data = iterations = ++iterations % 2;
        };
      }
      function useMessageChannel() {
        var channel = new MessageChannel();
        channel.port1.onmessage = flush;
        return function () {
          return channel.port2.postMessage(0);
        };
      }
      function useSetTimeout() {
        var globalSetTimeout = setTimeout;
        return function () {
          return globalSetTimeout(flush, 1);
        };
      }
      var queue = new Array(1000);
      function flush() {
        for (var i = 0; i < len; i += 2) {
          var callback = queue[i];
          var arg = queue[i + 1];
          callback(arg);
          queue[i] = undefined;
          queue[i + 1] = undefined;
        }
        len = 0;
      }
      function attemptVertx() {
        try {
          var vertx = Function('return this')().require('vertx');
          vertxNext = vertx.runOnLoop || vertx.runOnContext;
          return useVertxTimer();
        } catch (e) {
          return useSetTimeout();
        }
      }
      var scheduleFlush = void 0;
      if (isNode) {
        scheduleFlush = useNextTick();
      } else if (BrowserMutationObserver) {
        scheduleFlush = useMutationObserver();
      } else if (isWorker) {
        scheduleFlush = useMessageChannel();
      } else if (browserWindow === undefined && typeof commonjsRequire === 'function') {
        scheduleFlush = attemptVertx();
      } else {
        scheduleFlush = useSetTimeout();
      }
      function then(onFulfillment, onRejection) {
        var parent = this;
        var child = new this.constructor(noop);
        if (child[PROMISE_ID] === undefined) {
          makePromise(child);
        }
        var _state = parent._state;
        if (_state) {
          var callback = arguments[_state - 1];
          asap(function () {
            return invokeCallback(_state, child, callback, parent._result);
          });
        } else {
          subscribe(parent, child, onFulfillment, onRejection);
        }
        return child;
      }
      function resolve$1(object) {
        var Constructor = this;
        if (object && typeof object === 'object' && object.constructor === Constructor) {
          return object;
        }
        var promise = new Constructor(noop);
        resolve(promise, object);
        return promise;
      }
      var PROMISE_ID = Math.random().toString(36).substring(2);
      function noop() {}
      var PENDING = void 0;
      var FULFILLED = 1;
      var REJECTED = 2;
      function selfFulfillment() {
        return new TypeError("You cannot resolve a promise with itself");
      }
      function cannotReturnOwn() {
        return new TypeError('A promises callback cannot return that same promise.');
      }
      function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
        try {
          then$$1.call(value, fulfillmentHandler, rejectionHandler);
        } catch (e) {
          return e;
        }
      }
      function handleForeignThenable(promise, thenable, then$$1) {
        asap(function (promise) {
          var sealed = false;
          var error = tryThen(then$$1, thenable, function (value) {
            if (sealed) {
              return;
            }
            sealed = true;
            if (thenable !== value) {
              resolve(promise, value);
            } else {
              fulfill(promise, value);
            }
          }, function (reason) {
            if (sealed) {
              return;
            }
            sealed = true;
            reject(promise, reason);
          }, 'Settle: ' + (promise._label || ' unknown promise'));
          if (!sealed && error) {
            sealed = true;
            reject(promise, error);
          }
        }, promise);
      }
      function handleOwnThenable(promise, thenable) {
        if (thenable._state === FULFILLED) {
          fulfill(promise, thenable._result);
        } else if (thenable._state === REJECTED) {
          reject(promise, thenable._result);
        } else {
          subscribe(thenable, undefined, function (value) {
            return resolve(promise, value);
          }, function (reason) {
            return reject(promise, reason);
          });
        }
      }
      function handleMaybeThenable(promise, maybeThenable, then$$1) {
        if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
          handleOwnThenable(promise, maybeThenable);
        } else {
          if (then$$1 === undefined) {
            fulfill(promise, maybeThenable);
          } else if (isFunction(then$$1)) {
            handleForeignThenable(promise, maybeThenable, then$$1);
          } else {
            fulfill(promise, maybeThenable);
          }
        }
      }
      function resolve(promise, value) {
        if (promise === value) {
          reject(promise, selfFulfillment());
        } else if (objectOrFunction(value)) {
          var then$$1 = void 0;
          try {
            then$$1 = value.then;
          } catch (error) {
            reject(promise, error);
            return;
          }
          handleMaybeThenable(promise, value, then$$1);
        } else {
          fulfill(promise, value);
        }
      }
      function publishRejection(promise) {
        if (promise._onerror) {
          promise._onerror(promise._result);
        }
        publish(promise);
      }
      function fulfill(promise, value) {
        if (promise._state !== PENDING) {
          return;
        }
        promise._result = value;
        promise._state = FULFILLED;
        if (promise._subscribers.length !== 0) {
          asap(publish, promise);
        }
      }
      function reject(promise, reason) {
        if (promise._state !== PENDING) {
          return;
        }
        promise._state = REJECTED;
        promise._result = reason;
        asap(publishRejection, promise);
      }
      function subscribe(parent, child, onFulfillment, onRejection) {
        var _subscribers = parent._subscribers;
        var length = _subscribers.length;
        parent._onerror = null;
        _subscribers[length] = child;
        _subscribers[length + FULFILLED] = onFulfillment;
        _subscribers[length + REJECTED] = onRejection;
        if (length === 0 && parent._state) {
          asap(publish, parent);
        }
      }
      function publish(promise) {
        var subscribers = promise._subscribers;
        var settled = promise._state;
        if (subscribers.length === 0) {
          return;
        }
        var child = void 0,
          callback = void 0,
          detail = promise._result;
        for (var i = 0; i < subscribers.length; i += 3) {
          child = subscribers[i];
          callback = subscribers[i + settled];
          if (child) {
            invokeCallback(settled, child, callback, detail);
          } else {
            callback(detail);
          }
        }
        promise._subscribers.length = 0;
      }
      function invokeCallback(settled, promise, callback, detail) {
        var hasCallback = isFunction(callback),
          value = void 0,
          error = void 0,
          succeeded = true;
        if (hasCallback) {
          try {
            value = callback(detail);
          } catch (e) {
            succeeded = false;
            error = e;
          }
          if (promise === value) {
            reject(promise, cannotReturnOwn());
            return;
          }
        } else {
          value = detail;
        }
        if (promise._state !== PENDING) ; else if (hasCallback && succeeded) {
          resolve(promise, value);
        } else if (succeeded === false) {
          reject(promise, error);
        } else if (settled === FULFILLED) {
          fulfill(promise, value);
        } else if (settled === REJECTED) {
          reject(promise, value);
        }
      }
      function initializePromise(promise, resolver) {
        try {
          resolver(function resolvePromise(value) {
            resolve(promise, value);
          }, function rejectPromise(reason) {
            reject(promise, reason);
          });
        } catch (e) {
          reject(promise, e);
        }
      }
      var id = 0;
      function nextId() {
        return id++;
      }
      function makePromise(promise) {
        promise[PROMISE_ID] = id++;
        promise._state = undefined;
        promise._result = undefined;
        promise._subscribers = [];
      }
      function validationError() {
        return new Error('Array Methods must be provided an Array');
      }
      var Enumerator = function () {
        function Enumerator(Constructor, input) {
          this._instanceConstructor = Constructor;
          this.promise = new Constructor(noop);
          if (!this.promise[PROMISE_ID]) {
            makePromise(this.promise);
          }
          if (isArray(input)) {
            this.length = input.length;
            this._remaining = input.length;
            this._result = new Array(this.length);
            if (this.length === 0) {
              fulfill(this.promise, this._result);
            } else {
              this.length = this.length || 0;
              this._enumerate(input);
              if (this._remaining === 0) {
                fulfill(this.promise, this._result);
              }
            }
          } else {
            reject(this.promise, validationError());
          }
        }
        Enumerator.prototype._enumerate = function _enumerate(input) {
          for (var i = 0; this._state === PENDING && i < input.length; i++) {
            this._eachEntry(input[i], i);
          }
        };
        Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
          var c = this._instanceConstructor;
          var resolve$$1 = c.resolve;
          if (resolve$$1 === resolve$1) {
            var _then = void 0;
            var error = void 0;
            var didError = false;
            try {
              _then = entry.then;
            } catch (e) {
              didError = true;
              error = e;
            }
            if (_then === then && entry._state !== PENDING) {
              this._settledAt(entry._state, i, entry._result);
            } else if (typeof _then !== 'function') {
              this._remaining--;
              this._result[i] = entry;
            } else if (c === Promise$1) {
              var promise = new c(noop);
              if (didError) {
                reject(promise, error);
              } else {
                handleMaybeThenable(promise, entry, _then);
              }
              this._willSettleAt(promise, i);
            } else {
              this._willSettleAt(new c(function (resolve$$1) {
                return resolve$$1(entry);
              }), i);
            }
          } else {
            this._willSettleAt(resolve$$1(entry), i);
          }
        };
        Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
          var promise = this.promise;
          if (promise._state === PENDING) {
            this._remaining--;
            if (state === REJECTED) {
              reject(promise, value);
            } else {
              this._result[i] = value;
            }
          }
          if (this._remaining === 0) {
            fulfill(promise, this._result);
          }
        };
        Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
          var enumerator = this;
          subscribe(promise, undefined, function (value) {
            return enumerator._settledAt(FULFILLED, i, value);
          }, function (reason) {
            return enumerator._settledAt(REJECTED, i, reason);
          });
        };
        return Enumerator;
      }();
      function all(entries) {
        return new Enumerator(this, entries).promise;
      }
      function race(entries) {
        var Constructor = this;
        if (!isArray(entries)) {
          return new Constructor(function (_, reject) {
            return reject(new TypeError('You must pass an array to race.'));
          });
        } else {
          return new Constructor(function (resolve, reject) {
            var length = entries.length;
            for (var i = 0; i < length; i++) {
              Constructor.resolve(entries[i]).then(resolve, reject);
            }
          });
        }
      }
      function reject$1(reason) {
        var Constructor = this;
        var promise = new Constructor(noop);
        reject(promise, reason);
        return promise;
      }
      function needsResolver() {
        throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
      }
      function needsNew() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
      }
      var Promise$1 = function () {
        function Promise(resolver) {
          this[PROMISE_ID] = nextId();
          this._result = this._state = undefined;
          this._subscribers = [];
          if (noop !== resolver) {
            typeof resolver !== 'function' && needsResolver();
            this instanceof Promise ? initializePromise(this, resolver) : needsNew();
          }
        }
        Promise.prototype.catch = function _catch(onRejection) {
          return this.then(null, onRejection);
        };
        Promise.prototype.finally = function _finally(callback) {
          var promise = this;
          var constructor = promise.constructor;
          if (isFunction(callback)) {
            return promise.then(function (value) {
              return constructor.resolve(callback()).then(function () {
                return value;
              });
            }, function (reason) {
              return constructor.resolve(callback()).then(function () {
                throw reason;
              });
            });
          }
          return promise.then(callback, callback);
        };
        return Promise;
      }();
      Promise$1.prototype.then = then;
      Promise$1.all = all;
      Promise$1.race = race;
      Promise$1.resolve = resolve$1;
      Promise$1.reject = reject$1;
      Promise$1._setScheduler = setScheduler;
      Promise$1._setAsap = setAsap;
      Promise$1._asap = asap;
      function polyfill() {
        var local = void 0;
        if (typeof commonjsGlobal !== 'undefined') {
          local = commonjsGlobal;
        } else if (typeof self !== 'undefined') {
          local = self;
        } else {
          try {
            local = Function('return this')();
          } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
          }
        }
        var P = local.Promise;
        if (P) {
          var promiseToString = null;
          try {
            promiseToString = Object.prototype.toString.call(P.resolve());
          } catch (e) {
          }
          if (promiseToString === '[object Promise]' && !P.cast) {
            return;
          }
        }
        local.Promise = Promise$1;
      }
      Promise$1.polyfill = polyfill;
      Promise$1.Promise = Promise$1;
      return Promise$1;
    });
  })(es6Promise);

  var easyXDM_1 = function () {
    (function (O, d, q, L, l, I) {
      var b = this || O;
      var o = Math.floor(Math.random() * 10000);
      var r = Function.prototype;
      var R = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;
      var S = /[\-\w]+\/\.\.\//;
      var G = /([^:])\/\//g;
      var J = "";
      var p = {};
      var N = O.easyXDM;
      var V = "easyXDM_";
      var F;
      var z = false;
      var j;
      var i;
      function D(Y, aa) {
        var Z = _typeof(Y[aa]);
        return Z == "function" || !!(Z == "object" && Y[aa]) || Z == "unknown";
      }
      function v(Y, Z) {
        return !!(_typeof(Y[Z]) == "object" && Y[Z]);
      }
      function s(Y) {
        return Object.prototype.toString.call(Y) === "[object Array]";
      }
      function c() {
        var aa = "Shockwave Flash",
          ae = "application/x-shockwave-flash";
        if (!u(navigator.plugins) && _typeof(navigator.plugins[aa]) == "object") {
          var ac = navigator.plugins[aa].description;
          if (ac && !u(navigator.mimeTypes) && navigator.mimeTypes[ae] && navigator.mimeTypes[ae].enabledPlugin) {
            j = ac.match(/\d+/g);
          }
        }
        if (!j) {
          var Z;
          try {
            Z = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            j = Array.prototype.slice.call(Z.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1);
            Z = null;
          } catch (ad) {}
        }
        if (!j) {
          return false;
        }
        var Y = parseInt(j[0], 10),
          ab = parseInt(j[1], 10);
        i = Y > 9 && ab > 0;
        return true;
      }
      var w, y;
      if (D(O, "addEventListener")) {
        w = function w(aa, Y, Z) {
          aa.addEventListener(Y, Z, false);
        };
        y = function y(aa, Y, Z) {
          aa.removeEventListener(Y, Z, false);
        };
      } else {
        if (D(O, "attachEvent")) {
          w = function w(Y, aa, Z) {
            Y.attachEvent("on" + aa, Z);
          };
          y = function y(Y, aa, Z) {
            Y.detachEvent("on" + aa, Z);
          };
        } else {
          throw new Error("Browser not supported");
        }
      }
      var X = false,
        K = [],
        M;
      if ("readyState" in d) {
        M = d.readyState;
        X = M == "complete" || ~navigator.userAgent.indexOf("AppleWebKit/") && (M == "loaded" || M == "interactive");
      } else {
        X = !!d.body;
      }
      function t() {
        if (X) {
          return;
        }
        X = true;
        for (var Y = 0; Y < K.length; Y++) {
          K[Y]();
        }
        K.length = 0;
      }
      if (!X) {
        if (D(O, "addEventListener")) {
          w(d, "DOMContentLoaded", t);
        } else {
          w(d, "readystatechange", function () {
            if (d.readyState == "complete") {
              t();
            }
          });
          if (d.documentElement.doScroll && O === top) {
            var h = function h() {
              if (X) {
                return;
              }
              try {
                d.documentElement.doScroll("left");
              } catch (Y) {
                L(h, 1);
                return;
              }
              t();
            };
            h();
          }
        }
        w(O, "load", t);
      }
      function H(Z, Y) {
        if (X) {
          Z.call(Y);
          return;
        }
        K.push(function () {
          Z.call(Y);
        });
      }
      function n() {
        var aa = parent;
        if (J !== "") {
          for (var Y = 0, Z = J.split("."); Y < Z.length; Y++) {
            aa = aa[Z[Y]];
          }
        }
        return aa.easyXDM;
      }
      function f(Y) {
        O.easyXDM = N;
        J = Y;
        if (J) {
          V = "easyXDM_" + J.replace(".", "_") + "_";
        }
        return p;
      }
      function A(Y) {
        return Y.match(R)[3];
      }
      function g(Y) {
        return Y.match(R)[4] || "";
      }
      function k(aa) {
        if (aa.indexOf("file://") >= 0) {
          return "file://";
        }
        var Y = aa.toLowerCase().match(R);
        if (!Y) {
          return "";
        }
        var ab = Y[2],
          ac = Y[3],
          Z = Y[4] || "";
        if (ab == "http:" && Z == ":80" || ab == "https:" && Z == ":443") {
          Z = "";
        }
        return ab + "//" + ac + Z;
      }
      function C(Y) {
        Y = Y.replace(G, "$1/");
        if (!Y.match(/^(http||https):\/\//)) {
          var Z = Y.substring(0, 1) === "/" ? "" : q.pathname;
          if (Z.substring(Z.length - 1) !== "/") {
            Z = Z.substring(0, Z.lastIndexOf("/") + 1);
          }
          Y = q.protocol + "//" + q.host + Z + Y;
        }
        while (S.test(Y)) {
          Y = Y.replace(S, "");
        }
        return Y;
      }
      function Q(Y, ab) {
        var ad = "",
          aa = Y.indexOf("#");
        if (aa !== -1) {
          ad = Y.substring(aa);
          Y = Y.substring(0, aa);
        }
        var ac = [];
        for (var Z in ab) {
          if (ab.hasOwnProperty(Z)) {
            ac.push(Z + "=" + I(ab[Z]));
          }
        }
        return Y + (z ? "#" : Y.indexOf("?") == -1 ? "?" : "&") + ac.join("&") + ad;
      }
      var T = function (Y) {
        Y = Y.substring(1).split("&");
        var aa = {},
          ab,
          Z = Y.length;
        while (Z--) {
          ab = Y[Z].split("=");
          aa[ab[0]] = l(ab[1]);
        }
        return aa;
      }(/xdm_e=/.test(q.search) ? q.search : q.hash);
      function u(Y) {
        return typeof Y === "undefined";
      }
      var _P = function P() {
        var Z = {};
        var aa = {
            a: [1, 2, 3]
          },
          Y = '{"a":[1,2,3]}';
        if (typeof JSON != "undefined" && typeof JSON.stringify === "function" && JSON.stringify(aa).replace(/\s/g, "") === Y) {
          return JSON;
        }
        if (Object.toJSON) {
          if (Object.toJSON(aa).replace(/\s/g, "") === Y) {
            Z.stringify = Object.toJSON;
          }
        }
        if (typeof String.prototype.evalJSON === "function") {
          aa = Y.evalJSON();
          if (aa.a && aa.a.length === 3 && aa.a[2] === 3) {
            Z.parse = function (ab) {
              return ab.evalJSON();
            };
          }
        }
        if (Z.stringify && Z.parse) {
          _P = function P() {
            return Z;
          };
          return Z;
        }
        return null;
      };
      function U(Y, Z, aa) {
        var ac;
        for (var ab in Z) {
          if (Z.hasOwnProperty(ab)) {
            if (ab in Y) {
              ac = Z[ab];
              if (_typeof(ac) === "object") {
                U(Y[ab], ac, aa);
              } else {
                if (!aa) {
                  Y[ab] = Z[ab];
                }
              }
            } else {
              Y[ab] = Z[ab];
            }
          }
        }
        return Y;
      }
      function a() {
        var Z = d.body.appendChild(d.createElement("form")),
          Y = Z.appendChild(d.createElement("input"));
        Y.name = V + "TEST" + o;
        F = Y !== Z.elements[Y.name];
        d.body.removeChild(Z);
      }
      function B(Z) {
        if (u(F)) {
          a();
        }
        var ad;
        if (F) {
          ad = d.createElement('<iframe name="' + Z.props.name + '"/>');
        } else {
          ad = d.createElement("IFRAME");
          ad.name = Z.props.name;
        }
        ad.id = ad.name = Z.props.name;
        delete Z.props.name;
        if (typeof Z.container == "string") {
          Z.container = d.getElementById(Z.container);
        }
        if (!Z.container) {
          U(ad.style, {
            position: "absolute",
            top: "-2000px",
            left: "0px"
          });
          Z.container = d.body;
        }
        var ac = Z.props.src;
        Z.props.src = "javascript:false";
        U(ad, Z.props);
        ad.border = ad.frameBorder = 0;
        ad.allowTransparency = true;
        Z.container.appendChild(ad);
        if (Z.onLoad) {
          w(ad, "load", Z.onLoad);
        }
        if (Z.usePost) {
          var ab = Z.container.appendChild(d.createElement("form")),
            Y;
          ab.target = ad.name;
          ab.action = ac;
          ab.method = "POST";
          if (_typeof(Z.usePost) === "object") {
            for (var aa in Z.usePost) {
              if (Z.usePost.hasOwnProperty(aa)) {
                if (F) {
                  Y = d.createElement('<input name="' + aa + '"/>');
                } else {
                  Y = d.createElement("INPUT");
                  Y.name = aa;
                }
                Y.value = Z.usePost[aa];
                ab.appendChild(Y);
              }
            }
          }
          ab.submit();
          ab.parentNode.removeChild(ab);
        } else {
          ad.src = ac;
        }
        Z.props.src = ac;
        return ad;
      }
      function e(Y) {
        return Y.replace(/[-[\]/{}()+.\^$|]/g, "\\$&").replace(/(\*)/g, ".$1").replace(/\?/g, ".");
      }
      function W(ac, aa) {
        if (typeof ac == "string") {
          ac = [ac];
        }
        var Z,
          Y = ac.length;
        while (Y--) {
          var ab = ac[Y].substr(0, 1) === "^" && ac[Y].substr(ac[Y].length - 1, 1) === "$";
          Z = ab ? ac[Y] : "^" + e(ac[Y]) + "$";
          Z = new RegExp(Z);
          if (Z.test(aa)) {
            return true;
          }
        }
        return false;
      }
      function m(aa) {
        var af = aa.protocol,
          Z;
        aa.isHost = aa.isHost || u(T.xdm_p);
        z = aa.hash || false;
        if (!aa.props) {
          aa.props = {};
        }
        if (!aa.isHost) {
          aa.channel = T.xdm_c.replace(/["'<>\\]/g, "");
          aa.secret = T.xdm_s;
          aa.remote = T.xdm_e.replace(/["'<>\\]/g, "");
          af = T.xdm_p;
          if (aa.acl && !W(aa.acl, aa.remote)) {
            throw new Error("Access denied for " + aa.remote);
          }
        } else {
          aa.remote = C(aa.remote);
          aa.channel = aa.channel || "default" + o++;
          aa.secret = Math.random().toString(16).substring(2);
          if (u(af)) {
            if (k(q.href) == k(aa.remote)) {
              af = "4";
            } else {
              if (D(O, "postMessage") || D(d, "postMessage")) {
                af = "1";
              } else {
                if (aa.swf && D(O, "ActiveXObject") && c()) {
                  af = "6";
                } else {
                  if (navigator.product === "Gecko" && "frameElement" in O && navigator.userAgent.indexOf("WebKit") == -1) {
                    af = "5";
                  } else {
                    if (aa.remoteHelper) {
                      af = "2";
                    } else {
                      af = "0";
                    }
                  }
                }
              }
            }
          }
        }
        aa.protocol = af;
        switch (af) {
          case "0":
            U(aa, {
              interval: 100,
              delay: 2000,
              useResize: true,
              useParent: false,
              usePolling: false
            }, true);
            if (aa.isHost) {
              if (!aa.local) {
                var ad = q.protocol + "//" + q.host,
                  Y = d.body.getElementsByTagName("img"),
                  ae;
                var ab = Y.length;
                while (ab--) {
                  ae = Y[ab];
                  if (ae.src.substring(0, ad.length) === ad) {
                    aa.local = ae.src;
                    break;
                  }
                }
                if (!aa.local) {
                  aa.local = O;
                }
              }
              var ac = {
                xdm_c: aa.channel,
                xdm_p: 0
              };
              if (aa.local === O) {
                aa.usePolling = true;
                aa.useParent = true;
                aa.local = q.protocol + "//" + q.host + q.pathname + q.search;
                ac.xdm_e = aa.local;
                ac.xdm_pa = 1;
              } else {
                ac.xdm_e = C(aa.local);
              }
              if (aa.container) {
                aa.useResize = false;
                ac.xdm_po = 1;
              }
              aa.remote = Q(aa.remote, ac);
            } else {
              U(aa, {
                useParent: !u(T.xdm_pa),
                usePolling: !u(T.xdm_po),
                useResize: aa.useParent ? false : aa.useResize
              });
            }
            Z = [new p.stack.HashTransport(aa), new p.stack.ReliableBehavior({}), new p.stack.QueueBehavior({
              encode: true,
              maxLength: 4000 - aa.remote.length
            }), new p.stack.VerifyBehavior({
              initiate: aa.isHost
            })];
            break;
          case "1":
            Z = [new p.stack.PostMessageTransport(aa)];
            break;
          case "2":
            if (aa.isHost) {
              aa.remoteHelper = C(aa.remoteHelper);
            }
            Z = [new p.stack.NameTransport(aa), new p.stack.QueueBehavior(), new p.stack.VerifyBehavior({
              initiate: aa.isHost
            })];
            break;
          case "3":
            Z = [new p.stack.NixTransport(aa)];
            break;
          case "4":
            Z = [new p.stack.SameOriginTransport(aa)];
            break;
          case "5":
            Z = [new p.stack.FrameElementTransport(aa)];
            break;
          case "6":
            if (!j) {
              c();
            }
            Z = [new p.stack.FlashTransport(aa)];
            break;
        }
        Z.push(new p.stack.QueueBehavior({
          lazy: aa.lazy,
          remove: true
        }));
        return Z;
      }
      function E(ab) {
        var ac,
          aa = {
            incoming: function incoming(ae, ad) {
              this.up.incoming(ae, ad);
            },
            outgoing: function outgoing(ad, ae) {
              this.down.outgoing(ad, ae);
            },
            callback: function callback(ad) {
              this.up.callback(ad);
            },
            init: function init() {
              this.down.init();
            },
            destroy: function destroy() {
              this.down.destroy();
            }
          };
        for (var Z = 0, Y = ab.length; Z < Y; Z++) {
          ac = ab[Z];
          U(ac, aa, true);
          if (Z !== 0) {
            ac.down = ab[Z - 1];
          }
          if (Z !== Y - 1) {
            ac.up = ab[Z + 1];
          }
        }
        return ac;
      }
      function x(Y) {
        Y.up.down = Y.down;
        Y.down.up = Y.up;
        Y.up = Y.down = null;
      }
      U(p, {
        version: "2.5.00.1",
        query: T,
        stack: {},
        apply: U,
        getJSONObject: _P,
        whenReady: H,
        noConflict: f
      });
      p.DomHelper = {
        on: w,
        un: y,
        requiresJSON: function requiresJSON(Y) {
          if (!v(O, "JSON")) {
            d.write('<script type="text/javascript" src="' + Y + '"><\/script>');
          }
        }
      };
      (function () {
        var Y = {};
        p.Fn = {
          set: function set(Z, aa) {
            Y[Z] = aa;
          },
          get: function get(aa, Z) {
            if (!Y.hasOwnProperty(aa)) {
              return;
            }
            var ab = Y[aa];
            if (Z) {
              delete Y[aa];
            }
            return ab;
          }
        };
      })();
      p.Socket = function (Z) {
        var Y = E(m(Z).concat([{
            incoming: function incoming(ac, ab) {
              Z.onMessage(ac, ab);
            },
            callback: function callback(ab) {
              if (Z.onReady) {
                Z.onReady(ab);
              }
            }
          }])),
          aa = k(Z.remote);
        this.origin = k(Z.remote);
        this.destroy = function () {
          Y.destroy();
        };
        this.postMessage = function (ab) {
          Y.outgoing(ab, aa);
        };
        Y.init();
      };
      p.Rpc = function (aa, Z) {
        if (Z.local) {
          for (var ac in Z.local) {
            if (Z.local.hasOwnProperty(ac)) {
              var ab = Z.local[ac];
              if (typeof ab === "function") {
                Z.local[ac] = {
                  method: ab
                };
              }
            }
          }
        }
        var Y = E(m(aa).concat([new p.stack.RpcBehavior(this, Z), {
          callback: function callback(ad) {
            if (aa.onReady) {
              aa.onReady(ad);
            }
          }
        }]));
        this.origin = k(aa.remote);
        this.context = aa.context || null;
        this.destroy = function () {
          Y.destroy();
        };
        Y.init();
      };
      p.stack.SameOriginTransport = function (Z) {
        var aa, ac, ab, Y;
        return aa = {
          outgoing: function outgoing(ae, af, ad) {
            ab(ae);
            if (ad) {
              ad();
            }
          },
          destroy: function destroy() {
            if (ac) {
              ac.parentNode.removeChild(ac);
              ac = null;
            }
          },
          onDOMReady: function onDOMReady() {
            Y = k(Z.remote);
            if (Z.isHost) {
              U(Z.props, {
                src: Q(Z.remote, {
                  xdm_e: q.protocol + "//" + q.host + q.pathname,
                  xdm_c: Z.channel,
                  xdm_p: 4
                }),
                name: V + Z.channel + "_provider"
              });
              ac = B(Z);
              p.Fn.set(Z.channel, function (ad) {
                ab = ad;
                L(function () {
                  aa.up.callback(true);
                }, 0);
                return function (ae) {
                  aa.up.incoming(ae, Y);
                };
              });
            } else {
              ab = n().Fn.get(Z.channel, true)(function (ad) {
                aa.up.incoming(ad, Y);
              });
              L(function () {
                aa.up.callback(true);
              }, 0);
            }
          },
          init: function init() {
            H(aa.onDOMReady, aa);
          }
        };
      };
      p.stack.FlashTransport = function (ab) {
        var ad, Y, ae, Z, af;
        function ag(ai, ah) {
          L(function () {
            ad.up.incoming(ai, ae);
          }, 0);
        }
        function aa(ai) {
          var ah = ab.swf + "?host=" + ab.isHost;
          var ak = "easyXDM_swf_" + Math.floor(Math.random() * 10000);
          p.Fn.set("flash_loaded" + ai.replace(/[\-.]/g, "_"), function () {
            p.stack.FlashTransport[ai].swf = Z = af.firstChild;
            var al = p.stack.FlashTransport[ai].queue;
            for (var am = 0; am < al.length; am++) {
              al[am]();
            }
            al.length = 0;
          });
          if (ab.swfContainer) {
            af = typeof ab.swfContainer == "string" ? d.getElementById(ab.swfContainer) : ab.swfContainer;
          } else {
            af = d.createElement("div");
            U(af.style, i && ab.swfNoThrottle ? {
              height: "20px",
              width: "20px",
              position: "fixed",
              right: 0,
              top: 0
            } : {
              height: "1px",
              width: "1px",
              position: "absolute",
              overflow: "hidden",
              right: 0,
              top: 0
            });
            d.body.appendChild(af);
          }
          var aj = "callback=flash_loaded" + I(ai.replace(/[\-.]/g, "_")) + "&proto=" + b.location.protocol + "&domain=" + I(A(b.location.href)) + "&port=" + I(g(b.location.href)) + "&ns=" + I(J);
          af.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + ak + "' data='" + ah + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + ah + "'></param><param name='flashvars' value='" + aj + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + aj + "' allowScriptAccess='always' wmode='transparent' src='" + ah + "' height='1' width='1'></embed></object>";
        }
        return ad = {
          outgoing: function outgoing(ai, aj, ah) {
            Z.postMessage(ab.channel, ai.toString());
            if (ah) {
              ah();
            }
          },
          destroy: function destroy() {
            try {
              Z.destroyChannel(ab.channel);
            } catch (ah) {}
            Z = null;
            if (Y) {
              Y.parentNode.removeChild(Y);
              Y = null;
            }
          },
          onDOMReady: function onDOMReady() {
            ae = ab.remote;
            p.Fn.set("flash_" + ab.channel + "_init", function () {
              L(function () {
                ad.up.callback(true);
              });
            });
            p.Fn.set("flash_" + ab.channel + "_onMessage", ag);
            ab.swf = C(ab.swf);
            var ai = A(ab.swf);
            var ah = function ah() {
              p.stack.FlashTransport[ai].init = true;
              Z = p.stack.FlashTransport[ai].swf;
              Z.createChannel(ab.channel, ab.secret, k(ab.remote), ab.isHost);
              if (ab.isHost) {
                if (i && ab.swfNoThrottle) {
                  U(ab.props, {
                    position: "fixed",
                    right: 0,
                    top: 0,
                    height: "20px",
                    width: "20px"
                  });
                }
                U(ab.props, {
                  src: Q(ab.remote, {
                    xdm_e: k(q.href),
                    xdm_c: ab.channel,
                    xdm_p: 6,
                    xdm_s: ab.secret
                  }),
                  name: V + ab.channel + "_provider"
                });
                Y = B(ab);
              }
            };
            if (p.stack.FlashTransport[ai] && p.stack.FlashTransport[ai].init) {
              ah();
            } else {
              if (!p.stack.FlashTransport[ai]) {
                p.stack.FlashTransport[ai] = {
                  queue: [ah]
                };
                aa(ai);
              } else {
                p.stack.FlashTransport[ai].queue.push(ah);
              }
            }
          },
          init: function init() {
            H(ad.onDOMReady, ad);
          }
        };
      };
      p.stack.PostMessageTransport = function (ac) {
        var ae, af, aa, ab;
        function Z(ag) {
          if (ag.origin) {
            return k(ag.origin);
          }
          if (ag.uri) {
            return k(ag.uri);
          }
          if (ag.domain) {
            return q.protocol + "//" + ag.domain;
          }
          throw "Unable to retrieve the origin of the event";
        }
        function ad(ah) {
          if (typeof ah.data !== "string") {
            return;
          }
          var ag = Z(ah);
          if (ag == ab && typeof ah.data === "string" && ah.data.substring(0, ac.channel.length + 1) == ac.channel + " ") {
            ae.up.incoming(ah.data.substring(ac.channel.length + 1), ag);
          }
        }
        function Y(ag) {
          if (ag.data == ac.channel + "-ready") {
            aa = "postMessage" in af.contentWindow ? af.contentWindow : af.contentWindow.document;
            y(O, "message", Y);
            w(O, "message", ad);
            L(function () {
              ae.up.callback(true);
            }, 0);
          }
        }
        return ae = {
          outgoing: function outgoing(ah, ai, ag) {
            aa.postMessage(ac.channel + " " + ah, ai || ab);
            if (ag) {
              ag();
            }
          },
          destroy: function destroy() {
            y(O, "message", Y);
            y(O, "message", ad);
            if (af) {
              aa = null;
              af.parentNode.removeChild(af);
              af = null;
            }
          },
          onDOMReady: function onDOMReady() {
            ab = k(ac.remote);
            if (ab === "file://") {
              ab = "*";
            }
            if (ac.isHost) {
              w(O, "message", Y);
              U(ac.props, {
                src: Q(ac.remote, {
                  xdm_e: k(q.href),
                  xdm_c: ac.channel,
                  xdm_p: 1
                }),
                name: V + ac.channel + "_provider"
              });
              af = B(ac);
            } else {
              w(O, "message", ad);
              aa = "postMessage" in O.parent ? O.parent : O.parent.document;
              aa.postMessage(ac.channel + "-ready", ab);
              L(function () {
                ae.up.callback(true);
              }, 0);
            }
          },
          init: function init() {
            H(ae.onDOMReady, ae);
          }
        };
      };
      p.stack.FrameElementTransport = function (Z) {
        var aa, ac, ab, Y;
        return aa = {
          outgoing: function outgoing(ae, af, ad) {
            ab.call(this, ae);
            if (ad) {
              ad();
            }
          },
          destroy: function destroy() {
            if (ac) {
              ac.parentNode.removeChild(ac);
              ac = null;
            }
          },
          onDOMReady: function onDOMReady() {
            Y = k(Z.remote);
            if (Z.isHost) {
              U(Z.props, {
                src: Q(Z.remote, {
                  xdm_e: k(q.href),
                  xdm_c: Z.channel,
                  xdm_p: 5
                }),
                name: V + Z.channel + "_provider"
              });
              ac = B(Z);
              ac.fn = function (ad) {
                delete ac.fn;
                ab = ad;
                L(function () {
                  aa.up.callback(true);
                }, 0);
                return function (ae) {
                  aa.up.incoming(ae, Y);
                };
              };
            } else {
              if (d.referrer && k(d.referrer) != T.xdm_e) {
                O.top.location = T.xdm_e;
              }
              ab = O.frameElement.fn(function (ad) {
                aa.up.incoming(ad, Y);
              });
              aa.up.callback(true);
            }
          },
          init: function init() {
            H(aa.onDOMReady, aa);
          }
        };
      };
      p.stack.NameTransport = function (ac) {
        var ad;
        var af, aj, ab, ah, ai, Z, Y;
        function ag(am) {
          var al = ac.remoteHelper + (af ? "#_3" : "#_2") + ac.channel;
          aj.contentWindow.sendMessage(am, al);
        }
        function ae() {
          if (af) {
            if (++ah === 2 || !af) {
              ad.up.callback(true);
            }
          } else {
            ag("ready");
            ad.up.callback(true);
          }
        }
        function ak(al) {
          ad.up.incoming(al, Z);
        }
        function aa() {
          if (ai) {
            L(function () {
              ai(true);
            }, 0);
          }
        }
        return ad = {
          outgoing: function outgoing(am, an, al) {
            ai = al;
            ag(am);
          },
          destroy: function destroy() {
            aj.parentNode.removeChild(aj);
            aj = null;
            if (af) {
              ab.parentNode.removeChild(ab);
              ab = null;
            }
          },
          onDOMReady: function onDOMReady() {
            af = ac.isHost;
            ah = 0;
            Z = k(ac.remote);
            ac.local = C(ac.local);
            if (af) {
              p.Fn.set(ac.channel, function (am) {
                if (af && am === "ready") {
                  p.Fn.set(ac.channel, ak);
                  ae();
                }
              });
              Y = Q(ac.remote, {
                xdm_e: ac.local,
                xdm_c: ac.channel,
                xdm_p: 2
              });
              U(ac.props, {
                src: Y + "#" + ac.channel,
                name: V + ac.channel + "_provider"
              });
              ab = B(ac);
            } else {
              ac.remoteHelper = ac.remote;
              p.Fn.set(ac.channel, ak);
            }
            var al = function al() {
              var am = aj || this;
              y(am, "load", al);
              p.Fn.set(ac.channel + "_load", aa);
              (function an() {
                if (typeof am.contentWindow.sendMessage == "function") {
                  ae();
                } else {
                  L(an, 50);
                }
              })();
            };
            aj = B({
              props: {
                src: ac.local + "#_4" + ac.channel
              },
              onLoad: al
            });
          },
          init: function init() {
            H(ad.onDOMReady, ad);
          }
        };
      };
      p.stack.HashTransport = function (aa) {
        var ad;
        var ag,
          ab,
          Y,
          ae,
          an,
          ac,
          am;
        var ah, Z;
        function al(ap) {
          if (!am) {
            return;
          }
          var ao = aa.remote + "#" + an++ + "_" + ap;
          (ag || !ah ? am.contentWindow : am).location = ao;
        }
        function af(ao) {
          ae = ao;
          ad.up.incoming(ae.substring(ae.indexOf("_") + 1), Z);
        }
        function ak() {
          if (!ac) {
            return;
          }
          var ao = ac.location.href,
            aq = "",
            ap = ao.indexOf("#");
          if (ap != -1) {
            aq = ao.substring(ap);
          }
          if (aq && aq != ae) {
            af(aq);
          }
        }
        function aj() {
          ab = setInterval(ak, Y);
        }
        return ad = {
          outgoing: function outgoing(ao, ap) {
            al(ao);
          },
          destroy: function destroy() {
            O.clearInterval(ab);
            if (ag || !ah) {
              am.parentNode.removeChild(am);
            }
            am = null;
          },
          onDOMReady: function onDOMReady() {
            ag = aa.isHost;
            Y = aa.interval;
            ae = "#" + aa.channel;
            an = 0;
            ah = aa.useParent;
            Z = k(aa.remote);
            if (ag) {
              U(aa.props, {
                src: aa.remote,
                name: V + aa.channel + "_provider"
              });
              if (ah) {
                aa.onLoad = function () {
                  ac = O;
                  aj();
                  ad.up.callback(true);
                };
              } else {
                var aq = 0,
                  ao = aa.delay / 50;
                (function ap() {
                  if (++aq > ao) {
                    throw new Error("Unable to reference listenerwindow");
                  }
                  try {
                    ac = am.contentWindow.frames[V + aa.channel + "_consumer"];
                  } catch (ar) {}
                  if (ac) {
                    aj();
                    ad.up.callback(true);
                  } else {
                    L(ap, 50);
                  }
                })();
              }
              am = B(aa);
            } else {
              ac = O;
              aj();
              if (ah) {
                am = parent;
                ad.up.callback(true);
              } else {
                U(aa, {
                  props: {
                    src: aa.remote + "#" + aa.channel + new Date(),
                    name: V + aa.channel + "_consumer"
                  },
                  onLoad: function onLoad() {
                    ad.up.callback(true);
                  }
                });
                am = B(aa);
              }
            }
          },
          init: function init() {
            H(ad.onDOMReady, ad);
          }
        };
      };
      p.stack.ReliableBehavior = function (Z) {
        var ab, ad;
        var ac = 0,
          Y = 0,
          aa = "";
        return ab = {
          incoming: function incoming(ag, ae) {
            var af = ag.indexOf("_"),
              ah = ag.substring(0, af).split(",");
            ag = ag.substring(af + 1);
            if (ah[0] == ac) {
              aa = "";
              if (ad) {
                ad(true);
              }
            }
            if (ag.length > 0) {
              ab.down.outgoing(ah[1] + "," + ac + "_" + aa, ae);
              if (Y != ah[1]) {
                Y = ah[1];
                ab.up.incoming(ag, ae);
              }
            }
          },
          outgoing: function outgoing(ag, ae, af) {
            aa = ag;
            ad = af;
            ab.down.outgoing(Y + "," + ++ac + "_" + ag, ae);
          }
        };
      };
      p.stack.QueueBehavior = function (aa) {
        var ad,
          ae = [],
          ah = true,
          ab = "",
          ag,
          Y = 0,
          Z = false,
          ac = false;
        function af() {
          if (aa.remove && ae.length === 0) {
            x(ad);
            return;
          }
          if (ah || ae.length === 0 || ag) {
            return;
          }
          ah = true;
          var ai = ae.shift();
          ad.down.outgoing(ai.data, ai.origin, function (aj) {
            ah = false;
            if (ai.callback) {
              L(function () {
                ai.callback(aj);
              }, 0);
            }
            af();
          });
        }
        return ad = {
          init: function init() {
            if (u(aa)) {
              aa = {};
            }
            if (aa.maxLength) {
              Y = aa.maxLength;
              ac = true;
            }
            if (aa.lazy) {
              Z = true;
            } else {
              ad.down.init();
            }
          },
          callback: function callback(aj) {
            ah = false;
            var ai = ad.up;
            af();
            ai.callback(aj);
          },
          incoming: function incoming(al, aj) {
            if (ac) {
              var ak = al.indexOf("_"),
                ai = parseInt(al.substring(0, ak), 10);
              ab += al.substring(ak + 1);
              if (ai === 0) {
                if (aa.encode) {
                  ab = l(ab);
                }
                ad.up.incoming(ab, aj);
                ab = "";
              }
            } else {
              ad.up.incoming(al, aj);
            }
          },
          outgoing: function outgoing(am, aj, al) {
            if (aa.encode) {
              am = I(am);
            }
            var ai = [],
              ak;
            if (ac) {
              while (am.length !== 0) {
                ak = am.substring(0, Y);
                am = am.substring(ak.length);
                ai.push(ak);
              }
              while (ak = ai.shift()) {
                ae.push({
                  data: ai.length + "_" + ak,
                  origin: aj,
                  callback: ai.length === 0 ? al : null
                });
              }
            } else {
              ae.push({
                data: am,
                origin: aj,
                callback: al
              });
            }
            if (Z) {
              ad.down.init();
            } else {
              af();
            }
          },
          destroy: function destroy() {
            ag = true;
            ad.down.destroy();
          }
        };
      };
      p.stack.VerifyBehavior = function (ac) {
        var ad,
          ab,
          Z;
        function Y() {
          ab = Math.random().toString(16).substring(2);
          ad.down.outgoing(ab);
        }
        return ad = {
          incoming: function incoming(ag, ae) {
            var af = ag.indexOf("_");
            if (af === -1) {
              if (ag === ab) {
                ad.up.callback(true);
              } else {
                if (!Z) {
                  Z = ag;
                  if (!ac.initiate) {
                    Y();
                  }
                  ad.down.outgoing(ag);
                }
              }
            } else {
              if (ag.substring(0, af) === Z) {
                ad.up.incoming(ag.substring(af + 1), ae);
              }
            }
          },
          outgoing: function outgoing(ag, ae, af) {
            ad.down.outgoing(ab + "_" + ag, ae, af);
          },
          callback: function callback(ae) {
            if (ac.initiate) {
              Y();
            }
          }
        };
      };
      p.stack.RpcBehavior = function (ae, Z) {
        var ab,
          ag = Z.serializer || _P();
        var af = 0,
          ad = {};
        function Y(ah) {
          ah.jsonrpc = "2.0";
          ab.down.outgoing(ag.stringify(ah));
        }
        function ac(ah, aj) {
          var ai = Array.prototype.slice;
          return function () {
            var ak = arguments.length,
              am,
              al = {
                method: aj
              };
            if (ak > 0 && typeof arguments[ak - 1] === "function") {
              if (ak > 1 && typeof arguments[ak - 2] === "function") {
                am = {
                  success: arguments[ak - 2],
                  error: arguments[ak - 1]
                };
                al.params = ai.call(arguments, 0, ak - 2);
              } else {
                am = {
                  success: arguments[ak - 1]
                };
                al.params = ai.call(arguments, 0, ak - 1);
              }
              ad["" + ++af] = am;
              al.id = af;
            } else {
              al.params = ai.call(arguments, 0);
            }
            if (ah.namedParams && al.params.length === 1) {
              al.params = al.params[0];
            }
            Y(al);
          };
        }
        function aa(ah, aj, an, al) {
          if (!an) {
            if (aj) {
              Y({
                id: aj,
                error: {
                  code: -32601,
                  message: "Procedure not found."
                }
              });
            }
            return;
          }
          var _ao, _am;
          if (aj) {
            _ao = function ao(aq) {
              _ao = r;
              Y({
                id: aj,
                result: aq
              });
            };
            _am = function am(aq, ar) {
              _am = r;
              var at = {
                id: aj,
                error: {
                  code: -32099,
                  message: aq
                }
              };
              if (ar) {
                at.error.data = ar;
              }
              Y(at);
            };
          } else {
            _ao = _am = r;
          }
          if (!s(al)) {
            al = [al];
          }
          try {
            var ak = ae.context || an.scope;
            var ap = an.method.apply(ak, al.concat([_ao, _am]));
            if (!u(ap)) {
              _ao(ap);
            }
          } catch (ai) {
            _am(ai.message);
          }
        }
        return ab = {
          incoming: function incoming(ai, ah) {
            var aj = ag.parse(ai);
            if (aj.method) {
              if (Z.handle) {
                Z.handle(aj, Y);
              } else {
                aa(aj.method, aj.id, Z.local[aj.method], aj.params);
              }
            } else {
              var ak = ad[aj.id];
              if (aj.error) {
                if (ak.error) {
                  ak.error(aj.error);
                }
              } else {
                if (ak.success) {
                  ak.success(aj.result);
                }
              }
              delete ad[aj.id];
            }
          },
          init: function init() {
            if (Z.remote) {
              for (var ah in Z.remote) {
                if (Z.remote.hasOwnProperty(ah)) {
                  ae[ah] = ac(Z.remote[ah], ah);
                }
              }
            }
            ab.down.init();
          },
          destroy: function destroy() {
            for (var ah in Z.remote) {
              if (Z.remote.hasOwnProperty(ah) && ae.hasOwnProperty(ah)) {
                delete ae[ah];
              }
            }
            ab.down.destroy();
          }
        };
      };
      b.easyXDM = p;
    })(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent);
    return easyXDM.noConflict('Kakao');
  }();
  var EasyXDM = easyXDM_1;

  var CryptoJS = function () {
    var CryptoJS = CryptoJS || function (u, p) {
      var d = {},
        l = d.lib = {},
        s = function s() {},
        t = l.Base = {
          extend: function extend(a) {
            s.prototype = this;
            var c = new s();
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function () {
              c.$super.init.apply(this, arguments);
            });
            c.init.prototype = c;
            c.$super = this;
            return c;
          },
          create: function create() {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a;
          },
          init: function init() {},
          mixIn: function mixIn(a) {
            for (var c in a) {
              a.hasOwnProperty(c) && (this[c] = a[c]);
            }
            a.hasOwnProperty("toString") && (this.toString = a.toString);
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        },
        r = l.WordArray = t.extend({
          init: function init(a, c) {
            a = this.words = a || [];
            this.sigBytes = c != p ? c : 4 * a.length;
          },
          toString: function toString(a) {
            return (a || v).stringify(this);
          },
          concat: function concat(a) {
            var c = this.words,
              e = a.words,
              j = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (j % 4) for (var k = 0; k < a; k++) {
              c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
            } else if (65535 < e.length) for (k = 0; k < a; k += 4) {
              c[j + k >>> 2] = e[k >>> 2];
            } else c.push.apply(c, e);
            this.sigBytes += a;
            return this;
          },
          clamp: function clamp() {
            var a = this.words,
              c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = u.ceil(c / 4);
          },
          clone: function clone() {
            var a = t.clone.call(this);
            a.words = this.words.slice(0);
            return a;
          },
          random: function random(a) {
            for (var c = [], e = 0; e < a; e += 4) {
              c.push(4294967296 * u.random() | 0);
            }
            return new r.init(c, a);
          }
        }),
        w = d.enc = {},
        v = w.Hex = {
          stringify: function stringify(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
              var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
              e.push((k >>> 4).toString(16));
              e.push((k & 15).toString(16));
            }
            return e.join("");
          },
          parse: function parse(a) {
            for (var c = a.length, e = [], j = 0; j < c; j += 2) {
              e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
            }
            return new r.init(e, c / 2);
          }
        },
        b = w.Latin1 = {
          stringify: function stringify(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
              e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            }
            return e.join("");
          },
          parse: function parse(a) {
            for (var c = a.length, e = [], j = 0; j < c; j++) {
              e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
            }
            return new r.init(e, c);
          }
        },
        x = w.Utf8 = {
          stringify: function stringify(a) {
            try {
              return decodeURIComponent(escape(b.stringify(a)));
            } catch (c) {
              throw Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(a) {
            return b.parse(unescape(encodeURIComponent(a)));
          }
        },
        q = l.BufferedBlockAlgorithm = t.extend({
          reset: function reset() {
            this._data = new r.init();
            this._nDataBytes = 0;
          },
          _append: function _append(a) {
            "string" == typeof a && (a = x.parse(a));
            this._data.concat(a);
            this._nDataBytes += a.sigBytes;
          },
          _process: function _process(a) {
            var c = this._data,
              e = c.words,
              j = c.sigBytes,
              k = this.blockSize,
              b = j / (4 * k),
              b = a ? u.ceil(b) : u.max((b | 0) - this._minBufferSize, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
              for (var q = 0; q < a; q += k) {
                this._doProcessBlock(e, q);
              }
              q = e.splice(0, a);
              c.sigBytes -= j;
            }
            return new r.init(q, j);
          },
          clone: function clone() {
            var a = t.clone.call(this);
            a._data = this._data.clone();
            return a;
          },
          _minBufferSize: 0
        });
      l.Hasher = q.extend({
        cfg: t.extend(),
        init: function init(a) {
          this.cfg = this.cfg.extend(a);
          this.reset();
        },
        reset: function reset() {
          q.reset.call(this);
          this._doReset();
        },
        update: function update(a) {
          this._append(a);
          this._process();
          return this;
        },
        finalize: function finalize(a) {
          a && this._append(a);
          return this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(a) {
          return function (b, e) {
            return new a.init(e).finalize(b);
          };
        },
        _createHmacHelper: function _createHmacHelper(a) {
          return function (b, e) {
            return new n.HMAC.init(a, e).finalize(b);
          };
        }
      });
      var n = d.algo = {};
      return d;
    }(Math);
    (function () {
      var u = CryptoJS,
        p = u.lib.WordArray;
      u.enc.Base64 = {
        stringify: function stringify(d) {
          var l = d.words,
            p = d.sigBytes,
            t = this._map;
          d.clamp();
          d = [];
          for (var r = 0; r < p; r += 3) {
            for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + 0.75 * v < p; v++) {
              d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            }
          }
          if (l = t.charAt(64)) for (; d.length % 4;) {
            d.push(l);
          }
          return d.join("");
        },
        parse: function parse(d) {
          var l = d.length,
            s = this._map,
            t = s.charAt(64);
          t && (t = d.indexOf(t), -1 != t && (l = t));
          for (var t = [], r = 0, w = 0; w < l; w++) {
            if (w % 4) {
              var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
              t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
              r++;
            }
          }
          return p.create(t, r);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    })();
    (function (u) {
      function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n;
      }
      function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n;
      }
      function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n;
      }
      function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n;
      }
      for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) {
        b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
      }
      r = r.MD5 = v.extend({
        _doReset: function _doReset() {
          this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(q, n) {
          for (var a = 0; 16 > a; a++) {
            var c = n + a,
              e = q[c];
            q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
          }
          var a = this._hash.words,
            c = q[n + 0],
            e = q[n + 1],
            j = q[n + 2],
            k = q[n + 3],
            z = q[n + 4],
            r = q[n + 5],
            t = q[n + 6],
            w = q[n + 7],
            v = q[n + 8],
            A = q[n + 9],
            B = q[n + 10],
            C = q[n + 11],
            u = q[n + 12],
            D = q[n + 13],
            E = q[n + 14],
            x = q[n + 15],
            f = a[0],
            m = a[1],
            g = a[2],
            h = a[3],
            f = p(f, m, g, h, c, 7, b[0]),
            h = p(h, f, m, g, e, 12, b[1]),
            g = p(g, h, f, m, j, 17, b[2]),
            m = p(m, g, h, f, k, 22, b[3]),
            f = p(f, m, g, h, z, 7, b[4]),
            h = p(h, f, m, g, r, 12, b[5]),
            g = p(g, h, f, m, t, 17, b[6]),
            m = p(m, g, h, f, w, 22, b[7]),
            f = p(f, m, g, h, v, 7, b[8]),
            h = p(h, f, m, g, A, 12, b[9]),
            g = p(g, h, f, m, B, 17, b[10]),
            m = p(m, g, h, f, C, 22, b[11]),
            f = p(f, m, g, h, u, 7, b[12]),
            h = p(h, f, m, g, D, 12, b[13]),
            g = p(g, h, f, m, E, 17, b[14]),
            m = p(m, g, h, f, x, 22, b[15]),
            f = d(f, m, g, h, e, 5, b[16]),
            h = d(h, f, m, g, t, 9, b[17]),
            g = d(g, h, f, m, C, 14, b[18]),
            m = d(m, g, h, f, c, 20, b[19]),
            f = d(f, m, g, h, r, 5, b[20]),
            h = d(h, f, m, g, B, 9, b[21]),
            g = d(g, h, f, m, x, 14, b[22]),
            m = d(m, g, h, f, z, 20, b[23]),
            f = d(f, m, g, h, A, 5, b[24]),
            h = d(h, f, m, g, E, 9, b[25]),
            g = d(g, h, f, m, k, 14, b[26]),
            m = d(m, g, h, f, v, 20, b[27]),
            f = d(f, m, g, h, D, 5, b[28]),
            h = d(h, f, m, g, j, 9, b[29]),
            g = d(g, h, f, m, w, 14, b[30]),
            m = d(m, g, h, f, u, 20, b[31]),
            f = l(f, m, g, h, r, 4, b[32]),
            h = l(h, f, m, g, v, 11, b[33]),
            g = l(g, h, f, m, C, 16, b[34]),
            m = l(m, g, h, f, E, 23, b[35]),
            f = l(f, m, g, h, e, 4, b[36]),
            h = l(h, f, m, g, z, 11, b[37]),
            g = l(g, h, f, m, w, 16, b[38]),
            m = l(m, g, h, f, B, 23, b[39]),
            f = l(f, m, g, h, D, 4, b[40]),
            h = l(h, f, m, g, c, 11, b[41]),
            g = l(g, h, f, m, k, 16, b[42]),
            m = l(m, g, h, f, t, 23, b[43]),
            f = l(f, m, g, h, A, 4, b[44]),
            h = l(h, f, m, g, u, 11, b[45]),
            g = l(g, h, f, m, x, 16, b[46]),
            m = l(m, g, h, f, j, 23, b[47]),
            f = s(f, m, g, h, c, 6, b[48]),
            h = s(h, f, m, g, w, 10, b[49]),
            g = s(g, h, f, m, E, 15, b[50]),
            m = s(m, g, h, f, r, 21, b[51]),
            f = s(f, m, g, h, u, 6, b[52]),
            h = s(h, f, m, g, k, 10, b[53]),
            g = s(g, h, f, m, B, 15, b[54]),
            m = s(m, g, h, f, e, 21, b[55]),
            f = s(f, m, g, h, v, 6, b[56]),
            h = s(h, f, m, g, x, 10, b[57]),
            g = s(g, h, f, m, t, 15, b[58]),
            m = s(m, g, h, f, D, 21, b[59]),
            f = s(f, m, g, h, z, 6, b[60]),
            h = s(h, f, m, g, C, 10, b[61]),
            g = s(g, h, f, m, j, 15, b[62]),
            m = s(m, g, h, f, A, 21, b[63]);
          a[0] = a[0] + f | 0;
          a[1] = a[1] + m | 0;
          a[2] = a[2] + g | 0;
          a[3] = a[3] + h | 0;
        },
        _doFinalize: function _doFinalize() {
          var b = this._data,
            n = b.words,
            a = 8 * this._nDataBytes,
            c = 8 * b.sigBytes;
          n[c >>> 5] |= 128 << 24 - c % 32;
          var e = u.floor(a / 4294967296);
          n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
          n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
          b.sigBytes = 4 * (n.length + 1);
          this._process();
          b = this._hash;
          n = b.words;
          for (a = 0; 4 > a; a++) {
            c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
          }
          return b;
        },
        clone: function clone() {
          var b = v.clone.call(this);
          b._hash = this._hash.clone();
          return b;
        }
      });
      t.MD5 = v._createHelper(r);
      t.HmacMD5 = v._createHmacHelper(r);
    })(Math);
    (function () {
      var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
          cfg: d.extend({
            keySize: 4,
            hasher: p.MD5,
            iterations: 1
          }),
          init: function init(d) {
            this.cfg = this.cfg.extend(d);
          },
          compute: function compute(d, r) {
            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
              n && s.update(n);
              var n = s.update(d).finalize(r);
              s.reset();
              for (var a = 1; a < p; a++) {
                n = s.finalize(n), s.reset();
              }
              b.concat(n);
            }
            b.sigBytes = 4 * q;
            return b;
          }
        });
      u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l);
      };
    })();
    CryptoJS.lib.Cipher || function (u) {
      var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
          cfg: l.extend(),
          createEncryptor: function createEncryptor(e, a) {
            return this.create(this._ENC_XFORM_MODE, e, a);
          },
          createDecryptor: function createDecryptor(e, a) {
            return this.create(this._DEC_XFORM_MODE, e, a);
          },
          init: function init(e, a, b) {
            this.cfg = this.cfg.extend(b);
            this._xformMode = e;
            this._key = a;
            this.reset();
          },
          reset: function reset() {
            t.reset.call(this);
            this._doReset();
          },
          process: function process(e) {
            this._append(e);
            return this._process();
          },
          finalize: function finalize(e) {
            e && this._append(e);
            return this._doFinalize();
          },
          keySize: 4,
          ivSize: 4,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          _createHelper: function _createHelper(e) {
            return {
              encrypt: function encrypt(b, k, d) {
                return ("string" == typeof k ? c : a).encrypt(e, b, k, d);
              },
              decrypt: function decrypt(b, k, d) {
                return ("string" == typeof k ? c : a).decrypt(e, b, k, d);
              }
            };
          }
        });
      d.StreamCipher = v.extend({
        _doFinalize: function _doFinalize() {
          return this._process(!0);
        },
        blockSize: 1
      });
      var b = p.mode = {},
        x = function x(e, a, b) {
          var c = this._iv;
          c ? this._iv = u : c = this._prevBlock;
          for (var d = 0; d < b; d++) {
            e[a + d] ^= c[d];
          }
        },
        q = (d.BlockCipherMode = l.extend({
          createEncryptor: function createEncryptor(e, a) {
            return this.Encryptor.create(e, a);
          },
          createDecryptor: function createDecryptor(e, a) {
            return this.Decryptor.create(e, a);
          },
          init: function init(e, a) {
            this._cipher = e;
            this._iv = a;
          }
        })).extend();
      q.Encryptor = q.extend({
        processBlock: function processBlock(e, a) {
          var b = this._cipher,
            c = b.blockSize;
          x.call(this, e, a, c);
          b.encryptBlock(e, a);
          this._prevBlock = e.slice(a, a + c);
        }
      });
      q.Decryptor = q.extend({
        processBlock: function processBlock(e, a) {
          var b = this._cipher,
            c = b.blockSize,
            d = e.slice(a, a + c);
          b.decryptBlock(e, a);
          x.call(this, e, a, c);
          this._prevBlock = d;
        }
      });
      b = b.CBC = q;
      q = (p.pad = {}).Pkcs7 = {
        pad: function pad(a, b) {
          for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) {
            l.push(d);
          }
          c = s.create(l, c);
          a.concat(c);
        },
        unpad: function unpad(a) {
          a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255;
        }
      };
      d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
          mode: b,
          padding: q
        }),
        reset: function reset() {
          v.reset.call(this);
          var a = this.cfg,
            b = a.iv,
            a = a.mode;
          if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor;else c = a.createDecryptor, this._minBufferSize = 1;
          this._mode = c.call(a, this, b && b.words);
        },
        _doProcessBlock: function _doProcessBlock(a, b) {
          this._mode.processBlock(a, b);
        },
        _doFinalize: function _doFinalize() {
          var a = this.cfg.padding;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            a.pad(this._data, this.blockSize);
            var b = this._process(!0);
          } else b = this._process(!0), a.unpad(b);
          return b;
        },
        blockSize: 4
      });
      var n = d.CipherParams = l.extend({
          init: function init(a) {
            this.mixIn(a);
          },
          toString: function toString(a) {
            return (a || this.formatter).stringify(this);
          }
        }),
        b = (p.format = {}).OpenSSL = {
          stringify: function stringify(a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r);
          },
          parse: function parse(a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
              var c = s.create(b.slice(2, 4));
              b.splice(0, 4);
              a.sigBytes -= 16;
            }
            return n.create({
              ciphertext: a,
              salt: c
            });
          }
        },
        a = d.SerializableCipher = l.extend({
          cfg: l.extend({
            format: b
          }),
          encrypt: function encrypt(a, b, c, d) {
            d = this.cfg.extend(d);
            var l = a.createEncryptor(c, d);
            b = l.finalize(b);
            l = l.cfg;
            return n.create({
              ciphertext: b,
              key: c,
              iv: l.iv,
              algorithm: a,
              mode: l.mode,
              padding: l.padding,
              blockSize: a.blockSize,
              formatter: d.format
            });
          },
          decrypt: function decrypt(a, b, c, d) {
            d = this.cfg.extend(d);
            b = this._parse(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext);
          },
          _parse: function _parse(a, b) {
            return "string" == typeof a ? b.parse(a, this) : a;
          }
        }),
        p = (p.kdf = {}).OpenSSL = {
          execute: function execute(a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({
              keySize: b + c
            }).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({
              key: a,
              iv: c,
              salt: d
            });
          }
        },
        c = d.PasswordBasedCipher = a.extend({
          cfg: a.cfg.extend({
            kdf: p
          }),
          encrypt: function encrypt(b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b;
          },
          decrypt: function decrypt(b, c, d, l) {
            l = this.cfg.extend(l);
            c = this._parse(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l);
          }
        });
    }();
    (function () {
      for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) {
        a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
      }
      for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
          k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
          F = a[z],
          G = a[F],
          y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1;
      }
      var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        d = d.AES = p.extend({
          _doReset: function _doReset() {
            for (var a = this._key, c = a.words, d = a.sigBytes / 4, a = 4 * ((this._nRounds = d + 6) + 1), e = this._keySchedule = [], j = 0; j < a; j++) {
              if (j < d) e[j] = c[j];else {
                var k = e[j - 1];
                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                e[j] = e[j - d] ^ k;
              }
            }
            c = this._invKeySchedule = [];
            for (d = 0; d < a; d++) {
              j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]];
            }
          },
          encryptBlock: function encryptBlock(a, b) {
            this._doCryptBlock(a, b, this._keySchedule, t, r, w, v, l);
          },
          decryptBlock: function decryptBlock(a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this._doCryptBlock(a, c, this._invKeySchedule, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
          },
          _doCryptBlock: function _doCryptBlock(a, b, c, d, e, j, l, f) {
            for (var m = this._nRounds, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) {
              var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                g = q,
                h = s,
                k = t;
            }
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n;
          },
          keySize: 8
        });
      u.AES = p._createHelper(d);
    })();
    return CryptoJS;
  }();
  var crypto = CryptoJS;

  function getAppKey() {
    return getAppKey$1();
  }
  var accessToken$1 = null;
  function getAccessToken() {
    if (accessToken$1 === null) {
      accessToken$1 = retrieveItem(getAccessTokenKey());
    }
    return accessToken$1;
  }
  function setAccessToken(token) {
    var persist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    accessToken$1 = token;
    if (token === null || persist === false) {
      removeItem(getAccessTokenKey());
    } else {
      storeItem(getAccessTokenKey(), token);
    }
  }
  function getRefreshToken() {
    console.error('unsupported operation: Auth.getRefreshToken()');
    return '';
  }
  function setRefreshToken(token) {
    console.error('unsupported operation: Auth.setRefreshToken()');
  }
  function storeItem(key, value) {
    var item = encrypt(value, getAppKey());
    localStorage.setItem(key, item);
  }
  function retrieveItem(key) {
    var item = localStorage.getItem(key);
    return item ? decrypt(item, getAppKey()) : null;
  }
  function removeItem(key) {
    localStorage.removeItem(key);
  }
  var tokenStorageKeys = {};
  function getAccessTokenKey() {
    if (!tokenStorageKeys.accessTokenKey) {
      tokenStorageKeys.accessTokenKey = 'kakao_' + hash('kat' + getAppKey());
    }
    return tokenStorageKeys.accessTokenKey;
  }
  function hash(msg) {
    return crypto.MD5(msg).toString();
  }
  function encrypt(msg, passphrase) {
    return crypto.AES.encrypt(msg, passphrase).toString();
  }
  function decrypt(encrypted, passphrase) {
    return crypto.AES.decrypt(encrypted, passphrase).toString(crypto.enc.Utf8);
  }

  var secret = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getAppKey: getAppKey,
    getAccessToken: getAccessToken,
    setAccessToken: setAccessToken,
    getRefreshToken: getRefreshToken,
    setRefreshToken: setRefreshToken
  });

  function accessToken() {
    return "Bearer ".concat(getAccessToken());
  }
  function appKey() {
    return "KakaoAK ".concat(getAppKey());
  }

  var postApiCommonParams = {
    permission: isOneOf(['A', 'F', 'M']),
    enable_share: isBoolean,
    android_exec_param: isString,
    ios_exec_param: isString,
    android_market_param: isString,
    ios_market_param: isString
  };
  var secureResource = {
    secure_resource: isBoolean
  };
  function forceSecureResource(settings) {
    if (settings.secure_resource === false) {
      if (console) {
        console.warn('KakaoWarning: The secure_resource parameter is deprecated.');
      }
      settings.secure_resource = true;
    }
  }
  function storyActivityContentValidator(obj) {
    if (!isString(obj)) {
      return false;
    }
    if (obj.length === 0 || obj.length > 2048) {
      throw new KakaoError('content length should be between 0 and 2048');
    }
    return true;
  }
  function kageImageUrlListValidator(obj) {
    if (!isArray$1(obj)) {
      return false;
    }
    return every(obj, function (path) {
      if (!isString(path)) {
        return false;
      }
      if (isURL(path)) {
        throw new KakaoError("url in image_url_list should be a kage url, obtained from '/v1/api/story/upload/multi'.");
      }
      return true;
    });
  }
  function hasHeaderBackgroundImage(obj) {
    if (obj.header_image_url || obj.header_image_width || obj.header_image_height) {
      delete obj.header_image_url;
      delete obj.header_image_width;
      delete obj.header_image_height;
      if (console) {
        console.warn("KakaoWarning: The parameters (".concat(['header_image_url', 'header_image_width', 'header_image_height'].join(', '), ") for header background image are deprecated."));
      }
    }
    return true;
  }
  var apiRules = {
    '/v1/user/signup': {
      method: 'post',
      data: {
        optional: {
          properties: isObject
        }
      }
    },
    '/v1/user/unlink': {
      method: 'post'
    },
    '/v2/user/me': {
      method: 'get',
      data: {
        optional: _objectSpread2({
          property_keys: isArray$1
        }, secureResource)
      }
    },
    '/v1/user/logout': {
      method: 'post',
      data: {}
    },
    '/v1/user/update_profile': {
      method: 'post',
      data: {
        required: {
          properties: isObject
        }
      }
    },
    '/v1/user/access_token_info': {
      method: 'get',
      data: {}
    },
    '/v2/user/scopes': {
      method: 'get',
      data: {
        optional: {
          scopes: isArray$1
        }
      }
    },
    '/v2/user/revoke/scopes': {
      method: 'post',
      data: {
        required: {
          scopes: isArray$1
        }
      }
    },
    '/v1/user/service/terms': {
      method: 'get'
    },
    '/v1/user/shipping_address': {
      method: 'get',
      data: {
        optional: {
          address_id: isInteger,
          from_updated_at: isInteger,
          page_size: isInteger
        }
      }
    },
    '/v1/api/talk/profile': {
      method: 'get',
      data: {
        optional: secureResource,
        after: forceSecureResource
      }
    },
    '/v1/api/talk/friends': {
      method: 'get',
      data: {
        optional: _objectSpread2({
          offset: isInteger,
          limit: isInteger,
          order: isString,
          friend_order: isString
        }, secureResource),
        after: forceSecureResource
      }
    },
    '/v1/friends': {
      method: 'get',
      data: {
        optional: _objectSpread2({
          offset: isInteger,
          limit: isInteger,
          order: isString,
          friend_order: isString
        }, secureResource),
        after: forceSecureResource
      }
    },
    '/v2/api/talk/memo/send': {
      method: 'post',
      data: {
        required: {
          template_id: isInteger
        },
        optional: {
          template_args: isObject
        }
      }
    },
    '/v2/api/talk/memo/scrap/send': {
      method: 'post',
      data: {
        required: {
          request_url: isString
        },
        optional: {
          template_id: isInteger,
          template_args: isObject
        }
      }
    },
    '/v2/api/talk/memo/default/send': {
      method: 'post',
      data: {
        required: {
          template_object: function template_object(obj) {
            return isObject(obj) && hasHeaderBackgroundImage(obj);
          }
        }
      }
    },
    '/v1/api/talk/friends/message/send': {
      method: 'post',
      data: {
        required: {
          template_id: isInteger,
          receiver_uuids: isArray$1,
          receiver_id_type: isString
        },
        optional: {
          template_args: isObject
        },
        defaults: function defaults() {
          return {
            receiver_id_type: 'uuid'
          };
        }
      }
    },
    '/v1/api/talk/friends/message/scrap/send': {
      method: 'post',
      data: {
        required: {
          request_url: isString,
          receiver_uuids: isArray$1,
          receiver_id_type: isString
        },
        optional: {
          template_id: isInteger,
          template_args: isObject
        },
        defaults: function defaults() {
          return {
            receiver_id_type: 'uuid'
          };
        }
      }
    },
    '/v1/api/talk/friends/message/default/send': {
      method: 'post',
      data: {
        required: {
          template_object: function template_object(obj) {
            return isObject(obj) && hasHeaderBackgroundImage(obj);
          },
          receiver_uuids: isArray$1,
          receiver_id_type: isString
        },
        defaults: function defaults() {
          return {
            receiver_id_type: 'uuid'
          };
        }
      }
    },
    '/v2/api/kakaolink/talk/template/validate': {
      method: 'get',
      data: {
        required: {
          link_ver: isString,
          template_id: isInteger
        },
        optional: {
          template_args: isObject
        }
      },
      authType: appKey
    },
    '/v2/api/kakaolink/talk/template/scrap': {
      method: 'get',
      data: {
        required: {
          link_ver: isString,
          request_url: isString
        },
        optional: {
          template_id: isInteger,
          template_args: isObject
        }
      },
      authType: appKey
    },
    '/v2/api/kakaolink/talk/template/default': {
      method: 'get',
      data: {
        required: {
          link_ver: isString,
          template_object: isObject
        }
      },
      authType: appKey
    },
    '/v2/api/talk/message/image/upload': {
      method: 'post',
      data: {
        required: {
          file: isObject
        }
      },
      authType: appKey
    },
    '/v2/api/talk/message/image/delete': {
      method: 'delete',
      data: {
        required: {
          image_url: isString
        }
      },
      authType: appKey
    },
    '/v2/api/talk/message/image/scrap': {
      method: 'post',
      data: {
        required: {
          image_url: isString
        }
      },
      authType: appKey
    },
    '/v1/api/story/profile': {
      method: 'get',
      data: {
        optional: secureResource
      }
    },
    '/v1/api/story/isstoryuser': {
      method: 'get'
    },
    '/v1/api/story/mystory': {
      method: 'get',
      data: {
        required: {
          id: isString
        }
      }
    },
    '/v1/api/story/mystories': {
      method: 'get',
      data: {
        optional: {
          last_id: isString
        }
      }
    },
    '/v1/api/story/linkinfo': {
      method: 'get',
      data: {
        required: {
          url: isString
        }
      }
    },
    '/v1/api/story/post/note': {
      method: 'post',
      data: {
        required: {
          content: storyActivityContentValidator
        },
        optional: postApiCommonParams
      }
    },
    '/v1/api/story/post/photo': {
      method: 'post',
      data: {
        required: {
          image_url_list: kageImageUrlListValidator
        },
        optional: _objectSpread2({
          content: storyActivityContentValidator
        }, postApiCommonParams)
      }
    },
    '/v1/api/story/post/link': {
      method: 'post',
      data: {
        required: {
          link_info: isObject
        },
        optional: _objectSpread2({
          content: storyActivityContentValidator
        }, postApiCommonParams)
      }
    },
    '/v1/api/story/upload/multi': {
      method: 'post',
      data: {}
    },
    '/v1/api/story/delete/mystory': {
      method: 'delete',
      data: {
        required: {
          id: isString
        }
      }
    },
    '/v1/api/talk/channels': {
      method: 'get',
      data: {
        optional: {
          channel_public_ids: isArray$1
        }
      }
    },
    '/v1/api/talk/plusfriends': {
      method: 'get',
      data: {
        optional: {
          plus_friend_public_ids: isArray$1
        }
      }
    }
  };
  var rules$7 = {
    request: {
      required: {
        url: function url(_url) {
          return isOneOf(keys(apiRules))(_url);
        }
      },
      optional: {
        data: isObject,
        files: function files(obj) {
          return passesOneOf([isArray$1, isFileList])(obj) && every(obj, passesOneOf([isFile, isBlob]));
        },
        file: isFile,
        success: isFunction,
        fail: isFunction,
        always: isFunction
      },
      defaults: {
        data: {},
        success: emptyFunc,
        fail: emptyFunc,
        always: emptyFunc
      }
    },
    api: apiRules
  };

  var proxyForRequest = null;
  function request$5(settings) {
    settings = processRules(settings, rules$7.request, 'API.request');
    var url = settings.url;
    var urlRule = rules$7.api[url].data;
    if (urlRule) {
      settings.data = processRules(settings.data, urlRule, "API.request - ".concat(url));
    }
    if (!proxyForRequest) {
      proxyForRequest = getProxy$1();
      cleanups$7.push(function () {
        proxyForRequest.destroy();
        proxyForRequest = null;
      });
    }
    return new es6Promise.exports.Promise(function (resolve, reject) {
      getConfig(settings).then(function (config) {
        proxyForRequest.request(config, function (res) {
          settings.success(res);
          settings.always(res);
          resolve(res);
        }, function (xdmError) {
          var error = parseXdmError(xdmError);
          settings.fail(error);
          settings.always(error);
          reject(error);
        });
      }, function (error) {
        reject(error);
      });
    });
  }
  function getProxy$1() {
    return guardCreateEasyXDM(function () {
      return new EasyXDM.Rpc({
        remote: URL.apiRemote
      }, {
        remote: {
          request: {}
        }
      });
    });
  }
  function parseXdmError(xdmError) {
    try {
      logDebug(xdmError);
      return JSON.parse(xdmError.message.responseText);
    } catch (e) {
      return {
        code: -777,
        msg: 'Unknown error'
      };
    }
  }
  function getConfig(settings) {
    var url = settings.url;
    var urlSpec = rules$7.api[url];
    var stringifiedData = {};
    forEach(settings.data, function (value, key) {
      stringifiedData[key] = isString(value) ? value : JSON.stringify(value);
    });
    var config = {
      url: url,
      method: urlSpec.method,
      headers: {
        KA: KAKAO_AGENT,
        Authorization: (urlSpec.authType || accessToken)(),
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache'
      },
      data: stringifiedData
    };
    return new es6Promise.exports.Promise(function (resolve, reject) {
      if (isFileRequired(url) || settings.data.file) {
        var files = settings.files || settings.data.file;
        if (!files) {
          throw new KakaoError("'files' parameter should be set for ".concat(url));
        }
        getFileConfig(files).then(function (fileConfig) {
          var searchParams = [];
          for (var prop in stringifiedData) {
            if (prop !== 'file') {
              searchParams.push("".concat(prop, "=").concat(encodeURIComponent(stringifiedData[prop])));
            }
          }
          if (searchParams.length > 0) {
            config.url += "?".concat(searchParams.join('&'));
          }
          config.file = fileConfig;
          resolve(config);
        }, function (error) {
          reject(error);
        });
      } else {
        resolve(config);
      }
    });
  }
  function isFileRequired(url) {
    return url === '/v1/api/story/upload/multi' || url === '/v2/api/talk/message/image/upload';
  }
  function getFileConfig(files) {
    var serializePromises = map(files, function (file) {
      return serializeFile(file).then(function (serialized) {
        return {
          name: file.name,
          type: file.type,
          str: serialized
        };
      });
    });
    return new es6Promise.exports.Promise(function (resolve, reject) {
      es6Promise.exports.Promise.all(serializePromises).then(function (serializedFiles) {
        resolve({
          paramName: 'file',
          data: serializedFiles
        });
      }, function (error) {
        reject(error);
      });
    });
  }
  function serializeFile(file) {
    return new es6Promise.exports.Promise(function (resolve, reject) {
      if (typeof FileReader === 'undefined') {
        reject(new KakaoError('File API is not supported for this browser.'));
      }
      var fileReader = new FileReader();
      fileReader.onload = function (e) {
        try {
          resolve(ab2str(e.target.result));
        } catch (e) {
          reject(e);
        }
      };
      fileReader.onerror = function (e) {
        reject(new KakaoError("Cannot read file: ".concat(file.name)));
      };
      fileReader.readAsArrayBuffer(file);
    });
  }
  var cleanups$7 = [];
  function cleanup$8() {
    emptyCleanups(cleanups$7);
  }

  var request$6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    request: request$5,
    cleanup: cleanup$8
  });

  function getProxy(config, onResponse) {
    extend(config, {
      remote: URL.loginWidget,
      channel: getRandomString()
    });
    return guardCreateEasyXDM(function () {
      var proxy = new EasyXDM.Rpc(config, {
        local: {
          postResponse: onResponse,
          getKakaoAgent: function getKakaoAgent() {
            return KAKAO_AGENT;
          }
        },
        remote: {
          getCode: {},
          getAccessToken: {},
          setClient: {},
          setStateToken: {},
          deleteAuthCookie: {}
        }
      });
      proxy.channel = config.channel;
      return proxy;
    });
  }

  var POPUP_NAME = '_blank';
  var POPUP_FEATURES$1 = 'width=380, height=520, scrollbars=yes';
  var ANDROID_WV = /Version\/4.0/i.test(UA.ua) || /; wv\)/i.test(UA.ua);
  var ANDROID_WV_ALLOWLIST = /naver\(inapp|daumapps|ebay/g.test(UA.ua) || (typeof daumApps === "undefined" ? "undefined" : _typeof(daumApps)) === 'object';
  function login$2(stateToken, fallbackUrl, authParams, redirectUri) {
    if (!isSupport()) {
      return;
    }
    var popup = null;
    if (UA.os.ios) {
      var iosLoginScheme = getIosLoginScheme(stateToken, authParams);
      var universalLink = "".concat(URL.universalKakaoLink).concat(encodeURIComponent(iosLoginScheme), "&web=").concat(encodeURIComponent(fallbackUrl));
      if (redirectUri) {
        location.href = universalLink;
      } else {
        popup = windowOpen(universalLink, POPUP_NAME, POPUP_FEATURES$1);
      }
    } else if (UA.os.android) {
      var androidLoginIntent = getAndroidLoginIntent(stateToken, fallbackUrl, authParams);
      if (redirectUri) {
        location.href = androidLoginIntent;
      } else if (UA.browser.version.major > 40 && (
        !ANDROID_WV || ANDROID_WV && ANDROID_WV_ALLOWLIST)) {
        popup = windowOpen(androidLoginIntent, POPUP_NAME, POPUP_FEATURES$1);
      } else {
        popup = windowOpen('', POPUP_NAME, POPUP_FEATURES$1);
        if (popup) {
          popup.addEventListener('unload', function () {
            setTimeout(function () {
              if (popup && popup.location) {
                popup.location.href = fallbackUrl;
              }
            }, 10);
          });
          popup.location.href = androidLoginIntent;
        }
      }
    }
    return popup;
  }
  function isSupport() {
    if (UA.os.ios) {
      var iOSBrowser = /safari|FxiOS|CriOS/.test(UA.ua);
      return iOSBrowser || !isTalkWebview;
    } else if (UA.os.android) {
      return UA.browser.chrome && !/opr\//i.test(UA.ua) && UA.browser.version.major >= 30 && (
        !ANDROID_WV || ANDROID_WV && ANDROID_WV_ALLOWLIST);
    }
    return false;
  }
  function getIosLoginScheme(stateToken, authParams) {
    authParams.state = stateToken;
    var params = {
      client_id: getAppKey$1(),
      redirect_uri: URL.redirectUri,
      params: JSON.stringify(authParams)
    };
    return "".concat(URL.talkLoginScheme, "?").concat(buildQueryString(params));
  }
  function getAndroidLoginIntent(stateToken, fallbackUrl, authParams) {
    return ['intent:#Intent', 'action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY', 'launchFlags=0x08880000', "S.com.kakao.sdk.talk.appKey=".concat(getAppKey$1()), "S.com.kakao.sdk.talk.redirectUri=".concat(URL.talkLoginRedirectUri), "S.com.kakao.sdk.talk.state=".concat(stateToken), "S.com.kakao.sdk.talk.kaHeader=".concat(KAKAO_AGENT), "S.com.kakao.sdk.talk.extraparams=".concat(encodeURIComponent(JSON.stringify(authParams))), "S.browser_fallback_url=".concat(encodeURIComponent(fallbackUrl)), 'end;'].join(';');
  }
  var kakaotalk = {
    login: login$2,
    isSupport: isSupport
  };

  var poller$1 = new Poller(1000, 600);
  var RESERVED_REDIRECT_URI = 'kakaojs';
  function createLoginButton(settings) {
    settings = processRules(settings, rules$8.createLoginButton, 'Auth.createLoginButton');
    var container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for Kakao login button: pass in element or id');
    }
    var buttonSize = settings.size === 'medium' ? '02' : settings.size === 'small' ? '03' : '01';
    var buttonUrl = "".concat(URL.authDomain, "/public/widget/login/").concat(settings.lang, "/").concat(settings.lang, "_").concat(buttonSize, "_medium");
    var buttonImage = "".concat(buttonUrl, ".png");
    var hoverButtonImage = "".concat(buttonUrl, "_press.png");
    container$.innerHTML = "<img\n    id=\"kakao-login-btn\"\n    src=".concat(buttonImage, "\n    onmouseover=this.src='").concat(hoverButtonImage, "'\n    onmouseout=this.src='").concat(buttonImage, "'\n    style=\"cursor: pointer\"\n  />");
    var clickHandler = function clickHandler() {
      doLogin(settings);
    };
    addEvent(container$, 'click', clickHandler);
    cleanups$6.push(function () {
      removeEvent(container$, 'click', clickHandler);
    });
  }
  function login(settings) {
    settings = processRules(settings, rules$8.login, 'Auth.login');
    doLogin(settings);
  }
  function doLogin(settings) {
    var stateToken = getRandomString() + getRandomString();
    if (kakaotalk.isSupport() && settings.throughTalk) {
      loginThroughTalk(settings, stateToken);
    } else if (settings.redirectUri) {
      location.href = redirectLoginThroughWeb(settings);
    } else if (isNewerAndroidKakaoTalkWebView()) {
      var params = extend({}, makeAuthParams(settings), makeAuthExtraParams(settings), {
        redirect_uri: URL.talkLoginRedirectUri,
        response_type: 'code',
        state: stateToken,
        ka: KAKAO_AGENT,
        origin: origin
      });
      var loginUrl = makeAuthUrl(params);
      loginThroughTalk(settings, stateToken, loginUrl);
    } else {
      if (!(UA.browser.msie && parseInt(UA.browser.version.major) <= 9)) {
        addLoginEvent(settings);
      }
      var _loginUrl = loginThroughWeb(settings, stateToken);
      openLoginPopup(_loginUrl);
    }
    eventObserver.dispatch('LOGIN_START');
  }
  function addLoginEvent(settings) {
    var messageHandler = function messageHandler(_ref) {
      var origin = _ref.origin,
        data = _ref.data;
      if (/\.kakao\.com$/.test(origin) && data && typeof data === 'string') {
        var arr = data.split(' ');
        if (arr[1] === 'postResponse') {
          var resp = JSON.parse(decodeURIComponent(arr[2]));
          handleAuthResponse(settings, resp);
          removeEvent(window, 'message', messageHandler);
        }
      }
    };
    addEvent(window, 'message', messageHandler);
    cleanups$6.push(function () {
      removeEvent(window, 'message', messageHandler);
    });
  }
  function loginForm(settings) {
    settings = processRules(settings, rules$8.login, 'Auth.loginForm');
    var stateToken = getRandomString() + getRandomString();
    var reauthQueryString = '&prompt=login';
    if (settings.redirectUri) {
      location.href = "".concat(redirectLoginThroughWeb(settings)).concat(reauthQueryString);
    } else {
      var loginUrl = "".concat(loginThroughWeb(settings, stateToken)).concat(reauthQueryString);
      openLoginPopup(loginUrl);
    }
  }
  function autoLogin(settings) {
    settings = processRules(settings, rules$8.autoLogin, 'Auth.autoLogin');
    if (isIOSKakaoTalkWebView() || isAndroidKakaoTalkWebView()) {
      var stateToken = getRandomString() + getRandomString();
      var params = extend({}, makeAuthParams(settings), {
        redirect_uri: URL.talkLoginRedirectUri,
        response_type: 'code',
        state: stateToken,
        ka: KAKAO_AGENT,
        origin: origin,
        prompt: 'none'
      });
      var loginUrl = makeAuthUrl(params);
      loginThroughTalk(settings, stateToken, loginUrl);
    } else {
      runAuthCallback(settings, {
        error: 'auto_login',
        error_description: 'Kakao.Auth.autoLogin is only supported by KakaoTalk InAppBrowser',
        error_code: '400',
        status: 'error'
      });
    }
    eventObserver.dispatch('LOGIN_START');
  }
  var popupForTalk = null;
  var closePopup = function closePopup() {
    popupForTalk && popupForTalk.close && popupForTalk.close();
    popupForTalk = null;
  };
  var proxyForTalk = null;
  var prevCode = null;
  function loginThroughTalk(settings, stateToken, talkLoginUrl) {
    if (!proxyForTalk) {
      proxyForTalk = getProxy({}, function (response) {
        if (response.status === 'error' && response.error_code && response.error_code !== '300') {
          poller$1.stop();
          if (response.error_code === '700') {
            location.href = "".concat(URL.authDomain, "/error/network");
          }
          handleAuthResponse(settings, {
            error: response.error,
            error_description: response.error_description
          });
        }
        if (response.status) {
          if (response.status === 'ok') {
            poller$1.stop();
            if (prevCode === response.code) {
              return;
            } else {
              prevCode = response.code;
            }
            proxyForTalk.getAccessToken(response.code, getAppKey$1(), UA.os.ios && !talkLoginUrl ? URL.redirectUri : URL.talkLoginRedirectUri, settings.approvalType);
            closePopup();
          } else {
            if (UA.os.ios && popupForTalk.location.href === 'about:blank') {
              closePopup();
            }
          }
        } else {
          handleAuthResponse(settings, response);
        }
      });
      cleanups$6.push(function () {
        proxyForTalk.destroy();
        proxyForTalk = null;
      });
    }
    var fallbackUrl = '';
    if (talkLoginUrl) {
      if (settings.redirectUri) {
        location.href = talkLoginUrl;
      } else {
        openLoginPopup(talkLoginUrl);
      }
    } else {
      fallbackUrl = settings.redirectUri ? redirectLoginThroughWeb(settings) : loginThroughWeb(settings, stateToken, UA.os.ios ? URL.redirectUri : URL.talkLoginRedirectUri);
      var params = extend({}, makeAuthParams(settings), makeAuthExtraParams(settings));
      setTimeout(function () {
        popupForTalk = kakaotalk.login(stateToken, fallbackUrl, params, settings.redirectUri);
      }, 500);
    }
    poller$1.start(function () {
      if (stateToken) {
        proxyForTalk.getCode(stateToken, getAppKey$1(), KAKAO_AGENT);
      }
    }, function () {
      handleAuthResponse(settings, {
        error: 'timeout',
        description: 'Account login timed out. Please login again.',
        error_description: 'Account login timed out. Please login again.'
      });
      if (settings.redirectUri) {
        location.href = fallbackUrl;
      } else {
        openLoginPopup(fallbackUrl);
      }
    });
  }
  var proxyForWeb = null;
  var savedSettingsForWeb = {};
  function loginThroughWeb(settings, stateToken, fallbackUrl) {
    if (!proxyForWeb) {
      proxyForWeb = getProxy({}, function (response) {
        var savedSettings = getSavedSettingsWithResponseState(response, savedSettingsForWeb);
        handleAuthResponse(savedSettings, response);
      });
      cleanups$6.push(function () {
        proxyForWeb.destroy();
        proxyForWeb = null;
      });
    }
    savedSettingsForWeb[stateToken] = settings;
    var redirectUri = settings.redirectUri ? settings.redirectUri : fallbackUrl ? fallbackUrl : RESERVED_REDIRECT_URI;
    var params = extend({}, makeAuthParams(settings), makeAuthExtraParams(settings), {
      redirect_uri: redirectUri,
      response_type: 'code',
      state: stateToken,
      proxy: "easyXDM_Kakao_".concat(proxyForWeb.channel, "_provider"),
      ka: KAKAO_AGENT,
      origin: origin
    });
    return makeAuthUrl(params);
  }
  function redirectLoginThroughWeb(settings) {
    var params = extend({}, makeAuthParams(settings), makeAuthExtraParams(settings), {
      redirect_uri: settings.redirectUri,
      response_type: 'code',
      ka: KAKAO_AGENT,
      origin: origin
    });
    return makeAuthUrl(params);
  }
  function getSavedSettingsWithResponseState(response, settings) {
    if (!settings[response.stateToken]) {
      throw new KakaoError('security error: #CST2');
    }
    var savedSettings = settings[response.stateToken];
    delete settings[response.stateToken];
    delete response.stateToken;
    return savedSettings;
  }
  function handleAuthResponse(settings, resp) {
    if (resp.error) {
      if (resp.error !== 'access_denied') {
        setAccessToken(null);
      }
    } else {
      setAccessToken(resp.access_token, settings.persistAccessToken);
      eventObserver.dispatch('LOGIN');
    }
    runAuthCallback(settings, resp);
  }
  function logout() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyFunc;
    validate(callback, isFunction, 'Auth.logout');
    request$5({
      url: '/v1/user/logout',
      always: function always() {
        setAccessToken(null);
        eventObserver.dispatch('LOGOUT');
        callback(true);
      }
    });
  }
  var proxyForAccessToken = null;
  function issueAccessToken(settings) {
    settings = processRules(settings, rules$8.issueAccessToken, 'Auth.issueAccessToken');
    if (!proxyForAccessToken) {
      proxyForAccessToken = getProxy({}, function (response) {
        handleAuthResponse(settings, response);
      });
      cleanups$6.push(function () {
        proxyForAccessToken.destroy();
        proxyForAccessToken = null;
      });
    }
    proxyForAccessToken.getAccessToken(settings.code, getAppKey$1(), settings.redirectUri);
  }
  var cleanups$6 = [];
  function cleanup$7() {
    emptyCleanups(cleanups$6);
  }

  var login$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createLoginButton: createLoginButton,
    login: login,
    loginForm: loginForm,
    autoLogin: autoLogin,
    logout: logout,
    issueAccessToken: issueAccessToken,
    cleanup: cleanup$7
  });

  function getStatusInfo(callback) {
    validate(callback, isFunction, 'Auth.getStatusInfo');
    if (!getAccessToken()) {
      callback({
        status: 'not_connected'
      });
    } else {
      request$5({
        url: '/v2/user/me',
        success: function success(res) {
          callback({
            status: 'connected',
            user: res
          });
        },
        fail: function fail() {
          callback({
            status: 'not_connected'
          });
        }
      });
    }
  }

  var status = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getStatusInfo: getStatusInfo
  });

  function selectShippingAddress(settings) {
    settings = processRules(settings, rules$8.selectShippingAddress, 'Auth.selectShippingAddress');
    requestShippingAddress(settings, '/user/address');
  }
  function createShippingAddress(settings) {
    settings = processRules(settings, rules$8.createShippingAddress, 'Auth.createShippingAddress');
    requestShippingAddress(settings, '/user/create/address');
  }
  function updateShippingAddress(settings) {
    settings = processRules(settings, rules$8.updateShippingAddress, 'Auth.updateShippingAddress');
    requestShippingAddress(settings, '/user/edit/address');
  }
  function requestShippingAddress(settings, subpath) {
    cleanup$6();
    var transId = generateTxId();
    var params = _objectSpread2({
      app_key: getAppKey$1(),
      access_token: getAccessToken(),
      ka: KAKAO_AGENT,
      trans_id: transId,
      mobile_view: settings.forceMobileLayout,
      enable_back_button: settings.enableBackButton
    }, settings.addressId && {
      address_id: settings.addressId
    });
    var url = URL.appsDomain + subpath;
    if (settings.returnUrl) {
      params.return_url = settings.returnUrl;
      createAndSubmitForm(params, url);
    } else {
      createHiddenIframe(transId, "".concat(URL.appsDomain, "/proxy?trans_id=").concat(transId), cleanups$5);
      addMessageEvent(settings, URL.appsDomain, cleanups$5);
      addCloseEvent(settings);
      openPopupAndSubmitForm(params, {
        url: url,
        popupName: 'shipping_address',
        popupFeatures: "location=no,resizable=no,status=no,scrollbars=no,width=460,height=608"
      });
    }
  }
  function addCloseEvent(settings) {
    var callback = function callback(_ref) {
      var data = _ref.data,
        origin = _ref.origin;
      if ((origin === URL.appsDomain || origin === URL.accountDomain) && data === 'closed') {
        settings.close();
        removeEvent(window, 'message', callback);
      }
    };
    addEvent(window, 'message', callback);
  }
  var cleanups$5 = [];
  function cleanup$6() {
    emptyCleanups(cleanups$5);
  }

  var shippingAddress = /*#__PURE__*/Object.freeze({
    __proto__: null,
    selectShippingAddress: selectShippingAddress,
    createShippingAddress: createShippingAddress,
    updateShippingAddress: updateShippingAddress,
    cleanup: cleanup$6
  });

  var Auth = makeModule([oauth, login$1, secret, status, shippingAddress]);
  var Auth$1 = Auth;

  var API = makeModule([request$6]);
  var API$1 = API;

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  function camelToSnakeCase(str) {
    return str.replace(/[A-Z]/g, function (letter) {
      return "_".concat(letter.toLowerCase());
    });
  }
  function stringifyLCBA(lcba) {
    return isObject(lcba) ? JSON.stringify(lcba) : lcba;
  }
  function requestAPI(url, data) {
    return request$5({
      url: url,
      data: data
    });
  }

  function partialValidator(settings, rule, propName) {
    processRules(settings, rule, "parameter \"".concat(propName, "\" in Link"));
    return true;
  }
  function formatter(settings) {
    return keys(settings).reduce(function (obj, k) {
      obj[camelToSnakeCase(k)] = settings[k];
      return obj;
    }, {});
  }
  var linkRule = {
    optional: {
      webUrl: isString,
      mobileWebUrl: isString,
      androidExecutionParams: isString,
      androidExecParams: isString,
      iosExecutionParams: isString,
      iosExecParams: isString
    },
    builder: makeLink
  };
  var itemRule = {
    required: {
      item: isString,
      itemOp: isString
    }
  };
  function makeLink(settings) {
    var link = formatter(settings);
    if (link.android_exec_params) {
      link.android_execution_params = link.android_exec_params;
      delete link.android_exec_params;
    }
    if (link.ios_exec_params) {
      link.ios_execution_params = link.ios_exec_params;
      delete link.ios_exec_params;
    }
    return link;
  }
  function makeButton(settings) {
    return {
      title: settings.title,
      link: makeLink(settings.link)
    };
  }
  function makeContent(settings) {
    var content = formatter(settings);
    content.link = makeLink(content.link);
    return content;
  }
  function makeItemContent(settings) {
    var itemContent = formatter(settings);
    if (itemContent.items) {
      itemContent.items = map(itemContent.items, function (e) {
        return formatter(e);
      });
    }
    return itemContent;
  }
  var rules$6 = {
    headerLink: linkRule,
    link: linkRule,
    button: {
      required: {
        title: isString,
        link: function link(e) {
          partialValidator(e, linkRule, 'link');
        }
      },
      builder: makeButton
    },
    buttons: {
      optional: {
        0: function _(e) {
          partialValidator(e, rules$6.button, 'button');
        },
        1: function _(e) {
          partialValidator(e, rules$6.button, 'button');
        }
      },
      builder: function builder(arr) {
        return map(arr, makeButton);
      }
    },
    content: {
      required: {
        title: isString,
        imageUrl: isString,
        link: function link(e) {
          partialValidator(e, linkRule, 'link');
        }
      },
      optional: {
        imageWidth: isInteger,
        imageHeight: isInteger,
        description: isString
      },
      builder: makeContent
    },
    contents: {
      optional: {
        0: function _(e) {
          partialValidator(e, rules$6.content, 'content');
        },
        1: function _(e) {
          partialValidator(e, rules$6.content, 'content');
        },
        2: function _(e) {
          partialValidator(e, rules$6.content, 'content');
        }
      },
      builder: function builder(arr) {
        return map(arr, makeContent);
      }
    },
    commerce: {
      required: {
        regularPrice: isInteger
      },
      optional: {
        discountPrice: isInteger,
        discountRate: isInteger,
        fixedDiscountPrice: isInteger,
        currencyUnit: isString,
        currencyUnitPosition: isOneOf([0, 1]),
        productName: isString
      },
      builder: formatter
    },
    social: {
      optional: {
        likeCount: isInteger,
        commentCount: isInteger,
        sharedCount: isInteger,
        viewCount: isInteger,
        subscriberCount: isInteger
      },
      builder: formatter
    },
    itemContent: {
      optional: {
        profileText: isString,
        profileImageUrl: isString,
        titleImageUrl: isString,
        titleImageText: isString,
        titleImageCategory: isString,
        items: function items(arr) {
          return isArray$1(arr) && arr.length < 6 && every(arr, function (e) {
            return partialValidator(e, itemRule, 'items.item');
          });
        },
        sum: isString,
        sumOp: isString
      },
      builder: makeItemContent
    }
  };
  function create(settings, key, callerMsg) {
    var linkPropRule = rules$6[key];
    if (linkPropRule) {
      settings = processRules(settings, linkPropRule, "parameter \"".concat(key, "\" in ").concat(callerMsg || 'Link'));
      return linkPropRule.builder(settings);
    }
  }
  var propGenerator = {
    create: create
  };

  var LINK_VER = '4.0';
  var KakaoLink = _createClass(function KakaoLink(settings, validatedResp) {
    _classCallCheck(this, KakaoLink);
    this.appkey = getAppKey$1();
    this.appver = '1.0';
    this.linkver = LINK_VER;
    this.extras = _objectSpread2(_objectSpread2({
      KA: KAKAO_AGENT
    }, settings.extras), settings.serverCallbackArgs && {
      lcba: stringifyLCBA(settings.serverCallbackArgs)
    });
    this.template_json = validatedResp.template_msg;
    this.template_args = validatedResp.template_args;
    this.template_id = validatedResp.template_id;
  });
  function makeKakaoLink(settings, validatedResp) {
    var kakaoLink = new KakaoLink(settings, validatedResp);
    if (JSON.stringify(kakaoLink).length > 10000) {
      throw new KakaoError('Failed to send message because it exceeds the message size limit. Please contact the app administrator.');
    }
    return buildQueryString(kakaoLink);
  }
  var DefaultLink = _createClass(function DefaultLink(settings) {
    var _this = this;
    _classCallCheck(this, DefaultLink);
    this.link_ver = LINK_VER;
    this.template_object = _objectSpread2({
      object_type: settings.objectType
    }, settings.buttonTitle && {
      button_title: settings.buttonTitle
    });
    forEach(settings, function (setting, key) {
      var prop = propGenerator.create(setting, key, 'defaultObject');
      if (prop) {
        _this.template_object[camelToSnakeCase(key)] = prop;
      }
    });
  });
  var ListLink = function (_DefaultLink) {
    _inherits(ListLink, _DefaultLink);
    var _super = _createSuper(ListLink);
    function ListLink(settings) {
      var _this2;
      _classCallCheck(this, ListLink);
      _this2 = _super.call(this, settings);
      _this2.template_object.header_title = settings.headerTitle;
      if (console && (settings.headerImageUrl || settings.headerImageWidth || settings.headerImageHeight)) {
        console.warn("KakaoWarning: The parameters (".concat(['headerImageUrl', 'headerImageWidth', 'headerImageHeight'].join(', '), ") for header background image are deprecated."));
      }
      return _this2;
    }
    return _createClass(ListLink);
  }(DefaultLink);
  var LocationLink = function (_DefaultLink2) {
    _inherits(LocationLink, _DefaultLink2);
    var _super2 = _createSuper(LocationLink);
    function LocationLink(settings) {
      var _this3;
      _classCallCheck(this, LocationLink);
      _this3 = _super2.call(this, settings);
      var tpl = _this3.template_object;
      tpl.address = settings.address || '';
      tpl.address_title = settings.addressTitle || '';
      return _this3;
    }
    return _createClass(LocationLink);
  }(DefaultLink);
  var TextLink = function (_DefaultLink3) {
    _inherits(TextLink, _DefaultLink3);
    var _super3 = _createSuper(TextLink);
    function TextLink(settings) {
      var _this4;
      _classCallCheck(this, TextLink);
      _this4 = _super3.call(this, settings);
      _this4.template_object.text = settings.text || '';
      return _this4;
    }
    return _createClass(TextLink);
  }(DefaultLink);
  var defaultLinks = {
    FeedLink: DefaultLink,
    CommerceLink: DefaultLink,
    ListLink: ListLink,
    LocationLink: LocationLink,
    TextLink: TextLink
  };
  var ScrapLink = _createClass(function ScrapLink(settings) {
    _classCallCheck(this, ScrapLink);
    this.link_ver = LINK_VER;
    this.request_url = settings.requestUrl;
    if (settings.templateId) {
      this.template_id = settings.templateId;
    }
    if (settings.templateArgs) {
      this.template_args = settings.templateArgs;
    }
  });
  var CustomLink = _createClass(function CustomLink(settings) {
    _classCallCheck(this, CustomLink);
    this.link_ver = LINK_VER;
    this.template_id = settings.templateId;
    this.template_args = settings.templateArgs;
  });
  function makeDefaultLink(settings) {
    var clazz = defaultLinks["".concat(capitalize(settings.objectType), "Link")];
    return new clazz(settings);
  }
  function makeScrapLink(settings) {
    return new ScrapLink(settings);
  }
  function makeCustomLink(settings) {
    return new CustomLink(settings);
  }

  var LINK_POPUP_NAME = 'kakao_link_web_sharer';
  var LINK_POPUP_FEATURES = 'location=no,resizable=no,status=no,scrollbars=no,width=460,height=608';
  var LINK_URL_LIMIT = 2084;
  function send$1(settings, linkType, linkObj) {
    var webLinkParams = {
      app_key: getAppKey$1(),
      ka: KAKAO_AGENT,
      validation_action: linkType,
      validation_params: JSON.stringify(linkObj)
    };
    if (settings.serverCallbackArgs) {
      webLinkParams.lcba = stringifyLCBA(settings.serverCallbackArgs);
    }
    var webLinkUrl = "".concat(URL.sharerDomain, "/talk/friends/picker/easylink?").concat(buildQueryString(webLinkParams));
    var linkPopup = null;
    if (!(UA.browser.msie || UA.browser.spartan) && webLinkUrl.length < LINK_URL_LIMIT) {
      linkPopup = windowOpen(webLinkUrl, LINK_POPUP_NAME, LINK_POPUP_FEATURES);
      linkPopup.focus();
    } else {
      var popupParams = {
        url: "".concat(URL.sharerDomain, "/talk/friends/picker/link"),
        popupName: LINK_POPUP_NAME,
        popupFeatures: LINK_POPUP_FEATURES
      };
      linkPopup = openPopupAndSubmitForm(webLinkParams, popupParams);
    }
    if (settings.callback) {
      handleCallback(linkPopup, settings.callback);
    }
  }
  function handleCallback(popup, callback) {
    if (UA.browser.msie) {
      if (console) {
        console.warn('KakaoWarning: The callback parameter does not support the IE browser.');
      }
      return;
    }
    var linkCallback = function linkCallback(e) {
      if (e.data === 'sent' && e.origin === URL.sharerDomain) {
        callback();
      }
    };
    addEvent(window, 'message', linkCallback);
    var interval = setInterval(function () {
      if (popup.closed) {
        clearInterval(interval);
        removeEvent(window, 'message', linkCallback);
      }
    }, 1000);
  }
  var webSender = {
    send: send$1
  };

  var web2app = function () {
    var ua_parser$1 = ua_parser;
    var TIMEOUT_IOS = 5 * 1000,
      TIMEOUT_ANDROID = 3 * 100,
      INTERVAL = 100,
      ua = ua_parser$1(),
      os = ua.os,
      intentNotSupportedBrowserList = ['opr/'],
      intentSupportCustomBrowserList = ['firefox', 'KAKAOTALK'
      ];
    function moveToStore(storeURL) {
      window.top.location.href = storeURL;
    }
    function web2app(context) {
      var willInvokeApp = typeof context.willInvokeApp === 'function' ? context.willInvokeApp : function () {},
        onAppMissing = typeof context.onAppMissing === 'function' ? context.onAppMissing : moveToStore,
        onUnsupportedEnvironment = typeof context.onUnsupportedEnvironment === 'function' ? context.onUnsupportedEnvironment : function () {};
      willInvokeApp();
      if (os.android) {
        if (isIntentSupportedBrowser() && context.intentURI && !context.useUrlScheme) {
          web2appViaIntentURI(context.intentURI);
        } else if (context.storeURL) {
          web2appViaCustomUrlSchemeForAndroid(context.urlScheme, context.storeURL, onAppMissing);
        }
      } else if (os.ios && context.storeURL) {
        web2appViaCustomUrlSchemeForIOS(context.urlScheme, context.storeURL, onAppMissing, context.universalLink);
      } else {
        setTimeout(function () {
          onUnsupportedEnvironment();
        }, 100);
      }
    }
    function isIntentSupportedBrowser() {
      var supportsIntent = ua.browser.chrome && +ua.browser.version.major >= 25;
      var blackListRegexp = new RegExp(intentNotSupportedBrowserList.join('|'), "i");
      var whiteListRegexp = new RegExp(intentSupportCustomBrowserList.join('|'), "i");
      return supportsIntent && !blackListRegexp.test(ua.ua) || whiteListRegexp.test(ua.ua);
    }
    function web2appViaCustomUrlSchemeForAndroid(urlScheme, storeURL, fallback) {
      deferFallback(TIMEOUT_ANDROID, storeURL, fallback);
      launchAppViaHiddenIframe(urlScheme);
    }
    function deferFallback(timeout, storeURL, fallback) {
      var clickedAt = new Date().getTime();
      return setTimeout(function () {
        var now = new Date().getTime();
        if (isPageVisible() && now - clickedAt < timeout + INTERVAL) {
          fallback(storeURL);
        }
      }, timeout);
    }
    function web2appViaIntentURI(launchURI) {
      if (ua.browser.chrome) {
        move();
      } else {
        setTimeout(move, 100);
      }
      function move() {
        top.location.href = launchURI;
      }
    }
    function web2appViaCustomUrlSchemeForIOS(urlScheme, storeURL, fallback, universalLink) {
      var tid = deferFallback(TIMEOUT_IOS, storeURL, fallback);
      if (parseInt(ua.os.version.major, 10) < 8) {
        bindPagehideEvent(tid);
      } else {
        bindVisibilityChangeEvent(tid);
      }
      if (isSupportUniversalLinks()) {
        if (universalLink === undefined) {
          universalLink = urlScheme;
        } else {
          clearTimeout(tid);
        }
        launchAppViaChangingLocation(universalLink);
      } else {
        launchAppViaHiddenIframe(urlScheme);
      }
    }
    function bindPagehideEvent(tid) {
      window.addEventListener('pagehide', function clear() {
        if (isPageVisible()) {
          clearTimeout(tid);
          window.removeEventListener('pagehide', clear);
        }
      });
    }
    function bindVisibilityChangeEvent(tid) {
      document.addEventListener('visibilitychange', function clear() {
        if (isPageVisible()) {
          clearTimeout(tid);
          document.removeEventListener('visibilitychange', clear);
        }
      });
    }
    function isPageVisible() {
      var attrNames = ['hidden', 'webkitHidden'];
      for (var i = 0, len = attrNames.length; i < len; i++) {
        if (typeof document[attrNames[i]] !== 'undefined') {
          return !document[attrNames[i]];
        }
      }
      return true;
    }
    function launchAppViaChangingLocation(urlScheme) {
      window.top.location.href = urlScheme;
    }
    function launchAppViaHiddenIframe(urlScheme) {
      setTimeout(function () {
        var iframe = createHiddenIframe('appLauncher');
        iframe.src = urlScheme;
      }, 100);
    }
    function createHiddenIframe(id) {
      var iframe = document.createElement('iframe');
      iframe.id = id;
      iframe.style.border = 'none';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.display = 'none';
      iframe.style.overflow = 'hidden';
      document.body.appendChild(iframe);
      return iframe;
    }
    function isSupportUniversalLinks() {
      return parseInt(ua.os.version.major, 10) > 8 && ua.os.ios;
    }
    return web2app;
  }();
  var web2app$1 = web2app;

  var poller = new Poller(100, 100);
  var KAKAOTALK_IOS_APP_ID = '362057947';
  function send(settings, requestUrl, linkObj) {
    var onResponse = null;
    if (UA.browser.iphone && /version/.test(UA.ua.toLowerCase())) {
      var response = null;
      onResponse = function onResponse(res) {
        response = res;
      };
      poller.start(function () {
        if (response !== null) {
          poller.stop();
          handleValidatedResp(response, settings);
        }
      }, function () {
        var error = {
          error: 'timeout',
          error_description: 'LINK_TIMEOUT'
        };
        settings.fail(error);
        settings.always(error);
      });
    } else {
      onResponse = handleValidatedResp;
    }
    return requestAPI(requestUrl, linkObj).then(function (validatedResp) {
      onResponse(validatedResp, settings);
    }, function (error) {
      settings.fail(error);
      settings.always(error);
    });
  }
  function handleValidatedResp(validatedResp, settings) {
    var linkSchemeParams = makeKakaoLink(settings, validatedResp);
    callWeb2app$1(linkSchemeParams, settings.fail, settings.installTalk);
    var msg = {
      template_msg: validatedResp.template_msg || {},
      warning_msg: validatedResp.warning_msg || {},
      argument_msg: validatedResp.argument_msg || {}
    };
    settings.success(msg);
    settings.always(msg);
  }
  function callWeb2app$1(linkSchemeParams, unsupportedCallback, shouldInstallTalk) {
    var linkScheme = (UA.os.ios ? URL.talkLinkScheme : '') + '?' + linkSchemeParams;
    var newIntent = "intent://link?".concat(linkSchemeParams, "#Intent;scheme=kakaolink");
    var oldIntent = "intent:kakaolink://send?".concat(linkSchemeParams, "#Intent");
    var androidIntent = [/instagram|fb_iab/g.test(UA.ua) ? newIntent : oldIntent, 'launchFlags=0x14008000', "".concat(shouldInstallTalk === true ? "package=".concat(URL.talkAndroidPackage, ";") : '', "end;")].join(';');
    var web2appOptions = {
      urlScheme: linkScheme,
      intentURI: androidIntent,
      appName: 'KakaoTalk',
      storeURL: getInstallUrl(URL.talkAndroidPackage, KAKAOTALK_IOS_APP_ID),
      onUnsupportedEnvironment: function onUnsupportedEnvironment() {
        unsupportedCallback(linkScheme);
      }
    };
    if (!shouldInstallTalk || isIOSKakaoTalkWebView() || isAndroidWebView()) {
      web2appOptions.onAppMissing = emptyFunc;
    }
    if (isIOSKakaoTalkWebView()) {
      web2appOptions.universalLink = undefined;
    }
    try {
      web2app$1(web2appOptions);
    } catch (error) {
    }
  }
  var talkSender = {
    send: send
  };

  var commonLinkOptional = {
    success: isFunction,
    fail: isFunction,
    always: isFunction,
    callback: isFunction,
    installTalk: isBoolean,
    throughTalk: isBoolean,
    extras: isObject,
    serverCallbackArgs: passesOneOf([isJSONString, isObject])
  };
  var commonLinkDefaults = {
    success: emptyFunc,
    fail: emptyFunc,
    always: emptyFunc,
    installTalk: false,
    throughTalk: true
  };
  function buttonsValidator(e) {
    if (!isArray$1(e)) {
      return false;
    } else if (e.length > 2) {
      throw new KakaoError('Illegal argument for "buttons" in Link: size of buttons should be up to 2');
    }
    return true;
  }
  var sendFeed = {
    required: {
      objectType: function objectType(type) {
        return type === 'feed';
      },
      content: isObject
    },
    optional: extend({
      itemContent: isObject,
      social: isObject,
      buttonTitle: isString,
      buttons: buttonsValidator
    }, commonLinkOptional),
    defaults: commonLinkDefaults
  };
  var sendList = {
    required: {
      objectType: function objectType(type) {
        return type === 'list';
      },
      headerTitle: isString,
      headerLink: isObject,
      contents: function contents(e) {
        if (!isArray$1(e)) {
          return false;
        } else if (e.length < 2 || e.length > 3) {
          throw new KakaoError('Illegal argument for "contents" in Link: size of contents should be more than 1 and up to 3');
        }
        return true;
      }
    },
    optional: extend({
      buttonTitle: isString,
      buttons: buttonsValidator,
      headerImageUrl: isString,
      headerImageWidth: isInteger,
      headerImageHeight: isInteger
    }, commonLinkOptional),
    defaults: commonLinkDefaults
  };
  var sendCommerce = {
    required: {
      objectType: function objectType(type) {
        return type === 'commerce';
      },
      content: isObject,
      commerce: isObject
    },
    optional: extend({
      buttonTitle: isString,
      buttons: buttonsValidator
    }, commonLinkOptional),
    defaults: commonLinkDefaults
  };
  var sendLocation = {
    required: {
      objectType: function objectType(type) {
        return type === 'location';
      },
      content: isObject,
      address: isString
    },
    optional: extend({
      addressTitle: isString,
      social: isObject,
      buttonTitle: isString,
      buttons: buttonsValidator
    }, commonLinkOptional),
    defaults: commonLinkDefaults
  };
  var sendText = {
    required: {
      objectType: function objectType(type) {
        return type === 'text';
      },
      text: isString,
      link: isObject
    },
    optional: extend({
      buttonTitle: isString,
      buttons: buttonsValidator
    }, commonLinkOptional),
    defaults: commonLinkDefaults
  };
  var sendScrap$1 = {
    required: {
      requestUrl: isString
    },
    optional: extend({
      templateId: isInteger,
      templateArgs: isObject
    }, commonLinkOptional),
    defaults: extend({
      templateArgs: {}
    }, commonLinkDefaults)
  };
  var sendCustom$1 = {
    required: {
      templateId: isInteger
    },
    optional: extend({
      templateArgs: isObject
    }, commonLinkOptional),
    defaults: extend({
      templateArgs: {}
    }, commonLinkDefaults)
  };
  function extendRuleForContainer(rule) {
    return defaults$1({
      required: extend({
        container: passesOneOf([isElement, isString])
      }, rule.required)
    }, rule);
  }
  var rules$5 = {
    defaultObjectTypes: ['feed', 'list', 'commerce', 'location', 'text'],
    sendFeed: sendFeed,
    createFeedButton: extendRuleForContainer(sendFeed),
    sendList: sendList,
    createListButton: extendRuleForContainer(sendList),
    sendCommerce: sendCommerce,
    createCommerceButton: extendRuleForContainer(sendCommerce),
    sendLocation: sendLocation,
    createLocationButton: extendRuleForContainer(sendLocation),
    sendText: sendText,
    createTextButton: extendRuleForContainer(sendText),
    sendScrap: sendScrap$1,
    createScrapButton: extendRuleForContainer(sendScrap$1),
    sendCustom: sendCustom$1,
    createCustomButton: extendRuleForContainer(sendCustom$1),
    uploadImage: {
      required: {
        file: isObject
      }
    },
    deleteImage: {
      required: {
        imageUrl: isString
      }
    },
    scrapImage: {
      required: {
        imageUrl: isString
      }
    }
  };

  function createDefaultButton(settings) {
    if (!settings.objectType || !isOneOf(rules$5.defaultObjectTypes)(settings.objectType)) {
      throw new KakaoError("objectType should be one of (".concat(rules$5.defaultObjectTypes.join(', '), ")"));
    }
    var rule = rules$5["create".concat(capitalize(settings.objectType), "Button")];
    settings = processRules(settings, rule, 'Link.createDefaultButton');
    addClickEvent(settings, 'default');
  }
  function sendDefault(settings) {
    if (!settings.objectType || !isOneOf(rules$5.defaultObjectTypes)(settings.objectType)) {
      throw new KakaoError("objectType should be one of (".concat(rules$5.defaultObjectTypes.join(', '), ")"));
    }
    var rule = rules$5["send".concat(capitalize(settings.objectType))];
    settings = processRules(settings, rule, 'Link.sendDefault');
    doSend(settings, 'default');
  }
  function createScrapButton(settings) {
    settings = processRules(settings, rules$5.createScrapButton, 'Link.createScrapButton');
    addClickEvent(settings, 'scrap');
  }
  function sendScrap(settings) {
    settings = processRules(settings, rules$5.sendScrap, 'Link.sendScrap');
    doSend(settings, 'scrap');
  }
  function createCustomButton(settings) {
    settings = processRules(settings, rules$5.createCustomButton, 'Link.createCustomButton');
    addClickEvent(settings, 'custom');
  }
  function sendCustom(settings) {
    settings = processRules(settings, rules$5.sendCustom, 'Link.sendCustom');
    doSend(settings, 'custom');
  }
  function addClickEvent(settings, linkType) {
    var container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for KakaoTalk Link: pass in element or id');
    }
    var clickHandler = function clickHandler(e) {
      e.preventDefault();
      e.stopPropagation();
      doSend(settings, linkType);
    };
    addEvent(container$, 'click', clickHandler);
    cleanups$4.push(function () {
      removeEvent(container$, 'click', clickHandler);
    });
  }
  var linkTypeMapper = {
    "default": {
      makeLinkFunc: makeDefaultLink,
      requestUrl: '/v2/api/kakaolink/talk/template/default'
    },
    scrap: {
      makeLinkFunc: makeScrapLink,
      requestUrl: '/v2/api/kakaolink/talk/template/scrap'
    },
    custom: {
      makeLinkFunc: makeCustomLink,
      requestUrl: '/v2/api/kakaolink/talk/template/validate'
    }
  };
  function doSend(settings, linkType) {
    var _linkTypeMapper$linkT = linkTypeMapper[linkType],
      makeLinkFunc = _linkTypeMapper$linkT.makeLinkFunc,
      requestUrl = _linkTypeMapper$linkT.requestUrl;
    var linkObj = makeLinkFunc(settings);
    var isUnsupportedBrowser = /opr\/|opt\/|huawei/g.test(UA.ua);
    var isIpad = UA.os.ios && UA.platform === 'tablet';
    if (isTalkWebview || !isUnsupportedBrowser && settings.throughTalk && (UA.platform === 'mobile' || isIpad)) {
      talkSender.send(settings, requestUrl, linkObj);
    } else {
      webSender.send(settings, linkType, linkObj);
    }
  }
  var cleanups$4 = [];
  function cleanup$5() {
    emptyCleanups(cleanups$4);
  }

  var linker = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createDefaultButton: createDefaultButton,
    sendDefault: sendDefault,
    createScrapButton: createScrapButton,
    sendScrap: sendScrap,
    createCustomButton: createCustomButton,
    sendCustom: sendCustom,
    cleanup: cleanup$5
  });

  function uploadImage(settings) {
    settings = processRules(settings, rules$5.uploadImage, 'Link.uploadImage');
    return requestAPI('/v2/api/talk/message/image/upload', {
      file: settings.file
    });
  }
  function deleteImage(settings) {
    settings = processRules(settings, rules$5.deleteImage, 'Link.deleteImage');
    return requestAPI('/v2/api/talk/message/image/delete', {
      image_url: settings.imageUrl
    });
  }
  function scrapImage(settings) {
    settings = processRules(settings, rules$5.scrapImage, 'Link.scrapImage');
    return requestAPI('/v2/api/talk/message/image/scrap', {
      image_url: settings.imageUrl
    });
  }

  var imageAPI = /*#__PURE__*/Object.freeze({
    __proto__: null,
    uploadImage: uploadImage,
    deleteImage: deleteImage,
    scrapImage: scrapImage
  });

  var Link = makeModule([linker, imageAPI]);
  var Link$1 = Link;

  var POPUP_FEATURES = 'width=350, height=510';
  function createAnchorImage$1(settings, imgSrc, imgTitle) {
    var a$ = document.createElement('a');
    a$.setAttribute('href', '#');
    var img$ = document.createElement('img');
    img$.setAttribute('src', imgSrc);
    img$.setAttribute('title', imgTitle);
    img$.setAttribute('alt', imgTitle);
    if (settings.supportMultipleDensities) {
      img$.setAttribute('srcset', [imgSrc.replace('.png', '_2X.png 2x'), imgSrc.replace('.png', '_3X.png 3x')].join(', '));
    }
    a$.appendChild(img$);
    return a$;
  }
  function makeChannelParams(apiVer, lang) {
    return buildQueryString(_objectSpread2({
      api_ver: apiVer,
      kakao_agent: KAKAO_AGENT,
      app_key: getAppKey$1(),
      referer: origin + location.pathname + location.search
    }, lang && {
      lang: lang
    }));
  }

  var sizes = ['small', 'large'];
  var colors = ['yellow', 'mono'];
  var shapes = ['pc', 'mobile'];
  var titles = ['consult', 'question'];
  var langs = ['ko', 'en', 'ja'];
  var rules$4 = {
    createAddChannelButton: {
      required: {
        container: passesOneOf([isElement, isString]),
        channelPublicId: isString
      },
      optional: {
        size: isOneOf(sizes),
        lang: isOneOf(langs),
        supportMultipleDensities: isBoolean
      },
      defaults: {
        size: sizes[0],
        supportMultipleDensities: false
      }
    },
    addChannel: {
      required: {
        channelPublicId: isString
      },
      optional: {
        lang: isOneOf(langs)
      }
    },
    createChatButton: {
      required: {
        container: passesOneOf([isElement, isString]),
        channelPublicId: isString
      },
      optional: {
        size: isOneOf(sizes),
        color: isOneOf(colors),
        shape: isOneOf(shapes),
        title: isOneOf(titles),
        lang: isOneOf(langs),
        supportMultipleDensities: isBoolean
      },
      defaults: {
        size: sizes[0],
        color: colors[0],
        shape: shapes[0],
        title: titles[0],
        supportMultipleDensities: false
      }
    },
    chat: {
      required: {
        channelPublicId: isString
      },
      optional: {
        lang: isOneOf(langs)
      }
    }
  };

  var API_VER$1 = '1.1';
  var ADD_CHANNEL_POPUP_NAME = 'channel_add_social_plugin';
  var CHAT_POPUP_NAME$1 = 'channel_chat_social_plugin';
  function createAddChannelButton(settings) {
    var container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for Channel.createAddChannelButton: pass in element or id');
    } else {
      applyAttributes(settings, container$, {
        channelPublicId: 'data-channel-public-id',
        size: 'data-size',
        supportMultipleDensities: 'data-support-multiple-densities'
      });
    }
    settings = processRules(settings, rules$4.createAddChannelButton, 'Channel.createAddChannelButton');
    var imgSrc = getAddChannelImgSrc(settings);
    var anchor$ = createAnchorImage$1(settings, imgSrc, '카카오톡 채널 추가 버튼');
    container$.appendChild(anchor$);
    var clickHandler = function clickHandler(e) {
      e.preventDefault();
      openAddChannelPopup(settings);
    };
    addEvent(anchor$, 'click', clickHandler);
    cleanups$3.push(function () {
      removeEvent(anchor$, 'click', clickHandler);
      container$.removeChild(anchor$);
    });
  }
  function addChannel(settings) {
    settings = processRules(settings, rules$4.addChannel, 'Channel.addChannel');
    openAddChannelPopup(settings);
  }
  function getAddChannelImgSrc(settings) {
    var filename = "friendadd_".concat(settings.size, "_yellow_rect.png");
    return "".concat(URL.channelIcon, "/channel/").concat(filename);
  }
  function openAddChannelPopup(settings) {
    var addChannelUrl = "".concat(URL.channel, "/").concat(settings.channelPublicId, "/friend");
    if (getAppKey$1() !== null) {
      addChannelUrl += "?".concat(makeChannelParams(API_VER$1, settings.lang));
    }
    windowOpen(addChannelUrl, ADD_CHANNEL_POPUP_NAME, POPUP_FEATURES);
  }
  function createChatButton$1(settings) {
    var container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for Channel.createChatButton: pass in element or id');
    } else {
      applyAttributes(settings, container$, {
        channelPublicId: 'data-channel-public-id',
        size: 'data-size',
        color: 'data-color',
        shape: 'data-shape',
        title: 'data-title',
        supportMultipleDensities: 'data-support-multiple-densities'
      });
    }
    settings = processRules(settings, rules$4.createChatButton, 'Channel.createChatButton');
    var imgSrc = getChatImgSrc$1(settings);
    var anchor$ = createAnchorImage$1(settings, imgSrc, '카카오톡 채널 1:1 채팅 버튼');
    container$.appendChild(anchor$);
    var clickHandler = function clickHandler(e) {
      e.preventDefault();
      openChatPopup$1(settings);
    };
    addEvent(anchor$, 'click', clickHandler);
    cleanups$3.push(function () {
      removeEvent(anchor$, 'click', clickHandler);
      container$.removeChild(anchor$);
    });
  }
  function chat$1(settings) {
    settings = processRules(settings, rules$4.chat, 'Channel.chat');
    openChatPopup$1(settings);
  }
  function getChatImgSrc$1(settings) {
    var filename = "".concat(settings.title, "_").concat(settings.size, "_").concat(settings.color, "_").concat(settings.shape, ".png");
    return "".concat(URL.channelIcon, "/channel/").concat(filename);
  }
  function openChatPopup$1(settings) {
    var chatUrl = "".concat(URL.channel, "/").concat(settings.channelPublicId, "/chat");
    if (getAppKey$1() !== null) {
      chatUrl += "?".concat(makeChannelParams(API_VER$1, settings.lang));
    }
    windowOpen(chatUrl, CHAT_POPUP_NAME$1, POPUP_FEATURES);
  }
  var cleanups$3 = [];
  function cleanup$4() {
    emptyCleanups(cleanups$3);
  }

  var request$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createAddChannelButton: createAddChannelButton,
    addChannel: addChannel,
    createChatButton: createChatButton$1,
    chat: chat$1,
    cleanup: cleanup$4
  });

  var Channel = makeModule([request$4]);
  var Channel$1 = Channel;

  var rules$3 = {
    createAddFriendButton: {
      required: {
        container: passesOneOf([isElement, isString]),
        plusFriendId: isString
      },
      optional: {
        size: isOneOf(['small', 'large']),
        color: isOneOf(['yellow', 'black']),
        shape: isOneOf(['rect', 'round']),
        supportMultipleDensities: isBoolean
      },
      defaults: {
        size: 'small',
        color: 'yellow',
        shape: 'rect',
        supportMultipleDensities: false
      }
    },
    addFriend: {
      required: {
        plusFriendId: isString
      }
    },
    createChatButton: {
      required: {
        container: passesOneOf([isElement, isString]),
        plusFriendId: isString
      },
      optional: {
        size: isOneOf(['small', 'large']),
        color: isOneOf(['yellow', 'mono']),
        shape: isOneOf(['pc', 'mobile']),
        title: isOneOf(['consult', 'question']),
        supportMultipleDensities: isBoolean
      },
      defaults: {
        size: 'small',
        color: 'yellow',
        shape: 'pc',
        title: 'consult',
        supportMultipleDensities: false
      }
    },
    chat: {
      required: {
        plusFriendId: isString
      }
    }
  };

  var API_VER = '1.0';
  var ADD_FRIEND_POPUP_NAME = 'plus_friend_add_social_plugin';
  var CHAT_POPUP_NAME = 'plus_friend_chat_social_plugin';
  function warnDeprecation() {
    if (console) {
      console.warn('KakaoWarning: Kakao.PlusFriend is deprecated. Please use Kakao.Channel instead.');
    }
  }
  function createAddFriendButton(settings) {
    warnDeprecation();
    var container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for PlusFriend.createAddFriendButton: pass in element or id');
    } else {
      applyAttributes(settings, container$, {
        plusFriendId: 'data-plusfriend-id',
        size: 'data-size',
        color: 'data-color',
        shape: 'data-shape',
        supportMultipleDensities: 'data-support-multiple-densities'
      });
    }
    settings = processRules(settings, rules$3.createAddFriendButton, 'PlusFriend.createAddFriendButton');
    var imgSrc = getAddFriendImgSrc(settings);
    var anchor$ = createAnchorImage$1(settings, imgSrc, '플러스친구 친구 추가 버튼');
    container$.appendChild(anchor$);
    var clickHandler = function clickHandler(e) {
      e.preventDefault();
      openAddFriendPopup(settings);
    };
    addEvent(anchor$, 'click', clickHandler);
    cleanups$2.push(function () {
      removeEvent(anchor$, 'click', clickHandler);
      container$.removeChild(anchor$);
    });
  }
  function addFriend(settings) {
    warnDeprecation();
    settings = processRules(settings, rules$3.addFriend, 'PlusFriend.addFriend');
    openAddFriendPopup(settings);
  }
  function getAddFriendImgSrc(settings) {
    var filename = "friendadd_".concat(settings.size, "_").concat(settings.color, "_").concat(settings.shape, ".png");
    return "".concat(URL.channelIcon, "/plusfriend/").concat(filename);
  }
  function openAddFriendPopup(settings) {
    var addFriendUrl = "".concat(URL.channel, "/").concat(settings.plusFriendId, "/friend");
    if (getAppKey$1() !== null) {
      addFriendUrl += "?".concat(makeChannelParams(API_VER));
    }
    windowOpen(addFriendUrl, ADD_FRIEND_POPUP_NAME, POPUP_FEATURES);
  }
  function createChatButton(settings) {
    warnDeprecation();
    var container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for PlusFriend.createChatButton: pass in element or id');
    } else {
      applyAttributes(settings, container$, {
        plusFriendId: 'data-plusfriend-id',
        size: 'data-size',
        color: 'data-color',
        shape: 'data-shape',
        title: 'data-title',
        supportMultipleDensities: 'data-support-multiple-densities'
      });
    }
    settings = processRules(settings, rules$3.createChatButton, 'PlusFriend.createChatButton');
    var imgSrc = getChatImgSrc(settings);
    var anchor$ = createAnchorImage$1(settings, imgSrc, '플러스친구 1:1 채팅 버튼');
    container$.appendChild(anchor$);
    var clickHandler = function clickHandler(e) {
      e.preventDefault();
      openChatPopup(settings);
    };
    addEvent(anchor$, 'click', clickHandler);
    cleanups$2.push(function () {
      removeEvent(anchor$, 'click', clickHandler);
      container$.removeChild(anchor$);
    });
  }
  function chat(settings) {
    warnDeprecation();
    settings = processRules(settings, rules$3.chat, 'PlusFriend.chat');
    openChatPopup(settings);
  }
  function getChatImgSrc(settings) {
    var filename = "".concat(settings.title, "_").concat(settings.size, "_").concat(settings.color, "_").concat(settings.shape, ".png");
    return "".concat(URL.channelIcon, "/plusfriend/").concat(filename);
  }
  function openChatPopup(settings) {
    var chatUrl = "".concat(URL.channel, "/").concat(settings.plusFriendId, "/chat");
    if (getAppKey$1() !== null) {
      chatUrl += "?".concat(makeChannelParams(API_VER));
    }
    windowOpen(chatUrl, CHAT_POPUP_NAME, POPUP_FEATURES);
  }
  var cleanups$2 = [];
  function cleanup$3() {
    emptyCleanups(cleanups$2);
  }

  var request$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createAddFriendButton: createAddFriendButton,
    addFriend: addFriend,
    createChatButton: createChatButton,
    chat: chat,
    cleanup: cleanup$3
  });

  var PlusFriend = makeModule([request$3]);
  var PlusFriend$1 = PlusFriend;

  var urlInfoRule = {
    required: {
      title: isString
    },
    optional: {
      desc: isString,
      name: isString,
      images: isArray$1,
      type: isString
    },
    defaults: {
      type: 'website'
    },
    after: function after(settings) {
      if (settings.images) {
        settings.imageurl = settings.images;
        delete settings.images;
      }
    }
  };
  var rules$2 = {
    createShareButton: {
      required: {
        container: passesOneOf([isElement, isString])
      },
      optional: {
        url: isString,
        text: isString
      },
      defaults: {
        url: location.href
      }
    },
    share: {
      optional: {
        url: isString,
        text: isString
      },
      defaults: {
        url: location.href
      }
    },
    open: {
      optional: {
        url: isString,
        text: isString,
        urlInfo: function urlInfo(obj) {
          return isObject(obj) && !!processRules(obj, urlInfoRule, 'Story.open');
        },
        install: isBoolean
      },
      defaults: {
        url: location.href,
        install: false
      }
    },
    createFollowButton: {
      required: {
        container: passesOneOf([isElement, isString]),
        id: isString
      },
      optional: {
        showFollowerCount: isBoolean,
        type: isOneOf(['horizontal', 'vertical'])
      },
      defaults: {
        showFollowerCount: true,
        type: 'horizontal'
      },
      after: function after(settings) {
        if (settings.id[0] !== '@') {
          settings.id = "@".concat(settings.id);
        }
      }
    }
  };

  function createShareButton(settings) {
    var container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for Story.createShareButton: pass in element or id');
    } else {
      applyAttributes(settings, container$, {
        url: 'data-url'
      });
    }
    settings = processRules(settings, rules$2.createShareButton, 'Story.createShareButton');
    var anchor$ = createAnchorImage(URL.storyIcon, '카카오스토리 웹 공유 버튼');
    container$.appendChild(anchor$);
    var clickHandler = function clickHandler(e) {
      e.preventDefault();
      openSharePopup(settings);
    };
    addEvent(anchor$, 'click', clickHandler);
    cleanups$1.push(function () {
      removeEvent(anchor$, 'click', clickHandler);
      container$.removeChild(anchor$);
    });
  }
  function createAnchorImage(imgSrc, imgTitle) {
    var a$ = document.createElement('a');
    a$.setAttribute('href', '#');
    var img$ = document.createElement('img');
    img$.setAttribute('src', imgSrc);
    img$.setAttribute('title', imgTitle);
    img$.setAttribute('alt', imgTitle);
    a$.appendChild(img$);
    return a$;
  }
  function share$1(settings) {
    settings = processRules(settings, rules$2.share, 'Story.share');
    openSharePopup(settings);
  }
  function openSharePopup(settings) {
    var params = extend({
      url: settings.url
    }, makeStoryParams());
    if (settings.text) {
      params.text = settings.text;
    }
    windowOpen("".concat(URL.storyShare, "?").concat(buildQueryString(params)), 'kakaostory_social_plugin', 'width=670, height=800, scrollbars=yes');
  }
  function open(settings) {
    settings = processRules(settings, rules$2.open, 'Story.open');
    var storyPostScheme = makeStoryPostScheme(settings);
    var androidIntent = ["intent:".concat(storyPostScheme, "#Intent"), "".concat(settings.install ? 'package=com.kakao.story;' : '', "end;")].join(';');
    var web2appOptions = {
      urlScheme: storyPostScheme,
      intentURI: androidIntent,
      appName: 'KakaoStory',
      storeURL: getInstallUrl('com.kakao.story', '486244601'),
      onUnsupportedEnvironment: function onUnsupportedEnvironment() {
        settings.fail && settings.fail();
      }
    };
    try {
      web2app$1(web2appOptions);
    } catch (error) {
    }
  }
  function makeStoryPostScheme(settings) {
    var domain = location.hostname || '';
    var params = extend({
      apiver: '1.0',
      appver: VERSION,
      appid: domain,
      appname: domain,
      post: settings.text ? "".concat(settings.text, "\n").concat(settings.url) : settings.url
    }, makeStoryParams());
    if (settings.urlInfo) {
      params.urlinfo = JSON.stringify(settings.urlInfo);
      params.appname = settings.urlInfo.name || params.appname;
    }
    return "".concat(URL.storyPostScheme, "?").concat(buildQueryString(params));
  }
  function createFollowButton(settings) {
    var container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for Story.createFollowButton: pass in element or id');
    } else {
      applyAttributes(settings, container$, {
        id: 'data-id',
        showFollowerCount: 'data-show-follower-count',
        type: 'data-type'
      });
    }
    settings = processRules(settings, rules$2.createFollowButton, 'Story.createFollowButton');
    var _createStoryFollowIfr = createStoryFollowIframe(settings),
      iframe$ = _createStoryFollowIfr.iframe$,
      messageHandler = _createStoryFollowIfr.messageHandler;
    container$.appendChild(iframe$);
    addEvent(window, 'message', messageHandler);
    cleanups$1.push(function () {
      removeEvent(window, 'message', messageHandler);
      container$.removeChild(iframe$);
    });
  }
  var _storyFollowIframeId = 0;
  function createStoryFollowIframe(settings) {
    var iframeId = _storyFollowIframeId++;
    var iframeWidth = settings.showFollowerCount && settings.type === 'horizontal' ? 85 : 59;
    var iframeHeight = settings.showFollowerCount && settings.type === 'vertical' ? 46 : 20;
    var iframe$ = document.createElement('iframe');
    iframe$.src = makeStoryFollowUrl(settings, iframeId);
    iframe$.setAttribute('frameborder', '0');
    iframe$.setAttribute('marginwidth', '0');
    iframe$.setAttribute('marginheight', '0');
    iframe$.setAttribute('scrolling', 'no');
    iframe$.setAttribute('style', "width:".concat(iframeWidth, "px; height:").concat(iframeHeight, "px;"));
    var messageHandler = function messageHandler(e) {
      if (e.data && /\.kakao\.com$/.test(e.origin) && typeof e.data === 'string') {
        var _map = map(e.data.split(','), function (e) {
            return parseInt(e, 10);
          }),
          _map2 = _slicedToArray(_map, 3),
          originIframeId = _map2[0],
          afterWidth = _map2[1],
          afterHeight = _map2[2];
        if (originIframeId === iframeId) {
          if (iframeWidth !== afterWidth) {
            iframe$.style.width = "".concat(afterWidth, "px");
          }
          if (iframeHeight !== afterHeight) {
            iframe$.style.height = "".concat(afterHeight, "px");
          }
        }
      }
    };
    return {
      iframe$: iframe$,
      messageHandler: messageHandler
    };
  }
  function makeStoryFollowUrl(settings, iframeId) {
    var params = extend({
      id: settings.id,
      type: settings.type,
      hideFollower: !settings.showFollowerCount,
      frameId: iframeId
    }, makeStoryParams());
    return "".concat(URL.storyChannelFollow, "?").concat(buildQueryString(params));
  }
  function makeStoryParams() {
    var params = {
      kakao_agent: KAKAO_AGENT
    };
    if (getAppKey$1() !== null) {
      params.app_key = getAppKey$1();
    }
    return params;
  }
  var cleanups$1 = [];
  function cleanup$2() {
    emptyCleanups(cleanups$1);
  }

  var request$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createShareButton: createShareButton,
    share: share$1,
    open: open,
    createFollowButton: createFollowButton,
    cleanup: cleanup$2
  });

  var Story = makeModule([request$2]);
  var Story$1 = Story;

  var coordTypes = ['wgs84', 'katec'];
  var vehicleTypes = [1, 2, 3, 4, 5, 6, 7];
  var rpOptions = [1, 2, 3, 4, 5, 6, 8, 100];
  var viaPointRule = {
    required: {
      name: isString,
      x: isNumber,
      y: isNumber
    },
    optional: {
      rpflag: isString,
      cid: isString
    }
  };
  var rules$1 = {
    start: {
      required: {
        name: isString,
        x: isNumber,
        y: isNumber
      },
      optional: {
        coordType: isOneOf(coordTypes),
        vehicleType: isOneOf(vehicleTypes),
        rpOption: isOneOf(rpOptions),
        routeInfo: isBoolean,
        sX: isNumber,
        sY: isNumber,
        sAngle: isNumber,
        returnUri: isString,
        rpflag: isString,
        cid: isString,
        guideId: isNumber,
        viaPoints: function viaPoints(points) {
          if (!isArray$1(points)) {
            return false;
          } else if (points.length > 3) {
            throw new KakaoError('Invalid parameter keys: via points should not be exceed 3. at Navi.start');
          } else {
            forEach(points, function (point) {
              return processRules(point, viaPointRule, 'Navi.start');
            });
            return true;
          }
        }
      },
      defaults: {
        coordType: 'katec',
        vehicleType: 1,
        rpOption: 100,
        routeInfo: false
      }
    },
    share: {
      required: {
        name: isString,
        x: isNumber,
        y: isNumber
      },
      optional: {
        coordType: isOneOf(coordTypes),
        rpflag: isString,
        cid: isString,
        guideId: isNumber
      },
      defaults: {
        coordType: 'katec'
      }
    }
  };

  function start(settings) {
    settings = processRules(settings, rules$1.start, 'Navi.start');
    var naviStartParams = buildQueryString(makeNaviStartParams(settings));
    var naviScheme = "".concat(URL.naviScheme, "?").concat(naviStartParams);
    var fallbackUrl = "".concat(URL.naviFallback, "?").concat(naviStartParams);
    callWeb2app(naviScheme, fallbackUrl);
  }
  function makeNaviStartParams(settings) {
    var destination = {
      name: settings.name,
      x: settings.x,
      y: settings.y,
      rpflag: settings.rpflag,
      cid: settings.cid,
      guide_id: settings.guideId
    };
    var option = {
      coord_type: settings.coordType,
      vehicle_type: settings.vehicleType,
      rpoption: settings.rpOption,
      route_info: settings.routeInfo,
      s_x: settings.sX,
      s_y: settings.sY,
      s_angle: settings.sAngle,
      return_uri: settings.returnUri
    };
    return _objectSpread2(_objectSpread2({}, makeNaviParams()), {}, {
      param: {
        destination: destination,
        option: option,
        via_list: settings.viaPoints
      }
    });
  }
  function share(settings) {
    settings = processRules(settings, rules$1.share, 'Navi.share');
    var naviShareParams = buildQueryString(makeNaviShareParams(settings));
    var naviScheme = "".concat(URL.naviScheme, "?").concat(naviShareParams);
    var fallbackUrl = "".concat(URL.naviFallback, "?").concat(naviShareParams);
    callWeb2app(naviScheme, fallbackUrl);
  }
  function makeNaviShareParams(settings) {
    var destination = {
      name: settings.name,
      x: settings.x,
      y: settings.y,
      rpflag: settings.rpflag,
      cid: settings.cid,
      guide_id: settings.guideId
    };
    var option = {
      route_info: true,
      coord_type: settings.coordType
    };
    return _objectSpread2(_objectSpread2({}, makeNaviParams()), {}, {
      param: {
        destination: destination,
        option: option
      }
    });
  }
  function makeNaviParams() {
    return {
      appkey: getAppKey$1(),
      apiver: '1.0',
      extras: {
        KA: KAKAO_AGENT
      }
    };
  }
  function callWeb2app(naviScheme, fallbackUrl) {
    var androidIntent = ["intent:".concat(naviScheme, "#Intent"), 'package=com.locnall.KimGiSa', "S.browser_fallback_url=".concat(encodeURIComponent(fallbackUrl)), 'end;'].join(';');
    var web2appOptions = {
      urlScheme: naviScheme,
      intentURI: androidIntent,
      storeURL: fallbackUrl,
      universalLink: fallbackUrl
    };
    try {
      web2app$1(web2appOptions);
    } catch (error) {
    }
  }

  var request$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    start: start,
    share: share
  });

  var Navi = makeModule([request$1]);
  var Navi$1 = Navi;

  function pickableCountValidator(n) {
    return isInteger(n) && n > 0 && n < 101;
  }
  function checkPickableCounts(settings) {
    if (settings.maxPickableCount < settings.minPickableCount) {
      throw new KakaoError('"minPickableCount" should not larger than "maxPickableCount"');
    }
  }
  function disableSelectOptionsValidator(arr) {
    var disableSelectOptionRule = {
      required: {
        reason: isOneOf(['msgBlocked', 'registered', 'unregistered', 'notFriend', 'custom'])
      },
      optional: {
        message: isString,
        uuids: isArray$1
      },
      after: function after(settings) {
        if (settings.reason === 'custom' && (!settings.message || !settings.uuids)) {
          throw new KakaoError('"message" and "uuids" must be set for "custom" option in disableSelectOption');
        }
      }
    };
    return isArray$1(arr) && every(arr, function (e) {
      return isObject(e) && !!processRules(e, disableSelectOptionRule, 'disableSelectOption');
    });
  }
  function checkPickerChatFilters(settings) {
    if (settings.selectionType === 'chatMember') {
      var f = settings.chatFilters;
      if (f.indexOf('open') > -1) {
        throw new KakaoError('"open" is not allowed in "chatFilters"');
      }
      if ((f.indexOf('direct') > -1 || f.indexOf('multi') > -1) && f.indexOf('regular') === -1) {
        throw new KakaoError('"regular" should be included in "chatFilters"');
      }
    }
  }
  var friendFilters = ['none', 'invitable', 'registered'];
  var serviceTypeFilters = ['talk', 'story', 'talkstory'];
  var selectionTypes = ['chat', 'chatMember'];
  var _chatFilters = ['regular', 'direct', 'multi', 'open'];
  var osFilters = ['all', 'ios', 'android'];
  var friendPickerOptional = {
    returnUrl: isString,
    success: isFunction,
    fail: isFunction,
    always: isFunction,
    friendFilter: isOneOf(friendFilters),
    serviceTypeFilter: isOneOf(serviceTypeFilters),
    title: isString,
    enableSearch: isBoolean,
    countryCodeFilters: isArray$1,
    usingOsFilter: isOneOf(osFilters),
    showMyProfile: isBoolean,
    showFavorite: isBoolean,
    disableSelectOptions: disableSelectOptionsValidator,
    displayAllProfile: isBoolean,
    enableBackButton: isBoolean
  };
  var friendPickerDefault = {
    success: emptyFunc,
    fail: emptyFunc,
    always: emptyFunc
  };
  var friendsParamsRule = {
    optional: {
      friendFilter: isOneOf(friendFilters),
      serviceTypeFilter: isOneOf(serviceTypeFilters),
      countryCodeFilters: isArray$1,
      usingOsFilter: isOneOf(osFilters),
      showMyProfile: isBoolean,
      showFavorite: isBoolean,
      showPickedFriend: isBoolean
    }
  };
  var chatParamsRule = {
    optional: {
      selectionType: isOneOf(selectionTypes),
      chatFilters: function chatFilters(arr) {
        return isArray$1(arr) && every(arr, function (e) {
          return isOneOf(_chatFilters)(e);
        });
      }
    },
    defaults: {
      selectionType: selectionTypes[0],
      chatFilters: [_chatFilters[0]]
    },
    after: checkPickerChatFilters
  };
  var rules = {
    selectFriend: {
      optional: friendPickerOptional,
      defaults: friendPickerDefault
    },
    selectFriends: {
      optional: _objectSpread2(_objectSpread2({}, friendPickerOptional), {}, {
        showPickedFriend: isBoolean,
        maxPickableCount: pickableCountValidator,
        minPickableCount: pickableCountValidator
      }),
      defaults: friendPickerDefault,
      after: checkPickableCounts
    },
    selectChat: {
      optional: {
        returnUrl: isString,
        success: isFunction,
        fail: isFunction,
        always: isFunction,
        selectionType: isOneOf(selectionTypes),
        chatFilters: function chatFilters(arr) {
          return isArray$1(arr) && every(arr, function (e) {
            return isOneOf(_chatFilters)(e);
          });
        },
        title: isString,
        enableSearch: isBoolean,
        disableSelectOptions: disableSelectOptionsValidator,
        displayAllProfile: isBoolean,
        maxPickableCount: pickableCountValidator,
        minPickableCount: pickableCountValidator,
        enableBackButton: isBoolean
      },
      defaults: {
        success: emptyFunc,
        fail: emptyFunc,
        always: emptyFunc,
        selectionType: selectionTypes[0],
        chatFilters: [_chatFilters[0]]
      },
      after: function after(settings) {
        checkPickableCounts(settings);
        checkPickerChatFilters(settings);
      }
    },
    select: {
      optional: {
        returnUrl: isString,
        success: isFunction,
        fail: isFunction,
        always: isFunction,
        title: isString,
        enableSearch: isBoolean,
        disableSelectOptions: disableSelectOptionsValidator,
        displayAllProfile: isBoolean,
        maxPickableCount: pickableCountValidator,
        minPickableCount: pickableCountValidator,
        enableBackButton: isBoolean,
        friendsParams: function friendsParams(obj) {
          return isObject(obj) && !!processRules(obj, friendsParamsRule, 'Picker.select');
        },
        chatParams: function chatParams(obj) {
          return isObject(obj) && !!processRules(obj, chatParamsRule, 'Picker.select');
        }
      },
      defaults: {
        success: emptyFunc,
        fail: emptyFunc,
        always: emptyFunc
      },
      after: checkPickableCounts
    }
  };

  function selectFriends(settings) {
    settings = processRules(settings, rules.selectFriends, 'Picker.selectFriends');
    requestPicker(settings, pruneNeedlessParams(settings), '/select/multiple');
  }
  function selectFriend(settings) {
    settings = processRules(settings, rules.selectFriend, 'Picker.selectFriend');
    requestPicker(settings, pruneNeedlessParams(settings), '/select/single');
  }
  function selectChat(settings) {
    settings = processRules(settings, rules.selectChat, 'Picker.selectChat');
    requestPicker(settings, pruneNeedlessParams(settings), '/chat/select');
  }
  function select(settings) {
    settings = processRules(settings, rules.select, 'Picker.select');
    var params = _objectSpread2(_objectSpread2(_objectSpread2({}, pruneNeedlessParams(settings)), settings.friendsParams), settings.chatParams);
    requestPicker(settings, params, '/tab/select');
  }
  function requestPicker(settings, params, subpath) {
    cleanup$1();
    var transId = generateTxId();
    var pickerParams = _objectSpread2(_objectSpread2({
      transId: transId,
      appKey: getAppKey$1(),
      ka: KAKAO_AGENT
    }, getAccessToken() && {
      token: getAccessToken()
    }), formatParams(params));
    var url = URL.pickerDomain + subpath;
    if (settings.returnUrl) {
      pickerParams.returnUrl = settings.returnUrl;
      createAndSubmitForm(pickerParams, url);
    } else {
      createHiddenIframe(transId, "".concat(URL.pickerDomain, "/proxy?transId=").concat(transId), cleanups);
      addMessageEvent(settings, URL.pickerDomain, cleanups);
      openPopupAndSubmitForm(pickerParams, {
        url: url,
        popupName: 'friend_picker',
        popupFeatures: "location=no,resizable=no,status=no,scrollbars=no,width=460,height=608"
      });
    }
  }
  function pruneNeedlessParams(settings) {
    var cloned = _objectSpread2({}, settings);
    var keysNeedPrune = ['returnUrl', 'success', 'fail', 'always', 'friendsParams', 'chatParams'];
    keysNeedPrune.forEach(function (key) {
      if (cloned[key]) {
        delete cloned[key];
      }
    });
    return cloned;
  }
  function formatParams(params) {
    var keysNeedConvertToCSV = ['countryCodeFilters', 'chatFilters'];
    keysNeedConvertToCSV.forEach(function (key) {
      if (params[key] !== undefined) {
        params[key] = params[key].join(',');
      }
    });
    if (params.disableSelectOptions) {
      params.disableSelectOptions = JSON.stringify(params.disableSelectOptions);
    }
    return params;
  }
  var cleanups = [];
  function cleanup$1() {
    emptyCleanups(cleanups);
  }

  var request = /*#__PURE__*/Object.freeze({
    __proto__: null,
    selectFriends: selectFriends,
    selectFriend: selectFriend,
    selectChat: selectChat,
    select: select,
    cleanup: cleanup$1
  });

  var Picker = makeModule([request]);
  var Picker$1 = Picker;

  if (typeof define === 'function' && define.amd) {
    window.Kakao = exports;
  }
  if (typeof window.kakaoAsyncInit === 'function') {
    setTimeout(function () {
      window.kakaoAsyncInit();
    }, 0);
  }
  function init(appKey) {
    if (UA.browser.msie && UA.browser.version.major < 9) {
      throw new KakaoError('Kakao.init: Unsupported browser');
    }
    if (isInitialized()) {
      throw new KakaoError('Kakao.init: Already initialized');
    }
    if (!isString(appKey)) {
      throw new KakaoError('Kakao.init: App key must be provided');
    }
    setAppKey(appKey);
    {
      this.Auth = Auth$1;
      this.API = API$1;
      this.Link = Link$1;
      this.Channel = Channel$1;
      this.PlusFriend = PlusFriend$1;
      this.Story = Story$1;
      this.Navi = Navi$1;
      this.Picker = Picker$1;
    }
  }
  function isInitialized() {
    return getAppKey$1() !== null;
  }
  function cleanup() {
    var _this = this;
    forEach(['Auth', 'API', 'Link', 'Channel', 'PlusFriend', 'Story', 'Navi', 'Picker'], function (e) {
      return _this[e] && _this[e].cleanup();
    });
    setAppKey(null);
  }

  exports.VERSION = VERSION;
  exports.cleanup = cleanup;
  exports.init = init;
  exports.isInitialized = isInitialized;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

$(document).ready(function(){

  let images = [];

  function preload() {
    for (let i = 0; i < preload.arguments.lenght; i++) {
      images[i] = new Image();
      images[i].src = preload.arguments.src;
    }
  }

  preload(
    "https://img.uphone3.com/web/landing/b2chtml/220610_ts_op/asset/images/bg_blue_opic.png",
  )

  let swiper = new Swiper(".step-card__swiper-container", {
    spaceBetween: 30,
    slidesPerView: "auto",
    centeredSlides: true,
    observer: true,
    observeParents: true,
    allowTouchMove: true,
  });

  let swiper2 = new Swiper(".step-card__swiper-container2", {
    spaceBetween: 30,
    slidesPerView: "auto",
    centeredSlides: true,
    observer: true,
    observeParents: true,
    allowTouchMove: true,
  });
})


$(window).load(function () {

  let lottieFunc = "LottieInteractivity.create({";
  lottieFunc += "player: '#firstLottie',";
  lottieFunc += "mode: 'scroll',";
  lottieFunc += "actions: [";
  lottieFunc += "{";
  lottieFunc += "visibility: [0.3, 1],";
  lottieFunc += "type: 'play',";
  lottieFunc += "frames: [0, 300],";
  lottieFunc += "},";
  lottieFunc += "]";
  lottieFunc += "});";

  let kakaoFunc = "function sendLink() {";
  kakaoFunc += "Kakao.Link.sendCustom({";
  kakaoFunc += "templateId: 48838,";
  kakaoFunc += "templateArgs: {";
  kakaoFunc += "title:";
  kakaoFunc += "'uphone opic',";
  kakaoFunc += "description:";
  kakaoFunc += "'uphone opic',";
  kakaoFunc += "},";
  kakaoFunc += "})";
  kakaoFunc += "}";

  let kakaoKey = "Kakao.init('85aa1f00ee205c6f4aec980c60878b05');";
  kakaoKey += "Kakao.isInitialized();"

  let FuncCodeArr = [lottieFunc, kakaoFunc, kakaoKey]
  const body3 = document.getElementsByTagName("body")[0];

  for (let i = 0; i < FuncCodeArr.length; i++) {
    let script = document.createElement("script");
    script.innerText = FuncCodeArr[i];
    body3.appendChild(script);
  }
});
