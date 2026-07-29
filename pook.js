export function POOK_CORE(nc, pq, tmp){
    return {
        mode: "pook",
        stability: (nc.energy + pq.load + tmp.echo) % 100,
        risk: pq.load > 70 ? "hoch" : "normal",
        classify(){
            if(this.stability < 20) return "kritisch";
            if(this.stability < 50) return "neutral";
            if(this.stability < 80) return "koop";
            return "pook";
        }
    };
}
