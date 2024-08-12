import { Layout, Row, Col,Table, Button, Card, BackTop  } from 'antd';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import IntroList from "../components/IntroList";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import rentRecord from "../json/Account/rentRecord.json";
import dueRecord from "../json/Account/dueRecord.json";
// import introitems from "../json/Intro/introItems.json";
import user from "../json/Account/User.json"
import ProfileCard from "../components/ProfileCard";
import React, { useEffect } from "react";
import Cookie from "js-cookie"
import { logout, selectUserInfo } from "../redux/usersSlice";
import UserInfo from '../components/UserInfo';



const { Header, Content, Footer } = Layout;
const rentcolumns = [
    {
      title: '器具',
      width: '10%',
      dataIndex: 'rentname',
      key: 'rentname',
      fixed: 'left',
      className: 'form-title'
    },
    {
      title: '地點',
      width: '10%',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: '時間',
      dataIndex: 'date',
      key: '1',
      width: '20%',
    },
    {
      title: '教學預約',
      dataIndex: 'wantteach',
      key: '2',
      width: '10%',
    },
    {
      title: '價格',
      dataIndex: 'rentprice',
      key: '3',
      width: '10%',
    },
    {
      title: '完成',
      dataIndex: 'finished',
      key: '4',
      width: '5%',
      flex: 'right',
      className: 'form-title'
    },
  ];

const duecolumns = [
{
    title: '器具',
    width: '10%',
    dataIndex: 'rentname',
    key: 'rentname',
    fixed: 'left',
    className: 'form-title'
},
{
    title: '地點',
    width: '10%',
    dataIndex: 'area',
    key: 'area',
},
{
    title: '應歸還時間時間',
    dataIndex: 'returndate',
    key: 'returndate',
    width: '20%',
},
{
    title: '逾期天數',
    dataIndex: 'duedays',
    key: 'duedays',
    width: '10%',
},
{
    title: '罰金',
    dataIndex: 'fine',
    key: 'fine',
    width: '10%',
},
{
    title: '歸還',
    dataIndex: 'returned',
    key: 'returned',
    width: '5%',
    flex: 'right',
    className: 'form-title'
},
];

function Account() {
    const userInfo = useSelector(selectUserInfo);
    const { username, access_token, user_id ,email} = userInfo;
    console.log(userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        Cookie.remove("userInfo");
        dispatch(logout());
        navigate("/");
      };
      const goUpdateUser = () => {
        navigate("/auth/profile");
      };

      useEffect(() => {
        Cookie.set("userInfo", JSON.stringify(userInfo));
      }, [userInfo]);

  return (
    <Layout className="container main-layout">
      
      <Header className="layout-header header">
        <AppHeader title="Introduction" />
      </Header>
      <Content className="layout-content">

        <div className='main-container'>
        {/* <ProfileCard /> */}
            <div className='account-data-container'>
                <Row gutter={[32, 8]} style={{  justifyContent: "center", alignItems: "center"}}>
                    <Col 
                        sm={{ span: 24 }} 
                        lg={{ span: 6 }}
                        xl={{ span: 6 }}
                        xxl={{ span: 6  }}
                        className='account-btns'
                    >
                        <img
                            className='account-img'
                            src="https://parade.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_700/MTkyOTA5NzAwNTY2OTUxNjMy/netflix-wednesday-addams-tyler-galpin-hunter-doohan.jpg"
                            alt='' 
                        />
                    </Col>
                    <Col 
                        sm={{ span: 24 }} 
                        lg={{ span: 10 }}
                        xl={{ span: 10 }}
                        xxl={{ span: 10 }}
                        className='account-data'
                    >
                        <p className='account-data-name'>{username}</p>
                        <p className='account-data-email'>{email}</p>
                        <div className='account-rent-qty account-row'>
                            <p>租借次數：</p>
                            <p>5</p>
                        </div>
                        <div className='account-due-qty account-row'>
                            <p>逾期次數：</p>
                            <p>0</p>
                        </div>
                    </Col>
                    <Col 
                        sm={{ span: 24 }} 
                        lg={{ span: 6 }}
                        xl={{ span: 6 }}
                        xxl={{ span: 6 }}
                        className='account-btns'
                    >
                        <Button className='account-modify-btn' type="primary" shape="round" size="large" onClick={goUpdateUser}>編輯個人檔案</Button>
                        <Button className='account-log-out-btn' type="primary" shape="round" size="large" onClick={handleLogout}>登出</Button>
                        
                    </Col>
                </Row>
            </div>


            <div className='account-table-container'>
                <p className='account-table-title'>租借器具/預約課程</p>
                <div className='account-appointment'>
                    {user.map(users => (
                        <div style={{backgroundColor: "#F4F6FC"}}>

                        <Card
                        hoverable

                        style={{width:'30vw', marginRight:"10px"}}
                        cover={<img alt={users.rentname} src={users.cover} style={{objectFit: 'cover', height:"15rem", borderRadius:'20px 20px 0 0 ',}} />}
                    >
                        {/* <Link to={`/introitems/${introitem.id}`}></Link> */}
                            <div className='rent-row'>
                                <span className="intro-name">{users.rentname}</span>
                                <h3 className="intro-category-name">{users.area}</h3>
                            </div>    
                            <div  className='qut-row'>
                                <h3 className="qty-word">成人：{users.adultqty}</h3>
                                <h3 className="qty-word">小孩：{users.kidqty}</h3>
                            </div>      
                            <h3 className="qty-word">{users.date}</h3>
                        </Card>
                        </div>
                    ))}

                </div>
                <p className='account-table-title'>租借預約紀錄</p>
                <Table
                    columns={rentcolumns}
                    style={{marginTop:'1rem', marginBottom:'1rem'}}
                    dataSource={rentRecord}
                    bordered
                    scroll={{
                    x: 1000,
                    y: 300,
                    }}
                    rowKey={(rentRecord) => rentRecord.id}
                />
                <div style={{display:'flex', flexDirection:'row', alignItems:'flex-end'}}>
                    <p className='account-table-title'>逾期紀錄</p>
                    <p style={{marginBottom:'5px', fontWeight:'700', color:'#2546BC', marginLeft:'10px', fontSize:'1.2vw'}}>如果超過2個以上器具未歸還並繳納罰金則無法繼續租借器具。</p>
                </div>

                <Table
                    columns={duecolumns}
                    style={{marginTop:'1rem', marginBottom:'1rem'}}
                    dataSource={dueRecord}
                    bordered
                    scroll={{
                    x: 1000,
                    y: 300,
                    }}
                    rowKey={(rentRecord) => rentRecord.id}
                />
            </div>
        </div>
        <BackTop>
            <div className='back-to-top-btn'>TOP</div>
        </BackTop>
      </Content>

      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Account;