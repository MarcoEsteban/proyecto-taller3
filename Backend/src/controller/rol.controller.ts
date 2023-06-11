import { Request, Response } from "express";
import { QueryResult } from "pg";
/* DATABASE */
import { pool } from "../config/database";
import { errorHanddle } from "../utils/error.handdle";

/* -------------------------------------------------------------------------- */
/*                        FUNCTION GET ALL ROL                                */
/* -------------------------------------------------------------------------- */
const getAllRol = async (_req: Request, res: Response): Promise<any> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM ROL ORDER BY id_rol ASC');

        console.log(response.rowCount)
        if (response.rows.length > 0) {
            return res.status(200).json(response.rows);
        }
        return res.send({ message: 'No se encontro ningul Rol en la DB.' });
    } catch (e) {
        errorHanddle(res, `ERROR_GET_ALL, ${e}`)
    }
}
/* -------------------------------------------------------------------------- */
/*                        FUNCTION GET ONE ROL                                */
/* -------------------------------------------------------------------------- */
const getOneRol = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const response: QueryResult = await pool.query('SELECT * FROM ROL WHERE id_rol = $1', [id]);

        if (response.rows.length > 0) {
            return res.status(200).json(response.rows);
        }
        return res.send({ message: 'No se encontro ningul Rol en la DB.' });
    } catch (e) {
        errorHanddle(res, `ERROR_GET_ONE, ${e}`)
    }
}
/* -------------------------------------------------------------------------- */
/*                        FUNCTION CREATE ROL                                 */
/* -------------------------------------------------------------------------- */
const createRol = async (req: Request, res: Response): Promise<any> => {
    try {
        const { nombre } = req.body;
        console.log(nombre)
        await pool.query('INSERT INTO ROL(nombre) VALUES($1)', [nombre]);
        return res.status(200).json({
            mesage: 'create successfull',
            body: {
                rol: {
                    nombre
                }
            }
        });
    } catch (e) {
        errorHanddle(res, `ERROR_CREATE, ${e}`)
    }
}
/* -------------------------------------------------------------------------- */
/*                        FUNCTION UPDATE ROL                                 */
/* -------------------------------------------------------------------------- */
const updateRol = async (req: Request, res: Response): Promise<any> => {
    try {
        const { nombre } = req.body;
        const id = Number(req.params.id);
        /* RETURNING * ==> Devuelve toda la fila actualizada. */
        const response: QueryResult = await pool.query("UPDATE ROL SET nombre = $1 WHERE id_rol = $2 RETURNING *", [nombre, id]);
        return res.status(200).json(response.rows[0]);
    } catch (e) {
        errorHanddle(res, `ERROR_UPDATE, ${e}`)
    }
}
/* -------------------------------------------------------------------------- */
/*                        FUNCTION DELETE ROL                                */
/* -------------------------------------------------------------------------- */
const deleteRol = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = Number(req.params.id);
        const response: QueryResult = await pool.query("DELETE FROM ROL WHERE id_rol = $1", [id]);
        if (response.rowCount === 0) {
            return res.status(404).json({ message: 'Rol not found' })
        }
        return res.send(`${id} Delete successfull.`);
    } catch (e) {
        errorHanddle(res, `ERROR_DELETE, ${e}`)
    }
}
export { getAllRol, getOneRol, createRol, updateRol, deleteRol }
