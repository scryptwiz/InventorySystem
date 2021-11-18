import React from 'react'
import Na from './Na'
import './Admin.css'

export default function User({Products, setProducts,add}) {
    return (
        <>
       <Na></Na>
             <div className="d-flex flex-direction-row flex-wrap justify-content-around">
                    {Products.map((e,i)=>(
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
                                <p className="product-display">{e.ProductQuantity}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-success" onClick={()=>add(i)}>Add to Cart</button>
                            </div>
                         </div>
                    ))
                }
                </div>
        </>
    )
}