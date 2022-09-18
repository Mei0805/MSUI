import Slider from 'infinite-react-carousel';
import { Row, Col, Card, Rate, Typography } from "antd"

import Meta from "antd/lib/card/Meta";
const { Text } = Typography;
export const RelatedProduct = () => {
    const productArr = [
        { img: '', title: 'Europe Street beat', price: 120000, rating: 4, soldquantity: 11 },
        { img: '', title: 'Europe Street beat 2', price: 120000, rating: 3, soldquantity: 11 },
        { img: '', title: 'Europe Street beat 3', price: 120000, rating: 5, soldquantity: 11 },
        { img: '', title: 'Europe Street beat 4', price: 120000, rating: 4, soldquantity: 11 },
        { img: '', title: 'Europe Street beat 5', price: 120000, rating: 2, soldquantity: 11 },
        { img: '', title: 'Europe Street beat 6', price: 120000, rating: 4, soldquantity: 11 },
        { img: '', title: 'Europe Street beat 7', price: 120000, rating: 3, soldquantity: 11 },

    ]
    return <>
        <Row className='related_product_container'>
            <Col span={24} >
                <h3 className='section_title'> Related Product </h3>
                <Slider className='related_product_slider' slidesToShow={5}  >
                    {productArr.map((item, index) => (
                        <Card className="productItem"
                            key={index}
                            hoverable
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title={item.title} />
                            <div className="rating">
                                <Rate disabled defaultValue={item.rating} style={{ fontSize: 12 }} />
                                <small style={{ color: 'rgb(128, 128, 137)' }}> | Sold: 100++</small>
                            </div>

                            <Text strong className="price" type="danger">120.000 đ</Text>

                        </Card>
                    ),
                    )}
                </Slider>

            </Col>
        </Row>
    </>
}