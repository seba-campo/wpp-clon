var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequire6c15;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},e.parcelRequire6c15=r),r.register("gPNMe",function(e,t){e.exports=new URL(r("27Lyk").resolve("dCh8C"),import.meta.url).toString()}),r.register("bV7Mj",function(e,t){e.exports=new URL(r("27Lyk").resolve("dTl3G"),import.meta.url).toString()}),r.register("6DNN2",function(e,t){e.exports=new URL(r("27Lyk").resolve("kQqv5"),import.meta.url).toString()}),r.register("3lHJf",function(e,t){e.exports=new URL(r("27Lyk").resolve("458Cq"),import.meta.url).toString()}),r.register("3vCYr",function(e,t){e.exports=new URL(r("27Lyk").resolve("iKwvN"),import.meta.url).toString()}),r.register("6uJzw",function(e,t){e.exports=new URL(r("27Lyk").resolve("8op45"),import.meta.url).toString()});class i extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){}render(){let e=r("gPNMe"),t=r("bV7Mj"),a=r("6DNN2");this.shadow.innerHTML=`
      <div class="chat-root-div">
        <div class="about-message">
          <div class="message-head">
            <img class="head-img" src=${t}>
          </div>

          <div class="message-title">
            <p class="message-title-p center"><strong>Hola, soy Sebas!!</strong></p>
          </div>
          <div class="message-description">
            <p class="message-description-p">Bienvenido a mi sitio, lo hice con mucho amor, espero que te guste!</p>
            <p class="message-description-p">Tengo 24 a\xf1os, me encanta la <strong>m\xfasica🎶</strong> y la <strong>tecnolog\xeda🖥️</strong>. He estudiado en ambas orientaciones desde que termin\xe9 el secundario.</p>

          </div>
          <div class="image-guitar-div">
            <img class="guitar-img" src=${a}>
          </div>
          <div class="message-description">
            <p class="message-description-p space">Estudi\xe9 cuatro a\xf1os en el Instituto superior de m\xfasica Jos\xe9 Hernandez 🎶, especializ\xe1ndome en piano 🎹. Por cuestiones personales no pude seguir, pero estoy tramitando el re-ingreso para este 2024!.
              De todas maneras, durante los a\xf1os que no curs\xe9 hice m\xfasica y segu\xed mejorando mi t\xe9cnica y conocimiento.
              <br>Pod\xe9s ver mas sobre esto en el chat de Contacto ;)
            </p>
          </div>
          <div class="message-description">
            <p class="message-description-p space">Otras de mis aficiones es la tecnolog\xeda, la cual tengo afinidad desde peque\xf1o. 
              Tratandose de programas y computadoras, siempre tuve un gran inter\xe9s, y m\xe1s aun en entender como funcionan y poder hacer
              programas y juegos.
              Tuve la oportunidad de comenzar a trabajar como analista de soporte de aplicaciones y con dicho avance, me encamin\xe9 en aprender
              mas a fondo como poder hacer estas aplicaciones por mi cuenta!
              <br>
              Me anot\xe9 entonces en un curso de programaci\xf3n (sin saber nada) y desde entonces (muchos bugs y horas de codeo despues), me encuentro haciendo
              p\xe1ginas y apps!
              Y lo mejor de todo, es que a\xfan queda infinidades de cosas por aprender!
              <br>
              Las cosas que fu\xed armando, las tengo todas en el chat de Trabajos :D
            </p>
          </div>
          <div class="message-description">
            <p class="message-description-p space">
              
            </p>
          </div>
        </div>
      </div>
      `;let i=document.createElement("style");i.textContent=`
        .chat-root-div{
          height: 80vh;
          background-color: #272727;
          padding: 3px 5px;
          overflow-y: auto;
        }
        @media (min-width: 768px){
          .chat-root-div{
          height: 86vh;
          width: 75vw;
          overflow-x: hidden;
          margin: 0 0;
          padding: 0;
          }

          .chat-root-div::-webkit-scrollbar-track {
            border: 1px solid #000;
            padding: 2px 0;
            background-color: #404040;
          }
          
          .chat-root-div::-webkit-scrollbar {
            width: 9px;
          }
          
          .chat-root-div::-webkit-scrollbar-thumb {
            border-radius: 10px;
            box-shadow: inset 0 0 6px rgba(0,0,0,.6);
            background-color: #737272;
            border: 1px solid #000;
          }
        }
        
        .chat-root-div::before{
          content: "";
          background-image: url(${e});
          background-size: cover;
          position: absolute;
          top: 20vh;
          right: 0px;
          bottom: 0px;
          left: 0px;
          opacity: 0.25;
        }
        @media (min-width: 768px){
          .chat-root-div::before{
            top: 14vh;
            left: 25vw;
            background-size: contain;
            background-repeat: repeat;
          }
        }

        .about-message{
          position: relative;
          margin: 0;
          padding: 5px 15px;
          background-color: #025c4c;
          width: 87vw;
          border-radius: 10px;
          display: flex; 
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        @media (min-width: 768px){
          .about-message{
            width: 55vw;
            margin: 15px 15px;
          }
        }

        .head-img{
          width: 250px;
        }

        .image-guitar-div{
          margin: 20px 0;
        }

        .guitar-img{
          width: 150px;

        }

        .message-title{
          width: 100%;
        }

        .message-title-p,
        .message-description-p{
          color: #ccdedb;
          font-size: 20px;
          text-align: start;
          margin: 5px 6px ;
        }

        .center{
          text-align: center
        }

        .space{
          margin: 15px 6px;
        }
      `,this.shadow.appendChild(i)}}customElements.define("about-page",i);class s extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){}render(){let e=r("gPNMe");this.shadow.innerHTML=`
      <div class="chat-root-div">

        <div class="experience">
          <div class="message-head">
            <img class="head-img" src=>
          </div>

          <div class="message-title">
            <p class="message-title-p center"><strong>Desarrollador Front-end</strong></p>
          </div>
          <div class="message-title">
            <p class="message-title-p center"><a href="https://www.lepton.com.ar/web/" target="_blank">Lepton Sistemas</a></p>
          </div>
          <div class="message-title">
            <p class="message-title-p center">Junio 2023 - Septiembre 2023</p>
          </div>
          <div class="message-description">
            <p class="message-description-p">Me involucr\xe9 en un proyecto front-end para un sistema de dise\xf1o 3d web.
              <br>
              Trabajamos con un grupo reducido de integrantes e implementamos una interfaz amigable y funcional para el sistema, la informaci\xf3n tecnica la pod\xe9s encontrar <a href="https://www.linkedin.com/in/seba-campo" target="_blank">ac\xe1</a>
            </p>
          </div>
        </div>

        <div class="experience">
          <div class="message-head">
            <img class="head-img" src=>
          </div>

          <div class="message-title">
            <p class="message-title-p center"><strong>Analista de Soporte T\xe9cnico</strong></p>
          </div>
          <div class="message-title">
            <p class="message-title-p center"><a href="https://www.lepton.com.ar/web/" target="_blank">Lepton Sistemas</a></p>
          </div>
          <div class="message-title">
            <p class="message-title-p center">Junio 2021 - Agosto 2023</p>
          </div>
          <div class="message-description">
            <p class="message-description-p">Brind\xe9 soporte de nivel 1, 2 y 3 a sistemas de dise\xf1o y producci\xf3n de amoblamientos.
              <br>
              Entre mis tareas realizaba tambi\xe9n implementaciones, an\xe1lisis de errores y dictaba capacitaciones a nuevos clientes.
              <br>
              Los detalles t\xe9cncios del puesto lo podr\xe1s encontrar <a href="https://www.linkedin.com/in/seba-campo" target="_blank">ac\xe1</a>
            </p>
          </div>
      </div>
      <div class="experience">
          <div class="message-head">
            <img class="head-img" src=>
          </div>

          <div class="message-title">
            <p class="message-title-p center"><strong>Operario de Dep\xf3sito</strong></p>
          </div>
          <div class="message-title">
            <p class="message-title-p center">BGS Comercial</p>
          </div>
          <div class="message-title">
            <p class="message-title-p center">Septiembre 2020 - Diciembre 2020</p>
          </div>
          <div class="message-description">
            <p class="message-description-p">Operario de dep\xf3sito en f\xe1brica de muebles. 
              <br>
              Realizaba tareas generales de producci\xf3n y empaquetado de muebles de melamina. 
            </p>
          </div>
        </div>
        <div class="experience">
          <div class="message-head">
            <img class="head-img" src=>
          </div>

          <div class="message-title">
            <p class="message-title-p center"><strong>Cocinero A / Ayudante de cocina</strong></p>
          </div>
          <div class="message-title">
            <p class="message-title-p center"><a href="https://www.instagram.com/meetingfoodarg/" target="_blank">Meeting Food</a></p>
          </div>
          <div class="message-title">
            <p class="message-title-p center">Mayo  2019 - Marzo 2020</p>
          </div>
          <div class="message-description">
            <p class="message-description-p">Cocinero en bar de minutas y comidas al paso.
          </div>
        </div>
        <div class="experience">
          <div class="message-head">
            <img class="head-img" src=>
          </div>

          <div class="message-title">
            <p class="message-title-p center"><strong>Vendedor</strong></p>
          </div>
          <div class="message-title">
            <p class="message-title-p center"><a href="https://www.google.com.ar/maps/place/Pescader%C3%ADa+Florida+Fish/@-34.5341161,-58.5048638,15z/data=!4m6!3m5!1s0x95bcb6d4e7ea1d63:0xccd5ad2aa574e497!8m2!3d-34.534505!4d-58.5051749!16s%2Fg%2F11b8_l0ms7?hl=es-419&entry=ttu" target="_blank">Florida Fish</a></p>
          </div>
          <div class="message-title">
            <p class="message-title-p center">Noviembre 2018 - Abril 2019</p>
          </div>
          <div class="message-description">
            <p class="message-description-p">Vendedor en pescader\xeda, atenci\xf3n al cliente y manejo de caja.</p>
          </div>
        </div>
      `;let t=document.createElement("style");t.textContent=`
      .chat-root-div{
        height: 80vh;
        background-color: #272727;
        padding: 3px 5px;
        overflow-y: auto;
      }
      @media (min-width: 768px){
        .chat-root-div{
        height: 86vh;
        width: 75vw;
        overflow-x: hidden;
        margin: 0 0;
        padding: 0;
        }

        .chat-root-div::-webkit-scrollbar-track {
          border: 1px solid #000;
          padding: 2px 0;
          background-color: #404040;
        }
        
        .chat-root-div::-webkit-scrollbar {
          width: 9px;
        }
        
        .chat-root-div::-webkit-scrollbar-thumb {
          border-radius: 10px;
          box-shadow: inset 0 0 6px rgba(0,0,0,.6);
          background-color: #737272;
          border: 1px solid #000;
        }
      }
      
      .chat-root-div::before{
        content: "";
        background-image: url(${e});
        background-size: cover;
        position: absolute;
        top: 20vh;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.25;
      }
      @media (min-width: 768px){
        .chat-root-div::before{
          top: 14vh;
          left: 25vw;
          background-size: contain;
          background-repeat: repeat;
        }
      }

      .experience{
        position: relative;
        margin: 15px 0;
        padding: 5px 15px;
        background-color: #025c4c;
        width: 87vw;
        border-radius: 10px;
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      @media (min-width: 768px){
        .experience{
          width: 55vw;
          margin: 15px 15px;
        }
      }

      .head-img{
        width: 250px;
      }

      .image-guitar-div{
        margin: 20px 0;
      }

      .guitar-img{
        width: 150px;

      }

      .message-title{
        width: 100%;
      }

      .message-title-p,
      .message-description-p{
        color: #ccdedb;
        font-size: 20px;
        text-align: start;
        margin: 5px 6px ;
      }

      .center{
        text-align: center
      }

      .space{
        margin: 15px 6px;
      }

      a{
        color: #9abeb7;
        text-decoration: none;
      }
      a:visited {
        color: #9abeb7;
      }
      a:hover {
        color: #8fb7b0;
      }
      `,this.shadow.appendChild(t)}}customElements.define("exp-page",s);class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){}render(){let e=r("gPNMe");this.shadow.innerHTML=`
      <div class="chat-root-div">
        <div class="experience">
          <div class="message-head">
            <img class="head-img" src=>
          </div>

          <div class="message-title">
            <p class="message-title-p center"><strong>Piedra Papel O Tijera</strong></p>
          </div>

          <div class="message-title">
            <p class="message-title-p center"><a href="https://seba-campo.github.io/desafio-m5/welcome" target="_blank">Deploy</a></p>
          </div>  

          <div class="message-title">
            <p class="message-title-p center"><a href="https://github.com/seba-campo/desafio-m5" target="_blank">Repo</a></p>
          </div>
          <div class="message-title">
            <p class="message-title-p-tech center">
              <!-- TS-->
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  height="1em" viewBox="0,0,256,256">
              <g fill="#fafafa" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M5,4c-0.55226,0.00006 -0.99994,0.44774 -1,1v40c0.00006,0.55226 0.44774,0.99994 1,1h40c0.55226,-0.00006 0.99994,-0.44774 1,-1v-40c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM6,6h38v38h-38zM15,23v3.44531h5v15.55469h4v-15.55469h5v-3.44531zM36.69141,23.00977c-3.11462,-0.0124 -6.67383,0.93145 -6.67383,5.31445c0,5.73 7.7207,5.73141 7.7207,8.31641c0,0.245 0.10391,2.02539 -2.62109,2.02539c-2.725,0 -4.99609,-1.71289 -4.99609,-1.71289v4.1582c0,0 11.88086,3.84273 11.88086,-4.82227c-0.001,-5.625 -7.79297,-5.34367 -7.79297,-8.13867c0,-1.083 0.76939,-2.0957 2.90039,-2.0957c2.131,0 4.01758,1.25781 4.01758,1.25781l0.14063,-3.70508c0,0 -2.15369,-0.58801 -4.57617,-0.59766z"></path></g></g>
              </svg>

              <!-- HTML -->
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><style>svg{fill:#fafafa}</style><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>

              <!-- css -->
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#fafafa}</style><path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"/></svg>

              <!-- NODE -->
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><style>svg{fill:#fafafa}</style><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"/></svg>

              <!-- GH -->
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 480 512"><style>svg{fill:#fafafa}</style><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
            </p>

          </div>
          <div class="message-description">
            <p class="message-description-p">Juego de piedra papel o tijera offline contra la compu.</p>
          </div>
          <div class="message-description">
            <p class="message-description-p">Aplicaci\xf3n single page, con router y state armado 100% en JS (typescript).</p>
          </div>
        </div>


        <div class="experience">
          <div class="message-head">
            <img class="head-img" src=>
          </div>

          <div class="message-title">
            <p class="message-title-p center"><strong>Landing Page Personal</strong></p>
          </div>

          <div class="message-title">
            <p class="message-title-p center"><a href="https://seba-campo.github.io/desafio-m4/index.html" target="_blank">Deploy</a></p>
          </div>  

          <div class="message-title">
            <p class="message-title-p center"><a href="https://github.com/seba-campo/desafio-m4" target="_blank">Repo</a></p>
          </div>
          <div class="message-title">
            <p class="message-title-p-tech center">
              <!-- TS-->
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  height="1em" viewBox="0,0,256,256">
              <g fill="#fafafa" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M5,4c-0.55226,0.00006 -0.99994,0.44774 -1,1v40c0.00006,0.55226 0.44774,0.99994 1,1h40c0.55226,-0.00006 0.99994,-0.44774 1,-1v-40c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM6,6h38v38h-38zM15,23v3.44531h5v15.55469h4v-15.55469h5v-3.44531zM36.69141,23.00977c-3.11462,-0.0124 -6.67383,0.93145 -6.67383,5.31445c0,5.73 7.7207,5.73141 7.7207,8.31641c0,0.245 0.10391,2.02539 -2.62109,2.02539c-2.725,0 -4.99609,-1.71289 -4.99609,-1.71289v4.1582c0,0 11.88086,3.84273 11.88086,-4.82227c-0.001,-5.625 -7.79297,-5.34367 -7.79297,-8.13867c0,-1.083 0.76939,-2.0957 2.90039,-2.0957c2.131,0 4.01758,1.25781 4.01758,1.25781l0.14063,-3.70508c0,0 -2.15369,-0.58801 -4.57617,-0.59766z"></path></g></g>
              </svg>

              <!-- HTML -->
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><style>svg{fill:#fafafa}</style><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>

              <!-- css -->
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#fafafa}</style><path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"/></svg>

              <!-- NODE -->
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><style>svg{fill:#fafafa}</style><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"/></svg>

              <!-- GH -->
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 480 512"><style>svg{fill:#fafafa}</style><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
            </p>
          </div>
          <div class="message-description">
            <p class="message-description-p">P\xe1gina personal, con diferentes secciones, 100% responsive.</p>
          </div>
          <div class="message-description">
            <p class="message-description-p">P\xe1gina de proyecto de maquetaci\xf3n, dise\xf1ada mobile first. Conectada a <a src="https://www.contentful.com/" target="_blank">Contentful (cms)</a>, para obtener via API su contenido.</p>
          </div>
        </div>

        <div class="experience">
        <div class="message-head">
          <img class="head-img" src=>
        </div>

        <div class="message-title">
          <p class="message-title-p center"><strong>Maqueta Page Personal</strong></p>
        </div>

        <div class="message-title">
          <p class="message-title-p center"><a href="https://seba-campo.github.io/m3-desafio/" target="_blank">Deploy</a></p>
        </div>  

        <div class="message-title">
          <p class="message-title-p center"><a href="https://github.com/seba-campo/m3-desafio" target="_blank">Repo</a></p>
        </div>
        <div class="message-title">
          <p class="message-title-p-tech center">
            
            <!-- JS -->
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#fafafa}</style><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>

            <!-- HTML -->
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><style>svg{fill:#fafafa}</style><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>

            <!-- css -->
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>svg{fill:#fafafa}</style><path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"/></svg>

            <!-- GH -->
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 480 512"><style>svg{fill:#fafafa}</style><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
          </p>
        </div>
        <div class="message-description">
          <p class="message-description-p">Otra p\xe1gina personal, versi\xf3n est\xe1tica, 100% responsive.</p>
        </div>
        <div class="message-description">
          <p class="message-description-p">P\xe1gina de proyecto de maquetaci\xf3n, dise\xf1ada mobile first.</p>
        </div>
      </div>

        <div class="experience">
            <div class="message-head">
              <img class="head-img" src=>
            </div>

            <div class="message-title">
              <p class="message-title-p center"><strong>Page monol\xedtica con jQuery</strong></p>
            </div>

            <div class="message-title">
              <p class="message-title-p center"><a href="https://seba-campo.github.io/WebProject/" target="_blank">Deploy</a></p>
            </div>  

            <div class="message-title">
              <p class="message-title-p center"><a href="https://github.com/seba-campo/WebProject" target="_blank">Repo</a></p>
            </div>
            <div class="message-title">
              <p class="message-title-p-tech center">
                
                <!-- JS -->
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#fafafa}</style><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>

                <!-- HTML -->
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><style>svg{fill:#fafafa}</style><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>

                <!-- css -->
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>svg{fill:#fafafa}</style><path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"/></svg>

                <!-- GH -->
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 480 512"><style>svg{fill:#fafafa}</style><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
              </p>
            </div>
            <div class="message-description">
              <p class="message-description-p">Pagina de prueba de la librer\xeda jQuery</p>
            </div>
            <div class="message-description">
              <p class="message-description-p">P\xe1gina de proyecto de maquetaci\xf3n</p>
            </div>
          </div>
      </div>
      `;let t=document.createElement("style");t.textContent=`
        .chat-root-div{
          height: 80vh;
          background-color: #272727;
          padding: 3px 5px;
          overflow-y: auto;
        }
        @media (min-width: 768px){
          .chat-root-div{
          height: 86vh;
          width: 75vw;
          overflow-x: hidden;
          margin: 0 0;
          padding: 0;
          }

          .chat-root-div::-webkit-scrollbar-track {
            border: 1px solid #000;
            padding: 2px 0;
            background-color: #404040;
          }
          
          .chat-root-div::-webkit-scrollbar {
            width: 9px;
          }
          
          .chat-root-div::-webkit-scrollbar-thumb {
            border-radius: 10px;
            box-shadow: inset 0 0 6px rgba(0,0,0,.6);
            background-color: #737272;
            border: 1px solid #000;
          }
        }
        
        .chat-root-div::before{
          content: "";
          background-image: url(${e});
          background-size: cover;
          position: absolute;
          top: 20vh;
          right: 0px;
          bottom: 0px;
          left: 0px;
          opacity: 0.25;
        }
        @media (min-width: 768px){
          .chat-root-div::before{
            top: 14vh;
            left: 25vw;
            background-size: contain;
            background-repeat: repeat;
          }
        }

        .experience{
          position: relative;
          margin: 15px 0;
          padding: 5px 15px;
          background-color: #025c4c;
          width: 87vw;
          border-radius: 10px;
          display: flex; 
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        @media (min-width: 768px){
          .experience{
            width: 55vw;
            margin: 15px 15px;
          }
        }

        .head-img{
          width: 250px;
        }

        .image-guitar-div{
          margin: 20px 0;
        }

        .guitar-img{
          width: 150px;

        }

        .message-title{
          width: 100%;
        }

        .message-title-p,
        .message-description-p{
          color: #ccdedb;
          font-size: 20px;
          text-align: start;
          margin: 5px 6px ;
        }

        .message-title-p-tech{
          margin: 4px 0;
          font-size: 25px;
        }

        .center{
          text-align: center
        }

        .space{
          margin: 15px 6px;
        }

        a{
          color: #9abeb7;
          text-decoration: none;
        }
        a:visited {
          color: #9abeb7;
        }
        a:hover {
          color: #8fb7b0;
        }
        
      `,this.shadow.appendChild(t)}}customElements.define("works-page",n);class o extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){}render(){let e=r("gPNMe");this.shadow.innerHTML=`
      <div class="chat-root-div">
        <div class="chat-root-div__title-div">
          <h1 class="chat-root-div__tile-h1">Contact</h1>  
        </div>
      </div>
      `;let t=document.createElement("style");t.textContent=`
      .chat-root-div{
        height: 80vh;
        background-color: #272727;
        padding: 3px 5px;
        overflow-y: auto;
      }
      @media (min-width: 768px){
        .chat-root-div{
        height: 86vh;
        width: 75vw;
        overflow-x: hidden;
        margin: 0 0;
        padding: 0;
        }

        .chat-root-div::-webkit-scrollbar-track {
          border: 1px solid #000;
          padding: 2px 0;
          background-color: #404040;
        }
        
        .chat-root-div::-webkit-scrollbar {
          width: 9px;
        }
        
        .chat-root-div::-webkit-scrollbar-thumb {
          border-radius: 10px;
          box-shadow: inset 0 0 6px rgba(0,0,0,.6);
          background-color: #737272;
          border: 1px solid #000;
        }
      }
      
      .chat-root-div::before{
        content: "";
        background-image: url(${e});
        background-size: cover;
        position: absolute;
        top: 20vh;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.25;
      }
      @media (min-width: 768px){
        .chat-root-div::before{
          top: 14vh;
          left: 25vw;
          background-size: contain;
          background-repeat: repeat;
        }
      }
      `,this.shadow.appendChild(t)}}customElements.define("contact-page",o);class c extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){}render(){r("gPNMe"),// const chatHeaderEl = document.querySelector(".chat-header-el") as HTMLElement;
// chatHeaderEl.style.display = "none";
this.shadow.innerHTML=`
      <div class="cover">
        
      </div>
      `;let e=document.createElement("style");e.textContent=`
      .cover{
        height: 89vh;
        background-color: #272727;
        padding: 3px 5px;
        overflow-y: auto;
      }
      @media (min-width: 768px){
        .cover{
        height: 86vh;
        width: 75vw;
        overflow-x: hidden;
        margin: 0 0;
        padding: 0;
        }
      `,this.shadow.appendChild(e)}}function l(e){return Array.isArray(e=e||[])?e:[e]}function d(e){return`[Vaadin.Router] ${e}`}customElements.define("home-page",c);const p="module",h="nomodule",m=[p,h];function g(e){if(!e.match(/.+\.[m]?js$/))throw Error(d(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function u(e){if(!e||!_(e.path))throw Error(d('Expected route config to be an object with a "path" string property, or an array of such objects'));let t=e.bundle,a=["component","redirect","bundle"];if(!b(e.action)&&!Array.isArray(e.children)&&!b(e.children)&&!x(t)&&!a.some(t=>_(e[t])))throw Error(d(`Expected route config "${e.path}" to include either "${a.join('", "')}" or "action" function but none found.`));if(t){if(_(t))g(t);else if(m.some(e=>e in t))m.forEach(e=>e in t&&g(t[e]));else throw Error(d('Expected route bundle to include either "'+h+'" or "'+p+'" keys, or both'))}e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(d(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function v(e){l(e).forEach(e=>u(e))}function f(e,t){let a=document.head.querySelector('script[src="'+e+'"][async]');return a||((a=document.createElement("script")).setAttribute("src",e),t===p?a.setAttribute("type",p):t===h&&a.setAttribute(h,""),a.async=!0),new Promise((e,t)=>{a.onreadystatechange=a.onload=t=>{a.__dynamicImportLoaded=!0,e(t)},a.onerror=e=>{a.parentNode&&a.parentNode.removeChild(a),t(e)},null===a.parentNode?document.head.appendChild(a):a.__dynamicImportLoaded&&e()})}function w(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function x(e){// guard against null passing the typeof check
return"object"==typeof e&&!!e}function b(e){return"function"==typeof e}function _(e){return"string"==typeof e}function y(e){let t=Error(d(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const k=new class{};// The list of checks is not complete:
//  - SVG support is missing
//  - the 'rel' attribute is not considered
function C(e){// ignore the click if the default action is prevented
if(e.defaultPrevented||0!==e.button||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;// find the <a> element that the click is at (or within)
let t=e.target,a=e.composedPath?e.composedPath():e.path||[];// FIXME(web-padawan): `Symbol.iterator` used by webcomponentsjs is broken for arrays
// example to check: `for...of` loop here throws the "Not yet implemented" error
for(let e=0;e<a.length;e++){let r=a[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;// ignore the click if not at an <a> element
if(!t||"a"!==t.nodeName.toLowerCase()||t.target&&"_self"!==t.target.toLowerCase()||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&""!==t.hash)return;// ignore the click if the target is external to the app
// In IE11 HTMLAnchorElement does not have the `origin` property
let r=t.origin||/* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */function(e){// IE11: on HTTP and HTTPS the default port is not included into
// window.location.origin, so won't include it here either.
let t=e.port,a=e.protocol,r="http:"===a&&"80"===t||"https:"===a&&"443"===t?e.hostname// does not include the port number (e.g. www.example.org)
:e.host;return`${a}//${r}`}(t);if(r!==window.location.origin)return;// if none of the above, convert the click into a navigation event
let{pathname:i,search:s,hash:n}=t;w("go",{pathname:i,search:s,hash:n})&&(e.preventDefault(),e&&"click"===e.type&&window.scrollTo(0,0))}// PopStateEvent constructor shim
const E=/Trident/.test(navigator.userAgent);function L(e){if("vaadin-router-ignore"===e.state)return;let{pathname:t,search:a,hash:r}=window.location;w("go",{pathname:t,search:a,hash:r})}E&&!b(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var a=document.createEvent("Event");return a.initEvent(e,!!t.bubbles,!!t.cancelable),a.state=t.state||null,a},window.PopStateEvent.prototype=window.Event.prototype);/**
 * Expose `pathToRegexp`.
 */var z=/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */function e(t,a,r){return t instanceof RegExp?/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */function(e,t){if(!t)return e;// Use a negative lookahead to match only capturing groups.
var a=e.source.match(/\((?!\?)/g);if(a)for(var r=0;r<a.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(t,a):Array.isArray(t)?/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */function(t,a,r){for(var i=[],s=0;s<t.length;s++)i.push(e(t[s],a,r).source);return RegExp("(?:"+i.join("|")+")",j(r))}(/** @type {!Array} */t,a,r):A(H(/** @type {string} */t,r),a,r)},M=RegExp("(\\\\.)|(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?","g");/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */function H(e,t){for(var a,r=[],i=0,s=0,n="",o=t&&t.delimiter||"/",c=t&&t.delimiters||"./",l=!1;null!==(a=M.exec(e));){var d=a[0],p=a[1],h=a.index;// Ignore already escaped sequences.
if(n+=e.slice(s,h),s=h+d.length,p){n+=p[1],l=!0;continue}var m="",g=e[s],u=a[2],v=a[3],f=a[4],w=a[5];if(!l&&n.length){var x=n.length-1;c.indexOf(n[x])>-1&&(m=n[x],n=n.slice(0,x))}n&&(r.push(n),n="",l=!1);var b=""!==m&&void 0!==g&&g!==m,_="+"===w||"*"===w,y="?"===w||"*"===w,k=m||o,C=v||f;r.push({name:u||i++,prefix:m,delimiter:k,optional:y,repeat:_,partial:b,pattern:C?C.replace(/([=!:$/()])/g,"\\$1"):"[^"+T(k)+"]+?"})}return(n||s<e.length)&&r.push(n+e.substr(s)),r}/**
 * Expose a method for transforming tokens into the path function.
 */function R(e){// Compile all the patterns before compilation.
for(var t=Array(e.length),a=0;a<e.length;a++)"object"==typeof e[a]&&(t[a]=RegExp("^(?:"+e[a].pattern+")$"));return function(a,r){for(var i="",s=r&&r.encode||encodeURIComponent,n=0;n<e.length;n++){var o,c=e[n];if("string"==typeof c){i+=c;continue}var l=a?a[c.name]:void 0;if(Array.isArray(l)){if(!c.repeat)throw TypeError('Expected "'+c.name+'" to not repeat, but got array');if(0===l.length){if(c.optional)continue;throw TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(o=s(l[d],c),!t[n].test(o))throw TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'"');i+=(0===d?c.prefix:c.delimiter)+o}continue}if("string"==typeof l||"number"==typeof l||"boolean"==typeof l){if(o=s(String(l),c),!t[n].test(o))throw TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but got "'+o+'"');i+=c.prefix+o;continue}if(c.optional){c.partial&&(i+=c.prefix);continue}throw TypeError('Expected "'+c.name+'" to be '+(c.repeat?"an array":"a string"))}return i}}/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */function T(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */function j(e){return e&&e.sensitive?"":"i"}/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */function A(e,t,a){// Iterate over the tokens and create our regexp string.
for(var r=(a=a||{}).strict,i=!1!==a.start,s=!1!==a.end,n=T(a.delimiter||"/"),o=a.delimiters||"./",c=[].concat(a.endsWith||[]).map(T).concat("$").join("|"),l=i?"^":"",d=0===e.length,p=0;p<e.length;p++){var h=e[p];if("string"==typeof h)l+=T(h),d=p===e.length-1&&o.indexOf(h[h.length-1])>-1;else{var m=h.repeat?"(?:"+h.pattern+")(?:"+T(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),h.optional?h.partial?l+=T(h.prefix)+"("+m+")?":l+="(?:"+T(h.prefix)+"("+m+"))?":l+=T(h.prefix)+"("+m+")"}}return s?(r||(l+="(?:"+n+")?"),l+="$"===c?"$":"(?="+c+")"):(r||(l+="(?:"+n+"(?="+c+"))?"),d||(l+="(?="+n+"|"+c+")")),new RegExp(l,j(a))}z.parse=H,z.compile=/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */function(e,t){return R(H(e,t))},z.tokensToFunction=R,z.tokensToRegExp=A;/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */const{hasOwnProperty:S}=Object.prototype,P=new Map;function O(e){try{return decodeURIComponent(e)}catch(t){return e}}/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */function $(e){if(b(e.route.action))return e.route.action(e)}// see https://github.com/pillarjs/path-to-regexp/issues/148
P.set("|false",{keys:[],pattern:/(?:)/});/**
 */class B{constructor(e,t={}){if(Object(e)!==e)throw TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||$,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}/**
   * Returns the current list of routes (as a shallow copy). Adding / removing
   * routes to / from the returned array does not affect the routing config,
   * but modifying the route objects does.
   *
   * @return {!Array<!Router.Route>}
   */getRoutes(){return[...this.root.__children]}/**
   * Sets the routing config (replacing the existing one).
   *
   * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
   *    (the array is shallow copied)
   */setRoutes(e){v(e);let t=[...l(e)];this.root.__children=t}/**
   * Appends one or several routes to the routing config and returns the
   * effective routing config after the operation.
   *
   * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
   *    (the array is shallow copied)
   * @return {!Array<!Router.Route>}
   * @protected
   */addRoutes(e){return v(e),this.root.__children.push(...l(e)),this.getRoutes()}/**
   * Removes all existing routes from the routing config.
   */removeRoutes(){this.setRoutes([])}/**
   * Asynchronously resolves the given pathname, i.e. finds all routes matching
   * the pathname and tries resolving them one after another in the order they
   * are listed in the routes config until the first non-null result.
   *
   * Returns a promise that is fulfilled with the return value of an object that consists of the first
   * route handler result that returns something other than `null` or `undefined` and context used to get this result.
   *
   * If no route handlers return a non-null result, or if no route matches the
   * given pathname the returned promise is rejected with a 'page not found'
   * `Error`.
   *
   * @param {!string|!{pathname: !string}} pathnameOrContext the pathname to
   *    resolve or a context object with a `pathname` property and other
   *    properties to pass to the route resolver functions.
   * @return {!Promise<any>}
   */resolve(e){let t=Object.assign({},this.context,_(e)?{pathname:e}:e),a=/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 *//**
 * Traverses the routes tree and matches its nodes to the given pathname from
 * the root down to the leaves. Each match consumes a part of the pathname and
 * the matching process continues for as long as there is a matching child
 * route for the remaining part of the pathname.
 *
 * The returned value is a lazily evaluated iterator.
 *
 * The leading "/" in a route path matters only for the root of the routes
 * tree (or if all parent routes are ""). In all other cases a leading "/" in
 * a child route path has no significance.
 *
 * The trailing "/" in a _route path_ matters only for the leaves of the
 * routes tree. A leaf route with a trailing "/" matches only a pathname that
 * also has a trailing "/".
 *
 * The trailing "/" in a route path does not affect matching of child routes
 * in any way.
 *
 * The trailing "/" in a _pathname_ generally does not matter (except for
 * the case of leaf nodes described above).
 *
 * The "" and "/" routes have special treatment:
 *  1. as a single route
 *     the "" and "/" routes match only the "" and "/" pathnames respectively
 *  2. as a parent in the routes tree
 *     the "" route matches any pathname without consuming any part of it
 *     the "/" route matches any absolute pathname consuming its leading "/"
 *  3. as a leaf in the routes tree
 *     the "" and "/" routes match only if the entire pathname is consumed by
 *         the parent routes chain. In this case "" and "/" are equivalent.
 *  4. several directly nested "" or "/" routes
 *     - directly nested "" or "/" routes are 'squashed' (i.e. nesting two
 *       "/" routes does not require a double "/" in the pathname to match)
 *     - if there are only "" in the parent routes chain, no part of the
 *       pathname is consumed, and the leading "/" in the child routes' paths
 *       remains significant
 *
 * Side effect:
 *   - the routes tree { path: '' } matches only the '' pathname
 *   - the routes tree { path: '', children: [ { path: '' } ] } matches any
 *     pathname (for the tree root)
 *
 * Prefix matching can be enabled also by `children: true`.
 */function e(t,a,r,i,s){let n,o;let c=0,l=t.path||"";return"/"===l.charAt(0)&&(r&&(l=l.substr(1)),r=!0),{next(d){if(t===d)return{done:!0};let p=t.__children=t.__children||t.children;if(!n&&(n=function(e,t,a,r,i){a=!!a;let s=`${e}|${a}`,n=P.get(s);if(!n){let t=[];n={keys:t,pattern:z(e,t,{end:a,strict:""===e})},P.set(s,n)}let o=n.pattern.exec(t);if(!o)return null;let c=Object.assign({},i);for(let e=1;e<o.length;e++){let t=n.keys[e-1],a=t.name,r=o[e];void 0===r&&S.call(c,a)||(t.repeat?c[a]=r?r.split(t.delimiter).map(O):[]:c[a]=r?O(r):r)}return{path:o[0],keys:(r||[]).concat(n.keys),params:c}}(l,a,!p,i,s)))return{done:!1,value:{route:t,keys:n.keys,params:n.params,path:n.path}};if(n&&p)for(;c<p.length;){if(!o){let i=p[c];i.parent=t;let s=n.path.length;s>0&&"/"===a.charAt(s)&&(s+=1),o=e(i,a.substr(s),r,n.keys,n.params)}let i=o.next(d);if(!i.done)return{done:!1,value:i.value};o=null,c++}return{done:!0}}}}(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute,i=null,s=null,n=t;function o(e,c=i.value.route,l){let d=null===l&&i.value.route;return(i=s||a.next(d),s=null,!e&&(i.done||!/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */function(e,t){let a=t;for(;a;)if((a=a.parent)===e)return!0;return!1}(c,i.value.route)))?(s=i,Promise.resolve(k)):i.done?Promise.reject(y(t)):(!function(e,t){let{route:a,path:r}=t;if(a&&!a.__synthetic){if(e.chain){if(a.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==a.parent;)e.chain.pop()}}else e.chain=[];e.chain.push({path:r,route:a})}}(n=Object.assign(n?{chain:n.chain?n.chain.slice(0):[]}:{},t,i.value),i.value),Promise.resolve(r(n)).then(t=>null!=t&&t!==k?(n.result=t.result||t,n):o(e,c,t)))}return t.next=o,Promise.resolve().then(()=>o(!0,this.root)).catch(e=>{let t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`,a=(e.route||{}).path;return a&&(t+=` Resolution had failed on route: '${a}'`),t}(n);if(e?console.warn(t):e=Error(t),e.context=e.context||n,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return n.result=this.errorHandler(e),n;throw e})}/**
   * URL constructor polyfill hook. Creates and returns an URL instance.
   */static __createUrl(e,t){return new URL(e,t)}/**
   * If the baseUrl property is set, transforms the baseUrl and returns the full
   * actual `base` string for using in the `new URL(path, base);` and for
   * prepernding the paths with. The returned base ends with a trailing slash.
   *
   * Otherwise, returns empty string.
   */get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}/**
   * If the baseUrl is set, matches the pathname with the router’s baseUrl,
   * and returns the local pathname with the baseUrl stripped out.
   *
   * If the pathname does not match the baseUrl, returns undefined.
   *
   * If the `baseUrl` is not set, returns the unmodified pathname argument.
   */__normalizePathname(e){if(!this.baseUrl)return e;let t=this.__effectiveBaseUrl,a=this.constructor.__createUrl(e,t).href;if(a.slice(0,t.length)===t)return a.slice(t.length)}}B.pathToRegexp=z;/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */const{pathToRegexp:N}=B,U=new Map;function I(e,t){let a=e.get(t);if(a&&a.length>1)throw Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return a&&a[0]}function F(e){let t=e.path;return void 0!==(t=Array.isArray(t)?t[0]:t)?t:""}/**
 * @typedef NavigationTrigger
 * @type {object}
 * @property {function()} activate
 * @property {function()} inactivate
 *//** @type {Array<NavigationTrigger>} */let D=[];const V=e=>{let t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t},q=(e,t)=>{let a=()=>{e.removeEventListener("animationend",a),t()};e.addEventListener("animationend",a)};function J(e,t){return e.classList.add(t),new Promise(a=>{if(V(e)){let r=e.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${i}`),q(e,()=>{e.classList.remove(t),e.removeAttribute("style"),a()})}else e.classList.remove(t),a()})}function W({pathname:e="",search:t="",hash:a="",chain:r=[],params:i={},redirectFrom:s,resolver:n},o){let c=r.map(e=>e.route);return{baseUrl:n&&n.baseUrl||"",pathname:e,search:t,hash:a,routes:c,route:o||c.length&&c[c.length-1]||null,params:i,redirectFrom:s,getUrl:(e={})=>X(ee.pathToRegexp.compile(Z(c))(Object.assign({},i,e)),n)}}function G(e,t){let a=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:a}}}function K(e,t,a){if(b(e))return e.apply(a,t)}function Q(e,t,a){return r=>r&&(r.cancel||r.redirect)?r:a?K(a[e],t,a):void 0}function Y(e){if(e&&e.length){let t=e[0].parentNode;for(let a=0;a<e.length;a++)t.removeChild(e[a])}}function X(e,t){let a=t.__effectiveBaseUrl;return a?t.constructor.__createUrl(e.replace(/^\//,""),a).pathname:e}function Z(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}/**
 * A simple client-side router for single-page applications. It uses
 * express-style middleware and has a first-class support for Web Components and
 * lazy-loading. Works great in Polymer and non-Polymer apps.
 *
 * Use `new Router(outlet, options)` to create a new Router instance.
 *
 * * The `outlet` parameter is a reference to the DOM node to render
 *   the content into.
 *
 * * The `options` parameter is an optional object with options. The following
 *   keys are supported:
 *   * `baseUrl` — the initial value for [
 *     the `baseUrl` property
 *   ](#/classes/Router#property-baseUrl)
 *
 * The Router instance is automatically subscribed to navigation events
 * on `window`.
 *
 * See [Live Examples](#/classes/Router/demos/demo/index.html) for the detailed usage demo and code snippets.
 *
 * See also detailed API docs for the following methods, for the advanced usage:
 *
 * * [setOutlet](#/classes/Router#method-setOutlet) – should be used to configure the outlet.
 * * [setTriggers](#/classes/Router#method-setTriggers) – should be used to configure the navigation events.
 * * [setRoutes](#/classes/Router#method-setRoutes) – should be used to configure the routes.
 *
 * Only `setRoutes` has to be called manually, others are automatically invoked when creating a new instance.
 *
 * @extends Resolver
 * @demo demo/index.html
 * @summary JavaScript class that renders different DOM content depending on
 *    a given path. It can re-render when triggered or automatically on
 *    'popstate' and / or 'click' events.
 */class ee extends B{/**
   * Creates a new Router instance with a given outlet, and
   * automatically subscribes it to navigation events on the `window`.
   * Using a constructor argument or a setter for outlet is equivalent:
   *
   * ```
   * const router = new Router();
   * router.setOutlet(outlet);
   * ```
   * @param {?Node=} outlet
   * @param {?RouterOptions=} options
   */constructor(e,t){let a=document.head.querySelector("base"),r=a&&a.getAttribute("href");super([],Object.assign({// Default options
baseUrl:r&&B.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);let i=ee.NavigationTrigger;ee.setTriggers.apply(ee,Object.keys(i).map(e=>i[e])),/**
     * The base URL for all routes in the router instance. By default,
     * if the base element exists in the `<head>`, vaadin-router
     * takes the `<base href>` attribute value, resolves against current `document.URL`
     * and gets the `pathname` from the result.
     *
     * @public
     * @type {string}
     */this.baseUrl,/**
     * A promise that is settled after the current render cycle completes. If
     * there is no render cycle in progress the promise is immediately settled
     * with the last render cycle result.
     *
     * @public
     * @type {!Promise<!RouterLocation>}
     */this.ready,this.ready=Promise.resolve(e),/**
     * Contains read-only information about the current router location:
     * pathname, active routes, parameters. See the
     * [Location type declaration](#/classes/RouterLocation)
     * for more details.
     *
     * @public
     * @type {!RouterLocation}
     */this.location,this.location=W({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),// Using WeakMap instead of WeakSet because WeakSet is not supported by IE11
this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){let t=e.route,a=Promise.resolve();b(t.children)&&(a=a.then(()=>t.children(function(e){let t=Object.assign({},e);return delete t.next,t}(e))).then(e=>{null!=e||b(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!x(e))throw Error(d(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];let a=l(e);for(let e=0;e<a.length;e++)u(a[e]),t.__children.push(a[e])}(e,t)}));let r={redirect:t=>G(e,t),component:e=>{let t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return a.then(()=>{if(this.__isLatestRender(e))return K(t.action,[e,r],t)}).then(e=>{var a;return null!=e&&(e instanceof HTMLElement||e.redirect||e===k)?e:_(t.redirect)?r.redirect(t.redirect):t.bundle?(_(a=t.bundle)?f(a):Promise.race(m.filter(e=>e in a).map(e=>f(a[e],e)))).then(()=>{},()=>{throw Error(d(`Bundle not found: ${t.bundle}. Check if the file name is correct`))}):void 0}).then(e=>null!=e?e:_(t.component)?r.component(t.component):void 0)}/**
   * Sets the router outlet (the DOM node where the content for the current
   * route is inserted). Any content pre-existing in the router outlet is
   * removed at the end of each render pass.
   *
   * NOTE: this method is automatically invoked first time when creating a new Router instance.
   *
   * @param {?Node} outlet the DOM node where the content for the current route
   *     is inserted.
   */setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}/**
   * Returns the current router outlet. The initial value is `undefined`.
   *
   * @return {?Node} the current router outlet (or `undefined`)
   */getOutlet(){return this.__outlet}/**
   * Sets the routing config (replacing the existing one) and triggers a
   * navigation event so that the router outlet is refreshed according to the
   * current `window.location` and the new routing config.
   *
   * Each route object may have the following properties, listed here in the processing order:
   * * `path` – the route path (relative to the parent route if any) in the
   * [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
   *
   * * `children` – an array of nested routes or a function that provides this
   * array at the render time. The function can be synchronous or asynchronous:
   * in the latter case the render is delayed until the returned promise is
   * resolved. The `children` function is executed every time when this route is
   * being rendered. This allows for dynamic route structures (e.g. backend-defined),
   * but it might have a performance impact as well. In order to avoid calling
   * the function on subsequent renders, you can override the `children` property
   * of the route object and save the calculated array there
   * (via `context.route.children = [ route1, route2, ...];`).
   * Parent routes are fully resolved before resolving the children. Children
   * 'path' values are relative to the parent ones.
   *
   * * `action` – the action that is executed before the route is resolved.
   * The value for this property should be a function, accepting `context`
   * and `commands` parameters described below. If present, this function is
   * always invoked first, disregarding of the other properties' presence.
   * The action can return a result directly or within a `Promise`, which
   * resolves to the result. If the action result is an `HTMLElement` instance,
   * a `commands.component(name)` result, a `commands.redirect(path)` result,
   * or a `context.next()` result, the current route resolution is finished,
   * and other route config properties are ignored.
   * See also **Route Actions** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `redirect` – other route's path to redirect to. Passes all route parameters to the redirect target.
   * The target route should also be defined.
   * See also **Redirects** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `bundle` – string containing the path to `.js` or `.mjs` bundle to load before resolving the route,
   * or the object with "module" and "nomodule" keys referring to different bundles.
   * Each bundle is only loaded once. If "module" and "nomodule" are set, only one bundle is loaded,
   * depending on whether the browser supports ES modules or not.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * Any error, e.g. 404 while loading bundle will cause route resolution to throw.
   * See also **Code Splitting** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `component` – the tag name of the Web Component to resolve the route to.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * If route contains the `component` property (or an action that return a component)
   * and its child route also contains the `component` property, child route's component
   * will be rendered as a light dom child of a parent component.
   *
   * * `name` – the string name of the route to use in the
   * [`router.urlForName(name, params)`](#/classes/Router#method-urlForName)
   * navigation helper method.
   *
   * For any route function (`action`, `children`) defined, the corresponding `route` object is available inside the callback
   * through the `this` reference. If you need to access it, make sure you define the callback as a non-arrow function
   * because arrow functions do not have their own `this` reference.
   *
   * `context` object that is passed to `action` function holds the following properties:
   * * `context.pathname` – string with the pathname being resolved
   *
   * * `context.search` – search query string
   *
   * * `context.hash` – hash string
   *
   * * `context.params` – object with route parameters
   *
   * * `context.route` – object that holds the route that is currently being rendered.
   *
   * * `context.next()` – function for asynchronously getting the next route
   * contents from the resolution chain (if any)
   *
   * `commands` object that is passed to `action` function has
   * the following methods:
   *
   * * `commands.redirect(path)` – function that creates a redirect data
   * for the path specified.
   *
   * * `commands.component(component)` – function that creates a new HTMLElement
   * with current context. Note: the component created by this function is reused if visiting the same path twice in row.
   *
   *
   * @param {!Array<!Route>|!Route} routes a single route or an array of those
   * @param {?boolean} skipRender configure the router but skip rendering the
   *     route corresponding to the current `window.location` values
   *
   * @return {!Promise<!Node>}
   */setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}/**
   * Asynchronously resolves the given pathname and renders the resolved route
   * component into the router outlet. If no router outlet is set at the time of
   * calling this method, or at the time when the route resolution is completed,
   * a `TypeError` is thrown.
   *
   * Returns a promise that is fulfilled with the router outlet DOM Node after
   * the route component is created and inserted into the router outlet, or
   * rejected if no route matches the given path.
   *
   * If another render pass is started before the previous one is completed, the
   * result of the previous render pass is ignored.
   *
   * @param {!string|!{pathname: !string, search: ?string, hash: ?string}} pathnameOrContext
   *    the pathname to render or a context object with a `pathname` property,
   *    optional `search` and `hash` properties, and other properties
   *    to pass to the resolver.
   * @param {boolean=} shouldUpdateHistory
   *    update browser history with the rendered location
   * @return {!Promise<!Node>}
   */render(e,t){let a=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},_(e)?{pathname:e}:e,{__renderId:a});return(// Find the first route that resolves to a non-empty result
this.ready=this.resolve(r)// Process the result of this.resolve() and handle all special commands:
// (redirect / prevent / component). If the result is a 'component',
// then go deeper and build the entire chain of nested components matching
// the pathname. Also call all 'on before' callbacks along the way.
.then(e=>this.__fullyResolveChain(e)).then(e=>{if(this.__isLatestRender(e)){let r=this.__previousContext;// Check if the render was prevented and make an early return in that case
if(e===r)return(// Replace the history with the previous context
// to make sure the URL stays the same.
this.__updateBrowserHistory(r,!0),this.location);// Skip detaching/re-attaching there are no render changes
if(this.location=W(e),t&&// the redirecting record in the history
this.__updateBrowserHistory(e,1===a),w("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);let i=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),i.then(()=>{if(this.__isLatestRender(e))return(// If there is another render pass started after this one,
// the 'disappearing content' would be removed when the other
// render pass calls `this.__addAppearingContent()`
this.__removeDisappearingContent(),this.__previousContext=e,this.location)})}}).catch(e=>{if(a===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),Y(this.__outlet&&this.__outlet.children),this.location=W(Object.assign(r,{resolver:this})),w("error",Object.assign({router:this,error:e},r)),e}),this.ready)}// `topOfTheChainContextBeforeRedirects` is a context coming from Resolver.resolve().
// It would contain a 'redirect' route or the first 'component' route that
// matched the pathname. There might be more child 'component' routes to be
// resolved and added into the chain. This method would find and add them.
// `contextBeforeRedirects` is the context containing such a child component
// route. It's only necessary when this method is called recursively (otherwise
// it's the same as the 'top of the chain' context).
//
// Apart from building the chain of child components, this method would also
// handle 'redirect' routes, call 'onBefore' callbacks and handle 'prevent'
// and 'redirect' callback results.
__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t)// `contextAfterRedirects` is always a context with an `HTMLElement` result
// In other cases the promise gets rejected and .then() is not called
.then(a=>{let r=a!==t,i=r?a:e,s=X(Z(a.chain),a.resolver),n=s===a.pathname,o=(e,t=e.route,a)=>e.next(void 0,t,a).then(a=>{if(null===a||a===k){// Next context is not found in children, ...
    if(n)return e;if(null!==t.parent)return o(e,t.parent,a)}return a});return o(a).then(e=>{if(null===e||e===k)throw y(i);return e&&e!==k&&e!==a?this.__fullyResolveChain(i,e):this.__amendWithOnBeforeCallbacks(a)})})}__findComponentContextAfterAllRedirects(e){let t=e.result;return t instanceof HTMLElement?(!function(e,t){t.location=W(e);let a=e.chain.map(e=>e.route).indexOf(e.route);e.chain[a].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(e=>this.__findComponentContextAfterAllRedirects(e)):t instanceof Error?Promise.reject(t):Promise.reject(Error(d(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);let t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){let t=this.__previousContext||{},a=t.chain||[],r=e.chain,i=Promise.resolve(),s=()=>({cancel:!0}),n=t=>G(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,a.length){for(let t=0;t<Math.min(a.length,r.length)&&a[t].route===r[t].route&&(a[t].path===r[t].path||a[t].element===r[t].element)&&this.__isReusableElement(a[t].element,r[t].element);t=++e.__divergedChainIndex);if(// Skip re-attaching and notifications if element and chain do not change
e.__skipAttach=r.length===a.length&&e.__divergedChainIndex==r.length&&// Same element
this.__isReusableElement(e.result,t.result),e.__skipAttach){// execute onBeforeLeave for changed segment element when skipping attach
for(let t=r.length-1;t>=0;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:s},a[t]);// execute onBeforeEnter for changed segment element when skipping attach
for(let t=0;t<r.length;t++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:s,redirect:n},r[t]),a[t].element.location=W(e,a[t].route)}else for(let t=a.length-1;t>=e.__divergedChainIndex;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:s},a[t])}// execute onBeforeEnter when NOT skipping attach
if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<a.length&&a[t].element&&(a[t].element.location=W(e,a[t].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:s,redirect:n},r[t]),r[t].element&&(r[t].element.location=W(e,r[t].route)));return i.then(t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,a,r){let i=W(t);return e.then(e=>{if(this.__isLatestRender(t)){let t=Q("onBeforeLeave",[i,a,this],r.element);return t(e)}}).then(e=>{if(!(e||{}).redirect)return e})}__runOnBeforeEnterCallbacks(e,t,a,r){let i=W(t,r.route);return e.then(e=>{if(this.__isLatestRender(t)){let t=Q("onBeforeEnter",[i,a,this],r.element);return t(e)}})}__isReusableElement(e,t){return!!e&&!!t&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,a){if(t>256)throw Error(d(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:a})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw TypeError(d(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:a=""},r){(window.location.pathname!==e||window.location.search!==t||window.location.hash!==a)&&(window.history[r?"replaceState":"pushState"](null,document.title,e+t+a),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"})))}__copyUnchangedElements(e,t){// Find the deepest common parent between the last and the new component
// chains. Update references for the unchanged elements in the new chain
let a=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){let i=t&&t.chain[r].element;if(i){if(i.parentNode===a)e.chain[r].element=i,a=i;else break}}return a}__addAppearingContent(e,t){this.__ensureOutlet(),// If the previous 'entering' animation has not completed yet,
// stop it and remove that content from the DOM before adding new one.
this.__removeAppearingContent();// Copy reusable elements from the previousContext to current
let a=this.__copyUnchangedElements(e,t);// Keep two lists of DOM elements:
//  - those that should be removed once the transition animation is over
//  - and those that should remain
this.__appearingContent=[],this.__disappearingContent=Array.from(a.children).filter(t=>this.__addedByRouter.get(t)&&// Do not remove the result element to avoid flickering
    t!==e.result);// Add new elements (starting after the deepest common parent) to the DOM.
// That way only the components that are actually different between the two
// locations are added to the DOM (and those that are common remain in the
// DOM without first removing and then adding them again).
let r=a;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){let i=e.chain[t].element;i&&(r.appendChild(i),this.__addedByRouter.set(i,!0),r===a&&this.__appearingContent.push(i),r=i)}}__removeDisappearingContent(){this.__disappearingContent&&Y(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Y(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)// REVERSE iteration: from Z to A
for(let a=t.chain.length-1;a>=e.__divergedChainIndex&&this.__isLatestRender(e);a--){let r=t.chain[a].element;if(r)try{let a=W(e);K(r.onAfterLeave,[a,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&Y(r.children)}}}__runOnAfterEnterCallbacks(e){// forward iteration: from A to Z
for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){let a=e.chain[t].element||{},r=W(e,e.chain[t].route);K(a.onAfterEnter,[r,{},e.resolver],a)}}__animateIfNeeded(e){let t;let a=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],i=[],s=e.chain;for(let e=s.length;e>0;e--)if(s[e-1].route.animate){t=s[e-1].route.animate;break}if(a&&r&&t){let e=x(t)&&t.leave||"leaving",s=x(t)&&t.enter||"entering";i.push(J(a,e)),i.push(J(r,s))}return Promise.all(i).then(()=>e)}/**
   * Subscribes this instance to navigation events on the `window`.
   *
   * NOTE: beware of resource leaks. For as long as a router instance is
   * subscribed to navigation events, it won't be garbage collected.
   */subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}/**
   * Removes the subscription to navigation events created in the `subscribe()`
   * method.
   */unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){let{pathname:t,search:a,hash:r}=e?e.detail:window.location;_(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:a,hash:r},!0))}/**
   * Configures what triggers Router navigation events:
   *  - `POPSTATE`: popstate events on the current `window`
   *  - `CLICK`: click events on `<a>` links leading to the current page
   *
   * This method is invoked with the pre-configured values when creating a new Router instance.
   * By default, both `POPSTATE` and `CLICK` are enabled. This setup is expected to cover most of the use cases.
   *
   * See the `router-config.js` for the default navigation triggers config. Based on it, you can
   * create the own one and only import the triggers you need, instead of pulling in all the code,
   * e.g. if you want to handle `click` differently.
   *
   * See also **Navigation Triggers** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * @param {...NavigationTrigger} triggers
   */static setTriggers(...e){D.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),D=e}/**
   * Generates a URL for the route with the given name, optionally performing
   * substitution of parameters.
   *
   * The route is searched in all the Router instances subscribed to
   * navigation events.
   *
   * **Note:** For child route names, only array children are considered.
   * It is not possible to generate URLs using a name for routes set with
   * a children function.
   *
   * @function urlForName
   * @param {!string} name the route name or the route’s `component` name.
   * @param {Params=} params Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   *
   * @return {string}
   */urlForName(e,t){return this.__urlForName||(this.__urlForName=function(e,t={}){if(!(e instanceof B))throw TypeError("An instance of Resolver is expected");let a=new Map;return(r,i)=>{let s=I(a,r);if(!s&&(a.clear(),function e(t,a,r){let i=a.name||a.component;if(i&&(t.has(i)?t.get(i).push(a):t.set(i,[a])),Array.isArray(r))for(let i=0;i<r.length;i++){let s=r[i];s.parent=a,e(t,s,s.__children||s.children)}}(a,e.root,e.root.__children),!(s=I(a,r))))throw Error(`Route "${r}" not found`);let n=U.get(s.fullPath);if(!n){let e=F(s),t=s.parent;for(;t;){let a=F(t);a&&(e=a.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}let a=N.parse(e),r=N.tokensToFunction(a),i=Object.create(null);for(let e=0;e<a.length;e++)_(a[e])||(i[a[e].name]=!0);n={toPath:r,keys:i},U.set(e,n),s.fullPath=e}let o=n.toPath(i,t)||"/";if(t.stringifyQueryParams&&i){let e={},a=Object.keys(i);for(let t=0;t<a.length;t++){let r=a[t];n.keys[r]||(e[r]=i[r])}let r=t.stringifyQueryParams(e);r&&(o+="?"===r.charAt(0)?r:`?${r}`)}return o}}(this)),X(this.__urlForName(e,t),this)}/**
   * Generates a URL for the given route path, optionally performing
   * substitution of parameters.
   *
   * @param {!string} path string route path declared in [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
   * @param {Params=} params Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   *
   * @return {string}
   */urlForPath(e,t){return X(ee.pathToRegexp.compile(e)(t),this)}/**
   * Triggers navigation to a new path. Returns a boolean without waiting until
   * the navigation is complete. Returns `true` if at least one `Router`
   * has handled the navigation (was subscribed and had `baseUrl` matching
   * the `path` argument), otherwise returns `false`.
   *
   * @param {!string|!{pathname: !string, search: (string|undefined), hash: (string|undefined)}} path
   *   a new in-app path string, or an URL-like object with `pathname`
   *   string property, and optional `search` and `hash` string properties.
   * @return {boolean}
   */static go(e){let{pathname:t,search:a,hash:r}=_(e)?this.__createUrl(e,"http://a")// some base to omit origin
:e;return w("go",{pathname:t,search:a,hash:r})}}const et=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ea=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function er(e,t){if("function"!=typeof e)return;let a=et.exec(e.toString());if(a)try{// requires CSP: script-src 'unsafe-eval'
e=Function(a[1])}catch(e){// eat the exception
console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}// A guard against polymer-modulizer removing the window.Vaadin
// initialization above.
window.Vaadin=window.Vaadin||{};/**
 * Inspects the source code of the given `callback` function for
 * specially-marked _commented_ code. If such commented code is found in the
 * callback source, uncomments and runs that code instead of the callback
 * itself. Otherwise runs the callback as is.
 *
 * The optional arguments are passed into the callback / uncommented code,
 * the result is returned.
 *
 * See the `isMinified()` function source code in this file for an example.
 *
 */const ei=function(e,t){if(window.Vaadin.developmentMode)return er(e,t)};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{if(localStorage.getItem("vaadin.developmentmode.force"))return!0;if(!(["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0))return!1;if(ea)return!function(){if(ea){let e=Object.keys(ea).map(e=>ea[e]).filter(e=>e.productionMode);if(e.length>0)return!0}return!1}();return!er(function(){/** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/return!0})}catch(e){// Some error in this code, assume production so no further actions will be taken
return!1}}()),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),ei(/* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */function(){/** vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}),ee.NavigationTrigger={POPSTATE:{activate(){window.addEventListener("popstate",L)},inactivate(){window.removeEventListener("popstate",L)}},CLICK:{activate(){window.document.addEventListener("click",C)},inactivate(){window.document.removeEventListener("click",C)}}};const es={data:{actualTabHeader:"Sobre m\xed",deployed:!1},listeners:[],subscribe(e){// recibe callbacks para ser avisados posteriormente
this.listeners.push(e)},getState(){return this.data},setDeployedStatus(e){let t=this.getState();t.deployed=e,this.setState(t)},setHeader(e){let t=this.getState();t.actualTabHeader=e,this.setState(t)},setState(e){this.data=e;let t=this.getState();for(let e of this.listeners)e(t)}};class en extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){}render(){let e=this.getAttribute("title");var t="",a="Preview tarjeta...";switch(e){case"Sobre Mi":a="Informacion sobre Sebas",t=r("bV7Mj");break;case"Experiencias":a="Experiencias laborales",t=r("3lHJf");break;case"Trabajos":a="Proyectos web",t=r("3vCYr");break;case"Contacto":a="Encontrame en...",t=r("6uJzw")}this.addEventListener("click",()=>{let t=es.getState();if(console.log(t.deployed),t.deployed)switch(e){case"Sobre Mi":ee.go("/wpp-clon/about"),es.setHeader("Sobre m\xed");break;case"Experiencias":ee.go("/wpp-clon/experiences"),es.setHeader("Experiencias");break;case"Trabajos":ee.go("/wpp-clon/works"),es.setHeader("Trabajos");break;case"Contacto":ee.go("/wpp-clon/contact"),es.setHeader("Contacto")}if(!t.deployed)switch(e){case"Sobre Mi":ee.go("/about"),es.setHeader("Sobre m\xed");break;case"Experiencias":ee.go("/experiences"),es.setHeader("Experiencias");break;case"Trabajos":ee.go("/works"),es.setHeader("Trabajos");break;case"Contacto":ee.go("/contact"),es.setHeader("Contacto")}}),this.shadow.innerHTML=`
      <div class="card">
            <div class="card__image">
            </div>      

            <div class="card__info">
                <h3 class="card__title">${e}</h3>
                <p class="card__preview">${a}</p>
            </div>

            <div class="card__time">
                <p class="card__time-p">Ayer</p>
            </div>
      </div>
      `;let i=document.createElement("style");i.textContent=`
        .card{
            padding: 0 5px;
            border-radius: 14px;
            width: 100px;
            height: 6vh;
            display: grid;
            grid-template-columns: 30px 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "image" "chatinfo" "status";
            justify-items: center;
            align-items: center
        }
        @media (min-width: 768px){
            .card{
                grid-template-columns: 60px 2fr 1fr;
                padding: 0;
                height: 70px;
                width: 20vw;
            }
        }

        .card:hover{ 
            background-color: #4d4d4d;
        }

        .card__image{
            margin: 0 2px;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            background-color: black;
            background-image: url(${t});
            background-size: cover;
        }
        @media (min-width: 768px){
            .card__image{
                margin: 0 8px;
            }
        }

        .card__info{
            justify-self: start;
            display: flex; 
            flex-direction: column;
            justify-content: space-evenly;
        }

        .card__title{
            font-size: 13px;
            font-weight: 600;
            margin: 0 4px;
        }
        @media (min-width: 768px){
            .card__title{
                font-size: 17px;
            }
        }

        .card__preview{
            display: none;
            margin: 2px 4px;
            font-weight: 300;
        }
        @media (min-width: 768px){
            .card__preview{
                display: block;
            }
        }

        .card__time{
            display: none;
        }
        @media (min-width: 768px){
            .card__time{
                display: inherit;
                margin: 0 20px;
                justify-self: flex-end;
                align-self: flex-start;
            }
    
            .card__time-p{
                font-size: 13px;
                color: #939393;
            }
        }
      `,this.shadow.appendChild(i)}}customElements.define("chat-card",en);class eo extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.headerTitle="Sobre m\xed",this.render()}connectedCallback(){es.subscribe(e=>{this.headerTitle=e.actualTabHeader,this.render()})}render(){let e=document.createElement("style");var t="";switch(this.headerTitle){case"Sobre m\xed":t=r("bV7Mj");break;case"Experiencias":t=r("3lHJf");break;case"Trabajos":t=r("3vCYr");break;case"Contacto":t=r("6uJzw")}this.shadow.innerHTML=`
      <div class="header">
        <div class="chat-image">
            
        </div>
        <div class="header-info">
            <div>
                <h3 class="chat-title">${this.headerTitle}</h3>
            </div>
            <div>
                <p class="chat-status">En linea</p>
            </div>    
        </div>
      </div>
      `,e.textContent=`
        .header{
            display: flex; 
            justify-content: center; 
            align-items: center;
        }

        .chat-image{
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background-color: white;
            margin-right: 6px; 
            background-color: black;
            background-image: url(${t});
            background-size: cover;
        }

        .chat-title{
            font-size: 19px;
            font-weight: 600;
            margin: 0 4px;
        }

        .chat-status{
            font-size: 14px;
            margin: 0px 4px;
            font-weight: 300;
        }

      `,this.shadow.appendChild(e)}}customElements.define("chat-header",eo),(()=>{let e=es.getState(),t=document.querySelector(".icons__close");t?.addEventListener("click",()=>{let t=document.querySelector(".chat-header");t.style.display="none",e.deployed&&ee.go("/wpp-clon/"),e.deployed||ee.go("/")})})();//# sourceMappingURL=index.f086b4f1.js.map

//# sourceMappingURL=index.f086b4f1.js.map
