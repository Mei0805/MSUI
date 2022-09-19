import { Routes, Route } from "react-router-dom"
import { CartPage } from "../components/CartPage/CartPage"

import { Home } from "../components/HomePage/HomePage"
import { MainHome } from "../components/HomePage/MainContent"
import { More } from "../components/More/More"
import { ProductDetail } from "../components/ProductDetail/ProductDetail"

export const Router = () =>{
    return <>
        <Routes>
            <Route path='/' element={<Home />} >
                <Route index element={<MainHome />} />
                <Route path='product/:category' index element={<ProductDetail />} />
                <Route path="cart&checkout" element={<CartPage />} />
            </Route>
            <Route path='/login' element={<More />} />
        </Routes>
    </>
}