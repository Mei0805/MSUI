import { Radio, Tabs } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CategoryBar = () => {
    let navigate = useNavigate();
    const categories = [
        { id:1 , name:'Thịt, Rau Củ'},
        { id:2 , name:'Bách Hóa'},
        { id:3 , name:'Nhà Cửa'},
        { id:4 , name:'Điện Tử'},
        { id:5 , name:'Thiết Bị Số'},
        { id:6 , name:'Điện Thoại'},
        { id:7 , name:'Mẹ & Bé'},
        { id:8 , name:'Loại 8'},
        { id:9 , name:'Loại 9'},
        { id:10 , name:'Thịt, Rau Củ'},
        { id:12 , name:'Bách Hóa'},
        { id:13 , name:'Nhà Cửa'},
        { id:14 , name:'Điện Tử'},
        { id:15 , name:'Thiết Bị Số'},
        { id:16 , name:'Điện Thoại'},
        { id:17 , name:'Mẹ & Bé'},
        { id:18 , name:'Loại 8'},
        { id:19 , name:'Loại 9'},
    ]
    const handleClickTab = (e) =>{
        console.log(e);
        navigate(`/product/${e}`);
    }
    return <>
        <Tabs
            activeKey={'none'}
            tabPosition={'top'}
            onTabClick= {(e)=> handleClickTab(e)} 
            style={{
                padding:'0px 5px'
            }}
            items={categories.map((item, index) => {
                return {
                    label: item.name,
                    key: item.id,
                    disabled: index === categories.length,
                };
            })}
        />
    </>
}