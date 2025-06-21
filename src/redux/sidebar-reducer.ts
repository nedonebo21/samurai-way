import {SideBarType} from "./types/state-types";
import {ActionsType} from "./types/action-types";

let initialState: SideBarType = {
    usersOnlineData: [
        {
            id: "1",
            name: "Pudge",
            isOnline: true,
            imgUrl: "https://play-lh.googleusercontent.com/82HFnMT2VbR8wgl6_a17UppNiNvzmyafK0BJW4FW4h-CV4BZq2dGTisboxOYNYI5gLDe=w240-h480-rw"
        },
        {
            id: "2",
            name: "Morphling",
            isOnline: true,
            imgUrl: "https://dota2.ru/img/heroes/morphling/portrait.jpg"
        },
        {
            id: "3",
            name: "KOTL",
            isOnline: true,
            imgUrl: "https://preview.redd.it/ygt394pc4uz81.jpg?width=300&format=pjpg&auto=webp&s=931c83697822508002307f79ebb05da97537afa4"
        },
        {
            id: "4", name: "Viper", isOnline: false, imgUrl: "https://dota2.ru/img/heroes/viper/portrait.jpg"
        },
        {
            id: "5",
            name: "Phoenix",
            isOnline: false,
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLL8ZVV8mtzPPZ2mR_FtYyok4o2t36qMLeWtL3Cz-r9lRKZkgukBZsQtTH2p7i-9SKhtk&usqp=CAU"
        },
        {
            id: "6",
            name: "Ember",
            isOnline: true,
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNG9-yTA20s2dFLEJamV7CilxHAIkU3Oc6HA&s"
        },
        {
            id: "7",
            name: "Storm",
            isOnline: false,
            imgUrl: "https://i.ytimg.com/vi/X1oXuyG6YxI/maxresdefault.jpg"
        },
    ]
}

export const sidebarReducer = (state: SideBarType = initialState, actions: ActionsType) => {
    return state
}
