(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={title:"Section_title__w_mjI"}},function(e,t,a){e.exports={wrapper:"Statistics_wrapper__2P_j1"}},function(e,t,a){e.exports={button:"FeedbackOptions_button__HQmWA"}},function(e,t,a){e.exports={message:"Notification_message__2bMpU"}},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),i=(a(17),a(7)),l=a(1),s=a(2),u=a(4),p=a(3),d=(a(18),a(8)),b=a.n(d),m=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.children;return o.a.createElement("div",null,o.a.createElement("h2",{className:b.a.title},t),a)}}]),a}(o.a.Component);m.defaultProps={title:""};var v=m,h=a(9),f=a.n(h),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.good,a=e.neutral,n=e.bad,r=e.total,c=e.positivePercentage;return o.a.createElement("div",{className:f.a.wrapper},o.a.createElement("p",null,"Good: ",t),o.a.createElement("p",null,"Neutral: ",a),o.a.createElement("p",null,"Bad: ",n," "),o.a.createElement("p",null,"Total: ",r),o.a.createElement("p",null,"Positive percentage: ",c,"%"))}}]),a}(o.a.Component),k=a(10),j=a.n(k),O=a(21),E=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onLeaveFeedback,a=e.options;return o.a.createElement("div",null,a.map((function(e){return o.a.createElement("button",{key:Object(O.a)(),onClick:t,name:e,className:j.a.button},e)})))}}]),a}(o.a.Component),w=a(11),y=a.n(w),_=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.message;return o.a.createElement("div",null,o.a.createElement("h2",{className:y.a.message},e))}}]),a}(o.a.Component),F=["good","neutral","bad"],P=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return e.state.good+e.state.bad+e.state.neutral},e.countPositiveFeedbackPercentage=function(){return 0===e.countTotalFeedback()?0:Math.round(e.state.good/e.countTotalFeedback()*100)},e.onLeaveFeedback=function(t){var a=t.target.name;e.setState((function(e,t){return Object(i.a)({},a,e[a]+t.step)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(v,{title:"Please leave feedback"},o.a.createElement(E,{options:F,onLeaveFeedback:this.onLeaveFeedback})),0===this.countTotalFeedback()?o.a.createElement(_,{message:"No feedback given"}):o.a.createElement(v,{title:"Statistics"},o.a.createElement(g,{good:this.state.good,bad:this.state.bad,neutral:this.state.neutral,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,{step:1})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.ce51a5aa.chunk.js.map