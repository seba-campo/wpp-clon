import { state } from "../state";

class ChatHeader extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
        super();
        this.render();
    }
    connectedCallback(){
        state.subscribe((cs)=>{
            this.headerTitle = cs.actualTabHeader;
            this.render();
        })
    }
    headerTitle = "Sobre mí";
    render() {
        const style = document.createElement("style");
        var cardImageUrl = "";

        switch(this.headerTitle){
            case "Sobre mí": cardImageUrl = require("../assets/img/profile.png")
                break
            case "Experiencias": cardImageUrl = require("../assets/img/explogo.jpg")
                break
            case "Trabajos": cardImageUrl = require("../assets/img/projects.jpg")
                break
            case "Contacto": cardImageUrl = require("../assets/img/contact.jpg")
                break
        }

        this.shadow.innerHTML = `
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
      `;

      style.textContent = `
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
            background-image: url(${cardImageUrl});
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
      `;

      this.shadow.appendChild(style);
    }
}

customElements.define("chat-header", ChatHeader);
