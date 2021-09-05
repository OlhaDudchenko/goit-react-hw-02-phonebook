(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{21:function(n,t,e){},26:function(n,t,e){"use strict";e.r(t);var o,r,a=e(1),c=e.n(a),i=e(13),s=e.n(i),u=e(28),l=Object.freeze({colors:{white:"#ffffff",BorderColor:"rgb(255, 222, 173)",InputColor:"rgba(255, 248, 220, 0.5)",ButtonColor:"rgb(255, 248, 220)"},animation:"250ms",time:"cubic-bezier(0.4, 0, 0.2, 1)"}),m=(e(21),e(16)),d=e(7),h=e(8),b=e(10),f=e(9),p=e(2),x=e(3),j=x.a.section(o||(o=Object(p.a)(["\nmargin-left:30px;\nmargin-top:20px;\nfont-weight:700;\n"]))),g=x.a.h2(r||(r=Object(p.a)(["\nmargin:0px;\nmargin-bottom:8px;\nfont-weight:700;\nfont-size:28px;\n"]))),O=e(0);function C(n){var t=n.title,e=n.children;return Object(O.jsxs)(j,{children:[t&&Object(O.jsx)(g,{children:t}),e]})}var v,w,y,I,z,S,k,B,A,F=e(15),N=e(29),D=x.a.div(v||(v=Object(p.a)(["\ndisplay: flex;\nflex-direction: column;\nfont-weight:700;\nfont-size:18px;\n"]))),J=x.a.input(w||(w=Object(p.a)(["\nwidth:200px;\nmargin-top:4px;\nmargin-bottom:4px;\npadding:5px;\nfont: inherit;\nfont-size:18px;\nborder-radius: 4px;\nborder:",";\nbackground-color:",";\ntransition: ",",\n    ",";\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n    transform: scale(1);\n  }\n\n"])),(function(n){return"3px solid ".concat(n.theme.colors.BorderColor)}),(function(n){return n.theme.colors.InputColor}),(function(n){return"transform".concat(n.theme.colors.animation," ").concat(n.theme.colors.time)}),(function(n){return"box-shadow".concat(n.theme.colors.animation," ").concat(n.theme.colors.time)}),(function(n){return"0 0 10px".concat(n.theme.colors.white)})),Z=x.a.button(y||(y=Object(p.a)(["\nmargin: 0;\nmargin-top:5px;\npadding: 5px 10px;\nfont: inherit;\nborder-radius: 4px;\nfont-weight:700;\nfont-size:18px;\nborder:",";\nbackground-color:",";\ncursor:pointer;\n  transition: ",",\n    ",";\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n    transform: scale(1.1);\n  }\n"])),(function(n){return"3px solid ".concat(n.theme.colors.BorderColor)}),(function(n){return n.theme.colors.ButtonColor}),(function(n){return"transform".concat(n.theme.animation," ").concat(n.theme.time)}),(function(n){return"box-shadow".concat(n.theme.animation," ").concat(n.theme.time)}),(function(n){return"0 0 10px".concat(n.theme.colors.white)})),q=function(n){Object(b.a)(e,n);var t=Object(f.a)(e);function e(){var n;Object(d.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=t.call.apply(t,[this].concat(r))).state={name:"",number:""},n.nameInputId=Object(N.a)(),n.numberInputId=Object(N.a)(),n.handleChangeName=function(t){var e=t.currentTarget,o=e.name,r=e.value;n.setState(Object(F.a)({},o,r))},n.handleSubmit=function(t){t.preventDefault();var e=n.state,o=e.name,r=e.number,a={id:Object(N.a)(),name:o,number:r};n.props.onSubmit(a),n.reset()},n.reset=function(){n.setState({name:""}),n.setState({number:""})},n}return Object(h.a)(e,[{key:"render",value:function(){return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)(D,{children:[Object(O.jsx)("label",{htmlFor:this.nameInputId,children:"Name"}),Object(O.jsx)(J,{type:"text",name:"name",id:this.nameInputId,value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChangeName})]}),Object(O.jsxs)(D,{children:[Object(O.jsx)("label",{htmlFor:this.numberInputId,children:"Number"}),Object(O.jsx)(J,{type:"tel",name:"number",id:this.numberInputId,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChangeName})]}),Object(O.jsx)(Z,{type:"submit",children:"Add contact"})]})}}]),e}(a.Component),E=x.a.ul(I||(I=Object(p.a)(["\nlist-style:none;\npadding:0;\n"]))),L=x.a.li(z||(z=Object(p.a)(["\ndisplay:flex;\nalign-items:baseline;\n&:not(:last-child){\n    margin-bottom:10px;\n}"]))),M=x.a.button(S||(S=Object(p.a)(["\nmargin: 0;\nmargin-left:8px;\npadding:3px;\nwidth:80px;\nfont: inherit;\nborder-radius: 4px;\nfont-weight:600;\nfont-size:18px;\nborder:",";\nbackground-color:",";\ncursor:pointer;\n  transition: ",",\n    ",";\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n    transform: scale(1.1);\n  }\n"])),(function(n){return"3px solid ".concat(n.theme.colors.BorderColor)}),(function(n){return n.theme.colors.ButtonColor}),(function(n){return"transform".concat(n.theme.colors.animation," ").concat(n.theme.colors.time)}),(function(n){return"box-shadow".concat(n.theme.colors.animation," ").concat(n.theme.colors.time)}),(function(n){return"0 0 10px".concat(n.theme.colors.white)})),T=x.a.p(k||(k=Object(p.a)(["\nmargin:0;\nfont-weight:600;\nfont-size:18px;\n"])));function V(n){var t=n.contacts,e=n.onDeleteContact;return Object(O.jsx)(E,{children:t.map((function(n){var t=n.id,o=n.name,r=n.number;return Object(O.jsxs)(L,{id:t,children:[Object(O.jsxs)(T,{children:[o,": ",r]}),Object(O.jsx)(M,{onClick:function(){return e(t)},children:"Delete"})]},t)}))})}var H=x.a.div(B||(B=Object(p.a)(["\ndisplay:flex;\nflex-direction:column;\nfont-weight:600;\nfont-size:18px;\n"]))),K=x.a.input(A||(A=Object(p.a)(["\nwidth:200px;\nmargin: 0;\nmargin-top:4px;\npadding:5px;\nfont: inherit;\nfont-size:18px;\nborder-radius: 4px;\nborder:",";\nbackground-color:",";\ntransition: ",",\n    ",";\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n    transform: scale(1);\n  }\n"])),(function(n){return"3px solid ".concat(n.theme.colors.BorderColor)}),(function(n){return n.theme.colors.InputColor}),(function(n){return"transform".concat(n.theme.colors.animation," ").concat(n.theme.colors.time)}),(function(n){return"box-shadow".concat(n.theme.colors.animation," ").concat(n.theme.colors.time)}),(function(n){return"0 0 10px".concat(n.theme.colors.white)}));function P(n){var t=n.value,e=n.onChange;return Object(O.jsxs)(H,{children:[Object(O.jsx)("label",{children:"Find contacts by name"}),Object(O.jsx)(K,{type:"text",value:t,onChange:e})]})}var R=function(n){Object(b.a)(e,n);var t=Object(f.a)(e);function e(){var n;Object(d.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.addContact=function(t){n.state.contacts.find((function(n){return n.name===t.name}))?alert("".concat(t.name,"is already in contacts")):n.setState((function(n){var e=n.contacts;return{contacts:[t].concat(Object(m.a)(e))}}))},n.deleteContact=function(t){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==t}))}}))},n.changeFilter=function(t){n.setState({filter:t.currentTarget.value})},n.getVisibleContact=function(){var t=n.state,e=t.filter,o=t.contacts,r=e.toLowerCase();return o.filter((function(n){return n.name.toLowerCase().includes(r)}))},n}return Object(h.a)(e,[{key:"render",value:function(){var n=this.getVisibleContact(),t=this.state.filter;return Object(O.jsxs)("div",{children:[Object(O.jsx)(C,{title:"Phonebook",children:Object(O.jsx)(q,{onSubmit:this.addContact})}),Object(O.jsxs)(C,{title:"Contacts",children:[Object(O.jsx)(P,{value:t,onChange:this.changeFilter}),Object(O.jsx)(V,{contacts:n,onDeleteContact:this.deleteContact})]})]})}}]),e}(a.Component);s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(u.b,{theme:l,children:Object(O.jsx)(R,{})})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.acb22822.chunk.js.map