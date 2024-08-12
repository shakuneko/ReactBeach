import { NavLink } from 'react-router-dom';
// import { Link } from "react-router-dom"
import { Row, Col } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { selectUserInfo } from "../redux/usersSlice";
import { useSelector } from "react-redux";
import CartSummary from './CartSummary';

export default function NavBarHome() {
    const navigate = useNavigate();
    const userInfo = useSelector(selectUserInfo);
    const goToProfile = () => {
        if (!userInfo)
            navigate("/auth/login?redirect=/auth/account");
        else
            navigate("/auth/account");
    };

    return (
        <div className="nav-bar">
            <Row className='main-container'>
                <Col
                    sm={{ span: 14, offset: 5 }}
                    lg={{ span: 14, offset: 5 }}
                    xl={{ span: 10, offset: 7 }}
                    xxl={{ span: 10, offset: 7 }}
                >
                    <div className='header-mid-home'>
                        <NavLink to="/RentProduct"
                            className={(navData) => (navData.isActive ? 'nav-item2-home nav-item--active2-home' : 'nav-item2-home')}
                            style={{ textDecoration: 'none' }}>
                            租借器具
                        </NavLink>
                        <NavLink to="/"
                            className={(navData) => (navData.isActive ? 'nav-title-item2-home nav-title-item--active2-home' : 'nav-title-item2-home')}
                            style={{ textDecoration: 'none' }}>
                            <div className='header-title-text2-home'>島遊</div>
                        </NavLink>
                        <NavLink to="/Introduction"
                            className={(navData) => (navData.isActive ? 'nav-item2 nav-item--active2-home' : 'nav-item2-home')}
                            style={{ textDecoration: 'none' }}>
                            活動介紹
                        </NavLink>
                    </div>

                </Col>
                <Col
                    sm={{ span: 5 }}
                    lg={{ span: 5 }}
                    xl={{ span: 7 }}
                    xxl={{ span: 7 }}
                >
                    <div className='header-right-2-home'>
                        {/*<CartSummary/>*/}
                        <NavLink to="/"
                            className={(navData) => (navData.isActive ? 'header-right-icon2-home header-right-icon--active2-home' : 'header-right-icon2-home')}>
                            <FontAwesomeIcon icon={faCartShopping} className='header-right-icon2-home' />
                        </NavLink>

                        <nav
                            onClick={goToProfile}
                            className={(navData) => (navData.isActive ? 'header-right-icon2-home header-right-icon--active2-home' : 'header-right-icon2-home')}>
                            <FontAwesomeIcon icon={faUser} className='header-right-icon2-home' />
                        </nav>
                    </div>
                </Col>
            </Row>
            {/*
             <div className='header-btn-left'>

            </div>
 
            <div className='header-mid'>

                <NavLink to="/RentProduct"
                    className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}
                    style={{ textDecoration: 'none' }}>
                    租借器具
                </NavLink>
                <div className='header-title'>
                    <NavLink to="/"
                        className={(navData) => (navData.isActive ? 'nav-title-item nav-title-item--active' : 'nav-title-item')}
                        style={{ textDecoration: 'none' }}>
                        <div className='header-title-text'>島遊</div>
                    </NavLink>
                </div>
                <NavLink to="/Introduction"
                    className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}
                    style={{ textDecoration: 'none' }}>
                    活動介紹
                </NavLink>
            </div>
            <div className="header-btn-right">
                <Button className="header-btn-cart">
                    <Link to={'cart'}>
                        <img
                            className="header-btn-icon-cart"
                            src="/image/cart.png"
                            alt=''
                        />
                    </Link>
                </Button>

                <Button className="header-btn-login">
                    <Link to={'Login'}>
                        <img
                            className="header-btn-icon-login"
                            src="/image/login.png"
                            alt=''
                        />

                        <div className="header-btn-name"></div>
                    </Link>
                </Button>

            </div> */}


        </div>
    );
}