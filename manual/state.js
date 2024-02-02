"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = void 0;
exports.state = {
    data: {
        actualTabHeader: "Sobre mí",
        deployed: false,
    },
    listeners: [],
    init: function () {
        var cs = this.getState();
        var actualUrl = window.location.origin;
        if (actualUrl.startsWith("http://localhost")) {
            cs.deployed = false;
        }
        else {
            cs.deployed = true;
        }
        this.setState(cs);
    },
    subscribe: function (cb) {
        // recibe callbacks para ser avisados posteriormente
        this.listeners.push(cb);
    },
    getState: function () {
        return this.data;
    },
    setDeployedStatus: function (status) {
        var cs = this.getState();
        cs.deployed = status;
        this.setState(cs);
    },
    setHeader: function (value) {
        var cs = this.getState();
        cs.actualTabHeader = value;
        this.setState(cs);
    },
    setState: function (newState) {
        this.data = newState;
        var cs = this.getState();
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var cb = _a[_i];
            cb(cs);
        }
    },
    sendMail: function (address, callback, err) {
        var validAddress = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (address.match(validAddress)) {
            console.log("Enviando correo a: " + address);
            fetch("https://mailer-api-qfoh.onrender.com/mail?mail=" + address, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(function (res) {
                if (res.status == 200) {
                    console.log("Correo enviado correctamente :)");
                    callback();
                }
                else {
                    err();
                }
            });
        }
        else {
            alert("Invalid email address!");
        }
    }
};
