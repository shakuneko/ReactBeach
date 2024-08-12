import { Layout } from 'antd';
import AppHeader from "../../components/Header"
import AppFooter from "../../components/Footer"
import sup from "../../json/RentItem/sup.json";
import { Row, Col } from "antd";
import RentProductItem from "../../components/RentProductItem";
import RentNavbar from "../../components/RentNavbar";
import IntroSearchBar from "../../components/IntroSearchBar";
import React, { useState } from 'react';

const { Header, Content, Footer } = Layout;

function Sup() {
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
              {sup.map(product => (
                  <Col 
                  key={product.id} 
                  sm={{ span: 24 }} 
                  lg={{ span: 8 }}
                  xl={{ span: 8 }}
                  xxl={{ span: 8 }}
                  >
                  <RentProductItem product={product}/>
                  </Col>
              ))}
              </Row>
            </div>
          </div>
        </div>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Sup;