import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import heroimage from '../Access/hero-img.png';
import stockchecking from '../Access/stock-checking.png';
import loading from '../Access/loading.png';
import aircargo from '../Access/air-cargo.png';

function Home() {
    const [selectedDate, setSelectedDate] = React.useState(null);

    return (
        <div className="home-page">
            <section id="hero-section">
                <div className="navbar">
                    <div className="logo">
                        <h1>Cargo</h1>
                    </div>
                    <div className="navigations">
                        <ul>
                            <li ><Link className="btn-01" to="/">HOME</Link></li>
                            <li><Link to="/pages">PAGES</Link></li>
                            <li><Link to="/tracking">TRACKING</Link></li>
                            <li><Link to="/services">SERVICES</Link></li>
                            <li><Link to="/blog">BLOG</Link></li>
                        </ul>
                        <button className="btn-quote">GET A QUOTE</button>
                        <button className="btn-sign-in">SIGN IN</button>
                    </div>
                </div>
                <div class="content">
                    <div class="conten-text">
                        <p class="logistic">LOGISTIC</p>
                        <p class="best-shpping">Best Shipping</p>
                        <p class="partner">Partner</p>
                        <p class="description">Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maecenas. molestie lobortis posuere maecenas. Eget sapien, gravida nequi.</p>
                        <button className="btn-quote">DISCOVER MORE</button>
                    </div>
                    <div class="conten-img">
                        <img src={heroimage} alt="Background" />
                    </div>
                </div>
            </section>
            <section id="welcome-section">
                <div class="img-content">
                    <img class="stock-checking" src={stockchecking} alt="Background" />
                    <img class="loading" src={loading} alt="Background" />
                </div>
                <div class="text-content">
                    <p class="text-01">TransMax Logistics</p>
                    <p class="text-02">Around <span>the World</span></p>
                    <p class="text-03">Transmax is the world's driving Worldwide coordinations supplyer -- we upload industry and the worldwidetrade of merchandise through land transport</p>
                    <p class="text-04">Our worth added administrations guarantee the progression of products proceeds consistently and supply chains learn and streamlined progress</p>
                    <div class="text-button">
                        <button className="more-about-us">GET A QUOTE</button>
                    </div>
                </div>
            </section>
            <section id = "our-service-section">
                <div class="service-content">
                    <p>Real Solution, Real Fast!</p>
                    <h1>Best Global Logistics Solution</h1>
                    <div class="different-service-container">
                        <div class="diferent-services">
                            <div class="air-cargo">
                                <img class="air-cargo-img" src={aircargo} />
                                <div class="air-cargo-text">
                                    <h2>Air Freight Service</h2>
                                    <p>At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.</p>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                                        <p>Read More</p>
                                    </button>
                                </div>
                            </div>
                            <div class="air-cargo">
                                <img class="air-cargo-img" src={aircargo} />
                                <div class="air-cargo-text">
                                    <h2>Air Freight Service</h2>
                                    <p>At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.</p>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                                        <p>Read More</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="transport-solution">
                        <p>Logistic & Transport Solution Saves Your Time. <span>Find your Solutions</span></p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#5f6368"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                    </div>
                    <div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
