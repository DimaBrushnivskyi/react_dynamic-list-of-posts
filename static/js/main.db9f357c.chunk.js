(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(6),s=n.n(r),c=n(3),a=n(4),o=n(1),u=n.n(o),i=n(2),p=(n(12),n(13),n(14),"https://mate.academy/students-api"),l=function(){var t=Object(c.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/users"));case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Status: ".concat(e.status,"\n      - StatusText: ").concat(e.statusText));case 5:return t.next=7,e.json();case 7:return n=t.sent,t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/posts"));case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Status: ".concat(e.status,"\n      - StatusText: ").concat(e.statusText));case 5:return t.next=7,e.json();case 7:return n=t.sent,t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(u.a.mark((function t(e){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/posts?userId=").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(u.a.mark((function t(e){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/posts/").concat(e));case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("Status: ".concat(n.status,"\n      - StatusText: ").concat(n.statusText));case 5:return t.next=7,n.json();case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=n(0),d=function(t){var e=t.posts,n=t.userId,r=t.onPostsSet,s=t.onPostId,a=t.selectedPostId,o=function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(i.useEffect)((function(){0===n&&o()}),[n]);var p=function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(n);case 2:e=t.sent,n&&r(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){p()}),[n]),Object(m.jsxs)("div",{className:"PostsList",children:[Object(m.jsx)("h2",{children:"Posts:"}),Object(m.jsx)("ul",{className:"PostsList__list",children:e.map((function(t){return Object(m.jsxs)("li",{className:"PostsList__item",children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("b",{children:["[User #",t.userId,"]:"," ",t.title]})," - ",t.body]}),a?Object(m.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){s(0)},children:"Close"}):Object(m.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){s(t.id)},children:"Open"})]},t.id)}))})]})},h=(n(16),function(){var t=Object(c.a)(u.a.mark((function t(e){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("\n  ".concat(p,"/comments?postId=").concat(e,"\n  "));case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("Status: ".concat(n.status,"\n      - StatusText: ").concat(n.statusText));case 5:return t.next=7,n.json();case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),x=function(){var t=Object(c.a)(u.a.mark((function t(e,n,r,s){var c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/comments"),{method:"POST",body:JSON.stringify({postId:e,name:n,email:r,body:s}),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:return c=t.sent,t.next=5,c.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,s){return t.apply(this,arguments)}}(),O=function(){var t=Object(c.a)(u.a.mark((function t(e){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/comments/").concat(e),{method:"DELETE"});case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(t){var e=t.postId,n=Object(i.useState)(""),r=Object(a.a)(n,2),s=r[0],o=r[1],p=Object(i.useState)(""),l=Object(a.a)(p,2),j=l[0],f=l[1],b=Object(i.useState)(""),d=Object(a.a)(b,2),h=d[0],O=d[1],v=function(){var t=Object(c.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),x(e,s,j,h);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsxs)("form",{className:"NewCommentForm",onSubmit:function(){var t=Object(c.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(e);case 3:o(""),f(""),O(""),t.next=9;break;case 6:throw t.prev=6,t.t0=t.catch(0),new Error("Error happened");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),children:[Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("input",{type:"text",name:"name",value:s,placeholder:"Your name",className:"NewCommentForm__input",onChange:function(t){o(t.target.value)}})}),Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("input",{type:"text",name:"email",value:j,placeholder:"Your email",className:"NewCommentForm__input",onChange:function(t){f(t.target.value)}})}),Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("textarea",{name:"body",value:h,placeholder:"Type comment here",className:"NewCommentForm__input",onChange:function(t){O(t.target.value)}})}),Object(m.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})},w=(n(17),function(t){var e=t.postId,n=t.onCommentsSet,r=t.comments,s=Object(i.useState)(!1),o=Object(a.a)(s,2),p=o[0],l=o[1],j=Object(i.useState)(null),f=Object(a.a)(j,2),d=f[0],x=f[1],w=function(){var t=Object(c.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:n=t.sent,x(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=Object(c.a)(u.a.mark((function t(){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e);case 2:r=t.sent,n(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){w(),_()}),[e]),Object(m.jsxs)("div",{className:"PostDetails",children:[Object(m.jsx)("h2",{children:"Post details:"}),Object(m.jsx)("section",{className:"PostDetails__post",children:Object(m.jsx)("p",{children:null===d||void 0===d?void 0:d.title})}),Object(m.jsxs)("button",{type:"button",className:"button",onClick:function(){l((function(t){return!t}))},children:[p?"Hide":"Show"," ",r.length," ",1===r.length?"comment":"comments"]}),p&&Object(m.jsx)("section",{className:"PostDetails__comments",children:Object(m.jsx)("ul",{className:"PostDetails__list",children:r.map((function(t){return Object(m.jsxs)("li",{className:"PostDetails__list-item",children:[Object(m.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return O(t.id)},children:"X"}),Object(m.jsx)("p",{children:t.body})]},t.id)}))})}),Object(m.jsx)("section",{children:Object(m.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(m.jsx)(v,{postId:e})})})]})}),_=function(t){var e=t.users,n=t.onUserSelect;return Object(m.jsxs)("label",{children:["Select a user: \xa0",Object(m.jsxs)("select",{className:"App__user-selector",onChange:function(t){var e=+t.target.value;n(e)},children:[Object(m.jsx)("option",{value:0,children:"All Users"}),e.map((function(t){return Object(m.jsx)("option",{value:t.id,children:t.name},t.id)}))]})]})},y=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],s=Object(i.useState)([]),o=Object(a.a)(s,2),p=o[0],j=o[1],f=Object(i.useState)([]),b=Object(a.a)(f,2),h=b[0],x=b[1],O=Object(i.useState)(0),v=Object(a.a)(O,2),y=v[0],N=v[1],k=Object(i.useState)(0),S=Object(a.a)(k,2),P=S[0],C=S[1],I=function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:e=t.sent,j(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){I()}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("header",{className:"App__header",children:Object(m.jsx)(_,{users:p,onUserSelect:N})}),Object(m.jsxs)("main",{className:"App__main",children:[Object(m.jsx)("div",{className:"App__sidebar",children:Object(m.jsx)(d,{posts:n,userId:y,onPostsSet:r,onPostId:C,selectedPostId:P})}),Object(m.jsx)("div",{className:"App__content",children:!!P&&Object(m.jsx)(w,{postId:P,onCommentsSet:x,comments:h})})]})]})};s.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.db9f357c.chunk.js.map