import { Row,Col,BackTop } from "antd"
import IntroMap from "./IntroMap"
import IntroDetailRecommend from "./IntroDetailRecommend"

const contentStyle = {
    height: '564px',
    width:"100%",
    objectFit: 'cover',
  };

  
export default function IntroDetail({ introitem, all }) {
console.log(introitem)
    return (
        <div >
          <div style={{position:"relative"}}>
            <img src= {introitem.eventbigimg_url} style={contentStyle} alt={introitem.eventname}/>
            {/* <h2 className="intro-carousel-word">{introitem.eventname}</h2> */}
          </div>
          <div className="main-container">
            <div className="intro-detail-title">
                <span>{introitem.eventname}</span>
                <img src= {introitem.category_pic} style={{width:"4rem", borderRadius:'50%', marginTop:"1rem"}} alt='SUP 立槳衝浪'/>
                <p className="intro-detail-title-smail">{introitem.category}</p>
            </div>
            <div className="intro-detail-row">
                <img src= {introitem.eventpiconeone_url} className="intro-detail-row-img" alt={introitem.eventname}/>
                <div className="intro-detail-word">
                    <img src= "https://i.imgur.com/a5M1EMB.png" className="intro-detail-decoLine" alt='deco'/>
                    <p>{introitem.eventintro_first}</p>
                </div>
            </div>
            <div className="intro-detail-row">
                <div className="intro-detail-word">
                <img src= "https://i.imgur.com/a5M1EMB.png" className="intro-detail-decoLine" alt='deco'/>
                    <p>{introitem.eventintro_second}</p>
                </div>
                <img src= {introitem.eventpictwo_url} className="intro-detail-row-img"  alt={introitem.eventname}/>
            </div>
            <Row gutter={[32, 32]}>
                <Col 
                    sm={{ span: 24 }} 
                    lg={{ span: 11 }}
                    xl={{ span: 8 }}
                    xxl={{ span: 8 }}
                    className="intro-detail-other-pics-item"
                >
                    <img src= {introitem.eventpicthree_url} className="intro-detail-other-pics-item-img" alt='SUP 立槳衝浪'/>
                </Col>
                <Col 
                    sm={{ span: 24 }} 
                    lg={{ span: 11 }}
                    xl={{ span: 8 }}
                    xxl={{ span: 8 }}
                    className="intro-detail-other-pics-item"
                >
                    <img src= {introitem.eventpicfour_url} className="intro-detail-other-pics-item-img" alt='SUP 立槳衝浪'/>
                </Col>
                <Col 
                    sm={{ span: 24 }} 
                    lg={{ span: 11 }}
                    xl={{ span: 8 }}
                    xxl={{ span: 8 }}
                    className="intro-detail-other-pics-item"
                >
                    <img src= {introitem.eventpicfive_url} className="intro-detail-other-pics-item-img" alt='SUP 立槳衝浪'/>
                </Col>
            </Row>
            <dvi className="intro-location map-container">
                <IntroMap introitem={introitem.id}/>
            </dvi>
            <div className="intro-event-recommand intro-detail-title">
                <img src= "https://i.imgur.com/a5M1EMB.png" className="intro-detail-decoLine" alt='deco'/>
                <span>此地區其他活動</span>
                <IntroDetailRecommend all={all}/>
            </div>
            </div>
            <BackTop>
                <div className='back-to-top-btn'>TOP</div>
            </BackTop>
        </div>

    );
}