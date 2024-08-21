interface Location {
    name: string;
    blipCoords: [x: number, y: number, z: number];
    entryCoords: [x: number, y: number, z: number];
    exitCoords: [x: number, y: number, z: number];
}

const ammunationList: Location[] = [
    {
        name: 'Qurollar',
        blipCoords: [21.70,-1107.41,29.79],
        entryCoords: [21.83294677734375, -1107.654296875, 29.797021865844727],
        exitCoords: [0, 0, 0]
    },
    {
        name: 'Qurollar',
        blipCoords: [1696.105,3755.167,34.705],
        entryCoords: [1694.0714111328125, 3759.60546875, 34.705352783203125],
        exitCoords: [0, 0, 0]
    },
    {
        name: 'Qurollar',
        blipCoords: [247.365,-45.878,69.941],
        entryCoords: [251.82839965820312, -49.930381774902344, 69.94104766845703],
        exitCoords: [0, 0, 0]
    }
];

const generalStoreList: Location[] = [
    {
        name: 'Do`kon',
        blipCoords: [0, 0, 0],
        entryCoords: [0, 0, 0],
        exitCoords: [0, 0, 0]
    },
    {
        name: 'Zargar do`kon',
        blipCoords: [-630.07, -236.332, 38.05704],
        entryCoords: [0, 0, 0],
        exitCoords: [0, 0, 0]
    }
];

const barberShopList: Location[] = [
    {
        name: 'Sartarosh',
        blipCoords: [0, 0, 0],
        entryCoords: [0, 0, 0],
        exitCoords: [0, 0, 0]
    },
    // Add more Barber Shop locations as needed
];

const luxuryAutoList: Location[] = [
    {
        name: 'Qimmatbaho mashinalar',
        blipCoords: [-783.171,-246.461,37.021],
        entryCoords: [0, 0, 0],
        exitCoords: [0, 0, 0]
    }
];

const carWashList: Location[] = [
    {
        name: 'Avtomoyka',
        blipCoords: [53.940,-1390.770,29.373],
        entryCoords: [23.91856575012207, -1391.85595703125, 29.33220863342285],
        exitCoords: [0, 0, 0]
    }
];

const losSantosCustomsList: Location[] = [
    {
        name: 'Avto tuning',
        blipCoords: [-367.734,-130.859,39.117],
        entryCoords: [-340.5051574707031, -138.95497131347656, 39.009666442871094],
        exitCoords: [0, 0, 0]
    }
];

const clothingList: Location[] = [
    {
        name: 'Kiyimlar',
        blipCoords: [-159.300,-304.329,39.733],
        entryCoords: [-162.6570281982422, -302.2402038574219, 39.733272552490234],
        exitCoords: [0, 0, 0]
    }
];

export { ammunationList, generalStoreList, barberShopList, losSantosCustomsList, luxuryAutoList, clothingList, carWashList, Location };
