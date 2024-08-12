import { Row, Col } from "antd"
import IntroCategory from './IntroCategory'
import IntroSearchBar from './IntroSearchBar'

export default function IntroCenterSearch() {
    return (
        <Row className='main-container intro-align-item'>
          <Col 
            className='intro-category' 
            sm={{ span: 24 }} 
            lg={{ span: 12 }}
            xl={{ span: 12 }}
            xxl={{ span: 12 }}
          >
            <IntroCategory/>
          </Col>
          <Col 
            className='intro-search-bar intro-align-item' 
            xs={{ span: 24 }} 
            sm={{ span: 24 }} 
            lg={{ span:10, offset:2  }}
            xl={{ span:10, offset:2 }}
            xxl={{ span:10, offset:2  }}
          >
            <IntroSearchBar/>
          </Col>
        </Row>
    );
}