import { Layout,Skeleton,BackTop } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import products from "../json/products.json";
import { Row, Col } from "antd";
import RentProductItem from "../components/RentProductItem";
import RentNavbar from "../components/RentNavbar";
import IntroSearchBar from "../components/IntroSearchBar";
import React, { useState } from 'react';

import { useRentProducts } from '../react-query';
import { useParams } from 'react-router-dom';


const { Header, Content, Footer } = Layout;

function RentProduct() {

  const{ rentcategory } = useParams();
  console.log(rentcategory);
  const url = rentcategory || "";
  if(url==="surf"){
    var a = "衝浪"
  }else if(url===""){
    a = ""
  }else if(url==="sup"){
    a = "SUP立槳"
  }else if(url==="canoe"){
    a = "獨木舟"
  }else if(url==="dive"){
    a = "浮潛與深潛"
  }else if(url==="activityset"){
    a = "活動套組"
  }else if(url==="other"){
    a = "其他"
  }

  const { data, isLoading} = useRentProducts(a);
  const rentproducts = data?.data||[];
  

  const [isOnTouch, setIsOnTouch] = useState(false);
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="RentProduct" />
      </Header>

      <Content className="layout-content">
      <div className="RentProduct-content ">
        <div className="main-container-rent">
          <div className="RentProduct-search">
              <Col 
                  className='intro-search-bar intro-align-item' 
                  xs={{ span: 24 }} 
                  sm={{ span: 24 }} 
                  lg={{ span:10, offset:14  }}
                  xl={{ span:10, offset:14 }}
                  xxl={{ span:10, offset:14  }}
                >
                  <IntroSearchBar/>
                </Col>      
            </div>
          <div  className="RentProduct-content2">
            
            <div className="RentProduct-Navbar">
              <div className="RentProduct-Navbar-border">
                <RentNavbar 
                          navCtrol={isOnTouch}
                      />
              </div>
            </div>
            <Row gutter={[24, 24]} >
              {rentproducts.map(product => (
                  <Col 
                  key={product.id} 
                  sm={{ span: 24 }} 
                  lg={{ span: 8 }}
                  xl={{ span: 8 }}
                  xxl={{ span: 8 }}
                  >
                    <Skeleton loading={isLoading} active>
                  <RentProductItem product={product} isLoading={isLoading}/>
                  </Skeleton>
                  </Col>
              ))}
              </Row>
            </div>
          </div>
        </div>
        <BackTop>
                <div className='back-to-top-btn'>TOP</div>
            </BackTop>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default RentProduct;