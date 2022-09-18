import { Avatar, Button, Col, Image, Rate, Row, Space, Descriptions, Badge, Input } from 'antd';
import { StarOutlined, ShopOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductImage = () => {
    return <>
        <Image preview={false}
            style={{ objectFit: 'contain', borderRadius: '3px' }}
            src={'https://salt.tikicdn.com/cache/w750/ts/banner/1f/48/85/1e0d26bf9e0f148402ef6e56ad374941.png.webp'}
        />
    </>
}
const ProductInfo = () => {
    let [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }
    const handleDecrease = () => {
        ((quantity === 0 || quantity < 0) ? quantity = 0 : setQuantity(quantity - 1))
    }

    return <>
        <span className='product_price__current-price'>65.000 đ</span>
        <span className='product_price__list-price'>65.000 đ</span>
        <span className='product_price__discount-rate'>-32%</span>
        <div className='product_quantity'>
            <Button.Group>
                <Button icon={<MinusOutlined />} type="ghost" onClick={() => handleDecrease()} />
                <Input value={quantity} style={{ width: '60px', textAlign: 'center' }} />
                <Button icon={<PlusOutlined />} type="ghost" onClick={() => handleIncrease()} />
            </Button.Group>
        </div>
        <div className='add_to_cart'>
            <Button type='danger' size='large' className='add_to_cart_btn' block >Buy Now</Button>
        </div>
    </>
}
const ShopInfo = () => {
    return <>
        <Row gutter={[16, 16]}>
            <Col >
                <Avatar size={48} src='https://vcdn.tikicdn.com/cache/w100/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png.webp' />
            </Col>
            <Col span={12}>
                <Link to=''>Shop Name</Link>
            </Col>
            <Col span={12} className='shop_rating' >
                <div>4.5 / 5  <StarOutlined /></div>
                <div></div>
            </Col>
            <Col span={12} className='shop_follow'>
                <div>250k+</div>
                <div>Follow</div>

            </Col>

            <Space size={[10]} wrap className='btn-group'>
                <Button icon={<ShopOutlined />} size='large'>
                    Visit Shop
                </Button>
                <Button icon={<PlusOutlined />} size='large' >
                    Follow
                </Button>
            </Space>

        </Row>
    </>
}

const ProductDescription = () => {
    return <Descriptions
        className='product_description_container'
        bordered
        title="Product Description"
        size={'middle'}
    >
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Company">VNG</Descriptions.Item>
        <Descriptions.Item label="Price">18.000 VND</Descriptions.Item>
        <Descriptions.Item label="Out of Date">22/10/2022</Descriptions.Item>
        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official">$60.00</Descriptions.Item>
        <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
        </Descriptions.Item>
    </Descriptions>
}

export const ProductItem = () => {

    return <>
        <Row className='product_item_container' justify='space-between'>
            <Col span={8} className='product_image_container'>
                <ProductImage />
            </Col>
            <Col className='separate'></Col>
            <Col span={15} className='product_info_container'>
                <Row className='head'>
                    <h4>Category:  </h4>
                    <Badge.Ribbon text="New">
                        <h1 className='product_title'>Combo Trọn Bộ 4 Cuốn Hackers IELTS (Listening + Reading + Speaking + Writing)</h1>
                    </Badge.Ribbon>

                    <div className="rating">
                        <Rate disabled defaultValue={4} style={{ fontSize: 20, marginRight: 10 }} />
                        <span style={{ color: 'rgb(128, 128, 137)', borderLeft: '1px solid grey' }}>  Sold: 100++ </span>
                    </div>

                </Row>

                <Row className='body' >
                    <Col className='product_add' span={16}>
                        <ProductInfo />
                    </Col>
                    <Col className='shop_info' span={8}>
                        <ShopInfo />
                    </Col>
                </Row>
            </Col>
        </Row>

        <ProductDescription />
    </>
}