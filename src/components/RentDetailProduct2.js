import { Card } from "antd"
import { Link } from 'react-router-dom';

export default function RentDetailProduct2({ introitem }) {
    return (
        <Card
            hoverable
            className='intro-card2'
            cover={<img alt={introitem.name} src={introitem.cover} style={{objectFit: 'cover', height:"15rem", borderRadius:'20px 20px 0 0 ',}} />}
        >
            <Link to={`/introitems/${introitem.id}`}></Link>
            <div className='intro-colum'>
                <h3 className="intro-category2">{introitem.category}</h3>
                <span className="intro-name">{introitem.name}</span>
            </div>          
        </Card>
    );
}