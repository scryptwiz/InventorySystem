import React from 'react'
import Na from './Na'
import './App.css'

export default function Cart({CartAdd, deletee,num, setnum, setCartAdd, Products} ) {
    return (
        <>
       <Na></Na>
       <div className="mt-2">
        <h2 className="text-center">Added To Cart {num}</h2>
        <div className="d-flex flex-direction-row flex-wrap justify-content-around">
                    {CartAdd.map((e,i)=>(
                         <div className="added-goods text-white p-4 mt-5 col-sm-12 col-md-12 col-lg-3 ml-2 mr-2 rounded" key={i}>
                            <img src={e.ProductImage} alt=""/>
                            <div className="d-flex justify-content-between">
                                <p className="product-display">Product Name:</p>
                                <p className="product-display">{e.ProductName}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="product-display">Product Price:</p>
                                <p className="product-display">{e.ProductPrice}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="product-display">Product Quantity:</p>
                                <input className="form-control col-3 bg-transparent text-white" type="number"/>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <button className="btn btn-danger" onClick={()=>deletee(i)}>Delete</button>
                                <button className="btn btn-success" >Buy Now</button>
                            </div>
                         </div>
                    ))
                }
                </div> 
                </div>
        </>
    )
}