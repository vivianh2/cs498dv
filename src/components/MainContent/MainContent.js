import React, { Component } from 'react';
import SideFilter from '../SideFilter/SideFilter';

class MainContent extends Component {

    render() {
        return (
        <div className="be-wrapper">
            <SideFilter />
            <div className="container-fluid">
                <div className="be-aside-header">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="be-aside-header-title">Best Prices for You <span className="new-messages">(2 new sales)</span></div>
                    </div>
                    <div className="col-lg-6">
                    <div className="be-aside-header-search">
                        <div className="input-group input-search input-group-sm">
                        <input type="text" placeholder="Search" className="form-control" /><span className="input-group-btn">
                            <button type="button" className="btn btn-secondary"><i className="icon mdi mdi-search" /></button></span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="be-aside-header-filters">
                <div className="be-aside-header-filters-left">
                    <div className="btn-group">
                    <button data-toggle="dropdown" type="button" className="btn btn-secondary dropdown-toggle">Order by <span className="caret" /></button>
                    <div role="menu" className="dropdown-menu"><a href="#" className="dropdown-item">Date</a><a href="#" className="dropdown-item">Price (lower to higher)</a><a href="#" className="dropdown-item">Price (higher to lower)</a><a href="#" className="dropdown-item">Items</a></div>
                    </div>
                    <div className="btn-group">
                    <button type="button" className="btn btn-secondary"><i className="icon mdi mdi-view-list" /></button>
                    <button type="button" className="btn btn-secondary"><i className="icon mdi mdi-view-module" /></button>
                    </div>
                </div>
                <div className="be-aside-header-filters-right"><span className="be-aside-pagination-indicator">1-50 of 253</span>
                    <div className="btn-group be-aside-pagination-nav">
                    <button type="button" className="btn btn-secondary"><i className="mdi mdi-chevron-left" /></button>
                    <button type="button" className="btn btn-secondary"><i className="mdi mdi-chevron-right" /></button>
                    </div>
                </div>
                </div>
                <div className="row main-content">
                <div className="col-xl-6">
                    <div className="be-booking-promo">
                    <div className="be-booking-desc">
                        <h4 className="be-booking-desc-title">Basic</h4><span className="be-booking-desc-details">Lorem ipsum dolor sit amet, Pellen tesque sit amet odio Integer.</span>
                    </div>
                    <div className="be-booking-promo-price">
                        <div className="be-booking-promo-amount"><span className="currency">$</span><span className="price">5</span><span className="frecuency">/mo</span></div><a href="#" className="btn btn-primary be-booking-btn-price">Get Started</a>
                    </div>
                    </div>
                    <div className="be-booking-promo be-booking-promo-success">
                    <div className="be-booking-desc">
                        <h4 className="be-booking-desc-title">Pro</h4><span className="be-booking-desc-details">Lorem ipsum dolor sit amet, Pellen tesque sit amet odio Integer.</span>
                    </div>
                    <div className="be-booking-promo-price">
                        <div className="be-booking-promo-amount"><span className="currency">$</span><span className="price">18</span><span className="frecuency">/mo</span></div><a href="#" className="btn btn-success be-booking-btn-price">Get Started</a>
                    </div>
                    </div>
                    <div className="be-booking-promo be-booking-promo-soldout">
                    <div className="be-booking-desc">
                        <h4 className="be-booking-desc-title">Deluxe</h4><span className="be-booking-desc-details">Lorem ipsum dolor sit amet, Pellen tesque sit amet odio Integer.</span>
                    </div>
                    <div className="be-booking-promo-price">
                        <div className="be-booking-promo-amount"><span className="currency">$</span><span className="price">15</span><span className="frecuency">/mo</span></div>
                    </div><span className="be-soldout-title">Sold Out</span>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="be-booking-promo be-booking-promo-warning">
                    <div className="be-booking-desc">
                        <h4 className="be-booking-desc-title">Premium</h4><span className="be-booking-desc-details">Lorem ipsum dolor sit amet, Pellen tesque sit amet odio Integer.</span>
                    </div>
                    <div className="be-booking-promo-price">
                        <div className="be-booking-promo-amount"><span className="currency">$</span><span className="price">12</span><span className="frecuency">/mo</span></div><a href="#" className="btn btn-warning be-booking-btn-price">Get Started</a>
                    </div>
                    </div>
                    <div className="be-booking-promo be-booking-promo-danger be-booking-promo-big">
                    <div className="be-booking-desc">
                        <h4 className="be-booking-desc-title">Premium</h4><span className="be-booking-desc-details">Lorem ipsum dolor sit amet, Pellen tesque sit amet odio Integer.</span>
                    </div>
                    <div className="be-booking-promo-price">
                        <div className="be-booking-promo-amount"><span className="currency">$</span><span className="price">20</span><span className="frecuency">/mo</span></div><a href="#" className="btn btn-danger be-booking-btn-price">Get Started</a>
                    </div><span className="be-promo-big-title icon mdi mdi-fire" />
                    </div>
                    <div className="be-booking-promo be-booking-promo-primary be-booking-promo-color">
                    <div className="be-booking-desc">
                        <h4 className="be-booking-desc-title">Team</h4><span className="be-booking-desc-details">Lorem ipsum dolor sit amet, Pellen tesque sit amet odio Integer.</span>
                    </div>
                    <div className="be-booking-promo-price">
                        <div className="be-booking-promo-amount"><span className="currency">$</span><span className="price">25</span><span className="frecuency">/mo</span></div><a href="#" className="btn btn-primary btn-outline be-booking-btn-price">Get Started</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        );
    }
}

export default MainContent;
