(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{111:function(e,t,n){"use strict";var r=n(2).b.button.withConfig({displayName:"SickButton",componentId:"l04z44-0"})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"]);t.a=r},27:function(e,t,n){"use strict";var r=n(5),a=n.n(r),o=n(0),i=n.n(o),u=n(1),l=n(3),c=n.n(l),s=n(13),f=n(10),p=n(6);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n,r,a,o,i){try{var u=e[o](i),l=u.value}catch(e){return void n(e)}u.done?t(l):Promise.resolve(l).then(r,a)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    signin(email: $email, password: $password) {\n      id\n      email\n      name\n    }\n  }\n"]);return g=function(){return e},e}var w=c()(g()),O=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return r=this,a=(e=y(t)).call.apply(e,[this].concat(i)),n=!a||"object"!==m(a)&&"function"!=typeof a?E(r):a,v(E(E(n)),"state",{password:"",email:""}),v(E(E(n)),"saveToState",function(e){n.setState(v({},e.target.name,e.target.value))}),n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this;return i.a.createElement(u.Mutation,{mutation:w,variables:this.state,refetchQueries:[{query:p.a}]},function(t,n){var r=n.error,o=n.loading;return i.a.createElement(s.a,{method:"post",onSubmit:function(){var n,r=(n=a.a.mark(function n(r){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,t();case 3:e.setState({name:"",email:"",password:""});case 4:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function i(e){d(o,r,a,i,u,"next",e)}function u(e){d(o,r,a,i,u,"throw",e)}i(void 0)})});return function(e){return r.apply(this,arguments)}}()},i.a.createElement("fieldset",{disabled:o,"aria-busy":o},i.a.createElement("h2",null,"Sign In on your Account"),i.a.createElement(f.a,{error:r}),i.a.createElement("label",{htmlFor:"email"},"Email",i.a.createElement("input",{type:"email",name:"email",placeholder:"email",value:e.state.email,onChange:e.saveToState})),i.a.createElement("label",{htmlFor:"password"},"Password",i.a.createElement("input",{type:"password",name:"password",placeholder:"password",value:e.state.password,onChange:e.saveToState})),i.a.createElement("button",{type:"submit"},"Sign in!")))})}}])&&b(n.prototype,r),l&&b(n,l),t}();t.a=O},42:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n(6),u=n(27);t.a=function(e){return a.a.createElement(o.Query,{query:i.a},function(t){var n=t.data;return t.loading?a.a.createElement("p",null,"Loading..."):n.me?e.children:a.a.createElement("div",null,a.a.createElement("p",null,"Please Sign In before continuing"),a.a.createElement(u.a,null))})}},711:function(e,t,n){__NEXT_REGISTER_PAGE("/permissions",function(){return e.exports=n(725),{page:e.exports.default}})},725:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(42),i=n(1),u=n(10),l=n(3),c=n.n(l),s=n(2).b.table.withConfig({displayName:"Table",componentId:"sc-1jvbtk5-0"})(["border-spacing:0;width:100%;border:1px solid ",";thead{font-size:10px;}td,th{border-bottom:1px solid ",";border-right:1px solid ",";padding:5px;position:relative;&:last-child{border-right:none;width:150px;button{width:100%;}}label{padding:10px 5px;display:block;}}tr{&:hover{background:",";}}"],function(e){return e.theme.offWhite},function(e){return e.theme.offWhite},function(e){return e.theme.offWhite},function(e){return e.theme.offWhite}),f=n(111);n(4);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){var e=w(["\n  query {\n    users {\n      id\n      name\n      email\n      permissions\n    }\n  }\n"]);return v=function(){return e},e}function g(){var e=w(["\nmutation updatePermissions($permissions:[Permission],$userId:ID!){\n  updatePermissions(permissions:$permissions,userId:$userId){\n    id\n    permissions\n    name\n    email\n  }\n}"]);return g=function(){return e},e}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var O=["ADMIN","USER","ITEMCREATE","ITEMUPDATE","ITEMDELETE","PERMISSIONUPDATE"],S=c()(g()),P=c()(v()),j=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return r=this,a=(e=b(t)).call.apply(e,[this].concat(i)),n=!a||"object"!==p(a)&&"function"!=typeof a?h(r):a,E(h(h(n)),"state",{permissions:n.props.user.permissions}),E(h(h(n)),"handlePermissionChange",function(e){var t=e.target,r=m(n.state.permissions);t.checked?r.push(t.value):r=r.filter(function(e){return e!==t.value}),n.setState({permissions:r}),console.log(r)}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props.user;return a.a.createElement(i.Mutation,{mutation:S,variables:{permissions:this.state.permissions,userId:this.props.user.id}},function(n,r){var o=r.loading,i=r.error;return a.a.createElement(a.a.Fragment,null,i&&a.a.createElement("tr",null,a.a.createElement("td",{colspan:"8"},a.a.createElement(u.a,{error:i}))),a.a.createElement("tr",null,a.a.createElement("td",null,t.name),a.a.createElement("td",null,t.email),O.map(function(n){return a.a.createElement("td",{key:n},a.a.createElement("label",{htmlFor:"".concat(t.id,"-permission-").concat(n)},a.a.createElement("input",{id:"".concat(t.id,"-permission-").concat(n),type:"checkbox",checked:e.state.permissions.includes(n),value:n,onChange:e.handlePermissionChange})))}),a.a.createElement("td",null,a.a.createElement(f.a,{type:"button",disabled:o,onClick:n},"Updat",o?"ing":"e"))))})}}])&&d(n.prototype,r),o&&d(n,o),t}(),k=function(e){return a.a.createElement(i.Query,{query:P},function(e){var t=e.data,n=(e.loading,e.error);return a.a.createElement("div",null,a.a.createElement(u.a,{error:n}),a.a.createElement("div",null,a.a.createElement("h2",null,"Manage Permissions"),a.a.createElement(s,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Email"),O.map(function(e){return a.a.createElement("th",{key:e},e)}),a.a.createElement("th",null,"👇🏻"))),a.a.createElement("tbody",null,t.users.map(function(e){return a.a.createElement(j,{user:e,key:e.id})})))))})};t.default=function(e){return a.a.createElement("div",null,a.a.createElement(o.a,null,a.a.createElement(k,null)))}}},[[711,1,0]]]);