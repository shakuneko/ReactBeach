import {  Button, Select } from "antd";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import { addCartItems, removeCartItems } from "../redux/cartSlice";
import Cookie from "js-cookie"
import { FrownOutlined } from '@ant-design/icons';
const { Option } = Select;
export default function CartContent() {
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);
   //  const { state: { cartItems }, dispatch } = useContext(StoreContext);
    // const handleCancel = () => toggleModal(!isModalVisible);
    // const [color, setColor] = useState();
    const getTotalPrice = () => {
       return (cartItems.length > 0) ?
          cartItems.reduce((sum, item) => sum + item.price * item.rentqty+item.adultqty*300+item.kidqty*100, 0)
          : 0;
    }
 
    useEffect(()=>{
       Cookie.set("cartItems", JSON.stringify(cartItems));
      }, [cartItems])
    return (
        <div className="shoppingcart">
            <div className="shopping-container">
                <div className='shopping-pic'>
                    <img className='shopping-pic' src="https://imgur.com/X9sbZuz.png"/>
                </div>
                <div  className="shopping-content">
                    <div className="shopping-item-title">
                    <h4 className="shopping-item-text">產品</h4>
                    </div>
                    <div className="shopping-item-title2">
                            <p className="shopping-item-text">地區</p>
                            <p className="shopping-item-text">租借時間</p>
                            <p className="shopping-item-text">數量</p>
                            <p className="shopping-item-text">價格</p>
                            <p className="shopping-item-text">預約課程</p>
                    </div>
               </div>
               <div className="shopping-item-title-line">
                <div className="shopping-item-title-line2"></div>
               </div>
          
            

            </div>
            {cartItems.length === 0 ? (
               <div className="noproduct" >
                  <div className="noproduct2">
                     <div className="noproduct-icon"><FrownOutlined  style={{ fontSize: '72px', color: '#426393' }} /></div>
                     <div className="noproduct-word">~購物車還沒有東西喔~</div>
                  </div>
               </div>               
            ) : (
            cartItems.map(item => (
               <div className="shopping-container1">
                <div className="shopping-container1-content">
                  <li key={item.id} className="shopping-item">
                     
                     <Link to={`/products/id/${item.id}`} className="shopping-item-image">
                        <div  onClick={()=>{
                           // setProductDetail(dispatch, item.id, item.rentqty);
                           // handleCancel();
                        }}>
                            <div className="shopping-item-content">
                                <img className="shopping-item-image2" src={item.image} alt={item.name} />
                                <div className="shopping-name">
                                    <h5 className="shopping-item-name">{item.name}</h5>
                                    <div className="shopping-item-category">{item.category}</div>
                                </div>
                             </div>
                        </div>
                     </Link>
                     
                     <div className="shopping-item-content2">
                       
                           <div className="shopping-content2">
                           <div className="shopping-content-area">
                                <p className="shopping-content-word">澎湖</p>
                           </div>
                           <div className="shopping-content-time">
                                <div className="shopping-content-word">2022/12/11</div>
                                <div>｜</div>
                                <div className="shopping-content-word">2022/12/13</div>
                           </div>
                              <div  className="shopping-rentqty">
                                 <div className="product-qty ">
                                       <Select
                                          defaultValue={item.rentqty}
                                          value={item.rentqty}
                                          className="shopping-rentqty"
                                          onChange={(rentqty) =>  dispatch(addCartItems({
                                             id:item.id,
                                             name:item.rentname,
                                             image: item.rentimage,
                                             price:item.rentprice,
                                             rentcount: item.rentcount,
                                             rentqty,
                                        
                                           }))}
                                       >
                                          {[...Array(item.rentcount).keys()].map((x) => (
                                             <Option key={x + 1} value={x + 1}>
                                                {x + 1}
                                             </Option>
                                          ))}
                                       </Select>
                                 </div>
                              </div>
                              <div className="shopping-content-price">

                                 <div className="shopping-price shopping-content-word">
                                    ${item.price * item.rentqty}
                                 </div>
                              </div>
                              <div className="shopping-content-class">
                                <p className="shopping-content-word">成人：{item.adultqty}</p>
                                <p className="shopping-content-word">小孩：{item.kidqty}</p>
                            </div>
                           
                              <div className="shopping-item-end">
                                 <div className="shopping-item-delete" onClick={() => dispatch(removeCartItems(item.id))}>
                                    <img className="shopping-item-delete-pic" src=" https://imgur.com/FKr7X2N.png"/>
                                 </div>
                              </div>
                           </div>
                     </div>
                  </li>
                  <div className='shopping-item-line'>
                        <div className='shopping-item-line2'></div>
                     </div>
                 
                </div>
               </div>
               
             ))
            )}
             <div className="shopping-container2">
            <div className="shopping-container2-content">
               <div className="shopping-total">
                  <div className="shopping-total-price-wrap">
                     <div className="shopping-total-price-wrap2">
                        <p className="shopping-total-word">總計 :</p>
                     </div>
                     <div className="shopping-total-price">${getTotalPrice()}</div>
                  </div>
                  <div className="shopping-btn">
                     <Link to={"/shoppinginformation"} className="shopping-btn1" >
                        <Button 
                           className="shopping-modal-btn-up"  > 
                           <span>結帳</span>
                        </Button>
                     </Link>
                     <Link to={"/RentProduct"} className="shopping-btn2">
                        <Button
                           className="shopping-modal-btn-down">
                           <span>繼續購物</span>
                        </Button>
                     </Link>

                  </div>
               </div>
            </div>
            </div>

        </div>
    );
}