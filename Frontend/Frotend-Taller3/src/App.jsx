/******************************* HOOK *****************************************/
import { useState } from "react";
/******************************* ROUTE ****************************************/
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
/******************************* LAYOUT ***************************************/
import LayoutAuth from "./layout/LayoutAuth";
import LayoutMain from "./layout/LayoutMain";
/*************************** PAGE AUTH ****************************************/
import Login from "./pages/auth/Login";
/*************************** PAGE ADMIN ***************************************/
import Home from './pages/admin/Home';
import Perfil from './pages/admin/Perfil';
import Usuario from "./pages/admin/Usuario";
import Roles from "./pages/admin/Roles";
import Proveedor from "./pages/admin/Proveedor";
import Cliente from "./pages/admin/Cliente";
import Medicamentos from "./pages/admin/Medicamentos";
import Laboratorio from "./pages/admin/Laboratorio";
import FormaFarmaceutica from "./pages/admin/FormaFarmaceutica";
import Concentracion from "./pages/admin/Concentracion";
import ViaAdministracion from "./pages/admin/ViaAdministracion";
import Ubicacion from "./pages/admin/Ubicacion";
import Ventas from "./pages/admin/Ventas";
import DataFarmacia from "./pages/admin/DataFarmacia";
/**************************** COMPONENTS **************************************/
import Form from "./components/Form";
import Datatable from "./components/Datatable";
/************************ COMPONENTS USUARIO **********************************/
import DatatableUser from "./components/Usuario/DatatableUser";
import FormAdd from "./components/Usuario/FormAdd";
/*************************** COMPONENTS ROL ***********************************/
import DatatableRol from "./components/Rol/DatatableRol";
import FormAddRol from "./components/Rol/FormAddRol";
/***************************** UTILS ******************************************/
import ProtectedRoute from "./components/util/ProtectedRoute";

function App() {
  /*------ */
  /* STATE */
  /*------ */
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOnClick = () => {
    setIsLoggedIn(true);
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* ROUTE LOGIN */}
        <Route path='/login' element={<Login onClick={handleOnClick} />} />

        {/* ROUTE ADMIN || USER */}
        {/* <Route element={<ProtectedRoute isLogged={isLoggedIn} />} > */}
        <Route path='/' element={<LayoutMain />} >
          <Route index element={<Home />} />

          <Route path='perfil' element={<Perfil />} />
          {/* ROLES */}
          <Route path='roles' element={<Roles />} >
            <Route index element={<DatatableRol link='/roles/add' />} />
            <Route path='add' element={<FormAddRol link='/roles' />} />
            <Route path='edit' element={<FormAddRol link='/roles' />} />
          </Route>
          {/* USUARIO */}
          <Route path='usuario' element={<Usuario />} >
            <Route index element={<DatatableUser link='/usuario/add' />} />
            <Route path='add' element={<FormAdd link='/usuario' />} />
          </Route>
          <Route path='proveedor' element={<Proveedor />} />
          <Route path='cliente' element={<Cliente />} />
          <Route path='medicamentos' element={<Medicamentos />} />
          <Route path='laboratorio' element={<Laboratorio />} />
          <Route path='forma-farma' element={<FormaFarmaceutica />} />
          <Route path='concentracion' element={<Concentracion />} />
          <Route path='via-admin' element={<ViaAdministracion />} />
          <Route path='ubicacion' element={<Ubicacion />} />
          <Route path='ventas' element={<Ventas />} />
          <Route path='farmacia' element={<DataFarmacia />} />
        </Route>
        {/* </Route> */}

      </Routes>
    </BrowserRouter >
  )
}

export default App;

