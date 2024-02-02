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
var state_1 = require("../state");
var ChatHeader = /** @class */ (function (_super) {
    __extends(ChatHeader, _super);
    function ChatHeader() {
        var _this = _super.call(this) || this;
        _this.shadow = _this.attachShadow({ mode: "open" });
        _this.headerTitle = "Sobre mí";
        _this.render();
        return _this;
    }
    ChatHeader.prototype.connectedCallback = function () {
        var _this = this;
        state_1.state.subscribe(function (cs) {
            _this.headerTitle = cs.actualTabHeader;
            _this.render();
        });
    };
    ChatHeader.prototype.render = function () {
        var style = document.createElement("style");
        var cardImageUrl = "";
        switch (this.headerTitle) {
            case "Sobre mí":
                cardImageUrl = require("../assets/img/profile.png");
                break;
            case "Experiencias":
                cardImageUrl = require("../assets/img/explogo.jpg");
                break;
            case "Trabajos":
                cardImageUrl = require("../assets/img/projects.jpg");
                break;
            case "Contacto":
                cardImageUrl = require("../assets/img/contact.jpg");
                break;
        }
        this.shadow.innerHTML = "\n            <div class=\"header\">\n                <div class=\"chat-image\">\n                    \n                </div>\n                <div class=\"header-info\">\n                    <div>\n                        <h3 class=\"chat-title\">".concat(this.headerTitle, "</h3>\n                    </div>\n                    <div>\n                        <p class=\"chat-status\">En linea</p>\n                    </div>    \n                </div>\n            </div>\n      ");
        style.textContent = "\n        .header{\n            display: flex; \n            justify-content: center; \n            align-items: center;\n        }\n\n        .chat-image{\n            width: 35px;\n            height: 35px;\n            border-radius: 50%;\n            background-color: white;\n            margin-right: 6px; \n            background-color: black;\n            background-image: url(".concat(cardImageUrl, ");\n            background-size: cover;\n        }\n\n        .chat-title{\n            font-size: 19px;\n            font-weight: 600;\n            margin: 0 4px;\n        }\n\n        .chat-status{\n            font-size: 14px;\n            margin: 0px 4px;\n            font-weight: 300;\n        }\n      ");
        this.shadow.appendChild(style);
    };
    return ChatHeader;
}(HTMLElement));
customElements.define("chat-header", ChatHeader);
