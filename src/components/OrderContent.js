import {  Button, Select } from "antd";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie"
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import { FrownOutlined } from '@ant-design/icons';
const { Option } = Select;
export default function OrderContent() {
    const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);
    // const { state: { cartItems }, dispatch } = useContext(StoreContext);
    // const handleCancel = () => toggleModal(!isModalVisible);
    // const [color, setColor] = useState();
    const getTotalPrice = () => {
       return (cartItems.length > 0) ?
          cartItems.reduce((sum, item) => sum + item.price * item.rentqty, 0)
          : 0;
    }
 
    useEffect(()=>{
       Cookie.set("cartItems", JSON.stringify(cartItems));
      }, [cartItems])
    return (
        <div className="shoppingcart">
            <div className="shopping-container">
                <div className='shopping-pic'>
                    <img className='shopping-pic' src="https://imgur.com/6EwaY3M.png"/>
                </div>
                <div  className="ordercontent-container">
                    <div  className="ordercontent-container-left">
                        <div className="ordercontent-title">
                            <h4 className="ordercontent-title">產品</h4>
                        </div>
                        {cartItems.length === 0 ? (
                            <div>Cart is empty</div>
                            ) : (
                        cartItems.map(item => (
                        <div className="ordercontent-container1">
                            <div className="ordercontent-container1-content">
                            <li key={item.id} className="ordercontent">
                                
                                <Link to={`/product/${item.id}`} className="shopping-item-image">
                                    <div  onClick={()=>{
                                    // setProductDetail(dispatch, item.id, item.rentqty,);
                                    // handleCancel();
                                    }}>
                                        <div className="ordercontent-content">
                                                <img className="shopping-item-image2" src={item.image} alt={item.name} />
                                                <div className="ordercontent-item">
                                                <div className="ordercontent-category">{item.category}</div>
                                                    <div className="ordercontent-name">{item.name}</div>
                                                    <div className="ordercontent-word">澎湖</div>
                                                    <div className="ordercontent-word">2022/12/11-2022/12/13</div>
                                                    <div className="ordercontent-word">課程預約：</div>
                                                    <div className="ordercontent-word">成人{item.adultqty}人， 小孩：{item.kidqty}人</div>
                                                    <div className="ordercontent-total">
                                                        <div className="ordercontent-word">數量：{item.rentqty}</div>
                                                        <div className="ordercontent-price">${getTotalPrice()}</div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                                <div className='ordercontent-line'>
                                                    <div className='ordercontent-line2'></div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </div>
                            </div>
                            
                            ))
                            )}
                            </div>
                            <div  className="ordercontent-container-right">
                                <div className="ordercontent-content2">
                                <h4 className="ordercontent-title2">資料確認</h4>
                                <div className="ordercontent-container2-content">
                                    <div>
                                        <div className="ordercontent-word2">姓名：</div>
                                        <div className="ordercontent-word2">電話：</div>
                                        <div className="ordercontent-word2">付款方式：信用卡</div>
                                    </div>
                                    <div className="ordercontent-word3">~祝您有個愉快的旅程~</div>
                                    <div className='ordercontent-line'>
                                        <div className='ordercontent-line3'></div>
                                    </div>
                                <div className="ordercontent-total">
                                        <div className="shopping-total-price-wrap2">
                                            <div className="ordercontent-word3">總金額 :</div>
                                        </div>
                                        <div className="ordercontent-word2">${getTotalPrice()}</div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                <Link to={"/"} className="shopping-btn2">
                    <Button
                        className="ordercontent-btn">
                        <span>完成</span>
                    </Button>
                </Link>
            </div>
        </div>
    );
}