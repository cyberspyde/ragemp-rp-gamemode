import { locationManager } from "@classes/Location.class";
import { RageShared } from "@shared/index";


mp.events.add('playerEnterColshape', (player : PlayerMp, shape: ColshapeMp) => {
    const data = locationManager.colshapeData.get(shape.id);
    if (data){
        if (data.type == "entry") {
        player.showNotify(RageShared.Enums.NotifyType.TYPE_SUCCESS, `You entered in ${data.name} ${data.type} point`);
        } if (data.type == "exit") {
            player.showNotify(RageShared.Enums.NotifyType.TYPE_SUCCESS, `You entered in ${data.name} ${data.type} point`);
        }
    }
});

mp.events.add('playerExitColshape', (player : PlayerMp, shape: ColshapeMp) => {
    const data = locationManager.colshapeData.get(shape.id);
    if(data){
        if (data.type == "exit") {
            player.showNotify(RageShared.Enums.NotifyType.TYPE_SUCCESS, `You exited ${data.type} point`);
        } else if (data.type == "entry") {
            player.showNotify(RageShared.Enums.NotifyType.TYPE_SUCCESS, `You exited ${data.type} point`);
        }
    }
});