import React, { useState, useEffect } from 'react'
import { IProduct } from "../types/product"
import {Image, Typography} from 'antd'
import {Link} from 'react-router-dom'
import '../App.css'

interface IProps{
  products: IProduct[],
}

const ProductPage = (props:IProps) => {
  const[data,setData]= useState<IProduct[]>([])
  useEffect(()=>{
    setData(props.products)
  },[props])

  return (
    <div className='item'>
        {data.map(item => {  
           return(
            <div  className='itemitem'>
              <div key={item.id}>
                <Image className='imgitem' width={250} src={item.image} height={200} />
                <div className='nameitem'>
                 <Link to={`/products/${item.id}`} className='link' >{item.name}</Link>
                 </div>
                 <h2 className='price'>Giá Sản Phẩm: {item.price}VND</h2>
                 <div>
                 <Typography.Text className='buy2'>Đã Bán: </Typography.Text>
                 <Typography.Text className='buy3'>500 +</Typography.Text>
                 </div>
              </div>
              </div>
           )   
        })}
        </div>
  )
}

export default ProductPage