  
import { useEffect,useContext } from "react";
import Cookie from "js-cookie"
import { Button, notification } from "antd"
import { ShoppingCartOutlined  } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";

export default function AddToCart({product,rentqty,adultqty,kidqty}) {
  // const { dispatch } = useContext(StoreContext);
  // const { state: { cartItems }} = useContext(StoreContext);
  // const { state: { cartItems, productDetail: { product,rentqty,adultqty,kidqty } }, dispatch } = useContext(StoreContext);
  const dispatch = useDispatch();

  const openNotification = () => {
    notification.open({
      placement: 'bottomRight',
      message: `你的購物車 ` ,
      description:
      `已新增 ${rentqty}艘 ${rentqty > 1?" ":" "}  ${product.rentname}到購物車`,
      icon:<ShoppingCartOutlined style={{ color: '#108ee9' }} />
     
    
      
    });
  }; 
      const addToCart = () => {
        openNotification();
        dispatch(addCartItems({
          id: product.id,
          name: product.rentname,
          category: product.rentcategory,
          image: product.rentCardimg,
          price: product.rentprice,
          rentcount: product.rentcount,
          rentqty,
          adultqty,
          kidqty
        }))
      };

      // useEffect(()=>{
      //   Cookie.set("cartItems", JSON.stringify(cartItems));
      //  }, [cartItems])

      return (
        <Button type="primary" className="Rentproduct-area3-btn" onClick={addToCart}>
          確認租借/預約   
        </Button>
      );
}