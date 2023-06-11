import React, { useState } from 'react'
/* LINK RUTAS */
import { Link } from "react-router-dom";
/* IMAGE */
import logo from '../assets/logo2.png'
/* ICONS */
import {
    BsPersonCircle,
    BsBox2Fill,
    BsCursorFill,
    BsFillBookmarksFill
} from "react-icons/bs";
import { AiFillSetting, AiOutlineUsergroupDelete } from "react-icons/ai";
import { RiSettings3Line, RiLogoutCircleRLine } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { ImUserPlus, ImUsers, ImUserTie, ImTruck, ImLab } from "react-icons/im";
import { MdInventory } from "react-icons/md";
import { FaShoppingCart, FaTablets, FaUserSecret, FaUserTie } from "react-icons/fa";

const Navbar = ({ show }) => {

    const [clickLink, setClickLink] = useState(null);

    const MENU = [
        // { id: 1, name: 'Perfil', link: '/perfil', icon: BsPersonCircle },
        { id: 2, name: 'Roles', link: '/roles', icon: HiUserGroup },
        { id: 3, name: 'Farmaceuticos', link: '/usuario', icon: ImUsers },
        { id: 4, name: 'Proveedor', link: '/proveedor', icon: ImTruck },
        { id: 5, name: 'Cliente', link: '/cliente', icon: FaUserTie },
        { id: 6, name: 'Medicamentos', link: '/medicamentos', icon: MdInventory },
        { id: 7, name: 'Venta', link: '/ventas', icon: FaShoppingCart },
        { id: 8, name: 'Datos Empresa', link: '/farmacia', icon: RiSettings3Line },
    ]

    const SUB_MENU = [
        { id: 1, name: 'Laboratorio', link: '/laboratorio', icon: ImLab },
        { id: 2, name: 'Forma Farmacéutica', link: '/forma-farma', icon: FaTablets },
        { id: 3, name: 'Concentracion', link: '/concentracion', icon: BsFillBookmarksFill },
        { id: 4, name: 'Vía Administración', link: '/via-admin', icon: BsBox2Fill },
        { id: 5, name: 'Ubicación', link: '/ubicacion', icon: BsCursorFill },
    ]

    const handleClick = (linkId) => {
        setClickLink(linkId)
    }

    return (
        <div className={`bg-secundary-500 text-secundary-100 ${show ? 'w-14 duration-500' : 'w-72 duration-500'} transition-all`
        }>
            {/******************************* HEADER *************************/}
            <header className="flex gap-2 items-center p-2">
                <img src={logo} className="h-12 w-12  flex-none rounded-full" alt="React logo" />
                <h3 className="text-2xl flex gap-2 font-medium">
                    F.
                    <span className='uppercase font-bold text-primary'>Bótica</span>
                </h3>
            </header>
            {/******************************** NAV ***************************/}
            <nav>
                <ul className="mt-4 flex flex-col gap-4 ">
                    {
                        MENU.map(({ id, name, link, icon }) => (
                            <li key={id}>
                                <Link to={link} className={`flex flex-col text-lg gap-4 font-medium relative py-2 px-4 hover:bg-[#374A5E] ${id === clickLink ? 'border-r-[6px] border-primary' : ''}  transition-all`} onClick={() => handleClick(id)}>
                                    {/**
                                    * React.createElement(elemento, {propiedad})
                                    * icon ==> Indico que cree un elemnto de Iconos.
                                    * {size: "20"} ==> Indico que tenga una propiedad
                                    *                  es decir un tamano de 20
                                    */}
                                    <div className='flex flex-row gap-4'>
                                        <div className={` ${id === clickLink ? 'text-primary ' : ''} transition-colors`}>
                                            {React.createElement(icon, { size: "24" })}
                                        </div>
                                        <h2 className={`whitespace-pre duration-500 ${show && 'overflow-hidden opacity-0 translate-x-28'}`}>
                                            {name}
                                        </h2>
                                    </div>

                                    {
                                        id === clickLink && id === 6
                                            ?
                                            SUB_MENU.map(({ id, name, link, icon }) => (
                                                <Link key={id} to={link}
                                                    className={`py-2 px-4 text-secundary-200 border-l border-gray-500 ml-3 block relative before:w-2 before:h-2 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secundary-100 transition-colors`}
                                                >
                                                    <div className='flex flex-row gap-4'>
                                                        <div className={` ${id === clickLink ? 'text-primary ' : ''} transition-colors`}>
                                                            {React.createElement(icon, { size: "20" })}
                                                        </div>
                                                        <h2 className={`whitespace-pre duration-500 ${show && 'overflow-hidden opacity-0 translate-x-28'}`}>
                                                            {name}
                                                        </h2>
                                                    </div>
                                                </Link>
                                            ))
                                            : ''
                                    }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div >
    )
}

export default Navbar