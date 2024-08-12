import { Button, Select, Form, Input } from "antd";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, selectUserInfo } from "../redux/usersSlice";
import { useUpdateProfile } from "../react-query";
import { FrownOutlined } from '@ant-design/icons';
const { Option } = Select;
export default function CartInformation() {
   //  const { state: { cartItems }, dispatch } = useContext(StoreContext);
   // const handleCancel = () => toggleModal(!isModalVisible);
   // const [color, setColor] = useState();

   //  useEffect(()=>{
   //     Cookie.set("cartItems", JSON.stringify(cartItems));
   //    }, [cartItems])


   const userInfo = useSelector(selectUserInfo);
   const { username, access_token, user_id,email } = userInfo;
   
   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      Cookie.set("userInfo", JSON.stringify(userInfo));
    }, [userInfo]);

   return (

      <div className="shoppingcart">
         <div className="shopping-container">
            <div className='shopping-pic'>
               <img className='shopping-pic' src="https://imgur.com/lyp0lKY.png" />
            </div>
            <div className="shoppinginfo-content">
               <div className="shoppinginfo-content2">
                  <div className="shoppinginfo-content-left">
                     <Form 
                     initialValues={userInfo}
                     >
                        <Form.Item label="姓名" colon={false}>
                           <Input defaultValue={username} placeholder="購買人姓名" />
                        </Form.Item>
                        <Form.Item label="電話" colon={false}>
                           <Input placeholder="連絡電話"/>
                        </Form.Item>
                        <Form.Item label="E-mail" colon={false}>
                           <Input defaultValue={email} placeholder="連絡信箱"/>
                        </Form.Item>
                        <Form.Item label="付款方式" colon={false}>
                           <div className="shoppinginfo-content-select">
                              <Select>
                                 <Select.Option value="demo">信用卡</Select.Option>
                                 <Select.Option value="demo2">Line Pay</Select.Option>
                                 <Select.Option value="demo3">PayPal</Select.Option>
                              </Select>
                           </div>
                        </Form.Item>
                     </Form>
                  </div>
                  <div className="shoppinginfo-line">
                     <div className="shoppinginfo-line2"></div>
                  </div>
                  <div className="shoppinginfo-content-right">
                     <div className="shoppinginfo-content-rightup">
                        <div className="shoppinginfo-content-word">信用卡</div>
                        <Form.Item label="" colon={false}>
                           <Input placeholder="卡號" />
                        </Form.Item>
                        <div className="shoppinginfo-creditcard">
                           <Form.Item label="" colon={false}>
                              <Input placeholder="mm" />
                           </Form.Item>
                           <div className="shoppinginfo-content-word">/</div>
                           <Form.Item label="" colon={false}>
                              <Input placeholder="yy" />
                           </Form.Item>
                           <Form.Item label="" colon={false}>
                              <Input placeholder="CVV" />
                           </Form.Item>
                        </div>
                     </div>
                     <div className="shoppinginfo-content-rightup">
                        <Link to={"/placeorder"} className="shopping-btn1" >
                           <Button
                              className="shopping-modal-btn-up"  >
                              <span>確認付款</span>
                           </Button>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>

   );
}