export const state = {
    data: {
        actualTabHeader : "Sobre mí",
        deployed: false,
    },
    listeners: [],
    init(){
        const cs = this.getState();
        const actualUrl = window.location.origin;

        if(actualUrl.startsWith("http://localhost")){
            cs.deployed = false;
        }else{
            cs.deployed = true;
        }

        this.setState(cs)
    },
    subscribe(cb: (any) => any) {
        // recibe callbacks para ser avisados posteriormente
        this.listeners.push(cb);
    },
    getState() {
        return this.data;
    },
    setDeployedStatus(status: boolean){
        const cs = this.getState();
        cs.deployed = status;
        this.setState(cs);
    },
    setHeader(value: string){
        const cs = this.getState()
        cs.actualTabHeader = value;
        this.setState(cs)
    },
    setState(newState) {
        this.data = newState;
        const cs = this.getState();
        for (const cb of this.listeners) {
            cb(cs);
        }
    },
    sendMail(address: any, callback, err){
        var validAddress = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (address.match(validAddress)) {
            console.log("Enviando correo a: " + address)
            
            fetch("https://mailer-api-qfoh.onrender.com/mail?mail="+address,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                  }
            })
            .then((res)=>{
                if(res.status == 200){
                    console.log("Correo enviado correctamente :)")
                    callback()
                }
                else {
                    err()
                }
            })

        } else {    
            alert("Invalid email address!");
        }
    }
};