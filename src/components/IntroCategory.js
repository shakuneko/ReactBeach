import { NavLink } from 'react-router-dom';

export default function IntroCategory() {
    return (
        <div className="intro-category-bar">
            <NavLink to="/Introduction"
                className={(navData) => (navData.isActive ? 'intro-category-items intro-category-items--active' : 'intro-category-items')}>
                <div className='intro-category-item '>#</div>
            </NavLink>
            <NavLink to="/category/penghu"
                className={(navData) => (navData.isActive ? 'intro-category-items intro-category-items--active' : 'intro-category-items')}>
                <img src= "https://i.imgur.com/2U5uAW7.png" className='intro-category-item'/>
            </NavLink>
            <NavLink to="/category/greenIsland"
                className={(navData) => (navData.isActive ? 'intro-category-items intro-category-items--active' : 'intro-category-items')}>
                <img src= "https://i.imgur.com/TSLdnou.png" className='intro-category-item'/>
            </NavLink>
            <NavLink to="/category/little"
                className={(navData) => (navData.isActive ? 'intro-category-items intro-category-items--active' : 'intro-category-items')}>
                <img src= "https://i.imgur.com/G51bg9o.png" className='intro-category-item'/>
            </NavLink>
            <NavLink to="/category/lanyu"
                className={(navData) => (navData.isActive ? 'intro-category-items intro-category-items--active' : 'intro-category-items')}>
                <img src= "https://i.imgur.com/dfCcHTO.png" className='intro-category-item'/>
            </NavLink>
        </div>
    );
}