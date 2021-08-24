import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppNavbar from '../AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppFooter from '../AppFooter';
import AddStaffDetail from '../Staff/AddStaffDetail';
import AddPincode from '../pincode/AddPincode';
import AddCoupon from '../Coupon/AddCoupon';
import UpdateRestaurant from '../restaurant/UpdateRestaurant';
import StaffList from '../Staff/StaffList';
import ShowPincode from '../pincode/ShowPincode';
import CouponList from '../Coupon/CouponList';
import AddMenuItem from '../Menu/AddMenuItem';
import MenuItemList from '../Menu/MenuItemList';
import ShowRestaurant from '../restaurant/ShowRestraurant';
import PresentOrders from '../Orders/PresentOrders';
import PastOrders from '../Orders/PastOrders';

const HomePage = (props) => {
    return (
        <>
            <AppNavbar signOut={props.signOut}></AppNavbar>
            <Switch>
                <Route exact path="/add-item" component={AddMenuItem} />
                <Route exact path="/present-orders" component={PresentOrders} />
                <Route exact path="/my-history" component={PastOrders} />
                <Route exact path="/add-coupon" component={AddCoupon} />
                <Route exact path="/add-pincode" component={AddPincode} />
                <Route exact path="/add-info" component={UpdateRestaurant} />
                <Route exact path="/add-staff" component={AddStaffDetail} />
                <Route exact path="/menu" component={MenuItemList} />
                <Route exact path="/coupons" component={CouponList} />
                <Route exact path="/pincode" component={ShowPincode} />
                <Route exact path="/info" component={ShowRestaurant} />
                <Route exact path="/staff" component={StaffList} />
                <Route exact path="/" component={ShowRestaurant} />
            </Switch>
            <AppFooter></AppFooter>
        </>
    )
}

export default HomePage