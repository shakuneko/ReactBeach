import { Layout,Radio,InputNumber,DatePicker, Space} from 'antd';
import {createRoot} from 'react-dom/client';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import OrderContent from "../components/OrderContent";
import { useParams } from 'react-router-dom';
import products from "../json/products.json";
import React, { useState } from 'react';
const { Header, Content, Footer } = Layout;


function  PlaceOrder() {
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
          <OrderContent/>
        </div>
      </Content>
      <Footer className="layout-footer" style={{backgroundColor:"#F4F6FC"}}>
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default PlaceOrder;