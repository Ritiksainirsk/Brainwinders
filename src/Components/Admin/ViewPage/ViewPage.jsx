import React, { useEffect, useState } from "react";
import "./ViewPage.css";
import { IoIosClose } from "react-icons/io";

export default function ViewPage() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await fetch("https://quickshop-backend-gqcu.onrender.com/allproducts")
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data.products);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  // console.log(products.products)

  const remove = async (id) => {
    await fetch("https://quickshop-backend-gqcu.onrender.com/deleteproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await getProducts()
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="product-list-container product-list-format">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <hr />

      <div className="product-list-container product-list-format productlist">
        {products.map((item, index) => {
          return (
            <>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.old_price}</p>
              <p>${item.new_price}</p>
              <p>{item.category}</p>
              <p
                className="remove"
                onClick={() => {
                  remove(item.id);
                }}
              >
                <IoIosClose />
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
}
