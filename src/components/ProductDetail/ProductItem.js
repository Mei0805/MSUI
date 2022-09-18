import { Col, Image, Row } from 'antd';

const ProductImage = () => {
    return <>
        <Image preview={false}
            style={{ objectFit: 'contain', borderRadius: '3px' }}
            src={'https://salt.tikicdn.com/cache/w750/ts/banner/1f/48/85/1e0d26bf9e0f148402ef6e56ad374941.png.webp'}
        />
    </>
}

const ProductInfo = () => {
    return <>
        <h1>Thông tin</h1>
    </>
}

const SaleInfo = () => {
    return <>
        <h1>Thông tin nhà bán</h1>
    </>
}


export const ProductItem = () => {
    return <>
        <Row className='product_item_container' justify='space-between'>
            <Col span={8} className='product_image_container'>
                <ProductImage />
            </Col>
            <Col span={15} className='product_info_container'>
                <h1>Combo Trọn Bộ 4 Cuốn Hackers IELTS (Listening + Reading + Speaking + Writing)</h1>
                <Row>
                    <Col span={12}>
                        <ProductInfo />
                    </Col>
                    <Col span={12}>
                        <SaleInfo />
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
}