(this.webpackJsonpdevelopedbylc=this.webpackJsonpdevelopedbylc||[]).push([[0],{110:function(n,e){},111:function(n,e){},112:function(n,e){},113:function(n,e){},114:function(n,e){},115:function(n,e,t){"use strict";t.r(e);var a=t(1),i=t(0),r=t.n(i),c=t(45),s=t.n(c),o=t(7),d=t(6),l=t(41),j=t(32),b=t(137),h=(t(38),t(29));function p(){var n=Object(o.a)(["\n    color:#78156c;\n    font-family: 'Courgette', cursive;\n    font-size: 1.5rem;\n"]);return p=function(){return n},n}function x(){var n=Object(o.a)(["\n    \n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem 0 1rem 0;\n    @media (max-width: 564px){\n        display: flex;\n        ul{\n            background: #81c51a;\n            position: fixed;\n            height: 100vh;\n            width: 100%;\n            z-index: 10;\n            transition: all 0.3s ease;\n            ","   \n            top: 0;\n            text-align: center;\n            padding-top: 80px;\n            display: block;\n\n            li{\n                display: block;\n                a{\n                    display: inline-block;\n                    margin: 20px 0;\n                    font-size: 25px;\n                }\n            }\n        }\n    }\n    @media (min-width: 565px){\n        display: flex;\n        nav{\n        display:show;}\n    }\n"]);return x=function(){return n},n}function u(){var n=Object(o.a)(["\n    background: #81c51a;\n    ul{\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        display: flex;\n    }\n    nav{\n        float: right;\n    }\n    a{\n        display:block;\n        padding: 0 1rem;\n        text-decoration: none;\n        color: white;\n        &hover{\n            color: white;\n        }\n    }\n"]);return u=function(){return n},n}function m(){var n=Object(o.a)(["\n    color: white;\n    cursor: pointer;\n    z-index: 999;\n    @media (max-width: 564px){\n        display:show;\n    }\n    @media (min-width: 565px){\n        display:none;\n    }\n"]);return m=function(){return n},n}function g(){var n=Object(o.a)(["\n    @media only screen and (min-width: 1050px){\n        display: grid;\n        grid-template-columns: 66% auto;\n    }\n"]);return g=function(){return n},n}var f=d.a.div(g()),O=d.a.div(m()),v=d.a.div(u()),y=d.a.div(x(),(function(n){return n.activeMenu?"\n            left:0;\n            ":"left:-100%;"})),w=d.a.span(p()),k=function(){var n=Object(i.useState)(!1),e=Object(l.a)(n,2),t=e[0],r=e[1];return Object(a.jsx)(v,{children:Object(a.jsx)(b.a,{children:Object(a.jsx)(f,{children:Object(a.jsxs)(y,{activeMenu:t,children:[Object(a.jsx)(h.b,{to:"/developedbylc",children:Object(a.jsx)(w,{children:"Luciano Castro"})}),Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(h.b,{to:"/developedbylc",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(h.b,{to:"/about",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",href:"https://drive.google.com/file/d/1opJVAfbkMXH6LK7Bw2GVTioPXFY8PIAJ/view?usp=sharing",children:"Resume"})})]})}),Object(a.jsx)(O,{onClick:function(){r(!t)},children:t?Object(a.jsx)(j.f,{size:"25"}):Object(a.jsx)(j.a,{size:"25"})})]})})})})},S=t.p+"static/media/icon-frontend.3b1139f5.svg",z=t.p+"static/media/icon-mobile.d1862e53.svg",C=t.p+"static/media/icon-ux.e9092ca1.svg";function N(){var n=Object(o.a)(["\n    background: white;\n    padding: 2em;\n    max-width: 410px;\n    border-radius: 1em;\n    margin-bottom: 1em;\n    img{\n        height: 70px;\n        max-width: 110px;\n    }\n    div{\n        margin: 2em;\n        display: grid;\n        place-content: center;\n    }\n"]);return N=function(){return n},n}var I=d.a.div(N()),R=function(n){var e=n.image,t=n.title,i=n.description;return Object(a.jsxs)(I,{children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:e,alt:"icon"})}),Object(a.jsx)("p",{children:t}),Object(a.jsx)("p",{children:i})]})};function T(){var n=Object(o.a)(["\n    background: #00ffee;\n    z-index: 2;\n    width:100%;\n    margin-top: 10rem;\n    padding: 2em 0;\n    ul{\n        grid-gap: 1em;\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n    }\n    a{\n        text-decoration: none;\n    }\n    @media only screen and (min-width: 1000px){\n        ul{\n            display: flex;\n            grid-template-columns: repeat(3, auto);}\n    }\n    @media only screen and (max-width: 999px){\n        ul{\n            display: grid;\n            grid-template-columns: 100%;}\n    }\n    \n"]);return T=function(){return n},n}var A=d.a.div(T()),_=function(){return Object(a.jsx)(A,{children:Object(a.jsx)(b.a,{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(R,{image:S,title:"Clean Code",description:"Good structure that makes easy to read and do maintenance."})}),Object(a.jsx)("li",{children:Object(a.jsx)(R,{image:z,title:"Responsive",description:"Pages that can be viewed on any devide."})}),Object(a.jsx)("li",{children:Object(a.jsx)(R,{image:C,title:"Adobe",description:"If necessary i have experience with adobe materials."})})]})})})},P=t(21),B=function(){var n={hidden:{y:30},show:{y:-10,transition:{duration:1,ease:"easeOut",repeat:1/0,repeatType:"reverse"}}};return Object(a.jsx)(P.a.svg,{variants:n,initial:"hidden",animate:"show",width:"25",height:"53",viewBox:"0 0 34 65",children:Object(a.jsx)("g",{id:"Grupo_2","data-name":"Grupo 2",transform:"translate(-190 -611)",children:Object(a.jsx)("circle",{id:"Elipse_6","data-name":"Elipse 6",cx:"8",cy:"8",r:"8",transform:"translate(199 622)",fill:"#fff"})})})},L=function(){return Object(a.jsx)(P.a.svg,{variants:{hidden:{x:200,opacity:0},show:{x:0,opacity:1,transition:{duration:1.3,ease:"easeOut"}}},initial:"hidden",animate:"show",xmlns:"http://www.w3.org/2000/svg",width:"565",height:"565",viewBox:"0 0 565 565",children:Object(a.jsxs)(P.a.g,{id:"Grupo_1","data-name":"Grupo 1",transform:"translate(-913 -237)",children:[Object(a.jsx)("rect",{id:"Ret\xe2ngulo_5","data-name":"Ret\xe2ngulo 5",width:"141",height:"141",rx:"37",transform:"translate(1196 237)",fill:"#88d317"}),Object(a.jsx)("rect",{id:"Ret\xe2ngulo_10","data-name":"Ret\xe2ngulo 10",width:"141",height:"141",rx:"37",transform:"translate(1196 520)",fill:"#88d317"}),Object(a.jsx)("rect",{id:"Ret\xe2ngulo_6","data-name":"Ret\xe2ngulo 6",width:"142",height:"142",rx:"37",transform:"translate(1054 378)",fill:"#fff"}),Object(a.jsx)("rect",{id:"Ret\xe2ngulo_9","data-name":"Ret\xe2ngulo 9",width:"142",height:"141",rx:"37",transform:"translate(1054 661)",fill:"#fff"}),Object(a.jsx)("rect",{id:"Ret\xe2ngulo_8","data-name":"Ret\xe2ngulo 8",width:"141",height:"141",rx:"37",transform:"translate(913 520)",fill:"#fff",opacity:"0.43"}),Object(a.jsx)("rect",{id:"Ret\xe2ngulo_7","data-name":"Ret\xe2ngulo 7",width:"141",height:"142",rx:"37",transform:"translate(1337 378)",fill:"#88d317",opacity:"0.43"}),Object(a.jsx)("ellipse",{id:"Elipse_4","data-name":"Elipse 4",cx:"70.5",cy:"71",rx:"70.5",ry:"71",transform:"translate(1196 378)",fill:"#fc23c2"}),Object(a.jsx)("ellipse",{id:"Elipse_5","data-name":"Elipse 5",cx:"71",cy:"70.5",rx:"71",ry:"70.5",transform:"translate(1054 520)",fill:"#0fe"})]})})};function E(){var n=Object(o.a)(["\n    background: #88d317;\n    height: 50vh;\n    margin-left:1rem;\n    display: grid;\n    text-align: left;\n    padding: 4rem 0 4rem 0;\n    span{\n        color: #78156C;\n        font-weight: bold;\n        margin-right: 1rem;\n    }\n    .animate-scroll-down{\n        margin-top: 2rem;\n    }\n    @media only screen and (min-width: 801px) and (max-width: 1049px){\n        display: grid;\n        grid-template-columns: 100%;\n        h1{\n            font-size: 4rem;\n        }\n        h4{\n            font-size: 2rem;\n        }\n        p{\n            font-size: 1rem;\n        }\n    }\n    @media only screen and (min-width: 600px) and (max-width: 800px){\n        display: grid;\n        grid-template-columns: 100%;\n        h1{\n            font-size: 3rem;\n        }\n        h4{\n            font-size: 1.5rem;\n        }\n        p{\n            font-size: 1rem;\n        }\n    }\n    @media only screen and (max-width: 599px){\n        display: grid;\n        grid-template-columns: 100%;\n        h1{\n            font-size: 2rem;\n        }\n        h4{\n            font-size: 1rem;\n        }\n        p{\n            font-size: 1rem;\n        }\n    }\n"]);return E=function(){return n},n}function M(){var n=Object(o.a)(["\n    @media only screen and (min-width: 1050px){\n        height: 120vh;\n        width: 100vh;\n        display: unset;\n        background: white;\n        z-index: 2;\n        margin-top: -20%;\n    }\n    @media only screen and (max-width: 1049px){\n        display: none;\n    }\n"]);return M=function(){return n},n}function F(){var n=Object(o.a)(["\n    min-height: 400px;\n    background: #88D317;\n    color: white;\n    transition: all 0.3s ease;\n    @media only screen and (min-width: 1050px){\n        height: 90vh;\n        \n    }\n    @media only screen and (max-width: 1049px){\n        height: 60vh;\n    }\n"]);return F=function(){return n},n}function G(){var n=Object(o.a)(["\n    @media only screen and (min-width: 1050px){\n        display: grid;\n        grid-template-columns: 66% auto;\n        background: unset;\n    }\n"]);return G=function(){return n},n}function H(){var n=Object(o.a)(["\n    display: absolute;\n    top: 0;\n    left: 0;\n    margin-top: 20%;\n    \n    @media only screen and (min-height: 750px){\n        margin-left: -37%;\n    }\n    @media only screen and (max-height: 749px){\n        margin-left: -45%;\n    }\n"]);return H=function(){return n},n}function J(){var n=Object(o.a)(["\n    display: relative;\n\n"]);return J=function(){return n},n}var D=d.a.div(J()),U=d.a.div(H()),V=Object(d.a)(b.a)(G()),W=d.a.div(F()),Y=d.a.div(M()),X=d.a.div(E()),q=function(){return Object(a.jsx)(W,{children:Object(a.jsxs)(V,{children:[Object(a.jsxs)(X,{children:[Object(a.jsx)("h1",{children:"Hi,"}),Object(a.jsxs)("h1",{children:["I'm ",Object(a.jsx)("span",{children:"Luciano Castro"})]}),Object(a.jsx)("h4",{children:"Front-End Web Developer"}),Object(a.jsx)("div",{className:"animate-scroll-down",children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:Object(a.jsx)(B,{})})," Scroll down to see my projects"]})})]}),Object(a.jsx)(Y,{children:Object(a.jsx)(D,{children:Object(a.jsx)(U,{children:Object(a.jsx)(L,{})})})})]})})};function K(){var n=Object(o.a)(["\n    .title{\n        margin-top: 2rem;\n        text-transform: uppercase;\n        font-weight: bold;\n        color: #81c51a;\n        letter-spacing: 0.5em;\n        font-size: 0.7em;\n    }\n    .catchphrase{\n        color: black;\n        font-weight: bold;\n        font-size: 1.3em;\n        margin-top: -.4em;\n        display: block;\n    }\n    .description{\n        color: #3b3b3b;\n        margin-bottom: 3em;\n        font-size: 0.9em;\n        line-height: 1.8em;\n        font-weight: 600;\n    }\n"]);return K=function(){return n},n}function Q(){var n=Object(o.a)(["\n    padding: 2rem 0;\n    margin: 0 1rem;\n    float: right;\n    a{\n        border: 3px solid #81c51a;\n        padding: 0.7rem;\n        border-radius: 30px;\n        text-decoration: none;\n        color: black;\n        font-weight: 600;\n        margin-left: 1rem;\n        :hover{\n            background: #81c51a;\n            color: white;\n        }\n    }\n"]);return Q=function(){return n},n}var Z=d.a.div(Q()),$=d.a.div(K()),nn=function(n){var e=n.title,t=n.catchphrase,i=n.description,r=n.page,c=n.github;return Object(a.jsxs)($,{children:[Object(a.jsx)("p",{className:"title",children:e}),Object(a.jsx)("p",{className:"catchphrase",children:t}),Object(a.jsx)("p",{className:"description",children:i}),Object(a.jsxs)(Z,{children:[Object(a.jsx)("a",{target:"_blank",href:r,children:"View project"}),Object(a.jsx)("a",{target:"_blank",href:c,children:"GitHub"})]})]})};function en(){var n=Object(o.a)(["\n    margin: 2rem 0;\n    @media only screen and (min-width: 1000px){\n        display: grid;\n        grid-template-columns: 40% auto;\n        a{\n            margin-left: 2em;\n            margin-top: 1em;\n        }\n        div{\n            place-content: center;\n        }\n    }\n"]);return en=function(){return n},n}var tn=d.a.div(en()),an=function(n){var e=n.title,t=n.catchphrase,i=n.description,r=n.page,c=n.github,s=n.image;return Object(a.jsxs)(tn,{children:[Object(a.jsx)(nn,{title:e,catchphrase:t,description:i,page:r,github:c}),Object(a.jsx)("a",{href:r,children:Object(a.jsx)("img",{src:s,alt:e})})]})};function rn(){var n=Object(o.a)(["\n    margin: 2rem 0;\n    @media only screen and (min-width: 1000px){\n        display: grid;\n        a{\n            margin-right: 2em;\n            margin-top: 1em;\n        }\n        grid-template-columns: 60% auto;\n        div{\n            place-content: center;\n        }\n    }\n"]);return rn=function(){return n},n}var cn=d.a.div(rn()),sn=function(n){var e=n.title,t=n.catchphrase,i=n.description,r=n.page,c=n.github,s=n.image;return Object(a.jsxs)(cn,{children:[Object(a.jsx)("a",{href:r,children:Object(a.jsx)("img",{src:s,alt:e})}),Object(a.jsx)(nn,{title:e,catchphrase:t,description:i,page:r,github:c})]})},on=t.p+"static/media/musicplayer.065320dc.png",dn=t.p+"static/media/rockband.e8c483e6.png",ln=t.p+"static/media/Ignite.d048184a.png",jn=t.p+"static/media/NetflixClone.319ecdc8.png";function bn(){var n=Object(o.a)(['\n\n    .line{\n        height: 3px;\n        background: #81c51a;\n        width:100%;\n        margin: 2rem 0;\n    }\n    position: relative;\n    margin: 0 1rem;\n    img{\n        width: 100%;\n    }\n    ::before{\n        content:"";\n        position: absolute;\n        width: 200px;\n        height: 200px;\n        border-radius: 50%;\n        background: #DBEBC4;\n        top: 0;\n        left: 0;\n        z-index: -1;\n    }\n']);return bn=function(){return n},n}var hn=d.a.div(bn()),pn=function(){return Object(a.jsx)(hn,{children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)("h2",{children:"Projects"}),Object(a.jsx)(an,{title:"Netflix Clone",catchphrase:"To watch and relax",description:"A website built with Next JS, Styled Components and API. \r Replicating the main page of Netflix, was used an APi to get the Tv Shows and Movie datas.",page:"https://netflixclone-steaxlc.vercel.app",github:"https://github.com/steaxlc/netflixclone",image:jn}),Object(a.jsx)("div",{className:"line"}),Object(a.jsx)(sn,{title:"Ignite",catchphrase:"Games for you",description:"A website built with React, Styled Components, API and Redux. Using an API to\r request the data of the games, then using Redux to control the data recieved and redering in the\r main page. Was used too a method to search other games and render dynamicaly depending on the results.",page:"https://steaxlc.github.io/ignite/",github:"https://github.com/steaxlc/ignite",image:ln}),Object(a.jsx)("div",{className:"line"}),Object(a.jsx)(an,{title:"Music App",catchphrase:"To listen your favorites musics",description:"A Music Player built with React and SASS. \r It's used a list with the informations of the music, \r like as  Cover Album, color scheme and link to the music so can be render dynamically.",page:"https://steaxlc.github.io/musicplayer/",github:"https://github.com/steaxlc/musicplayer",image:on}),Object(a.jsx)("div",{className:"line"}),Object(a.jsx)(sn,{title:"Rock Band",catchphrase:"To your Band",description:"A website built with HTML, CSS and Bootstrap. It contains four pages,\r the Home Page it have the news about the band in card format, a About Us page with a parallax effect,\r a page with their songs, inspired in Coldplay website design, and a form page to Contact.\r Just an expositive website, non functional.\r ",page:"https://steelhands.steax.repl.co/index.html",github:"/",image:dn})]})})},xn=t.p+"static/media/Ph.5e226609.jpg",un=t(138),mn=t(139),gn=t(140),fn=t(71),On=t.n(fn);function vn(){var n=Object(o.a)(["\n    position: absolute;\n    top: calc(40px * 1);\n    left: calc(40px * 3);\n    bottom: calc(40px * 1);\n    right:  calc(40px * 3);\n    :before{\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: -8px;\n        width: 20px;\n        height: 20px;\n        border-radius:50%;\n        background: rgba(255,0,255,1);\n        box-shadow: 0 0 20px rgba(255,0,255,1),\n                    0 0 40px rgba(255,0,255,1),\n                    0 0 60px rgba(255,0,255,1),\n                    0 0 80px rgba(255,0,255,1),\n                    0 0 8px rgba(255,0,255,.1);\n    }\n"]);return vn=function(){return n},n}function yn(){var n=Object(o.a)(["\n    position: absolute;\n    top: calc(40px * 1);\n    left: calc(40px * 2);\n    bottom: calc(40px * 1);\n    right:  calc(40px * 2);\n    :before{\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: -8px;\n        width: 20px;\n        height: 20px;\n        border-radius:50%;\n        background: rgba(255,0,0,1);\n        box-shadow: 0 0 20px rgba(255,0,0,1),\n                    0 0 40px rgba(255,0,0,1),\n                    0 0 60px rgba(255,0,0,1),\n                    0 0 80px rgba(255,0,0,1),\n                    0 0 8px rgba(255,0,0,.1);\n    }\n"]);return yn=function(){return n},n}function wn(){var n=Object(o.a)(["\n    position: absolute;\n    top: calc(40px * 1);\n    left: calc(40px * 1);\n    bottom: calc(40px * 1);\n    right:  calc(40px * 1);\n    :before{\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: -8px;\n        width: 20px;\n        height: 20px;\n        border-radius:50%;\n        background: rgba(210,105,30,1);\n        box-shadow: 0 0 20px rgba(210,105,30,1),\n                    0 0 40px rgba(210,105,30,1),\n                    0 0 60px rgba(210,105,30,1),\n                    0 0 80px rgba(210,105,30,1),\n                    0 0 8px rgba(210,105,30,.1);\n    }\n"]);return wn=function(){return n},n}function kn(){var n=Object(o.a)(["\n    position: absolute;\n    top: calc(80px * 1);\n    left: calc(80px * 3);\n    bottom: calc(80px * 1);\n    right:  calc(80px * 3);\n    :before{\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: -8px;\n        width: 20px;\n        height: 20px;\n        border-radius:50%;\n        background: rgba(0,226,255,1);\n        box-shadow: 0 0 20px rgba(0,226,255,1),\n                    0 0 40px rgba(0,226,255,1),\n                    0 0 60px rgba(0,226,255,1),\n                    0 0 80px rgba(0,226,255,1),\n                    0 0 8px rgba(0,226,255,.1);\n    }\n"]);return kn=function(){return n},n}function Sn(){var n=Object(o.a)(["\n    position: absolute;\n    top: calc(80px * 1);\n    left: calc(80px * 2);\n    bottom: calc(80px * 1);\n    right:  calc(80px * 2);\n    :before{\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: -8px;\n        width: 20px;\n        height: 20px;\n        border-radius:50%;\n        background: rgba(255,214,0,1);\n        box-shadow: 0 0 20px rgba(255,214,0,1),\n                    0 0 40px rgba(255,214,0,1),\n                    0 0 60px rgba(255,214,0,1),\n                    0 0 80px rgba(255,214,0,1),\n                    0 0 8px rgba(255,214,0,.1);\n    }\n"]);return Sn=function(){return n},n}function zn(){var n=Object(o.a)(["\n    position: absolute;\n    top: calc(80px * 1);\n    left: calc(80px * 1);\n    bottom: calc(80px * 1);\n    right:  calc(80px * 1);\n    :before{\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: -8px;\n        width: 20px;\n        height: 20px;\n        border-radius:50%;\n        background: rgba(134,255,0,1);\n        box-shadow: 0 0 20px rgba(134,255,0,1),\n                    0 0 40px rgba(134,255,0,1),\n                    0 0 60px rgba(134,255,0,1),\n                    0 0 80px rgba(134,255,0,1),\n                    0 0 8px rgba(134,255,0,.1);\n    }\n"]);return zn=function(){return n},n}function Cn(){var n=Object(o.a)(["\n    position: relative;\n"]);return Cn=function(){return n},n}function Nn(){var n=Object(o.a)(["\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    overflow: hidden;\n    background: darkblue;\n"]);return Nn=function(){return n},n}function In(){var n=Object(o.a)(["\n    background: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3));\n    min-height: 80vh;\n    width: 80%;\n    z-index: 3;\n    border-radius: 30px;\n    margin: 3em;\n    @media only screen and (min-width: 1050px){\n        \n            display: flex;\n            flex-direction: row;\n            grid-template-columns: repeat(3, auto);\n    }\n    @media only screen and (max-width: 1049px){\n        \n            display: flex;\n            flex-direction: column;\n            grid-template-columns: 100%;\n    }\n    \n"]);return In=function(){return n},n}function Rn(){var n=Object(o.a)(["\n    background: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3));\n    border-radius: 30px;\n    justify-content: center;\n    align-items: center;\n    @media only screen and (min-width: 1050px){\n        \n        width: 40%;\n    }\n    @media only screen and (max-width: 1049px){\n        width: 100%;\n    }\n    .photo{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        img{\n            margin: 2em;\n            width: 120px;\n            border-radius: 50%;\n        }\n    }\n    a{\n        text-decoration: none;\n        color: black;\n    }\n    .link{\n        margin-top: 1em;\n    }\n    h3{\n        margin-bottom: 2em;\n        font-weight: bold;\n    }\n    .information{\n        padding: 2em;\n        flex-direction: column;\n        display: flex;\n        align-items: left;\n        justify-content: center;\n    }\n"]);return Rn=function(){return n},n}function Tn(){var n=Object(o.a)(["\n    width: 60%;\n    padding: 2em;\n    button{\n        float: right;\n        margin-top: 1em;\n        text-decoration: none;\n        color: white;\n        background: black;\n        padding: 0.8em;\n        border-radius: 30px;\n        box-shadow: none;\n        border: none;\n    }\n    h2{\n        margin-bottom: 1em;\n    }\n    label{\n        margin-top: 0.5em;\n        font-weight: bold;\n        font-size: 20px;\n    }\n    @media only screen and (min-width: 1050px){\n        \n        width: 60%;\n    }\n    @media only screen and (max-width: 1049px){\n        width: 100%;\n    }\n"]);return Tn=function(){return n},n}var An=d.a.div(Tn()),_n=d.a.div(Rn()),Pn=d.a.div(In()),Bn=d.a.div(Nn()),Ln=d.a.div(Cn()),En=Object(d.a)(P.a.span)(zn()),Mn=Object(d.a)(P.a.span)(Sn()),Fn=Object(d.a)(P.a.span)(kn()),Gn=Object(d.a)(P.a.span)(wn()),Hn=Object(d.a)(P.a.span)(yn()),Jn=Object(d.a)(P.a.span)(vn()),Dn=function(){var n={hidden:{y:0,x:0},show:{y:[0,-50,100,400,-200],x:[500,-50,0,-200,700],transition:{duration:5,ease:"easeOut",repeat:1/0,repeatType:"reverse"}}},e={hidden:{y:0,x:0},show:{y:[50,100,-400,0,150],x:[250,0,700,100,1e3],transition:{duration:6,ease:"easeOut",repeat:1/0,repeatType:"reverse"}}},t={hidden:{y:0,x:0},show:{y:[-350,-100,150,-400,150],x:[150,700,400,-200,900],transition:{duration:7,ease:"easeOut",repeat:1/0,repeatType:"reverse"}}},i={hidden:{y:0,x:0},show:{y:[0,50,100,-300,0],x:[0,-900,100,900,-200],transition:{duration:8,ease:"easeOut",repeat:1/0,repeatType:"reverse"}}},r={hidden:{y:0,x:0},show:{y:[-150,100,-200,200,-300],x:[50,-200,400,0,1200],transition:{duration:9,ease:"easeOut",repeat:1/0,repeatType:"reverse"}}},c={hidden:{y:0,x:0},show:{y:[-50,300,-200,-200,-700],x:[-350,1e3,150,900,-150],transition:{duration:10,ease:"easeOut",repeat:1/0,repeatType:"reverse"}}};return Object(a.jsxs)(Bn,{children:[Object(a.jsxs)(Ln,{children:[Object(a.jsx)(En,{variants:n,initial:"hidden",animate:"show"}),Object(a.jsx)(Mn,{variants:e,initial:"hidden",animate:"show"}),Object(a.jsx)(Fn,{variants:t,initial:"hidden",animate:"show"}),Object(a.jsx)(Gn,{variants:i,initial:"hidden",animate:"show"}),Object(a.jsx)(Hn,{variants:r,initial:"hidden",animate:"show"}),Object(a.jsx)(Jn,{variants:c,initial:"hidden",animate:"show"})]}),Object(a.jsxs)(Pn,{children:[Object(a.jsxs)(_n,{children:[Object(a.jsxs)("div",{className:"photo",children:[Object(a.jsx)("img",{src:xn,alt:"me"}),Object(a.jsx)("h3",{children:"Luciano Castro"})]}),Object(a.jsxs)("div",{className:"information",children:[Object(a.jsx)("div",{className:"link",children:Object(a.jsxs)("a",{href:"https://github.com/steaxlc/",children:[Object(a.jsx)(j.b,{size:"30"})," JLucianoCastro"]})}),Object(a.jsx)("div",{className:"link",children:Object(a.jsxs)("a",{href:"https://www.linkedin.com/in/jlucianocastro/",children:[Object(a.jsx)(j.c,{size:"30"})," sTeaxLC"]})}),Object(a.jsxs)("div",{className:"link",children:[Object(a.jsx)(j.d,{size:"30"})," contatolucianocastro@gmail.com"]}),Object(a.jsxs)("div",{className:"link",children:[Object(a.jsx)(j.e,{size:"30"})," +55 (85) 9.9986-6662"]})]})]}),Object(a.jsxs)(An,{children:[Object(a.jsx)("h2",{children:"Get in touch!"}),Object(a.jsxs)(un.a,{onSubmit:function(n){n.preventDefault(),On.a.sendForm("service_eytuxko","template_8u69vdb",n.target,"user_z0IUDgWEdNfo7VzI5t1VW").then((function(n){console.log(n.text)}),(function(n){console.log(n.text)})),n.target.reset()},children:[Object(a.jsx)(mn.a,{for:"name",children:"Name"}),Object(a.jsx)(gn.a,{type:"text",name:"name",id:"name",placeholder:"Your name or Company name"}),Object(a.jsx)(mn.a,{for:"email",children:"Email"}),Object(a.jsx)(gn.a,{type:"email",name:"email",id:"email",placeholder:"Your email"}),Object(a.jsx)(mn.a,{for:"subject",children:"Subject"}),Object(a.jsx)(gn.a,{type:"text",name:"subject",id:"subject",placeholder:"Subject"}),Object(a.jsx)(mn.a,{for:"message",children:"Message"}),Object(a.jsx)(gn.a,{type:"textarea",name:"message",id:"message"}),Object(a.jsx)(gn.a,{type:"submit",name:"submit",id:"submit",value:"Send Message"})]})]})]})]})};function Un(){var n=Object(o.a)(["\n    \n    h2{\n        margin-top: 5rem;\n        text-align: center;\n        font-weight: 600;\n    }\n    \n"]);return Un=function(){return n},n}var Vn=d.a.div(Un()),Wn=function(){return Object(a.jsxs)(Vn,{children:[Object(a.jsx)(q,{}),Object(a.jsx)(pn,{}),Object(a.jsx)(_,{}),Object(a.jsx)(Dn,{})]})},Yn=t.p+"static/media/pic.3e37d502.jpeg",Xn=t(141),qn=t(143),Kn=t(144),Qn=t(146),Zn=t(148),$n=t(149),ne=t(145),ee=t(147),te=t(58),ae=t.n(te),ie=t(151),re=t(150),ce=t(74),se=t.n(ce),oe=t(72),de=t.n(oe),le=t(73),je=t.n(le),be=Object(Xn.a)((function(n){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:n.palette.secondary.main}}})),he=function(){var n=be();return Object(a.jsxs)(qn.a,{align:"alternate",children:[Object(a.jsxs)(Kn.a,{children:[Object(a.jsx)(ne.a,{}),Object(a.jsxs)(Qn.a,{children:[Object(a.jsx)(ee.a,{children:Object(a.jsx)(ae.a,{})}),Object(a.jsx)(Zn.a,{})]}),Object(a.jsxs)($n.a,{children:[Object(a.jsx)(re.a,{variant:"body2",color:"textSecondary",children:"Naja Solutions"}),Object(a.jsxs)(ie.a,{elevation:3,className:n.paper,children:[Object(a.jsx)(re.a,{variant:"h6",component:"h1",children:"2021-today"}),Object(a.jsx)(re.a,{children:"Full time Bug Tester, second line Software Support, trainer and database analysis."})]})]})]}),Object(a.jsxs)(Kn.a,{children:[Object(a.jsx)(ne.a,{}),Object(a.jsxs)(Qn.a,{children:[Object(a.jsx)(ee.a,{children:Object(a.jsx)(ae.a,{})}),Object(a.jsx)(Zn.a,{})]}),Object(a.jsxs)($n.a,{children:[Object(a.jsx)(re.a,{variant:"body2",color:"textSecondary",children:"Naja Solutions"}),Object(a.jsxs)(ie.a,{elevation:3,className:n.paper,children:[Object(a.jsx)(re.a,{variant:"h6",component:"h1",children:"2018-2020"}),Object(a.jsx)(re.a,{children:"Full time first line Software Support, trainer and database analysis."})]})]})]}),Object(a.jsxs)(Kn.a,{children:[Object(a.jsx)(ne.a,{}),Object(a.jsxs)(Qn.a,{children:[Object(a.jsx)(ee.a,{color:"primary",children:Object(a.jsx)(de.a,{})}),Object(a.jsx)(Zn.a,{})]}),Object(a.jsxs)($n.a,{children:[Object(a.jsx)(re.a,{variant:"body2",color:"textSecondary",children:"Farias Brito University Center"}),Object(a.jsxs)(ie.a,{elevation:3,className:n.paper,children:[Object(a.jsx)(re.a,{variant:"h6",component:"h1",children:"2018-2022"}),Object(a.jsx)(re.a,{children:"Graduation in Computer Science."})]})]})]}),Object(a.jsxs)(Kn.a,{children:[Object(a.jsxs)(Qn.a,{children:[Object(a.jsx)(ee.a,{color:"primary",variant:"outlined",children:Object(a.jsx)(je.a,{})}),Object(a.jsx)(Zn.a,{className:n.secondaryTail})]}),Object(a.jsxs)($n.a,{children:[Object(a.jsx)(re.a,{variant:"body2",color:"textSecondary",children:"Naja Solutions"}),Object(a.jsxs)(ie.a,{elevation:3,className:n.paper,children:[Object(a.jsx)(re.a,{variant:"h6",component:"h1",children:"2017-2018"}),Object(a.jsx)(re.a,{children:"Intern as Software Support."})]})]})]}),Object(a.jsxs)(Kn.a,{children:[Object(a.jsx)(Qn.a,{children:Object(a.jsx)(ee.a,{color:"secondary",children:Object(a.jsx)(se.a,{})})}),Object(a.jsxs)($n.a,{children:[Object(a.jsx)(re.a,{variant:"body2",color:"textSecondary",children:"Cear\xe1 State University"}),Object(a.jsxs)(ie.a,{elevation:3,className:n.paper,children:[Object(a.jsx)(re.a,{variant:"h6",component:"h1",children:"2014-2017"}),Object(a.jsx)(re.a,{children:"Intern in a technology laboratory."})]})]})]})]})};function pe(){var n=Object(o.a)(["\n    img{\n        width:90%;\n        height:100%;\n        border-radius: 30px;\n        box-shadow: 13px 10px 5px -4px rgba(0,0,0,0.25);\n    }\n"]);return pe=function(){return n},n}function xe(){var n=Object(o.a)(["\n    margin-right: 2em;\n    \n    p{\n        text-align: justify;\n        margin: 2em 0;\n        font-size: 1.5em;\n    }\n"]);return xe=function(){return n},n}function ue(){var n=Object(o.a)(["\n    @media only screen and (min-width: 1000px){\n        display: grid;\n        grid-template-columns: 60% auto;\n    }\n    margin: 2em 1em;\n    h2{\n        font-size: 3em;\n        font-weight: bold;\n        letter-spacing: 5px;\n    }\n\n"]);return ue=function(){return n},n}function me(){var n=Object(o.a)(["\n    margin: 0em 1em;\n"]);return me=function(){return n},n}var ge=d.a.div(me()),fe=d.a.div(ue()),Oe=d.a.div(xe()),ve=d.a.div(pe()),ye=function(){return Object(a.jsx)(ge,{children:Object(a.jsxs)(b.a,{children:[Object(a.jsxs)(fe,{children:[Object(a.jsxs)(Oe,{children:[Object(a.jsx)("h2",{children:"About Me"}),Object(a.jsx)("p",{children:"Hi, I'm Luciano Castro, brazilian front-end web developer. I like to learn, new challenges, try to create or replicate designs. I'm finishing my graduation in Computer Science. I have experience with Customer Service and database manipulation, in particular, with SQL Server."})]}),Object(a.jsx)(ve,{children:Object(a.jsx)("img",{src:Yn,alt:"me"})})]}),Object(a.jsx)(he,{})]})})},we=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(ye,{})})},ke=t(59),Se=(t.p,t.p+"static/media/luciano.bd01afb2.pdf"),ze=function(){var n=Object(i.useState)(null),e=Object(l.a)(n,2),t=e[0],r=e[1],c=Object(i.useState)(1),s=Object(l.a)(c,2),o=s[0];s[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)(ke.a,{file:Se,onLoadSuccess:function(n){var e=n.numPages;r(e)},children:Object(a.jsx)(ke.b,{pageNumber:o})}),Object(a.jsxs)("p",{children:["Page ",o," of ",t]})]})},Ce=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(ze,{})})},Ne=t(11);function Ie(){var n=Object(o.a)(["\n  font-family: 'Nunito', sans-serif;\n  overflow-x: hidden;\n"]);return Ie=function(){return n},n}var Re=d.a.div(Ie()),Te=function(){return Object(a.jsxs)(Re,{children:[Object(a.jsx)(k,{}),Object(a.jsxs)(Ne.c,{children:[Object(a.jsx)(Ne.a,{path:"/developedbylc",exact:!0,children:Object(a.jsx)(Wn,{})}),Object(a.jsx)(Ne.a,{path:"/about",children:Object(a.jsx)(we,{})}),Object(a.jsx)(Ne.a,{path:"/resume",children:Object(a.jsx)(Ce,{})})]})]})},Ae=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,153)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),a(n),i(n),r(n),c(n)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(h.a,{children:Object(a.jsx)(Te,{})})}),document.getElementById("root")),Ae()}},[[115,1,2]]]);
//# sourceMappingURL=main.966d01df.chunk.js.map