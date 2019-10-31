(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1e3:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var n=r(51),o={bottom:16,left:16,right:16,top:16};function a(e){return void 0===e&&(e=o),Object(n.a)((function(e){return e.bottom}),(function(e){return e.left}),(function(e){return e.right}),(function(e){return e.top}),(function(t,r,n,o){return void 0===t&&(t=e.bottom),void 0===r&&(r=e.left),void 0===n&&(n=e.right),void 0===o&&(o=e.top),{bottom:t,left:r,right:n,top:o}}))}},1001:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(51);function o(e){return Object(n.a)((function(e){return e.encoding}),(function(e){return e.options}),(function(t,r){return new e({encoding:t,options:r})}))}},1002:function(e,t,r){"use strict";function n(e){return void 0!==e&&0<e.length&&("string"==typeof e[0]||"number"==typeof e[0])}function o(e){var t,r=e.type,o=e.domain,a=e.range,i=e.nice,l=e.paddingInner,c=e.paddingOuter;if("linear"===r||"time"===r||"band"===r)t=r;else{if("utc"!==r)throw new Error("Unsupported scale type: "+r);t="timeUtc"}var u={type:t};return n(o)&&(u.domain=o),n(a)&&(u.range=a),void 0!==i&&(u.nice=i),void 0!==l&&(u.paddingInner=l),void 0!==c&&(u.paddingOuter=c),u}r.d(t,"a",(function(){return o}))},1003:function(e,t,r){"use strict";var n=r(1),o=r.n(n),a=r(1214),i=r(1215),l=8,c={display:"inline-block"};function u(e){var t=e.item,r=e.MarkRenderer,n=e.LabelRenderer;return o.a.createElement(a.a,{key:"legend-item-"+t.field+"-"+t.value,margin:"0 5px"},void 0===r?o.a.createElement("svg",{width:l,height:l,style:c},o.a.createElement("circle",{fill:t.encodedValues.color||t.encodedValues.stroke||t.encodedValues.fill||"#ccc",stroke:t.encodedValues.stroke||"none",r:l/2,cx:l/2,cy:l/2})):o.a.createElement(r,{item:t}),void 0===n?o.a.createElement(i.a,{align:"left",margin:"0 0 0 4px"},t.value):o.a.createElement(n,{item:t}))}function s(){return(s=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}var d={display:"flex",flexBasis:"auto",flexDirection:"row",flexGrow:1,flexShrink:1,flexWrap:"wrap",fontSize:"0.8em",justifyContent:"flex-end",padding:8};function f(e){var t=e.items,r=e.ItemRenderer,n=void 0===r?u:r,a=e.ItemMarkRenderer,i=e.ItemLabelRenderer,l=e.style,c=void 0===l?d:s({},d,{},l);return o.a.createElement("div",{style:c},t.map((function(e){return o.a.createElement(n,{key:"legend-item-"+e.field+"-"+e.value,item:e,MarkRenderer:a,LabelRenderer:i})})))}function p(){return(p=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}var h={display:"flex",flexBasis:"auto",flexGrow:1,flexShrink:1,maxHeight:100,overflowY:"auto",position:"relative"},y=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){var e=this.props,t=e.groups,r=e.LegendGroupRenderer,n=void 0===r?f:r,a=e.LegendItemRenderer,i=e.LegendItemMarkRenderer,l=e.LegendItemLabelRenderer,c=e.style,u=void 0===c?h:p({},h,{},c);return o.a.createElement("div",{style:u},t.map((function(e){return o.a.createElement(n,{key:e[0].field,items:e,ItemRenderer:a,ItemMarkRenderer:i,ItemLabelRenderer:l})})))},t}(n.PureComponent);function m(e,t,r){if(e.hasLegend()){var n=r.LegendRenderer,a=void 0===n?y:n,i=r.LegendGroupRenderer,l=r.LegendItemRenderer,c=r.LegendItemLabelRenderer,u=r.LegendItemMarkRenderer;return function(){return o.a.createElement(a,{groups:e.getLegendInfos(t),LegendGroupRenderer:i,LegendItemRenderer:l,LegendItemMarkRenderer:u,LegendItemLabelRenderer:c})}}}r.d(t,"a",(function(){return m}))},1004:function(e,t,r){"use strict";var n=r(1),o=r.n(n),a=r(1840),i=r(1841),l=r(1838),c=r(1839);function u(){return(u=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],0<=t.indexOf(r)||(o[r]=e[r]);return o}function d(e){var t=e.axisWidth,r=e.labelAngle,n=e.labelFlush,a=e.labelOverlap,i=e.orient,l=e.tickLabels,c=e.tickLabelDimensions,d=e.tickTextAnchor,f=void 0===d?"middle":d;if("rotate"===a&&0!==r){var p=0<r?-6:6;"top"===i&&(p=0);var h="top"===i?-3:0;return function(e){var t=e.x,n=e.y,a=(e.dy,e.formattedValue),i=void 0===a?"":a,l=s(e,["x","y","dy","formattedValue"]);return o.a.createElement("g",{transform:"translate("+(t+p)+", "+(n+h)+")"},o.a.createElement("text",u({transform:"rotate("+r+")"},l,{textAnchor:f}),i))}}if(!0===n||"number"==typeof n){var y=new Map;return l.forEach((function(e,t){y.set(e,c[t])})),function(e){var r=e.x,a=e.y,i=(e.dy,e.formattedValue),l=void 0===i?"":i,c=s(e,["x","y","dy","formattedValue"]),d=y.get(l),p=void 0===d?0:d.width,h=f,m=0;return 0>r-p/2?(h="start","number"==typeof n&&(m-=n)):r+p/2>t&&(h="end","number"==typeof n&&(m+=n)),o.a.createElement("text",u({x:r+m,y:a},c,{textAnchor:h}),l)}}return null}var f=r(276);function p(){return(p=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=8,m=function(){function e(e){h(this,"chartWidth",void 0),h(this,"chartHeight",void 0),h(this,"containerWidth",void 0),h(this,"containerHeight",void 0),h(this,"margin",void 0),h(this,"xEncoder",void 0),h(this,"xLayout",void 0),h(this,"yEncoder",void 0),h(this,"yLayout",void 0);var t=e.width,r=e.height,n=e.minContentWidth,o=void 0===n?0:n,a=e.minContentHeight,i=void 0===a?0:a,c=e.margin,u=e.xEncoder,s=e.xTickSize,d=e.xTickTextStyle,f=e.autoAdjustXMargin,p=e.yEncoder,m=e.yTickSize,v=e.yTickTextStyle,g=e.autoAdjustYMargin;this.xEncoder=u,this.yEncoder=p,void 0!==p.axis&&(this.yLayout=p.axis.computeLayout({axisWidth:Math.max(r-c.top-c.bottom),tickSize:p.axis.config.tickSize||m,tickTextStyle:v}));var b=this.yLayout&&(void 0===g||g)?Object(l.a)(c,this.yLayout.minMargin):c,k=Math.max(t-b.left-b.right,o);void 0!==u.axis&&(this.xLayout=u.axis.computeLayout({axisWidth:k,labelAngle:this.recommendXLabelAngle(u.axis.config.orient),tickSize:u.axis.config.tickSize||s,tickTextStyle:d}));var x=this.xLayout&&(void 0===f||f)?Object(l.a)(b,this.xLayout.minMargin):b,O=Math.max(r-x.top-x.bottom,i),T=Math.round(k+x.left+x.right),E=Math.round(O+x.top+x.bottom),j=T>t,L=E>r;j&&(x.bottom+=y),L&&(x.right+=y),this.chartWidth=j?T+y:T,this.chartHeight=L?E+y:E,this.containerWidth=t,this.containerHeight=r,this.margin=x}var t=e.prototype;return t.recommendXLabelAngle=function(e){void 0===e&&(e="bottom");var t=this.yEncoder.axis;return!this.yLayout||void 0!==t&&("right"===t.config.orient&&"bottom"===e||"left"===t.config.orient&&"top"===e)?f.a:-f.a},t.renderChartWithFrame=function(e){return o.a.createElement(c.a,{width:this.containerWidth,height:this.containerHeight,contentWidth:this.chartWidth,contentHeight:this.chartHeight,renderContent:e})},t.renderXAxis=function(e){var t=this.xEncoder.axis;return t&&this.xLayout?o.a.createElement(a.a,p({label:t.getTitle(),labelOffset:this.xLayout.labelOffset,numTicks:t.config.tickCount,orientation:t.config.orient,tickComponent:d(this.xLayout),tickFormat:t.getFormat()},e)):null},t.renderYAxis=function(e){var t=this.yEncoder.axis;return t&&this.yLayout?o.a.createElement(i.a,p({label:t.getTitle(),labelOffset:this.yLayout.labelOffset,numTicks:t.config.tickCount,orientation:t.config.orient,tickFormat:t.getFormat()},e)):null},e}();function v(e){var t=e.width,r=e.height,n=e.minContentWidth,o=e.minContentHeight,a=e.margin,i=e.xEncoder,l=e.yEncoder,c=e.theme;return new m({height:r,margin:a,minContentHeight:o,minContentWidth:n,width:t,xEncoder:i,xTickSize:c.xTickStyles.length||c.xTickStyles.tickLength,xTickTextStyle:c.xTickStyles.label.bottom||c.xTickStyles.label.top,yEncoder:l,yTickSize:c.yTickStyles.length||c.yTickStyles.tickLength,yTickTextStyle:c.yTickStyles.label.left||c.yTickStyles.label.right})}r.d(t,"a",(function(){return v}))},1076:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(1),o=r.n(n),a=r(41),i=r(2),l=r.n(i);r(5);function c(e){var t=e.top,r=void 0===t?0:t,n=e.left,i=void 0===n?0:n,c=e.className,u=e.children;return o.a.createElement(a.a,{className:l()("vx-glyph",c),top:r,left:i},u)}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r};function d(e){var t=e.top,r=void 0===t?0:t,n=e.left,a=void 0===n?0:n,i=e.className,d=e.children,f=e.cx,p=e.cy,h=e.r,y=e.fill,m=e.stroke,v=e.strokeWidth,g=e.strokeDasharray,b=s(e,["top","left","className","children","cx","cy","r","fill","stroke","strokeWidth","strokeDasharray"]);return o.a.createElement(c,{top:r,left:a},o.a.createElement("circle",u({className:l()("vx-glyph-dot",i),cx:f,cy:p,r:h,fill:y,stroke:m,strokeWidth:v,strokeDasharray:g},b)),d)}},1077:function(e,t,r){"use strict";t.__esModule=!0,t.default=t.propTypes=t.withTooltipPropTypes=t.Tooltip=void 0;var n=u(r(1)),o=u(r(0)),a=u(r(194)),i=u(r(383)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(270)),c=u(r(213));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(){return(d=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}t.Tooltip=c.default;var f={onMouseMove:o.default.func,onMouseLeave:o.default.func,tooltipData:o.default.any};t.withTooltipPropTypes=f;var p=d({},l.withTooltipPropTypes,{children:o.default.oneOfType([o.default.object,o.default.func]).isRequired,className:o.default.string,HoverStyles:o.default.oneOfType([o.default.object,o.default.func]),renderTooltip:o.default.func,styles:o.default.objectOf(o.default.oneOfType([o.default.string,o.default.number])),TooltipComponent:o.default.oneOfType([o.default.object,o.default.func]),tooltipProps:o.default.object,tooltipTimeout:o.default.number});t.propTypes=p;var h={className:null,HoverStyles:function(){return n.default.createElement("style",{type:"text/css"},"\n      .vx-arc:hover,\n      .vx-bar:hover,\n      .vx-glyph-dot:hover {\n        opacity: 0.7;\n      }\n    ")},renderTooltip:null,styles:{display:"inline-block",position:"relative"},TooltipComponent:l.default,tooltipProps:null,tooltipTimeout:200},y=function(e){function t(t){var r;return(r=e.call(this,t)||this).handleMouseMove=r.handleMouseMove.bind(s(s(r))),r.handleMouseLeave=r.handleMouseLeave.bind(s(s(r))),r.tooltipTimeout=null,r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var r=t.prototype;return r.componentWillUnmount=function(){this.tooltipTimeout&&clearTimeout(this.tooltipTimeout)},r.handleMouseMove=function(e){var t=e.event,r=e.datum,n=e.coords,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],0<=t.indexOf(r)||(o[r]=e[r]);return o}(e,["event","datum","coords"]),i=this.props.showTooltip;this.tooltipTimeout&&clearTimeout(this.tooltipTimeout);var l={x:0,y:0};t&&t.target&&"focus"!==t.type&&t.target.ownerSVGElement&&(l=(0,a.default)(t.target.ownerSVGElement,t)),i({tooltipLeft:(l=d({},l,n)).x,tooltipTop:l.y,tooltipData:d({event:t,datum:r},o)})},r.handleMouseLeave=function(){var e=this.props,t=e.tooltipTimeout,r=e.hideTooltip;this.tooltipTimeout=setTimeout((function(){r()}),t)},r.render=function(){var e=this.props,t=e.children,r=e.className,o=e.HoverStyles,a=e.tooltipData,i=e.tooltipOpen,l=e.tooltipLeft,c=e.tooltipTop,u=e.tooltipProps,s=e.renderTooltip,f=e.styles,p=e.TooltipComponent,h={onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,tooltipData:a},y=s&&i&&p&&s(a);return n.default.createElement("div",{style:f,className:r},"function"==typeof t?t(h):n.default.cloneElement(n.default.Children.only(t),h),!!y&&n.default.createElement(p,d({key:Math.random(),top:c,left:l},u),y),o&&n.default.createElement(o,null))},t}(n.default.PureComponent);y.propTypes=p,y.defaultProps=h;var m=(0,i.default)(y);t.default=m},1849:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(1),i=r.n(a),l=r(55),c=r(883),u=r(884),s=r(193),d=r(873),f=r(1076),p=r(97),h=r(10),y=r(141),m=r(84),v=r(54);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var b=g({},r(151).a,{data:v.e.isRequired,interpolation:v.d,showPoints:o.a.bool,stroke:o.a.oneOfType([o.a.func,o.a.string]),strokeDasharray:o.a.oneOfType([o.a.func,o.a.string]),strokeWidth:o.a.oneOfType([o.a.func,o.a.number]),strokeOpacity:o.a.oneOfType([o.a.func,o.a.number]),strokeLinecap:o.a.oneOf(["butt","square","round","inherit"])}),k={interpolation:"monotoneX",showPoints:!1,stroke:s.a.default,strokeDasharray:null,strokeWidth:3,strokeOpacity:1,strokeLinecap:"round"},x=function(e){return e.x},O=function(e){return e.y},T=function(e){return Object(h.j)(O(e))},E={pointerEvents:"none"},j=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.data,r=e.disableMouseEvents,n=e.interpolation,o=e.showPoints,a=e.stroke,l=e.strokeDasharray,c=e.strokeWidth,u=e.strokeLinecap,s=e.strokeOpacity,v=e.xScale,g=e.yScale,b=e.margin,k=e.onClick,j=e.onMouseMove,L=e.onMouseLeave;if(!v||!g)return null;var w=Object(h.b)(a),M=Object(h.b)(s),S=m.a[n]||m.a.monotoneX;return i.a.createElement(p.c,{style:r?E:null,data:t,xScale:v,yScale:g,x:x,y:O,stroke:w,strokeWidth:Object(h.b)(c),strokeDasharray:Object(h.b)(l),strokeLinecap:u,strokeOpacity:M,curve:S,defined:T,onClick:r?null:k&&function(){return function(e){var r=Object(y.a)({data:t,getX:x,event:e,xScale:v,marginLeft:b.left});k({event:e,data:t,datum:r,color:w})}},onMouseMove:r?null:j&&function(){return function(e){var r=Object(y.a)({data:t,getX:x,event:e,xScale:v,marginLeft:b.left});j({event:e,data:t,datum:r,color:w})}},onMouseLeave:r?null:L&&function(){return L},glyph:function(e,n){return Object(h.j)(x(e))&&Object(h.j)(O(e))&&i.a.createElement(d.a,{key:"linepoint-"+n,onBlur:r?null:L,onFocus:r?null:function(r){j({event:r,data:t,datum:e,color:e.stroke||Object(h.b)(a,e,n),index:n})}},o&&i.a.createElement(f.a,{key:n+"-"+x(e),cx:v(x(e)),cy:g(O(e)),r:4,fill:e.stroke||Object(h.b)(a,e,n),stroke:"#FFFFFF",strokeWidth:1,style:{pointerEvents:"none"}},e.label&&i.a.createElement("text",{x:v(x(e)),y:g(O(e)),dx:10,fill:e.stroke||Object(h.b)(a,e,n),stroke:"#fff",strokeWidth:1,fontSize:12},e.label)))}})},n}(i.a.PureComponent);j.propTypes=b,j.defaultProps=k,j.displayName="LineSeries";var L=r(1077),w=r.n(L).a,M=r(892),S=r(885),W=r(1857),C=r(1842),R=r(51),D=r(387),P=r(1836),_=r(1837),F={marginRight:4};var I=r(1e3),H=r(1002),A=r(1004),N=r(1001),z=r(1003);function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"default",(function(){return B}));var G={className:"",margin:I.a,theme:W.a,TooltipRenderer:function(e){var t=e.allSeries,r=e.datum,n=e.encoder,o=e.series,a=void 0===o?{}:o,l=e.theme,c=void 0===l?W.a:l;return i.a.createElement(P.a,null,i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{fontFamily:c.labelStyles.fontFamily}},i.a.createElement("strong",null,n.channels.x.formatValue(r.x))),i.a.createElement("br",null),a&&i.a.createElement(_.a,{data:t.filter((function(e){var t=e.key;return a[t]})).concat().sort((function(e,t){return a[t.key].y-a[e.key].y})).map((function(e){var t=e.key,o=e.stroke,l=e.strokeDasharray,c=e.strokeWidth;return{key:t,keyColumn:i.a.createElement(i.a.Fragment,null,i.a.createElement("svg",{width:"12",height:"8",style:F},i.a.createElement("line",{x2:"12",y1:"3",y2:"3",stroke:o,strokeWidth:c,strokeDasharray:l})),a[t]===r?i.a.createElement("b",null,t):t),valueColumn:n.channels.y.formatValue(a[t].y)}}))})))}},q={strokeWidth:1.5},B=function(e){function t(t){var r;return X(V(r=e.call(this,t)||this),"createEncoder",Object(N.a)(D.a)),X(V(r),"createAllSeries",Object(R.a)((function(e){return e.encoder}),(function(e){return e.data}),(function(e,t){var r=e.channels,n=e.getGroupBys(),o=Object(l.groupBy)(t,(function(e){return n.map((function(t){return t+"="+e[t]})).join(",")}));return Object(l.values)(o).map((function(e){var t=e[0],o=n.map((function(e){return t[e]})).join(","),a={key:0===o.length?r.y.getTitle():o,fill:r.fill.encode(t,!1),stroke:r.stroke.encode(t,"#222"),strokeDasharray:r.strokeDasharray.encode(t,""),strokeWidth:r.strokeWidth.encode(t,1),values:[]};return a.values=e.map((function(e){return{x:r.x.get(e),y:r.y.get(e),data:e,parent:a}})).sort((function(e,t){return(e.x instanceof Date?e.x.getTime():e.x)-(t.x instanceof Date?t.x.getTime():t.x)})),a}))}))),X(V(r),"createMargin",Object(I.b)()),r.renderChart=r.renderChart.bind(V(r)),r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var r=t.prototype;return r.renderSeries=function(e){var t=Object(l.flatMap)(e.filter((function(e){return e.fill})).map((function(e){var t=Object(l.uniqueId)(Object(l.kebabCase)("gradient-"+e.key));return[i.a.createElement(c.a,{key:e.key+"-gradient",id:t,from:e.stroke,to:"#fff"}),i.a.createElement(u.a,{key:e.key+"-fill",seriesKey:e.key,data:e.values,interpolation:"linear",fill:"url(#"+t+")",stroke:e.stroke,strokeWidth:e.strokeWidth})]}))),r=e.filter((function(e){return!e.fill})).map((function(e){return i.a.createElement(j,{key:e.key,seriesKey:e.key,interpolation:"linear",data:e.values,stroke:e.stroke,strokeDasharray:e.strokeDasharray,strokeWidth:e.strokeWidth})}));return t.concat(r)},r.renderChart=function(e){var t=this,r=e.width,n=e.height,o=this.props,a=o.data,l=o.margin,c=o.theme,u=o.TooltipRenderer,s=this.createEncoder(this.props),d=s.channels;if(void 0!==d.x.scale){var f=d.x.getDomain(a);d.x.scale.setDomain(f)}if(void 0!==d.y.scale){var p=d.y.getDomain(a);d.y.scale.setDomain(p)}var h=this.createAllSeries({encoder:s,data:a}),y=Object(A.a)({width:r,height:n,margin:this.createMargin(l),theme:c,xEncoder:d.x,yEncoder:d.y});return y.renderChartWithFrame((function(e){return i.a.createElement(w,{renderTooltip:function(e){var t=e.datum,r=e.series;return i.a.createElement(u,{encoder:s,allSeries:h,datum:t,series:r,theme:c})}},(function(r){var n=r.onMouseLeave,o=r.onMouseMove,a=r.tooltipData;return i.a.createElement(M.a,{width:e.width,height:e.height,ariaLabel:"LineChart",eventTrigger:"container",margin:y.margin,onMouseMove:o,onMouseLeave:n,renderTooltip:null,showYGrid:!0,snapTooltipToDataX:!0,theme:c,tooltipData:a,xScale:Object(H.a)(d.x.scale.config),yScale:Object(H.a)(d.y.scale.config)},y.renderXAxis(),y.renderYAxis(),t.renderSeries(h),i.a.createElement(S.a,{fullHeight:!0,strokeDasharray:"",showHorizontalLine:!1,circleFill:function(e){return e.y===a.datum.y?e.parent.stroke:"#fff"},circleSize:function(e){return e.y===a.datum.y?6:4},circleStroke:function(e){return e.y===a.datum.y?"#fff":e.parent.stroke},circleStyles:q,stroke:"#ccc",showCircle:!0,showMultipleCircles:!0}))}))}))},r.render=function(){var e=this.props,t=e.className,r=e.data,n=e.width,o=e.height,a=this.createEncoder(this.props);return i.a.createElement(C.a,{className:"superset-chart-line "+t,width:n,height:o,position:"top",renderLegend:Object(z.a)(a,r,this.props),renderChart:this.renderChart})},t}(a.PureComponent);X(B,"propTypes",{className:o.a.string,width:o.a.oneOfType([o.a.string,o.a.number]).isRequired,height:o.a.oneOfType([o.a.string,o.a.number]).isRequired,data:o.a.any.isRequired,TooltipRenderer:o.a.func,margin:o.a.any}),X(B,"defaultProps",G)}}]);