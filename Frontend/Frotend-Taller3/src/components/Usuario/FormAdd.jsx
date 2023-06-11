/* -------------------------------------------------------------------------- */
/*                                  HOOKS                                     */
/* -------------------------------------------------------------------------- */
import React, { useContext, useId, useState } from 'react'
// import { rolContext } from '../../pages/admin/Roles';
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
import { USER } from '../../data/Data';

const FormAdd = ({ link }) => {
    /* ----------- */
    /* USE-CONTEXT */
    /* ----------- */
    // const { handleSaveData } = useContext(rolContext);

    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            // const data2 = createItem(data);
            USER.push({ id_personas: 2, ...data });
            // console.log(data)
            navigate(link);
            reset();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="text-secundary-300 shadow-md bg-secundary-200 p-4 rounded-lg w-1/3 m-auto">
            <h1 className='text-2xl font-semibold text-gray-900 dark:text-secundary-300 flex justify-center'>Agregar Usuario</h1>
            <hr className='my-2 mb-4 border-b border-gray-400 inset-4' />

            <form onSubmit={handleSubmit(onSubmit)}>
                {/*--------------------- INPUT NOMBRE -----------------------*/}
                <div className='mb-2'>
                    <label htmlFor="nombre" className="block mb-2 text-sm font-bold text-gray-900 dark:text-secundary-300">Nombre</label>
                    <input type="text" id='nombre' className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 0 dark:placeholder-gray-400 dark:text-secundary-300 dark:focus:border-secundary-300 transition-all" placeholder="Ingrese su nombre" {...register('nombre')} />
                </div>
                {/*--------------------- INPUT APELLIDO.P -------------------*/}
                <div className='mb-2'>
                    <label htmlFor="apellidoP" className="block mb-2 text-sm font-bold text-gray-900 dark:text-secundary-300">Apellido Paternos</label>
                    <input type="text" id='apellidoP' className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 0 dark:placeholder-gray-400 dark:text-secundary-300 dark:focus:border-secundary-300 transition-all" placeholder="Ingrese su apellido Paterno" {...register('apellidoP')} />
                </div>
                {/*--------------------- INPUT APELLIDO.M -------------------*/}
                <div className='mb-2'>
                    <label htmlFor="apellidoM" className="block mb-2 text-sm font-bold text-gray-900 dark:text-secundary-300">Apellido Materno</label>
                    <input type="text" id='apellidoM' className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 0 dark:placeholder-gray-400 dark:text-secundary-300 dark:focus:border-secundary-300 transition-all" placeholder="Ingrese su apellido Materno" {...register('apellidoM')} />
                </div>
                {/*--------------------- INPUT SEXO -------------------------*/}
                <div className="flex gap-2 items-center my-2">
                    <label htmlFor="" className="text-sm font-bold text-gray-900 dark:text-secundary-300">Sexo: </label>
                    <div className="flex items-center mr-6">
                        <input id="sexoM" type="radio" value="Masculino" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" {...register('sexo')} />
                        <label htmlFor="sexoM" className="ml-2 text-sm font-medium text-gray-500 ">Masculino</label>
                    </div>
                    <div className="flex items-center">
                        <input id="sexoF" type="radio" value="Femenino" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" {...register('sexo')} />
                        <label htmlFor="sexoF" className="ml-2 text-sm font-medium text-gray-500 ">Femenino</label>
                    </div>
                </div>
                {/*--------------------- INPUT CELULAR ----------------------*/}
                <div className='mb-2'>
                    <label htmlFor="celular" className="block mb-2 text-sm font-bold text-gray-900 dark:text-secundary-300">Celular</label>
                    <input type="number" id='celular' className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 0 dark:placeholder-gray-400 dark:text-secundary-300 dark:focus:border-secundary-300 transition-all" placeholder="Ingrese su apellido Materno" {...register('celular')} />
                </div>
                {/*----------------- TEXTAREA DIRECCION ---------------------*/}
                <div className='mb-2'>
                    <label htmlFor="celular" className="block mb-2 text-sm font-bold text-gray-900 dark:text-secundary-300">Dirección</label>
                    <textarea id="message" rows="2" className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 0 dark:placeholder-gray-400 dark:text-secundary-300 dark:focus:border-secundary-300 transition-all" placeholder="Ingrese su direccion..."></textarea>
                </div>

                {/*----------------------- INPUT EMAIL ----------------------*/}
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-secundary-300">Email</label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <MdEmail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </div>
                        <input type="email" id='email' className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full pl-10 p-2.5 0 dark:placeholder-gray-400 dark:text-secundary-300 dark:focus:border-secundary-300 transition-all" placeholder="Ingrese su Email ejemplo@gmail.com" {...register('email')} />
                    </div>
                </div>

                {/*------------------------- BUTTON ------------------------*/}
                <div className='flex gap-2 mt-4'>
                    <button type="button" className="py-2 bg-secundary-500 hover:bg-secundary-500/90 rounded-lg px-3 w-2/5 m-auto block text-secundary-100" onClick={() => navigate('/usuario')}>
                        Cancelar
                    </button>

                    <button type="submit" className="py-2 bg-secundary-500 hover:bg-secundary-500/90 rounded-lg px-3 w-2/5 m-auto block text-secundary-100">
                        Guardar
                    </button>
                </div>
            </form >

        </div >
    )
}

export default FormAdd