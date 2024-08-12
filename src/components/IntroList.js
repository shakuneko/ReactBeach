import { Card,Row,Col,Skeleton} from "antd"
import { Link } from 'react-router-dom';
import IntroItem from './IntroItem'

export default function IntroList({ introitem, isLoading }) {
    
    return ( 
    <Link to={`/intro/id/${introitem.id}`}>
        <Skeleton loading={isLoading} active>
        <Card
            hoverable
            className='intro-card'
            cover={<img alt="" src={introitem.eventbigimg_url} style={{objectFit: 'cover', height:"15rem", borderRadius:'20px 20px 0 0 ',}} />}
        > 
        
           
        <div style={{display:"flex", flexDurection:"row", justifyContent:"space-between", alignItems:"flex-end"}}>
                    <div className='intro-colum'>
                        <h3 className="intro-category-name">{introitem.category}</h3>
                        <span className="intro-name">{introitem.eventname}</span>
                    </div>          
                    <a className="intro-name">看更多...</a>
                </div>
                  
        </Card>
        </Skeleton> 
          </Link>
    //     <Row gutter={[32, 32]}>
    //     {introitems.map(introitem => (
    //         <Col 
    //           key={introitem.id} 
    //           sm={{ span: 24 }} 
    //           lg={{ span: 12 }}
    //           xl={{ span: 12 }}
    //           xxl={{ span: 12 }}
    //         >
    //           <IntroItem introitem={introitem}/>
    //         </Col>
    //       ))}
    //   </Row>
   
    );
}