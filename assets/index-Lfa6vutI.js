import{j as t,r as n,a as Ne}from"./react-Dk2Bg5U_.js";import{u as s,t as Pe,d as Ae}from"./styled-components-DIsr6e24.js";import{c as Q,a as De}from"./@reduxjs-DVdFRU_h.js";import{u as Fe,a as We,P as qe}from"./react-redux-DKmnpz9u.js";import{c as Re}from"./react-dom-D92q4Byh.js";import{L as J,N as ue,c as Te,R as He}from"./react-router-dom-B_usilBD.js";import{u as pe}from"./@react-hook-MEWzwI6z.js";import{O as Ze,e as Ye}from"./react-router-DynUQaUK.js";import{H as Xe}from"./react-router-hash-link-BcK1d0mk.js";import"./prop-types-CqkleIqs.js";import"./@emotion-BWzHn38B.js";import"./stylis-DinRj2j6.js";import"./redux-DITMfSWq.js";import"./immer-BWU1mfoO.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";import"./use-sync-external-store-C8047omK.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Cy7LQIha.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}})();var A=(e=>(e.MAIN="/",e.ORDER="order",e))(A||{}),K=(e=>(e.custom="custom",e))(K||{});const _e="/izobox/assets/basic-DI6uI2O7.png",Ue="/izobox/assets/basic-1-Dz2RRaHf.png",Ge="/izobox/assets/basic-2-B6wPWTkx.png",Qe="/izobox/assets/basic-3-CKgbo5L7.png",Je="/izobox/assets/pro-4-E-aU4rpn.png",re="/izobox/assets/elzhdej-Cm_JNRjx.png",O="/izobox/assets/gallery-DEtQihVo.png",B="/izobox/assets/insida-angle-BTI08Lkd.png",E="/izobox/assets/inside-DOzl6-65.png",R="/izobox/assets/lamp-i3mUSgIU.png",he="/izobox/assets/light-CGRaAo2i.png",Ke="/izobox/assets/pro-D-zi6Jif.png",e1="/izobox/assets/pro-1-BJ-tQHyN.png",t1="/izobox/assets/pro-2-C7oBFmjL.png",i1="/izobox/assets/pro-3-DQyCTHV7.png",s1="/izobox/assets/pro-4-E-aU4rpn.png",o1="/izobox/assets/pro-5-P-UonlCg.png",ee="/izobox/assets/shelf-oU3RaI47.png",_="/izobox/assets/shelf-complect-BzCYJS__.png",n1="/izobox/assets/slider-basic-1-D1RPe9p0.png",r1="/izobox/assets/slider-basic-2-DKYvi3D1.png",a1="/izobox/assets/slider-basic-3-Eh0709oH.png",l1="/izobox/assets/slider-basic-4-BSjQ9xxi.png",c1="/izobox/assets/slider-basic-without-window-1-BeW_-J6Y.png",d1="/izobox/assets/slider-basic-2-DKYvi3D1.png",m1="/izobox/assets/slider-basic-3-Eh0709oH.png",u1="/izobox/assets/slider-basic-without-window-4--YbGv-QD.png",p1="/izobox/assets/slider-pro-1-DbpymK8J.png",h1="/izobox/assets/slider-pro-2-dTiDaVcu.png",x1="/izobox/assets/slider-pro-3-BewX_XyV.png",C1="/izobox/assets/slider-pro-4-C_OPjDQt.png",g1="/izobox/assets/wheels-B1bkZaqw.png",T="/izobox/assets/whell-Cdt2uQUm.png",f1="/izobox/assets/without-window-CQ-wpfj9.png";var M=(e=>(e[e.xs=400]="xs",e[e.sm=600]="sm",e[e.md=900]="md",e[e.lg=1280]="lg",e[e.xl=1440]="xl",e[e.xxl=1920]="xxl",e))(M||{});const te={colors:{sub:"#BFC3CF",dark:"#252525",white:"#ffffff",main:"#3CA5E9",secondary:"#C1E7FF",background:"#E7F6FF"},radiuses:{small:".6em",big:"2em"},transition:".1s ease-out"},o={xs:`@media (max-width: ${M.xs}px)`,sm:`@media (max-width: ${M.sm}px)`,md:`@media (max-width: ${M.md}px)`,lg:`@media (max-width: ${M.lg}px)`,xl:`@media (max-width: ${M.xl}px)`,xxl:`@media (max-width: ${M.xxl}px)`,xxxl:`@media (min-width: ${M.xxl}px)`},b1=s.footer`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-top: auto !important;
  padding: 2em 0;
`,j1=s.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  gap: 1em;
  ${o.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`,w1=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${o.lg} {
    flex-wrap: wrap;
  }
  ${o.md} {
    flex-wrap: unset;
    flex-direction: column;
    align-items: unset;
    gap: 1.5em;
  }
`,xe=s.p`
  font-family: Montserrat-Medium;
  align-self: center;
  color: ${({theme:{colors:e}})=>e.sub};
`,v1=s.div`
  display: flex;
  justify-content: space-between;
  gap: 3em;
  ${o.md} {
    flex-direction: column;
    gap: 2em;
  }
`,$1=s.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 0.5em 1em;
`,U=s.li`
  list-style-type: disc;
  &::marker {
    color: ${({theme:{colors:e}})=>e.main};
    font-size: 1.5em;
  }
`,y1=s.h5`
  margin-bottom: 1.5em;
  ${o.md} {
    margin-bottom: 0.5em;
  }
`,M1=()=>t.jsxs(v1,{className:"wrapper",children:[t.jsxs("div",{children:[t.jsx(y1,{children:"Габариты"}),t.jsx($1,{children:I.basic.dimensions.map((e,i)=>t.jsxs(t.Fragment,{children:[t.jsx(xe,{children:e[0]}),t.jsx("p",{children:e[1]})]},i))})]}),t.jsxs("div",{children:[t.jsx("h5",{children:"Комплектация"}),t.jsx("ul",{children:I.basic.equipment.map(e=>t.jsx(U,{children:t.jsx("p",{children:e})},e))})]}),t.jsxs("div",{children:[t.jsx("h5",{children:"Особенности IzoRoom™ Standart"}),t.jsx("ul",{children:I.basic.features.map(e=>t.jsx(U,{children:t.jsx("p",{children:e})},e))})]})]});var x=(e=>(e.basic="basic",e.basicWithoutWindow="basicWithoutWindow",e.pro="pro",e))(x||{});const Ce=[{title:"Фото",link:""},{title:"Видео",link:""},{title:"Конструктор кабин",link:""}],k1=[...Ce,{title:"Доставка и монтаж",link:""},{title:"Стать дилером",link:""},{title:"Политика обработки данных",link:"politics"}],L1=[{review:"Можно брать с собой на гастроли, собирается как конструктор. Можно снимать контент, выбрав освещение.",name:"Элджей",job:"Певец",avatarSrc:re},{review:"Можно брать с собой на гастроли, собирается как конструктор. Можно снимать контент, выбрав освещение.",name:"Федук",job:"Певец",avatarSrc:re}],ge=["#d7e2f0","#18fff8","#ebc403","#6bbf02","#a0c71b","#d6b3d","#c5f48a","#e4876f","#730858","#93e6ef","#a869d7","#23e0c0","#1bb46b","#128576","#343f3a","#b00e84","#f6b04b","#61fbe1","#4958e5","#a2abea","#c5945f","#1d53ee","#5c1b60","#db0bc4","#bb9d95","#5a6b40","#e08f63","#19a5bb","#3d1a1","#dc3e00","#397d75","#3bd13f","#e4fee4","#5b4688","#666b73","#aac9ba","#2f997f","#26235","#f1c4b4","#42de63","#120fa1","#e84838","#3b6115","#d58c5d","#116d2f","#945f","#5c77ce","#a67161","#16b847","#cc1e2e"],ae={type:x.basic,price:15e4,photo:_e,sliderPhotos:[n1,r1,a1,l1,T,R,ee],descriptionText:"Вокальная кабина Standart оснащена тройной гибридной системой вентиляции, который быстро обновляет воздух в кабинке, создавая абсолютный комфорт для продолжительной работы.",dimensions:[["снаружи","115x115x220 см (г, ш, в)"],["внутри","100x100x220 см (г, ш, в)"],["вес","185 кг"]],equipment:["звукоизоляционное триплекс-окно - 1шт","встроенная бесшумная вентиляция - 1шт","внешняя усиленная вентиляция - 1шт","сетевой фильтр - 1шт","LED светильник - 1шт","столик для оборудования - 1шт","кабель порт - 1шт"],features:["базовый уровень звукоизоляции","сборно-разборная","гибридная тройная вентиляция","звукоизоляционное триплекс-окно","LED освещение","льготная подписка на апгрейды","гарантия 3 года"],colorsInside:["#8441A4","#5C2117","#418ba4","#e82982","#122107","#7BCEE9","#29E886","#0d7fa4","#98aca2"],colorsOutside:["#FE9B30","#F92E32","#143F86","#3CA5E9"],allColors:ge,galleryPhotos:[Ue,Ge,Qe,Je],extraDescriptionComponent:t.jsx(M1,{}),videos:["https://www.youtube.com/embed/VWSP4yjY0RM?si=2doNQ44V5_e8Ciux","https://www.youtube.com/embed/mGS9jocf5NA?si=ZyVGig325seIEzE1","https://www.youtube.com/embed/vChExsRybkI?si=GQnc14OJanMijuA3","https://www.youtube.com/embed/ln9mshvKJrM?si=LIrvRS48lhck7oD7","https://www.youtube.com/embed/AU09ujNHs4U?si=ceXMdf3bfQvbbeVE"]},I={basic:ae,basicWithoutWindow:{...ae,type:x.basicWithoutWindow,photo:f1,sliderPhotos:[c1,d1,m1,u1,_,R,T],price:135e3},pro:{type:x.pro,price:45e4,descriptionText:"IzoBox™ Pro – кабина изготовленная специально для Вас на заказ: любой размер, внешний вид, функциональность твоего пространства! Это может быть студия, домашний кинотеатр, мобильный офис или даже целое звукоизолированная аудитория! Больше не надо затевать долгострой, более того вкладывать деньги в то, что Вы никогда не разберете и не перевезете! Звукоизоляционные кабины IzoRoom™ Custom – абсолютная альтернатива традиционной звукоизоляционной отделке.",sliderPhotos:[p1,h1,x1,C1,_,he,T,R,ee],options:["Кастомный размер","Огромный выбор декоров","Столы, крепления для оборудования","Выбор степени звукоизоляции"],colorsInside:["linear-gradient(135deg,#009245,#FCEE21,#D9E021)","linear-gradient(135deg,#79CBCA,#E684AE)","linear-gradient(135deg,#ED6EA0,#F7186A,#FBB03B)","linear-gradient(135deg,#77A1D3,#79CBCA)","linear-gradient(135deg,#033395,#27F0F0)","linear-gradient(135deg,#25AAE1,#04BEFE,#3f86ED)","linear-gradient(135deg,#65799B,#5E2563)","linear-gradient(135deg,#29323C,#2B5876,#4E4376)","linear-gradient(135deg,#70F570,#07F7F7)","linear-gradient(135deg,#a6e9c2,#e69658)","linear-gradient(135deg,#9b5fe0,#31b6f4)","linear-gradient(135deg,#edeec4,#f43131)"],colorsOutside:["linear-gradient(135deg,#009245,#F7186A,#D9E021)","linear-gradient(135deg,#29323C,#E684AE)","linear-gradient(135deg,#ED6EA0,#79CBCA,#FBB03B)","linear-gradient(135deg,#65799B,#70F570)","linear-gradient(135deg,#25AAE1,#04BEFE,#3f86ED)","linear-gradient(135deg,#65799B,#5E2563)","linear-gradient(135deg,#29323C,#2B5876,#4E4376)","linear-gradient(135deg,#70F570,#07F7F7)","linear-gradient(135deg,#a6e9c2,#e69658)","linear-gradient(135deg,#9b5fe0,#edeec4)","linear-gradient(135deg,#e69658,#29323C)","linear-gradient(135deg,#3f86ED,#27F0F0)"],allColors:ge,galleryPhotos:[e1,t1,i1,s1,o1],photo:Ke,videos:["https://www.youtube.com/embed/kMy-YF2mRz4?si=_K9cehtHCNDxLj-4","https://www.youtube.com/embed/hwNW8fxoiWY?si=vqXsLhbQATzWoQ4W","https://www.youtube.com/embed/XPg883hXLg0?si=s62oW51RegykFVLI","https://www.youtube.com/embed/a3y7lYfKtuU?si=jaKfwE9-LVw4x1H2","https://www.youtube.com/embed/W8Uh_4YCzmQ?si=X2uAU1Jqyl4SVnlP"]}},z1=[{id:1,option:"Полка",description:"Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",photo:ee,galleryPhotos:[B,E,O],price:18500},{id:2,option:"Комплект полок",description:"Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",photo:_,galleryPhotos:[B,E,O],price:18500},{id:3,option:"Колёса опорные",description:"Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",photo:g1,galleryPhotos:[B,E,O],price:18500},{id:4,option:"Светильник",description:"Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",photo:R,galleryPhotos:[B,E,O],price:18500},{id:5,option:"Светильник",description:"Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",photo:he,galleryPhotos:[B,E,O],price:18500},{id:6,option:"Колёса опорные",description:"Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",photo:T,galleryPhotos:[B,E,O],price:18500}],S1=[{title:"Окно сзади",dimensions:[{name:"X",initValue:138},{name:"Y",initValue:800},{name:"Ширина",initValue:750},{name:"Высота",initValue:800}]},{title:"Окно спереди",dimensions:[{name:"X",initValue:138},{name:"Y",initValue:800},{name:"Ширина",initValue:750},{name:"Высота",initValue:800}]},{title:"Окно справа",dimensions:[{name:"X",initValue:138},{name:"Y",initValue:800},{name:"Ширина",initValue:750},{name:"Высота",initValue:800}]},{title:"Окно слева",dimensions:[{name:"X",initValue:138},{name:"Y",initValue:800},{name:"Ширина",initValue:750},{name:"Высота",initValue:800}]},{title:"Окно в двери",dimensions:[{name:"X",initValue:138},{name:"Y",initValue:800},{name:"Ширина",initValue:750},{name:"Высота",initValue:800}]}],B1=[{title:"Размеры снаружи",dimensions:[{name:"Ширина",initValue:1146},{name:"Глубина",initValue:1146},{name:"Высота",initValue:2194}]},{title:"Размеры внутри",dimensions:[{name:"Ширина",initValue:1010},{name:"Глубина",initValue:1010},{name:"Высота",initValue:2090}]}],E1=[{title:"Кабель сзади",dimensions:[{name:"X",initValue:990},{name:"Y",initValue:120}]},{title:"Кабель спереди",dimensions:[{name:"X",initValue:990},{name:"Y",initValue:120}]},{title:"Кабель справа",dimensions:[{name:"X",initValue:990},{name:"Y",initValue:120}]},{title:"Кабель слева",dimensions:[{name:"X",initValue:990},{name:"Y",initValue:120}]}],I1=[{dimensions:[{name:"X",initValue:200},{name:"Y",initValue:118},{name:"Ширина",initValue:1010},{name:"Высота",initValue:1010}],pickers:[{title:"Петли",values:["Слева","Справа"]}]}],V1=[{title:"Вытяжка сзади",dimensions:[{name:"X",initValue:990},{name:"Y",initValue:120}]},{title:"Вытяжка спереди",dimensions:[{name:"X",initValue:990},{name:"Y",initValue:120}]},{title:"Вытяжка справа",dimensions:[{name:"X",initValue:990},{name:"Y",initValue:120}]},{title:"Вытяжка слева",dimensions:[{name:"X",initValue:990},{name:"Y",initValue:120}]}],fe=Q({name:"izobox",initialState:{type:x.basic,colorInside:I.basic.colorsInside[0],colorOutside:I.basic.colorsOutside[0]},reducers:{chooseIzobox:(e,i)=>{e.type=i.payload},chooseColorInside:(e,i)=>{e.colorInside=i.payload},chooseColorOutside:(e,i)=>{e.colorOutside=i.payload},resetColorsChoosen:e=>{e.colorInside=null,e.colorOutside=null}}}),{chooseIzobox:G,chooseColorInside:be,chooseColorOutside:je,resetColorsChoosen:O1}=fe.actions,N1=e=>e.izobox.type,we=e=>e.izobox.colorOutside,ve=e=>e.izobox.colorInside,P1=fe.reducer,w=Fe.withTypes(),v=We.withTypes(),L=()=>{const e=v(N1),i=w(),r=n.useCallback(a=>{i(G(a))},[i]);return n.useMemo(()=>({izobox:I[e],chooseIzobox:r}),[e,r])},A1=n.createContext(null),D1=n.memo(({children:e})=>{const i=L();return t.jsx(A1.Provider,{value:i,children:e})}),F1=n.memo(({children:e})=>t.jsx(Pe,{theme:te,children:e})),$e=Q({name:"app",initialState:{isColorModalOpened:!1,isContentModalOpened:!1,clickedContentIndex:0,contentSrc:[],isMenuMobileOpened:!1},reducers:{openColorModal:e=>{e.isColorModalOpened=!0},closeColorModal:e=>{e.isColorModalOpened=!1},openContentModal:e=>{e.isContentModalOpened=!0},closeContentModal:e=>{e.isContentModalOpened=!1},chooseContentIndex:(e,i)=>{e.clickedContentIndex=i.payload},chooseContentSrc:(e,i)=>{e.contentSrc=i.payload},openMobileMenu:e=>{e.isMenuMobileOpened=!0},closeMobileMenu:e=>{e.isMenuMobileOpened=!1}}}),{openColorModal:ye,closeColorModal:W1,openContentModal:q1,closeContentModal:R1,chooseContentIndex:H,chooseContentSrc:le,openMobileMenu:T1,closeMobileMenu:ce}=$e.actions,H1=e=>e.app.isColorModalOpened,Z1=e=>e.app.isContentModalOpened,Y1=e=>e.app.isMenuMobileOpened,X1=e=>e.app.clickedContentIndex,_1=e=>e.app.contentSrc,U1=$e.reducer;var F=(e=>(e.with="С окном",e.without="Без окна",e))(F||{});const Me=Q({name:"basicIzobox",initialState:{window:F.with,extraOptions:[]},reducers:{chooseWindow:(e,i)=>{e.window=i.payload},addExtraOption:(e,i)=>{e.extraOptions=[...e.extraOptions,i.payload]},removeExtraOption:(e,i)=>{e.extraOptions=e.extraOptions.filter(r=>r!==i.payload)}}}),{chooseWindow:Vo,addExtraOption:G1,removeExtraOption:Q1}=Me.actions,J1=e=>e.basicIzobox.extraOptions,K1=Me.reducer,et=De({reducer:{izobox:P1,app:U1,basicIzobox:K1}}),tt=e=>n.createElement("svg",{width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M14.285 0.5C15.6912 0.50375 16.405 0.51125 17.0212 0.52875L17.2637 0.5375C17.5437 0.5475 17.82 0.56 18.1537 0.575C19.4837 0.6375 20.3912 0.8475 21.1875 1.15625C22.0125 1.47375 22.7075 1.90375 23.4025 2.5975C24.0381 3.22237 24.5299 3.97824 24.8437 4.8125C25.1525 5.60875 25.3625 6.51625 25.425 7.8475C25.44 8.18 25.4525 8.45625 25.4625 8.7375L25.47 8.98C25.4887 9.595 25.4962 10.3088 25.4987 11.715L25.5 12.6475V14.285C25.5031 15.1968 25.4935 16.1085 25.4712 17.02L25.4637 17.2625C25.4537 17.5437 25.4412 17.82 25.4262 18.1525C25.3637 19.4837 25.1512 20.39 24.8437 21.1875C24.5308 22.0222 24.0389 22.7783 23.4025 23.4025C22.7774 24.0379 22.0216 24.5297 21.1875 24.8438C20.3912 25.1525 19.4837 25.3625 18.1537 25.425C17.8571 25.439 17.5605 25.4515 17.2637 25.4625L17.0212 25.47C16.405 25.4875 15.6912 25.4963 14.285 25.4988L13.3525 25.5H11.7162C10.8041 25.5031 9.89189 25.4936 8.97999 25.4712L8.73749 25.4638C8.44075 25.4525 8.14408 25.4396 7.84749 25.425C6.51749 25.3625 5.60999 25.1525 4.81249 24.8438C3.97833 24.5305 3.22276 24.0386 2.59874 23.4025C1.96255 22.7779 1.47027 22.0219 1.15624 21.1875C0.847489 20.3912 0.637489 19.4837 0.574989 18.1525C0.561062 17.8559 0.548562 17.5592 0.537489 17.2625L0.531239 17.02C0.508204 16.1085 0.497786 15.1968 0.499989 14.285V11.715C0.4965 10.8033 0.505668 9.8915 0.527489 8.98L0.536239 8.7375C0.546239 8.45625 0.558739 8.18 0.573739 7.8475C0.636239 6.51625 0.846239 5.61 1.15499 4.8125C1.46888 3.97738 1.96214 3.22128 2.59999 2.5975C3.22385 1.96184 3.97892 1.46998 4.81249 1.15625C5.60999 0.8475 6.51624 0.6375 7.84749 0.575C8.17999 0.56 8.45749 0.5475 8.73749 0.5375L8.97999 0.53C9.89148 0.507791 10.8032 0.498207 11.715 0.50125L14.285 0.5ZM13 6.75C11.3424 6.75 9.75267 7.40848 8.58057 8.58058C7.40847 9.75268 6.74999 11.3424 6.74999 13C6.74999 14.6576 7.40847 16.2473 8.58057 17.4194C9.75267 18.5915 11.3424 19.25 13 19.25C14.6576 19.25 16.2473 18.5915 17.4194 17.4194C18.5915 16.2473 19.25 14.6576 19.25 13C19.25 11.3424 18.5915 9.75268 17.4194 8.58058C16.2473 7.40848 14.6576 6.75 13 6.75ZM13 9.25C13.4924 9.24992 13.9801 9.34683 14.4351 9.53521C14.8901 9.72359 15.3035 9.99975 15.6518 10.3479C16.0001 10.6961 16.2764 11.1094 16.4649 11.5644C16.6535 12.0193 16.7505 12.5069 16.7506 12.9994C16.7507 13.4918 16.6538 13.9795 16.4654 14.4345C16.277 14.8895 16.0009 15.3029 15.6527 15.6512C15.3045 15.9995 14.8912 16.2758 14.4363 16.4643C13.9813 16.6528 13.4937 16.7499 13.0012 16.75C12.0067 16.75 11.0528 16.3549 10.3496 15.6517C9.64633 14.9484 9.25124 13.9946 9.25124 13C9.25124 12.0054 9.64633 11.0516 10.3496 10.3483C11.0528 9.64509 12.0067 9.25 13.0012 9.25M19.5637 4.875C19.1493 4.875 18.7519 5.03962 18.4589 5.33265C18.1659 5.62567 18.0012 6.0231 18.0012 6.4375C18.0012 6.8519 18.1659 7.24933 18.4589 7.54235C18.7519 7.83538 19.1493 8 19.5637 8C19.9781 8 20.3756 7.83538 20.6686 7.54235C20.9616 7.24933 21.1262 6.8519 21.1262 6.4375C21.1262 6.0231 20.9616 5.62567 20.6686 5.33265C20.3756 5.03962 19.9781 4.875 19.5637 4.875Z",fill:"#252525"})),it=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M1.5 8.66998V17.25C1.5 18.0456 1.81607 18.8087 2.37868 19.3713C2.94129 19.9339 3.70435 20.25 4.5 20.25H19.5C20.2956 20.25 21.0587 19.9339 21.6213 19.3713C22.1839 18.8087 22.5 18.0456 22.5 17.25V8.66998L13.572 14.163C13.0992 14.4538 12.5551 14.6078 12 14.6078C11.4449 14.6078 10.9008 14.4538 10.428 14.163L1.5 8.66998Z",fill:"#252525"}),n.createElement("path",{d:"M22.5 6.908V6.75C22.5 5.95435 22.1839 5.19129 21.6213 4.62868C21.0587 4.06607 20.2956 3.75 19.5 3.75H4.5C3.70435 3.75 2.94129 4.06607 2.37868 4.62868C1.81607 5.19129 1.5 5.95435 1.5 6.75V6.908L11.214 12.886C11.4504 13.0314 11.7225 13.1084 12 13.1084C12.2775 13.1084 12.5496 13.0314 12.786 12.886L22.5 6.908Z",fill:"#252525"})),st=e=>n.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M17.487 14.14L13.422 10.444C13.2299 10.2693 12.9774 10.1762 12.7178 10.1842C12.4583 10.1922 12.212 10.3008 12.031 10.487L9.63804 12.948C9.06204 12.838 7.90404 12.477 6.71204 11.288C5.52004 10.095 5.15904 8.934 5.05204 8.362L7.51104 5.968C7.69745 5.78712 7.80617 5.54082 7.8142 5.2812C7.82223 5.02159 7.72892 4.76904 7.55404 4.57699L3.85904 0.512995C3.68408 0.320352 3.44092 0.203499 3.18119 0.187255C2.92146 0.17101 2.66564 0.256653 2.46804 0.425995L0.298038 2.28699C0.125149 2.46051 0.0219574 2.69145 0.00803782 2.93599C-0.00696218 3.18599 -0.292962 9.108 4.29904 13.702C8.30504 17.707 13.323 18 14.705 18C14.907 18 15.031 17.994 15.064 17.992C15.3086 17.9783 15.5394 17.8747 15.712 17.701L17.572 15.53C17.7421 15.333 17.8283 15.0774 17.8124 14.8177C17.7966 14.558 17.6798 14.3148 17.487 14.14Z",fill:"#252525"})),ot=e=>n.createElement("svg",{width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M13 0.5C6.1 0.5 0.5 6.1 0.5 13C0.5 19.9 6.1 25.5 13 25.5C19.9 25.5 25.5 19.9 25.5 13C25.5 6.1 19.9 0.5 13 0.5ZM18.8 9C18.6125 10.975 17.8 15.775 17.3875 17.9875C17.2125 18.925 16.8625 19.2375 16.5375 19.275C15.8125 19.3375 15.2625 18.8 14.5625 18.3375C13.4625 17.6125 12.8375 17.1625 11.775 16.4625C10.5375 15.65 11.3375 15.2 12.05 14.475C12.2375 14.2875 15.4375 11.375 15.5 11.1125C15.5087 11.0727 15.5075 11.0315 15.4966 10.9923C15.4857 10.953 15.4654 10.9171 15.4375 10.8875C15.3625 10.825 15.2625 10.85 15.175 10.8625C15.0625 10.8875 13.3125 12.05 9.9 14.35C9.4 14.6875 8.95 14.8625 8.55 14.85C8.1 14.8375 7.25 14.6 6.6125 14.3875C5.825 14.1375 5.2125 14 5.2625 13.5625C5.2875 13.3375 5.6 13.1125 6.1875 12.875C9.8375 11.2875 12.2625 10.2375 13.475 9.7375C16.95 8.2875 17.6625 8.0375 18.1375 8.0375C18.2375 8.0375 18.475 8.0625 18.625 8.1875C18.75 8.2875 18.7875 8.425 18.8 8.525C18.7875 8.6 18.8125 8.825 18.8 9Z",fill:"#252525"})),nt=e=>n.createElement("svg",{width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M25.1563 6.95002C21.2376 0.875018 13.2126 -0.924982 7.00634 2.84377C0.950094 6.61252 -0.999906 14.825 2.91884 20.8813L3.23759 21.3688L1.92509 26.2813L6.83759 24.9688L7.32509 25.2875C9.44384 26.4313 11.7501 27.0875 14.0376 27.0875C16.4938 27.0875 18.9501 26.4313 21.0688 25.1188C27.1251 21.1813 28.9251 13.1375 25.1563 6.91252V6.95002ZM21.7251 19.5875C21.0688 20.5625 20.2438 21.2188 19.1001 21.3875C18.4438 21.3875 17.6188 21.7063 14.3563 20.4125C11.5813 19.1 9.27509 16.9625 7.64384 14.5063C6.66884 13.3625 6.16259 11.8813 6.01259 10.4C6.01259 9.08752 6.50009 7.94377 7.32509 7.11877C7.64384 6.80002 7.98134 6.63127 8.30009 6.63127H9.12509C9.44384 6.63127 9.78134 6.63127 9.95009 7.28752C10.2688 8.11252 11.0938 10.0813 11.0938 10.25C11.2626 10.4188 11.1876 11.675 10.4376 12.3875C10.0251 12.8563 9.95009 12.875 10.1188 13.2125C10.7751 14.1875 11.6001 15.1813 12.4063 16.0063C13.3813 16.8313 14.3751 17.4875 15.5188 17.975C15.8376 18.1438 16.1751 18.1438 16.3438 17.8063C16.5126 17.4875 17.3188 16.6625 17.6563 16.325C17.9751 16.0063 18.1438 16.0063 18.4813 16.1563L21.1063 17.4688C21.4251 17.6375 21.7626 17.7875 21.9313 17.9563C22.1001 18.4438 22.1001 19.1 21.7626 19.5875H21.7251Z",fill:"#252525"})),rt=e=>n.createElement("svg",{width:26,height:20,viewBox:"0 0 26 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 0C14.0688 0 15.165 0.0275001 16.2275 0.0725001L17.4825 0.1325L18.6838 0.20375L19.8088 0.28L20.8362 0.36C21.9513 0.445347 23.0006 0.921184 23.7994 1.7038C24.5983 2.48642 25.0955 3.52567 25.2038 4.63875L25.2537 5.17L25.3475 6.3075C25.435 7.48625 25.5 8.77125 25.5 10C25.5 11.2288 25.435 12.5138 25.3475 13.6925L25.2537 14.83C25.2375 15.0125 25.2213 15.1887 25.2038 15.3612C25.0955 16.4745 24.598 17.5139 23.7989 18.2966C22.9998 19.0792 21.9503 19.5549 20.835 19.64L19.81 19.7188L18.685 19.7962L17.4825 19.8675L16.2275 19.9275C15.1523 19.9742 14.0762 19.9984 13 20C11.9238 19.9984 10.8477 19.9742 9.7725 19.9275L8.5175 19.8675L7.31625 19.7962L6.19125 19.7188L5.16375 19.64C4.04869 19.5547 2.99944 19.0788 2.20059 18.2962C1.40174 17.5136 0.904468 16.4743 0.79625 15.3612L0.74625 14.83L0.6525 13.6925C0.556922 12.4639 0.506055 11.2323 0.5 10C0.5 8.77125 0.565 7.48625 0.6525 6.3075L0.74625 5.17C0.7625 4.9875 0.77875 4.81125 0.79625 4.63875C0.904426 3.52587 1.40152 2.48677 2.20011 1.70418C2.99871 0.921589 4.04766 0.445628 5.1625 0.36L6.18875 0.28L7.31375 0.20375L8.51625 0.1325L9.77125 0.0725001C10.8469 0.0257912 11.9234 0.00161911 13 0ZM10.5 6.96875V13.0312C10.5 13.6088 11.125 13.9688 11.625 13.6812L16.875 10.65C16.9892 10.5842 17.0841 10.4895 17.1501 10.3754C17.2161 10.2613 17.2508 10.1318 17.2508 10C17.2508 9.86818 17.2161 9.7387 17.1501 9.62458C17.0841 9.51047 16.9892 9.41576 16.875 9.35L11.625 6.32C11.511 6.25415 11.3816 6.2195 11.2499 6.21952C11.1182 6.21954 10.9888 6.25424 10.8748 6.32012C10.7608 6.386 10.6661 6.48075 10.6003 6.59483C10.5345 6.70891 10.4999 6.83831 10.5 6.97V6.96875Z",fill:"#252525"})),at=s.div`
  width: 2em;
  height: 1.5em;
  display: none;
  ${o.md} {
    display: block;
    position: relative;
    z-index: 1000;
    cursor: pointer;
  }
`,lt=s.span`
  display: block;
  height: 2px;
  width: 100%;
  background-color: ${({theme:{colors:e}})=>e.dark};
  border-radius: ${({theme:{radiuses:e}})=>e.big};
  margin-bottom: 6px;

  &:first-child {
    transform: ${({$isOpened:e})=>e?"rotate(45deg) translate(5px, 5px)":"none"};
  }
  &:nth-child(2) {
    display: ${({$isOpened:e})=>e?"none":"block"};
  }
  &:last-child {
    transform: ${({$isOpened:e})=>e?"rotate(-45deg)":"none"};
  }
`,ct=({onClick:e,isOpened:i})=>t.jsx(at,{onClick:e,children:Array(3).fill(1).map((r,c)=>t.jsx(lt,{$isOpened:i},c))}),dt=s.div`
  display: flex;
  gap: 2em;
  flex-direction: ${({$isVertical:e})=>e?"column":"row"};
`,ke=({isVertical:e})=>t.jsx("nav",{children:t.jsx(dt,{$isVertical:e,children:Ce.map(({title:i,link:r})=>t.jsx("li",{children:t.jsx(J,{to:r,children:i})},i))})}),mt=s.div`
  padding: 2em;
  position: fixed;
  width: ${({$isOpened:e})=>e?"100vw":0};
  height: ${({$isOpened:e})=>e?"100vh":0};
  background-color: ${({theme:{colors:e}})=>e.white};
  display: ${({$isOpened:e})=>e?"flex":"none"};
  flex-direction: column;
  justify-content: space-between;
`,ut=s.div`
  display: flex;
  justify-content: space-between;
  ${o.xs} {
    flex-direction: column;
    gap: 2em;
  }
`,pt=({isOpened:e})=>(n.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[e]),t.jsxs(mt,{$isOpened:e,children:[t.jsx(ke,{isVertical:!0}),t.jsxs(ut,{children:[t.jsx(ie,{}),t.jsx(se,{})]})]})),ht=e=>n.createElement("svg",{width:177,height:40,viewBox:"0 0 177 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("g",{clipPath:"url(#clip0_2001_602)"},n.createElement("path",{d:"M112.504 19.6189C112.504 16.2607 112.504 12.9025 112.504 9.54433C112.504 9.39336 112.558 9.31235 112.686 9.24239C117.769 6.44022 122.852 3.63436 127.934 0.83219C128.367 0.592845 128.803 0.353501 129.236 0.110474C129.494 -0.0331327 129.752 -0.0368149 130.007 0.10311C135.501 3.13726 140.994 6.17141 146.492 9.20189C146.663 9.29762 146.724 9.41545 146.724 9.60693C146.724 16.2902 146.724 22.9771 146.724 29.6603C146.724 29.8665 146.637 29.9844 146.474 30.0875C143.659 31.8181 140.853 33.5635 138.031 35.2831C135.552 36.7965 133.057 38.2878 130.574 39.7938C130.363 39.9227 130.149 39.9706 129.901 39.9926C129.269 40.0516 128.742 39.8527 128.196 39.5213C123.935 36.9217 119.652 34.3515 115.387 31.7629C114.464 31.2032 113.566 30.5993 112.664 30.0028C112.584 29.9512 112.515 29.815 112.511 29.7156C112.504 27.2227 112.504 24.7261 112.504 22.2333C112.504 21.3606 112.504 20.4879 112.504 19.6189ZM116.263 10.7521C116.383 10.8294 116.445 10.8736 116.514 10.9104C120.775 13.2339 125.037 15.5537 129.294 17.8846C129.516 18.0061 129.694 18.0098 129.916 17.8846C131.712 16.8977 133.512 15.9256 135.308 14.9462C137.708 13.6353 140.107 12.3244 142.507 11.0099C142.62 10.9473 142.729 10.8699 142.892 10.7631C142.645 10.5938 142.46 10.4502 142.256 10.3286C139.442 8.64219 136.628 6.95941 133.817 5.27295C132.534 4.50337 131.254 3.73378 129.97 2.96052C129.745 2.82427 129.56 2.74695 129.28 2.91633C125.157 5.40551 121.026 7.87629 116.896 10.3544C116.7 10.4723 116.507 10.5974 116.263 10.7484V10.7521ZM115.311 13.5727C115.311 13.7016 115.311 13.7826 115.311 13.8599C115.311 18.5253 115.311 23.1943 115.311 27.8597C115.311 28.0512 115.373 28.169 115.536 28.2684C119.667 30.765 123.79 33.2615 127.92 35.7618C127.989 35.8023 128.065 35.8354 128.167 35.887C128.189 35.6329 128.222 35.423 128.218 35.2168C128.211 34.6203 128.178 34.0238 128.178 33.4272C128.185 32.0317 128.214 30.6361 128.218 29.2369C128.225 26.5562 128.218 23.8755 128.222 21.1949C128.222 20.9555 128.142 20.7935 127.924 20.6683C123.797 18.3412 119.677 16.0103 115.554 13.6795C115.493 13.6463 115.427 13.6206 115.314 13.569L115.311 13.5727ZM143.841 13.5727C143.689 13.6574 143.59 13.7052 143.496 13.7605C139.405 16.0803 135.319 18.4038 131.225 20.7199C131.047 20.8193 130.985 20.9445 130.985 21.1433C130.989 25.956 130.985 30.765 130.985 35.5777V35.9091C131.403 35.6623 131.759 35.4561 132.112 35.2463C133.406 34.4656 134.701 33.685 135.995 32.9044C138.482 31.402 140.965 29.896 143.456 28.4084C143.736 28.2427 143.827 28.0622 143.827 27.7382C143.83 23.6767 143.852 19.6189 143.867 15.5574C143.867 14.9167 143.848 14.2723 143.838 13.5764L143.841 13.5727Z",fill:"#383737"}),n.createElement("path",{d:"M82.9954 6.00572C83.1335 6.00572 83.2535 6.00572 83.3735 6.00572C87.0675 6.00572 90.7615 6.00203 94.4555 6.01308C95.9935 6.01676 97.5205 6.14932 98.9858 6.65747C101.065 7.37919 102.629 8.71215 103.487 10.7852C104.512 13.256 103.792 16.0103 101.687 17.7778C101.247 18.146 100.756 18.4516 100.269 18.7978C100.335 18.8235 100.418 18.8567 100.502 18.8898C102.109 19.4863 103.476 20.4069 104.4 21.9056C105.076 23.0029 105.319 24.2143 105.298 25.492C105.232 29.0712 103.04 31.8586 99.5312 32.816C97.9859 33.2394 96.408 33.3904 94.8155 33.3978C90.9542 33.4125 87.093 33.4051 83.2317 33.4088C83.159 33.4088 83.0899 33.4088 82.999 33.4088V6.00572H82.9954ZM86.7984 20.6241C86.7984 20.7457 86.7984 20.8377 86.7984 20.9335C86.7984 22.1044 86.7984 23.2753 86.7984 24.4463C86.7984 26.2616 86.7948 28.0807 86.7912 29.896C86.7912 30.069 86.8021 30.1795 87.0275 30.1758C89.8198 30.1611 92.6122 30.1758 95.4045 30.1464C96.5061 30.1353 97.5969 29.9917 98.6331 29.5535C101.153 28.4894 102.193 25.4736 100.826 23.1354C100.197 22.0602 99.2258 21.4232 98.0696 21.0586C96.9861 20.7162 95.859 20.6315 94.7355 20.6241C92.1686 20.5984 89.598 20.6094 87.0311 20.6094C86.9693 20.6094 86.9075 20.6168 86.8057 20.6241H86.7984ZM86.7948 17.6857C86.8966 17.6894 86.9766 17.6968 87.053 17.6968C89.2454 17.6968 91.4414 17.7152 93.6338 17.6894C94.5791 17.6784 95.5317 17.6047 96.4734 17.509C97.2697 17.4243 97.9968 17.1039 98.6586 16.6473C99.8657 15.8188 100.226 14.6037 100.146 13.2081C100.047 11.4517 99.0076 10.1188 97.3351 9.64375C96.8552 9.50751 96.3534 9.41546 95.8553 9.38232C94.7028 9.30867 93.5466 9.2608 92.3904 9.24607C90.6124 9.22398 88.8345 9.24607 87.053 9.23871C86.8566 9.23871 86.7403 9.30131 86.7112 9.48174C86.6857 9.64375 86.6894 9.81314 86.693 9.97884C86.7148 12.3207 86.7366 14.6589 86.7621 17.0008C86.7621 17.2255 86.7803 17.4464 86.7912 17.6857H86.7948Z",fill:"#383737"}),n.createElement("path",{d:"M72.7604 19.3022C72.7204 21.9166 72.2768 24.0008 71.3497 25.9855C70.5171 27.7603 69.3718 29.2848 67.8847 30.533C66.3104 31.855 64.5143 32.7571 62.4891 33.1621C61.3439 33.3904 60.1986 33.4494 59.0387 33.3352C56.8936 33.1253 54.963 32.3631 53.2068 31.1038C51.5525 29.9181 50.2727 28.401 49.3056 26.6188C48.5312 25.1901 48.0258 23.651 47.7822 22.0308C47.604 20.8451 47.564 19.6557 47.6586 18.459C47.8149 16.4743 48.3639 14.6037 49.2838 12.8584C49.9273 11.6395 50.749 10.5386 51.738 9.56645C52.7742 8.54647 53.9376 7.72165 55.2429 7.11409C56.4791 6.53966 57.788 6.19353 59.1551 6.07938C60.0531 6.00574 60.9439 6.02047 61.8274 6.14198C62.7582 6.27086 63.6672 6.52125 64.5434 6.88211C66.0632 7.50809 67.4012 8.39918 68.5828 9.54804C69.9172 10.8515 70.9207 12.3797 71.6406 14.0993C72.0514 15.0824 72.3677 16.1024 72.5132 17.1629C72.6295 18.0172 72.7059 18.8751 72.7531 19.3096L72.7604 19.3022ZM51.2762 19.965C51.2944 20.904 51.4471 22.0823 51.8107 23.2349C52.4942 25.4111 53.6577 27.2522 55.4611 28.6404C57.0208 29.8408 58.7733 30.441 60.7512 30.3011C61.8492 30.2237 62.8782 29.896 63.838 29.3584C65.6305 28.3605 66.9249 26.8729 67.8411 25.0502C68.5501 23.6436 68.95 22.1412 69.0555 20.5542C69.1464 19.1697 69.0155 17.8146 68.6483 16.4817C68.3029 15.226 67.7647 14.0661 67.023 12.9983C66.4013 12.0998 65.656 11.3155 64.7834 10.6638C64.0198 10.0967 63.1872 9.6585 62.2746 9.3897C60.3949 8.83737 58.577 9.02516 56.8354 9.89785C55.2975 10.6674 54.0976 11.8384 53.1559 13.2744C51.887 15.2187 51.2762 17.3728 51.2726 19.9614L51.2762 19.965Z",fill:"#383737"}),n.createElement("path",{d:"M21.3023 30.301C21.4877 30.301 21.6041 30.301 21.724 30.301C27.1814 30.301 32.6388 30.301 38.0962 30.301C38.4707 30.301 38.4489 30.2458 38.4489 30.6692C38.4489 31.4609 38.4489 32.2526 38.4489 33.0443C38.4489 33.2824 38.335 33.4014 38.1071 33.4014C34.2713 33.4014 30.4319 33.4014 26.5961 33.4014C23.3747 33.4014 20.1497 33.4014 16.9284 33.4014C16.8266 33.4014 16.7248 33.4014 16.5975 33.4014C16.5939 33.302 16.5866 33.2247 16.5866 33.1474C16.5866 32.3226 16.5793 31.5014 16.5902 30.6766C16.5902 30.5551 16.6484 30.4078 16.7248 30.3121C21.7859 24.137 26.8542 17.9656 31.9226 11.7942C32.4643 11.135 33.0061 10.4796 33.5442 9.82049C33.606 9.74316 33.6641 9.66215 33.7696 9.52223H16.5939V6.42548H38.4235C38.4307 6.51017 38.4416 6.59854 38.4416 6.68323C38.4344 7.497 38.4344 8.31446 38.4126 9.12823C38.4089 9.28288 38.3398 9.46331 38.2453 9.58114C35.4094 13.0498 32.5625 16.5148 29.7193 19.9797C26.9706 23.3342 24.2255 26.6961 21.4804 30.0506C21.4295 30.1095 21.3859 30.1758 21.3023 30.29V30.301Z",fill:"#383737"}),n.createElement("path",{d:"M153.211 6.02041C153.316 6.01304 153.378 6.00568 153.44 6.00568C154.749 6.00936 156.058 6.01672 157.366 6.01672C157.519 6.01672 157.614 6.07196 157.701 6.19347C159.977 9.39701 162.26 12.6005 164.54 15.8041C164.609 15.8998 164.682 15.9919 164.776 16.1171C164.845 16.0287 164.904 15.9661 164.951 15.8998C167.176 12.7662 169.408 9.63635 171.619 6.49173C171.873 6.13087 172.128 5.9799 172.568 5.99463C173.706 6.03145 174.848 6.01672 175.989 6.02041C176.069 6.02041 176.146 6.02041 176.28 6.02041C176.211 6.12719 176.171 6.20083 176.12 6.26711C173.117 10.4869 170.117 14.7068 167.111 18.9229C166.965 19.1254 166.958 19.2506 167.107 19.4605C170.346 24.0007 173.579 28.5519 176.815 33.0995C176.873 33.1805 176.927 33.2689 177.004 33.383C176.876 33.3904 176.793 33.3977 176.709 33.3977C175.455 33.4014 174.204 33.4014 172.95 33.4162C172.757 33.4162 172.648 33.3462 172.542 33.1952C170.048 29.6713 167.55 26.1511 165.053 22.6272C164.976 22.5168 164.889 22.4137 164.784 22.2811C164.704 22.3768 164.642 22.4431 164.587 22.5168C162.06 26.0664 159.533 29.6161 157.014 33.1731C156.894 33.3425 156.767 33.4088 156.563 33.4051C155.301 33.3977 154.043 33.4051 152.782 33.4125C152.698 33.4125 152.611 33.4125 152.469 33.4125C152.753 33.0111 153 32.6613 153.247 32.3078C156.305 27.9996 159.363 23.6914 162.424 19.3906C162.548 19.2175 162.504 19.1181 162.402 18.9745C159.373 14.7178 156.345 10.4575 153.32 6.19715C153.287 6.15297 153.262 6.10141 153.214 6.02041H153.211Z",fill:"#383737"}),n.createElement("path",{d:"M0 6.41809C1.05076 6.41809 2.06879 6.41809 3.09046 6.41809C3.78127 6.41809 3.77764 6.41809 3.77764 7.11035C3.774 11.5658 3.76673 16.0213 3.76673 20.4768C3.76673 24.6746 3.774 28.8723 3.77764 33.07C3.77764 33.1658 3.77764 33.2615 3.77764 33.383H0V6.41809Z",fill:"#383737"})),n.createElement("defs",null,n.createElement("clipPath",{id:"clip0_2001_602"},n.createElement("rect",{width:177,height:40,fill:"white"})))),Le=()=>t.jsx(ue,{to:A.MAIN,children:t.jsx("h1",{children:t.jsx(ht,{})})}),xt=s.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.8em 0;
`,Ct=s.div`
  font-family: Poppins;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`,de=s.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`,gt=s.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5em;
  align-items: end;
  width: fit-content;
  ${o.md} {
    display: flex;
    align-items: center;
    gap: 1em;
  }
`,ft=s.div`
  ${o.md} {
    display: none;
  }
`,bt=s.div`
  ${o.md} {
    display: none;
  }
`,jt=s.div`
  ${o.md} {
    display: none;
  }
`,ie=()=>t.jsxs(gt,{children:[t.jsx(ot,{}),t.jsx(tt,{}),t.jsx(rt,{}),t.jsx(nt,{})]}),se=()=>t.jsxs(Ct,{children:[t.jsxs(de,{children:[t.jsx(st,{}),t.jsx("p",{children:"+7 (495) 784-05-66"})]}),t.jsxs(de,{children:[t.jsx(it,{}),t.jsx("p",{children:" info@izobox.com"})]})]}),wt=()=>{const e=pe(),i=v(Y1),r=w(),c=()=>r(i?ce():T1());return n.useEffect(()=>{e>M.md&&r(ce())},[e,r]),t.jsxs(t.Fragment,{children:[t.jsxs(xt,{className:"wrapper",children:[t.jsx(Le,{}),t.jsx(ft,{children:t.jsx(ke,{})}),t.jsx(jt,{children:t.jsx(se,{})}),t.jsx(bt,{children:t.jsx(ie,{})}),t.jsx(ct,{onClick:c,isOpened:i})]}),t.jsx(pt,{isOpened:i})]})},vt=()=>t.jsxs(b1,{className:"wrapper",children:[t.jsx(Le,{}),t.jsxs(w1,{children:[t.jsx(j1,{children:k1.map(({title:e,link:i})=>t.jsx("li",{children:t.jsx(J,{to:i,children:e})},e))}),t.jsx(ie,{}),t.jsx(se,{})]}),t.jsx(xe,{children:" Все права защищены © 2022 IzoBox "})]}),$t=s.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
  flex-basis: 100%;
  ${o.lg} {
    gap: 3em;
  }
`,yt=()=>t.jsxs(t.Fragment,{children:[t.jsx(wt,{}),t.jsx($t,{children:t.jsx(Ze,{})}),t.jsx(vt,{})]}),Mt=e=>{const{colors:i}=te,{$choosen:r,$sub:c}=e;return r===!1?i.background:r?i.main:c?i.white:i.dark},kt=e=>{const{colors:i}=te,{$choosen:r,$sub:c}=e;return r===!1||c?i.dark:i.white},Lt=s.button`
  background-color: ${({$choosen:e,$sub:i})=>Mt({$choosen:e,$sub:i})};
  padding: 1em 2em;
  border: none;
  color: ${({$choosen:e,$sub:i})=>kt({$choosen:e,$sub:i})};
  border-radius: ${({theme:e})=>e.radiuses.big};
  border: 2px solid
    ${({$sub:e,theme:{colors:i}})=>e?i.dark:"inherit"};
  width: fit-content;
  min-width: ${({$choosen:e})=>typeof e<"u"?"inherit":"200px"};
  cursor: pointer;
  transition: ${({theme:e})=>e.transition};
  &:hover {
    background-color: ${({theme:{colors:e}})=>e.main};
    color: ${({theme:{colors:e}})=>e.white};
    border-color: transparent;
  }
  ${o.md} {
    width: 100%;
  }
`,k=n.memo(({children:e,choosen:i,sub:r,...c})=>{const a=e==null?void 0:e.trim().split(" ").map((l,m)=>m===0?`${l[0].toUpperCase()}${l.slice(1)}`:l).join(" ");return t.jsx(Lt,{$choosen:i,$sub:r,...c,children:a})}),ze=s.p`
  font-size: 2.5em;
`,S=s.p`
  font-size: 1.25em;
  line-height: 120%;
`,Se=s.p`
  font-size: 1.13em;
`,Be=s.p`
  font-size: 0.87em;
  line-height: 150%;
`,zt=e=>n.createElement("svg",{width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M4.8125 24.5C4.00027 24.5 3.22132 24.1773 2.64699 23.603C2.07266 23.0287 1.75 22.2497 1.75 21.4375V17.0625C1.75 16.7144 1.88828 16.3806 2.13442 16.1344C2.38056 15.8883 2.7144 15.75 3.0625 15.75C3.4106 15.75 3.74444 15.8883 3.99058 16.1344C4.23672 16.3806 4.375 16.7144 4.375 17.0625V21.4375C4.375 21.679 4.571 21.875 4.8125 21.875H23.1875C23.3035 21.875 23.4148 21.8289 23.4969 21.7469C23.5789 21.6648 23.625 21.5535 23.625 21.4375V17.0625C23.625 16.7144 23.7633 16.3806 24.0094 16.1344C24.2556 15.8883 24.5894 15.75 24.9375 15.75C25.2856 15.75 25.6194 15.8883 25.8656 16.1344C26.1117 16.3806 26.25 16.7144 26.25 17.0625V21.4375C26.25 22.2497 25.9273 23.0287 25.353 23.603C24.7787 24.1773 23.9997 24.5 23.1875 24.5H4.8125Z",fill:"white"}),n.createElement("path",{d:"M20.6152 8.25957C20.737 8.38137 20.8336 8.52597 20.8995 8.68511C20.9654 8.84425 20.9993 9.01482 20.9993 9.18707C20.9993 9.35932 20.9654 9.52989 20.8995 9.68903C20.8336 9.84817 20.737 9.99277 20.6152 10.1146C20.4934 10.2364 20.3488 10.333 20.1896 10.3989C20.0305 10.4648 19.8599 10.4988 19.6877 10.4988C19.5154 10.4988 19.3448 10.4648 19.1857 10.3989C19.0266 10.333 18.882 10.2364 18.7602 10.1146L15.3127 6.66882V16.6246C15.3127 16.9727 15.1744 17.3065 14.9282 17.5526C14.6821 17.7988 14.3483 17.9371 14.0002 17.9371C13.6521 17.9371 13.3182 17.7988 13.0721 17.5526C12.8259 17.3065 12.6877 16.9727 12.6877 16.6246V6.66882L9.24016 10.1146C9.11836 10.2364 8.97376 10.333 8.81462 10.3989C8.65548 10.4648 8.48491 10.4988 8.31266 10.4988C8.14041 10.4988 7.96984 10.4648 7.8107 10.3989C7.65156 10.333 7.50696 10.2364 7.38516 10.1146C7.26336 9.99277 7.16674 9.84817 7.10082 9.68903C7.0349 9.52989 7.00098 9.35932 7.00098 9.18707C7.00098 9.01482 7.0349 8.84425 7.10082 8.68511C7.16674 8.52597 7.26336 8.38137 7.38516 8.25957L13.0727 2.57207C13.1944 2.45016 13.339 2.35344 13.4981 2.28745C13.6573 2.22147 13.8279 2.1875 14.0002 2.1875C14.1724 2.1875 14.343 2.22147 14.5022 2.28745C14.6613 2.35344 14.8059 2.45016 14.9277 2.57207L20.6152 8.25957Z",fill:"white"})),St=s.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
`,Bt=s.textarea`
  resize: none;
  width: 50%;
  height: 15em;
  border: 2px solid ${({theme:{colors:e}})=>e.sub};
  border-radius: ${({theme:{radiuses:e}})=>e.small};
  padding: 1em;
  ${o.lg} {
    width: 100%;
  }
`,Et=s.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,It=s.div`
  position: absolute;
  align-self: center;
  justify-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`,Vt=s.input`
  cursor: pointer;
  &::file-selector-button {
    background-color: ${({theme:{colors:e}})=>e.white};
    padding: 5em 7em;
    border: 3px dashed ${({theme:{colors:e}})=>e.main};
    border-radius: ${({theme:{radiuses:e}})=>e.small};
    display: flex;
    width: 100%;
    cursor: pointer;
  }

  &::file-selector-button:active {
    padding: 15em 20em;
    ${o.md} {
      padding: 10em 15em;
    }
    ${o.sm} {
      padding: 10em;
    }
    ${o.xs} {
      padding: 7em;
    }
  }
  &::file-selector-button {
    color: transparent;
  }
`,Ot=s(zt)`
  width: 2em;
  height: 2em;
  padding: 1em;
  background-color: ${({theme:{colors:e}})=>e.main};
  border-radius: ${({theme:{radiuses:e}})=>e.big};
`,Nt=()=>t.jsxs("div",{className:"flex-col-gap",children:[t.jsx("p",{children:"Опишите необходимые Вам аксессуары"}),t.jsxs(St,{children:[t.jsx(Bt,{placeholder:"Стол, кастомный столик, полки, крепления для оборудования и т.д."}),t.jsxs("div",{className:"flex-col-gap",children:[t.jsx("p",{children:"Прикрепите фото примеры"}),t.jsxs(Et,{children:[t.jsxs(It,{children:[t.jsx(Ot,{}),t.jsxs(S,{className:"primary-text bold underline",children:["Выберите на устройстве"," "]})," ",t.jsx(S,{children:"или перетащите файлы"})]}),t.jsx(Vt,{type:"file"})]}),t.jsx(k,{children:"Прикрепить"})]})]})]});var g=(e=>(e.inside="Внутри",e.outside="Снаружи",e))(g||{});const Pt=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`,At=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 40px);
  grid-auto-flow: row dense;
  gap: 0.5em;
  ${o.lg} {
  }
  ${o.sm} {
    gap: 1em 0.5em;
  }
`,Dt=s.div`
  width: 40px;
  height: 40px;
  background: ${({$color:e})=>e};
  cursor: pointer;
  border-radius: ${({theme:{radiuses:e}})=>e.small};
  outline: 2px solid
    ${({$isChoosen:e,theme:{colors:i}})=>e?i.main:"unset"};
  outline-offset: 2px;
  box-shadow: 0 1px 5px 0 rgba(0, 53, 133, 0.25);
  ${o.md} {
    position: relative;
    outline: none;
    &::after {
      content: "";
      position: absolute;
      bottom: -0.5em;
      display: block;
      width: 100%;
      height: 3px;
      background-color: ${({$isChoosen:e,theme:{colors:i}})=>e?i.main:"unset"};
      border-radius: ${({theme:{radiuses:e}})=>e.small};
    }
  }
`,Z=n.memo(({colors:e,title:i,colorType:r})=>{const c=w(),a=v(ve),l=v(we),m=r===g.inside?a:l,p=d=>{r===g.inside?c(be(d)):c(je(d))};return r===g.inside&&!e.find(d=>d===a)&&a!==null&&e.push(a),r===g.outside&&!e.find(d=>d===l)&&l!==null&&e.push(l),t.jsxs(Pt,{children:[t.jsx("p",{className:"semibold",children:i}),t.jsx(At,{children:e.map(d=>t.jsx(Dt,{$color:d,$isChoosen:d===m,onClick:()=>p(d)},d))})]})}),Ft=s.div`
  margin: 1em 0;
`,Wt=s.div`
  display: flex;
  gap: 5em;
  margin-bottom: 1em;
`,qt=()=>{const{izobox:e}=L(),i=w(),r=()=>i(ye());return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Выбери цвет и тип декора"}),t.jsxs(Ft,{children:[t.jsxs(Wt,{children:[t.jsx(Z,{colors:e.colorsInside,title:"Цвет внутри",colorType:g.inside}),t.jsx(Z,{colors:e.colorsOutside,title:"Цвет снаружи",colorType:g.outside})]}),t.jsx("p",{className:"bold underline pointer",onClick:r,children:"Все цвета"})]})]})};var z=(e=>(e.walls="Стены",e.windows="Окна",e.door="Дверь",e.port="Кабель порт",e.hood="Вытяжка",e))(z||{});const Rt=s.div`
  padding: ${({$isOpened:e})=>e?0:"1em"};
  cursor: pointer;
`,Tt=s.div`
  background-color: ${({$isOpened:e,theme:{colors:i}})=>e?i.main:i.white};
  padding: 0.8em 1em;
  border-radius: ${({$isOpened:e,theme:{radiuses:i}})=>!e&&i.big};
  border: 2px solid
    ${({$isOpened:e,theme:{colors:i}})=>e?i.main:i.sub};
  border-top-right-radius: ${({theme:{radiuses:e}})=>e.big};
  border-top-left-radius: ${({theme:{radiuses:e}})=>e.big};
  color: ${({$isOpened:e,theme:{colors:i}})=>e?i.white:i.sub};
`,Ht=n.memo(({title:e,children:i,isOpened:r,onClick:c})=>t.jsxs(Rt,{$isOpened:r,children:[t.jsx(Tt,{$isOpened:r,onClick:c,children:t.jsx("p",{className:r?"bold":"",children:e})}),i]})),Zt=s.label`
  cursor: pointer;
  display: flex;
  gap: 0.2em;
  p:first-letter {
    text-transform: capitalize;
  }
`,oe=n.memo(({values:e,handleChange:i=()=>{},classNameForActive:r})=>{const[c,a]=n.useState(e[0].value),l=p=>{i(p.target.value),a(p.target.value)},m=p=>p===c;return t.jsx(t.Fragment,{children:e.map(({text:p,value:d=""})=>t.jsx(n.Fragment,{children:p&&t.jsxs(Zt,{className:m(d)?r:"",children:[t.jsx("input",{value:d,checked:m(d),onChange:l,type:"radio"}),t.jsxs("p",{children:[" ",p]})]})},d))})}),Yt=s.div`
  margin-top: 1em;
`,Xt=s.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`,_t=s.input`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    background: ${({theme:{colors:e}})=>e.sub};
    height: 0.2em;
    border-radius: ${({theme:{radiuses:e}})=>e.small};
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -6px;
    background-color: ${({theme:{colors:e}})=>e.main};
    height: 1em;
    width: 1em;
    border-radius: ${({theme:{radiuses:e}})=>e.big};
  }
  &:focus::-webkit-slider-thumb {
    outline: 3px solid ${({theme:{colors:e}})=>e.main};
    outline-offset: 0.125em;
  }
`,Ut=s.input`
  border-radius: ${({theme:{radiuses:e}})=>e.small};
  border: 1px solid ${({theme:{colors:e}})=>e.sub};
  outline: none;
  width: 3em;
  color: ${({theme:{colors:e}})=>e.dark};
  text-align: center;
`,Gt=s.div`
  display: flex;
  justify-content: space-between;
`,Ee=n.memo(({initValue:e,name:i})=>{const[r,c]=n.useState(e),a=l=>{c(Number(l.target.value))};return t.jsxs(Yt,{children:[t.jsxs(Gt,{children:[t.jsxs("p",{className:"sub-color",children:[i,":"]}),t.jsxs(Xt,{children:[t.jsx(Ut,{value:r,onChange:a}),t.jsx("p",{children:"мм"})]})]}),t.jsx(_t,{type:"range",min:0,max:2e3,value:r,onChange:a})]})}),Qt=s.div`
  grid-row-start: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${o.xs} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
  }
`,Jt=s.div`
  border-radius: ${({theme:{radiuses:e}})=>e.big};
  overflow: hidden;
  width: fit-content;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.15);
`,Kt=s.button`
  padding: 0.6em 2em;
  cursor: pointer;
  color: ${({$isChoosen:e,theme:{colors:i}})=>e?i.white:i.dark};
  background-color: ${({$isChoosen:e,theme:{colors:i}})=>e?i.main:i.white};
  outline: unset;
  border: unset;
`,ei=n.memo(({title:e,values:i})=>{const[r,c]=n.useState(i[0]),a=l=>c(l);return t.jsxs(Qt,{children:[t.jsxs("p",{className:"sub-color",children:[e,":"]}),t.jsx(Jt,{children:i.map(l=>t.jsx(Kt,{onClick:()=>a(l),$isChoosen:r===l,children:l},l))})]})}),ti=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5em 0;
`,ii=s.div`
  margin: ${({$isChoosen:e,$isOpened:i})=>e&&i?"0 0 1em 0":0};
  grid-row-start: ${({$index:e})=>e};
  height: ${({$isChoosen:e,$isOpened:i})=>e&&i?"100%":0};
  visibility: ${({$isChoosen:e,$isOpened:i})=>e&&i?"visible":"hidden"};
`,q=n.memo(({items:e,isOpened:i})=>{const r=n.useMemo(()=>e.map(({title:m})=>({value:m,text:m})),[e]),[c,a]=n.useState(""),l=n.useCallback(m=>a(m),[]);return t.jsxs(ti,{children:[t.jsx(oe,{values:r,handleChange:l,classNameForActive:"bold"}),e.map(({dimensions:m,title:p,pickers:d},h)=>t.jsxs(n.Fragment,{children:[t.jsx(ii,{$index:(h+1)*2,$isChoosen:!p||p===c,$isOpened:i,children:m.map(({name:u,initValue:j})=>t.jsx(Ee,{initValue:j,name:u},u))},p),d==null?void 0:d.map(({title:u,values:j})=>t.jsx(ei,{title:u,values:j},u))]},p))]})}),si=s.div`
  border: 1px solid ${({theme:{colors:e}})=>e.main};
  width: 25em;
  border-radius: ${({theme:{radiuses:e}})=>e.big};
  ${o.xs} {
    width: 100%;
  }
`,oi=s.div`
  padding: ${({$isOpened:e})=>e?"1em":0};
  visibility: ${({$isOpened:e})=>e?"visible":"hidden"};
  height: ${({$isOpened:e})=>e?"100%":0};
`,ni=s.div`
  display: flex;
  flex-direction: column;
`,ri=()=>t.jsx("div",{className:"flex-col-gap",children:B1.map(({title:e,dimensions:i})=>t.jsxs(ni,{children:[t.jsx("p",{className:"bold",children:e}),t.jsx("div",{children:i.map(({initValue:r,name:c})=>t.jsx(Ee,{initValue:r,name:c},c))})]},e))}),ai=()=>{const[e,i]=n.useState(z.walls),r=a=>{i(a)},c=(a,l)=>{switch(a){case z.walls:return t.jsx(ri,{});case z.windows:return t.jsx(q,{items:S1,isOpened:l});case z.port:return t.jsx(q,{items:E1,isOpened:l});case z.door:return t.jsx(q,{items:I1,isOpened:l});case z.hood:return t.jsx(q,{items:V1,isOpened:l})}};return t.jsx(si,{children:Object.values(z).map(a=>{const l=e===a;return t.jsx(Ht,{title:a,isOpened:l,onClick:()=>r(a),children:t.jsx(oi,{$isOpened:l,children:c(a,l)})},a)})})},li=()=>t.jsxs("div",{className:"flex-col-gap",children:[t.jsx("p",{children:"Cконфигурируй размер кабинки"}),t.jsx(ai,{})]}),ci=s.input`
  padding: 1em 0;
  border: none;
  border-bottom: 1px solid ${({theme:{colors:e}})=>e.sub};
  width: 300px;
  &:focus {
    outline: none;
    border-bottom: 2px solid ${({theme:{colors:e}})=>e.main};
  }
  ${o.xs} {
    width: 250px;
  }
`,N=n.memo(({...e})=>t.jsx(ci,{...e})),di=s.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: column;
  gap: 1em 3em;
  margin: 1em 0;
  ${o.md} {
    grid-template-columns: repeat(1, min-content);
    grid-auto-flow: row;
  }
`,mi=()=>t.jsxs("div",{children:[t.jsx("p",{children:"Заполните информацию о себе"}),t.jsxs(di,{children:[t.jsx(N,{placeholder:"Ф.И.О."}),t.jsx(N,{placeholder:"Телефон"}),t.jsx(N,{placeholder:"Город"}),t.jsx(N,{placeholder:"Адрес"}),t.jsx(N,{placeholder:"E-mail"}),t.jsx(N,{placeholder:"Комментарий"})]})]});var y=(e=>(e[e.First=0]="First",e[e.Second=1]="Second",e[e.Third=2]="Third",e[e.Fourth=3]="Fourth",e))(y||{});const ui=s.div`
  display: flex;
  align-items: center;
  gap: 2em;
  ${o.xs} {
    flex-direction: column;
    align-items: flex-start;
  }
`,pi=s.div`
  display: flex;
  gap: 1em;
`,hi=s.div`
  height: 1em;
  width: 3em;
  background-color: ${({$isCurrent:e,theme:{colors:i}})=>e?i.main:i.sub};
  border-radius: ${({theme:{radiuses:e}})=>e.big};
  cursor: pointer;
`,xi=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6em;
  ${o.md} {
    flex-direction: column;
    gap: 1em;
  }
`,Ci=()=>{const e=Ye(),[i,r]=n.useState(0),c=4,a=n.useCallback(()=>{i<c-1&&r(p=>p+1),i===y.Fourth&&e("/order")},[i,e]),l=n.useCallback(()=>{i>0&&r(p=>p-1)},[i]),m=()=>{switch(i){case y.First:return"Запомнить и продолжить";case y.Fourth:return"Запросить стоимость и сроки";default:return"Дальше"}};return t.jsxs("div",{className:"wrapper flex-col-gap",children:[t.jsxs(ui,{children:[t.jsxs(ze,{className:"bold",children:["Шаг ",i+1]}),t.jsx(pi,{children:Array(c).fill(1).map((p,d)=>t.jsx(hi,{onClick:()=>r(d),$isCurrent:i===d},d))})]}),i===y.First&&t.jsx(li,{}),i===y.Second&&t.jsx(qt,{}),i===y.Third&&t.jsx(Nt,{}),i===y.Fourth&&t.jsx(mi,{}),t.jsxs(xi,{children:[i!==y.First&&t.jsx(k,{sub:!0,onClick:l,children:"Назад"}),t.jsx(k,{onClick:a,children:m()})]})]})},Y=e=>n.createElement("svg",{width:78,height:78,viewBox:"0 0 78 78",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M22.75 32.5L39 48.75L55.25 32.5",stroke:"#3CA5E9",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round"})),gi=s.div`
  display: flex;
  gap: 1em;
  align-items: center;
  cursor: pointer;
  ${o.md} {
    margin-bottom: 1em;
  }
`,ne=s(Y)`
  cursor: pointer;
  transform: ${({$isShown:e})=>e?"rotate(180deg)":"unset"};
  transition: ${({theme:e})=>e.transition};
  &:hover {
    transform: rotate(180deg);
  }
`,fi=s.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-top: 2em;
`,bi=s.div`
  padding: 1em 2em;
  border-radius: ${({theme:{radiuses:e}})=>e.big};
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  gap: 1em 2em;
  box-shadow: 0 1px 24px -1px rgba(0, 0, 0, 0.1);
  ${o.lg} {
    grid-template-columns: 0.5fr 2fr 0.5fr;
  }
  ${o.md} {
    grid-template-columns: 1fr;
    justify-items: start;
  }
`,ji=s.div`
  ${o.md} {
    display: flex;
    cursor: pointer;
    align-items: center;
  }
`,wi=s(ne)`
  display: none;
  ${o.md} {
    display: block;
    height: 2em;
    width: 3em;
    path {
      stroke: ${({theme:{colors:e}})=>e.dark};
    }
  }
`,vi=s.img`
  ${o.md} {
    display: none;
  }
`,$i=s.p`
  ${o.md} {
    display: ${({$isDescShowed:e})=>e?"block":"none"};
  }
`,yi=s.h4`
  ${o.md} {
    display: none;
  }
`,Mi=s.div`
  ${o.md} {
    order: 999;
    width: 100%;
  }
`,ki=s.div`
  display: flex;
  gap: 0.5em;
  justify-content: center;
  ${o.md} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.1em;
  }
`,Li=s.img`
  display: none;
  ${o.md} {
    max-width: 100%;
    display: block;
  }
`,zi=s.img`
  max-width: 40px;
  ${o.md} {
    max-width: 100%;
    min-width: 100%;
  }
`,Ie=()=>{const e=w(),i=v(Z1);return{onContentClick:(a,l)=>{e(le(l)),e(H(a)),e(q1())},onContentClose:()=>{e(le([])),e(R1()),e(H(0))},isModalOpened:i}};var P=(e=>(e.description="Описание",e.photo="Фото",e.video="Видео",e))(P||{});const Si=s.div`
  display: flex;
  gap: 1em;
`,Bi=s(S)`
  border-bottom: 3px solid
    ${({$isChoosen:e,theme:{colors:i}})=>e?i.dark:"transparent"};
  color: ${({$isChoosen:e,theme:{colors:i}})=>e?i.dark:i.sub};
  cursor: pointer;
  transition: ${({theme:e})=>e.transition};
  &:hover {
    border-bottom: 3px solid ${({theme:{colors:e}})=>e.dark};
    color: ${({theme:{colors:e}})=>e.dark};
  }
  ${o.md} {
    border-bottom: unset;
    &:hover {
      border-bottom: unset;
    }
  }
`,Ei=s.div`
  align-self: center;
`,Ii=s.div`
  ${o.md} {
    display: ${({$isDescShown:e})=>e?"block":"none"};
  }
`,Vi=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1em;
  ${o.sm} {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
  ${o.xs} {
    justify-items: center;
  }
`,Oi=s.div`
  width: 240px;
  height: 240px;
  ${o.sm} {
    width: 160px;
    height: 160px;
  }
  ${o.sm} {
    width: 100%;
    height: 100%;
  }
`,Ni=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,Pi=s.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-auto-flow: column;
  gap: 2em;
  ${o.md} {
    display: flex;
    flex-direction: column;
  }
`,Ai=s.div`
  &:first-child {
    grid-column: span 3;
    grid-row: span 4;
  }
`,Di=s.iframe`
  height: 100%;
  width: 100%;
`,Fi=()=>{const[e,i]=n.useState(P.description),[r,c]=n.useState(!1),a=C=>()=>i(C),{izobox:l}=L(),{descriptionText:m,extraDescriptionComponent:p,galleryPhotos:d,videos:h,type:u}=l,{onContentClick:j}=Ie(),D=()=>c(C=>!C);return t.jsxs("div",{className:"wrapper flex-col-gap",children:[t.jsx(Si,{children:Object.values(P).map(C=>t.jsx(Bi,{className:"bold",$isChoosen:C===e,onClick:a(C),children:C},C))}),e===P.description&&t.jsxs(t.Fragment,{children:[t.jsx(Se,{children:m}),t.jsx(Ii,{$isDescShown:r,children:p}),u!==x.pro&&t.jsx(Ei,{children:t.jsx(ne,{onClick:D,$isShown:r})})]}),e===P.photo&&t.jsx(Vi,{children:d.map((C,$)=>t.jsx(Oi,{children:t.jsx(Ni,{src:C,onClick:()=>j($,d)},C)}))}),e===P.video&&t.jsx(Pi,{children:h.map(C=>t.jsx(Ai,{children:t.jsx(Di,{src:C,referrerPolicy:"strict-origin-when-cross-origin",id:"myFrame"})},C))})]})},Wi=e=>n.createElement("svg",{width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M11.0825 2.24378C11.1721 2.15734 11.2435 2.05392 11.2927 1.93957C11.3419 1.82521 11.3678 1.70221 11.369 1.57773C11.3701 1.45325 11.3465 1.32979 11.2994 1.21455C11.2523 1.09931 11.1827 0.994606 11.0947 0.90654C11.0068 0.818475 10.9021 0.748813 10.7869 0.701621C10.6717 0.654428 10.5483 0.63065 10.4238 0.631672C10.2993 0.632695 10.1763 0.658498 10.0619 0.707577C9.9475 0.756656 9.84402 0.828027 9.7575 0.917526L6 4.67378L2.24375 0.917526C2.15792 0.825418 2.05442 0.75154 1.93942 0.7003C1.82442 0.64906 1.70028 0.621508 1.5744 0.619287C1.44852 0.617066 1.32349 0.640222 1.20675 0.687373C1.09001 0.734524 0.983973 0.804705 0.894949 0.893728C0.805926 0.982752 0.735745 1.08879 0.688594 1.20553C0.641442 1.32226 0.618286 1.4473 0.620507 1.57318C0.622728 1.69906 0.650281 1.8232 0.701521 1.9382C0.752761 2.0532 0.826638 2.1567 0.918747 2.24253L4.6725 6.00003L0.916247 9.75628C0.750647 9.934 0.660493 10.1691 0.664778 10.4119C0.669063 10.6548 0.767454 10.8865 0.93922 11.0583C1.11099 11.2301 1.34272 11.3285 1.58559 11.3327C1.82847 11.337 2.06353 11.2469 2.24125 11.0813L6 7.32503L9.75625 11.0825C9.93397 11.2481 10.169 11.3383 10.4119 11.334C10.6548 11.3297 10.8865 11.2313 11.0583 11.0596C11.23 10.8878 11.3284 10.6561 11.3327 10.4132C11.337 10.1703 11.2468 9.93524 11.0812 9.75753L7.3275 6.00003L11.0825 2.24378Z",fill:"black"})),qi=s.div`
  width: ${({$isOpened:e})=>e?"100%":0};
  height: ${({$isOpened:e})=>e?"100vh":0};
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: ${({$isOpened:e})=>e?0:"-100%"};
  top: ${({$isOpened:e})=>e?0:"-100%"};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Ri=s.div`
  background: ${({theme:{colors:e}})=>e.white};
  padding: 1em;
  border-radius: ${({theme:{radiuses:e}})=>e.small};
  display: flex;
  flex-direction: column;
`,Ti=s(Wi)`
  cursor: pointer;
  align-self: flex-end;
  margin: 0.5em;
`,Ve=n.memo(({isOpened:e,onClose:i,children:r})=>t.jsx(qi,{$isOpened:e,onClick:i,children:t.jsxs(Ri,{onClick:c=>c.stopPropagation(),children:[t.jsx(Ti,{onClick:i}),r]})})),Hi=s.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;
`,Zi=s.div`
  height: 600px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${o.md} {
    height: 400px;
    width: 400px;
  }
  ${o.sm} {
    height: 200px;
    width: 200px;
  }
  ${o.xs} {
    height: 150px;
    width: 150px;
  }
`,Yi=s.img`
  width: 100%;
`,Xi=s(Y)`
  transform: rotate(90deg);
  cursor: pointer;
`,_i=s(Y)`
  transform: rotate(-90deg);
  cursor: pointer;
`,Ui=()=>{const e=v(_1),i=v(X1),r=w(),c=()=>{const l=i-1,m=l>=0;r(H(m?l:e.length-1))},a=()=>{const l=i+1,m=l<e.length;r(H(m?l:0))};return t.jsxs(Hi,{children:[t.jsx(Xi,{onClick:c}),t.jsx(Zi,{children:t.jsx(Yi,{src:e[i]})}),t.jsx(_i,{onClick:a})]})},Gi=s.div`
  align-items: center;
  ${o.md} {
    flex-direction: row !important;
  }
`,Qi=s.div`
  max-height: ${({$height:e})=>e}px;
  overflow: hidden;
  ${o.md} {
    max-height: unset;
    max-width: ${({$height:e})=>e}px;
  }
`,Ji=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>e}px;
  transform: translateY(${({$scrollHeight:e})=>e}px);
  transition: ${({theme:e})=>e.transition};
  ${o.md} {
    flex-direction: row;
    transform: translateX(${({$scrollHeight:e})=>e}px);
  }
`,Ki=s.img`
  width: 70px;
  height: 70px;
  border: 3px solid transparent;
  cursor: pointer;
  &:hover {
    border-color: ${({theme:{colors:e}})=>e.main};
  }
`,Oe=s(Y)`
  height: 50px;
  cursor: pointer;
  path {
    stroke-width: 3;
    stroke: ${({$disabled:e,theme:{colors:i}})=>e?i.sub:i.main};
  }
  ${o.md} {
    transform: rotate(-90deg);
  }
`,es=s(Oe)`
  transform: rotate(90deg);
`,ts=n.memo(({sliderPhotos:e})=>{const i=n.useRef(null),r=pe(),[c,a]=n.useState(0),[l,m]=n.useState(0),[p,d]=n.useState({first:!0,second:!1}),h=4,u=10,{onContentClick:j,onContentClose:D,isModalOpened:C}=Ie(),$=()=>{m(f=>{const b=f-c-u,V=Math.abs(b/(c+u))+h;return d(X=>({...X,first:!1})),V===e.length&&d(X=>({...X,second:!0})),V>e.length?f:b})},W=()=>{m(f=>{const b=f+c+u;return d(V=>({...V,second:!1})),b>=0?(d(V=>({...V,first:!0})),0):b})};return n.useEffect(()=>{var b;const f=(b=i==null?void 0:i.current)==null?void 0:b.getBoundingClientRect().height;f&&a(f)},[r]),t.jsxs(t.Fragment,{children:[t.jsxs(Gi,{className:"flex-col-gap",children:[t.jsx(es,{onClick:W,$disabled:p.first}),t.jsx(Qi,{$height:c&&h*(c+u),children:t.jsx(Ji,{$gap:u,$scrollHeight:l,children:e.map((f,b)=>t.jsx(Ki,{src:f,ref:i,onClick:()=>j(b,e)},f))})}),t.jsx(Oe,{onClick:$,$disabled:p.second})]}),t.jsx(Ve,{isOpened:C,onClose:D,children:t.jsx(Ui,{})})]})}),is=s.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1em;
  overflow-y: auto;
  max-height: 500px;
  padding: 1em;
  margin-top: 1em;

  &::-webkit-scrollbar {
    width: 7px;
    border-radius: ${({theme:{radiuses:e}})=>e.small};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:{colors:e}})=>e.main};
    border-radius: ${({theme:{radiuses:e}})=>e.small};
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:{colors:e}})=>e.secondary};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    background-clip: padding-box;
    cursor: pointer;
  }
  ${o.md} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${o.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${o.xs} {
    grid-template-columns: repeat(1, 1fr);
  }
`,ss=s.div`
  border-radius: ${({theme:{radiuses:e}})=>e.small};
  background: ${({$color:e})=>e};
  width: 120px;
  height: 70px;
  cursor: pointer;
  outline: 3px solid
    ${({$isChoosen:e,theme:{colors:i}})=>e?i.main:"unset"};
  outline-offset: 2px;
  box-shadow: 0 1px 5px 0 rgba(0, 53, 133, 0.25);
  ${o.xs} {
    width: unset;
  }
`,os=s.div`
  display: flex;
  gap: 1em;
`,ns=()=>{const e=w(),i=v(ve),r=v(we),{izobox:c}=L(),{allColors:a}=c,[l,m]=n.useState(g.inside),p=n.useCallback(u=>{m(u)},[]),d=u=>{l===g.inside&&e(be(u)),l===g.outside&&e(je(u))},h=n.useMemo(()=>[{value:g.inside,text:"Цвет внутри"},{value:g.outside,text:"Цвет снаружи"}],[]);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex-col-gap",children:[t.jsx("p",{className:"bold",children:"Выберите тип"}),t.jsx(os,{children:t.jsx(oe,{values:h,handleChange:p})})]}),t.jsx(is,{children:a==null?void 0:a.map(u=>t.jsx(ss,{onClick:()=>d(u),$color:u,$isChoosen:l===g.inside&&u===i||l===g.outside&&u===r},u))})]})},rs=s.div`
  display: flex;
  gap: 1em;
  ${o.md} {
    flex-direction: column;
  }
`,as=s.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5em;
  ${o.md} {
    display: none;
  }
`,ls=s.p`
  align-self: flex-start;
  color: ${({theme:{colors:e}})=>e.main};
`,cs=s.p`
  margin-bottom: 0.3em;
  text-decoration: line-through;
`,ds=()=>{const{izobox:e}=L(),i=e.price,r=25,c=e.price/(1-r/100);return t.jsxs(as,{children:[t.jsxs("h4",{children:[i.toLocaleString()," руб."]}),t.jsxs(ls,{className:"bold",children:["-",r,"%"]}),t.jsxs(cs,{children:[c.toLocaleString()," руб."]})]})},ms=s.div`
  display: flex;
  gap: 1em;
  width: fit-content;
  ${o.md} {
    align-self: center;
  }
`,us=()=>{const e=w(),i=n.useMemo(()=>Object.entries(F).map(c=>({value:c[0],text:c[1]})),[]),r=n.useCallback(c=>F[c]===F.with?e(G(x.basic)):e(G(x.basicWithoutWindow)),[e]);return t.jsx(ms,{children:t.jsx(oe,{values:i,handleChange:r})})},ps=()=>{const e=w(),{izobox:i}=L(),r=()=>e(ye());return t.jsxs(t.Fragment,{children:[t.jsx(us,{}),t.jsx(Z,{colors:i.colorsInside,title:"Цвет внутри",colorType:g.inside}),t.jsx(Z,{colors:i.colorsOutside,title:"Цвет снаружи",colorType:g.outside}),t.jsx("p",{className:"bold underline pointer",onClick:r,children:"Все цвета"}),t.jsx(ds,{}),t.jsxs(rs,{children:[t.jsx(J,{to:A.ORDER,children:t.jsx(k,{children:"Купить"})}),t.jsx(k,{sub:!0,children:"В кредит"})]})]})},hs=s.div`
  display: flex;
  gap: 1em;
  ${o.md} {
    align-self: center;
  }
`,xs=()=>{const{izobox:e,chooseIzobox:i}=L(),r=w(),c=a=>{i(a),r(O1())};return t.jsx(hs,{children:Object.values(x).filter(a=>a!==x.basicWithoutWindow).map(a=>t.jsx(k,{choosen:e.type===x.basicWithoutWindow?a===x.basic:e.type===a,onClick:()=>c(a),children:a},a))})},Cs=()=>t.jsxs("div",{className:"flex-col-gap",children:[t.jsxs(S,{className:"semibold",children:[t.jsx("span",{children:"Создай студию своей мечты вместе с "}),t.jsx("span",{className:"bold",children:"IzoBox™"})]}),t.jsx("ul",{children:I.pro.options.map(e=>t.jsx(U,{children:t.jsx("p",{children:e})},e))})]}),gs=s.div`
  display: flex;
  ${o.lg} {
    flex-direction: column;
    align-items: center;
  }
  ${o.md} {
    gap: 2em;
  }
`,fs=s.div`
  display: flex;
  ${o.md} {
    flex-direction: column-reverse;
  }
`,bs=s.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  ${o.lg} {
    width: 100%;
  }
`;s.div`
  display: flex;
  gap: 1em;
`;const js=s.span`
  text-transform: capitalize;
  display: inline-block;
`,ws=()=>{const{izobox:e}=L(),{type:i,sliderPhotos:r,photo:c}=e,a=w(),l=v(H1),m=()=>{a(W1())};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"wrapper",id:K.custom,children:[t.jsxs("h3",{children:["IzoBox"," ",t.jsx(js,{className:"primary-text",children:i===x.basicWithoutWindow?x.basic:i})]}),t.jsxs(gs,{children:[t.jsxs(fs,{children:[t.jsx(ts,{sliderPhotos:r}),t.jsx("img",{src:c})]}),t.jsxs(bs,{children:[t.jsx(xs,{}),(i===x.basic||i===x.basicWithoutWindow)&&t.jsx(ps,{}),i===x.pro&&t.jsx(Cs,{})]})]})]}),t.jsx(Ve,{isOpened:l,onClose:m,children:t.jsx(ns,{})})]})},vs="/izobox/assets/cabine-LWdfY5sA.png",$s="/izobox/assets/cabine-b-fCUyXa0i.png",ys="data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.4615%2014L20%209.01806M20%209.01806L14.4615%204M20%209.01806H2'%20stroke='black'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Ms="/izobox/assets/IzoBox-ql-nxIbL.png",ks=s.div`
  display: flex;
  flex-direction: column;
  background: url(${Ms}) no-repeat;
  ${o.lg} {
    gap: 4em;
  }
`,Ls=s.div`
  display: flex;
  flex-direction: column;
`,zs=s.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  flex-basis: 67%;
  margin-top: 6em;
  ${o.md} {
    margin-top: 0;
  }
`,Ss=s.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
  ${o.lg} {
    flex-direction: column;
  }
`,Bs=s.div`
  flex: 1 1 0;
`,Es=s.div`
  display: flex;
  gap: 1em;
  flex: 1 1 0;
  ${o.sm} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    gap: 1em;
    grid-auto-flow: row dense;
  }
  ${o.xs} {
    justify-items: center;
  }
`,Is=s.img`
  box-shadow: 0 7px 15px 0 rgba(0, 53, 133, 0.25);
  border-radius: ${({theme:e})=>e.radiuses.small};
`,Vs=s.p`
  display: flex;
  gap: 1em;
  align-items: flex-start;
  align-self: flex-end;
  &::after {
    content: url(${ys});
  }
`,Os=[$s,B,E],Ns=()=>t.jsxs(ks,{className:"wrapper",children:[t.jsxs(Ls,{children:[t.jsx("div",{children:t.jsx("img",{src:vs})}),t.jsxs(zs,{children:[t.jsx("h2",{children:"Акустические кабины IzoBox"}),t.jsx(S,{children:"Пой, репетируй, делай продакшн, никому не мешая!"}),t.jsx(Xe,{to:`#${K.custom}`,children:t.jsx(k,{children:"Собрать кастомный IzoBox"})})]})]}),t.jsxs(Ss,{children:[t.jsxs(Bs,{className:"flex-col-gap",children:[t.jsx("h2",{children:"Что такое IzoBox?"}),t.jsx(Be,{children:"Звукоизоляционные вокальные и инструментальные кабины c бесшумной вентиляцией и дизайнерским светом создают все условия для абсолютного комфорта, полного творческого погружения и вдохновения."})]}),t.jsxs("div",{className:"flex-col-gap",children:[t.jsx(Es,{children:Os.map(e=>t.jsx(Is,{src:e},e))}),t.jsx(Vs,{className:"semibold",children:"Больше фото"})]})]})]}),Ps="/izobox/assets/girl-B7RU-GVg.png",me="data:image/svg+xml,%3csvg%20width='34'%20height='26'%20viewBox='0%200%2034%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.62501%2025.5C5.7119%2025.5003%203.87531%2024.7486%202.51128%2023.4072C1.14725%2022.0658%200.365053%2020.242%200.333349%2018.3292C0.145849%2016.5271%200.17293%2013.8687%201.39168%2010.8C2.63751%207.6625%205.06668%204.24167%209.50001%200.916666C9.71888%200.752513%209.96794%200.633075%2010.233%200.565176C10.498%200.497278%2010.7738%200.482242%2011.0446%200.520935C11.5916%200.599075%2012.0852%200.891302%2012.4167%201.33333C12.7482%201.77536%2012.8905%202.33098%2012.8124%202.87796C12.7343%203.42494%2012.442%203.91848%2012%204.25C8.74168%206.69375%206.87502%209.06875%205.80627%2011.1458C6.80827%2010.8885%207.85356%2010.8474%208.87269%2011.0251C9.89183%2011.2028%2010.8615%2011.5954%2011.7172%2012.1767C12.573%2012.758%2013.2952%2013.5147%2013.836%2014.3967C14.3768%2015.2786%2014.7237%2016.2655%2014.8538%2017.2918C14.9838%2018.3181%2014.894%2019.3603%2014.5902%2020.3492C14.2865%2021.3382%2013.7758%2022.2511%2013.0921%2023.0275C12.4084%2023.8039%2011.5673%2024.4258%2010.6247%2024.8521C9.68205%2025.2784%208.65953%2025.4993%207.62501%2025.5ZM26.375%2025.5C24.4619%2025.5003%2022.6253%2024.7486%2021.2613%2023.4072C19.8973%2022.0658%2019.1151%2020.242%2019.0833%2018.3292C18.8958%2016.5271%2018.9229%2013.8687%2020.1417%2010.8C21.3854%207.6625%2023.8167%204.24167%2028.25%200.916666C28.4689%200.752513%2028.7179%200.633075%2028.983%200.565176C29.248%200.497278%2029.5238%200.482242%2029.7946%200.520935C30.3416%200.599075%2030.8352%200.891302%2031.1667%201.33333C31.4982%201.77536%2031.6405%202.33098%2031.5624%202.87796C31.4843%203.42494%2031.192%203.91848%2030.75%204.25C27.4917%206.69375%2025.625%209.06875%2024.5563%2011.1458C25.5583%2010.8885%2026.6036%2010.8474%2027.6227%2011.0251C28.6418%2011.2028%2029.6115%2011.5954%2030.4672%2012.1767C31.323%2012.758%2032.0452%2013.5147%2032.586%2014.3967C33.1268%2015.2786%2033.4737%2016.2655%2033.6038%2017.2918C33.7338%2018.3181%2033.644%2019.3603%2033.3402%2020.3492C33.0365%2021.3382%2032.5258%2022.2511%2031.8421%2023.0275C31.1584%2023.8039%2030.3173%2024.4258%2029.3747%2024.8521C28.4321%2025.2784%2027.4095%2025.4993%2026.375%2025.5Z'%20fill='%23C7DEEC'/%3e%3c/svg%3e",As=s.div`
  background-color: ${({theme:{colors:e}})=>e.background};
  margin-top: 3em;
`,Ds=s.div`
  display: flex;
  gap: 4em;
  align-items: center;
  ${o.lg} {
    padding-top: 2em;
  }
  ${o.md} {
    flex-direction: column;
    gap: 0;
  }
  ${o.sm} {
    max-width: 290px !important;
  }
  ${o.xs} {
    max-width: 200px !important;
  }
`,Fs=s.div`
  position: relative;
  &::before {
    content: url(${me});
    position: absolute;
    display: block;
    top: -15px;
    left: -50px;
    ${o.lg} {
      left: -40px;
    }
  }
  &::after {
    content: url(${me});
    transform: rotate(180deg);
    position: absolute;
    display: block;
    bottom: 50px;
    right: 0;
    ${o.lg} {
      bottom: 80px;
    }
    ${o.xs} {
      bottom: 50px;
    }
  }
  ${o.lg} {
    padding: 2em 0;
  }
  ${o.md} {
    &::before,
    &::after {
      transform: scale(-0.7);
    }
  }
`,Ws=s.div`
  display: flex;
  gap: 1em;
`,qs=s.img`
  border-radius: 100%;
`,Rs=s.img`
  max-height: 220px;
  transform: translateY(-57px) scale(1.5);
  ${o.lg} {
    max-height: 160px;
    transform: translateY(-9px) scale(1.5);
  }
  ${o.lg} {
    display: none;
  }
`,Ts=()=>t.jsx(As,{children:t.jsx(Ds,{className:"wrapper",children:L1.map(({review:e,avatarSrc:i,job:r,name:c},a)=>t.jsxs(t.Fragment,{children:[a===1&&t.jsx(Rs,{src:Ps}),t.jsxs(Fs,{className:"flex-col-gap",children:[t.jsx(Be,{children:e}),t.jsxs(Ws,{children:[t.jsx(qs,{src:i}),t.jsxs("div",{children:[t.jsx(Se,{className:"bold",children:c}),t.jsx("p",{children:r})]})]})]})]},a))})}),Hs=()=>{const[e,i]=n.useState(!1),[r,c]=n.useState([]),a=w(),l=v(J1),m=()=>i(h=>!h),p=n.useCallback(h=>()=>{const u=l.includes(h);a(u?Q1(h):G1(h))},[a,l]),d=n.useCallback(h=>()=>{c(u=>u.includes(h)?u.filter(j=>j!==h):[...u,h])},[]);return t.jsxs("div",{className:"wrapper",children:[t.jsxs(gi,{onClick:m,children:[t.jsx("h3",{className:"primary-text",children:"Прокачай свой IzoBox"}),t.jsx(ne,{$isShown:e})]}),t.jsx(S,{children:"Добавить дополнительные опции"}),e&&t.jsx(fi,{children:z1.map(({option:h,description:u,photo:j,price:D,galleryPhotos:C,id:$})=>{const W=l.includes($),f=r.includes($);return t.jsxs(bi,{children:[t.jsx(vi,{src:j}),t.jsxs("div",{className:"flex-col-gap",children:[t.jsxs(ji,{onClick:d($),children:[t.jsx("h4",{children:h}),t.jsx(wi,{$isShown:f})]}),t.jsx($i,{$isDescShowed:f,children:u})]}),t.jsx(Mi,{children:t.jsx(k,{onClick:p($),sub:W,children:W?"Добавлено":"Добавить"})}),t.jsxs(ki,{children:[t.jsx(Li,{src:j}),C.map(b=>t.jsx(zi,{src:b},b))]}),t.jsxs(yi,{children:[D.toLocaleString()," руб."]})]},$)})})]})},Zs=()=>{const{izobox:e}=L();return t.jsxs(t.Fragment,{children:[t.jsx(Ns,{}),t.jsx(Ts,{}),t.jsx(ws,{}),t.jsx(Fi,{}),e.type===x.basic&&t.jsx(Hs,{}),e.type===x.pro&&t.jsx(Ci,{})]})},Ys=e=>n.createElement("svg",{width:75,height:75,viewBox:"0 0 75 75",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M32.8125 50.1891L21.0938 38.468L24.4055 35.1562L32.8125 43.5609L50.5898 25.7812L53.9062 29.0977L32.8125 50.1891Z",fill:"#3CA5E9"}),n.createElement("path",{d:"M37.5 4.6875C31.0103 4.6875 24.6664 6.61192 19.2704 10.2174C13.8744 13.8229 9.66872 18.9475 7.18522 24.9432C4.70172 30.9389 4.05192 37.5364 5.318 43.9014C6.58408 50.2664 9.70916 56.113 14.2981 60.7019C18.887 65.2909 24.7336 68.4159 31.0986 69.682C37.4636 70.9481 44.0611 70.2983 50.0568 67.8148C56.0525 65.3313 61.1771 61.1256 64.7826 55.7296C68.3881 50.3337 70.3125 43.9897 70.3125 37.5C70.3125 28.7976 66.8555 20.4516 60.702 14.2981C54.5484 8.14452 46.2024 4.6875 37.5 4.6875ZM37.5 65.625C31.9374 65.625 26.4997 63.9755 21.8746 60.8851C17.2495 57.7947 13.6446 53.4021 11.5159 48.263C9.38719 43.1238 8.83022 37.4688 9.91543 32.0131C11.0006 26.5574 13.6793 21.546 17.6126 17.6126C21.546 13.6793 26.5574 11.0006 32.0131 9.91541C37.4688 8.8302 43.1238 9.38717 48.263 11.5159C53.4022 13.6446 57.7947 17.2495 60.8851 21.8746C63.9755 26.4997 65.625 31.9374 65.625 37.5C65.625 44.9592 62.6618 52.1129 57.3874 57.3874C52.1129 62.6618 44.9592 65.625 37.5 65.625Z",fill:"#3CA5E9"})),Xs=s.div`
  align-items: center;
  justify-content: center;
  ${o.lg} {
    gap: 2em !important;
  }
  ${o.md} {
    text-align: center;
  }
`,_s=()=>t.jsxs(Xs,{className:"wrapper flex-col-gap",children:[t.jsx(Ys,{}),t.jsxs(S,{children:["Ваш заказ"," ",t.jsxs("span",{className:"bold",children:["#",Math.ceil(Math.random()*1e5)," "]}),"от"," ",t.jsxs("span",{className:"bold",children:[new Date().toLocaleDateString("en-GB").replaceAll("/",".")," ",new Date().getHours(),":",new Date().getMinutes()]})," ","успешно оформлен."]}),t.jsx(S,{children:"Для согласования сроков и стомости заказа с Вами свяжется менеджер."}),t.jsx(ze,{className:"bold",children:"Спасибо, что выбрали IzoBox!"}),t.jsx(ue,{to:A.MAIN,children:t.jsx(k,{children:"На главную"})})]}),Us=s.div`
  height: 100%;
  display: flex;
`,Gs=()=>t.jsx(Us,{children:t.jsx(_s,{})}),Qs=()=>t.jsxs("div",{className:"wrapper flex-col-gap",children:[t.jsx("p",{children:"Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus."}),t.jsx("p",{children:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."}),t.jsx("p",{children:"Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh."}),t.jsx("p",{children:"Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo. Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio."}),t.jsx("p",{children:"Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl."}),t.jsx("p",{children:"Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."}),t.jsx("p",{children:"Vestibulum dictum ultrices elit a luctus. Sed in ante ut leo congue posuere at sit amet ligula. Pellentesque eget augue nec nisl sodales blandit sed et sem. Aenean quis finibus arcu, in hendrerit purus. Praesent ac aliquet lorem. Morbi feugiat aliquam ligula, et vestibulum ligula hendrerit vitae. Sed ex lorem, pulvinar sed auctor sit amet, molestie a nibh."}),t.jsx("p",{children:"Ut euismod nisl arcu, sed placerat nulla volutpat aliquet. Ut id convallis nisl. Ut mauris leo, lacinia sed elit id, sagittis rhoncus odio. Pellentesque sapien libero, lobortis a placerat et, malesuada sit amet dui. Nam sem sapien, congue eu rutrum nec, pellentesque eget ligula."}),t.jsx("p",{children:"Nunc tempor interdum ex, sed cursus nunc egestas aliquet. Pellentesque interdum vulputate elementum. Donec erat diam, pharetra nec enim ut, bibendum pretium tellus. Vestibulum et turpis nibh. Cras vel ornare velit, ac pretium arcu. Cras justo augue, finibus id sollicitudin et, rutrum eget metus. Suspendisse ut mauris eu massa pulvinar sollicitudin vel sed enim."}),t.jsx("p",{children:"Pellentesque viverra arcu et dignissim vehicula. Donec a velit ac dolor dapibus pellentesque sit amet at erat. Phasellus porttitor, justo eu ultrices vulputate, nisi mi placerat lectus, sed rutrum tellus est id urna. Aliquam pellentesque odio metus, sit amet imperdiet nisl sodales eu."}),t.jsx("p",{children:"Quisque viverra nunc nec vestibulum dapibus. Integer nec diam a libero tincidunt varius sed vel odio. Donec rutrum dapibus massa, vel tempor nulla porta id. Suspendisse vulputate fermentum sem sollicitudin facilisis."}),t.jsx("p",{children:"Aliquam vehicula sapien nec ante auctor, quis mollis leo tincidunt. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo."}),"Nam pulvinar blandit velit, id condimentum diam faucibus at.",t.jsx("p",{children:"Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio."})]}),Js=()=>t.jsx(Qs,{}),Ks="/izobox/assets/Montserrat-Bold-D6Jbzh-_.woff",eo="/izobox/assets/Montserrat-Bold-DDsib7xD.woff2",to="/izobox/assets/Montserrat-Medium-y9Dmgk-9.woff",io="/izobox/assets/Montserrat-Medium-BEHhDI1r.woff2",so="/izobox/assets/Montserrat-Regular-BdAQjODF.woff",oo="/izobox/assets/Montserrat-Regular-tAhv13WX.woff2",no="/izobox/assets/Montserrat-SemiBold-ZATP5mo1.woff",ro="/izobox/assets/Montserrat-SemiBold-DbypEg2j.woff2",ao="/izobox/assets/Poppinsregular-ASVuFN6C.ttf",lo="/izobox/assets/Poppinsregular-Bw6V-bLS.woff",co="/izobox/assets/Poppinsregular-BhGSSJ8_.woff2",mo={createGlobalStyle:Ae},uo=mo.createGlobalStyle`
  @font-face {
    font-family: Montserrat-SemiBold;
    src:
      url(${no}) format("woff"),
      url(${ro}) format("woff2");
  }
  @font-face {
    font-family: Montserrat-Bold;
    src:
      url(${Ks}) format("woff"),
      url(${eo}) format("woff2");
  }
  @font-face {
    font-family: Montserrat-Medium;
    src:
      url(${to}) format("woff"),
      url(${io}) format("woff2");
  }
  @font-face {
    font-family: Montserrat;
    src:
      url(${so}) format("woff"),
      url(${oo}) format("woff2");
  }
  @font-face {
    font-family: Poppins;
    src:
      url(${lo}) format("woff"),
      url(${co}) format("woff2"),
      url(${ao}) format("ttf");
  }
  * {
    box-sizing: border-box;
    margin: 0;
  }
  html,
  body {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    font-size: 16px;
    font-family: Montserrat;
    ${o.md} {
      font-size: 14px;
    }
  }
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  input,
  textarea {
    font-size: 16px;
    font-family: Montserrat;
    &::placeholder {
      color: ${({theme:{colors:e}})=>e.sub};
    }
  }

  button {
    font-size: 16px;
    font-family: Montserrat-SemiBold;
  }
  ul {
    padding: 0 1.5em;
  }
  li {
    list-style-type: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
    color: inherit;
    font-family: Montserrat-SemiBold;
    transition: ${({theme:e})=>e.transition};
    &:hover {
      color: ${({theme:{colors:e}})=>e.main};
    }
  }
  h2 {
    font-family: Montserrat-Bold;
    font-size: 3.1em;
    ${o.md} {
      font-size: 2.1em;
    }
  }
  h3 {
    font-family: Montserrat-SemiBold;
    font-size: 2.5em;
    ${o.md} {
      font-size: 2.1em;
    }
  }
  h4 {
    font-family: Montserrat-Bold;
    font-size: 1.8em;
    ${o.md} {
      font-size: 1.4em;
    }
  }
  h5 {
    font-family: Montserrat-Bold;
    font-size: 1.13em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
  }
  .wrapper {
    max-width: 1140px;
    margin: 0 auto;
    width: 100%;
    ${o.lg} {
      max-width: 800px;
    }
    ${o.md} {
      max-width: 550px;
    }
    ${o.sm} {
      max-width: 370px;
    }
    ${o.xs} {
      max-width: 280px;
    }
  }
  .semibold {
    font-family: Montserrat-SemiBold;
  }
  .bold {
    font-family: Montserrat-Bold;
  }
  .primary-text {
    color: ${({theme:{colors:e}})=>e.main};
  }
  .underline {
    text-decoration: underline;
  }
  .pointer {
    cursor: pointer;
  }
  .flex-col-gap {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .sub-color {
    color: ${({theme:{colors:e}})=>e.sub};
  }
`,po=Te([{element:t.jsx(yt,{}),path:A.MAIN,children:[{element:t.jsx(Zs,{}),index:!0},{element:t.jsx(Js,{}),path:"politics"},{path:A.ORDER,element:t.jsx(Gs,{})}]}],{basename:"/izobox"});Re.createRoot(document.getElementById("root")).render(t.jsx(Ne.StrictMode,{children:t.jsx(qe,{store:et,children:t.jsxs(F1,{children:[t.jsx(uo,{}),t.jsx(D1,{children:t.jsx(He,{router:po})})]})})}));
