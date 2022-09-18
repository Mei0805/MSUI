import '../../style/homepage/homepage.scss'
// import { Header } from "./Header"
import { Col, Row, Layout } from 'antd';
import { MainHeader } from './MainHeader';
import { Footer } from './Footer';
import { SuggestionProduct } from './SuggestionProducts';

const { Content } = Layout;

export const HomePage = () => {
    return <>
        <Layout className='homePage_container' span={24}>

            <MainHeader />

            <Content className='main_container'>
                <SuggestionProduct />
            </Content>

            <Footer />
        </Layout>
    </>
}