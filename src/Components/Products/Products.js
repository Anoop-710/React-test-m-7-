import React from 'react'
import { useEffect } from 'react';
import './Products.css'
import ProductsList from './ProductsList';

function Products() {

    const [data,setData] = React.useState([]);

    useEffect(()=>{
        fetch("https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json")
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            const productList = [];
            for(const key in data){
                productList.push({
                    key: key,
                    id: data[key].id,
                    newPrice: data[key].newPrice,
                    oldPrice: data[key].oldPrice,
                    productImage: data[key].productImage,
                    productName: data[key].productName,
                })
            }
            console.log(productList);
            setData(productList);
        })
    },[])
    
  return (
    <div className='product-section'>
        <h2 className='nav-heading'>Products</h2>
        <div className="products-container cards-container">
            {
                data && data.map((item,i)=>{
                    return(
                        <React.Fragment key={item.key}>
                            <ProductsList details={item} />
                        </React.Fragment>
                    )
                })
            }
        </div>
    </div>
    
  )
}

export default Products