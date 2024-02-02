"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@vaadin/router");
var state_1 = require("../state");
var ChatCard = /** @class */ (function (_super) {
    __extends(ChatCard, _super);
    function ChatCard() {
        var _this = _super.call(this) || this;
        _this.shadow = _this.attachShadow({ mode: "open" });
        _this.render();
        return _this;
    }
    ChatCard.prototype.connectedCallback = function () {
    };
    ChatCard.prototype.render = function () {
        var cardTitle = this.getAttribute("title");
        var cardImageUrl = "";
        var previewCard = "Preview tarjeta...";
        switch (cardTitle) {
            case "Sobre Mi":
                previewCard = "Informacion sobre Sebas";
                cardImageUrl = require("../assets/img/profile.png");
                break;
            case "Experiencias":
                previewCard = "Experiencias laborales";
                cardImageUrl = require("../assets/img/explogo.jpg");
                break;
            case "Trabajos":
                previewCard = "Proyectos web";
                cardImageUrl = require("../assets/img/projects.jpg");
                break;
            case "Contacto":
                previewCard = "Encontrame en...";
                cardImageUrl = require("../assets/img/contact.jpg");
                break;
        }
        this.addEventListener("click", function () {
            var cs = state_1.state.getState();
            if (cs.deployed) {
                switch (cardTitle) {
                    case "Sobre Mi":
                        router_1.Router.go("/wpp-clon/about");
                        state_1.state.setHeader("Sobre mí");
                        break;
                    case "Experiencias":
                        router_1.Router.go("/wpp-clon/experiences");
                        state_1.state.setHeader("Experiencias");
                        break;
                    case "Trabajos":
                        router_1.Router.go("/wpp-clon/works");
                        state_1.state.setHeader("Trabajos");
                        break;
                    case "Contacto":
                        router_1.Router.go("/wpp-clon/contact");
                        state_1.state.setHeader("Contacto");
                        break;
                }
            }
            if (!cs.deployed) {
                switch (cardTitle) {
                    case "Sobre Mi":
                        router_1.Router.go("/about");
                        state_1.state.setHeader("Sobre mí");
                        break;
                    case "Experiencias":
                        router_1.Router.go("/experiences");
                        state_1.state.setHeader("Experiencias");
                        break;
                    case "Trabajos":
                        router_1.Router.go("/works");
                        state_1.state.setHeader("Trabajos");
                        break;
                    case "Contacto":
                        router_1.Router.go("/contact");
                        state_1.state.setHeader("Contacto");
                        break;
                }
            }
        });
        this.shadow.innerHTML = "\n      <div class=\"card\">\n            <div class=\"card__image\">\n            </div>      \n\n            <div class=\"card__info\">\n                <h3 class=\"card__title\">".concat(cardTitle, "</h3>\n                <p class=\"card__preview\">").concat(previewCard, "</p>\n            </div>\n\n            <div class=\"card__time\">\n                <p class=\"card__time-p\">Ayer</p>\n            </div>\n      </div>\n      ");
        var style = document.createElement("style");
        style.textContent = "\n        .card{\n            padding: 0 5px;\n            border-radius: 14px;\n            width: 100px;\n            height: 6vh;\n            display: grid;\n            grid-template-columns: 30px 1fr;\n            grid-template-rows: 1fr;\n            grid-template-areas: \"image\" \"chatinfo\" \"status\";\n            justify-items: center;\n            align-items: center\n        }\n        @media (min-width: 768px){\n            .card{\n                grid-template-columns: 60px 2fr 1fr;\n                padding: 0;\n                height: 70px;\n                width: 20vw;\n            }\n        }\n\n        .card:hover{ \n            background-color: #4d4d4d;\n        }\n\n        .card__image{\n            margin: 0 2px;\n            height: 30px;\n            width: 30px;\n            border-radius: 50%;\n            background-color: black;\n            background-image: url(".concat(cardImageUrl, ");\n            background-size: cover;\n        }\n        @media (min-width: 768px){\n            .card__image{\n                margin: 0 8px;\n            }\n        }\n\n        .card__info{\n            justify-self: start;\n            display: flex; \n            flex-direction: column;\n            justify-content: space-evenly;\n        }\n\n        .card__title{\n            font-size: 13px;\n            font-weight: 600;\n            margin: 0 4px;\n        }\n        @media (min-width: 768px){\n            .card__title{\n                font-size: 17px;\n            }\n        }\n\n        .card__preview{\n            display: none;\n            margin: 2px 4px;\n            font-weight: 300;\n        }\n        @media (min-width: 768px){\n            .card__preview{\n                display: block;\n            }\n        }\n\n        .card__time{\n            display: none;\n        }\n        @media (min-width: 768px){\n            .card__time{\n                display: inherit;\n                margin: 0 20px;\n                justify-self: flex-end;\n                align-self: flex-start;\n            }\n    \n            .card__time-p{\n                font-size: 13px;\n                color: #939393;\n            }\n        }\n      ");
        this.shadow.appendChild(style);
    };
    return ChatCard;
}(HTMLElement));
customElements.define("chat-card", ChatCard);
