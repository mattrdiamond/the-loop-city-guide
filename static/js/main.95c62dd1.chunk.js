(this["webpackJsonpneighborhood-map"]=this["webpackJsonpneighborhood-map"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('[{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"saturation":"0"},{"gamma":"1"},{"lightness":"0"},{"color":"#f0f0f6"}]},{"featureType":"poi.attraction","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#c8eaa8"},{"gamma":"1.00"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"color":"#c8eaa8"}]},{"featureType":"poi.sports_complex","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station.bus","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.bus","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.rail","elementType":"labels.text.fill","stylers":[{"visibility":"off"},{"color":"#00beff"},{"gamma":"0.75"},{"lightness":"3"}]},{"featureType":"transit.station.rail","elementType":"labels.icon","stylers":[{"hue":"#00beff"},{"gamma":"0.8"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#adddf8"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}]')},29:function(e,t,n){},30:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),s=n.n(i),r=n(20),c=n.n(r),o=(n(29),n(30),n(8)),l=n(3),u=n(4),d=n(2),b=n(6),h=n(5),p=function(e){var t=e.sidebarOpen,n=e.toggleSidebar,i=e.handleKeyPress,s=t?" open":" closed";return Object(a.jsx)("button",{id:"nav-button",className:"hamburger--vortex"+s,onMouseDown:n,onKeyPress:i(n),type:"button","aria-label":(t?"Hide":"Show")+" venue sidebar","aria-controls":"venue-sidebar","aria-haspopup":"true",children:Object(a.jsxs)("span",{className:"hamburger-box"+s,children:[Object(a.jsx)("span",{className:"hamburger-top"}),Object(a.jsx)("span",{className:"hamburger-middle"}),Object(a.jsx)("span",{className:"hamburger-bottom"})]})})},j=n.p+"static/media/icons.ebefb063.svg",m=function(e){return Object(a.jsxs)("svg",{className:"icon icon-".concat(e.icon),role:"img",height:e.height||"15px",width:e.width||"15px","aria-label":e.icon+" icon",children:[Object(a.jsx)("title",{children:e.icon+" icon"}),Object(a.jsx)("use",{xlinkHref:"".concat(j,"#").concat(e.icon)})]})},v=function(e){var t=e.arrowClass;return Object(a.jsx)("div",{className:t,children:Object(a.jsx)("span",{})})},f=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleOnClick=a.handleOnClick.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"handleOnClick",value:function(){var e=this.props,t=e.label;(0,e.onClickTabItem)(t)}},{key:"render",value:function(){var e=this.handleOnClick,t=this.props,n=t.activeTab,i=t.label,s="tab-list-item",r="arrow-button";return n&&n===i?(s+=" tab-list-active",r+=" active"):n&&n!==i&&(s+=" tab-list-inactive"),Object(a.jsxs)("li",{className:s,onClick:e,children:[Object(a.jsx)(m,{icon:i}),i,Object(a.jsx)(v,{arrowClass:r})]})}}]),n}(i.Component),O=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={activeTab:""},a.onClickTabItem=a.onClickTabItem.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){var n=this.state.activeTab;return!(t.activeTab===n||!t.activeTab&&!n)}},{key:"onClickTabItem",value:function(e){e===this.state.activeTab?this.setState({activeTab:""}):this.setState({activeTab:e})}},{key:"render",value:function(){var e=this.onClickTabItem,t=this.props,n=t.children,i=t.venue,s=this.state.activeTab;return Object(a.jsxs)("div",{className:"venue-tabs",children:[Object(a.jsx)("ul",{className:"tab-list",children:n.map((function(t){var n=t.props.label;return Object(a.jsx)(f,{activeTab:s,label:n,onClickTabItem:e},"".concat(i.id,"_").concat(n))}))}),Object(a.jsx)("div",{id:"tab-content",className:s?"tab-content-active":"tab-content",children:n.map((function(e){if(e.props.label===s)return e.props.children}))})]})}}]),n}(i.Component),g=n(11),y=n.n(g),x=n(21),k=n(9),w=n(22),N=n.n(w),C=function(e){var t=e.venue,n=e.formatDate,s=t.tips.groups[0].items,r=Object(i.useState)(null),c=Object(k.a)(r,2),o=c[0],l=c[1];Object(i.useEffect)((function(){var e=!0;Object(x.a)(y.a.mark((function t(){var n,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(s.length);case 2:return n=t.sent,e&&(a=n.results.map((function(e){return e.picture.thumbnail})),l(a)),t.abrupt("return",(function(){return e=!1}));case 5:case"end":return t.stop()}}),t)})))()}),[]);var u=function(e){return N.a.get("https://randomuser.me/api/1.3?results=".concat(e,"&inc=picture")).then((function(e){return e.data})).catch((function(e){console.log(e)}))};return s.map((function(e,i){return Object(a.jsxs)("li",{className:"tip",children:[Object(a.jsx)("div",{className:"avatar-wrapper",children:o&&Object(a.jsx)("img",{className:"tip-photo",src:o[i],alt:"a photo of "+e.user.firstName})}),Object(a.jsxs)("div",{className:"tip-text",children:[Object(a.jsxs)("p",{className:"tip-quote",children:["\u201c",e.text,"\u201d"]}),Object(a.jsx)("span",{className:"user-name",children:e.user.firstName}),e.user.lastName&&Object(a.jsx)("span",{className:"user-name",children:" "+e.user.lastName}),Object(a.jsx)("span",{className:"user-name user-date",children:n(e.createdAt)})]})]},t.id+"_tip_"+i)}))},T=function(e){var t=e.venue,n=t.hours;return n?Object(a.jsx)("table",{className:"table-hours",children:n.timeframes.map((function(e,i){return Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:e.days},"".concat(t.id,"_").concat(e.days)),Object(a.jsx)("td",{children:e.open[0].renderedTime},t.id+"_hours_"+i),e.includesToday?n.isOpen?Object(a.jsx)("td",{className:"open",children:"Open now"},"".concat(t.id,"_isOpen")):Object(a.jsx)("td",{className:"closed",children:"Closed now"},"".concat(t.id,"_isClosed")):Object(a.jsx)("td",{children:"\xa0"})]},"".concat(t.id,"_row_").concat(i))},"".concat(t.id,"_tbody_").concat(i))}))}):Object(a.jsxs)("div",{className:"hours-unavailable",children:[Object(a.jsx)("p",{className:"unavailable-message",children:"We're sorry, no hours have been reported for this venue. Please contact ".concat(t.name," for hours.")}),t.url&&Object(a.jsxs)("div",{className:"hours-web info-item",children:[Object(a.jsx)(m,{icon:"globe"}),Object(a.jsx)("span",{className:"attribute-key",children:"Website"}),Object(a.jsx)("a",{className:"attribute-value",href:t.url,target:"_blank",children:t.url.replace("http://","")})]}),t.contact.formattedPhone&&Object(a.jsxs)("div",{className:"hours-phone info-item",children:[Object(a.jsx)(m,{icon:"phone"}),Object(a.jsx)("span",{className:"attribute-key",children:"Phone"}),Object(a.jsx)("span",{className:"attribute-value",children:t.contact.formattedPhone})]})]})},S=function(e){var t=e.venue;return Object(a.jsx)(s.a.Fragment,{children:Array.isArray(t.attributes.groups)&&t.attributes.groups.length?t.attributes.groups.map((function(e,n){return Object(a.jsxs)("dl",{className:"info-item",children:[Object(a.jsx)("dt",{className:"attribute-key",children:e.name}),Object(a.jsx)("dd",{className:"attribute-value",children:e.items[0].displayValue})]},"".concat(t.id,"_info_").concat(n))})):Object(a.jsxs)("div",{className:"data-unavailable",children:[Object(a.jsx)("p",{className:"unavailable-message",children:"No details have been reported for this venue. Please contact ".concat(t.name," for additional information.")}),t.url&&Object(a.jsxs)("div",{className:"info-item",children:[Object(a.jsx)(m,{icon:"globe"}),Object(a.jsx)("span",{className:"attribute-key",children:"Website"}),Object(a.jsx)("a",{className:"attribute-value",href:t.url,target:"_blank",children:t.url.replace("http://","")})]}),t.contact.formattedPhone&&Object(a.jsxs)("div",{className:"info-item",children:[Object(a.jsx)(m,{icon:"phone"}),Object(a.jsx)("span",{className:"attribute-key",children:"Phone"}),Object(a.jsx)("span",{className:"attribute-value",children:t.contact.formattedPhone})]})]})})},I=n.p+"static/media/placeholder.21868459.svg",M=function(){return Object(a.jsxs)("div",{className:"animated-background",children:[Object(a.jsxs)("div",{className:"pic-col",children:[Object(a.jsx)("div",{className:"pic-border"}),Object(a.jsx)("div",{className:"mask pic-bottom"})]}),Object(a.jsxs)("div",{className:"txt-col",children:[Object(a.jsx)("div",{className:"mask txt-1"}),Object(a.jsx)("div",{className:"mask txt-2"}),Object(a.jsx)("div",{className:"mask txt-3"}),Object(a.jsx)("div",{className:"mask txt-4"}),Object(a.jsx)("div",{className:"mask txt-5"}),Object(a.jsx)("div",{className:"mask txt-6"}),Object(a.jsx)("div",{className:"mask txt-7"})]}),Object(a.jsxs)("div",{className:"rating-col",children:[Object(a.jsx)("div",{className:"mask rating-1"}),Object(a.jsx)("div",{className:"mask rating-2"})]})]})},P=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"getVenuePrice",value:function(e){for(var t=this.props.venue,n=[],i=0;i<4;i++)e>0?n.push(Object(a.jsx)("span",{className:"price-active",children:"$"},t.id+"_"+i)):n.push(Object(a.jsx)("span",{className:"price-inactive",children:"$"},t.id+"_"+i)),e--;return n}},{key:"formatDate",value:function(e){var t=new Date(null);t.setTime(1e3*e);var n=t.toLocaleString();return t=n.substr(0,n.lastIndexOf(","))}},{key:"formatCategory",value:function(e){return e.toLowerCase().replace(" restaurant","")}},{key:"render",value:function(){var e=this.props,t=e.venue,n=e.infoWindow,i=e.handleListItemClick,r=e.handleKeyPress;return Object(a.jsx)(s.a.Fragment,{children:this.props.loading?Object(a.jsx)(M,{}):Object(a.jsx)("li",{tabIndex:"0",className:"list-item"+(n.id===t.id?" active":""),onClick:function(){i(t)},onKeyPress:r(i,t),children:Object(a.jsxs)("div",{className:"content-container",children:[Object(a.jsxs)("div",{className:"content-inner-wrapper",children:[Object(a.jsx)("img",{className:"venue-image",src:t.bestPhoto?t.bestPhoto.prefix+"100x100"+t.bestPhoto.suffix:"".concat(I),alt:"An image of "+t.name}),Object(a.jsxs)("div",{className:"info-column",children:[Object(a.jsx)("h2",{className:"venue-name",children:t.name}),t.categories[0]&&Object(a.jsx)("span",{className:"venue-category",children:this.formatCategory(t.categories[0].name)}),t.price&&Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)("span",{className:"vert-line",children:"|"}),Object(a.jsx)("span",{className:"venue-price",children:this.getVenuePrice(t.price.tier)})]}),t.location.address&&Object(a.jsxs)("div",{className:"address-container",children:[Object(a.jsx)("span",{className:"venue-address",children:t.location.address}),Object(a.jsx)("span",{className:"venue-address",children:t.location.formattedAddress[1]})]})]}),t.rating&&Object(a.jsx)("div",{className:"rating-column",children:Object(a.jsxs)("div",{className:"rating-container",children:[Object(a.jsx)(m,{icon:"star",width:"13px",height:"13px"}),Object(a.jsx)("span",{children:t.rating})]})})]}),Object(a.jsxs)(O,{venue:t,children:[Object(a.jsx)("div",{label:"tips",children:Object(a.jsx)("ul",{className:"tip-list",children:Object(a.jsx)(C,{venue:t,formatDate:this.formatDate})})}),Object(a.jsx)("div",{label:"hours",children:Object(a.jsx)(T,{venue:t})}),Object(a.jsx)("div",{label:"info",children:Object(a.jsx)(S,{venue:t})})]})]})})})}}]),n}(i.Component),L=function(e){var t=e.venues,n=e.handleListItemClick,i=e.handleKeyPress,s=e.infoWindow,r=e.loading;return Object(a.jsx)("ul",{className:"venue-list",children:t&&t.map((function(e){var t;return Object(a.jsx)(P,{venue:e,handleListItemClick:n,handleKeyPress:i,infoWindow:s,loading:r},"venue_".concat(null===(t=e.location.address)||void 0===t?void 0:t.replace(/\s+/g,""),"_").concat(e.createdAt))}))})},_=function(e){var t=e.toggleInput,n=e.showInput,i=n?"Close":"Search";return Object(a.jsxs)("button",{id:"search-button",className:"search-button"+(n?" expanded":""),onClick:t,"aria-label":(n?"Hide":"Show")+" search input","aria-expanded":n,type:"button",children:[Object(a.jsx)(m,{icon:"search"}),i]})},V=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={showInput:!1},a.toggleInput=a.toggleInput.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"toggleInput",value:function(){this.setState({showInput:!this.state.showInput})}},{key:"render",value:function(){var e=this.toggleInput,t=this.props,n=t.handleFilterMarkers,i=t.query,s=t.clearInput,r=t.handleKeyPress,c=this.state.showInput;return Object(a.jsxs)("div",{className:"search-bar",children:[Object(a.jsx)("div",{className:"nav-top",children:Object(a.jsx)(_,{showInput:c,toggleInput:e})}),Object(a.jsxs)("div",{className:"input-container"+(c?" visible":" hidden"),children:[Object(a.jsx)("input",{id:"search-input",type:"text",placeholder:"Search...",onChange:n,tabIndex:c?0:-1,value:i}),Object(a.jsx)("span",{className:"input-caption"+(i?"":" active"),children:"Type to filter venues"}),Object(a.jsx)("button",{className:"clear-input"+(i?" active":""),onClick:s,onKeyPress:r(s),children:"Clear"})]})]})}}]),n}(i.PureComponent),E=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleOnClick=a.handleOnClick.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"handleOnClick",value:function(){var e=this.props,t=e.label;(0,e.onClickCategory)(t)}},{key:"render",value:function(){var e=this.handleOnClick,t=this.props,n=t.category,i=t.label;return Object(a.jsxs)("li",{className:"category"+(i===n?" active":" inactive"),onClick:e,children:[Object(a.jsx)(m,{icon:i}),i]})}}]),n}(i.PureComponent),F=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onClickCategory=a.onClickCategory.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"onClickCategory",value:function(e){this.props.category!==e&&this.props.updateSuperState({category:e})}},{key:"render",value:function(){var e=this.onClickCategory,t=this.props,n=t.children,i=t.category;return Object(a.jsx)("nav",{className:"category-nav",children:Object(a.jsx)("ul",{className:"category-list",children:n.map((function(t){var n=t.props.label;return Object(a.jsx)(E,{category:i,label:n,onClickCategory:e},n)}))})})}}]),n}(i.Component),W=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleFilterMarkers=function(e){var t=a.props,n=t.venues,i=t.markers,s=t.updateSuperState;a.setState({query:e.target.value}),s({markers:n.map((function(t){var n=t.name.toLowerCase().replace(/[^\w ]/gi,"").trim().includes(e.target.value.toLowerCase().replace(/[^\w ]/gi,"").trim()),a=i.find((function(e){return e.id===t.id}));return n?a.setVisible(!0):a.setVisible(!1),a}))}),a.didMarkersChange()},a.state={query:"",visibleMarkers:[]},a.handleFilterVenues=a.handleFilterVenues.bind(Object(d.a)(a)),a.clearInput=a.clearInput.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"handleFilterVenues",value:function(){var e=this.props.venues,t=this.state.query;return""!==t.trim()?e.filter((function(e){return e.name.toLowerCase().replace(/[^\w ]/gi,"").trim().includes(t.toLowerCase().replace(/[^\w ]/gi,"").trim())})):e}},{key:"didMarkersChange",value:function(){var e=this.props,t=e.markers,n=e.infoWindow,a=e.updateMapBounds,i=t.filter((function(e){return e.visible}));(i.length>1||0===i.length)&&n.close(),i.length!==this.state.visibleMarkers.length&&i.length>0&&a(i),this.setState({visibleMarkers:i})}},{key:"clearInput",value:function(){var e=this.props,t=e.markers,n=e.updateMapBounds,a=e.infoWindow,i=t.map((function(e){return e.setVisible(!0),e}));this.setState({query:"",visibleMarkers:i}),a.close(),n(i)}},{key:"render",value:function(){var e=this.handleFilterVenues,t=this.handleFilterMarkers,n=this.clearInput,i=this.props,s=i.toggleSidebar,r=i.sidebarOpen,c=i.navKeyPress,o=i.handleListItemClick,l=i.infoWindow,u=i.updateSuperState,d=i.category,b=i.loading,h=i.venues,p=i.handleKeyPress,j=this.state.query;return Object(a.jsxs)("section",{id:"venue-sidebar",className:r?"visible":"hidden",children:[Object(a.jsx)(V,{toggleSidebar:s,sidebarOpen:r,navKeyPress:c,handleFilterMarkers:t,query:j,clearInput:n,handleKeyPress:p}),Object(a.jsxs)("div",{className:"sidebar-wrapper",children:[b&&0===h.length?Object(a.jsxs)("div",{className:"loader-container",children:[Object(a.jsx)(M,{}),Object(a.jsx)(M,{}),Object(a.jsx)(M,{}),Object(a.jsx)(M,{})]}):Object(a.jsx)(L,{handleListItemClick:o,handleKeyPress:p,infoWindow:l,venues:e(),loading:b}),Object(a.jsxs)("footer",{children:[Object(a.jsx)("span",{className:"attribution",children:"Powered by"}),Object(a.jsx)(m,{icon:"foursquare",height:"14px"}),Object(a.jsx)("span",{className:"attribution",children:"Foursquare"})]})]}),Object(a.jsxs)(F,{updateSuperState:u,category:d,children:[Object(a.jsx)("div",{label:"food"}),Object(a.jsx)("div",{label:"drinks"}),Object(a.jsx)("div",{label:"coffee"}),Object(a.jsx)("div",{label:"sights"})]})]})}}]),n}(i.Component),A=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleCloseSidebar=a.handleCloseSidebar.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){if(!window.google){var e=document.createElement("script");e.type="text/javascript",e.src="https://maps.google.com/maps/api/js?key=".concat("AIzaSyCHE01dQ6hdkOBP0qxkzYdTCJdhYesX8gY"),e.onerror=function(){return alert("Unable to load Google Maps")};var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),e.addEventListener("load",(function(e){console.log("A. map script loaded")}))}}},{key:"handleCloseSidebar",value:function(){window.innerWidth<600&&this.props.closeSidebar()}},{key:"render",value:function(){var e=this.handleCloseSidebar,t=this.props,n=t.id,i=t.sidebarOpen;return Object(a.jsx)("section",{id:"map",className:i?"pad-left":"",onClick:e,children:Object(a.jsx)("div",{role:"application","aria-hidden":"true",id:n})})}}]),n}(i.PureComponent),B=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,null,[{key:"baseURL",value:function(){return"https://api.foursquare.com/v2"}},{key:"auth",value:function(){var e={client_id:"HJNNIPI2LLUFNMLQNWRVAJOELZVHCP02VCSIEKK4XNIIS1CB",client_secret:"YTE4A4QEZH0FMUFOWYRLVVPIJX3L0XW3D2K1GJ0GRMWAT2PV",v:"20181004"};return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")}},{key:"urlBuilder",value:function(e){return e?Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&"):""}},{key:"headers",value:function(){return{Accept:"application/json"}}},{key:"handleErrors",value:function(e){if(!e.ok)throw Error(e.statusText);return e}},{key:"simpleFetch",value:function(t,n,a){var i={method:n,headers:e.headers()};return fetch("".concat(e.baseURL()).concat(t,"?").concat(e.auth(),"&").concat(e.urlBuilder(a)),i).then(e.handleErrors).then((function(e){return e.json()}))}}]),e}(),K=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,null,[{key:"search",value:function(e){return B.simpleFetch("/venues/search","GET",e)}},{key:"getVenueDetails",value:function(e){return B.simpleFetch("/venues/".concat(e),"GET")}},{key:"getVenuePhotos",value:function(e){return B.simpleFetch("/venues/".concat(e,"/photos"),"GET")}},{key:"getVenueRecommendations",value:function(e){return B.simpleFetch("/venues/explore","GET",e)}}]),e}(),q=(n(49),function(e){var t=e.categories[0],n=t?'<img class="iw-photo" src="'+t.icon.prefix+"100"+t.icon.suffix+'" alt="'+t.icon.name+' icon" />':"",a='<div class="icon-container clock">\n      <svg class="iw-icon"\n        role="img" height="13px" width="13px" aria-label="clock icon" >\n        <title>location icon</title>\n        <use href="'.concat(j,'#clock"/>\n      </svg>\n    </div>'),i=e.hasOwnProperty("hours")?a+e.hours.status:"";return"<div id='iw-container' class='scroll-fix'>\n      ".concat(n,'\n      <div class="iw-content">\n        <h4 class="iw-title">').concat(e.name,'</h4>\n        <ul class="iw-list">\n          <li class="iw-address">\n            <div class="icon-container marker">\n              <svg class="iw-icon" role="img" height="17px" width="13px" aria-label="location icon" >\n                <title>location icon</title>\n                <use href="').concat(j,'#marker"/>\n              </svg>\n            </div>\n            ').concat(e.location.address,'\n          </li>\n          <li class="iw-hours">').concat(i,"</li>\n        </ul>\n      </div>\n    </div>")});var D=function(e){var t=e.Modal,n=e.showModal;return function(e){return function(s){var r=Object.assign({},s),c=Object(i.useState)(n),l=Object(k.a)(c,2),u=l[0],d=l[1];return u?Object(a.jsx)(t,{modalOpen:u,setModalOpen:d}):Object(a.jsx)(e,Object(o.a)({},r))}}},G=n(23),R=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={venues:[],markers:[],center:[],zoom:12,infoWindow:"",sidebarOpen:!0,loading:!1,category:"food",updateSuperState:function(e){a.setState(e)}},a.initMap=a.initMap.bind(Object(d.a)(a)),a.handleListItemClick=a.handleListItemClick.bind(Object(d.a)(a)),a.toggleSidebar=a.toggleSidebar.bind(Object(d.a)(a)),a.updateMapBounds=a.updateMapBounds.bind(Object(d.a)(a)),a.closeSidebar=a.closeSidebar.bind(Object(d.a)(a)),a.fetchVenues=a.fetchVenues.bind(Object(d.a)(a)),a.createMarkers=a.createMarkers.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setState({loading:!0}),this.fetchVenues(this.initMap)}},{key:"componentDidUpdate",value:function(e,t){t.category!==this.state.category&&(this.clearMarkers(),this.fetchVenues(this.createMarkers))}},{key:"fetchVenues",value:function(e){var t=this;K.getVenueRecommendations({near:"Chicago, IL",section:this.state.category,limit:10}).then((function(e){var t=e.response.groups[0].items,n=(e.response.geocode.center,t.map((function(e){return e.venue})).map((function(e){return K.getVenueDetails(e.id).then((function(e){return e.response.venue}))})));return Promise.all(n)})).then((function(n,a){var i=n.sort((function(e,n){return t.stripFirstArticle(e.name)>t.stripFirstArticle(n.name)?1:-1}));t.setState({venues:i,center:a}),e()})).catch((function(e){console.log(e),alert("Error: Failed to fetch Foursquare Venues")}))}},{key:"stripFirstArticle",value:function(e){return e.replace(/^(a |the |an )/i,"").trim()}},{key:"initMap",value:function(){this.map=new window.google.maps.Map(document.getElementById("map"),{center:this.state.center,zoom:this.state.zoom,styles:G,mapTypeControl:!1}),this.infowindow=new window.google.maps.InfoWindow,this.infowindow.id="",this.createMarkers()}},{key:"createMarkers",value:function(){var e=this,t=this.infowindow,n=this.state.venues.map((function(n){var a=new window.google.maps.Marker({position:{lat:n.location.lat,lng:n.location.lng},id:n.id,map:e.map,title:n.name,animation:window.google.maps.Animation.DROP});return a.addListener("click",(function(){e.toggleBounce(a),t.id=a.id,t.setContent(q(n)),e.setState({infoWindow:t}),t.open(e.map,a)})),a}));this.updateMapBounds(n),this.setState({loading:!1,markers:n,infoWindow:t})}},{key:"updateMapBounds",value:function(e){var t=this,n=new window.google.maps.LatLngBounds;e.forEach((function(e){return n.extend(e.position)})),this.map.fitBounds(n),window.google.maps.event.addListenerOnce(this.map,"bounds_changed",(function(){var e=t.map.getZoom();e>15&&(e=15),t.map.setZoom(e),t.setState({zoom:e})})),1===e.length&&window.google.maps.event.trigger(e[0],"click")}},{key:"clearMarkers",value:function(){this.setState({loading:!0}),this.state.markers.forEach((function(e){return e.setMap(null)}))}},{key:"handleListItemClick",value:function(e){var t=this.state,n=t.markers,a=t.infoWindow,i=n.find((function(t){return t.id===e.id}));a.id!==i.id&&window.google.maps.event.trigger(i,"click")}},{key:"handleKeyPress",value:function(e,t){return function(n){"Enter"===n.key&&e(t)}}},{key:"toggleSidebar",value:function(){this.setState({sidebarOpen:!this.state.sidebarOpen})}},{key:"closeSidebar",value:function(){this.setState({sidebarOpen:!1})}},{key:"toggleBounce",value:function(e){null!==e.getAnimation()?e.setAnimation(null):e.setAnimation(window.google.maps.Animation.BOUNCE),setTimeout((function(){e.setAnimation(null)}),1e3)}},{key:"render",value:function(){var e=this.toggleSidebar,t=this.handleListItemClick,n=this.updateMapBounds,i=this.closeSidebar,s=this.handleKeyPress,r=this.state.sidebarOpen;return Object(a.jsxs)("main",{id:"app-container",children:[Object(a.jsx)(p,{toggleSidebar:e,sidebarOpen:r,handleKeyPress:s}),Object(a.jsx)(W,Object(o.a)(Object(o.a)({},this.state),{},{handleListItemClick:t,updateMapBounds:n,handleKeyPress:s})),Object(a.jsx)(A,{sidebarOpen:r,id:"map",closeSidebar:i})]})}}]),n}(i.Component),U=D({Modal:function(e){var t=e.modalOpen,n=e.setModalOpen;return Object(a.jsx)("div",{className:"modal-wrapper",children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsx)("div",{className:"icon-wrapper",children:Object(a.jsx)(m,{icon:"logo"})}),Object(a.jsx)("h1",{children:"Notice:"}),Object(a.jsx)("p",{children:"The Google Maps API is no longer free. The map in this app does not have billing enabled, so it is displayed in development mode. Aside from the watermark, the map functionality is the same. Please ignore any alerts from Google."}),Object(a.jsx)("button",{className:"modal-btn",onClick:function(){return n(!t)},children:"Continue"})]})})},showModal:!0})(R),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(a.jsx)(U,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/the-loop-city-guide",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/the-loop-city-guide","/service-worker.js");J?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):H(e)}))}}()}},[[50,1,2]]]);
//# sourceMappingURL=main.95c62dd1.chunk.js.map