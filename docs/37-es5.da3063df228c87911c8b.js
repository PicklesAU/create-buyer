function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,n,o=!0,r=!1;return{s:function(){s=e[Symbol.iterator]()},n:function(){var e=s.next();return o=e.done,e},e:function(e){r=!0,n=e},f:function(){try{o||null==s.return||s.return()}finally{if(r)throw n}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"5mZE":function(e,t,i){"use strict";i.r(t),i.d(t,"pds_tag",(function(){return r}));var s=i("W6Yi"),n=i("V4fj"),o=function e(t){_classCallCheck(this,e),Object.assign(this,t)},r=function(){function e(t){var i=this;_classCallCheck(this,e),Object(s.g)(this,t),this.inputValue="",this.suggestionArr=[],this.notfoundmessage="No matches found.",this.nooffooter=1,this.pftext="Enter it manually",this.pfallignment="left",this.sftext="Load remaining items",this.sfallignment="center",this.noofitems=4,this.placeholder="",this.type="is-static",this.listMaxWidth="100%",this._suggestionlist=[],this._suggestionlistTag=[],this._objects=[],this._stringObjects=[],this.findMatch=function(e){if(0===e.length)return[];var t=i._suggestionlist.filter((function(t){return t.value.toLowerCase().includes(e.toLowerCase())}));return i.notFound=0===t.length,t},this.onInput=function(e){"is-static"==i.type&&(""!==e.target.value&&i.suggestionlist?(i.inputValue=e.target.value,i.suggestionArr=i.findMatch(i.inputValue),i.showSuggestions=!0):i.showSuggestions=!1)},this.onKeyDown=function(e){switch(e.key){case"ArrowUp":i.suggestionArr.length>0&&(i.selectedSuggestionIndex=void 0===i.selectedSuggestionIndex||0===i.selectedSuggestionIndex?i.suggestionArr.length-1:i.selectedSuggestionIndex-1,i.inputValue=i.suggestionArr[i.selectedSuggestionIndex].value,i.ensureInView(document.querySelector('[id="'+i._id+'"] .typeahead-wrapper'),document.querySelector('[id="'+i._id+'"] [data-index="'+i.selectedSuggestionIndex+'"].typeahead-li')));break;case"ArrowDown":i.suggestionArr.length>0&&(i.selectedSuggestionIndex=void 0===i.selectedSuggestionIndex||i.selectedSuggestionIndex===i.suggestionArr.length-1?0:i.selectedSuggestionIndex+1,i.inputValue=i.suggestionArr[i.selectedSuggestionIndex].value,i.ensureInView(document.querySelector('[id="'+i._id+'"] .typeahead-wrapper'),document.querySelector('[id="'+i._id+'"] [data-index="'+i.selectedSuggestionIndex+'"].typeahead-li')));break;case"Escape":i.showSuggestions=!1,i.selectedSuggestionIndex=void 0;break;case"Tab":void 0!==i.selectedSuggestionIndex&&i.onSelect(i.suggestionArr[i.selectedSuggestionIndex].value,i.suggestionArr[i.selectedSuggestionIndex].key)}},this.onKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),void 0!==i.selectedSuggestionIndex&&i.onSelect(i.suggestionArr[i.selectedSuggestionIndex].value,i.suggestionArr[i.selectedSuggestionIndex].key))},this.onSelect=function(e,t){console.log(e),i.selectedSuggestionIndex=void 0,i.showSuggestions=!1;var s=document.querySelector('[id="'+i._id+'"]');s.querySelectorAll('[data-id="'+t+'"]')[0].classList.remove("is-hidden"),i.inputValue="",s.querySelector('input[id="'+i.uid+'"]').value="",i.listselected.emit(t),i._suggestionlist=i.removeItem(t)},this.getSuggestionElement=function(e,t,n){var o=void 0!==i.selectedSuggestionIndex&&e===i.suggestionArr[i.selectedSuggestionIndex].value;return Object(s.f)("li",{class:"typeahead-li "+(o?"typeahead-selected":""),onClick:function(){return i.onSelect(e,t)},"data-index":n},e)},this._id="auto_"+Object(n.b)(),this.pfclick=Object(s.d)(this,"tagpfclick",7),this.sfclick=Object(s.d)(this,"tagsfclick",7),this.listselected=Object(s.d)(this,"tagadded",7),this.tagremoved=Object(s.d)(this,"tagremoved",7)}return _createClass(e,[{key:"validateSuggestionlist",value:function(e){if(this.suggestionlist){if("is-dynamic"===this.type&&(this._suggestionlist=[],this._suggestionlistTag=[],this.inputValue=""),this._objects=JSON.parse(e),"string"==typeof this._objects[0]||"number"==typeof this._objects[0]){this._stringObjects=JSON.parse(e),this._stringObjects.sort();var t,i=_createForOfIteratorHelper(this._stringObjects);try{for(i.s();!(t=i.n()).done;){var s=t.value,n=new o;n.key=s,n.value=s,this._suggestionlist.push(n),this._suggestionlistTag.push(n)}}catch(y){i.e(y)}finally{i.f()}}else{var r,a=_createForOfIteratorHelper(this._objects);try{for(a.s();!(r=a.n()).done;){for(var l=r.value,d=new o,u=Object.keys(l),g=0,c=u;g<c.length;g++){var p=c[g];"isSelected"===p?d.isSelected=l[p]:p===this.keyfield?d.key=l[p]:p===this.valuefield&&(d.value=l[p])}this._suggestionlist.push(d),this._suggestionlistTag.push(d)}}catch(y){a.e(y)}finally{a.f()}var h,f=_createForOfIteratorHelper(this._suggestionlist);try{for(f.s();!(h=f.n()).done;){var b=h.value;b.isSelected&&(this._suggestionlist=this.removeItem(b.key))}}catch(y){f.e(y)}finally{f.f()}}"is-dynamic"===this.type&&(this.suggestionArr=this._suggestionlist,this.showSuggestions=!0)}else this.suggestionArr=[],this.showSuggestions=!1}},{key:"handleWindowClick",value:function(e){this.element.contains(e.target)||(this.showSuggestions=!1,this.selectedSuggestionIndex=void 0)}},{key:"componentWillLoad",value:function(){var e=this;this.suggestionlist?this.validateSuggestionlist(this.suggestionlist):this.suggestionlistapi&&fetch(this.suggestionlistapi).then((function(e){return e.json()})).then((function(t){return e.suggestionlist=JSON.stringify(t)}))}},{key:"ensureInView",value:function(e,t){var i=e.scrollTop,s=i+e.clientHeight,n=t.offsetTop,o=n+t.clientHeight;n<i?e.scrollTop-=i-n:o>s&&(e.scrollTop+=o-s)}},{key:"removeItem",value:function(e){if(0===e.length)return[];var t=this._suggestionlist.filter((function(t){return t.key.toLowerCase()!==e.toLowerCase()}));return 0===t.length?[]:t}},{key:"addItem",value:function(e,t){var i=new o;i.key=e,i.value=t,this._suggestionlist.push(i),this._suggestionlist.sort((function(e,t){return e.value>t.value?1:-1}))}},{key:"removeSelectedTag",value:function(e,t){document.querySelector('[id="'+this._id+'"]').querySelectorAll('[data-id="'+e+'"]')[0].classList.add("is-hidden"),this.tagremoved.emit(e),this.addItem(e,t)}},{key:"componentDidLoad",value:function(){var e=document.querySelector('[id="'+this.uid+'"]');if(e.setAttribute("autocomplete","off"),this.showTagIcon){var t=document.querySelector('[id="'+this._id+'"] .tag-icon');e.parentNode.appendChild(t)}var i,s=document.querySelector('[id="'+this._id+'"]'),n=_createForOfIteratorHelper(this._suggestionlistTag);try{for(n.s();!(i=n.n()).done;){var o=i.value;o.isSelected&&s.querySelectorAll('[data-id="'+o.key+'"]')[0].classList.remove("is-hidden")}}catch(r){n.e(r)}finally{n.f()}}},{key:"handlePFClick",value:function(){this.showSuggestions=!1,this.selectedSuggestionIndex=void 0,this.pfclick.emit()}},{key:"handleSFClick",value:function(){this.showSuggestions=!1,this.selectedSuggestionIndex=void 0,this.sfclick.emit()}},{key:"render",value:function(){var e=this;return Object(s.f)("div",{class:{taginput:!0,control:!0},id:this._id},Object(s.f)("div",{class:_defineProperty({"taginput-container":!0,"is-focusable":!0},this.size,!!this.size)},this._suggestionlistTag.map((function(t){var i;return Object(s.f)("span",{class:(i={tag:!0,"is-hidden":!0},_defineProperty(i,e.color,!!e.color),_defineProperty(i,e.size,!!e.size),i),"data-id":t.key},t.value,e.disabled?"":Object(s.f)("a",{role:"button",class:"delete is-small",onClick:function(){return e.removeSelectedTag(t.key,t.value)}}))})),Object(s.f)("div",{class:{"typeahead-div":!0,"is-loading":this.showSuggestions,autocomplete:!0,control:!0,"no-tag-icon":!this.showTagIcon},id:this._id},Object(s.f)("pds-input",{type:"text",uid:this.uid,name:this.name,color:this.color,size:this.size,placeholder:this.placeholder,value:this.inputValue,onInput:function(t){return e.onInput(t)},onKeyDown:function(t){return e.onKeyDown(t)},onKeyPress:function(t){return e.onKeyPress(t)},spellCheck:!1,rounded:this.rounded,disabled:this.disabled}),this.showTagIcon?Object(s.f)("span",{class:"tag-icon"},Object(s.f)("i",{class:"pds-icon pds-icon-tag"})):"",Object(s.f)("div",{class:"typeahead-list",hidden:!this.showSuggestions,style:{"max-width":this.listMaxWidth}},Object(s.f)("div",{class:"typeahead-wrapper",style:{"max-height":34*this.noofitems+"px"}},Object(s.f)("ul",{class:"typeahead-ul",role:"listbox"},this.suggestionArr.map((function(t,i){return e.getSuggestionElement(t.value,t.key,i)})))),Object(s.f)("div",{class:"typeahead-notfound",hidden:!this.notFound},this.notfoundmessage),Object(s.f)("div",{class:"typeahead-footer",hidden:!this.showSuggestions||0===this.nooffooter},2===this.nooffooter?Object(s.f)("div",{class:"secondary-footer",style:{"text-align":this.sfallignment}},Object(s.f)("a",{href:this.sflink,onClick:function(){return e.handleSFClick()}},this.sftext)):"",this.nooffooter>0?Object(s.f)("div",{class:"primary-footer",style:{"text-align":this.pfallignment}},Object(s.f)("a",{href:this.pflink,onClick:function(){return e.handlePFClick()}},this.pftext)):"")))))}},{key:"element",get:function(){return Object(s.e)(this)}}],[{key:"watchers",get:function(){return{suggestionlist:["validateSuggestionlist"]}}},{key:"style",get:function(){return'@-webkit-keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}pds-tag .taginput .taginput-container.is-focusable{padding-bottom:calc(.275em - 1px);padding-top:calc(.275em - 1px);padding-left:2px;padding-right:2px;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start;height:auto;cursor:text;max-width:100%;width:100%;background-color:#fff;border-color:#b5b5b5;border-radius:4px;color:#242424;-webkit-appearance:none;border:1px solid #b5b5b5;font-size:1rem;line-height:1.5;position:relative;vertical-align:top}pds-tag .taginput .taginput-container.is-focusable .autocomplete{width:100%}pds-tag .taginput .taginput-container.is-focusable:active,pds-tag .taginput .taginput-container.is-focusable:focus{border-color:#004c93;-webkit-box-shadow:0 0 0 .125em rgba(0,78,149,.25);box-shadow:0 0 0 .125em rgba(0,78,149,.25)}pds-tag input{-webkit-box-shadow:none!important;box-shadow:none!important;border:none!important;padding-left:35px!important}pds-tag .no-tag-icon input{padding-left:5px!important}pds-tag .tag-icon{color:#b5b5b5;height:1.7em;pointer-events:none;position:absolute;top:3px;width:2.25em;left:0;z-index:4;-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center}pds-tag .input:active+.tag-icon,pds-tag .input:focus+.tag-icon{color:#7a7a7a}pds-tag i.pds-icon.pds-icon-tag{font-size:1.75rem}pds-tag .tag{font-size:1rem!important;margin-right:5px;margin-top:2px;margin-bottom:2px}pds-tag .tag.is-small{font-size:.75rem!important}pds-tag .tag.is-medium{font-size:1.25rem!important}pds-tag .tag.is-large{font-size:1.5rem!important}pds-tag .is-hidden.is-hidden{display:none}pds-tag .typeahead-div{position:relative}pds-tag .typeahead-input{width:100%}pds-tag .typeahead-list{list-style:none;border:1px solid #b5b5b5;background-color:#fff;position:absolute;width:100%;margin:0;padding:0;border-radius:4px;z-index:99}pds-tag .typeahead-wrapper{max-height:135px;overflow-y:auto;border-bottom:none;width:100%}pds-tag .typeahead-wrapper::-webkit-scrollbar{width:6px;background-color:transparent}pds-tag .typeahead-wrapper::-webkit-scrollbar-thumb{background-color:#b5b5b5;border-radius:10px}pds-tag .typeahead-notfound{list-style:none;color:#121212;font-size:.875rem;line-height:1.5;padding:.375rem 1rem}pds-tag .typeahead-footer{border-top:1px solid #b5b5b5;width:100%;-webkit-box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);list-style:none;color:#121212;position:relative}pds-tag .primary-footer,pds-tag .secondary-footer{font-size:.875rem;line-height:1.5;padding:.375rem 1rem}pds-tag .primary-footer{border-top:1px solid #b5b5b5}pds-tag .typeahead-li{color:#242424;display:block;font-size:.875rem;line-height:1.5;padding:.375rem 1rem;position:relative;text-align:left;width:100%}pds-tag .typeahead-li:not(:first-child){border-top:1px solid #dbdbdb}pds-tag .typeahead-li:hover{cursor:pointer}pds-tag .typeahead-li:hover,pds-tag .typeahead-selected{background-color:#f5f5f5;color:#0a0a0a}pds-tag .typeahead-div.is-loading:after{position:absolute!important;right:.625em;top:.625em;z-index:4;-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:"";display:block;height:1em;width:1em}pds-tag .typeahead-div.is-loading input[type=text]{padding-right:30px}'}}]),e}()}}]);