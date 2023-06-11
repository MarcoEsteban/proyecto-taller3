//? -------------------- HOOKS --------------------
import { useContext, useEffect, useState } from 'react'
import { rolContext } from '../../pages/admin/Roles';
//? ----------------- ROUTER DOM ------------------
import { useNavigate } from 'react-router-dom'
//? ------------------ DATATABLE ------------------
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
    getFilteredRowModel
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
//? ----------------- COMPONENTS ------------------
import Filter from '../Filter';
import Buton from '../Buton';
import Pagination from '../Pagination';


//TODO ----------------------------
//TODO ===> Function Search Filter:
//TODO ----------------------------
const fuzzyFilter = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({ itemRank });
    return itemRank.passed;
}

const DatatableRol = ({ link }) => {
    /*============================= useCONTEXT ===============================*/
    const { handleListData, handleDeleteData } = useContext(rolContext);

    /*************************** 1.- CONFIG HOOKS *****************************/
    const [rol, setRol] = useState([]);
    const [id, setId] = useState(0);
    const [globalFilter, setGlobalFilter] = useState('');
    const navigate = useNavigate();

    const navigateLink = () => {
        navigate(link)
    }

    useEffect(() => {
        const loadRol = async () => {
            const res = await handleListData()
            if (res.data) {
                setRol(res.data)
            }
        }
        loadRol();
    }, [])

    const deleteRol = async (id) => {
        try {
            await handleDeleteData(id);
            setId(id)
        } catch (error) {
            console.error(error)
        }
    }
    console.log(id)


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
            cell: ({ row }) => <button onClick={() => console.log(row.original, row.original.id_rol)} className='py-1 bg-secundary-500 hover:bg-secundary-500/90 rounded-lg px-3 w-auto m-auto block text-secundary-100'>Editar</button>
        },
        {
            accessorKey: 'Eliminar',
            header: () => <span>Eliminar</span>,
            cell: ({ row }) => <button onClick={() => deleteRol(row.original.id_rol)} className='py-1 bg-secundary-500 hover:bg-secundary-500/90 rounded-lg px-3 w-auto m-auto block text-secundary-100'>Eliminar</button>

        },
    ];

    /***************** 3.- CONFIG THE TABLE FOR DATATABLE *********************/
    const table = useReactTable({
        data: rol,
        columns: columns,
        state: {
            globalFilter
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        globalFilterFn: fuzzyFilter,
    })

    return (
        <div className='px-6 py-4'>
            {/************************ BUTTON ADD Y SEARCH *******************/}
            <div className='flex justify-between mb-2'>
                <Filter onChange={e => setGlobalFilter(e.target.value)} />
                <Buton onClick={() => navigateLink()} > Agregar</Buton>
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
            {rol.length > 0 ? <Pagination table={table} valorData={rol} /> : ''}


        </div >

    )
}

export default DatatableRol