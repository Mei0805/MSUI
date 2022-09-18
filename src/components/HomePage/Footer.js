import React from 'react';
import { Badge } from 'antd';
import { Col, Row, Image, Input, Button } from 'antd';
import { UserOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Search } = Input;

export const Footer = () => {

    return <>
        <footer className='main_footer_container'>
            <Row className='footer_container' >
                <Col className='footer_section' span={4}>
                    <h5>Heading</h5>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                </Col>
                <Col className='footer_section' span={4}>
                    <h5>Heading</h5>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                </Col>
                <Col className='footer_section' span={4}>
                    <h5>Heading</h5>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                </Col>
                <Col className='footer_section' span={4}>
                    <h5>Heading</h5>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                </Col>
            </Row>
        </footer>
    </>
}