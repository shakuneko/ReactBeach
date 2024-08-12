import { useContext,useEffect } from "react";
import { Badge } from "antd";
import { CartIcon } from "./Icon";
import Cookie from "js-cookie"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
export default function CartSummary() {
  const cartItems = useSelector(selectCartItems);

  const count = (cartItems.length > 0) ?
    cartItems.reduce((sum, item) => sum + item.rentqty, 0)
    : 0;
    useEffect(() => {
      Cookie.set("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);
  return (
    <>
       <Link to="/shoppingcart"  >
        <Badge count={count} size={"small"} style={{ color: 'white', backgroundColor: '#FFC72D' }}>
          <CartIcon size={20}/>
        </Badge>
        
      </Link>
      {/* <CartModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      /> */}
    </>
  );
}