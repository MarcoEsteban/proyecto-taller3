import { Router } from "express";
import {
    getAllRol,
    getOneRol,
    createRol,
    updateRol,
    deleteRol
} from "../controller/rol.controller";

const router = Router();

router.get('/', getAllRol);
router.get('/:id', getOneRol);
router.post('/', createRol);
router.put('/:id', updateRol);
router.delete('/:id', deleteRol);

export { router }