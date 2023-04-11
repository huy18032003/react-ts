import { useEffect, useState } from 'react'
import { addProduct, getAllProduct, updateProduct } from './api/product'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import { deleteProduct } from './api/product'
import WebsiteLayout from './pages/layout/WebsiteLayout'
import AdminLayout from './pages/layout/AdminLayout'
import ProductDetail from './pages/ProductDetail'
import AddProductPage from './pages/admin/AddProductPage'
import UpdateProductPage from './pages/admin/UpdateProductPage'
import { IProduct } from './types/product'
import ProductManagement from './pages/admin/ProductManagement'


function App() {
  const [products, setProduct] = useState([])
  useEffect(()=>{
    getAllProduct().then(({data})=>setProduct(data))
  },[])

  const onHandleRemove = (id:number)=>{
    const status = confirm("Bạn có muốn xóa sản phẩm không")
    if(status){
      deleteProduct(id).then(() => setProduct(products.filter((item: IProduct) => item.id !== id)))
    }
  }

  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAllProduct().then(({ data }) => setProduct(data)))
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => getAllProduct().then(({ data }) => setProduct(data)))
  }

  return (
    <div className="App">
      

      <Routes>

        <Route path='/' element={<WebsiteLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='products' element={<ProductPage products={products}/>}/>
          <Route path='products/:id' element={<ProductDetail products={products} />}/>
        </Route>

        <Route path='admin' element={<AdminLayout />}>
          <Route path='products'>
          <Route index element={<ProductManagement products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd}/>}/>
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products}/>}/>
          </Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App
