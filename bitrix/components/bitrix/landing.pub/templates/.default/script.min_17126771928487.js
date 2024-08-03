this.BX=this.BX||{};this.BX.Landing=this.BX.Landing||{};(function(e,t,i){"use strict";var n=function(){function e(){babelHelpers.classCallCheck(this,e);document.addEventListener("click",this.onClick.bind(this))}babelHelpers.createClass(e,[{key:"onClick",value:function e(t){var i=t.target;var n=i.getAttribute("href")||i.getAttribute("data-pseudo-url")&&JSON.parse(i.getAttribute("data-pseudo-url")).href;if(!n){var a=i.parentNode;if(a.nodeName==="A"){n=a.getAttribute("href");i=a}else{var o=a.parentNode;if(o.nodeName==="A"){n=o.getAttribute("href");i=o}}}if(i.getAttribute("data-viewer-type")){return}if(n&&n.indexOf("/bitrix/services/main/ajax.php?action=landing.api.diskFile.download")===0){BX.ajax.get(n.replace("landing.api.diskFile.download","landing.api.diskFile.view"),(function(e){if(typeof e==="string"){e=JSON.parse(e)}if(!e.data){return}Object.keys(e.data).map((function(t){i.setAttribute(t,e.data[t])}));i.click()}));t.preventDefault();t.stopPropagation();return false}}}]);return e}();var a=function(){function e(){babelHelpers.classCallCheck(this,e);this.prepareSearchInput();this.scrollToFirstBlock()}babelHelpers.createClass(e,[{key:"prepareSearchInput",value:function e(){var t=new URLSearchParams(window.location.search);var i=t.get("q");var n=document.querySelector('[name="q"]');if(n&&i){n.value=i}}},{key:"scrollToFirstBlock",value:function e(){var t=document.querySelector(".landing-highlight");if(t){var i=t.parentNode;while(i){if(i.classList.contains("block-wrapper")){window.scrollTo({top:i.offsetTop,behavior:"smooth"});break}i=i.parentNode}}}}]);return e}();var o=function(){function e(){babelHelpers.classCallCheck(this,e);this.removeTimestamp()}babelHelpers.createClass(e,[{key:"removeTimestamp",value:function e(){var t=window.location.toString();t=t.replace(/(ts=[\d]+[&]*)/,"");if(t.slice(-1)==="?"||t.slice(-1)==="&"){t=t.slice(0,-1)}window.history.replaceState({},document.title,t)}}]);return e}();var r=Symbol("onEditButtonClick");var l=Symbol("onBackButtonClick");var u=Symbol("onForwardButtonClick");var s=Symbol("onCopyLinkButtonClick");var c=Symbol("onUniqueViewIconClick");var d=function(){function e(i){babelHelpers.classCallCheck(this,e);this.userData=i.userData;t.Event.bind(e.getEditButton(),"click",this[r]);t.Event.bind(e.getBackButton(),"click",this[l]);t.Event.bind(e.getForwardButton(),"click",this[u]);t.Event.bind(e.getCopyLinkButton(),"click",this[s]);t.Event.bind(e.getUniqueViewIcon(),"click",this[c]);e.pushHistory(window.location.toString());e.checkNavButtonsActivity();e.checkHints();e.initUniqueViewPopup(this.userData)}babelHelpers.createClass(e,[{key:r,value:function i(n){n.preventDefault();var a=t.Dom.attr(n.currentTarget,"href");var o=t.Dom.attr(n.currentTarget,"data-landingId");if(t.Type.isString(a)&&a!==""){e.openSlider(a,o)}}},{key:s,value:function e(i){i.preventDefault();var n=BX.util.remove_url_param(window.location.href,["IFRAME","IFRAME_TYPE"]);var a=i.target;if(BX.clipboard.isCopySupported()){BX.clipboard.copy(n);this.timeoutIds=this.timeoutIds||[];var o={content:t.Loc.getMessage("LANDING_TPL_PUB_COPIED_LINK"),darkMode:true,autoHide:true,zIndex:1e3,angle:true,offsetLeft:20,bindOptions:{position:"top"}};var r=new BX.PopupWindow("landing_clipboard_copy",a,o);r.show();var l;while(l=this.timeoutIds.pop()){clearTimeout(l)}l=setTimeout((function(){r.close()}),2e3);this.timeoutIds.push(l)}}},{key:c,value:function e(i){var n=document.querySelector(".landing-pub-top-panel-unique-view-popup");if(t.Dom.hasClass(n,"hide")){t.Dom.removeClass(n,"hide");setTimeout((function(){t.Dom.addClass(n,"hide")}),2e3)}else{t.Dom.addClass(n,"hide")}}},{key:l,value:function n(a){a.preventDefault();if(t.Type.isArrayFilled(e.history)&&t.Type.isNumber(e.historyState)&&e.historyState>0){void i.SliderHacks.reloadSlider(e.history[--e.historyState]);e.checkNavButtonsActivity()}}},{key:u,value:function n(a){a.preventDefault();if(t.Type.isArrayFilled(e.history)&&t.Type.isNumber(e.historyState)&&e.historyState<e.history.length-1){void i.SliderHacks.reloadSlider(e.history[++e.historyState]);e.checkNavButtonsActivity()}}}],[{key:"getLayout",value:function t(){return e.cache.remember("layout",(function(){return document.querySelector(".landing-pub-top-panel")}))}},{key:"getEditButton",value:function t(){return e.cache.remember("editButton",(function(){return e.getLayout().querySelector(".landing-pub-top-panel-edit-button")}))}},{key:"openSlider",value:function e(t,n){BX.SidePanel.Instance.open(t,{cacheable:false,customLeftBoundary:60,allowChangeHistory:false,events:{onClose:function e(){void i.SliderHacks.reloadSlider(window.location.toString().split("#")[0]+"#landingId"+n)}}})}},{key:"pushHistory",value:function i(n){if(!t.Type.isNumber(e.historyState)){e.historyState=-1}if(e.historyState<e.history.length-1){e.history.splice(e.historyState+1)}e.history.push(n);e.historyState++}},{key:"checkNavButtonsActivity",value:function i(){t.Dom.removeClass(e.getForwardButton(),"ui-btn-disabled");t.Dom.removeClass(e.getBackButton(),"ui-btn-disabled");if(!t.Type.isArrayFilled(e.history)||!t.Type.isNumber(e.historyState)||e.history.length===1){t.Dom.addClass(e.getForwardButton(),"ui-btn-disabled");t.Dom.addClass(e.getBackButton(),"ui-btn-disabled");return}if(e.historyState===0){t.Dom.addClass(e.getBackButton(),"ui-btn-disabled")}if(e.historyState>=e.history.length-1){t.Dom.addClass(e.getForwardButton(),"ui-btn-disabled")}}},{key:"getBackButton",value:function t(){return e.cache.remember("backButton",(function(){var t=e.getLayout();return t?t.querySelector(".landing-pub-top-panel-back"):null}))}},{key:"getForwardButton",value:function t(){return e.cache.remember("forwardButton",(function(){var t=e.getLayout();return t?t.querySelector(".landing-pub-top-panel-forward"):null}))}},{key:"getCopyLinkButton",value:function t(){return e.cache.remember("copyLinkButton",(function(){var t=e.getLayout();return t?t.querySelector(".landing-page-link-btn"):null}))}},{key:"getUniqueViewIcon",value:function t(){return e.cache.remember("uniqueViewIcon",(function(){var t=e.getLayout();return t?t.querySelector(".landing-pub-top-panel-unique-view"):null}))}},{key:"checkHints",value:function e(){var i=document.querySelector(".landing-pub-top-panel-chain-link-page");if(i){if(parseInt(window.getComputedStyle(i).width)<200){t.Dom.style(i,"pointer-events","none")}else{BX.UI.Hint.init(BX("landing-pub-top-panel-chain-link-page"))}}}},{key:"initUniqueViewPopup",value:function e(t){var i=t.id;var n=t.name;var a=t.avatar;if(i.length===n.length){for(var o=0;o<i.length;o++){this.createUserItem(i[o],n[o],a[o])}}}},{key:"createUserItem",value:function e(i,n,a){var o=document.querySelector(".landing-pub-top-panel-unique-view-popup-item-container");var r=window.location.origin+"/company/personal/user/"+i+"/";var l=BX.Dom.create({tag:"div",props:{classList:"landing-pub-top-panel-unique-view-popup-item"}});var u;if(a&&a!==""){u=BX.Dom.create({tag:"div",props:{classList:"landing-pub-top-panel-unique-view-popup-item-avatar"}});a="url('"+a+"')";t.Dom.style(u,"background-image",a)}else{u=BX.Dom.create({tag:"div",props:{classList:"landing-pub-top-panel-unique-view-popup-item-avatar landing-pub-top-panel-unique-view-popup-item-avatar-empty"}})}var s=BX.Dom.create({tag:"a",props:{classList:"landing-pub-top-panel-unique-view-popup-item-link"},text:n});t.Dom.attr(s,"href",r);t.Dom.attr(s,"target","_blank");t.Dom.append(u,l);t.Dom.append(s,l);t.Dom.append(l,o)}}]);return e}();babelHelpers.defineProperty(d,"cache",new t.Cache.MemoryCache);babelHelpers.defineProperty(d,"history",[]);var p=function(){function e(){babelHelpers.classCallCheck(this,e);this.init()}babelHelpers.createClass(e,[{key:"init",value:function e(){var t=document.referrer;if(t!==""){var i=false;var n=false;var a=false;var o=new URL(t);if(o){i=window.location.host===o.hostname;n=window.location.pathname!==o.pathname;a=o.searchParams.get("IFRAME")!=="Y"}if(!a||!i||!n){BX.removeClass(document.body,"landing-page-transition")}}else{BX.removeClass(document.body,"landing-page-transition")}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",(function(){setTimeout((function(){BX.removeClass(document.body,"landing-page-transition")}),300)}))}else{setTimeout((function(){BX.removeClass(document.body,"landing-page-transition")}),300)}}}]);return e}();e.DiskFile=n;e.SearchResult=a;e.TimeStamp=o;e.TopPanel=d;e.PageTransition=p})(this.BX.Landing.Pub=this.BX.Landing.Pub||{},BX,BX.Landing);
//# sourceMappingURL=script.map.js