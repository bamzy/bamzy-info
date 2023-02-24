import React from 'react';
import './BasicNavbar.css';
class BasicNavbar extends React.Component{
    render =  ()=>{
        return(<nav className="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top="0">
            <div className="container">
                <a className="navbar-brand" href="#"><img src="assets/imgs/logo2.svg" alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto align-items-center">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#interests">Interests</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#work">Work</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#readings">Readings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#research">Research</a>
                        </li>
                        <li className="nav-item">
                            <a className="- btn btn-primary rounded ml-4" href="codepen.html">PlayGround</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
    }
}
// function Navbar(){
//     return (<div>sanity check navbar</div>)
// }
export default BasicNavbar;