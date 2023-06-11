/* -------------------------------------------------------------------------- */
/*                                  HOOKS                                     */
/* -------------------------------------------------------------------------- */
import React, { useContext } from 'react'
import { rolContext } from '../../pages/admin/Roles';
/* -------------------------------------------------------------------------- */
/*                                HOOK FORM                                   */
/* -------------------------------------------------------------------------- */
import { useForm } from 'react-hook-form'
/* -------------------------------------------------------------------------- */
/*                                  ICONS                                     */
/* -------------------------------------------------------------------------- */
import { MdEmail } from "react-icons/md";
/* -------------------------------------------------------------------------- */
/*                                  ROUTER                                    */
/* -------------------------------------------------------------------------- */
import { Link, useNavigate } from 'react-router-dom';

const FormEditRol = ({ link }) => {
    /* ----------- */
    /* USE-CONTEXT */
    /* ----------- */
    const { handleSaveData } = useContext(rolContext);

    const navige = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            await handleSaveData(data);
            console.log(data);
            navige(link);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="text-secundary-300 shadow-md bg-secundary-200 p-4 rounded-lg w-1/3 m-auto">
            <h1 className='text-2xl font-semibold text-gray-900 dark:text-secundary-300 flex justify-center'>Agregar Usuario</h1>
            <hr className='my-2 mb-4 border-b border-gray-400 inset-4' />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-secundary-300">Nombre</label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <MdEmail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </div>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full pl-10 p-2.5 0 dark:placeholder-gray-400 dark:text-secundary-300 dark:focus:border-secundary-300 transition-all" placeholder="Ingrese su nombre" {...register('nombre')} />
                    </div>
                </div>

                <div className='flex gap-2'>
                    <Link to={link} className="py-2 bg-secundary-500 text-center hover:bg-secundary-500/90 rounded-lg px-3 w-2/5 m-auto block text-secundary-100" >
                        Cancelar
                    </Link>

                    <button type="submit" className="py-2 bg-secundary-500 hover:bg-secundary-500/90 rounded-lg px-3 w-2/5 m-auto block text-secundary-100">
                        Guardar
                    </button>
                </div>
            </form>

        </div>
    )
}

export default FormEditRol;