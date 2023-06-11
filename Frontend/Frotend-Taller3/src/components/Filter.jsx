/* -------------------------------------------------------------------------- */
/*                                  ICONS                                     */
/* -------------------------------------------------------------------------- */
import { MdSearch } from "react-icons/md";

const Filter = ({ onChange }) => {
    return (
        <div className="w-2/6">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MdSearch className="text-gray-500 dark:text-gray-400" size={24} />
                </div>
                <input type="text" className="bg-secundary-500 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full pl-10 py-2 px-3 dark:placeholder-gray-400 dark:text-secundary-300 dark:focus:border-secundary-300 transition-all" placeholder="Buscar rol..." onChange={onChange} />
            </div>
        </div>
    )
}

export default Filter