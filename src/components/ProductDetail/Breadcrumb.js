import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

export const BreadCrumb = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;
    const pathnames = pathname.split('/').filter((item) => item);
    console.log(pathname)
    return <>
        <Breadcrumb style={{padding:'12px'}}>
            <Breadcrumb.Item onClick={()=> navigate('/')} style={{ cursor: 'pointer'}} >
                <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item onClick={()=> navigate('/product')} style={{ cursor: 'pointer'}}>
                <span>Product</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{pathnames}</Breadcrumb.Item>
        </Breadcrumb>
    </>
}