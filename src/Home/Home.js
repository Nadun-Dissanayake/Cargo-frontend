import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import heroimage from '../Access/hero-img.png';
import stockchecking from '../Access/stock-checking.png';
import loading from '../Access/loading.png';
import aircargo from '../Access/air-cargo.png';
import logo01 from '../Access/logo01.png';

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
                    </div>
                </div>
            </section>
            <section id="state-section">
                <div class="state-bottom">
                    <p>890</p>
                    <div class="state-top">
                        <p class="number">890</p>
                        <p class="text">Delevered pacakees</p>
                    </div>
                </div>
                <div class="state-bottom">
                    <p>137</p>
                    <div class="state-top">
                        <p class="number">137</p>
                        <p class="text">Countries Covered</p>
                    </div>
                </div>
                <div class="state-bottom">
                    <p>740</p>
                    <div class="state-top">
                        <p class="number">740</p>
                        <p class="text">Tons of Goods</p>
                    </div>
                </div>
                <div class="state-bottom">
                    <p>600</p>
                    <div class="state-top">
                        <p class="number">600</p>
                        <p class="text">Statisfied Client</p>
                    </div>
                </div>
            </section>
            <section id="choose-us-section">
                <div class="trusted-client">
                    <h1>TRUSTED CLIENTS</h1>
                    <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                    <div class="message">
                        <p>Integer congue elit non semper laoreet sed lectus orci posuer nist tempor sefelis ao mauris. Pelentesque inyd urna. Integer vitao felis vel magna pesu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur loreet convallis nisal pellentesque bibendum.</p>
                    </div>
                    <div class="name">
                        <h1>JOHN DEO</h1>
                        <p>Managing Otector</p>
                    </div>
                </div>
                <div class="why-choose-us">
                    <h1>WHY CHOOSE US</h1>
                    <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                    <hr/>
                    <div class="feature">
                        <p class="point">Dui ac hendrerit elementum quam ipsum auctor lorem</p>
                        <p class="puls">+</p>
                    </div>
                    <hr/>
                    <div class="feature">
                        <p class="point">Mauris vel magna a est lobortis volutpat</p>
                        <p class="puls">+</p>
                    </div>
                    <hr/>
                    <div class="feature">
                        <p class="point">Sed bibendum ornare lorem mauris feugiat suspendisse neque</p>
                        <p class="puls">+</p>
                    </div>
                    <hr/>
                    <div class="feature">
                        <p class="point">Nulla scelerisque dul hendrerit elementum quam</p>
                        <p class="puls">+</p>
                    </div>
                </div>
            </section>
            <section id = "client-logo-section">
                <img src={logo01} alt="Background" />
                <img src={logo01} alt="Background" />
                <img src={logo01} alt="Background" />
                <img src={logo01} alt="Background" />
                <img src={logo01} alt="Background" />
            </section>
        </div>
    );
}

export default Home;
