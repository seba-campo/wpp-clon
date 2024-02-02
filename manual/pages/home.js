var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super.call(this) || this;
        _this.shadow = _this.attachShadow({ mode: "open" });
        _this.render();
        return _this;
    }
    HomePage.prototype.connectedCallback = function () {
    };
    HomePage.prototype.render = function () {
        var chatHeaderEl = document.querySelector(".chat-header");
        chatHeaderEl.style.display = "none";
        this.shadow.innerHTML = "\n      <div class=\"welcome-div\">\n          <div class=\"welcome-text-box\">\n              <div>\n                <h1 class=\"welcome-title\">Bienvenido a mi Portfolio</h1>\n              </div>\n\n              <div>\n                <p class=\"welcome-p\">Ac\u00E1 vas a encontrar toda la info sobre mis proyectos, experiencias y hobbies.</p>\n                <p class=\"welcome-p\">Actualmente, el sitio no est\u00E1 terminado, si encontr\u00E1s errores pronto los ver\u00E1s solucionados ;)</p>\n              </div>\n\n            </div>\n            \n            <div class=\"welcome-text-box-2\">\n              <div class=\"welcome-thanks\">\n                <p>\uD83D\uDE80 Muchas gracias por pasar!</p>\n\n                <p class=\"leyenda\">Podr\u00E1s volver ac\u00E1 tocando ESC, o la X superior</p>\n              </div>\n            </div>\n          </div>\n      ";
        var style = document.createElement("style");
        style.textContent = "\n        .welcome-div{\n          height: 89vh;\n          padding: 3px 5px;\n          overflow-y: auto;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          background: linear-gradient(-45deg, #bfbfbf, #5d5d5d, #393939, #737373);\n          background-size: 400% 400%;\n\t        animation: gradient 15s ease infinite;\n        }\n\n        @keyframes gradient {\n          0% {\n            background-position: 0% 50%;\n          }\n          50% {\n            background-position: 100% 50%;\n          }\n          100% {\n            background-position: 0% 50%;\n          }\n        }\n        @media (min-width: 768px){\n          .welcome-div{\n            height: 95vh;\n            width: 75vw;\n            overflow-x: hidden;\n            margin: 0 0;\n            padding: 0;\n          }\n        }\n\n        .welcome-text-box{\n          height: 70vh;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n        }\n\n        .welcome-title{\n          margin: 10px 0;\n          font-size: 30px;\n          font-weight: 500;\n          color: white;\n        }\n\n        .welcome-p{\n          font-size: 15px;\n          font-weight: 300;\n          color: white;\n          text-align: center;\n          color: #dfe0e0;\n        }\n\n        .welcome-thanks{\n          font-size: 14px;\n          font-weight: 300;\n          color: white;\n          text-align: center;\n          color: #dfe0e0;\n        }\n      ";
        this.shadow.appendChild(style);
    };
    return HomePage;
}(HTMLElement));
customElements.define("home-page", HomePage);
