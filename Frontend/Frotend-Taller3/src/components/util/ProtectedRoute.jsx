import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ isLogged, redirectTo = '/login' }) => {
    console.log("isLogged desde ProtectedRoute", isLogged)
    if (!isLogged) {
        return <Navigate to={redirectTo} replace />
    }
    /**
     * INDICO QUE SE CARGEN TODAS LAS RUTAS QUE ESTAN DENTRO DE:
     * <ProtectedRoute></ProtectedRoute>
     **/
    <Navigate to='/' replace />
    return <Outlet />
}

export default ProtectedRoute