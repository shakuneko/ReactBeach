import { Card } from "antd"
import { Link } from 'react-router-dom';

export default function IntroItem({ Popcard }) {
    return (
      
        <Card
            hoverable
            className='intro-card'
            cover={<img alt={Popcard.eventname} src={Popcard.eventbigimg_url} style={{objectFit: 'cover', height:"15rem", borderRadius:'20px 20px 0 0 ',}} />}
        >
            <Link to={`/intro/${Popcard.id}`}></Link>
            <div className='intro-colum'>
            <h3 className="intro-category">{Popcard.category}</h3>
                <span className="intro-name">{Popcard.eventname}</span>
            </div>          
        </Card>
    
    );
}