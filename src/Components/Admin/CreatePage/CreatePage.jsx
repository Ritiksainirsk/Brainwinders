import React, { useState } from "react";
import UploadImg from "../../../assets/upload.png";
import "./CreatePage.css";

export default function CreatePage() {

  const [image, setImage] = useState(false)
  const [productDetails,setProductsDetails] = useState({
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:""
  })

  const handleImage = (e)=>{
    setImage(e.target.files[0])
  }

  const changeHandle = (e)=>{
    setProductsDetails({...productDetails,[e.target.name]:e.target.value})
  }

  // addProduct-
  const AddProductt = async()=>{
    let responseData;
    let product = productDetails;

    let formData = new FormData()
    formData.append('product',image)

    //yah image ko leke aayega
    await fetch("https://quickshop-backend-gqcu.onrender.com/uploadimage",{
      method:"POST",
      headers:{
        Accept:"application/json",
      },
      body:formData,
    }).then((resp)=> resp.json()).then((data)=>{responseData = data})
    

    // yah mongodb me add kr dega
    if(responseData.success){
        product.image = responseData.image_url
        await fetch('https://quickshop-backend-gqcu.onrender.com/addproduct',{
          method:"POST",
          headers:{
            Accept:"application/json",
            'Content-type':'application/json'
          },
          body:JSON.stringify(product)
        }).then((resp)=> resp.json()).then((data)=>{
          data.success ? alert("product added"):alert("Failed")
        })
    }

  }


  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandle} type="text" name="name" placeholder="Type here" />
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandle} type="number" name="old_price" placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandle} type="number" name="new_price" placeholder="Type here" />
        </div>
      </div>

      <div className="addproduct-itemfield selector">
        <p>Product Category</p>
        <select name="category" value={productDetails.category} onChange={changeHandle} id="" className="add-product-selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div className={`addproduct-itemfield ${!image ? ' select-image' : 'select-image2' } `}>
        <label htmlFor="file-name">
          <img src={image? URL.createObjectURL(image) :UploadImg} alt="" className="addproduct-thumbnail-img" />
        </label>
        <input onChange={handleImage} type="file" name="image" id="file-name" hidden />
      </div>

      <button onClick={AddProductt}>Add</button>
    </div>
  );
}
