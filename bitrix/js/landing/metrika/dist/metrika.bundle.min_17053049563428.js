this.BX=this.BX||{};(function(e,t){"use strict";var i=function(){function e(t){babelHelpers.classCallCheck(this,e);this.sendedLabel=[];if(t===true){return}this.formSelector=".bitrix24forms";this.widgetBlockItemSelector=".landing-b24-widget-button-social-item";this.formBlocks=babelHelpers.toConsumableArray(document.querySelectorAll(this.formSelector));this.siteType=this.getSiteType();this.formsLoaded=[];this.widgetOpened=false;this.widgetBlockHover=false;this.waitForWidget();this.detectAnchor()}babelHelpers.createClass(e,[{key:"getSiteType",value:function e(){var t=document.querySelector('meta[property="Bitrix24SiteType"]');if(t){return t.getAttribute("content")}return null}},{key:"isFormsExists",value:function e(){return this.formBlocks.length>0}},{key:"detectAnchor",value:function e(){var i=this;babelHelpers.toConsumableArray(document.querySelectorAll("a")).map((function(e){var a=t.Dom.attr(e,"href");if(a){a=a.toString()}if(a&&a.indexOf(":")){var n=a.split(":")[0];if(["callto","tel","mailto"].includes(n)){t.Event.bind(e,"click",(function(){i.sendLabel("","addressClick",n)}))}}}))}},{key:"waitForWidget",value:function e(){var i=this;babelHelpers.toConsumableArray(document.querySelectorAll(this.widgetBlockItemSelector)).map((function(e){t.Event.bind(e,"mouseover",(function(){i.widgetBlockHover=true}));t.Event.bind(e,"mouseout",(function(){i.widgetBlockHover=false}));t.Event.bind(e,"click",(function(){babelHelpers.toConsumableArray(e.classList).map((function(e){if(e.indexOf("ui-icon-service-")===0){var t=e.substr("ui-icon-service-".length);i.sendLabel("","olOpenedFromWidget",t)}}))}))}));window.addEventListener("onBitrixLiveChat",(function(e){var t=e.detail,a=t.widget,n=t.widgetHost;a.subscribe({type:BX.LiveChatWidget.SubscriptionType.every,callback:function e(t){if(t.type===BX.LiveChatWidget.SubscriptionType.widgetOpen){if(i.widgetBlockHover){i.sendLabel(n,"chatOpenedFromWidget")}else{i.sendLabel(n,"chatOpened")}}}})}))}},{key:"waitForForms",value:function e(){var i=this;window.addEventListener("b24:form:show:first",(function(e){var t=e.detail.object.identification,a=t.id,n=t.sec,s=t.address;var r=e.detail.object.disabled;i.formsLoaded.push(a+"|"+n);if(r){i.sendLabel(s,"formDisabledLoad",a+"|"+n)}else{i.sendLabel(s,"formSuccessLoad",a+"|"+n)}}));setTimeout((function(){i.formBlocks.map((function(e){var a=t.Dom.attr(e,"data-b24form");if(a&&a.indexOf("|")){var n=a.split("|");if(!i.formsLoaded.includes(n[0]+"|"+n[1])){i.sendLabel(null,"formFailLoad",n[1]?n[0]+"|"+n[1]:n[0])}}}))}),5e3)}},{key:"clearSendedLabel",value:function e(){this.sendedLabel=[]}},{key:"sendLabel",value:function e(t,i,a){if(this.sendedLabel.includes(i+a)){return}if(a&&a.substr(0,1)==="#"){a=a.substr(1)}this.sendedLabel.push(i+a);BX.ajax({url:(t?t:"")+"/bitrix/images/landing/analytics/pixel.gif?action="+i+(a?"&value="+a:"")+(this.siteType?"&siteType="+this.siteType:"")+"&time="+(new Date).getTime()})}},{key:"sendData",value:function i(a){t.Runtime.loadExtension("ui.analytics").then((function(i){a.tool=e.TOOL_NAME;if(a.params&&t.Type.isObject(a.params)){var n=1;var s=5;for(var r in a.params){if(n<=s){var o="p"+n++;t.Text.toCamelCase(r);a[o]=t.Text.toCamelCase(r)+"_"+t.Text.toCamelCase(a.params[r])}}delete a.params}var l=i.sendData;l(a)}))}}]);return e}();babelHelpers.defineProperty(i,"TOOL_NAME","landing");e.Metrika=i})(this.BX.Landing=this.BX.Landing||{},BX);
//# sourceMappingURL=metrika.bundle.map.js