import { Row, Col, Card, Avatar, Rate, Typography } from "antd"
import { Button, Space } from 'antd';
import { Affix } from "antd";
import Meta from "antd/lib/card/Meta";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

export const SuggestionProduct = () => {
    const navigate = useNavigate()
    const tittleArr = [
        { img: 'https://joeschmoe.io/api/v1/random', title: 'Just For You' },
        { img: 'https://salt.tikicdn.com/cache/w100/ts/personalish/7d/8a/6e/d8b76e2c43cbd06b7e1aa3ab8c54df64.png.webp', title: 'Market Center' },
        { img: 'https://salt.tikicdn.com/cache/w100/ts/personalish/41/99/9a/8898607d7fca4b79775a708c57a8152f.png.webp', title: 'Sale 50%' },
        { img: 'https://salt.tikicdn.com/cache/w100/ts/tikimsp/2e/9d/d1/df6a4b086a39de681ae46c210efb4afc.png.webp', title: 'Hot Deal' },
        { img: 'https://salt.tikicdn.com/cache/w100/ts/personalish/b7/aa/f3/bcff08097ead36826d2c9daf7c2debd5.png.webp', title: 'Freeship' },
        { img: 'https://salt.tikicdn.com/cache/w100/ts/personalish/dc/f1/b1/6ba9e529785de3ad1a81b9c569d05aa0.png.webp', title: 'Fashion' },

    ]

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
        <Affix offsetTop={0}>
            <div className="sectionContainer">
                <Row className="titleHeading">
                    <Col>
                        <h2>Suggestion Today</h2>
                    </Col>
                </Row>
                <Row className="widgetContainer">
                    <Space size={[10, 16]} wrap style={{ width: '100%', justifyContent: 'space-between' }} >
                        {tittleArr.map((item, index) => (
                            <Button key={index} align='center' block style={{ height: '80px', width: '200px' }}>
                                <Avatar src={item.img} size={48} />
                                <p>{item.title}</p>
                            </Button>
                        ))}
                    </Space>

                </Row>
            </div>
        </Affix>

        <Row className="productContainer">
            <Space size={[10, 16]} wrap style={{ width: '100%' }} justify="space-between">

                {productArr.map((item, index) => (

                    <Card className="productItem"
                        key={index}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" onClick={()=> navigate(`/product/${item.title}`)}  />}
                    >
                        <Meta title={item.title} />

                        <div className="rating">
                            <Rate defaultValue={item.rating} style={{ fontSize: 12 }} disabled />
                            <small style={{ color: 'rgb(128, 128, 137)' }}> | Sold: 100++ </small>
                        </div>

                        <Text className="price" type="danger" strong>120.000 đ</Text>

                    </Card>
                ),
                )}
            </Space>
        </Row>
    </>
}