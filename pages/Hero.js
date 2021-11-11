import React, { Component } from 'react'
// import { clientUrl } from '../../config/clienturl';
// import ReadArrowImg from './hero-curved-arrow.png'
// // import heroImg from './Hero Desktop@2x.png'
// import Navbar from '../Navbar/Navbar'
// import ResponsiveModalNavbar from '../ResponsiveNavbar/ResponsiveModalNavbar';
// import ReadArrowImg from '../../assets/Hero image/hero-curved-arrow.png'
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
//     Redirect, withRouter
// } from "react-router-dom";
// import styles from '../styles/Hero.css'

class Hero extends Component {
    constructor(props) {
        super(props)
    }
    state = { width: 0, height: 0, path: null };
    // componentDidMount() {
    //    this.setState({path:this.props.location.pathname})
    //     this.getDimensions(); 
      
    //     //add dimensions listener for window resizing
    //     window.addEventListener('resize', this.getDimensions);
    // }

    // //remove listener on page exit
    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.getDimensions);
    // }

    // //actually set the state to the window dimensions
    // getDimensions = () => {
    //     this.setState({ width: window.innerWidth, height: window.innerHeight });
    //   }
    render() {


        return (
            <div className="not-sticky">
                {/* <div style={{backgroundColor:'red'}}>hello</div> */}

                <div className='hero-container' >
                    {/* {
                        this.state.width < 767 ? <div>
                            <div style={{ position: 'absolute', width: '100%' }}>
                                <ResponsiveModalNavbar />
                            </div>
                        </div> : <div>
                            <div style={{ position: 'absolute', width: '100%' }}>
                                <Navbar />
                            </div>
                        </div>
                    } */}
                    <div className='hero-background'>

                        <div className='hero-hero-img'>
                            {/* <img src={heroImg} alt="error ro" className='hero-img-stylings' ></img> */}
                        </div>
                        <div className='hero-right-side-container'>
                            <div className='hero-right-side-content'>
                                <h1 className='hero-title'>LEARN SUDARSHAN KRIYA, THE WORLD'S MOST POWERFUL BREATHING TECHNIQUE</h1>
                                <h1 className='hero-heading'>Online Meditation <br></br> & Breath Workshop</h1>
                                <div className='hero-mobile-heading'>Online Meditation  & Breath Workshop</div>


                                <p className='hero-paragraph-stylings'>Join <span style={{ fontWeight: 'bold' }}>45 million people</span> across <span style={{ fontWeight: 'bold' }}>156 countries</span> who have <br></br>benefited from this unique 4-day-workshop (2 hours/day)</p>
                                {/* <p className='hero-paragraph-mobile'>Join <span style={{fontWeight:'bold'}}>45 million people</span> across <span style={{fontWeight:'bold'}}>156 countries</span> who have benefited from this unique 4-day-workshop (2 hours/day)</p> */}

                                <div className='hero-paragraph-mobile'>Join <span style={{ fontWeight: 'bold' }}>45 million people</span> across </div>
                                <div className='hero-paragraph-mobile'><span style={{ fontWeight: 'bold' }}>156 countries</span> who have benefited from this</div>
                                <div className='hero-paragraph-mobile'>unique 4-day-workshop (2 hours/day)</div>
                                {/* <div className='hero-paragraph-mobile'>(2 hours/day)</div> */}

                                <div className='hero-lists'>
                                    <div className="hero-list-items">
                                        • Boost immunity
                                    </div>
                                    <div className="hero-list-items">
                                        <span className='margin-for-bullet'>•</span> Remove Stress
                                    </div>
                                </div>
                                <div className='hero-lists'>
                                    <div className="hero-list-items">
                                        • Improve relationships
                                    </div>
                                    <div className="hero-list-items">
                                        <span className='margin-for-bullet'>•</span> Live with joy & purpose
                                    </div>
                                </div>
                                <div className='hero-cost'>For just Rs. 2,000*</div>
                                <div className='hero-sign-up'>
                                    <div><a href={'#'}> <button className={this.state.path === '/version-a' ? 'hero-version-a-sign-up-button' : 'hero-sign-up-button'}><div  className="hero-move-up-text-mobile">Sign me up!</div></button></a></div>
                                    <div className='hero-arrow'>
                                        {/* <img src={ReadArrowImg} className='arrow-stylings'></img> */}
                                    </div>
                                    <div className='hero-about-seats'>Seats filling fast. Book yours today!</div>
                                </div>
                                <div >
                                    {/* <center> */}
                                        <p className='hero-about-contribution'>*Your contribution benefits you & a host of social projects of the Art of Living</p>
        <center>
        <p className='hero-about-contribution-mobile'>*Your contribution benefits you & a host of social projects of the Art of Living</p>

            </center>                            
                                    {/* </center> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hero;