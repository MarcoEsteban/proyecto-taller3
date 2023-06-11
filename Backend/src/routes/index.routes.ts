import { Router } from 'express';
import { readdirSync } from 'fs';

const router = Router();

// Get Ruta Absoluta:
const ROUTE_PATH = `${__dirname}`;

/******* FUNCTION FOR GET NAME OF THE FILE ['rol.routes.ts'] => ['rol'] *******/
const removeFileExtension = (fileName: string) => {
    const file = fileName.split('.').shift();
    return file;
}

/*********************** FUNCTION FOR CREATE ROUTER DINAMYC *******************/
readdirSync(ROUTE_PATH).filter(filename => {
    const cleanName = removeFileExtension(filename);
    const fileName = `${cleanName}.routes`;
    console.log(fileName)
    if (fileName !== 'index.routes') {
        import(`./${fileName}`).then((moduleRoutes) => {
            console.log(`Loadign ruta... ${fileName}`);
            router.use(`/${cleanName}`, moduleRoutes.router);
        })
    }
})

export { router }