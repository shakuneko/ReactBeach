import { Row, Col } from "antd";

export default function Footer() {
    return (
        <footer className="footer"
        style={{ 
            backgroundImage: `url("https://i.imgur.com/Nwj7Aik.png")`,
          }}>
            <Row className='main-container' style={{marginBottom:'3rem'}}>
                <Col 
                    span={12}
                    >
                    <p
                        className="footer-name">
                        島遊
                    </p>
                    <p
                        className="footer-description">
                        COPYRIGHT © 2022 XXX All rights reserved.
                    </p>
                </Col>
                <Col 
                    span={12}
                    className="footer-info-right"
                >
                    <div className="footer-social-btn-icon fb"></div>
                    <div className="footer-social-btn-icon line"></div>
                    <div className="footer-social-btn-icon ins"></div>
                </Col>
            </Row>
        </footer>
    );
}