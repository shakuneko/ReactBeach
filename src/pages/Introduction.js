import { Layout, Carousel, Row, Col, Input, Skeleton,BackTop } from 'antd';
// import { useParams } from 'react-router-dom';
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import IntroList from "../components/IntroList";

import introitems from "../json/Intro/introItems.json";
import IntroCenterSearch from "../components/IntroCenterSearch"

import { useActivities } from '../react-query';
import { useParams } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const contentStyle = {
  height: '564px',
  width: "100%",
  objectFit: 'cover',
};

function Introduction() {

  const { introcategory } = useParams();
  //console.log(introcategory);
  const url = introcategory || "";
if(url===""){
  var a = ""
}else if(url==="greenIsland"){
  a="綠島"
}else if(url==="lanyu"){
  a="蘭嶼"
}else if(url==="little"){
  a="小琉球"
}else if(url==="penghu"){
  a="澎湖"
}

  const { data, isLoading } = useActivities(a);
  const activities = data?.data || [];

  
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
          <div style={{ position: "relative" }}>
            <img src="https://i.imgur.com/SQAWWrI.jpg" style={contentStyle} alt='SUP 立槳衝浪' />
            <h2 className="intro-carousel-word">SUP 立槳衝浪</h2>
          </div>
          <div style={{ position: "relative" }}>
            <h2 className="intro-carousel-word">香蕉船</h2>
            <img src="https://i.imgur.com/umPI49T.jpg" style={contentStyle} alt='香蕉船' />
          </div>
          <div style={{ position: "relative" }}>
            <h2 className="intro-carousel-word">水上摩托車</h2>
            <img src="https://i.imgur.com/ddZ3T18.png" style={contentStyle} alt='水上摩托車' />
          </div>
          <div style={{ position: "relative" }}>
            <h2 className="intro-carousel-word">浮淺</h2>
            <img src="https://i.imgur.com/DsSDnXj.jpg" style={contentStyle} alt='浮淺' />
          </div>
        </Carousel>
        <IntroCenterSearch />
        <div className='main-container'>
          <Row gutter={[32, 8]}>
            {activities.map(activity => (
              <Col
                key={activity.id}
                sm={{ span: 24 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
                xxl={{ span: 12 }}
              >
                <Skeleton loading={isLoading} active>
                  <IntroList introitem={activity} isLoading={isLoading} />
                </Skeleton>
              </Col>
            ))}
          </Row>
        </div>
        <BackTop>
                <div className='back-to-top-btn'>TOP</div>
            </BackTop>
      </Content>

      <Footer className="layout-footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default Introduction;