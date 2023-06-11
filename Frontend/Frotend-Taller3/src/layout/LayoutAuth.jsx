import React from 'react'
/* PAGES AUTH */
import { Outlet } from 'react-router-dom';

const LayoutAuth = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default LayoutAuth