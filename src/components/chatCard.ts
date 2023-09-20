import {Router} from '@vaadin/router';
import { state } from '../state';

class ChatCard extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
        super();
        this.render();
    }
    connectedCallback() {
        
    }
    render() {
        const cardTitle = this.getAttribute("title");
        var cardImageUrl = "";
        var previewCard = "Preview tarjeta...";

        switch(cardTitle){
            case "Sobre Mi": previewCard = "Informacion sobre Sebas"; 
                            cardImageUrl = require("../assets/img/profile.png")
                break
            case "Experiencias": previewCard = "Experiencias laborales"; 
                            cardImageUrl = require("../assets/img/explogo.jpg")
                break
            case "Trabajos": previewCard = "Proyectos web"; 
                            cardImageUrl = require("../assets/img/projects.jpg")
                break
            case "Contacto": previewCard = "Encontrame en..."; 
                            cardImageUrl = require("../assets/img/contact.jpg")
                break
        }

        this.addEventListener("click", ()=>{
            const cs = state.getState();
            if(cs.deployed){
                switch(cardTitle){
                    case "Sobre Mi": 
                        Router.go("/wpp-clon/about");
                        state.setHeader("Sobre mí");
                        break
                    case "Experiencias": 
                        Router.go("/wpp-clon/experiences");
                        state.setHeader("Experiencias");
                        break
                    case "Trabajos": 
                        Router.go("/wpp-clon/works");
                        state.setHeader("Trabajos");
                        break
                    case "Contacto": 
                        Router.go("/wpp-clon/contact");
                        state.setHeader("Contacto");
                        break
                }
            }
            if(!cs.deployed){
                switch(cardTitle){
                    case "Sobre Mi": 
                        Router.go("/about");
                        state.setHeader("Sobre mí");
                        break
                    case "Experiencias": 
                        Router.go("/experiences");
                        state.setHeader("Experiencias");
                        break
                    case "Trabajos": 
                        Router.go("/works");
                        state.setHeader("Trabajos");
                        break
                    case "Contacto": 
                        Router.go("/contact");
                        state.setHeader("Contacto");
                        break
                }
            }
        })

        this.shadow.innerHTML = `
      <div class="card">
            <div class="card__image">
            </div>      

            <div class="card__info">
                <h3 class="card__title">${cardTitle}</h3>
                <p class="card__preview">${previewCard}</p>
            </div>

            <div class="card__time">
                <p class="card__time-p">Ayer</p>
            </div>
      </div>
      `;

      const style = document.createElement("style");
      style.textContent = `
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
            background-image: url(${cardImageUrl});
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
      `;

      this.shadow.appendChild(style);
    }
}

customElements.define("chat-card", ChatCard);
