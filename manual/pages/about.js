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
var AboutPage = /** @class */ (function (_super) {
    __extends(AboutPage, _super);
    function AboutPage() {
        var _this = _super.call(this) || this;
        _this.shadow = _this.attachShadow({ mode: "open" });
        _this.render();
        return _this;
    }
    AboutPage.prototype.connectedCallback = function () {
    };
    AboutPage.prototype.render = function () {
        var chatHeaderEl = document.querySelector(".chat-header");
        chatHeaderEl.style.display = "flex";
        var backgroundChatImg = require("../assets/img/bg-chat.png");
        var profileImg = require("../assets/img/profile.png");
        var guitarImg = require("../assets/img/seba-guitar.png");
        var a = require("../assets/fontawesome-free-6.4.2-web/css/fontawesome.css");
        var ab = require("../assets/fontawesome-free-6.4.2-web/css/brands.css");
        var c = require("../assets/fontawesome-free-6.4.2-web/css/solid.css");
        this.shadow.innerHTML = "\n      <div class=\"chat-root-div\">\n        <div class=\"about-message\">\n          <div class=\"message-head\">\n            <img class=\"head-img\" src=".concat(profileImg, ">\n          </div>\n\n          <div class=\"message-title\">\n            <p class=\"message-title-p center\"><strong>Hola, soy Sebas!!</strong></p>\n          </div>\n          <div class=\"message-description\">\n            <p class=\"message-description-p\">Bienvenido a mi sitio, lo hice con mucho amor, espero que te guste!</p>\n            <p class=\"message-description-p\">Tengo 24 a\u00F1os, me encanta la <strong>m\u00FAsica\uD83C\uDFB6</strong> y la <strong>tecnolog\u00EDa\uD83D\uDDA5\uFE0F</strong>. He estudiado en ambas orientaciones desde que termin\u00E9 el secundario.</p>\n\n          </div>\n          <!--\n          <div class=\"image-guitar-div\">\n            <img class=\"guitar-img\" src=").concat(guitarImg, ">\n          </div>\n          -->\n          <div class=\"message-description\">\n            <p class=\"message-description-p space\">Estudi\u00E9 cuatro a\u00F1os en el Instituto superior de m\u00FAsica Jos\u00E9 Hernandez \uD83C\uDFB6, especializ\u00E1ndome en piano \uD83C\uDFB9. Por cuestiones personales no pude seguir, pero estoy tramitando el re-ingreso para este 2024!.\n              De todas maneras, durante los a\u00F1os que no curs\u00E9 hice m\u00FAsica y segu\u00ED mejorando mi t\u00E9cnica y conocimiento.\n              <br>Pod\u00E9s ver mas sobre esto en el chat de Contacto ;)\n            </p>\n          </div>\n          <div class=\"message-description\">\n            <p class=\"message-description-p space\">Otras de mis aficiones es la tecnolog\u00EDa, la cual tengo afinidad desde peque\u00F1o. \n              Tratandose de programas y computadoras, siempre tuve un gran inter\u00E9s, y m\u00E1s aun en entender como funcionan y poder hacer\n              programas y juegos.\n              Tuve la oportunidad de comenzar a trabajar como analista de soporte de aplicaciones y con dicho avance, me encamin\u00E9 en aprender\n              mas a fondo como poder hacer estas aplicaciones por mi cuenta!\n              <br>\n              Me anot\u00E9 entonces en un curso de programaci\u00F3n (sin saber nada) y desde entonces (muchos bugs y horas de codeo despues), me encuentro haciendo\n              p\u00E1ginas y apps!\n              Y lo mejor de todo, es que a\u00FAn queda infinidades de cosas por aprender!\n              <br>\n              Las cosas que fu\u00ED armando, las tengo todas en el chat de Trabajos :D\n            </p>\n          </div>\n          <div class=\"message-description\">\n            <p class=\"message-description-p space\">\n              \n            </p>\n          </div>\n        </div>\n      </div>\n      ");
        var style = document.createElement("style");
        style.textContent = "\n        .chat-root-div{\n          height: 80vh;\n          background-color: #272727;\n          padding: 3px 5px;\n          overflow-y: auto;\n        }\n        @media (min-width: 768px){\n          .chat-root-div{\n          height: 86vh;\n          width: 75vw;\n          overflow-x: hidden;\n          margin: 0 0;\n          padding: 0;\n          }\n\n          .chat-root-div::-webkit-scrollbar-track {\n            border: 1px solid #000;\n            padding: 2px 0;\n            background-color: #404040;\n          }\n          \n          .chat-root-div::-webkit-scrollbar {\n            width: 9px;\n          }\n          \n          .chat-root-div::-webkit-scrollbar-thumb {\n            border-radius: 10px;\n            box-shadow: inset 0 0 6px rgba(0,0,0,.6);\n            background-color: #737272;\n            border: 1px solid #000;\n          }\n        }\n        \n        .chat-root-div::before{\n          content: \"\";\n          background-image: url(".concat(backgroundChatImg, ");\n          background-size: cover;\n          position: absolute;\n          top: 20vh;\n          right: 0px;\n          bottom: 0px;\n          left: 0px;\n          opacity: 0.25;\n        }\n        @media (min-width: 768px){\n          .chat-root-div::before{\n            top: 14vh;\n            left: 25vw;\n            background-size: contain;\n            background-repeat: repeat;\n          }\n        }\n\n        .about-message{\n          position: relative;\n          margin: 0;\n          padding: 5px 15px;\n          background-color: #025c4c;\n          width: 87vw;\n          border-radius: 10px;\n          display: flex; \n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n        }\n        @media (min-width: 768px){\n          .about-message{\n            width: 55vw;\n            margin: 15px 15px;\n          }\n        }\n\n        .head-img{\n          width: 250px;\n        }\n\n        .image-guitar-div{\n          margin: 20px 0;\n        }\n\n        .guitar-img{\n          width: 150px;\n\n        }\n\n        .message-title{\n          width: 100%;\n        }\n\n        .message-title-p,\n        .message-description-p{\n          color: #ccdedb;\n          font-size: 20px;\n          text-align: start;\n          margin: 5px 6px ;\n        }\n\n        .center{\n          text-align: center\n        }\n\n        .space{\n          margin: 15px 6px;\n        }\n      ");
        this.shadow.appendChild(style);
    };
    return AboutPage;
}(HTMLElement));
customElements.define("about-page", AboutPage);
