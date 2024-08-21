import crypto from "crypto";
//---------------------------------------//
import { RAGERP } from "@api";
//---------------------------------------//
import "@commands/index";
//---------------------------------------//
import "@prototype/Player.prototype";
//---------------------------------------//
import "@classes/WorldManager.class";
//---------------------------------------//
import "@events/Auth.event";
import "@events/Chat.event";
import "@events/Server.event";
import "@events/Character.event";
import "@events/Player.event";
import "@events/Inventory.event";
import "@events/Death.event";
import "@events/Vehicle.event";
import "@events/Point.event";
import "@events/Location.event";
//---------------------------------------//
import { blue, green, yellow } from "colorette";
import { v4 } from "uuid";

//---------------------------------------//
async function initGamemode() {
    mp.events.delayInitialization = true;
    await RAGERP.database
        .initialize()
        .then(() => console.log("Database connected!"))
        .catch((err) => {
            throw new Error(err);
        });

    console.log(green(`_____  _____       __               __        _          _                    _______     _______    `));
    console.log(green(`|_   _||_   _|     [  |             [  |  _   (_)        / |_                 |_   __ \   |_   __ \  `)); 
    console.log(green(`  | |    | | ____   | |.--.   .---.  | | / ]  __   .--.  | |-',--.   _ .--.     | |__) |    | |__) | `));
    console.log(green(`  | '    ' |[_   ]  | '/' \ \/ /__\\ | '' <  [  | ( ( \] | |  '_\ : [  .-. |    |  __ /     |  ___/  `));
    console.log(green(`   \ \__/ /  .' /_  |  \__/ || \__., | | \ \  | |   '.'. | |,// | |, | | | |   _| |  \ \_  _| |_     `));
    console.log(green(`    .__.'   [_____][__;.__.'  '.__.'[__|  \_][___][\__) )\__/\'-;__/[___||__] |____| |___||_____|    `));
    console.log(green(`                                                                                                     `));
    console.log(yellow(` 	_____________________________________________________________________________________________`));
    //@ts-ignore
    console.log(blue(`Server Events: ${Object.values(mp.events.binded).length}`));
    console.log(blue(`Cef Events: ${RAGERP.cef.poolSize}`));
    console.log(blue(`Total Commands: ${RAGERP.commands._commands.size}`));
    mp.events.delayInitialization = false;
}
(async () => {
    await initGamemode().then(() => console.log("Uzbekistan RP"));
})();
