import { Input, Carousel } from 'antd';
import backgroundData from '../../src/json/HomeBgUrl.json'

const contentStyle = {
    height: '621px',
    marginTop: '0px',
    width: '100%',
    objectFit:"cover",
    lineHeight: '200px',
    textAlign: 'center',
    // background: '#364d79',
};

export default function Searchbox() {
    return (
        <div className="searchbox">

            <div className='nav-background'>

                <Carousel autoplay
                    autoplaySpeed={3500}
                    effect="fade"
                    dots={false}
                >
                    <div style={contentStyle}>
                        <img
                            className="nav-background-image"
                            src= "https://i.imgur.com/8LuZTnl.jpg"
                            alt=''
                        />
                    </div>


                    <div style={contentStyle}>
                        <img
                            className="nav-background-image"
                            src="https://i.imgur.com/bFTQQnF.png"
                            alt=''
                        />
                    </div>


                </Carousel>
            </div>
            <div className="search-content">
                <div className='sub-title'>就醬游！海上活動玩透透~</div>
                <div className="search-input">

                    <Input className="search-content-input" size="large"
                        prefix={<img style={{ width: '4.2vmin', height: '4.2vmin' }}
                            src="/image/searchbtn.png"
                            alt='' />}
                        placeholder="something">
                    </Input>
                    <img className='search-background'
                        src="/image/Rectangle38.png"
                        alt='' />
                </div>
            </div>

        </div>
    )
}