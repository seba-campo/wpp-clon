class HomePage extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
        super();
        this.render();
    }
    connectedCallback() {
    }
    render() {      
        this.shadow.innerHTML = `
      <div class="chat-root-div">
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
      `;

      this.shadow.appendChild(style);
    }
}

customElements.define("home-page", HomePage);
