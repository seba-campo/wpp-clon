class Experiences extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
        super();
        this.render();
    }
    connectedCallback() {
    }
    render() {
      const chatHeaderEl = document.querySelector(".chat-header") as HTMLElement;
      chatHeaderEl.style.display = "flex";
      
      const backgroundChatImg = require("../assets/img/bg-chat.png");
      
        this.shadow.innerHTML = `
      <div class="chat-root-div">

        <div class="experience">
          <div class="message-head">
            <img class="head-img" src=>
          </div>

          <div class="message-title">
            <p class="message-title-p center"><strong>Teleoperador Soporte Técnico</strong></p>
          </div>
          <div class="message-title">
            <p class="message-title-p center"><a href="https://www.contactcom.com.ar/" target="_blank">Contactcom SA</a></p>
          </div>
          <div class="message-title">
            <p class="message-title-p center">Enero 2024 - Presente</p>
          </div>
          <div class="message-description">
            <p class="message-description-p">Operador telefónico de soporte técnico para gran empresa proveedora de internet, telefonía y televisión residencial.
              Brindo soporte de primera línea, y contención del cliente en aspectos técnicos y comerciales. Info detallada del puesto 👉 <a href="https://www.linkedin.com/in/seba-campo" target="_blank">acá</a>
            </p>
          </div>
        </div>

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
            <p class="message-description-p">Me involucré en un proyecto front-end para un sistema de diseño 3d web.
              <br>
              Trabajamos con un grupo reducido de integrantes e implementamos una interfaz amigable y funcional para el sistema, la información tecnica la podés encontrar <a href="https://www.linkedin.com/in/seba-campo" target="_blank">acá</a>
            </p>
          </div>
        </div>

        <div class="experience">
          <div class="message-head">
            <img class="head-img" src=>
          </div>

          <div class="message-title">
            <p class="message-title-p center"><strong>Analista de Soporte Técnico</strong></p>
          </div>
          <div class="message-title">
            <p class="message-title-p center"><a href="https://www.lepton.com.ar/web/" target="_blank">Lepton Sistemas</a></p>
          </div>
          <div class="message-title">
            <p class="message-title-p center">Junio 2021 - Agosto 2023</p>
          </div>
          <div class="message-description">
            <p class="message-description-p">Brindé soporte de nivel 1, 2 y 3 a sistemas de diseño y producción de amoblamientos.
              Entre mis tareas realizaba también implementaciones, análisis de errores y dictaba capacitaciones a nuevos clientes.
              Los detalles técncios del puesto lo podrás encontrar <a href="https://www.linkedin.com/in/seba-campo" target="_blank">acá</a>
            </p>
          </div>
      </div>
      <div class="experience">
          <div class="message-head">
            <img class="head-img" src=>
          </div>

          <div class="message-title">
            <p class="message-title-p center"><strong>Operario de Depósito</strong></p>
          </div>
          <div class="message-title">
            <p class="message-title-p center">BGS Comercial</p>
          </div>
          <div class="message-title">
            <p class="message-title-p center">Septiembre 2020 - Diciembre 2020</p>
          </div>
          <div class="message-description">
            <p class="message-description-p">Operario de depósito en fábrica de muebles. 
              <br>
              Realizaba tareas generales de producción y empaquetado de muebles de melamina. 
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
            <p class="message-description-p">Vendedor en pescadería, atención al cliente y manejo de caja.</p>
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
      `;

      this.shadow.appendChild(style);
    }
}

customElements.define("exp-page", Experiences);
