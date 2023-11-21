import { state } from "../state";


class ContactPage extends HTMLElement {
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
      const underConstruction = require("../assets/img/under-construction.png");
      
        this.shadow.innerHTML = `
      <div class="chat-root-div">

          <div class="wrapper">
            <div class="about-message">
              <div class="message-head">
                <img class="head-img" src="">
              </div>

              <div class="message-title">
                <p class="message-title-p center"><strong>Sección de contacto</strong></p>
              </div>
              <div class="message-description">
                <p class="message-description-p">Para esta sección, te voy a solicitar que ingreses tu mail, como si de un mensaje se tratara</p>
                <p class="message-description-p">A la casilla que indiques, te llegará un correo con todos mis perfiles sociales para que puedas saber mas sobre mi y lo que hago :D</p>
              </div>
              
              <div class="message-description">
                <p class="message-description-p">El mail que proporciones solo se usará una vez, no se guardará en ninguna base de datos ni será compartido con nadie.</p>
              </div>
              <div class="message-description">
                <p class="message-description-p">Puede tardar algunos momentos en enviarse el correo, cualquier cosa, revisalo en tus spam!</p>
              </div>
            </div>

            <div class="sent">
              <div class="message-head">
                <img class="head-img" src="">
              </div>

              <div class="message-description">
                <p class="message-description-p">Mensaje enviado 🚀</p>
              </div>
            </div>

            <div class="message-bar">
              <div class="emojis-left">
                <div class="icon emoji-div">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#fafafa}</style><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                </div>
                <div class="icon attachment-div">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#fafafa}</style><path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/></svg>
                </div>  
              </div>
                
                <div class="text-box">
                  <input class="message-input" type="email" placeholder="Escribe aqui tu correo" />
                </div>

                <div class="icon send-div">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#fafafa}</style><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
                </div>
            </div>
          </div>
      </div>
      `;

      const sendButton = this.shadow.querySelector(".send-div");
      const sentDiv = this.shadow.querySelector(".sent") as HTMLElement;

      sendButton?.addEventListener("click", ()=>{
        const mailAddress = this.shadow.querySelector(".message-input") as HTMLInputElement;

        state.sendMail(mailAddress.value, ()=>{
          sentDiv.style.display = "flex"
        }, ()=>{console.log("ERR")})

      });

      const style = document.createElement("style");
      style.textContent = `

      .sent{
        background-color: #363636;
        position: relative;
        margin: 0 5px;
        padding: 5px 15px;
        width: 87vw;
        border-radius: 10px;
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: none;
      }
      @media (min-width: 768px){
        .sent{
          width: 55vw;
          margin: 15px 15px;
        }
      }

      .emojis-left{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 20vw;
      }
      @media (min-width: 768px){
        .emojis-left{
          width: 10vw;
        }
      }

      .icon{
        width: 40px;
        height: 6vhpx;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        margin: 0 7px;
      }

      .text-box{
        width: 60vw;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .text-box:hover{
        background-color: #353535:
      }

      .message-input{
        width: 60vw;
        height: 20px;
        color: white;
        font-size: 15px;
        background-color: #272727;
        border: none;
      }
      textarea:focus, input:focus{
        outline: none;
      }
      .message-input:focus{
        border: none;
        background-color: #272727
      }

      .message-bar{
        display: flex;
        width: 100vw;
        height: 6vh;
        background-color: #272727;
        position: relative;
        justify-content: space-around;
      }
      @media (min-width: 768px){
        .message-bar{
          justify-content: space-evenly;
          width: 75vw;
        }
      }

      .chat-root-div{
        height: 80vh;
        background-color: #272727;
        padding: 3px 0;
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
        opacity: 0.1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
        margin: 0 5px;
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
        width: 87vw;
        color: #ccdedb;
        font-size: 20px;
        text-align: center;
        margin: 5px 6px ;
      }
      @media (min-width: 768px){
        .message-title-p,
        .message-description-p{
          width: 55vw;
        }
      }

      .center{
        text-align: center
      }

      .space{
        margin: 15px 6px;
      }

      .image-div{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%
      }
      .image{
        height: 50vh;
      }
      
      .wrapper{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        height: 80vh;
      }
      @media (min-width: 768px){
        .wrapper{
          height: 86vh
        }
      }
      `;

      this.shadow.appendChild(style);

    }
}

customElements.define("contact-page", ContactPage);
