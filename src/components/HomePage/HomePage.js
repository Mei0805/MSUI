import '../../style/homepage/homepage.scss'
// import { Header } from "./Header"
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { MainHeader } from './Header';
import { Footer } from './Footer';
const { Content } = Layout;

export const Home = () => {
    return (
        <Layout className='homePage_container' span={24}>
            <MainHeader />
            <Content className='main_container'>
                <Outlet />
            </Content>
            <Footer />
        </Layout>
    )
}

