(this["webpackJsonpcontacts-app"]=this["webpackJsonpcontacts-app"]||[]).push([[0],{12:function(t,e,n){t.exports={contactDetails:"ContactDetails_contactDetails__3746H",avatar:"ContactDetails_avatar__38lNe",description:"ContactDetails_description__dOt-8",connections:"ContactDetails_connections__Hmlyw"}},15:function(t,e,n){t.exports={searchBar:"SearchBar_searchBar__1hWdk",contacts:"SearchBar_contacts__-ifxf",connections:"SearchBar_connections__9FmwS"}},16:function(t,e,n){t.exports={contactsList:"ContactsList_contactsList__1lKb1",contactElement:"ContactsList_contactElement__11cmD",active:"ContactsList_active__6V1bU"}},19:function(t,e,n){t.exports={connectionCard:"ConnectionCard_connectionCard__reFuf",avatar:"ConnectionCard_avatar__1vCNq"}},21:function(t,e,n){t.exports={sideLetters:"SideLetters_sideLetters__Ok2eB",active:"SideLetters_active__HDv-B"}},22:function(t,e,n){t.exports={leftNavigation:"LeftNavigation_leftNavigation__2Wj-G",contacts:"LeftNavigation_contacts__9GVQx"}},39:function(t,e,n){t.exports={App:"App_App__15LM-"}},40:function(t,e,n){t.exports={listPagination:"Pagination_listPagination__2Luol"}},41:function(t,e,n){t.exports=n(71)},52:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(14),o=n.n(r),i=n(11),s=n(3),l=n(35),u=(n(52),n(6)),m=n(7),p=n(9),h=n(8),C=n(10),d=n(36),f=n.n(d).a.create({baseURL:"https://exercise.goldenspear.com"}),_=function(t){return{type:"SET_CURRENT_CONTACT",currentContact:t}},T=n(12),E=n.n(T),v=n(19),S=n.n(v),g=function(t){var e=t.connection,n=e?{backgroundImage:"url(".concat(e.avatar,")")}:null;return c.a.createElement("article",{className:S.a.connectionCard},c.a.createElement("div",{className:S.a.avatar,style:n}),c.a.createElement("p",null,e.name))},L=n(37),O=n(38),N=n(15),b=n.n(N),y=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(p.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(c)))).state={inputSearch:""},n.handleFilter=function(t){var e=n.props.type;n.setState({inputSearch:t.target.value}),"contacts"===e?n.props.onSearchContact(t.target.value.toLowerCase()):n.props.onSearchConnection(t.target.value.toLowerCase())},n}return Object(C.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.props,e=t.type,n=t.contactSearchTerm,a=t.connectionSearchTerm,r=[b.a.searchBar];return"contacts"===e&&r.push(b.a.contacts),"connections"===e&&r.push(b.a.connections),c.a.createElement("section",{className:r.join(" ")},c.a.createElement(L.a,{icon:O.a}),c.a.createElement("input",{type:"text",value:"contacts"===e?n:a,onChange:this.handleFilter,placeholder:"Search by name..."}))}}]),e}(a.Component),j=Object(s.b)((function(t){return{contactSearchTerm:t.contactSearchTerm,connectionSearchTerm:t.connectionSearchTerm}}),(function(t){return{onSearchContact:function(e){return t(function(t){return{type:"SET_CONTACT_SEARCH_TERM",contactSearchTerm:t,connectionSearchTerm:"",startLetter:""}}(e))},onSearchConnection:function(e){return t(function(t){return{type:"SET_CONNECTION_SEARCH_TERM",connectionSearchTerm:t,contactSearchTerm:""}}(e))}}}))(y),A=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(p.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(c)))).state={displayedConnections:null},n.handleFilterByName=function(t){var e=n.props.connections.filter((function(e){return e.name.toLowerCase().match(t)}));n.setState({displayedConnections:e})},n}return Object(C.a)(e,t),Object(m.a)(e,[{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.contact,a=e.connections,c=e.searchTerm;n!==t.contact&&this.props.onGetConnections(this.props.contact.connections),a!==t.connections&&this.setState({displayedConnections:a}),c!==t.searchTerm&&this.handleFilterByName(c)}},{key:"render",value:function(){var t=this,e=this.props.contact,n=this.state.displayedConnections,a={backgroundImage:"url(img/user_avatar.png)"};return e&&e.avatar&&(a={backgroundImage:"url(".concat(e.avatar,")")}),c.a.createElement("section",{className:E.a.contactDetails},e?c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("div",{className:E.a.avatar,style:a}),c.a.createElement("h1",null,e.name),c.a.createElement(j,{type:"connections"})),c.a.createElement("main",null,c.a.createElement("div",{className:E.a.description},c.a.createElement("span",null,"Description:"),c.a.createElement("p",null,e.description)),c.a.createElement("section",{className:E.a.connections},n?n.map((function(e){return c.a.createElement("button",{key:e.id,onClick:function(){return t.props.onClickConection(e)}},c.a.createElement(g,{connection:e}))})):null))):c.a.createElement("p",null,"Please select"))}}]),e}(a.Component),k=Object(s.b)((function(t){return{contact:t.currentContact,connections:t.contactConnections,searchTerm:t.connectionSearchTerm,error:t.error}}),(function(t){return{onGetConnections:function(e){return t(function(t){return{type:"GET_CONNECTIONS",connectionsArr:t}}(e))},onClickConection:function(e){return t(_(e))}}}))(A),P=n(39),w=n.n(P),R=n(21),B=n.n(R),D=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(p.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(c)))).state={activeLetter:""},n.handleClick=function(t){n.props.onLetterClicked(t)},n}return Object(C.a)(e,t),Object(m.a)(e,[{key:"componentDidUpdate",value:function(t){this.props.startLetter!==t.startLetter&&this.setState({activeLetter:this.props.startLetter})}},{key:"render",value:function(){var t=this,e="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");return c.a.createElement("section",{className:B.a.sideLetters},c.a.createElement("div",null,e.map((function(e){var n=e===t.state.activeLetter?B.a.active:null;return c.a.createElement("button",{key:e,className:n,onClick:function(){return t.handleClick(e)}},e)}))))}}]),e}(a.Component),F=Object(s.b)((function(t){return{startLetter:t.startLetter}}),(function(t){return{onLetterClicked:function(e){return t(function(t){return{type:"SET_START_LETTER",startLetter:t}}(e))}}}))(D),G=n(16),x=n.n(G),I=n(40),H=n.n(I),U=function(t){var e=t.contactsPerPage,n=t.totalContacts,a=t.paginationHandler,r=t.currentPage,o=Math.ceil(n/e);return c.a.createElement("section",{className:H.a.listPagination},c.a.createElement("button",{disabled:1===r,onClick:function(){return a(-1)}},"<"),c.a.createElement("span",null,"".concat(r,"/").concat(o)),c.a.createElement("button",{disabled:r===o,onClick:function(){return a(1)}},">"))},M=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(p.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(c)))).state={displayedContacts:[],filteredContacts:null,contactsPerPage:30,totalContacts:0,currentPage:1},n.handlePageChange=function(t){var e=n.state.currentPage+t;n.setState({currentPage:e}),n.handlePagination(e)},n.handlePagination=function(t){var e=n.state,a=e.contactsPerPage,c=e.filteredContacts,r=(t-1)*a,o=c.slice(r,r+a);console.log("contactsPerPage",a),console.log("startContact",r),console.log("displayedContacts",o),n.setState({displayedContacts:o,totalContacts:c.length})},n.handleFilterByName=function(t){n.handleFilterByLetter("");var e=n.props.contacts.filter((function(e){return e.name.toLowerCase().match(t)}));n.setState({filteredContacts:e,currentPage:1})},n.handleFilterByLetter=function(t){var e=n.props.contacts.filter((function(e){var n=e.name;return(n=n.trim().toUpperCase())[0]===t}));n.setState({filteredContacts:e,currentPage:1})},n.handleNameClick=function(t){n.props.onClickContact(t)},n}return Object(C.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){this.props.onGetContacts()}},{key:"componentDidUpdate",value:function(t,e){var n=this.props,a=n.contacts,c=n.searchTerm,r=n.startLetter,o=this.state,i=o.currentPage,s=o.filteredContacts;a!==t.contacts&&this.setState({filteredContacts:a}),s!==e.filteredContacts&&this.handlePagination(i),r!==t.startLetter&&this.handleFilterByLetter(r),c!==t.searchTerm&&this.handleFilterByName(c)}},{key:"render",value:function(){var t=this,e=this.state,n=e.displayedContacts,a=e.filteredContacts,r=e.contactsPerPage,o=e.currentPage,i=this.props.currentContact,s=c.a.createElement("p",null,"Name not found");return n&&n.length&&(s=c.a.createElement("ul",null,n.map((function(e){var n=i.name===e.name?x.a.active:null;return c.a.createElement("li",{className:x.a.contactElement,key:e.id},c.a.createElement("button",{className:n,onClick:function(){return t.handleNameClick(e)}},e.name))})))),c.a.createElement("section",{className:x.a.contactsList},n&&a?s:c.a.createElement("p",null,"Loading..."),c.a.createElement(U,{contactsPerPage:r,totalContacts:this.state.totalContacts,paginationHandler:this.handlePageChange,currentPage:o}))}}]),e}(a.Component),W=Object(s.b)((function(t){return{contacts:t.contacts,currentContact:t.currentContact,loading:t.loading,searchTerm:t.contactSearchTerm,startLetter:t.startLetter,error:t.error}}),(function(t){return{onGetContacts:function(){return t((function(t){return t({type:"GET_ALL_CONTACTS_START"}),f.get("/contacts.json").then((function(e){var n=e.data.sort((function(t,e){return t.name.localeCompare(e.name)}));t(function(t){return{type:"GET_ALL_CONTACTS",contacts:t,currentContact:t[0]}}(n))})).catch((function(e){t({type:"GET_ALL_CONTACTS_FAIL",error:e})}))}))},onClickContact:function(e){return t(_(e))}}}))(M),V=n(22),J=n.n(V),X=function(){return c.a.createElement("section",{className:J.a.leftNavigation},c.a.createElement(j,{type:"contacts"}),c.a.createElement("section",{className:J.a.contacts},c.a.createElement(F,null),c.a.createElement(W,null)))};var K=function(){return c.a.createElement("main",{className:w.a.App},c.a.createElement(X,null),c.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(5),q={contacts:[],contactSearchTerm:"",connectionSearchTerm:"",startLetter:null,currentContact:null},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_ALL_CONTACTS_START":return Object(Q.a)({},t,{loading:!0});case"GET_ALL_CONTACTS":return Object(Q.a)({},t,{contacts:e.contacts,currentContact:e.currentContact,loading:!1});case"GET_ALL_CONTACTS_FAIL":return Object(Q.a)({},t,{loading:!1,error:e.error});case"SET_CONTACT_SEARCH_TERM":return Object(Q.a)({},t,{contactSearchTerm:e.contactSearchTerm,connectionSearchTerm:e.connectionSearchTerm,startLetter:e.startLetter});case"SET_CONNECTION_SEARCH_TERM":return Object(Q.a)({},t,{contactSearchTerm:e.contactSearchTerm,connectionSearchTerm:e.connectionSearchTerm});case"SET_START_LETTER":return Object(Q.a)({},t,{startLetter:e.startLetter});case"SET_CURRENT_CONTACT":return Object(Q.a)({},t,{currentContact:e.currentContact});case"GET_CONNECTIONS":var n=t.contacts.filter((function(t){return e.connectionsArr.includes(t.id)}));return Object(Q.a)({},t,{contactConnections:n});default:return t}},Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,$=Object(i.d)(Y,Z(Object(i.a)(l.a)));o.a.render(c.a.createElement(s.a,{store:$},c.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.5c25540e.chunk.js.map