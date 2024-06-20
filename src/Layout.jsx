import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Outlet />
        </>
    )
}

export default Layout