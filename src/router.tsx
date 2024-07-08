import { Link, createBrowserRouter, Routes } from "react-router-dom";
import Cadastrar from './pages/Cadastrar'
import Reseter from './pages/Reseter'
import Login from './pages/Login'

export default createBrowserRouter([
    {
        path: "/",
        element: <div>
            <Link to="/cadastrar" className="text-blue-600 hover:underline">criar perfil</Link>
        </div>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/reset/password",
        element: <Reseter/>,
    },
    {
        path: "/cadastrar",
        element: <Cadastrar />,
    },
]);