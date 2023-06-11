/* -------------------------------------------------------------------------- */
/*                                  HOOKS                                     */
/* -------------------------------------------------------------------------- */
import React, { createContext } from 'react'
/* -------------------------------------------------------------------------- */
/*                                 ROUTER                                     */
/* -------------------------------------------------------------------------- */
import { Outlet } from 'react-router-dom'

/***************************** APIS *******************************************/
import { createRolRequest, deleteRolRequest, getRolRequest } from "../../api/rol.api";
/* --------------- */
/* Create Context: */
/* --------------- */
export const rolContext = createContext();

/* ---------------------- */
/* LISTAR TODOS LOS ROLES */
/* ---------------------- */
const handleListData = async () => {
  const res = await getRolRequest()
  return res;
};
/*-------------- */
/* GUARDA UN ROL */
/*-------------- */
const handleSaveData = (data) => {
  createRolRequest(data)
}
const handleDeleteData = async (id) => {
  const res = await deleteRolRequest(id)
  return res;
};


const Roles = () => {
  return (
    <rolContext.Provider
      value={{ handleListData, handleSaveData, handleDeleteData }}>

      <div className="bg-secundary-100 h-[93vh] w-full p-4">
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-bold text-secundary-300 text-4xl'>
            GESTIONAR ROLES
          </h1>

          <div className='w-full m-auto'>
            <Outlet />
          </div>
        </div>
      </div>

    </rolContext.Provider>
  )
}

export default Roles