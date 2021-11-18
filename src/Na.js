import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default function Nav() {
    return (
        <>
         <ul className="d-flex justify-content-between align-items-center m-0 p-3 bg-dark">
             <h2 className="text-white">
                 Na
             </h2>
             <li className="d-flex justify-content-around">
                 <Link to="/"  className="mr-3 text-white">Home</Link>
                 <Link to="/admin" className="mr-3 text-white">Admin</Link>
                 <Link to="/user" className="mr-3 text-white">User</Link>
                 <Link to="/cart" className="mr-3 text-white">Cart</Link>
             </li>
         </ul>
        </>
    )
}