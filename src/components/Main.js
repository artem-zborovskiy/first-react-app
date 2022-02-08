import React from "react";
import './css/main.css';
import dualshockImg from './img/dualshock.png';

class Main extends React.Component {
    render() {
        return(
            <main>
                <div className="section_info">
                    <h1>PS4 V2 DualShock 4</h1>

                    <p className="info">
                        Wireless controller for PlayStation 4 <br/>
                        (compatibility centric)
                    </p>

                    <span className="price">$46.50</span>

                    <a href="#" className="buy_btn">BUY NOW</a>
                </div>

                <div className="section_img">
                    <img src={dualshockImg} alt="DualShock 4"></img>
                </div>
            </main>
        );
    }
}

export default Main;