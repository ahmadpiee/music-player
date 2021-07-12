import { v4 as uuidv4 } from "uuid";

function data() {
    return [
        {
            name: "Solway Firth",
            cover: "../../assets/images/WANYK.png",
            audio: "../../assets/musics/Slipknot - Solway Firth.mp3",
            artist: "Slipknot",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Unstained",
            cover: "../../assets/images/WANYK.png",
            audio: "../../assets/musics/Slipknot - Unsainted.mp3",
            artist: "Slipknot",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Nero Forte",
            cover: "../../assets/images/WANYK.png",
            audio: "../../assets/musics/Slipknot - Nero Forte.mp3",
            artist: "Slipknot",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Orphan",
            cover: "../../assets/images/WANYK.png",
            audio: "../../assets/musics/Slipknot - Orphan.mp3",
            artist: "Slipknot",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "A Vulgar Picture",
            cover: "../../assets/images/image1.jpg",
            audio: "../../assets/musics/Black Dahlia Murder - A Vulgar Picture.mp3",
            artist: "Black Dahlia Murder",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Miasma",
            cover: "../../assets/images/image1.jpg",
            audio: "../../assets/musics/Black-Dahlia Murder - Miasma.mp3",
            artist: "Black Dahlia Murder",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "115",
            cover: "../../assets/images/image1.jpg",
            audio: "../../assets/musics/Elena Siegman - 115.mp3",
            artist: "Elena Siegman",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Beauty of Annihilation",
            cover: "../../assets/images/image1.jpg",
            audio: "../../assets/musics/Elena Siegman - Beauty of Annihilation.mp3",
            artist: "Elena Siegman",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
    ];
}

export default data;
