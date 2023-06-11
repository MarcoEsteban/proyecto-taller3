/* ICONS */
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ children, open, onClose }) => {
    return (
        <div className={`min-h-full w-full text-black fixed left-0 top-0 flex justify-center items-center bg-black/50 ${!open && 'hidden'}`}>
            <div className="bg-gray-200 rounded shadow-lg w-1/4">
                {/* MODAL HEADER */}
                <div className="border px-4 py-2 flex items-center justify-between">
                    <h2>Modal Title</h2>
                    < RiCloseLine size={32} className='text-gray-400 hover:text-black' onClick={onClose} />
                </div>
                {/* MODAL BODY */}
                <div className="">
                    {children}
                </div>
                {/* MODAL BODY */}
                <div className="flex justify-end items-center w-100 border-t p-3 gap-3">
                    <button className='bg-red-600 hover:bg-red-700 rounded-lg text-white px-3 py-1 outline-none' onClick={onClose}>
                        Cancelar
                    </button>
                    <button className='bg-blue-600 hover:bg-blue-700 rounded-lg text-white px-3 py-1 outline-none'>
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal