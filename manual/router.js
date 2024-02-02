"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@vaadin/router");
var state_1 = require("./state");
var router = new router_1.Router(document.querySelector(".main__container"));
var actualUrl = window.location.origin;
if (actualUrl.startsWith("http://localhost")) {
    state_1.state.setDeployedStatus(false);
    router.setRoutes([
        { path: '/', component: 'home-page' },
        { path: '/about', component: 'about-page' },
        { path: '/experiences', component: 'exp-page' },
        { path: '/works', component: 'works-page' },
        { path: '/contact', component: 'contact-page' }
    ]);
}
else {
    state_1.state.setDeployedStatus(true);
    router.setRoutes([
        { path: '/wpp-clon/', component: 'home-page' },
        { path: '/wpp-clon/about', component: 'about-page' },
        { path: '/wpp-clon/experiences', component: 'exp-page' },
        { path: '/wpp-clon/works', component: 'works-page' },
        { path: '/wpp-clon/contact', component: 'contact-page' }
    ]);
}
