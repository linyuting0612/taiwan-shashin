import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink.js";
import Map from "../map/Map";

import axios from 'axios';
const axs = axios.create({
  baseURL: `http://localhost:4096/api`,
});

const Home = () => {
    console.log("Home Page!")
    const checkLogin = async () => {
        const data = await axs.get("/users/loggedin");
        console.log(data);
    };
    return (
        <div className="home">
            <nav className="container --flex-between ">

                <ul className="home-links">
                    <p className="title" >Taiwan <br/>Shashin<br/> Web</p>
                    <ShowOnLogout>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ShowOnLogout>
                    <ShowOnLogout>
                        <li>
                            <button className="--btn --btn-primary">
                                <Link to="/login">Login</Link>
                            </button>
                        </li>
                    </ShowOnLogout>
                    <ShowOnLogin>
                        <li>
                            <button className="--btn --btn-primary" onClick = {checkLogin}>
                                <Link to="/dashboard">Dashboard</Link>
                            </button>
                        </li>
                    </ShowOnLogin>
                </ul>
            </nav>
            <Map/>
        </div>
    );
};

export default Home;
