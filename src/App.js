import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from "react-redux";

import './App.css';
import Home from './pages/Home'
import Introduction from './pages/Introduction'
import RentProduct from './pages/RentProduct'

import RentDetail from './pages/RentDetail'
import ShoppingCart from './pages/ShoppingCart'
import ShoppingInformation from './pages/ShoppingInformation'
import PlaceOrder from './pages/PlaceOrder'
import RentDetail2 from './components/RentProductDetail'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroPenghu from './pages/IntroAreas/IntroPenghu'
import IntroGreenIslannd from './pages/IntroAreas/IntroGreenIsland'
import IntroLanyu from './pages/IntroAreas/IntroLanyu'
import IntroLittle from './pages/IntroAreas/IntroLittle'

import Surf from './pages/Rent/Surf'
import Sup from './pages/Rent/Sup'
import Canoe from './pages/Rent/Canoe'
import Dive from './pages/Rent/Dive'
import Activityset from './pages/Rent/Activityset'
import Other from './pages/Rent/Other'

import store from './redux/store';

import Login from './pages/Login'
import Register from './pages/Register'

import Userinfo from "./components/UserInfo"
import Profile from './pages/Profile'
import Account from './pages/Account'

import IntroductionCard from './pages/IntroductionCard'

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:suggestId" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/rentproduct" element={<RentProduct />} />

            <Route path="intro">
              <Route path="id/:introitemId" element={<IntroductionCard />} />
            </Route>

            <Route path="/rentdetail" element={<RentDetail />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/shoppinginformation" element={<ShoppingInformation />} />
            <Route path="/placeorder" element={<PlaceOrder />} />

            <Route path="products">
              <Route path="id/:productId" element={<RentDetail />} />
            </Route>
            <Route path="products2">
              <Route path="id/:productId" element={<RentDetail2 />} />
            </Route>

            {
              /*<Route path="/category/greenIsland" element={<IntroGreenIslannd />} />
              <Route path="/category/lanyu" element={<IntroLanyu />} />
              <Route path="/category/penghu" element={<IntroPenghu />} />
              <Route path="/category/little" element={<IntroLittle />} />*/
            }

            <Route path="/category/:introcategory" element={<Introduction />} />

            <Route path="/rentproduct/:rentcategory" element={<RentProduct />} />

            <Route path="auth">
              <Route path="userinfo" element={<Userinfo />} />
              <Route path="account" element={<Account />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="profile" element={<Profile />} />
            </Route>


          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>

  );
}

export default App;
