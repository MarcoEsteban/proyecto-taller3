import { Request, Response } from "express";
import { QueryResult } from "pg";
/* DATABASE */
import { pool } from "../config/database";
import { errorHanddle } from "../utils/error.handdle";

/* -------------------------------------------------------------------------- */
/*                      FUNCTION GET ALL PERSONAS                             */
/* -------------------------------------------------------------------------- */
const getAllPersona = async (_req: Request, res: Response): Promise<any> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM PERSONAS ORDER BY id_USUARIOS ASC');

        console.log(response.rowCount)
        if (response.rows.length > 0) {
            return res.status(200).json(response.rows);
        }
        return res.send({ message: 'No se encontro ningul PERSONAS en la DB.' });
    } catch (e) {
        errorHanddle(res, `ERROR_GET_ALL, ${e}`)
    }
}
/* -------------------------------------------------------------------------- */
/*                     FUNCTION GET ONE PERSONAS                              */
/* -------------------------------------------------------------------------- */
const getOnePersona = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const response: QueryResult = await pool.query('SELECT * FROM PERSONAS WHERE id_USUARIOS = $1', [id]);

        if (response.rows.length > 0) {
            return res.status(200).json(response.rows);
        }
        return res.send({ message: 'No se encontro ningul PERSONAS en la DB.' });
    } catch (e) {
        errorHanddle(res, `ERROR_GET_ONE, ${e}`)
    }
}
/* -------------------------------------------------------------------------- */
/*                     FUNCTION CREATE PERSONAS                               */
/* -------------------------------------------------------------------------- */
const createPersona = async (req: Request, res: Response): Promise<any> => {
    try {
        const { nombre } = req.body;
        console.log(nombre)
        await pool.query('INSERT INTO PERSONAS(nombre) VALUES($1)', [nombre]);
        return res.status(200).json({
            mesage: 'create successfull',
            body: {
                PERSONAS: {
                    nombre
                }
            }
        });
    } catch (e) {
        errorHanddle(res, `ERROR_CREATE, ${e}`)
    }
}
/* -------------------------------------------------------------------------- */
/*                     FUNCTION UPDATE PERSONAS                               */
/* -------------------------------------------------------------------------- */
const updatePersona = async (req: Request, res: Response): Promise<any> => {
    try {
        const { nombre } = req.body;
        const id = Number(req.params.id);
        /* RETURNING * ==> Devuelve toda la fila actualizada. */
        const response: QueryResult = await pool.query("UPDATE PERSONAS SET nombre = $1 WHERE id_USUARIOS = $2 RETURNING *", [nombre, id]);
        return res.status(200).json(response.rows[0]);
    } catch (e) {
        errorHanddle(res, `ERROR_UPDATE, ${e}`)
    }
}
/* -------------------------------------------------------------------------- */
/*                      FUNCTION DELETE PERSONAS                              */
/* -------------------------------------------------------------------------- */
const deletePersona = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = Number(req.params.id);
        const response: QueryResult = await pool.query("DELETE FROM PERSONAS WHERE id_USUARIOS = $1", [id]);
        if (response.rowCount === 0) {
            return res.status(404).json({ message: 'PERSONAS not found' })
        }
        return res.send(`${id} Delete successfull.`);
    } catch (e) {
        errorHanddle(res, `ERROR_DELETE, ${e}`)
    }
}
export { getAllPersona, getOnePersona, createPersona, updatePersona, deletePersona }
