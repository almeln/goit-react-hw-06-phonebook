(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={contactItemName:"ContactItem_contactItemName__1EqLd",contactItemNumber:"ContactItem_contactItemNumber__3GpK9",deleteBtn:"ContactItem_deleteBtn__2-QRd"}},19:function(e,t,n){},20:function(e,t,n){e.exports={container:"Container_container__2fF4o"}},21:function(e,t,n){e.exports={filterInput:"Filter_filterInput__3W6o2"}},28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(9),o=n.n(r),i=(n(28),n(18)),s=n(3),u=n(12),b=n(17),l=n(40),m=n(4),j=Object(m.b)("contacts/add",(function(e){return{payload:{id:Object(l.a)(),name:e.name,number:e.number}}})),d=Object(m.b)("contacts/delete"),f=Object(m.b)("contacts/filter"),O=function(e){return e.contacts.items},p=function(e){return e.contacts.filter},h=function(e){var t=O(e),n=p(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},x=n(6),_=n.n(x),I=n(1);function C(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(b.a)(r,2),i=o[0],l=o[1],m=Object(s.c)(O),d=Object(s.b)();console.log(n);var f=function(e){console.log(i);var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":a(c);break;case"number":l(c);break;default:return}},p=function(){a(""),l("")};return Object(I.jsxs)("form",{className:_.a.form,onSubmit:function(e){e.preventDefault(),m.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?u.b.error("".concat(n," is alredy in contacts.")):(d(j({name:n,number:i})),p())},children:[Object(I.jsxs)("label",{className:_.a.formInputLabel,children:["Name",Object(I.jsx)("input",{className:_.a.formInput,type:"text",name:"name",value:n,onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(I.jsxs)("label",{className:_.a.formInputLabel,children:["Number",Object(I.jsx)("input",{className:_.a.formInput,type:"tel",name:"number",value:i,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(I.jsx)("button",{className:_.a.formInputBtn,type:"submit",children:"Add contact"})]})}var v=n(19),N=n.n(v),g=n(13),y=n.n(g),k=function(e){var t=e.name,n=e.number,c=e.onDelete;return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("p",{children:[Object(I.jsxs)("span",{className:y.a.contactItemName,children:[t,":"]}),Object(I.jsx)("span",{className:y.a.contactItemNumber,children:n}),Object(I.jsx)("button",{type:"button",className:y.a.deleteBtn,onClick:c,children:"Delete"})]})})},w=function(){var e=Object(s.c)(h),t=Object(s.b)();return Object(I.jsx)("ul",{children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(I.jsx)("li",{className:N.a.contactItem,children:Object(I.jsx)(k,{name:c,number:a,onDelete:function(){return function(e){return t(d(e))}(n)}})},n)}))})},L=n(20),A=n.n(L),B=function(e){var t=e.children;return Object(I.jsx)("div",{className:A.a.container,children:t})},F=n(21),S=n.n(F),z=function(){var e=Object(s.c)(p),t=Object(s.b)();return Object(I.jsxs)("label",{children:["Find contacts by name",Object(I.jsx)("input",{className:S.a.filterInput,type:"text",value:e,onChange:function(e){return t(f(e.target.value))}})]})};function D(){return Object(I.jsxs)(B,{children:[Object(I.jsx)(u.a,{}),Object(I.jsx)("h1",{children:"Phonebook"}),Object(I.jsx)(C,{}),Object(I.jsx)("h2",{children:"Contacts"}),Object(I.jsx)(z,{}),Object(I.jsx)(w,{})]})}var q,E=n(11),J=n(5),Z=n(22),K=n.n(Z),M=n(23),R=n.n(M),T=n(7),W=n(2),Y=Object(m.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(q={},Object(T.a)(q,j,(function(e,t){return[t.payload].concat(Object(E.a)(e))})),Object(T.a)(q,d,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),q)),G=Object(m.c)("",Object(T.a)({},f,(function(e,t){return t.payload}))),H=Object(W.b)({items:Y,filter:G}),P={key:"contacts",storage:R.a,blacklist:["filter"]},Q=Object(m.a)({reducer:{contacts:Object(J.g)(P,H)},middleware:function(e){return[].concat(Object(E.a)(e({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})),[K.a])},devTools:!1}),$=Object(J.h)(Q);n(37);o.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(s.a,{store:Q,children:Object(I.jsx)(i.a,{loading:null,persistor:$,children:Object(I.jsx)(D,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"ContactForm_form__24t-l",formInput:"ContactForm_formInput__3WIlS",formInputLabel:"ContactForm_formInputLabel__1ytpb",formInputBtn:"ContactForm_formInputBtn__1YwYb"}}},[[38,1,2]]]);
//# sourceMappingURL=main.d7082998.chunk.js.map