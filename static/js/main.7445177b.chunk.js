(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={button:"FeedbackOptions_button__HQmWA"}},,,function(e,t,a){e.exports={title:"Section_title__w_mjI"}},function(e,t,a){e.exports={wrapper:"Statistics_wrapper__2P_j1"}},function(e,t,a){e.exports={message:"Notification_message__2bMpU"}},function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),i=(a(16),a(1)),s=a(2),l=a(4),u=a(3),d=(a(17),a(8)),b=a.n(d),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.children;return o.a.createElement("div",null,o.a.createElement("h2",{className:b.a.title},t),a)}}]),a}(o.a.Component);p.defaultProps={title:""};var h=p,m=a(9),v=a.n(m),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.good,a=e.neutral,n=e.bad,r=e.total,c=e.positivePercentage;return o.a.createElement("div",{className:v.a.wrapper},o.a.createElement("h2",null,"Statistics"),o.a.createElement("p",null,"Good: ",t),o.a.createElement("p",null,"Neutral: ",a),o.a.createElement("p",null,"Bad: ",n," "),o.a.createElement("p",null,"Total: ",r),o.a.createElement("p",null,"Positive percentage: ",c,"%"))}}]),a}(o.a.Component),k=a(5),g=a.n(k),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.onLeaveFeedback;return o.a.createElement("div",null,o.a.createElement("button",{onClick:e,"data-action":"good",className:g.a.button},"Good"),o.a.createElement("button",{onClick:e,"data-action":"neutral",className:g.a.button},"Neutral"),o.a.createElement("button",{onClick:e,"data-action":"bad",className:g.a.button},"Bad"))}}]),a}(o.a.Component),E=a(10),O=a.n(E),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.message;return o.a.createElement("div",null,o.a.createElement("h2",{className:O.a.message},e))}}]),a}(o.a.Component),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={good:0,neutral:0,bad:0},e}return Object(s.a)(a,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.bad+this.state.neutral}},{key:"countPositiveFeedbackPercentage",value:function(){return 0===this.countTotalFeedback()?0:Math.round(this.state.good/this.countTotalFeedback()*100)}},{key:"onLeaveFeedback",value:function(e){var t=e.target;"good"===t.dataset.action?this.setState((function(e,t){return{good:e.good+t.step}})):"neutral"===t.dataset.action?this.setState((function(e,t){return{neutral:e.neutral+t.step}})):this.setState((function(e,t){return{bad:e.bad+t.step}}))}},{key:"render",value:function(){return o.a.createElement(h,{title:"Please leave feedback"},o.a.createElement(j,{onLeaveFeedback:this.onLeaveFeedback.bind(this)}),0===this.countTotalFeedback()?o.a.createElement(y,{message:"No feedback given"}):o.a.createElement(f,{good:this.state.good,bad:this.state.bad,neutral:this.state.neutral,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,{step:1})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.7445177b.chunk.js.map