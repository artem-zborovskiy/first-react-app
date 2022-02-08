import React from "react";
import './css/footer.css';
import {ReactComponent as FacebookIco} from './img/facebook_ico.svg';
import {ReactComponent as TwitterIco} from './img/twitter_ico.svg';
import {ReactComponent as InstagramIco} from './img/instagram_ico.svg';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <p className="info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                    Duis dapibus finibus magna quis tempor.
                </p>

                <nav>
                    <a href="#" className="ico_link"><FacebookIco className/></a>
                    <a href="#" className="ico_link"><TwitterIco/></a>
                    <a href="#" className="ico_link"><InstagramIco/></a>
                </nav>
            </footer>
        );
    }
}

export default Footer;