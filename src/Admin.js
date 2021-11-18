import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap';
import Na from './Na'
import './Admin.css'

export default function Admin({Products, setProducts}) {
    
    const [ProductInfo, setProductInfo] = useState({ProductName:"", ProductQuantity:"", ProductImage:"", ProductPrice:""})

    const change=(e) =>{
        setProductInfo({...ProductInfo, [e.target.name]:e.target.value})
    }

    const addProducts=()=> {
        let a=[...Products, ProductInfo];
        setProducts(a)
        setProductInfo({ProductName:"", ProductQuantity:"", ProductImage:"", ProductPrice:""})
        alert("Product Added Successfully")
    }

    const delet=(index)=> {
        setProducts(Products.filter((e,i)=>i!==index))
        alert("Product Deleted Successfully")
    }

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const [editObj, setEditObj] = useState({})
    const [editIndex, setEditIndex] = useState(0)
    const handleShow = (e,i) => {
        
        setShow(true) 
        setEditObj(()=>{
            let newState = e
            return newState
        })
        setEditIndex(()=>{
            let newState = i
            return newState
        })
    };

    const changer =(e)=> {
        setEditObj({...editObj, [e.target.name]:e.target.value})
        // console.log(editObj);
    }

    const update = ()=> {
        handleClose();
        let updatedList = Products.map((each,i)=>i===editIndex? editObj:each);
        setProducts(updatedList)
    }
    
    return (
        <>
       <Na></Na>
        <div className="main-container d-flex justify-content-center">
            <div className="p-3 container-div col-md-12">
                    <h2 className="text-center">Admin Page</h2>
                <div className="d-flex justify-content-around flex-wrap">
                    <input 
                        className="form-control mt-4 col-lg-2" 
                        onChange={change} 
                        name="ProductName"
                        placeholder="Products Name" 
                        type="name"
                        value={ProductInfo.ProductName}
                    />
                    <input 
                        className="form-control mt-4 col-lg-2" 
                        onChange={change} placeholder="Products Price" 
                        name="ProductPrice"
                        type="number"
                        value={ProductInfo.ProductPrice}
                    />
                    <input 
                        className="form-control mt-4 col-lg-2" 
                        onChange={change} 
                        placeholder="Products Quantity" 
                        name="ProductQuantity"
                        type="number"
                        value={ProductInfo.ProductQuantity}
                    />
                    <input 
                        className="form-control inp mt-4 col-lg-2 form-control-sm" 
                        onChange={change}
                        name="ProductImage"
                        type="file"
                        value={ProductInfo.ProductImage}
                    />
                    <div className="d-flex flex-row col-lg-3 justify-content-around mt-4">
                        <button className="btn btn-success" onClick={addProducts}>Add Product</button>
                    </div>
                </div>
                <hr/>
                <div className="d-flex flex-direction-row flex-wrap justify-content-around">
                    {Products.map((e,i)=>(
                         <div className="added-goods text-white p-4 mt-5 col-sm-12 col-md-12 col-lg-3 ml-2 rounded" key={i}>
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
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-secondary" onClick={()=>handleShow(e,i)}>Edit Product</button>
                                <button className="btn btn-danger" onClick={()=>delet(i)}>Delete</button>
                            </div>
                         </div>
                    ))
                }
                <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input placeholder="Edit Product Name" name="ProductName" value={editObj.ProductName} onChange={changer} className="form-control" type="name"/>
                    <input placeholder="Edit Product Price" name="ProductPrice" value={editObj.ProductPrice} onChange={changer} className="form-control mt-4" type="number"/>
                    <input placeholder="Edit Product Quantity" name="ProductQuantity" value={editObj.ProductQuantity} onChange={changer} className="form-control mt-4" type="number"/>
                    <input placeholder="Edit Product Image" name="ProductImage" value={editObj.ProductImage} onChange={changer} className="form-control mt-4 p-0 inp" type="file"/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={update}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
            </div>
        </div>
        </>
    )
}