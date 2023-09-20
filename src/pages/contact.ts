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
        <div class="image-div">
          <img class="image" src=${underConstruction}>
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
        opacity: 0.1;
      }
      @media (min-width: 768px){
        .chat-root-div::before{
          top: 14vh;
          left: 25vw;
          background-size: contain;
          background-repeat: repeat;
        }
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
      `;

      this.shadow.appendChild(style);
    }
}

customElements.define("contact-page", ContactPage);
