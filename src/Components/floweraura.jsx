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
        }
    }
    render() {
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
                        <div>
                            <h1 style={{ fontSize: '20px' }} >Chocolate Cake </h1>
                        </div>
                        <div>
                            <span className="priceNumber">
                                <span className="currency"> Rs. </span>
                                <span className="price">599</span>
                            </span>
                        </div>
                        <div className="fiveStar-review">
                            <div className="fiveStar">
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
                                <div>
                                </div>
                            </div>

                        </div>
                    </Card>
                </div>


            </div>
        );
    }
}
export default Floweraura