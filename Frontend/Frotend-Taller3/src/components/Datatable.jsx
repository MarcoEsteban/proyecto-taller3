/* -------------------------------------------------------------------------- */
/*                                  HOOKS                                     */
/* -------------------------------------------------------------------------- */
import { useContext, useEffect, useState } from 'react'
import { rolContext } from '../pages/admin/Roles';
/* -------------------------------------------------------------------------- */
/*                                ROUTER LINK                                 */
/* -------------------------------------------------------------------------- */
import { Link } from 'react-router-dom'
/* -------------------------------------------------------------------------- */
/*                                  ICONS                                     */
/* -------------------------------------------------------------------------- */
import {
    BsChevronLeft, BsChevronRight, BsChevronBarLeft, BsChevronBarRight
} from 'react-icons/bs';
/* -------------------------------------------------------------------------- */
/*                                  DATATABLE                                 */
/* -------------------------------------------------------------------------- */
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
    getFilteredRowModel
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
/* -------------------------------------------------------------------------- */
/*                                 USER DATA                                  */
/* -------------------------------------------------------------------------- */
import { ROL } from "../data/Data";
/* -------------------------------------------------------------------------- */
/*                                 BUTTON                                     */
/* -------------------------------------------------------------------------- */
import Buton from './Buton';


/* -------------------------- */
/* METODO PARA BUSCAR UN ITEM */
/* -------------------------- */
const fuzzyFilter = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);

    addMeta({ itemRank });
    return itemRank.passed;
}

const Datatable = ({ link }) => {
    /****************************** useCONTEXT ********************************/
    const { handleListData, handleDeleteData } = useContext(rolContext);

    /*************************** 1.- CONFIG HOOKS *****************************/
    const [user, setUser] = useState(ROL);
    const [id, setId] = useState(0);
    const [globalFilter, setGlobalFilter] = useState('');

    useEffect(() => {
        const loadRol = async () => {
            const res = await handleListData()
            setUser(res.data)
        }
        loadRol();
    }, [id])
    console.log(id)

    const deleteRol = async (id) => {
        try {
            await handleDeleteData(id);
            console.log(id)
            setId(id)
        } catch (error) {
            console.error(error)
        }
    }

    /*************** 3.- CONFIG THE TABLE FOR DATATABLE ***********************/
    const columns = [
        {
            accessorKey: 'id_rol',
            header: () => <span>ID</span>
        },
        {
            accessorKey: 'nombre',
            header: () => <span>NOMBRE</span>
        },
        {
            accessorKey: 'Editar',
            header: () => <span>Editar</span>,
            cell: ({ row }) => <button onClick={() => console.log(row.original)} className='py-1 bg-secundary-500 hover:bg-secundary-500/90 rounded-lg px-3 w-auto m-auto block text-secundary-100'>Editar</button>
        },
        {
            accessorKey: 'Eliminar',
            header: () => <span>Eliminar</span>,
            cell: ({ row }) => <button onClick={() => deleteRol(row.original.id_rol)} className='py-1 bg-secundary-500 hover:bg-secundary-500/90 rounded-lg px-3 w-auto m-auto block text-secundary-100'>Eliminar</button>

        },
    ];

    /***************** 3.- CONFIG THE TABLE FOR DATATABLE *********************/
    const table = useReactTable({
        data: user,
        columns: columns,
        state: {
            globalFilter
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        globalFilterFn: fuzzyFilter,
    })

    // const tableColumn = table.column.length;
    // console.log(tableColumn)

    // Obtener los datos de la columna específica
    // const columnData = table.rows.map(row => row.values['col1']);
    // console.log('Datos de la columna:', columnData);

    return (
        <div className='px-6 py-4'>
            {/************************ BUTTON ADD Y SEARCH *******************/}
            <div className='flex justify-between mb-2'>
                {/* <Filter onChange={e => setGlobalFilter(e.target.value)} /> */}
                <input
                    type="text"
                    className="block w-2/6 py-2 px-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-secundary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-secundary-200 outline-none dark:focus:border-secundary-200"
                    placeholder="Buscar Rol"
                    onChange={e => setGlobalFilter(e.target.value)}
                />
                <Link to={link}>
                    <Buton type="button" colors="bg-secundary-500">Agregar</Buton>
                </Link>
            </div>
            <table className='table-fixed w-full'>
                {/**************************** HEAD **************************/}
                <thead className=''>
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id} className='bg-secundary-500 text-secundary-200 uppercase'>
                                {
                                    headerGroup.headers.map(header => (
                                        <th key={header.id} className='border-r border-secundary-200 '>
                                            {
                                                header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                {/**************************** BODY **************************/}
                <tbody>
                    {
                        table.getRowModel().rows.map(row => (
                            <tr key={row.id} className='text-secundary-300 font-medium border-b border-secundary-200 hover:bg-secundary-200'>
                                {
                                    row.getVisibleCells().map(cell => (
                                        <td key={cell.id} className='py-2 px-4'>
                                            {
                                                flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {/************************** PAGINATION **************************/}
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
                        {Number(table.getRowModel().rows[table.getRowModel().rows.length - 1].id) + 1}
                    </span>
                    del total de
                    <span className='block'>
                        {ROL.length}
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
        </div>
    )
}

export default Datatable