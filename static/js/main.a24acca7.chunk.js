(this.webpackJsonpsiran_with_template=this.webpackJsonpsiran_with_template||[]).push([[0],{14:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(3),i=r.n(s),u=(r(14),r(4)),o=r(5),c=r(8),l=r(7),g=r(6),v=r.n(g),f=r(1),b=r.n(f),S=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(u.a)(this,r),(a=t.call(this,e)).assignedvalue=function(e){if("Name"==e.currentTarget.dataset.type.toString()){var t=e.currentTarget.value;""!=t?(a.setState((function(e){var r=Object.assign({},e.value);return r.Name=t,{value:r}})),a.setState((function(e){var t=Object.assign({},e.error);return t.Name="",{error:t}}))):a.setState((function(e){var t=Object.assign({},e.error);return t.Name="Please Enter your name",{error:t}}))}if("Email"==e.currentTarget.dataset.type.toString()){var r=e.currentTarget.value;""!=r?(a.setState((function(e){var t=Object.assign({},e.value);return t.MailID=r,{value:t}})),a.setState((function(e){var t=Object.assign({},e.error);return t.MailID="",{error:t}}))):a.setState((function(e){var t=Object.assign({},e.error);return t.MailID="Please Enter your Mail",{error:t}}))}if("subject"==e.currentTarget.dataset.type.toString()){var n=e.currentTarget.value;""!=n?(a.setState((function(e){var t=Object.assign({},e.value);return t.Subject=n,{value:t}})),a.setState((function(e){var t=Object.assign({},e.error);return t.Subject="",{error:t}}))):a.setState((function(e){var t=Object.assign({},e.error);return t.Subject="Please Enter Subject",{error:t}}))}if("Message"==e.currentTarget.dataset.type.toString()){var s=e.currentTarget.value;""!=s?(a.setState((function(e){var t=Object.assign({},e.value);return t.Message=s,{value:t}})),a.setState((function(e){var t=Object.assign({},e.error);return t.Message="",{error:t}}))):a.setState((function(e){var t=Object.assign({},e.error);return t.Message="Please Enter Message",{error:t}}))}},a.sendmail=function(e){a.setState({loadingstatus:!0}),e.preventDefault();var t=!1;if(""==a.state.value.Name&&(t=!0,a.setState((function(e){var t=Object.assign({},e.error);return t.Name="Please Enter Name",{error:t}}))),""==a.state.value.MailID&&(t=!0,a.setState((function(e){var t=Object.assign({},e.error);return t.MailID="Please Enter Mail ID",{error:t}}))),""==a.state.value.Subject&&(t=!0,a.setState((function(e){var t=Object.assign({},e.error);return t.Subject="Please Enter Subject",{error:t}}))),""==a.state.value.Message&&(t=!0,a.setState((function(e){var t=Object.assign({},e.error);return t.Message="Please Enter Message",{error:t}}))),new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(a.state.value.MailID)||(t=!0,a.setState((function(e){var t=Object.assign({},e.error);return t.MailID="Please Enter valid email address.",{error:t}}))),1==t)return!1;var r=e.target;v.a.sendForm("gmail","template_ybxblbn",e.target,"user_UphYegg5nyIVFIapd55Pw").then((function(e){a.setState({loadingstatus:!1}),console.log(e.text),"OK"==e.text&&"200"==e.status?b.a.fire({title:"Success!",text:"Your Mail Send Sucessfully.",type:"success",icon:"success"}).then((function(){r.reset()})):b.a.fire({title:"Failure!",text:"Unable to send mail. Please try again later.",type:"error",icon:"error"}).then((function(){r.reset()}))}),(function(e){a.setState({loadingstatus:!1}),b.a.fire({title:"Failure!",text:"Problem occured while send mail. Please try again later.",type:"error",icon:"error"}).then((function(){r.reset()}))}))},a.state={value:{Name:"",MailID:"",Subject:"",Message:""},error:{Name:"",MailID:"",Subject:"",Message:""},MailStatus:"",loadingstatus:!1},a}return Object(o.a)(r,[{key:"render",value:function(){return n.a.createElement("div",null)}}]),r}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,r){e.exports=r(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.a24acca7.chunk.js.map