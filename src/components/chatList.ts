class ChatList extends HTMLElement {
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
        <div class="chat-root-div__title-div">
          <h1 class="chat-root-div__tile-h1">CHAT PAGE</h1>  
        </div>
      </div>
      `;

      const style = document.createElement("style");
      style.textContent = `
        
      `;

      this.shadow.appendChild(style);
    }
}

customElements.define("chat-list", ChatList);