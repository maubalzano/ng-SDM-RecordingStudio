import { rhItem } from "src/app/models/rhItem";

export const rhItems: rhItem[] = [
    {
        type: "Casse attive",
        description: "Behringer Eurolive 115 (1000w+1000w)",
    },
    {
        type: "Mixer",
        description: "Phonic 16 canali con effetti",
        image: {
            srcset: "../../../../assets/images/gallery/mixer.jpg 1000w,../../../../assets/images/gallery/mixer_m.jpg 100w",
            src: "../../../../assets/images/gallery/mixer.jpg"
        }
    },
    {
        type: "Batteria",
        description: "MAPEX Saturn V drumset (22 14 12)",
        image: {
            srcset: "../../../../assets/images/gallery/batteria_mapex.webp 1000w,../../../../assets/images/gallery/batteria_mapex_m.webp 100w",
            src: "../../../../assets/images/gallery/batteria_mapex.webp"
        }
    },
    {
        type: "Piatti / Pedali",
        description: "1x asta rullante, 3x aste piatti, 1x asta charlestone, doppio pedale Tama Iron Cobra",
        image: {
            srcset:"../../../../assets/images/gallery/registrazioni_batteria.webp 1000w,../../../../assets/images/gallery/registrazioni_batteria_m.webp 100w",
            src:"../../../../assets/images/gallery/registrazioni_batteria.webp"
        }
    },
    {
        type: "Cassa Chitarra",
        description: "Mesa Boogie 4x12 Roadking",
        image: {
            srcset:"../../../../assets/images/gallery/mesa4x12.webp 1000w,../../../../assets/images/gallery/mesa4x12_m.webp 100w",
            src:"../../../../assets/images/gallery/mesa4x12.webp"
        }
    },
    {
        type: "Amplificatore chitarra",
        description: "Peavey 6505+ 60W combo"
    },
    {
        type: "Microfoni",
        description: "3x Shure sm58",
        image: {
            srcset:"../../../../assets/images/gallery/microfoni.webp 1000w,../../../../assets/images/gallery/microfoni_m.webp 100w",
            src:"../../../../assets/images/gallery/microfoni.webp"
        }
    },
    {
        type: "Tastiera",
        description: "Pianoforte digitale thomann DP26 88 tasti pesati",
        image: {
            srcset: "",
            src: "../../../../assets/images/gallery/thomann.jpeg"
        }
    },
    {
        type: "Testata Basso",
        description: "Marshall MB458",
        image: {
            srcset:"../../../../assets/images/gallery/Marshall_MB450.webp 1000w,../../../../assets/images/gallery/Marshall_MB450_m.webp 100w",
            src:"../../../../assets/images/gallery/Marshall_MB450.webp"
        }
    },
    {
        type: "Cassa Basso",
        description: "Gallien Krueger 4x10"
    },
]