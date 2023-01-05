import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink.js";
import Map from "../map/Map";
import { useState } from "react";


const Home = () => {

    const [showNav, setShowNav] = useState(true);

    return (
        <div className="home">
            {showNav && 
                <nav className="container --flex-between ">
                <ul className="home-links">
                    <p className="title" >Taiwan <br/>Shashin<br/> Web</p>
                    <ShowOnLogout>
                        <li>
                            <Link to="/register" style={{color: "rgba(0, 0, 0, 0.5)"}}>Register</Link>
                        </li>
                    </ShowOnLogout>
                    <ShowOnLogout>
                        <li>
                            <button className="--btn" style={{backgroundColor:" rgba(255, 255, 255, 0.7)", boxShadow:"0.1rem 0.1rem 0.2rem lightgray"}}>
                                <Link to="/login"  style={{color: "rgba(0, 0, 0, 0.5)"}}>Login</Link>
                            </button>
                        </li>
                    </ShowOnLogout>
                    <ShowOnLogin>
                        <li>
                            <button className="--btn" style={{backgroundColor:" rgba(255, 255, 255, 0.7)", boxShadow:"0.1rem 0.1rem 0.2rem lightgray"}}>
                                <Link to="/dashboard" style={{color: "rgba(0, 0, 0, 0.5)"}}>Dashboard</Link>
                            </button>
                        </li>
                    </ShowOnLogin>
                </ul>
            </nav>}
            <Map setShowNav={setShowNav}/>
        </div>
    );
};

export default Home;