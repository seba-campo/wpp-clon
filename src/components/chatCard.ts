class ChatCard extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
        super();
        this.render();
    }
    connectedCallback() {
    }
    render() {
        this.shadow.innerHTML = `
      <div class="card">
            <div class="card__image">
            </div>      

            <div class="card__info">
                <h3 class="card__title">Exp</h3>
                <p class="card__preview">Preview de tarjeta...</p>
            </div>
      </div>
      `;

      const style = document.createElement("style");
      style.textContent = `
        .card{
            padding: 0 5px;
            border-radius: 10px;
            width: 90px;
            height: 6vh;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        @media (min-width: 768px){
            .card{
                padding: 0;
                height: 70px;
                width: 25vw;
            }
        }

        .card:hover{ 
            background-color: #4d4d4d;
        }

        .card__image{
            margin: 0 8px;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            background-color: black;
        }

        .card__info{
            display: flex; 
            flex-direction: column;
            justify-content: space-between;
        }

        .card__title{
            font-size: 17px;
            font-weight: 600;
            margin: 0 4px;
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
      `;

      this.shadow.appendChild(style);
    }
}

customElements.define("chat-card", ChatCard);
