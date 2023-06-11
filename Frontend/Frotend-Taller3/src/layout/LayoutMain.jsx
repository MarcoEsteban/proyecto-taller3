import { useState } from 'react';
import { Outlet } from 'react-router-dom'
/* COMPONENTES */
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const LayoutMain = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='h-[100vh] w-full flex'>
            <Sidebar show={show} />
            <div className='flex-1'>
                <Header setShow={() => setShow(!show)} />
                <div className="h-[93vh] overflow-y-scroll">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayoutMain