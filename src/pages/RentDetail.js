import { Layout,Radio,InputNumber,DatePicker, Space} from 'antd';
import {createRoot} from 'react-dom/client';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import RentProductDetail from "../components/RentProductDetail";
import { useParams } from 'react-router-dom';
import products from "../json/products.json";
import React, { useState } from 'react';
const { RangePicker } = DatePicker;
const { Header, Content, Footer } = Layout;


function  RentDetail() {
  const { productId } = useParams();
  const product = products.find(
    (x) => x.id === productId
 );
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="RentProduct" />
      </Header>

      <Content className="layout-content">
        <div>
          <RentProductDetail  product={product}/>
        </div>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default RentDetail;