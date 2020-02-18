import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Icon, Card, Divider } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, } from '@material-ui/core';
import StarRatings from 'react-star-ratings';
import CheckIcon from '@material-ui/icons/Check';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Carousel } from 'react-responsive-carousel';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import cakeData from '../Components/cake.json';
import rateDescData from '../Components/rateDesc.json';
import './flowermain.less';
import { green, grey } from '@material-ui/core/colors';

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
            click: false,
            click1: false,
            click2: false,
            click3: false,
            color:false,
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
            open: !this.state.open,
            color:!this.state.color
        })
    }
    handleIconChange() {
        this.setState({
            click: !this.state.click
        })

    }
    handleIconChange1() {
        this.setState({
            click1: !this.state.click1
        })
    }
    handleIconChange2() {
        this.setState({
            click2: !this.state.click2
        })
    }
    handleIconChange3() {
        this.setState({
            click3: !this.state.click3
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
                                <span className="Price">{this.state.value}</span></b>
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

                                <li style={{borderColor:this.state.color ? 'gray' : 'green'}} onClick={() => this.handleChangeValue(599)} id="2" className="active">0.5 kg</li>
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

                {/* * --------select location design------------  */}

                <div className="deliverLocation">
                    <div className="deliver">
                        <h2 className=" deliverTo">Deliver to</h2>
                        <span className="locationCity">Enter and Select Delivery City</span>
                    </div>
                    <div className="yourArea">
                        <span className="circleI">i</span>
                        <span className="enterArea">Enter your area for hassle free timely delivery.</span>
                    </div>
                </div>

                {/* * --------cake review description design------------  */}

                <div className="review-description">
                    <div className="cake-paln">
                        <h3 className="heading">Product Contains</h3>
                        <ul className="chocoList">
                            <li>Choco Truffle Cake</li>
                        </ul>
                    </div>
                    <div className="cake-paln">
                        <h3 className="heading">Description</h3>
                        <div className="sizeBox">
                            <p className="chocolateParagraph">Indulge in the rich creamy cake overloaded with gooey chocolate.
                                Chocolate base glazed with more melted chocolate,
                                 crowned with Choco-bars and with cherry on top makes it too hard to resist.
                                 This 1/2 kg freshly baked Chocolate Truffle Cake is suitable for celebrating special Birthdays,
                              Anniversaries etc and making them more memorable.</p>
                        </div>
                    </div>
                    <div className="cake-paln">
                        <h3 className="heading">SKU Number</h3>
                        <div className="cakeNumber">CAKE009404</div>
                    </div>
                    <div className="cake-paln-note">
                        <h3 className="heading">Note</h3>
                        <div className="cake-noteBox">
                            The icing, design of the cake may vary from the image depending upon local availability.
                        </div>
                    </div>
                </div>

                {/* * -------- All cake show with price description design------------  */}

                <div className="allProducts">
                    <h3 className="similarProduct">Similar Products</h3>
                    <h5 className="perfect">A perfect way to send smile!</h5>
                    <div className="allContent">
                        <div className="sliderImage">
                            {cakeData.cake.map(key => {
                                //console.log("image", key.image)
                                return (
                                    <div className="pro-slider">
                                        <div className="product-items">
                                            <img src={key.image} style={{ height: '10em' }} />
                                            <span className="title">{key.title}</span>
                                            <b><span className="price">{key.price}</span></b>
                                            <div className="earliest-delivery">
                                                {key.description}
                                                <span className="today">{key.today}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* * -------- review for chocolate design------------  */}

                <div className="reviewChocolate">
                    <div className="product-review">
                        <div className="review-box">
                            <h2 className="reviewFor">Review For
                                <div className="chocolate-cake">Chocolate Cake </div>
                            </h2>
                        </div>
                        <div className="ratingLikes">
                            <div className="rating">
                                <p className="rating-section">4.6 out of 5</p>
                            </div>
                            <div className="likes">
                                <p className="likes-section">93% Recommended</p>
                            </div>
                        </div>
                        <Divider style={{ margin: "0.5em -1em 0em -1em" }} />
                        <div className="review-list">
                            <div className="view-content">
                                {rateDescData.description.map(data => {
                                    return (
                                        <div className="view-list-recommended">
                                            <h3 className="name">
                                                {data.name}
                                                <span className="city">{data.city}</span>
                                            </h3>
                                            <div className="rate-recommented">
                                                <h6 className="rating-review">Rating and Review</h6>
                                                <div className="rating-fiveStar">
                                                    <span ><img src={data.image} className="fill-star" /></span>
                                                    <span ><img src={data.image} className="fill-star" /></span>
                                                    <span ><img src={data.image} className="fill-star" /></span>
                                                    <span ><img src={data.image} className="fill-star" /></span>
                                                    <span ><img src={data.image} className="fill-star" /></span>
                                                </div>
                                                <div className="read-desc">
                                                    <span className="recommended">Recommended</span>

                                                </div>
                                            </div>
                                            <p className="rating-desc">{data.desc}
                                                <span className="read-more">Read  more</span>
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>

                {/* * -------- All quick links design------------  */}

                <div className="allOccasion">
                    <div className="occasionDetails">
                        <h3>Quick Links</h3>
                        {!this.state.click ?
                            (<div className="occasionArrow">
                                <div className="byOccasion">By Occasion</div>
                                <div className="iconDown"> <KeyboardArrowDownIcon onClick={() => this.handleIconChange()} style={{ cursor: 'pointer' }} /> </div>
                            </div>) :
                            (<div>
                                <div className="occasionArrow">
                                    <div className="byOccasion">By Occasion</div>
                                    <div className="iconDown"> <KeyboardArrowUpIcon onClick={() => this.handleIconChange()} style={{ cursor: 'pointer' }} /> </div>
                                </div>
                                <div className="birthday">Birthday</div>
                                <Divider />
                                <div className="birthday">Anniversary</div>
                                <Divider />
                            </div>)}
                        <Divider />

                        {!this.state.click1 ?
                            (<div className="occasionArrow">
                                <div className="byOccasion">Upcoming Celebrations</div>
                                <div className="iconDown"> <KeyboardArrowDownIcon onClick={() => this.handleIconChange1()} style={{ cursor: 'pointer' }} /> </div>
                            </div>) :
                            (<div>
                                <div className="occasionArrow">
                                    <div className="byOccasion">Upcoming Celebrations</div>
                                    <div className="iconDown"> <KeyboardArrowUpIcon onClick={() => this.handleIconChange1()} style={{ cursor: 'pointer' }} /> </div>
                                </div>
                                <div className="birthday">Christmas</div>
                                <Divider />
                                <div className="birthday">New Year</div>
                                <Divider />
                                <div className="birthday">Valentine Day</div>
                                <Divider />
                                <div className="birthday">Womens Day</div>
                                <Divider />
                                <div className="birthday">Holi</div>
                                <Divider />
                                <div className="birthday">Lohri</div>
                                <Divider />

                            </div>)}

                        <Divider />

                        {!this.state.click2 ?
                            (<div className="occasionArrow">
                                <div className="byOccasion">Top Searches</div>
                                <div className="iconDown"> <KeyboardArrowDownIcon onClick={() => this.handleIconChange2()} style={{ cursor: 'pointer' }} /> </div>
                            </div>) :
                            (<div>
                                <div className="occasionArrow">
                                    <div className="byOccasion">Top Searches</div>
                                    <div className="iconDown"> <KeyboardArrowUpIcon onClick={() => this.handleIconChange2()} style={{ cursor: 'pointer' }} /> </div>
                                </div>
                                <div className="birthday">Eggless Cakes</div>
                                <Divider />
                                <div className="birthday">Teddy Bear</div>
                                <Divider />

                            </div>)}

                        <Divider />

                        {!this.state.click3 ?
                            (<div className="occasionArrow">
                                <div className="byOccasion">Cake Top Cities</div>
                                <div className="iconDown"> <KeyboardArrowDownIcon onClick={() => this.handleIconChange3()} style={{ cursor: 'pointer' }} /> </div>
                            </div>) :
                            (<div>
                                <div className="occasionArrow">
                                    <div className="byOccasion">Cake Top Cities</div>
                                    <div className="iconDown"> <KeyboardArrowUpIcon onClick={() => this.handleIconChange3()} style={{ cursor: 'pointer' }} /> </div>
                                </div>
                                <div className="birthday">Cakes to Bangalore</div>
                                <Divider />
                                <div className="birthday">Cakes to Delhi</div>
                                <Divider />
                                <div className="birthday">Cakes to Gurgaon</div>
                                <Divider />
                                <div className="birthday">Cakes to Kolkata</div>
                                <Divider />
                                <div className="birthday">Cakes to Mumbai</div>
                                <Divider />

                            </div>)}

                        <Divider style={{marginBottom:'10px'}} />
                    </div>
                </div>

                {/* * -------- footer design------------  */}

                <div className="footer">
                    <div className="footer-description">
                        <ul className="list">
                            <li>Terms</li>
                            <li className="cancellation">Cancellation</li>
                            <li className="privacy-policy">Privacy-Policy</li>
                        </ul>
                    </div>
                    <Divider />
                    <div className="copyright">Copyright 2020 Floweraura</div>
                    <div className="allRight">All right reserved</div>
                </div>

            </div>
        );
    }
}
export default Floweraura