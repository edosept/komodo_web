
(function(h,kb){function ta(){return{effect:"slide",speed:1500,customLink:!1,controlsFadeSpeed:400,controlsFade:!0,insertAfter:!0,vertical:!1,slideCount:1,moveCount:1,startSlide:1,responsive:!0,ease:"swing",auto:!1,pause:2E3,resumePause:!1,continuous:!1,prevNext:!0,numeric:!1,numericText:[],slices:15,boxCols:8,boxRows:4,initCallback:R,ajaxLoad:R,beforeAnimation:R,afterAnimation:R,history:!1,autoHeight:!0,autoWidth:!0,updateBefore:!1,ajax:!1,preloadAjax:100,loadingText:"",prevHtml:'<a href="#" class="prevBtn"> previous </a>',
nextHtml:'<a href="#" class="nextBtn"> next </a>',controlsAttr:'class="controls"',numericAttr:'class="numericControls"',interruptible:!1,useCSS:!0,loadStart:R,loadFinish:R,touch:!1,touchHandle:!1,destroyCallback:R,mouseTouch:!0,allowScroll:!0,CSSease:"swing"}}function la(a,b,c,e,E){if(h.isFunction(b))e?la(a,["","Up","Right","Down","Left",b],c,0,E):a[c]=function(a){var c=[a].concat(E),k=c.length-1;if(0===e&&0==c[k]){var h=a.diff;c[k]=a.options.vertical?0>h?1:3:0>h?2:4}b.apply(this,c)};else if(h.isArray(b))for(var k=
b.length-1,q=b[k],m=0;m<k;m++){var p=E.slice();p.push(m);la(a,q,c+b[m],e,p)}else h.each(b,function(b,k){la(a,k,c+b,e,E)})}function ma(a,b,c,e,E,k,q,m,p){var r=a.options,w=r.boxrows,l=r.boxcols,g=w*l,x=r.speed/(1==g?1:2.5),u=Ia(a,l,w,!m),n=r=0,y=0,H=[];H[n]=[];b&&fa(u);E&&qa(u);for(var v=0;v<u.length;v++)H[n][y]=u[v],y++,y==l&&(c&&fa(H[n]),n++,y=0,H[n]=[]);n=[];if(1==k)for(u=0;u<2*l+1;u++){g=u;v=[];for(k=0;k<w;k++){if(0<=g&&g<l){y=H[k][g];if(!y)return;v.push(y)}g--}0!=v.length&&n.push(v)}else if(2==
k){var H=w/2,y=b?g:-1,Z=b?-1:1;for(k=0;k<H;k++){for(g=v=k;g<l-k-1;g++)n[y+=Z]=u[v*l+g];g=l-k-1;for(v=k;v<w-k-1;v++)n[y+=Z]=u[v*l+g];v=w-k-1;for(g=l-k-1;g>k;g--)n[y+=Z]=u[v*l+g];g=k;for(v=w-k-1;v>k;v--)n[y+=Z]=u[v*l+g]}}else for(u=0;u<w;u++)for(g=0;g<l;g++)n.push([H[u][g]]);m&&a.goToNext();for(var D=0,v=0;v<n.length;v++){w=n[v];h.isArray(w)||(w=[w]);for(l=0;l<w.length;l++)(function(k,h){function l(h){var g=k(),w=g.children(),n=g.width(),v=g.height(),r=n,u=v,y=ga(g.css("left")),H=ga(g.css("top")),A=
y,Z=H,P=ga(w.css("left")),z=ga(w.css("top")),N=P,Q=z;if(q){var aa,R;E?(R=xa([-r,r]),aa=xa([-u,u])):(R=b!=c?-r:r,aa=b?-u:u);m?(A-=1.5*R,Z-=1.5*aa):g.css({left:y+1.5*R,top:H+1.5*aa})}e&&(m?(N-=r/2,A+=r/2,Q-=u/2,Z+=u/2,u=r=0):(g.css({left:y+r/2,top:H+u/2}),w.css({left:P-r/2,top:z-u/2}),g.width(0).height(0),p&&g.css({borderRadius:U(v,n)})));m&&g.css({opacity:1});D++;ra(function(){Ka.ready(function(){S(w,{left:N,top:Q},x,!1,!1,a);S(g,{opacity:m?0:1,width:r,height:u,left:A,top:Z,borderRadius:e&&m&&p?U(v,
n):0},x,!1,function(){D--;0==D&&a.callback()},a)})},h)}m||150>h?l(h):ra(N(l,[150]),h-150)})(w[l],r);r+=x/n.length*1.5}}function ba(a,b,c,e,E,k,q,m){for(var p=a.options,r=p.slices,w=p.speed/2,p=a.slider,l=Ia(a,b?r:1,b?1:r,!m),g=h(),x=0;x<l.length;x++)g=g.add(l[x]());var u=0,n=!1;c?fa(g):h(fa(g.get())).appendTo(p);e&&qa(g);g.each(function(e){e*=w/r;var g=h(this),l=g.width(),p=g.height(),x=g.css("left"),D=g.css("top"),A=b?x:D,P=g.children()[b?"width":"height"]();1==k?A=0:2==k&&(A=P/2);c&&(A=P-A);b?g.css({width:E||
q?l:0,left:A}):g.css({height:E||q?p:0,top:A});m&&(A=1==q?-1:1,g.css({top:D,left:x,width:l,height:p,opacity:1}),b?D=A*p:x=A*l);q&&(A=!0,3==q?n=n?A=!1:!0:2==q&&(A=!1),b?m?D=(A?-1:1)*p:g.css({bottom:A?0:p,top:A?p:0,height:m?p:0}):m?x=(A?-1:1)*l:g.css({right:A?0:l,left:A?l:0,width:m?l:0}));u++;ra(N(S,[g,{width:l,height:p,opacity:m?0:1,left:x,top:D},w,!1,function(){u--;0==u&&a.callback()},a]),e)});m&&a.goToNext()}function ya(a,b,c){var e=2==c||4==c;c=2==c||3==c?1:-1;var h=a.options.speed,k=a.callback;
if(b){b=a.fromSlides;var q=da(a,!0).hide();a.slider.append(q);var m=U(q.height(),b.height()),p=U(q.width(),b.width());q.css(e?{left:c*p}:{top:c*m}).show();S(q,{left:0,top:0},h,!1,k,a)}else b=da(a,!1),a.slider.append(b),a.goToNext(),q=a.toSlides,q=-1==c?b:q,m=q.height(),p=q.width(),S(b,e?{left:c*p}:{top:c*m},h,!1,k,a)}function $a(a){var b=La(a.slider),c=a.options.speed,e=a.target,h=e.left,e=e.top;a.options.usecss?S(b,{transform:"translate("+h+"px, "+e+"px)"},c,!1,a.callback,a,!0):S(b,{marginTop:e,
marginLeft:h},c,!1,a.callback,a)}function S(a,b,c,e,h,k,q){function m(){if(!q){var b={};b[l]="0s";b[g]="";b[w]="";a.css(b)}}var p=!k||k.options.usecss;if(!1!==ha&&p){e||(e=k.options.cssease);var r={},w=ha+"transition",p=Ma(b);r[w]=p.join(" ")+(""==ha?"":" "+ha+p.join(" "+ha));var l=w+"-duration";r[l]=c+"ms";var g=w+"-timing-function";"swing"==e&&(e="ease-in-out");r[g]=e;k&&k.stopCallbacks.push(m);e=ha.replace(/\-/g,"");var x=e+((e?"T":"t")+"ransitionend")+" transitionend",u=!1,n=function(){u||(u=
!0,a.unbind(x),m(),h&&h())};if(20>c)a.css(b),n();else return z(function(){a.css(r);z(function(){a.css(b);var e=+new Date;a.on(x,function v(b){a.is(b.target)&&-100<+new Date-e-c&&(a.off(x,v),n())});setTimeout(n,c+100)})}),n}else e||(e=k.options.ease),a.animate(b,c,e,h)}function za(a,b){var c=a.options;c.boxcols=1;c.boxrows=1;c.speed=b;ma(a,!1)}function Ia(a,b,c,e){function E(b,c){m.push(function(){var g=da(a,e),g=Aa(g,l*b,w*c,l,w);k.append(g);return g})}var k=a.slider,q=a.options.vertical,m=[],p;p=
q?e?a.toSlides.width():a.slider.width():0;var r;r=q?0:e?a.toSlides.height():a.slider.height();a.toSlides.each(function(){var a=h(this);q?r+=a.height():p+=a.width()});for(var w=Math.ceil(p/b),l=Math.ceil(r/c),g=0;g<c;g++)for(var x=0;x<b;x++)E(g,x);return m}function Aa(a,b,c,e,E){a.css({width:a.width(),height:a.height(),display:"block",top:-b,left:-c});return h("<div>").css({left:c,top:b,width:E,height:e,opacity:0,overflow:"hidden",position:"absolute"}).append(a).addClass("sudo-box")}function da(a,
b){var c=b?a.toSlides:a.fromSlides,e=c.eq(0).position(),E=e.left,k=e.top,q=0,m=0,p=h("<div>").css({position:"absolute",top:0,left:0}).addClass("sudo-box");c.each(function(a,b){var c=h(b),e=c.outerWidth(!0),x=c.outerHeight(!0),u=c.clone(),n=c.position(),c=n.left-E,n=n.top-k;u.css({position:"absolute",left:c,top:n,opacity:1});q=U(q,n+x);m=U(m,c+e);p.append(u)});p.width(m).height(q);return p}function N(a,b){return function(){a.apply(na,b)}}function ia(a,b,c){if(a){a=a.add(a.find("img")).filter("img");
var e=a.length;e?a.each(function(){var a=h(this),k=function(){a.off("load error",k);e--;b?0==e&&c():c()};a.on("load error",k);if("complete"==this.readyState)a.trigger("load");else if(this.readyState)this.src=this.src;else if(this.complete)a.trigger("load");else if(this.complete===na){var q=this.src;this.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";this.src=q}}):c()}else c()}function yb(a){for(var b=h.fn.jquery.split("."),c=b.length,e=0;e<c;e++)if(a[e]&&+b[e]<+a[e])return!1;
return!0}function ab(a){return a.replace(/^\s+|\s+$/g,"")}function Ma(a){var b=[],c;for(c in a)b.push(c);return b}function z(a){setTimeout(a,0)}function ra(a,b){return setTimeout(a,b)}function fa(a){return[].reverse.call(a)}function La(a){return a.children().not(".sudo-box")}function Ba(a){var b={},c;for(c in a)b[c.toLowerCase()]=a[c];return b}function qa(a){for(var b,c,e=a.length;e;b=Math.random()*e|0,c=a[--e],a[e]=a[b],a[b]=c);return a}function D(a){return parseInt(a,10)}function ga(a){return parseFloat(a)}
function Ca(a,b){return(a%b+b)%b||0}function Q(a){return 0>a?-a:a}function U(a,b){return a>b?a:b}function Na(a,b){return a<b?a:b}function Oa(a){if(h.isArray(a))return oa(a);if(h.isFunction(a))return a;a=ab(a);if(-1!=a.indexOf(",")){var b=a.split(",");return oa(b)}var c=Ba(ea);a=ab(a.toLowerCase());if(b=c[a])return b;var b=[],e;for(e in c)e.match(new RegExp("^"+a.split("*").join(".*")+"$","g"))&&b.push(c[e]);return b.length?oa(b):$a}function oa(a){return function(b){var c=xa(a);return Oa(c)(b)}}function xa(a){return a[qa(Ma(a))[0]]}
function zb(a){var b="bez_"+a.join("_").replace(/\./g,"p"),c=h.easing;if(!h.isFunction(c[b])){var e=function(a,b){function c(q,l){r[l]=3*a[l];h[l]=3*(b[l]-a[l])-r[l];e[l]=1-r[l]-h[l];return q*(r[l]+q*(h[l]+q*e[l]))}var e=[0,0],h=[0,0],r=[0,0];return function(a){for(var b=a,g=0,k;14>++g;){k=c(b,0)-a;if(.001>Q(k))break;b-=k/(r[0]+b*(2*h[0]+3*e[0]*b))}return c(b,1)}};c[b]=function(b,c,h,m,p){return m*e([a[0],a[1]],[a[2],a[3]])(c/p)+h}}return b}var na,R=function(){},ha=function(){var a;a:{var b=h("<div>")[0].style;
for(a in b)if(b=a.toLowerCase(),-1!==b.indexOf("transition",b.length-10))break a;a=!1}if(!1===a)return!1;a=a.slice(0,a.length-10);return 0!=a.length?"-"+a+"-":""}(),bb=h(kb),Ka=h(document);h.fn.sudoSlider=function(a){var b=this;a=h.extend(Ba(ta()),Ba(a));!1!==ha&&yb([1,8,0])||(a.usecss=!1);return this.each(function(){function c(){var f=0,a;for(a in pa)d[f]=pa[a],f++;V=!0;Pa=[];cb=[];Qa=[];Ea=[];Ra=[];B=La(M);f=B.length;a=h("<div>");f?(Sa=B.is("ul"))||B.hasClass("slidesContainer")||lb||(a.append(B),
M.append(B=a)):(M.append(B=a),Sa=!1);lb=!0;f=La(B);I=[];C=f.length;f.each(function(f,a){var b=h(a);I[f]=b;b.css({position:"relative"});"none"==b.css("display")&&b.css("display","inline")});B.addClass("slidesContainer");f.addClass("slide");f.each(function(f,a){h(a).attr("data-slide",f+1)});if(d[30]&&(a=d[30].length,a>C)){for(f=1;f<=a-C;f++){var b;b=Sa?"li":"div";b=h("<"+b+">"+d[32]+"</"+b+">");B.append(b);I[C+(f-1)]=b}f=La(B);C=a}f.each(function(f,a){Pa[f]=!1;ia(h(a),!0,function(){Pa[f]=!0})});t=(t=
!1===ca?0:ca)||0;X=!0;Ta=[];ja=!1;M.css({overflow:"hidden"});"static"==M.css("position")&&M.css({position:"relative"});f.css({"float":"left",listStyle:"none"});B.add(f).css({display:"block",position:"relative",margin:"0"});A(0,0,!0);d[7]=D(d[7]);T=d[7];d[7]+=d[8]-1;"string"==typeof d[9]&&"random"==d[9].toLowerCase()&&(d[9]=Math.random()*C|0);d[9]=D(d[9])-1||0;d[0]=Oa(d[0]);d[18]=d[18].slice(0);for(f=0;f<C;f++)d[18][f]||""==d[18][f]||(d[18][f]=f+1),d[30][f]=d[30][f]||!1;d[4]=d[4]&&!d[15];d[10]&&E(!0);
B[d[6]?"height":"width"](9E6)[d[6]?"width":"height"]("100%");d[28]=d[28]&&!d[10];d[10]&&Fa(bb,"resize focus",E,"");if(d[17]||d[16]){sa=h("<span "+d[35]+"></span>");M[d[5]?"after":"before"](sa);if(d[17])for(db=h("<ol "+d[36]+"></ol>"),sa.prepend(db),b=(a="pages"==d[17])?T:1,f=0;f<C-(d[15]||a?1:T)+1;f+=b)Ta[f]=h('<li data-target="'+(f+1)+'"><a href="#"><span>'+d[18][f]+"</span></a></li>").appendTo(db).click(function(){g(k(this)-1,!0);return!1});d[16]&&(mb=l(d[34],"next"),nb=l(d[33],"prev"));d[4]&&u(t,
0)}f=[4,1,14];for(a=0;a<f.length;a++)d[f[a]]=w(d[f[a]]);d[2]&&Fa(Ka,"click",e,d[2]);ia(ya(d[9],d[7]),!0,function(){if(!1!==ca)Ua(ca,!1);else if(d[26]){var f;(f=bb.hashchange)?f(q):(f=h.address)?f.change(q):Fa(bb,"hashchange",q);q()}else Ua(d[9],!1);n(t)});d[30][d[9]]&&ua(d[9]);if(!0===d[31])for(a=0;a<C;a++)d[30][a]&&d[9]!=a&&ua(a);else m()}function e(){var f;if(f=k(this))"stop"==f?(d[12]=!1,r()):"start"==f?(p(),d[12]=!0):"block"==f?X=!1:"unblock"==f?X=!0:g(f==D(f)?f-1:f,!0);return!1}function E(f){function a(){if((M.is(":visible")&&
!V&&!ja||!0===f)&&0!=C){var b;b=M.width();b=d[6]?b:b/T;if(ob!=b||!0===f){ob=b;for(var Da=0;Da<C;Da++)I[Da].width(b);!1!==Va&&p(Va);Ga();wa();Y(t);H(t,0)}}}a();z(a);setTimeout(a,20)}function k(f){f=h(f);return f.attr("data-target")||f.attr("rel")}function q(){var f;a:{f=location.hash.substr(1);for(var a=0;a<d[18].length;a++)if(d[18][a]==f){f=a;break a}f=f&&!V?t:d[9]}V?Ua(f,!1):g(f,!1)}function m(){if(!1!==d[31]){var f=D(d[31]);if(d[30])for(var a=0;a<d[30].length;a++)if(d[30][a]){clearTimeout(Wa);Wa=
ra(function(){d[30][a]?ua(D(a)):m()},f);break}}}function p(f){f===na&&(f=I[t].attr("data-pause"),f=f!==na?D(f):d[13]);eb&&(f=U(f,100));r();Xa=!0;Va=f;fb=ra(function(){Xa&&!ka&&(g("next",!1),Va=!1)},f)}function r(f){fb&&clearTimeout(fb);f||(Xa=!1)}function w(f){return D(f)||0==f?D(f):"fast"==f?200:"normal"==f||"medium"==f?400:600}function l(f,a){return h(f).prependTo(sa).click(function(){g(a,!0);return!1})}function g(f,a,b){if(X&&!V)r(!0),ja||Ba(f,a,b);else if(d[37]&&ka)F(fa(f))!==gb&&(Ga(),g(f,a,
b));else if(Ya=f,pb=a,qb=b,d[30])for(a=f=fa(f);a<f+T;a++)d[30][a]&&ua(F(a))}function x(f,a,b){function c(){f||0!=e.css("opacity")||e.css({visibility:"hidden"})}f=f?1:0;var e=h();d[16]&&(e=b?mb:nb);if(d[2]){var g=h(d[2]);b='="'+(b?"next":"prev")+'"]';g=g.filter("[rel"+b+", [data-target"+b+"");e=e.add(g)}g={opacity:f};f&&e.css({visibility:"visible"});d[38]?S(e,g,a,d[46],c):e.animate(g,{queue:!1,duration:a,easing:d[11],callback:c})}function u(f,a){x(f,a,!1);x(f<C-T,a,!0)}function n(f){f=F(f)+1;"pages"!=
d[17]||f!=C-T+1||d[15]||(f=C);if(d[17])for(var a=0;a<Ta.length;++a)y(Ta[a],f);d[2]&&y(h(d[2]),f)}function y(f,a){f&&f.filter&&(f.filter(".current").removeClass("current"),f.filter(function(){var f=k(this);if("pages"==d[17])for(var b=T-1;0<=b;b--){if(f==a-b)return!0}else return f==a;return!1}).addClass("current"))}function H(f,a){rb=f=F(f);hb=+new Date+a;(d[27]||d[28])&&v(f)}function v(a){M.ready(function(){ba(a);ia(I[a],!1,N(ba,[a]))})}function R(a,b){for(var c=0,e=a;e<a+T;e++){var g=I[F(e)];g&&(g=
g["outer"+(b?"Height":"Width")](!0),c=b==d[6]?c+g:U(g,c))}return c}function ba(a){if(a==rb&&M.is(":visible")&&!V&&!ja){var b=hb-+new Date,b=U(b,0),c={};d[27]&&(c.height=R(a,!0)||1);d[28]&&(c.width=R(a,!1)||1);var e;a:if(a=sb,Ma(a).length!=Ma(c).length)e=!1;else{for(e in a)if(a[e]!=c[e]){e=!1;break a}e=!0}e||(sb=c,d[38]?S(M,c,b,d[46]):0==b?M.stop().css(c):M.animate(c,{queue:!1,duration:b,easing:d[11]}))}}function Y(a){var b=P(a,!1);a=P(a,!0);A(b,a)}function A(a,b,c){tb=a;ub=b;(d[38]||c)&&B.css({transform:"translate("+
a+"px, "+b+"px)"});if(!d[38]||c)B.css({marginLeft:0,marginTop:0}),B.css({marginLeft:a,marginTop:b})}function P(a,b){b==na&&(b=d[6]);var c=I[F(a)];return c&&c.length?-c.position()[b?"top":"left"]:0}function da(){if(!1!==Ya){var a=Ya;Ya=!1;z(N(g,[a,pb,qb]))}}function ea(a,b,d,c){a=F(a);a=N(b?la:ma,[I[a],a+1,c]);d?a():z(a)}function la(a,c){d[25].call(a,c,b)}function ma(a,c,e){d[24].call(a,c,b,e)}function fa(a){return"next"==a?ga(t+d[8],a):"prev"==a?ga(t-d[8],a):"first"==a?0:"last"==a?C-1:ga(D(a),a)}
function ga(a,b){if(d[15])return"next"==b||"prev"==b?a:F(a);var c=C-T;return a>c?t==c&&"next"==b?0:c:0>a?0==t&&"prev"==b?c:0:a}function ua(a,b){function c(){var b=new Image;b.src=g;var d=h(b);ia(d,!0,N(va,[function(){k.empty().append(b);oa(a,!0)}]))}if(b){var e=Qa[a];e||(e=Qa[a]=[]);e.push(b)}if(Ra[a])b&&ia(I[a],!0,N(z,[b]));else if(!Ea[a]){Ea[a]=!0;var g=d[30][a];if(g){Wa&&clearTimeout(Wa);var k=I[a],l=!1;h.ajax({url:g,success:function(b,d,e){l=!0;va(function(){var d=e.getResponseHeader("Content-Type");
d&&"i"!=d.substr(0,1)?(k.html(b),oa(a,!1)):c()})},complete:function(){l||c()}});d[30][a]=!1;pa.ajax[a]=!1}else z(b)}}function va(a){ka?cb.push(a):z(a)}function oa(a,c){var e=I[a];Y(t);H(t,0);ia(e,!0,N(va,[function(){Y(t);H(t,0);Ra[a]=!0;Ja(Qa[a]);m();z(function(){d[23].call(I[a],a+1,c,b)});V&&(V=!1,z(qa))}]))}function qa(){d[15]&&aa(t,0);H(t,0);Y(t);da();d[10]&&E();d[12]&&p();d[22].call(b);d[41]&&xa();ia(ya(t,C),!1,N(va,[function(){H(t,0);Y(t)}]))}function xa(){var a=h("body"),b,c=!1,e=d[0];d[0]=
function(a){if(c){c=!1;var f=a.options;f.ease=b;f.cssease=b;return $a(a)}return e(a)};var g,k,l,p,m,q=[],r=[],u=0,n,E,w,v,D=!1,x=0,y=0,H=0,I=0,B=function(e){if(X){var W=e.type,B,O,G,J="m"==W.substr(0,1);J?(B="mousedown",O="mouseup",G=""):(B="touchstart",O="touchend",G="touchcancel",e=e.originalEvent);if(!D){if(W!=B)return;var L=e.target,F=h(L);d[42]||(F=F.parents().add(L));L=d[42]||M;"string"===typeof L&&(L=ab(L),">"==L.charAt(0)&&(L=h(L.substr(1,L.length),M)));if(F.filter(L).length)D=!0;else return}if(W!=
O&&W!=G){J?(O=e.pageX,G=e.pageY):(G=e.touches[0],O=G.pageX,G=G.pageY);if(W==B){x=O;y=G;var J=O-x,K=G-y;a.addClass("sudoSlider-dragging");n=t;E=0;ka=!0;wa();k=ub;g=tb;m=d[6]?Q(K):Q(J);p=l=+new Date;J=P(n);w=P(n+1)-J;v=!1;e.preventDefault()}else{W=O-x;B=G-y;F=d[6]?B:W;L=Q(F);q[u]=L-m;var N=+new Date;r[u]=N-p;u=(u+1)%3;p=N;m=L;if(d[15]&&C>=T+1){L=0;if(F-E<w){v=!1;E+=w;L=1;K=P(n+L);aa(n+L,0);var z=P(n+L)}0<F-E&&(L=-1,K=P(n),aa(n+L,0),z=P(n),F=P(n-1)-z,E+=F,v=-F);0!=L&&(n+=L,d[6]?k-=K-z:g-=K-z,w=P(n+1)-
P(n))}d[6]?W=0:B=0;A(g+W,k+B);K=O-x;K=Q(G-y)>Q(K);J=J?!1:d[45]?d[6]?!K:K:!1;J||e.preventDefault()}H=O-x;I=G-y}else{e=H;J=I;a.removeClass("sudoSlider-dragging");G=d[6]?J:e;G-=E;v&&(G-=v,n++);J=Q(G);O=+new Date;for(z=K=e=0;3>z;z++)W=r[z],W+100<O&&(e+=W,K+=q[z]);z=d[6]?M.height():M.width();O=Q(K)/e;e=.2<=O||J>=z/2;if(0<K&&0>J||0>K&&0<J||10>=J)e=!1;G=0>G?"next":"prev";d[15]||(t+1==C?"next"==G&&(e=!1):0==t&&"prev"==G&&(e=!1));G="next"==G?n+1:n-1;G=Ca(G,C);J=e?z-J:J;K=J/O*1.3;z=U(z/J*d[1],d[1]/4);K=K<z?
Na(K,d[1]):Na(z,d[1]);J=O*K/(J+O*K);O=1-J;b=d[38]?"cubic-bezier("+O+","+J+",0.3,1)":zb([O||0,J||0,.3,1]);X=!1;c=!0;e?Ha(G,K,!0,!0,!0):Ha(n,K,!0,!0,!0);D=!1}}};Fa(Ka,"touchstart touchmove touchend touchcancel",B);d[44]&&Fa(Ka,"mousedown mousemove mouseup",B)}function Ja(a){for(;a&&a.length;)a.splice(0,1)[0]()}function Ba(a,c,e){var g=fa(a),h="next"==a||"prev"==a;a=F(g);if(a!=t)if(X=!1,gb=a,d[30]){for(var k=0,l=a;l<a+T;l++){var n=F(l);Pa[n]&&(d[30]?d[30][n]?0:!Ea[n]||Ra[n]:1)||(k++,ua(n,function(){k--;
0==k&&(d[40].call(b,g+1),Ha(g,e,c,h))}))}0==k?Ha(g,e,c,h):d[39].call(b,g+1)}else Ha(g,e,c,h)}function wa(){d[38]&&B.css(ha+"transition-duration","")}function ta(a){a=F(a);if(a!=vb){vb=a;wa();for(var b=0;b<C;b++){var d=I[F(a+b)];B.append(d)}Y(t)}}function aa(a,b){var d=U(D((C-b-T)/2),0);a=Ca(a-d,C);ta(a)}function Ia(a){var b=Na(a,t);a=Q(a-t);aa(b,a)}function Ha(a,c,e,g,k){d[29]&&n(a);d[26]&&e&&(kb.location.hash=d[18][a]);d[4]&&u(a,d[3]);for(var l=h(),p=h(),m=0;m<T;m++)l=l.add(I[F(t+m)]),p=p.add(I[F(a+
m)]);var m=a-t,q;if(d[15]&&!g){g=Q(m);q=a;var r=-t+a+C;Q(r)<g&&(q=a+C,m=r,g=Q(m));r=-t+a-C;Q(r)<g&&(q=a-C,m=r)}else q=a;d[15]&&!k&&Ia(q);k=P(q,!1);g=P(q,!0);var w=I[F(a)],r=h.extend(!0,{},pa),v=d[1],x=w.attr("data-speed");x!=na&&(v=D(x));c!=na&&(v=D(c));r.speed=v;var y=d[0];(c=w.attr("data-effect"))&&(y=Oa(c));I[t]&&(c=I[t].attr("data-effectout"))&&(y=Oa(c));ka=!0;wb=y;var A=!0;ib=function(){A=ka=!1;Ua(a,e);screen.fontSmoothingEnabled&&p.style&&p.style.removeAttribute("filter");d[15]&&aa(q,0);ea(a,
!0);d[10]&&E();Ja(cb)};jb={fromSlides:l,toSlides:p,slider:M,container:B,options:r,to:a+1,from:t+1,diff:m,target:{left:k,top:g},stopCallbacks:[],callback:function(){A&&(A=!1,Ga())},goToNext:function(){A&&ia(h(".sudo-box",M),!0,N(Y,[a]))}};H(a,v);z(function(){ea(a,!1,!0,v);y.call(b,jb)})}function Ga(){if(ka){eb=!0;ib&&ib();Ja(jb.stopCallbacks);var a=wb.stop;a?a():(h(".sudo-box",M).remove(),B.stop());H(t,0);Y(t);eb=!1}}function Fa(a,b,c,d){a.on(b,d,c);xb.push(function(){a.off(b,d,c)})}function Ua(a,
b){X=!b&&!d[12];t=a;wa();H(t,0);t=F(t);d[29]||n(t);Y(t);X=!0;gb=!1;d[12]&&(b?(r(),d[14]&&p(d[14])):V||p());da();d[4]&&V&&u(t,0);!V||d[30][t]||Ea[t]||(V=!1,z(qa))}function ya(a,b){for(var c=h(),d=0;d<b;d++)c=c.add(I[F(a+d)]);return c}function F(a){return Ca(a,C)}function za(){r();Ga();H(t,0);ja=!0;ca=t;Ja(xb);wa();sa&&sa.remove();ta(0);Y(t);d[43].call(b)}function Aa(){ja&&c()}function Za(a){return function(){var b=!ja;za();a.apply(this,arguments);b&&Aa()}}var V,Sa,B,I,Pa,C,t,X,gb,Ta,db,ja,ca=!1,sa,
mb,nb,fb,Xa,T,Wa,M=h(this),rb,hb=0,ka=!1,wb,ib,jb,cb,Qa,Ea,Ra,Ya=!1,pb,qb,lb=!1,d=[],pa=h.extend(!0,{},a),ub,tb,xb=[],Va=!1,eb=!1,ob=-1,sb={},vb=0;b.destroy=za;b.init=Aa;b.getOption=function(a){return pa[a.toLowerCase()]};b.setOption=Za(function(a,b){pa[a.toLowerCase()]=b});b.setOptions=Za(function(a){for(var b in a)pa[b.toLowerCase()]=a[b]});b.runWhenNotAnimating=va;b.insertSlide=Za(function(a,b,c,e){b=0>b?C-Ca(-b-1,C+1):Ca(b,C+1);a=h(a||"<div>");Sa?a=h("<li>").prepend(a):1!=a.length&&(a=h("<div>").prepend(a));
b&&0!=b?I[b-1].after(a):B.prepend(a);e?ca=e-1:(b<=ca||!b||0==b)&&ca++;d[18].length<b&&(d[18].length=b);d[18].splice(b,0,c||D(b)+1)});b.removeSlide=Za(function(a){a=U(0,D(a)-1);I[Na(a,C-1)].remove();d[18].splice(a,1);a<ca&&ca--});b.goToSlide=function(a,b){var c=a==D(a)?a-1:a;z(N(g,[c,!0,b]))};b.block=function(){X=!1};b.unblock=function(){X=!0};b.startAuto=function(){d[12]=!0;p()};b.stopAuto=function(){d[12]=!1;r()};b.adjust=function Da(a){var b=U(hb-+new Date,0);H(t,b);ka||Y(t);a||z(N(Da,[!0]))};b.getValue=
function(a){return{currentslide:t+1,totalslides:C,clickable:X,destroyed:ja,autoanimation:Xa}[a.toLowerCase()]};b.getSlide=function(a){return I[F(D(a)-1)]};b.stopAnimation=Ga;c()})};h.fn.sudoSlider.getDefaultOptions=ta;var Ab={box:{Random:["","GrowIn","GrowInRounded","GrowOut","GrowOutRounded","FlyIn","FlyOut",function(a,b){ma(a,!1,!1,0<b&&5>b,!0,0,5==b||6==b,3==b||4==b||6==b,2==b||4==b)}],Rain:["","GrowIn","GrowInRounded","GrowOut","GrowOutRounded","FlyIn","FlyOut",["UpLeft","DownLeft","DownRight",
"UpRight",function(a,b,c){ma(a,0==c||3==c,1==c||3==c,1<=b&&4>=b,!1,1,5==b||6==b,6==b||3==b||4==b,2==b||4==b)}]],Spiral:["InWards","OutWards",{"":function(a,b){ma(a,b,!1,!1,!1,2,!1,!1,!1)},Grow:["In","Out",["","Rounded",function(a,b,c,e){ma(a,b,!1,!0,!1,2,!1,c,e)}]]}]},fade:{"":function(a){za(a,a.options.speed)},OutIn:function(a){var b=a.options.speed,c=D(.6*b),c=b-c;a.stopCallbacks.push(function(){a.fromSlides.stop().css({opacity:1})});S(a.fromSlides,{opacity:1E-4},c,!1,N(za,[a,b]),a)},Zoom:["In",
"Out",function(a,b){var c=a.options.speed,e=a.callback,h=a.options.usecss;if(b)h=da(a,!1),a.slider.append(h),a.goToNext(),a.options.usecss?S(h,{transform:"scale(2)",opacity:0},c,!1,e,a):(h.css("zoom","100%"),S(h,{zoom:"200%",left:"-50%",top:"-50%",opacity:0},c,!1,e,a));else{var k=da(a,!0);a.slider.append(k);h?(k.css({transform:"scale(2)",opacity:0}),ra(function(){S(k,{transform:"scale(1)",opacity:1},c,!1,e,a)},100)):(k.css({zoom:"200%",left:"-50%",top:"-50%",opacity:0}),S(k,{zoom:"100%",left:"0%",
top:"0%",opacity:1},c,!1,e,a))}}]},foldRandom:["Horizontal","Vertical",function(a,b){ba(a,b,!1,!0)}],slide:$a,stack:["Up","Right","Down","Left",["","Reverse",function(a,b,c){var e=0<a.diff;c&&(e=!e);ya(a,e,++b)}]]},ea={};la(ea,{blinds:["1","2",function(a,b,c){b++;ba(a,2==c||4==c,1==c||4==c,!1,!1,b)}],fold:function(a,b){ba(a,2==b||4==b,1==b||4==b)},push:["Out","In",ya],reveal:function(a,b){var c=1==b||3==b,e=a.options.speed,h=da(a,!0),k=h.width(),q=h.height(),m=Aa(h,0,0,0,0).css({opacity:1}).appendTo(a.slider),
p=m.add(h);p.hide();c?(m.css({width:k}),1==b&&(h.css({top:-q}),m.css({bottom:0,top:"auto"}))):(m.css({height:q}),4==b&&(h.css({left:-k}),m.css({right:0,left:"auto"})));p.show();c?p.width(k):p.height(q);S(h,{left:0,top:0},e,!1,R,a);S(m,{width:k,height:q},e,!1,a.callback,a)},slice:{"":["","Reveal",["","Reverse","Random",function(a,b,c,e){ba(a,1==e||3==e,c,2==c,!1,0,1==e||4==e?1:2,b)}]],Fade:function(a,b){ba(a,2==b||4==b,1==b||4==b,!1,!0)}},zip:function(a,b){ba(a,2==b||4==b,1==b||4==b,!1,!1,0,3)},unzip:function(a,
b){ba(a,2==b||4==b,1==b||4==b,!1,!1,0,3,!0)}},"",!0,[]);la(ea,Ab,"",!1,[]);ea.random=oa(ea);h.fn.sudoSlider.effects=ea})(jQuery,window);
