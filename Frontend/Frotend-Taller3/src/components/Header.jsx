/* LINK RUTAS */
import { Link } from "react-router-dom";
/* DRPDOWN - REACT-MENU */
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
/* IMAGE */
import reactLogo from '../assets/react.svg'
/* ICONS */
import { FaBars } from 'react-icons/fa';
import { BiCaretDown } from 'react-icons/bi'
import { RiSettings3Line, RiLogoutCircleRLine } from "react-icons/ri";

const Header = ({ setShow }) => {
    return (
        <div className='bg-secundary-200 h-[7vh] shadow-sm ring-1 ring-inset ring-gray-300'>
            <div className='flex justify-between items-center p-4'>
                {/********************** ICON MENU ***************************/}
                <FaBars size={26} className='text-secundary-300 cursor-pointer' onClick={setShow} />

                {/************************ DRODOWN ***************************/}
                <Menu
                    menuButton={<MenuButton className='flex items-center mr-4 gap-2  text-secundary-300  hover:text-gray-400 transition-colors'>
                        <img src={reactLogo} className="object-cover " alt="React logo" />
                        <span className='font-bold text-lg '>Marco Campos</span>
                        <BiCaretDown size={18} />
                    </MenuButton>}
                    align="end"
                    arrow
                    arrowClassName="bg-secundary-500"
                    menuClassName="bg-secundary-500 p-4 text-secundary-300"
                    transition
                >
                    <MenuItem className="p-0 hover:bg-transparent">
                        <Link to="/perfil" className="flex items-center gap-x-4 flex-1 rounded-lg transition-colors text-secundary-200 hover:bg-gray-800 p-2">
                            <img
                                src="https://img.freepik.com/fotos-premium/hombre-guapo-joven-barba-sobre-aislado-manteniendo-brazos-cruzados-posicion-frontal_1368-132662.jpg?w=1380" className="w-12 h-12 object-cover rounded-full" />
                            <div className="text-sm">
                                <span className="text-sm">Marco Campos Subelza</span>
                            </div>
                        </Link>
                    </MenuItem>
                    <hr className="my-4 border-gray-500" />
                    <MenuItem className="p-0 hover:bg-transparent">
                        <Link to="/" className="flex items-center gap-x-4 flex-1 rounded-lg transition-colors text-gray-300 hover:bg-secundary-900 py-2 px-6">
                            <RiSettings3Line />
                            Configuración
                        </Link>
                    </MenuItem>
                    <MenuItem className="p-0 hover:bg-transparent">
                        <Link to="/login" className="flex items-center gap-x-4 flex-1 rounded-lg transition-colors text-gray-300 hover:bg-secundary-900 py-2 px-6">
                            <RiLogoutCircleRLine />
                            Cerrar sesión
                        </Link>
                    </MenuItem>

                </Menu>
            </div>
        </div>
    )
}

export default Header