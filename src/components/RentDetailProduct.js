import { Card } from "antd"
import { Link } from 'react-router-dom';
import { InputNumber} from 'antd';
export default function RentDetailProduct({ product }) {
    const onChange2 = (value2) => {
        console.log('changed', value2);
        };
    return (
        
        <Card className="Rentproduct2" 
            hoverable 
            cover={<img className="Rentproduct-pic" alt={product.name} src={product.image} />}
        > 
            <div className="Rentproduct-info">
                <h2 className="Rentproduct-name">
                    {product.name}
                </h2>
                <div className="Rentproduct-info2">
                    <h6
                        className="Rentproduct-price">
                        $ {product.price}
                    </h6>
                    <h6 className="Rentproduct-category">
                        {product.category}
                    </h6>
                </div>
                <div className='RentDetail-num-box2'>
                    <InputNumber min={0} max={10} defaultValue={0} onChange={onChange2} />
                </div>
                <Link to={'/RentDetail'} >
                    <button class="Rentproduct-btn">
                        新增租借   
                    </button>
                </Link>
            </div>
        </Card>
    );
}