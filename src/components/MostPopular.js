import PopularCard from "./PopularCard";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick}>
            <img className='select-right-btn'
                src="/image/next.png"
                alt='' />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick}>
            <img className='select-left-btn'
                src="/image/pre.png"
                alt='' />
        </div>

    );
}

export default function MostPopular({ PopActs }) {
    return (
        <div className="popularbox"
            style={{
                backgroundImage: `url("https://i.imgur.com/D8jYbcq.png")`
            }}>


            <div>
                <div className="popular-title">
                    最受歡迎
                </div>

                <div className="sub-box">

                    <div className="sliderBox">

                        <Slider
                            dots={false}
                            slidesToShow={3}
                            slidesToScroll={3}
                            adaptiveHeight={true}
                            infinite={true}
                            nextArrow={<SampleNextArrow />}
                            prevArrow={<SamplePrevArrow />}
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                                , alignitems: "center"
                            }}
                        >

                            {PopActs.map(Popcard => (
                                <div>
                                    <div>
                                        <PopularCard Popcard={Popcard} />
                                    </div>

                                </div>
                            ))}

                        </Slider>
                    </div>


                </div>

            </div>




        </div>
    )
}