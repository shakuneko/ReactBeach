import { Avatar, Card,Skeleton } from "antd"
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function RentProductItem({ product,isLoading }) {
    
  
    return (
        <Card className=" Rentproduct" 
            hoverable 
            cover={
            <img className="Rentproduct-pic" alt={product.rentname} src={product.rentimg_url} />
        }
        > 
       
            <div className="Rentproduct-info">
                <h2 className="Rentproduct-name">
                    {product.rentname}
                </h2>
                <div className="Rentproduct-info2">
                    <h6
                        className="Rentproduct-price">
                        $ {product.rentprice}
                    </h6>
                    <h6 className="Rentproduct-category">
                        {product.rentcategory}
                    </h6>
                </div>
                <Link to={`/products/id/${product.id}`} >
                    <button class="Rentproduct-btn">
                        租借   
                    </button>
                </Link>
            </div>
            
        </Card>
        
       
    );
}