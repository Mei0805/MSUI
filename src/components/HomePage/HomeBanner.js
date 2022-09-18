import { Col, Image, Row } from 'antd';
import Slider from 'infinite-react-carousel';

export const HomeBanner = () => {
    const imgSrc = [
        { id: 1, url: 'https://salt.tikicdn.com/cache/w1080/ts/banner/29/2c/4c/b8c757ba06d448ce3d2ec0bee3d75fa3.png.webp' },
        { id: 2, url: 'https://salt.tikicdn.com/cache/w1080/ts/banner/e5/db/cc/32b6b4268331a9ed46479ab0da46ae82.png.webp' },
        { id: 3, url: 'https://salt.tikicdn.com/cache/w1080/ts/banner/9b/19/a8/51a15d4d9811bdfa47559695a27d13a7.png.webp' },
        { id: 4, url: 'https://salt.tikicdn.com/cache/w1080/ts/banner/5f/8b/3d/96dc1c277cb1dbb4ea7d53a6f4c069f6.png.webp' },
        { id: 5, url: 'https://salt.tikicdn.com/cache/w1080/ts/banner/47/3f/c4/7cb5b763e8644aa1d4ef5c5639f2c029.jpg.webp' },
    ]

    return <>
        <Row className='home_top_banner_container'
            justify="space-between"
            gutter={[10, 16]}
        >
            <Col span={14} >
                <Slider dots >
                    {imgSrc.map((item, index) => {
                        return <Image
                            height={355}
                            key={index}
                            preview={false}
                            style={{}}
                            src={item.url} />
                    })}
                </Slider>
            </Col>
            
            <Col span={10}>
                <Image preview={false}
                    style={{ objectFit: 'contain', borderRadius: '3px' }}
                    src={'https://salt.tikicdn.com/cache/w750/ts/banner/1f/48/85/1e0d26bf9e0f148402ef6e56ad374941.png.webp'}
                />
            </Col>
        </Row>
    </>
}