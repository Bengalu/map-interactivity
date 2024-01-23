import { create } from "zustand";

export const markersState = create((set) => ({
    markersData: [
        {
            position:[-29.43916240745452, -58.794473760570355],
            iconType:1,
            popUp: "jugador Martin fernandez, defensor, 1,85mts altura"
        },
        {
            position:[-36.22074990896311,-60.53461937446807],
            iconType:2,
            popUp: "jugador Juan rodriguez, delantero"
        },
        {
            position:[-36.22074990896311,-60.53461937446807],
            iconType:2,
            popUp: "jugador lucas rodriguez, mediocampista"
        },
        {
            position:[-33.2593418893903, -64.26350283282035],
            iconType:3,
            popUp: "torneo libertadores"
        },
        {
            position:[-40.30808873310414, -66.47056263786986],
            iconType:3,
            popUp: "torneo calzetto"
        },
        {
            position:[-38.11215981378487, -67.50327749323483],
            iconType:1,
            popUp: "scouting Martin"
        },
        {
            position:[-35.49116622941554, -68.14048453165151],
            iconType:1,
            popUp: "scouting Martin"
        },
],

addMarker: (position, iconType, popUp) => {
    markersState.setState((state) => ({
        markersData: [
            ...state.markersData,
            {
                position,
                iconType,
                popUp,
            },
        ],
    }));
},

removeMarker: (index) => {
    markersState.setState((state) => {
        const newMarkersData = [...state.markersData];
        newMarkersData.splice(index, 1);
        return { markersData: newMarkersData };
    });
},

}))