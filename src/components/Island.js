import { Link } from 'react-router-dom';
import { Row, Col } from 'antd'

export default function Island() {
    return (
        <div className="main-container">
            <Row gutter={[32, 8]} >
                <Col 
                    sm={{ span: 5, offset: 2 }} 
                    lg={{ span: 5, offset: 2 }}
                    xl={{ span: 5, offset: 2 }}
                    xxl={{ span: 5, offset: 2 }}

                >
                <Link to={`/category/澎湖`} className="islandcard">
                    <img className='island-one-background'
                        src="/image/punghue.png"
                        alt='' />
                    <div className="island-font">澎湖</div>
                </Link>
                </Col>

                <Col 
                    sm={{ span: 5 }} 
                    lg={{ span: 5 }}
                    xl={{ span: 5 }}
                    xxl={{ span: 5 }}
                >
                    <Link to={`/category/小琉球`} className="islandcard">
                        <img className='island-one-background'
                                src="/image/little.png"
                                alt='' />
                            <div className="island-font">小琉球</div>
                    </Link>
                </Col>
                <Col 
                    sm={{ span: 5 }} 
                    lg={{ span: 5 }}
                    xl={{ span: 5 }}
                    xxl={{ span: 5 }}
                >
                    <Link to={`/category/綠島`} className="islandcard">
                        <img className='island-one-background'
                            src="/image/greenisland.png"
                            alt='' />
                        <div className="island-font">綠島</div>
                    </Link>                    
                </Col>
                <Col 
                    sm={{ span: 5 }} 
                    lg={{ span: 5 }}
                    xl={{ span: 5 }}
                    xxl={{ span: 5 }}
                >

                    <Link to={`/category/蘭嶼`} className="islandcard">
                        <img className='island-one-background'
                            src="/image/blueisland.png"
                            alt='' />
                        <div className="island-font">蘭嶼</div>
                    </Link>
                    
                </Col>

            </Row>  
        </div>
    )
}