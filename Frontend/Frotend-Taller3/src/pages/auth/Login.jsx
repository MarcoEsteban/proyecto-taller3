import React, { useState } from 'react'
// LINK PARA LA RUTA:
import { Link, useNavigate } from "react-router-dom";
// ICONS:
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useForm } from 'react-hook-form';

const Login = ({ onClick }) => {
    const [showPassword, setShowPassword] = useState(false);

    /* PARA EL FORMULARIO */
    const { register, handleSubmit } = useForm();

    const navigation = useNavigate();


    const onSubmit = (data) => {
        console.log(data)
        onClick();
        navigation('/')
    }

    return (
        <div className='h-screen bg-secundary-200 flex justify-center items-center'>
            <div className="bg-secundary-500 p-8 rounded-xl m-2 w-auto lg:w-[470px]">
                <h1 className="text-4xl text-center uppercase font-bold tracking-[5px] text-secundary-200 m-8">
                    Iniciar
                    <span className="text-primary">Sesión</span>
                </h1>
                <form className="bg-secundary-500 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    {/************************ Input User *******************/}
                    <div className="relative mb-4">
                        {/*Icon Email*/}
                        <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
                        <input type="email" className="py-3 pl-8 px-4 bg-secundary-100 w-full outline-none rounded-xl text-secundary-500" placeholder="Ingrese su Usuario" {...register('email')} />
                    </div>

                    {/*********************** Input Password *****************/}
                    <div className="relative mb-8">
                        {/*Icon Password*/}
                        <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
                        {/* CONDICION PARA QUE SE MUESTRE EL ICON DE ACUERDO A SU ESTADO */}
                        <input
                            type={showPassword ? "text" : "password"}
                            className="py-3  px-8 bg-secundary-100 w-full outline-none rounded-xl text-secundary-500"
                            placeholder="Ingrese su Password" {...register('password')} />
                        {
                            showPassword ? (< RiEyeOffLine onClick=
                                {() => setShowPassword(!showPassword)
                                }
                                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary" {...register('password')} />) : (
                                <RiEyeLine onClick={
                                    () => setShowPassword(!showPassword)
                                }
                                    className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary" />
                            )
                        } </div>

                    {/****************** Button Submit ***********************/}
                    <div>
                        {/* <Link to="/home"> */}
                        <button type="submit" className="bg-primary text-black font-bold text-sm uppercase w-full px-4 py-3 rounded-xl transition-colors">
                            Ingresar
                        </button>
                        {/* </Link> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login