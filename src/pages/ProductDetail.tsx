import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { IProps } from '../types/product'
import '../App.css'

const ProductDetailPage = (props: IProps) => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const currentProduct = props.products.find(item => item.id === Number(id))
        setProduct(currentProduct)
    })
    return (
        <div>
<div className="pd-wrap">
		<div >
	        <div className="box">
	        	<div className="">
	        		<div id="slider" className="owl-carousel product-slider">
						<div className="anhsp">
						  	<img src={product.image} width={350} height={450} />
						</div>
					</div>
	        	</div>
	        	<div className="ctsp">
	        		<div className="product-dtl">
        				<div className="product-info">
		        			<div className="product-name">{product?.name}</div>
		        			<div className="product-price-discount"><span>{product?.price}</span></div>
							
		        		</div>
	        			<div className="">
	        				<div className="">
	        					<label className="size">Size</label>
								<select id="size" name="size" className="form-control">
									<option>S</option>
									<option>M</option>
									<option>L</option>
									<option>XL</option>
								</select>
	        				</div>
	        				<div className="">
	        					<label className="color">Color</label>
								<select id="color" name="color" className="form-control">
									<option>Blue</option>
									<option>Green</option>
									<option>Red</option>
								</select>
	        				</div>
	        			</div>
	        			<div className="product-count">
	        				<label className="size">Số Lượng</label>
							<input className='sl' type="text" placeholder='0'/><br />
							<a href="#" className="round-black-btn">Add to Cart</a>
	        			</div>
	        		</div>
	        	</div>
	        </div>

	        <div className="product-info-tabs">
				<div className="tab-content" id="myTabContent">
				  	<div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
				  	{product?.description}
				  	</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    )
}

export default ProductDetailPage