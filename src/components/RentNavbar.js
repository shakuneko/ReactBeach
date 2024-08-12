import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

export default function RentNavbar({navCtrol}) {
    return (
        <Menu className={`nav ${navCtrol?"navbar_hi":"navbar_gone"}`}
            mode="vertical"
        >
            <Menu.Item className='nav_title' key="/all"><NavLink to='/RentProduct'>全部</NavLink></Menu.Item>
            <Menu.Item className='nav_title' key="/surf"><NavLink to='/rentproduct/surf'>衝浪</NavLink></Menu.Item>
            <Menu.Item className='nav_title' key="/sup"><NavLink to='/rentproduct/sup'>SUP立槳</NavLink></Menu.Item>
            <Menu.Item className='nav_title' key="/canoe"><NavLink to='/rentproduct/canoe'>獨木舟</NavLink></Menu.Item>
            <Menu.Item className='nav_title' key="/dive"><NavLink to='/rentproduct/dive'>浮潛/深潛</NavLink></Menu.Item>
            <Menu.Item className='nav_title' key="/activityset"><NavLink to='/rentproduct/activityset'>活動套組</NavLink></Menu.Item>
            <Menu.Item className='nav_title' key="/other"><NavLink to='/rentproduct/other'>其他</NavLink></Menu.Item>
        </Menu>
    );
}