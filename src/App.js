import React, {useState} from 'react'
import { Route, Switch } from 'react-router'
import Admin from './Admin'
import Login from './Login'
import 'react-bootstrap'
import SignUp from './SignUp'
import User from './User'
import Cart from './Cart'

export default function App() {
    const [Products, setProducts] = useState([])
    const [CartAdd, setCartAdd] = useState([])
    const [num, setnum] = useState("0")
    const add=(i)=> {
        setCartAdd([...CartAdd, Products[i]])
        setnum( +num+1)
    }
    
    const deletee=(index)=> {
        let s = CartAdd.filter((_,i)=> i !==index);
        setCartAdd(s);
        setnum(num -1)
    }


    return (
       <>
        <Switch>
            <Route path="/" exact render>
                <Login></Login>
            </Route>
            <Route path="/admin" exact>
                <Admin Products={Products} setProducts={setProducts}></Admin>
            </Route>
            <Route path="/register">
               <SignUp></SignUp>
            </Route>
            <Route path="/user">
                <User Products={Products} setProducts={setProducts} add={add}></User>
            </Route>
            <Route path="/cart">
                <Cart CartAdd={CartAdd} num={num} deletee={deletee} setnum = {setnum} setCartAdd={setCartAdd}></Cart>
            </Route>
        </Switch>
       </>
    )
}