import React from "react";
import './css/header.css';
import logo from './img/logo.svg';
import {ReactComponent as SearchIcon} from './img/search_ico.svg';
import {ReactComponent as OtherIcon} from './img/other_ico.svg';

class Header extends React.Component {
    render() {
        return(
            <header>
                <a href="#" className="logo">
                    <img src={logo} alt='logo'></img>
                    <span className="logo_text">PLAYSTATION</span>
                </a>

                <nav>
                    <a href="#" className="header_nav_link">GAME CONTROLLERS</a>
                    <a href="#" className="header_nav_link">VR ACCESSORIES</a>
                    <a href="#" className="header_nav_link">MEDIA REMOTES</a>
                    <a href="#" className="header_nav_link">OTHERS</a>
                </nav>

                <nav>
                    <a href="#" className="ico_link">
                        <SearchIcon/>
                    </a>

                    <a href="#" className="ico_link">
                        <OtherIcon/>
                    </a>
                </nav>
            </header>
        );
    }
}

export default Header;