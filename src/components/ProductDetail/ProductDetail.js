import { BreadCrumb } from "./Breadcrumb"
import { ProductItem } from "./ProductItem"
import '../../style/product_detail/product_detail.scss'
import { RelatedProduct } from "./RelatedProduct"


export const ProductDetail = () => {
    return <>
        <BreadCrumb />
        <ProductItem />
        <RelatedProduct />
    </>
}