import { ammunationList, generalStoreList, barberShopList, luxuryAutoList, losSantosCustomsList, clothingList, carWashList, Location } from '@assets/Location.asset';

class LocationManager {

    public colshapeData: Map<number, { 
        name: string;
        type: 'entry' | 'exit';
    }>;

    constructor() {
        this.colshapeData = new Map();
        this.createBlips(ammunationList, 110, 1);
        this.createBlips(generalStoreList, 11, 2);
        this.createBlips(barberShopList, 71, 4);
        this.createBlips(losSantosCustomsList, 72, 4);
        this.createBlips(luxuryAutoList, 824, 4);
        this.createBlips(carWashList, 100, 4);
        this.createBlips(clothingList, 73, 4);
    }

    createBlips(locationList: Location[], picture: number, color: number) {
        locationList.forEach(location => {
            const blip = mp.blips.new(picture, new mp.Vector3(location.blipCoords[0], location.blipCoords[1], location.blipCoords[2]), {
                name: location.name,
                color: color,
                shortRange: true,
                scale: 1.0
            });

            if(location.entryCoords[0] != 0){
                this.createColshape({ x: location.entryCoords[0], y: location.entryCoords[1], z: location.entryCoords[2]}, location.name, 'entry');
            }
            
            if(location.exitCoords[0] != 0){
                this.createColshape({ x: location.exitCoords[0], y: location.exitCoords[1], z: location.exitCoords[2]}, location.name, 'exit');
            }
        });
    }

    createColshape(coords: { x: number; y: number; z: number }, name: string, type: 'entry' | 'exit') {
        const colshape = mp.colshapes.newSphere(coords.x, coords.y, coords.z, 1.0);
        this.colshapeData.set(colshape.id, { name: name, type: type});

        this.createMarker(coords);
    }

    createMarker(coords: { x: number; y: number; z: number }) {
        mp.markers.new(1, new mp.Vector3(coords.x, coords.y, coords.z - 1), 1.0, {
            color: [255, 0, 0, 100], // Red color with some transparency
            visible: true
        });
    }
}

const locationManager = new LocationManager();
export { locationManager };
