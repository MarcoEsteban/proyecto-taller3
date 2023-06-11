import { Request, Response } from "express";
import { QueryResult } from "pg";
/* DATABASE */
import { pool } from "../config/database";
import { errorHanddle } from "../utils/error.handdle";

/* -------------------------------------------------------------------------- */
/*                      FUNCTION GET ALL USUARIOS                             */
/* -------------------------------------------------------------------------- */
const getAllUsuario = async (_req: Request, res: Response): Promise<any> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM USUARIOS ORDER BY id_USUARIOS ASC');

        console.log(response.rowCount)
        if (response.rows.length > 0) {
            return res.status(200).json(response.rows);
        }
        return res.send({ message: 'No se encontro ningul USUARIOS en la DB.' });
    } catch (e) {
        errorHanddle(res, `ERROR_GET_ALL, ${e}`)
    }
}
/* -------------------------------------------------------------------------- */
/*                     FUNCTION GET ONE USUARIOS                              */
/* -------------------------------------------------------------------------- */
const getOneUsuario = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const response: QueryResult = await pool.query('SELECT * FROM USUARIOS WHERE id_USUARIOS = $1', [id]);

        if (response.rows.length > 0) {
            return res.status(200).json(response.rows);
        }
        return res.send({ message: 'No se encontro ningul USUARIOS en la DB.' });
    } catch (e) {
        errorHanddle(res, `ERROR_GET_ONE, ${e}`)
    }
}
/* -------------------------------------------------------------------------- */
/*                     FUNCTION CREATE USUARIOS                               */
/* -------------------------------------------------------------------------- */
const createUsuario = async (req: Request, res: Response): Promise<any> => {
    try {
        const { nombre } = req.body;
        console.log(nombre)
        await pool.query('INSERT INTO USUARIOS(nombre) VALUES($1)', [nombre]);
        return res.status(200).json({
            mesage: 'create successfull',
            body: {
                USUARIOS: {
                    nombre
                }
            }
        });
    } catch (e) {
        errorHanddle(res, `ERROR_CREATE, ${e}`)
    }
}
/* -------------------------------------------------------------------------- */
/*                     FUNCTION UPDATE USUARIOS                               */
/* -------------------------------------------------------------------------- */
const updateUsuario = async (req: Request, res: Response): Promise<any> => {
    try {
        const { nombre } = req.body;
        const id = Number(req.params.id);
        /* RETURNING * ==> Devuelve toda la fila actualizada. */
        const response: QueryResult = await pool.query("UPDATE USUARIOS SET nombre = $1 WHERE id_USUARIOS = $2 RETURNING *", [nombre, id]);
        return res.status(200).json(response.rows[0]);
    } catch (e) {
        errorHanddle(res, `ERROR_UPDATE, ${e}`)
    }
}
/* -------------------------------------------------------------------------- */
/*                      FUNCTION DELETE USUARIOS                              */
/* -------------------------------------------------------------------------- */
const deleteUsuario = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = Number(req.params.id);
        const response: QueryResult = await pool.query("DELETE FROM USUARIOS WHERE id_USUARIOS = $1", [id]);
        if (response.rowCount === 0) {
            return res.status(404).json({ message: 'USUARIOS not found' })
        }
        return res.send(`${id} Delete successfull.`);
    } catch (e) {
        errorHanddle(res, `ERROR_DELETE, ${e}`)
    }
}
export { getAllUsuario, getOneUsuario, createUsuario, updateUsuario, deleteUsuario }
