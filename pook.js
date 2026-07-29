export const POOK = {

    core(nc, pq, tmp){
        return {
            mode: "pook",
            stability: (nc.energy + pq.load + tmp.echo) % 100,
            risk: pq.load > 70 ? "hoch" : "normal"
        };
    },

    classify(stability){
        if(stability < 20) return "kritisch";
        if(stability < 50) return "neutral";
        if(stability < 80) return "koop";
        return "pook";
    },

    story(code){
        const MAP = {
            RUN8: "POOK erkennt Laufzeit‑Impuls.",
            TMP: "POOK prüft Kurzzeit‑Cache.",
            "3hit90": "POOK markiert Dreifach‑Impuls.",
            dir: "POOK liest Richtungsvektor.",
            WpiR: "POOK moduliert W‑PIR‑Signal.",
            MXU: "POOK bewertet Matrix‑Unit.",
            CLONE: "POOK erkennt Duplikationspfad.",
            FAIL: "POOK meldet kritischen Zustand.",
            "9vec3tor": "POOK analysiert 9×3‑Vektor."
        };
        return MAP[code] || "POOK: unbekannter Impuls.";
    },

    runtime(nc, pq, tmp){
        return {
            ncSpin: nc.spin,
            pqLoad: pq.load,
            tmpEcho: tmp.echo,
            pookLevel: (nc.spin + pq.load + tmp.echo) % 100
        };
    }
};
