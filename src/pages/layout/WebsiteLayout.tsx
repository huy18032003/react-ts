import React from 'react'
import {Outlet} from 'react-router-dom'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import '../../App.css'

const { Header, Content, Footer } = Layout;

const WebsiteLayout = () => {
  return (
    <div className='container'>
         <header className="header">
        <img src="https://www.sacvang.com/data/04/mau-logo-cua-hang-tap-hoa-02.jpg" width={250} height={130}/>
        <div className="menu">
            <a className='tmenu' href="http://localhost:5173">Home</a>
            <a className='tmenu' href="http://localhost:5173/products">All Products</a>
            <a className='tmenu' href="http://localhost:5173/admin/products">Admin</a>
        </div>
    </header>

    <article>
      <img src="https://salework.net/wp-content/uploads/2022/09/kich-thuoc-anh-shopee-2.jpg" alt="" className='img'/>
      <div className=""><Outlet/></div>
    </article>

    <footer>
        <div className="container">
       
            <form action="" className="foot">
               
                <button>Send</button>
            </form>
        </div>
    </footer>

        </div>
  )
}

export default WebsiteLayout


