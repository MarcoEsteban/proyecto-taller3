import React from 'react'
import { Outlet } from 'react-router-dom'

const Usuario = () => {
    return (
        <div className="bg-secundary-100 h-[93vh] w-full p-4">
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold text-secundary-300 text-4xl mb-8'>
                    GESTIONAR FARMACÉUTICO
                </h1>

                <div className='w-full m-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Usuario