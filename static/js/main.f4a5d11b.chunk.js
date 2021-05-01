(this["webpackJsonpm68k-interpreter"]=this["webpackJsonpm68k-interpreter"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),d=c(2),i=c(19),j=c.n(i),s=c(3),r=c(4),l=c(7),a=c(6),h=c(8),b=c(5),x=function(e){Object(l.a)(c,e);var t=Object(a.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"navbar-commands",children:[Object(n.jsx)("button",{id:"run",className:"command-icons",onClick:window.go,children:Object(n.jsx)(h.a,{icon:b.e})}),Object(n.jsx)("button",{id:"undo",className:"command-icons",onClick:window.undo,children:Object(n.jsx)(h.a,{icon:b.i})}),Object(n.jsx)("button",{id:"step",className:"command-icons",onClick:window.step,children:Object(n.jsx)(h.a,{icon:b.g})}),Object(n.jsx)("button",{id:"reset",className:"command-icons",onClick:window.reset,children:Object(n.jsx)(h.a,{icon:b.h})})]})}}]),c}(d.Component),O=function(e){Object(l.a)(c,e);var t=Object(a.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{id:"navbar-dots",children:[Object(n.jsx)("button",{id:"showMMIO",className:"tools-icons",onClick:window.showMMIO,children:Object(n.jsx)(h.a,{icon:b.c})}),Object(n.jsx)("button",{id:"showmemory",className:"tools-icons",onClick:window.showmemory,children:Object(n.jsx)(h.a,{icon:b.d})}),Object(n.jsx)("a",{href:"/help.html",className:"tools-icons",children:Object(n.jsx)(h.a,{icon:b.f})})]})}}]),c}(d.Component),o=function(e){Object(l.a)(c,e);var t=Object(a.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("nav",{id:"navbar",children:[Object(n.jsx)(x,{}),Object(n.jsx)("h1",{id:"title-page",children:"M68k Interpreter"}),Object(n.jsx)(O,{})]})}}]),c}(d.Component),u=c(20),m=c.n(u),p=(c(37),c(38),function(e){Object(l.a)(c,e);var t=Object(a.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"onChange",value:function(e){window.editor=e}},{key:"setDefaultValue",value:function(){return"Org $1000 \n * your code goes here * \n END"}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"editor",children:[Object(n.jsx)("h3",{className:"text-editor-txt",children:"Text Editor"}),Object(n.jsx)(m.a,{mode:"m68k",theme:"monokai",width:"100%",height:"93%",id:"editor",onChange:this.onChange,name:"editor",editorProps:{$blockScrolling:!0},fontSize:"12pt",defaultValue:this.setDefaultValue()})]})}}]),c}(d.Component)),y=c(21),v=c(13),C=function(e){Object(l.a)(c,e);var t=Object(a.a)(c);function c(e){var n;return Object(s.a)(this,c),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(r.a)(c,[{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.value,e.target.value))}},{key:"render",value:function(){return Object(n.jsxs)("div",{id:"registers-section",children:[Object(n.jsxs)("div",{id:"registers-header",children:[Object(n.jsx)("h3",{children:"Register Set"}),Object(n.jsxs)("div",{id:"register-download-bt",children:[Object(n.jsx)("a",{href:"/null",id:"registerDownload",children:"  "}),Object(n.jsxs)("button",{id:"registerDownload",className:"btn btn-primary btn-lg",onClick:window.registersDownload,children:[" ",Object(n.jsx)("p",{children:"Download"})," ",Object(n.jsx)(h.a,{icon:b.b})," "]})]})]}),Object(n.jsxs)("table",{className:"table table-hover table-condensed registers-table",id:"register-table",children:[Object(n.jsx)("thead",{id:"registers-head",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Decimal Value"}),Object(n.jsx)("th",{children:"Register"}),Object(n.jsx)("th",{children:"Hex"})]})}),Object(n.jsxs)("tbody",{id:"registers",children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"0",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"a0"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"1",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"a1"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"2",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"a2"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"3",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"a3"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"4",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"a4"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"5",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"a5"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"6",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"a6"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"7",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"a7"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"8",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"d0"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"9",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"d1"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"10",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"d2"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"11",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"d3"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"12",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"d4"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"13",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"d5"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"14",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"d6"}),Object(n.jsx)("td",{children:"0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{id:"15",className:"init-value",type:"text",defaultValue:"0",onChange:this.handleChange})}),Object(n.jsx)("td",{children:"d7"}),Object(n.jsx)("td",{children:"0"})]})]}),Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{id:"PC",children:[Object(n.jsx)("td",{children:"0"}),Object(n.jsx)("td",{children:"PC"}),Object(n.jsx)("td",{children:"0"})]})})]})]})}}]),c}(d.Component),g=function(e){Object(l.a)(c,e);var t=Object(a.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{id:"text-try",children:[Object(n.jsx)("div",{id:"last_instruction",className:"last_instruction",children:"L'istruzione pi\xf9 recente verr\xe0 mostrata qui!"}),Object(n.jsxs)("div",{id:"delayHelp",children:[Object(n.jsx)("input",{type:"number",id:"delay",defaultValue:"0",placeholder:"0"}),"Delay Time",Object(n.jsx)(h.a,{icon:b.a,size:"xl",id:"clock-icon"})]})]})}}]),c}(d.Component),f=function(e){Object(l.a)(c,e);var t=Object(a.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{id:"memory-area-container",style:{display:"none"},children:Object(n.jsx)("div",{id:"memory-area",children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{id:"memory-area-header",children:[Object(n.jsxs)("div",{id:"memory-address-head",children:[Object(n.jsx)("label",{children:"Memory Address"}),Object(n.jsx)("input",{type:"text",id:"memory-address",className:"form-control",placeholder:"0x00000000",defaultValue:"0x00000000"})]}),Object(n.jsxs)("div",{id:"memory-btn-section",children:[Object(n.jsx)("button",{id:"memory-go",className:"memory-btn",onClick:window.moveMemory,children:"Go"}),Object(n.jsx)("button",{id:"memory-next",className:"memory-btn",onClick:window.memoryPrevious,children:"<"}),Object(n.jsx)("button",{id:"memory-previous",className:"memory-btn",onClick:window.memoryNext,children:">"}),Object(n.jsx)("button",{id:"memory-download",className:"memory-btn",onClick:window.memoryDownload,children:"Download"})]})]}),Object(n.jsx)("div",{id:"memory-table",className:"table-responsive",children:Object(n.jsxs)("table",{id:"memory-table-f",children:[Object(n.jsx)("thead",{id:"memory-head",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Memory Address"}),Object(n.jsx)("th",{children:"Decimal"}),Object(n.jsx)("th",{children:"Hex"}),Object(n.jsx)("th",{children:"Binary"}),Object(n.jsx)("th",{children:"ASCII"})]})}),Object(n.jsxs)("tbody",{id:"memory",children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"0x00000000"}),Object(n.jsx)("td",{children:"0"}),Object(n.jsx)("td",{children:"0x00"}),Object(n.jsx)("td",{children:"00000000"}),Object(n.jsx)("td",{children:" "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"0x00000001"}),Object(n.jsx)("td",{children:"0"}),Object(n.jsx)("td",{children:"0x00"}),Object(n.jsx)("td",{children:"00000000"}),Object(n.jsx)("td",{children:" "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"0x00000002"}),Object(n.jsx)("td",{children:"0"}),Object(n.jsx)("td",{children:"0x00"}),Object(n.jsx)("td",{children:"00000000"}),Object(n.jsx)("td",{children:" "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"0x00000003"}),Object(n.jsx)("td",{children:"0"}),Object(n.jsx)("td",{children:"0x00"}),Object(n.jsx)("td",{children:"00000000"}),Object(n.jsx)("td",{children:" "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"0x00000004"}),Object(n.jsx)("td",{children:"0"}),Object(n.jsx)("td",{children:"0x00"}),Object(n.jsx)("td",{children:"00000000"}),Object(n.jsx)("td",{children:" "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"0x00000005"}),Object(n.jsx)("td",{children:"0"}),Object(n.jsx)("td",{children:"0x00"}),Object(n.jsx)("td",{children:"00000000"}),Object(n.jsx)("td",{children:" "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"0x00000006"}),Object(n.jsx)("td",{children:"0"}),Object(n.jsx)("td",{children:"0x00"}),Object(n.jsx)("td",{children:"00000000"}),Object(n.jsx)("td",{children:" "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"0x00000007"}),Object(n.jsx)("td",{children:"0"}),Object(n.jsx)("td",{children:"0x00"}),Object(n.jsx)("td",{children:"00000000"}),Object(n.jsx)("td",{children:" "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"0x00000008"}),Object(n.jsx)("td",{children:"0"}),Object(n.jsx)("td",{children:"0x00"}),Object(n.jsx)("td",{children:"00000000"}),Object(n.jsx)("td",{children:" "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"0x00000009"}),Object(n.jsx)("td",{children:"0"}),Object(n.jsx)("td",{children:"0x00"}),Object(n.jsx)("td",{children:"00000000"}),Object(n.jsx)("td",{children:" "})]})]})]})})]})})})}}]),c}(d.Component),w=function(e){Object(l.a)(c,e);var t=Object(a.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{id:"mmio-area-container",style:{display:"none"},children:Object(n.jsxs)("div",{id:"mmio-area",children:[Object(n.jsxs)("div",{id:"mmio-area-head",children:[Object(n.jsxs)("div",{id:"display-txt",children:[Object(n.jsx)("h1",{children:"Display"}),Object(n.jsx)("p",{children:"Bla bla bla "})]}),Object(n.jsxs)("div",{id:"keyboard-txt",children:[Object(n.jsx)("h1",{children:"Keyboard"}),Object(n.jsx)("p",{children:"Bla bla bla"})]})]}),Object(n.jsxs)("div",{id:"mmio-area-body",children:[Object(n.jsx)("div",{id:"display-output",children:Object(n.jsx)("textarea",{id:"display",children:"CAO\xe9PSJ"})}),Object(n.jsx)("div",{id:"keyboard-input",children:Object(n.jsx)("textarea",{id:"keyboard",children:"CIAO"})})]})]})})}}]),c}(d.Component),N=function(e){Object(l.a)(c,e);var t=Object(a.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(o,{}),Object(n.jsxs)("div",{className:"div-parent-editor",children:[Object(n.jsx)(p,{}),Object(n.jsx)(C,{})]}),Object(n.jsx)(g,{}),Object(n.jsx)(f,{}),Object(n.jsx)(w,{})]})}}]),c}(d.Component);c(39);j.a.render(Object(n.jsx)(N,{}),document.querySelector("#root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f4a5d11b.chunk.js.map