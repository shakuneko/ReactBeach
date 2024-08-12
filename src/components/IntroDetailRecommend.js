import Slider from "react-slick";
import Introitem from "./IntroItem"

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick}>
            <img className='intro-select-right-btn'
                src="/image/next.png"
                alt='' />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick}>
            <img className='intro-select-left-btn'
                src="/image/pre.png"
                alt='' />
        </div>

    );
}

export default function MostPopular({ all }) {
    return (
        
        <div className="recommendbox">
            <div className="sub-box">
                <div className="sliderBox">
                    <Slider
                        dots={false}
                        slidesToShow={3}
                        slidesToScroll={3}
                        // adaptiveHeight={true}
                        infinite={true}
                        nextArrow={<SampleNextArrow />}
                        prevArrow={<SamplePrevArrow />}
                        style={{width:"100%",
                        display:"flex",
                        height:"100%",
                        justifyContent:"center",
                        alignitems:"center"}}
                    >

                {all.map(a => (
                 
                          
                 <Introitem Popcard={a} />
                       

                        ))}

                    </Slider>
                </div>
            </div>
        </div>
    )
}