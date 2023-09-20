class HomePage extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
        super();
        this.render();
    }
    connectedCallback() {
    }
    render() {   
      
        const chatHeaderEl = document.querySelector(".chat-header") as HTMLElement;
        chatHeaderEl.style.display = "none";

        this.shadow.innerHTML = `
      <div class="welcome-div">
          <div class="welcome-text-box">
              <div>
                <h1 class="welcome-title">Bienvenido a mi Portfolio</h1>
              </div>

              <div>
                <p class="welcome-p">Acá vas a encontrar toda la info sobre mis proyectos, experiencias y hobbies.</p>
                <p class="welcome-p">Actualmente, el sitio no está terminado, si encontrás errores pronto los verás solucionados ;)</p>
              </div>

            </div>
            
            <div class="welcome-text-box-2">
              <div class="welcome-thanks">
                <p>🚀 Muchas gracias por pasar!</p>

                <p class="leyenda">Podrás volver acá tocando ESC, o la X superior</p>
              </div>
            </div>
          </div>
      `;

      const style = document.createElement("style");
      style.textContent = `
        .welcome-div{
          height: 89vh;
          padding: 3px 5px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(-45deg, #bfbfbf, #5d5d5d, #393939, #737373);
          background-size: 400% 400%;
	        animation: gradient 15s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @media (min-width: 768px){
          .welcome-div{
            height: 95vh;
            width: 75vw;
            overflow-x: hidden;
            margin: 0 0;
            padding: 0;
          }
        }

        .welcome-text-box{
          height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .welcome-title{
          margin: 10px 0;
          font-size: 30px;
          font-weight: 500;
          color: white;
        }

        .welcome-p{
          font-size: 15px;
          font-weight: 300;
          color: white;
          text-align: center;
          color: #dfe0e0;
        }

        .welcome-thanks{
          font-size: 14px;
          font-weight: 300;
          color: white;
          text-align: center;
          color: #dfe0e0;
        }
      `;

      this.shadow.appendChild(style);
    }
}

customElements.define("home-page", HomePage);
