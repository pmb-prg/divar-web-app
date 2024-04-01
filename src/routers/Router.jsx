import {  Navigate, Route, Routes } from "react-router-dom"
import NotFoundPage from "pages/404"
import AdminPage from "pages/AdminPage"
import AuthPage from "pages/AuthPage"
import DashboardPage from "pages/DashboardPage"
import HomePage from "pages/HomePage"
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "src/services/user"
import Loader from "components/modules/Loader"
function Router() {
    const { data, isLoading, isFeching } = useQuery(["profile"], getProfile);
    // console.log({data, isLoading})

    if ( isLoading ) return <Loader />
  return (
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="/dashboard" element={data ? <DashboardPage /> : <Navigate to="/auth" />} />
        <Route path="/admin" element={data && data.data.role === "ADMIN" ? <AdminPage /> : <Navigate to="/" />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/auth" element={data? <Navigate to="/dashboard" />   : <AuthPage />} />
    </Routes>
  )
}

export default Router