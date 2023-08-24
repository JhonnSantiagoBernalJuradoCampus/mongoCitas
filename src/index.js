import app from "./app.js";
import { config } from "./utils/config.js";

const main = () =>{
    app.listen(config, ()=>{
        console.log(`http://${config.hostname}:${config.port}`);
    });
}

//Funcion que inicia el servidor
main();