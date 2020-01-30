import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Icon, Card } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, } from '@material-ui/core';
import StarRatings from 'react-star-ratings';
import CheckIcon from '@material-ui/icons/Check';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Carousel } from 'react-responsive-carousel';
import './flowermain.less';

const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "white"
            }
        },
        MuiToolbar: {
            gutters: {
                paddingLeft: "0px",
                paddingRight: "0px"
            }
        },
    }
})

class Floweraura extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "599",
            open: false,
            selectedDate: ''
        }
    }
    handleDateChange(date) {
        this.setState({
            setSelectedDate: date
        })
    }
    handleChangeValue(valueCake) {
        this.setState({
            value: valueCake,
            open: !this.state.open
        })
    }
    render() {
        //let colorWeight = this.state.open ? () : ()
        return (
            <div className="main-floweraura">

                {/* * --------header design------------  */}

                <MuiThemeProvider theme={theme}>
                    <AppBar position="static">
                        <Toolbar>
                            <div className="header">
                                <div className="menuSearch">
                                    <Icon >
                                        <MenuIcon className="Icon" />
                                    </Icon>
                                    <Icon >
                                        <SearchIcon className="Icon" style={{ marginTop: '2px', marginLeft: '5px' }} />
                                    </Icon>
                                </div>
                                <div className="imageFloweraura">
                                    <img src="https://www.floweraura.com/sites/default/files/ssr/static/media/logo.28202f91.svg" className="imageFlower" />
                                </div>
                                <div className="twoIconLast">
                                    <Icon>
                                        <ShoppingCartIcon className="Icon" />
                                    </Icon>
                                    <Icon >
                                        <MoreIcon className="Icon" />
                                    </Icon>
                                </div>
                            </div>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>

                {/* * --------Image and Chocklate cake review design------------  */}

                <div className="image-gallery">
                    <div>
                        <img src="https://img.floweraura.com/sites/default/files/choco-truffle-half-kg-cake-A.jpg" className="cake" />
                    </div>
                    {/* <div>
                            <img src="https://img.floweraura.com/sites/default/files/choco-truffle-half-kg-cake-A.jpg" />
                        </div> */}

                    <Card>
                        <div className="chocolate">
                            <h1 style={{ fontSize: '20px' }} >Chocolate Cake </h1>
                        </div>
                        <div className="priceNumber">
                            <b><span className="currency"> Rs. </span>
                                <span className="price">{this.state.value}</span></b>
                        </div>
                        <div class="star-rating">
                            <StarRatings
                                rating={5}
                                starRatedColor="#f4d03f"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="0.5px"
                                name='rating'
                            />
                            <div className="review">
                                <a className="totalReview">216 Review</a>
                            </div>
                        </div>
                        <div className="allWeight">
                            <div>
                                <h6 className="select-weight">Select Weight</h6>
                            </div >
                            <ul className="cake-weight" type="none">

                                <li onClick={() => this.handleChangeValue(599)} id="2" className="active">0.5 kg</li>
                                <li onClick={() => this.handleChangeValue(1099)} id="3" className="weight-normal">1 kg</li>
                                <li onClick={() => this.handleChangeValue(1999)} id="4" className="weight-normal">2 kg</li>
                                <li onClick={() => this.handleChangeValue(2999)} id="5" className="weight-normal">3 kg</li>
                                <li onClick={() => this.handleChangeValue(3999)} id="6" className="weight-normal">4 kg</li>
                            </ul>
                        </div>
                        <form className="addForm">
                            <div className="form-item">
                                <label className="label">Message on cake</label>
                                <input className="input-design" type="text" placeholder="Message on cake" maxLength="20" size="60" autoComplete="off"></input>
                            </div>
                            <div className="description">
                                <span className="limitCharacters">
                                    Maximum limit :- 20 characters
                                </span>
                            </div>
                            <div className="checkboxPrice">
                                <div className="egglessIcon">
                                    <span className="checkBox">
                                        <CheckIcon className="circle" style={{ width: '19px', height: '19px' }} />
                                    </span>
                                    <span className="makeEggles">
                                        <label className="label-checkbox">
                                            Make it eggless @ Rs. 50
                                </label>
                                    </span>
                                    <span className="dotIcon">
                                        <FiberManualRecordIcon className="circle" style={{ width: '14px', height: '14px' }} />
                                    </span>
                                </div>
                            </div>
                        </form>
                    </Card>
                </div>

                {/* * --------select Date design------------  */}

                <div className="selectDate-input">
                    <form>
                        <div className="search-selected">
                            <h5 className="search-select">Select Delivery Date</h5>
                        </div>
                        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
                        <div className="serach-inputBox">
                            <input className="searh-input" type="text" value="" placeholder="MM / dd / yyyy" ></input>
                            <em className="showdateIcon">
                                <img src="https://www.floweraura.com/sites/default/files/ssr/static/media/calender.40cab376.svg" />
                            </em>
                        </div>
                        {/* </MuiPickersUtilsProvider> */}
                    </form>
                </div>
                <div></div>
            </div>
        );
    }
}
export default Floweraura