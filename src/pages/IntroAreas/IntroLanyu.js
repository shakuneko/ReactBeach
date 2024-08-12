import { Layout, Carousel, Row, Col } from 'antd';
// import { useParams } from 'react-router-dom';
import AppHeader from "../../components/Header";
import AppFooter from "../../components/Footer";
import IntroList from "../../components/IntroList";

import introLanyu from "../../json/Intro/introLanyu.json"
import IntroCenterSearch from '../../components/IntroCenterSearch'


const { Header, Content, Footer } = Layout;
const contentStyle = {
  height: '564px',
  width:"100%",
  objectFit: 'cover',
};

function Introduction() {
  return (
    <Layout className="container main-layout">
      
      <Header className="layout-header header">
        <AppHeader title="Introduction" />
      </Header>
      
      <Content className="layout-content">

        <Carousel 
          autoplay
          draggable
        >
          <div style={{position:"relative", textAlign: 'center'}}>
            <img src= "https://i.imgur.com/SQAWWrI.jpg" style={contentStyle}/>
            <h2 className="intro-carousel-word">SUP 立槳衝浪</h2>
          </div>
          <div style={{position:"relative"}}>
            <h2 className="intro-carousel-word">香蕉船</h2>
            <img src= "https://i.imgur.com/umPI49T.jpg" style={contentStyle}/>
          </div>
          <div style={{position:"relative"}}>
            <h2 className="intro-carousel-word">水上摩托車</h2>
            <img src= "https://i.imgur.com/ddZ3T18.png" style={contentStyle}/>
          </div>
          <div style={{position:"relative"}}>
            <h2 className="intro-carousel-word">浮淺</h2>
            <img src= "https://i.imgur.com/DsSDnXj.jpg" style={contentStyle}/>
          </div>
        </Carousel>

        <IntroCenterSearch/>

        <div className='main-container'>
        <Row gutter={[32, 8]}>
            {introLanyu.map(introitem => (
                <Col 
                  key={introitem.id} 
                  sm={{ span: 24 }} 
                  lg={{ span: 12 }}
                  xl={{ span: 12 }}
                  xxl={{ span: 12 }}
                >
                  <IntroList introitem={introitem}/>
                </Col>
              ))}
          </Row>
        </div>
        
      </Content>

      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Introduction;