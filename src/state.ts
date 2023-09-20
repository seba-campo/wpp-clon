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
};
