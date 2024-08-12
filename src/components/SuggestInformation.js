import {Button, Row, Col} from 'antd';
export default function SuggestInformation() {

    

    return (
        <div className='main-container'>
              <Row gutter={[32, 8]} style={{marginBottom:"3rem"}}>
                    <Col 
                        sm={{ span: 10 }} 
                        lg={{ span: 10 }}
                        xl={{ span: 10 }}
                        xxl={{ span: 10  }}
                        style={{display:"flex", alignItems:"center"}}
                    >
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                            <img className='suggestbox-wave-left'
                                src="/image/waveDecoLong_L.png"
                                alt='' />
                            <div className='suggestbox-text'>
                                <div>
                                    <div className="suggestbox-title">
                                        夏日祭玩水囉！
                                    </div>
                                    <div className="suggestbox-subtitle">
                                        你敢挑戰海洋嗎？
                                    </div>
                                </div>
                                <div>
                                    <div className="suggestbox-content">
                                        炎炎夏日就是要消暑，快來澎湖
                                        玩水囉！各式各樣水上活動等你
                                        來挑戰，只要在時間內完成特定
                                        任務即可抽限量大獎～
                                    </div>
                                    <Button className='account-modify-btn' type="primary" shape="round" size="large">看更多</Button>
                                </div>
                            </div>
                        </div>
                        
                    </Col>
                    <Col 
                        sm={{ span: 14 }} 
                        lg={{ span: 14 }}
                        xl={{ span: 14 }}
                        xxl={{ span: 14 }}
                        className="suggestbox-image"
                        style={{display:"flex", alignItems:"center"}}
                    >
                        <img style={{width:"100%", objectFit:"cover", borderRadius:"20px"}}
                        src="/image/Mask1.png"
                        alt='' />
                    </Col>
                </Row>
                <Row gutter={[32, 8]} >
                    <Col 
                        sm={{ span: 14 }} 
                        lg={{ span: 14 }}
                        xl={{ span: 14 }}
                        xxl={{ span: 14 }}
                        className="suggestbox-image"
                        style={{display:"flex", alignItems:"center"}}
                    >
                        <img style={{width:"100%", objectFit:"cover", borderRadius:"20px"}}
                        src="/image/Mask2.png"
                        alt='' />
                    </Col>
                    <Col 
                        sm={{ span: 10 }} 
                        lg={{ span: 10 }}
                        xl={{ span: 10 }}
                        xxl={{ span: 10  }}
                        style={{display:"flex", alignItems:"center"}}
                    >
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>

                            <div className='suggestbox-text'>
                                <div>
                                    <div className="suggestbox-title">
                                        夏日祭玩水囉！
                                    </div>
                                    <div className="suggestbox-subtitle">
                                        你敢挑戰海洋嗎？
                                    </div>
                                </div>
                                <div>
                                    <div className="suggestbox-content">
                                        炎炎夏日就是要消暑，快來澎湖
                                        玩水囉！各式各樣水上活動等你
                                        來挑戰，只要在時間內完成特定
                                        任務即可抽限量大獎～
                                    </div>
                                    <Button className='account-modify-btn' type="primary" shape="round" size="large">看更多</Button>
                                </div>
                            </div>
                            <img className='suggestbox-wave-left'
                                src="/image/waveDecoLong_R.png"
                                alt='' />
                        </div>
                        
                    </Col>

                </Row>           

        </div>
    )
}