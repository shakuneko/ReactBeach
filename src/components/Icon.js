import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
export function CartIcon() {
  return (
    <div className='header-right-2'>
    <FontAwesomeIcon icon={faCartShopping} className='header-right-icon2'/>
    </div>
  //  <img alt="" className="header-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-cart.png"/>
  );
}