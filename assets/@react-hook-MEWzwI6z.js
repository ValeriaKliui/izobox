import{r}from"./react-Dk2Bg5U_.js";const v=e=>{const t=r.useRef(e);return r.useEffect(()=>{t.current=e}),t},E=(e,t=100,c=!1)=>{const u=v(e),n=r.useRef(),o=[t,c,u];function i(){n.current&&clearTimeout(n.current),n.current=void 0}r.useEffect(()=>i,o);function s(){n.current=void 0}return r.useCallback(function(){const f=arguments,{current:d}=n;if(d===void 0&&c)return n.current=setTimeout(s,t),u.current.apply(null,f);d&&clearTimeout(d),n.current=setTimeout(()=>{n.current=void 0,u.current.apply(null,f)},t)},o)},b=(e,t,c)=>{const u=r.useState(e);return[u[0],E(u[1],t,c)]};function a(e,t,c,u){const n=r.useRef(c),o=r.useRef(u);r.useEffect(()=>{n.current=c,o.current=u}),r.useEffect(()=>{const i=e&&"current"in e?e.current:e;if(!i)return;let s=0;function f(...p){s||n.current.apply(this,p)}i.addEventListener(t,f);const d=o.current;return()=>{s=1,i.removeEventListener(t,f),d&&d()}},[e,t])}const w={},l=typeof window>"u"?null:window,h=l&&typeof l.visualViewport<"u"?l.visualViewport:null,m=()=>[document.documentElement.clientWidth,document.documentElement.clientHeight],z=function(e){e===void 0&&(e=w);const{wait:t,leading:c,initialWidth:u=0,initialHeight:n=0}=e,[o,i]=b(typeof document>"u"?[u,n]:m,t,c),s=()=>i(m);return a(l,"resize",s),a(h,"resize",s),a(l,"orientationchange",s),o},S=e=>z(e)[0];export{S as u};
