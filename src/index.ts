import "./pages/about"
import "./pages/experiencies"
import "./pages/works"
import "./pages/contact"
import "./pages/home"


import "./components/chatCard"
import "./components/chatHeader"
import "./router"

import { state } from "./state"
import { Router } from "@vaadin/router" 

(()=>{
    state.init();

    function spinup(){
        fetch("https://mailer-api-qfoh.onrender.com/",{
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                  }
            })
    };

    spinup();
    setInterval(spinup, 840000)

    document.addEventListener("keydown", (e) => {
        const cs = state.getState();
        if (e.key == "Escape"){
            switch(cs.deployed){
                case true:
                    Router.go("/wpp-clon/")
                    break
                case false:
                    Router.go("/")
                    break
            };
        }
    });

    const closeBtn = document.querySelector(".icons__close") as HTMLElement;
    closeBtn.addEventListener("click", ()=>{
        const cs = state.getState();
        switch(cs.deployed){
            case true:
                Router.go("/wpp-clon/")
                break
            case false:
                Router.go("/")
                break
        };
    })
}
)()