import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

const AppFooter = (props) => {
    return (
        <MDBFooter style={{backgroundColor: 'rgb(248,249,250)'}}  className='text-center text-lg-left'>
            <MDBContainer className='p-4'>
                <MDBRow>
                    <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>{props.name}</h5>

                        <p>
                            We a fictional restaurant that cater to a large number of consumers in India. We are present in all metropolitan cities of India such as Delhi, Mumbai, Chennai, Punjab and more!
                        </p>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5>Helpful Links</h5>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <Link to='/add-info' className='text-dark'>
                                    Restaurant
                                </Link>
                            </li>
                            <li>
                                <Link to='/menu' className='text-dark'>
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link to='/coupons' className='text-dark'>
                                    Coupons
                                </Link>
                            </li>
                            <li>
                                <Link to='/pincode' className='text-dark'>
                                    Pincodes
                                </Link>
                            </li>
                            <li>
                                <Link to='/staff' className='text-dark'>
                                    Staff
                                </Link>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()}{' '}
                <a className='text-dark' href='https://mdbootstrap.com/'>
                    MDBootstrap.com
                </a>
            </div>
        </MDBFooter>
    );
}

export default AppFooter;