(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"+25t":function(s,i,a){"use strict";a.r(i),a.d(i,"pds_off_canvas",(function(){return e}));var t=a("W6Yi");const e=class{constructor(s){Object(t.g)(this,s),this.handleCloseOffCanvasClick=()=>{this.visible=!1,this.dismissed=!0,this.closeOffCanvas.emit(),event.stopPropagation()},this.visible=!1,this.loaded=!1,this.dismissed=!1,this.closeOffCanvas=Object(t.d)(this,"closeOffCanvas",7)}handleKeyDown(s){"Escape"===s.key&&(this.closeOffCanvas.emit(),this.visible=!1,this.dismissed=!0,event.stopPropagation())}watchHandler(){this.loaded=!0}render(){const s=`${this.position}`;return Object(t.f)("div",{class:{"off-canvas":!0,"is-visible":!!this.visible,"is-loaded":!!this.loaded}},Object(t.f)("div",{class:{"off-canvas-panel":!0,animated:!0,[s]:!!this.position,fadeInLeft:!("is-left"!=this.position)&&this.visible,fadeOutLeft:!("is-left"!=this.position)&&this.dismissed,fadeInRight:!("is-right"!=this.position)&&this.visible,fadeOutRight:!("is-right"!=this.position)&&this.dismissed,"is-visible":!!this.visible,"is-dismissed":!!this.dismissed}},Object(t.f)("div",{class:"off-canvas-panel-header"},Object(t.f)("a",{onClick:this.handleCloseOffCanvasClick},Object(t.f)("div",{class:"icon"},"is-right"==this.position?Object(t.f)("i",{class:"pds-icon pds-icon-arrow--right"}):Object(t.f)("i",{class:"pds-icon pds-icon-arrow--left"})))),Object(t.f)("slot",null),Object(t.f)("slot",{name:"main-menu"}),Object(t.f)("slot",{name:"notifications"}),Object(t.f)("slot",{name:"user-menu"})),Object(t.f)("div",{onClick:this.handleCloseOffCanvasClick,class:{"off-canvas-background":!0,animated:!0,fadeIn:!!this.visible,fadeOut:!!this.dismissed,"is-visible":!!this.visible,"is-dismissed":!!this.dismissed}}))}static get watchers(){return{visible:["watchHandler"]}}static get style(){return"@-webkit-keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}pds-off-canvas .off-canvas{pointer-events:none;position:fixed;top:0;left:0;bottom:0;right:0;z-index:32;display:none}pds-off-canvas .off-canvas.is-visible{display:block}pds-off-canvas .off-canvas.is-loaded{display:block!important}pds-off-canvas .off-canvas-panel{pointer-events:all;-webkit-animation-duration:.3s;animation-duration:.3s;padding:20px;background-color:#fff;position:fixed;top:0;left:0;bottom:0;width:300px;overflow-y:auto;z-index:31;display:none}@media (max-width:768px){pds-off-canvas .off-canvas-panel{min-width:100%;padding-top:80px}}pds-off-canvas .off-canvas-panel.is-dismissed,pds-off-canvas .off-canvas-panel.is-visible{display:block}pds-off-canvas .off-canvas-panel.is-right{right:0;left:auto}pds-off-canvas .off-canvas-panel.is-right .off-canvas-panel-header{-ms-flex-pack:end;justify-content:flex-end}pds-off-canvas .off-canvas-panel.is-left{left:0;right:auto}pds-off-canvas .off-canvas-panel-header,pds-off-canvas .off-canvas-panel.is-left .off-canvas-panel-header{-ms-flex-pack:start;justify-content:flex-start}pds-off-canvas .off-canvas-panel-header{display:-ms-flexbox;display:flex;position:fixed;top:0;left:0;right:0;-ms-flex-align:center;align-items:center;padding:15px 15px 10px;border-bottom:1px solid #ececec;margin-bottom:20px}@media (min-width:769px){pds-off-canvas .off-canvas-panel-header{display:none}}pds-off-canvas .off-canvas-background{pointer-events:none;display:none;background-color:rgba(0,0,0,.7);-webkit-animation-duration:.3s;animation-duration:.3s;position:fixed;top:0;left:0;bottom:0;right:0}pds-off-canvas .off-canvas-background.is-visible{pointer-events:all;display:block}pds-off-canvas .off-canvas-background.is-dismissed{display:block}"}}}}]);