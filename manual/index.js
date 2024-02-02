"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./pages/about");
require("./pages/experiencies");
require("./pages/works");
require("./pages/contact");
require("./pages/home");
require("./components/chatCard");
require("./components/chatHeader");
require("./router");
var state_1 = require("./state");
var router_1 = require("@vaadin/router");
(function () {
    state_1.state.init();
    function spinup() {
        fetch("https://mailer-api-qfoh.onrender.com/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    ;
    spinup();
    setInterval(spinup, 840000);
    document.addEventListener("keydown", function (e) {
        var cs = state_1.state.getState();
        if (e.key == "Escape") {
            switch (cs.deployed) {
                case true:
                    router_1.Router.go("/wpp-clon/");
                    break;
                case false:
                    router_1.Router.go("/");
                    break;
            }
            ;
        }
    });
    var closeBtn = document.querySelector(".icons__close");
    closeBtn.addEventListener("click", function () {
        var cs = state_1.state.getState();
        switch (cs.deployed) {
            case true:
                router_1.Router.go("/wpp-clon/");
                break;
            case false:
                router_1.Router.go("/");
                break;
        }
        ;
    });
})();
