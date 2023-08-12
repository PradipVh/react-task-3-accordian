
import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom"
import React from 'react'
import RouteLayout from "./layout/RouteLayout"
import Login from "../Pages/Login"
import Navbar from "../Components/Navbar"
import TaskPage from "../Components/TaskPage"
import Form from "../Pages/Form"


export const router = createBrowserRouter(


    createRoutesFromElements(
        <Route path="/" elements={<RouteLayout />}>
            <Route index element={<Navbar />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/form" element={<Form />} />
        </Route>
    )
)
