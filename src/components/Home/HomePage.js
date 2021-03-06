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
import AddCategory from '../category/AddCategory';
import ShowCategory from '../category/ShowCategory';

const HomePage = (props) => {
    return (
        <>
            <AppNavbar name={props.name} signOut={props.signOut}></AppNavbar>
            <main style={{marginTop: "1rem", marginBottom: "1rem", minHeight: "80vh"}}>
                <Switch>
                    <Route exact path="/add-category" component={AddCategory} />
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
                    <Route exact path="/categories" component={ShowCategory} />
                    <Route exact path="/" component={ShowRestaurant} />
                </Switch>
            </main>
            <AppFooter name={props.name}></AppFooter>
        </>
    )
}

export default HomePage