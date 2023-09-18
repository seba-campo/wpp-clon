class AboutPage extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
        super();
        this.render();
    }
    connectedCallback() {
    }
    render() {
      const backgroundChatImg = require("../assets/img/bg-chat.png");
      const profileImg = require("../assets/img/profile.png");
      const guitarImg = require("../assets/img/seba-guitar.png");

      const a = require("../assets/fontawesome-free-6.4.2-web/css/fontawesome.css")
      const ab = require("../assets/fontawesome-free-6.4.2-web/css/brands.css")
      const c = require("../assets/fontawesome-free-6.4.2-web/css/solid.css")
      
        this.shadow.innerHTML = `
      <div class="chat-root-div">
        <div class="about-message">
          <div class="message-head">
            <img class="head-img" src=${profileImg}>
          </div>

          <div class="message-title">
            <p class="message-title-p center"><strong>Hola, soy Sebas!!</strong></p>
          </div>
          <div class="message-description">
            <p class="message-description-p">Bienvenido a mi sitio, lo hice con mucho amor, espero que te guste!</p>
            <p class="message-description-p">Tengo 24 años, me encanta la <strong>música🎶</strong> y la <strong>tecnología🖥️</strong>. He estudiado en ambas orientaciones desde que terminé el secundario.</p>

          </div>
          <div class="image-guitar-div">
            <img class="guitar-img" src=${guitarImg}>
          </div>
          <div class="message-description">
            <p class="message-description-p space">Estudié cuatro años en el Instituto superior de música José Hernandez 🎶, especializándome en piano 🎹. Por cuestiones personales no pude seguir, pero estoy tramitando el re-ingreso para este 2024!.
              De todas maneras, durante los años que no cursé hice música y seguí mejorando mi técnica y conocimiento.
              <br>Podés ver mas sobre esto en el chat de Contacto ;)
            </p>
          </div>
          <div class="message-description">
            <p class="message-description-p space">Otras de mis aficiones es la tecnología, la cual tengo afinidad desde pequeño. 
              Tratandose de programas y computadoras, siempre tuve un gran interés, y más aun en entender como funcionan y poder hacer
              programas y juegos.
              Tuve la oportunidad de comenzar a trabajar como analista de soporte de aplicaciones y con dicho avance, me encaminé en aprender
              mas a fondo como poder hacer estas aplicaciones por mi cuenta!
              <br>
              Me anoté entonces en un curso de programación (sin saber nada) y desde entonces (muchos bugs y horas de codeo despues), me encuentro haciendo
              páginas y apps!
              Y lo mejor de todo, es que aún queda infinidades de cosas por aprender!
              <br>
              Las cosas que fuí armando, las tengo todas en el chat de Trabajos :D
            </p>
          </div>
          <div class="message-description">
            <p class="message-description-p space">
              
            </p>
          </div>
        </div>
      </div>
      `;

      const style = document.createElement("style");
      style.textContent = `
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
          background-image: url(${backgroundChatImg});
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
      `;

      this.shadow.appendChild(style);
    }
}

customElements.define("about-page", AboutPage);
