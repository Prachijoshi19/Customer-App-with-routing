import { Navigate } from "react-router-dom"

export default function PrivateRoute({children})
{
    let isLogin = localStorage.getItem('isLogin')
    if(!isLogin)
    {
        return <Navigate to="/" replace />
    }
        return children;  
}