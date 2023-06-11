/* -------------------------------------------------------------------------- */
/*                                  ICONS                                     */
/* -------------------------------------------------------------------------- */
import {
    BsChevronLeft, BsChevronRight, BsChevronBarLeft, BsChevronBarRight
} from 'react-icons/bs';

const Pagination = ({ table, valorData }) => {
    return (
        <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                {/******************** PREVIOUS START ********************/}
                <button className='bg-secundary-500 text-secundary-200 p-2 font-bold rounded-sm disabled:text-secundary-300' onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
                    <BsChevronBarLeft size={20} />
                </button>
                {/*********************** PREVIOUS ***********************/}
                <button className='bg-secundary-500 text-secundary-200 p-2 font-bold rounded-sm disabled:text-secundary-300' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                    <BsChevronLeft size={20} />
                </button>
                {/***************** NUMERO OF PAGINATION *****************/}
                {
                    table.getPageOptions().map((value, key) => (
                        <button key={key} className={`bg-secundary-500 text-secundary-200 py-1 px-2 rounded-sm font-bold disabled:hover:bg-gray-900 text-lg ${value === table.getState().pagination.pageIndex && ' bg-secundary-200 text-secundary-300'}`} onClick={() => table.setPageIndex(value)}>
                            {value + 1}
                        </button>
                    ))
                }
                {/************************** NEXT ************************/}
                <button className='bg-secundary-500 text-secundary-200 p-2 font-bold rounded-sm disabled:text-secundary-300' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    <BsChevronRight size={20} />
                </button>
                {/************************ NEXT END **********************/}
                <button className='bg-secundary-500 text-secundary-200 p-2 font-bold rounded-sm disabled:text-secundary-300' onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
                    <BsChevronBarRight size={20} />
                </button>
            </div>

            <div className='text-secundary-300 font-bold flex gap-2'>
                Mostrando del
                <span className='block'>
                    {Number(table.getRowModel().rows[0]?.id) + 1}
                </span>
                al
                <span className='block'>
                    {Number(table.getRowModel().rows[table.getRowModel().rows.length - 1]?.id) + 1}
                </span>
                del total de
                <span className='block'>
                    {valorData.length}
                </span>
                registros
            </div>

            {/* NUM PAGINA */}
            <div className='flex items-center gap-1'>
                <label htmlFor="page" className="block w-auto mb-2 text-sm font-medium text-gray-900 dark:text-secundary-300">
                    Row Page
                </label>
                <select defaultValue='10' id="page" className="bg-secundary-100 w-auto border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-secundary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" onChange={e => { table.setPageSize(Number(e.target.value)) }}>
                    <option value="5">5 pág.</option>
                    <option value="10">10 pág.</option>
                    <option value="15">15 pág.</option>
                    <option value="20">20 pág.</option>
                    <option value="25">25 pág.</option>
                    <option value="50">50 pág.</option>
                </select>
            </div>
        </div>
    )
}

export default Pagination