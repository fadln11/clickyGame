(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"https://media.giphy.com/media/RVW5PilbP2tLG/giphy.gif"},{id:2,image:"https://media.giphy.com/media/JPsFUPp3vLS5q/giphy.gif"},{id:3,image:"https://media.giphy.com/media/UUVqDm2xhyU36/giphy.gif"},{id:4,image:"https://media.giphy.com/media/w5M9QgelugIJG/giphy.gif"},{id:5,image:"https://media.giphy.com/media/113PoJxEaRxKbm/giphy.gif"},{id:6,image:"https://media.giphy.com/media/8B1aIqkaHw8ec/giphy.gif"},{id:7,image:"https://media.giphy.com/media/C4msBrFb6szHG/giphy.gif"},{id:8,image:"https://media.giphy.com/media/11ykUODgXjAXZu/giphy.gif"},{id:9,image:"https://media.giphy.com/media/TC3Y19Y0BuTdu/giphy.gif"},{id:10,image:"https://media.giphy.com/media/8IqEMUfybiNri/giphy.gif"},{id:11,image:"https://media.giphy.com/media/26xBNnrR0VknSQo9i/giphy.gif"},{id:12,image:"https://media.giphy.com/media/SWPwSP6poA1nG/giphy.gif"}]},,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(8),r=a.n(n),s=a(1),o=a(2),m=a(4),d=a(3),l=a(5),p=(a(15),function(e){return c.a.createElement("div",{className:"card col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"},c.a.createElement("img",{className:"img-container",src:e.src,id:e.id,alt:e.alt,onClick:e.handleClick}))}),g=a(6),u=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e){var t=e.target.id;a.state.selectedImages.includes(t)?(a.setState({score:0,selectedImages:[]}),a.props.updateTopScore(a.state.score),a.props.updateCurrentScore(0),a.props.updateMessage("Incorrect... Click an image to start again!")):(a.setState({selectedImages:a.state.selectedImages.concat([t]),score:a.state.score+1}),a.props.updateCurrentScore(a.state.score+1),a.props.updateMessage("Correct!!")),a.setState({imgs:a.state.imgs.sort(function(){return Math.random()-.5})})},a.state={score:0,topScore:0,imgs:g,selectedImages:[]},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mb-5"},g.map(function(t){return c.a.createElement(p,{src:t.image,key:t.id,id:t.id,alt:t.name,handleClick:e.handleClick})})))}}]),t}(i.Component),h=function(e){return c.a.createElement("header",{className:"header text-center",id:"header-container"},c.a.createElement("h1",null,c.a.createElement("b",null,"Clicky Game")),c.a.createElement("h3",{className:"subtitle"},"Click on an image to earn points, but don't click on any more than once!"))},f=function(e){return c.a.createElement("footer",{className:"footer text-left",id:"footer-container"},c.a.createElement("div",{className:"bottom"},"Clicky Game"))},y=function(e){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark fixed-top bg-dark"},c.a.createElement("a",{className:"navbar-brand mr-5",href:"/",id:"logo"},c.a.createElement("h3",null,"Clicky Game")),c.a.createElement("h5",{className:"navbar-brand"},e.message),c.a.createElement("h4",{className:"ml-auto mt-2",id:"counters"},"Score: ",e.score," | Top score: ",e.topScore))},b=(a(16),function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={topScore:0,score:0,message:"Click an image to begin!"},a.updateMessage=function(e){a.setState({message:e})},a.updateCurrentScore=function(e){a.setState({score:e})},a.updateTopScore=function(e){e>a.state.topScore&&a.setState({topScore:e})},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(y,{message:this.state.message,score:this.state.score,topScore:this.state.topScore}),c.a.createElement(h,null),c.a.createElement(u,{updateMessage:this.updateMessage,updateCurrentScore:this.updateCurrentScore,updateTopScore:this.updateTopScore}),c.a.createElement(f,null))}}]),t}(i.Component));a(17);r.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.98162498.chunk.js.map