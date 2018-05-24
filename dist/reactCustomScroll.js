!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(function(){try{return require("prop-types")}catch(e){}}(),require("react-dom"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react-dom","react"],t):"object"==typeof exports?exports.ReactCustomScroll=t(function(){try{return require("prop-types")}catch(e){}}(),require("react-dom"),require("react")):e.ReactCustomScroll=t(e["prop-types"],e["react-dom"],e.react)}(window,function(e,t,o){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(t,o){if(void 0===e){var r=new Error('Cannot find module "prop-types"');throw r.code="MODULE_NOT_FOUND",r}t.exports=e},function(e,o){e.exports=t},function(e,t){e.exports=o},function(e,t,o){"use strict";var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),n=o(2),l=s(n),i=s(o(1));function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t,o){return(t=t||0===t?t:e)>(o=o||0===o?o:e)?(console.error("min limit is greater than max limit"),e):e<t?t:e>o?o:e}function c(e,t){return e.clientX>t.left&&e.clientX<t.right&&e.clientY>t.top&&e.clientY<t.top+t.height}o(9);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleWindowResize=function(){var e=o.getScrolledElement();o.contentHeight=e.scrollHeight,o.visibleHeight=e.clientHeight},o.toggleScrollIfNeeded=function(){var e=o.getScrolledElement();o.contentHeight=e.scrollHeight,o.scrollbarYWidth=e.offsetWidth-e.clientWidth,o.visibleHeight=e.clientHeight,o.scrollRatio=o.contentHeight?o.visibleHeight/o.contentHeight:1;var t=o.contentHeight-o.visibleHeight>1;o.hasScroll!==t&&(o.hasScroll=t,o.forceUpdate())},o.onClick=function(e){if(o.hasScroll&&o.isMouseEventOnCustomScrollbar(e)&&!o.isMouseEventOnScrollHandle(e)){var t=o.calculateNewScrollHandleTop(e),r=o.getScrollValueFromHandlePosition(t);o.updateScrollPosition(r)}},o.onScroll=function(e){o.props.freezePosition||(o.adjustCustomScrollPosToContentPos(e.currentTarget.scrollTop),o.props.onScroll&&o.props.onScroll(e))},o.onMouseDown=function(e){o.hasScroll&&o.isMouseEventOnScrollHandle(e)&&(o.startDragHandlePos=o.getScrollHandleStyle().top,o.startDragMousePos=e.pageY,o.setState({onDrag:!0}),document.addEventListener("mousemove",o.onHandleDrag),document.addEventListener("mouseup",o.onHandleDragEnd))},o.onHandleDrag=function(e){e.preventDefault();var t=e.pageY-o.startDragMousePos,r=a(o.startDragHandlePos+t,0,o.visibleHeight-o.scrollHandleHeight),n=o.getScrollValueFromHandlePosition(r);o.updateScrollPosition(n)},o.onHandleDragEnd=function(e){o.setState({onDrag:!1}),e.preventDefault(),document.removeEventListener("mousemove",o.onHandleDrag),document.removeEventListener("mouseup",o.onHandleDragEnd)},o.blockOuterScroll=function(e){if(!o.props.allowOuterScroll){var t=e.currentTarget,r=e.currentTarget.scrollHeight-e.currentTarget.offsetHeight,n=e.deltaY%3?e.deltaY:10*e.deltaY;t.scrollTop+n<=0?(t.scrollTop=0,e.preventDefault()):t.scrollTop+n>=r&&(t.scrollTop=r,e.preventDefault()),e.stopPropagation()}},o.setCustomScrollbarRef=function(e){e&&!o.customScrollbarRef&&(o.customScrollbarRef=e)},o.scrollbarYWidth=0,o.state={scrollPos:0,onDrag:!1},o.setRefElement=function(e){return function(t){t&&!o[e]&&(o[e]=t)}},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r(t,[{key:"componentDidMount",value:function(){void 0!==this.props.scrollTo?this.updateScrollPosition(this.props.scrollTo):this.forceUpdate(),window.addEventListener("resize",this.toggleScrollIfNeeded)}},{key:"componentWillReceiveProps",value:function(){this.externalRender=!0}},{key:"componentDidUpdate",value:function(e,t){var o=this.contentHeight,r=this.visibleHeight,n=t.scrollPos>=o-r;this.toggleScrollIfNeeded(),(this.props.freezePosition||e.freezePosition)&&this.adjustFreezePosition(e),void 0!==this.props.scrollTo&&this.props.scrollTo!==e.scrollTo?this.updateScrollPosition(this.props.scrollTo):this.props.keepAtBottom&&this.externalRender&&n&&this.updateScrollPosition(this.contentHeight-this.visibleHeight),this.externalRender=!1}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this.onHandleDrag),document.removeEventListener("mouseup",this.onHandleDragEnd),window.removeEventListener("resize",this.toggleScrollIfNeeded)}},{key:"adjustFreezePosition",value:function(e){var t=this.getScrolledElement(),o=this.contentWrapper;this.props.freezePosition&&(o.scrollTop=this.state.scrollPos),e.freezePosition&&(t.scrollTop=this.state.scrollPos)}},{key:"getScrollTop",value:function(){return this.getScrolledElement().scrollTop}},{key:"updateScrollPosition",value:function(e){var t=this.getScrolledElement(),o=a(e,0,this.contentHeight-this.visibleHeight);t.scrollTop=o,this.setState({scrollPos:o})}},{key:"isMouseEventOnCustomScrollbar",value:function(e){if(!this.customScrollbarRef)return!1;var t=i.default.findDOMNode(this).getBoundingClientRect().toJSON(),o=this.customScrollbarRef.getBoundingClientRect(),r=this.props.rtl?{left:t.left,right:o.right}:{left:o.left,width:t.right};return c(e,Object.assign({},t,r))}},{key:"isMouseEventOnScrollHandle",value:function(e){return!!this.scrollHandle&&function(e,t){return c(e,t.getBoundingClientRect())}(e,i.default.findDOMNode(this.scrollHandle))}},{key:"calculateNewScrollHandleTop",value:function(e){var t=i.default.findDOMNode(this).getBoundingClientRect().top+window.pageYOffset,o=e.pageY-t,r=this.getScrollHandleStyle().top;return o>r+this.scrollHandleHeight?r+Math.min(this.scrollHandleHeight,this.visibleHeight-this.scrollHandleHeight):r-Math.max(this.scrollHandleHeight,0)}},{key:"getScrollValueFromHandlePosition",value:function(e){return e/this.scrollRatio}},{key:"getScrollHandleStyle",value:function(){var e=this.state.scrollPos*this.scrollRatio;return this.scrollHandleHeight=this.visibleHeight*this.scrollRatio,{height:this.scrollHandleHeight,top:e}}},{key:"adjustCustomScrollPosToContentPos",value:function(e){this.setState({scrollPos:e})}},{key:"getScrolledElement",value:function(){return this.innerContainer}},{key:"getInnerContainerClasses",value:function(){var e="inner-container";return this.state.scrollPos&&this.props.addScrolledClass&&(e+=" content-scrolled"),e}},{key:"getScrollStyles",value:function(){var e=this.scrollbarYWidth||20,t=this.props.rtl?"marginLeft":"marginRight",o={height:this.props.heightRelativeToParent||this.props.flex?"100%":""};o[t]=-1*e;var r={height:this.props.heightRelativeToParent||this.props.flex?"100%":"",overflowY:this.props.freezePosition?"hidden":"visible"};return r[t]=this.scrollbarYWidth?0:e,{innerContainer:o,contentWrapper:r}}},{key:"getOuterContainerStyle",value:function(){return{height:this.props.heightRelativeToParent||this.props.flex?"100%":""}}},{key:"getRootStyles",value:function(){var e={};return this.props.heightRelativeToParent?e.height=this.props.heightRelativeToParent:this.props.flex&&(e.flex=this.props.flex),e}},{key:"enforceMinHandleHeight",value:function(e){var t=this.props.minScrollHandleHeight;if(e.height>=t)return e;var o=(t-e.height)*(this.state.scrollPos/(this.contentHeight-this.visibleHeight));return{height:t,top:e.top-o}}},{key:"render",value:function(){var e=this.getScrollStyles(),t=this.getRootStyles(),o=this.enforceMinHandleHeight(this.getScrollHandleStyle());return l.default.createElement("div",{className:"custom-scroll "+(this.state.onDrag?"scroll-handle-dragged":""),style:t},l.default.createElement("div",{className:"outer-container",style:this.getOuterContainerStyle(),onMouseDown:this.onMouseDown,onClick:this.onClick},this.hasScroll?l.default.createElement("div",{className:"positioning"},l.default.createElement("div",{ref:this.setCustomScrollbarRef,className:"custom-scrollbar"+(this.props.rtl?" custom-scrollbar-rtl":""),key:"scrollbar"},l.default.createElement("div",{ref:this.setRefElement("scrollHandle"),className:"custom-scroll-handle",style:o},l.default.createElement("div",{className:this.props.handleClass})))):null,l.default.createElement("div",{ref:this.setRefElement("innerContainer"),className:this.getInnerContainerClasses(),style:e.innerContainer,onScroll:this.onScroll,onWheel:this.blockOuterScroll},l.default.createElement("div",{className:"content-wrapper",ref:this.setRefElement("contentWrapper"),style:e.contentWrapper},this.props.children))))}}]),t}();try{var h=o(0);u.propTypes={children:h.any,allowOuterScroll:h.bool,heightRelativeToParent:h.string,onScroll:h.func,addScrolledClass:h.bool,freezePosition:h.bool,handleClass:h.string,minScrollHandleHeight:h.number,flex:h.string,rtl:h.bool,scrollTo:h.number,keepAtBottom:h.bool}}catch(e){}u.defaultProps={handleClass:"inner-handle",minScrollHandleHeight:38},e.exports=u},function(e,t,o){e.exports=o(3)},,,,,function(e,t){}])});