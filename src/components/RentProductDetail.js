import { Layout,Radio,InputNumber,DatePicker, Space,Select,Button} from 'antd';
import {createRoot} from 'react-dom/client';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import rentdetail from "../json/rentdetail.json";
import rentdetailactivity from "../json/rentdetailactivity.json";
import RentDetailProduct from "./RentDetailProduct";
import RentDetailProduct2 from "./RentDetailProduct2";
import { useDispatch, useSelector } from "react-redux";
import AddToCart from "./AddToCart"
import React, { useState,useEffect,useContext  } from 'react';
const { RangePicker } = DatePicker;
const {Option} = Select;
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick}>
            <img className='select-right-btn2'
                src="/image/next.png"
                alt='' />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick}>
            <img className='select-left-btn2'
                src="/image/pre.png"
                alt='' />
        </div>

    );
}

function RentProductDetail({ product }) {
// const { state: { productDetail: { product, rentqty,adultqty,kidqty} }, dispatch } = useContext(StoreContext);
const dispatch = useDispatch();
    const [isOnTouch, setIsOnTouch] = useState(false);
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    };
    const imageClick = (value) => {
        console.log(value);
        }
    // const onChange2 = (value2) => {
    // console.log('changed', value2);
    // };
    const [rentqty,setRentqty]=useState(product.rentcount> 0 ? 1 : 0);
    const [adultqty,setAdultqty]=useState(product.adultqtycount> 0 ? 1 : 0);
    const [kidqty,setKidqty]=useState(product.kidqtycount> 0 ? 1 : 0);

    
  return (
   
        <div className='RentDetail-content'>
            <div className='RentDetail-area1'>
                <div className='RentDetail-bigpic'>
                    <img src={product.rentimgURL}/>
                </div>
                <div className='RentDetail-smallpic'>
                    <img  src={product.rentpic1} alt=""/>
                    <img  src={product.rentpic2}/>
                    <img  src={product.rentpic3}/>
                </div>
            </div>
            <div className='RentDetail-area2'>
                <div className='RentDetail-word'>
                    <div className='RentDetail-name'>{product.rentname}</div>
                    <div className='RentDetail-category'>{product.rentcategory}</div>
                </div>
                <div className='RentDetail-price'>{product.rentprice}/艘</div>
            </div>
            <div className='RentDetail-area3'>

                    <div className='RentDetail-area3-up'>
                        <div className='RentDetail-area3-left'>
                            <div className='RentDetail-area3-text'>地區</div>
                            <div className='RentDetail-area3-pic'>
                                <img className='RentDetail-area3-pic1' src="https://imgur.com/Cv3GFIj.png" onClick={() => imageClick("小琉球")}/>
                                <img className='RentDetail-area3-pic1' src="https://imgur.com/gK6CyhO.png"/>
                                <img className='RentDetail-area3-pic1' src="https://imgur.com/PtlgR9k.png"/>
                                <img className='RentDetail-area3-pic1' src="https://imgur.com/rBY7utg.png"/>
                            </div>
                            <div className='RentDetail-date'>
                                <div className='RentDetail-area3-text'>日期</div>
                                <Space direction="vertical" size={12}>
                                    <RangePicker />
                                </Space>
                            </div>
                            <div className='RentDetail-num'>
                                <div className='RentDetail-area3-text'>數量</div>
                                <Select
                                defaultValue={rentqty}
                                className="select-rentqty"
                                onChange={val =>setRentqty(val)}
                                // onChange={val =>{
                                //     console.log('Before setRentqty,rentqty=$(rentqty)')
                                //     setRentqty(val)
                                //     console.log('After setRentqty,rentqty=$(rentqty)')
                                // }}
                                >
                                {[...Array(product.rentcount).keys()].map((x)=>(
                                    <Option key={x+1} value={x+1}> 
                                        {x+1}
                                    </Option>

                                ))}    
                                </Select>
                             
                            </div>

                        </div>
                        <div className='RentDetail-area3-right'>
                            <div className='RentDetail-area3-text'>教學預約</div>
                            <div className='RentDetail-area3-text2'>成人+$300，兒童+$100</div>
                            <Radio.Group onChange={onChange} value={value}>
                                <Radio className='RentDetail-area3-text3' value={1}>需要</Radio>
                                <Radio className='RentDetail-area3-text3'value={2}>不需要</Radio>
                            </Radio.Group>
                            <div className='RentDetail-area3-people'>
                                <div className='RentDetail-area3-text3'>成人：</div>
                                <div className='RentDetail-people-box'>
                                <Select
                                defaultValue={adultqty}
                                className="select-rentqty"
                                onChange={val =>setAdultqty(val)}
                                // onChange={val =>{
                                //     console.log('Before setRentqty,adultqty=$(adultqty)')
                                //     setAdultqty(val)
                                //     console.log('After setRentqty,adultqty=$(adultqty)')
                                // }}
                                >
                                {[...Array(product.adultqtycount).keys()].map((x)=>(
                                    <Option key={x} value={x}> 
                                        {x}
                                    </Option>

                                ))}    
                                </Select>
                                    {/* <InputNumber min={0} max={10} defaultValue={0} onChange={onChange2} /> */}
                                </div>
                            </div>
                            <div className='RentDetail-area3-people'>
                                <div className='RentDetail-area3-text3'>兒童：</div>
                                <div className='RentDetail-people-box'>
                                <Select
                                defaultValue={kidqty}
                                className="select-rentqty"
                                onChange={val =>setKidqty(val)}
                                // onChange={val => setProductDetail(dispatch, product.id, val,adultqty,rentqty)}
                                // onChange={val =>{
                                //     console.log('Before setKidqty,kidqty=$(kidqty)')
                                //     setKidqty(val)
                                //     console.log('After setKidqty,kidqty=$(kidqty)')
                                // }}
                                >
                                {[...Array(product.kidqtycount).keys()].map((x)=>(
                                    <Option key={x} value={x}> 
                                        {x}
                                    </Option>

                                ))}    
                                </Select>
                                    {/* <InputNumber min={0} max={10} defaultValue={0} onChange={onChange2} /> */}
                                </div>
                            </div>
                            <div className='RentDetail-area3-text4'>*12歲以下（含）稱為兒童。</div> 
                        </div>
                </div>
                <div className='RentDetail-area3-down'>
                    <div className='RentDetail-area3-text5' >總價：${(product.rentprice*rentqty)+(adultqty*300)+(kidqty*100)}</div>
                    <div>
                        <AddToCart product={product} rentqty={rentqty} adultqty={adultqty} kidqty={kidqty}  />
                        {/* <button class="Rentproduct-area3-btn">
                            確認租借/預約   
                        </button> */}
                    </div>
                    <div className='RentDetail-area3-text6'>＊店家皆開至20:00，請在店家關門前關還器具以免逾期。</div>
                    
                </div>
            </div>
            <div className='RentDetail-area4'> 
                <div className='RentDetail-introduce'>
                    <div className='RentDetail-introduce-pic'>
                        <img alt="" src="https://i.imgur.com/4LmNDsL.png"/>
                    </div>
                    <div className='RentDetail-introduce-test'>介紹</div>
                </div>
                <div className='RentDetail-introduce2'>
                    <div className='RentDetail-introduce-box'>
                        <div className='RentDetail-introduce-word'>器具介紹</div>
                        <div className='RentDetail-line'></div>
                        <div className='RentDetail-appliance-test'>
                        <ul>
                            <li>{product.rentintro1}</li>
                            {product.rentintro2}
                            <li>{product.rentintro3}</li>
                            <li>{product.rentintro4}</li>
                            <li>{product.rentintro5}</li>
                            <li>{product.rentintro6}</li>
                            <li>{product.rentintro7}</li>
                        </ul>
                        </div>
                    </div>
                    <div className='RentDetail-introduce-box'>
                        <div className='RentDetail-introduce-word'>教學介紹</div>
                        <div className='RentDetail-line'></div>
                        <div className='RentDetail-teaching-test'>
                        <ul>
                            <li>{product.teachintro1}</li>
                            {product.teachintro2}
                            <li>{product.teachintro3}</li>
                            {product.teachintro4}
                            <li>{product.teachintro5}</li>
                            <li>{product.teachintro6}</li>
                            <li>{product.teachintro7}</li>
                            <li>{product.teachintro8}</li>
                            <li>{product.teachintro9}</li>
                            <li>{product.teachintro10}</li>
                            <li>{product.teachintro11}</li>
                            {product.teachintro12}
                        </ul>
   
                        </div>
                    </div>
                </div>
            </div>
            <div className='RentDetail-area5'>
                <div className='RentDetail-introduce'>
                    <div className='RentDetail-introduce-pic'>
                        <img src="https://i.imgur.com/4LmNDsL.png"/>
                    </div>
                    <div className='RentDetail-introduce-test'>建議搭配</div>
                </div>
                        <div className="sliderBox">

                            <Slider
                                dots={false}
                                slidesToShow={3}
                                slidesToScroll={3}
                                adaptiveHeight={true}
                                infinite={true}
                                nextArrow={<SampleNextArrow />}
                                prevArrow={<SamplePrevArrow />}
                                style={{width:"100%",
                                display:"flex",
                                justifyContent:"center"
                            ,alignitems:"center"}}
                            >
                             {rentdetail.map((product) => (
                                <div>
                                    <div>
                                        <RentDetailProduct product={product}/>
                                    </div>

                                    </div>
                            ))}
                            </Slider>
                    </div>
            </div>
            <div className='RentDetail-area6'>
                <div className='RentDetail-introduce'>
                    <div className='RentDetail-introduce-pic'>
                        <img src="https://i.imgur.com/4LmNDsL.png"/>
                    </div>
                    <div className='RentDetail-introduce-test'>相關活動介紹</div>
                </div>
                        <div className="sliderBox">

                            <Slider
                                dots={false}
                                slidesToShow={3}
                                slidesToScroll={3}
                                adaptiveHeight={true}
                                infinite={true}
                                nextArrow={<SampleNextArrow />}
                                prevArrow={<SamplePrevArrow />}
                                style={{width:"100%",
                                display:"flex",
                                justifyContent:"center"
                            ,alignitems:"center"}}
                            >
                             {rentdetailactivity.map(introitem => (
                                <div>
                                    <div>
                                        <RentDetailProduct2 introitem={introitem}/>
                                    </div>

                                </div>
                            ))}
                            </Slider>
                    </div>
            </div>
        </div>
    
    
  );
}

export default RentProductDetail;