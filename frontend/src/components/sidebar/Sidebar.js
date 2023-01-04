import React, { useState } from "react";
import "./Sidebar.css";
import { FcGlobe, FcMenu } from "react-icons/fc";
import menu from "../../data/sidebar";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };
    console.log("Side bar!")

    return (
        <div className = "layout">
            <div className = "sidebar" style = {{ width: isOpen ? "230px" : "60px" }}>
                  {/* <h2>Side Bar!</h2> */}
                  <div className = "top_section">
                      <div className = "logo" style = {{ display: isOpen ? "block" : "none" }}>
                          <FcGlobe size = {35} style = {{ cursor: "pointer", marginTop: '10px' }} onClick = {goHome}/>
                      </div>
                      <div className="bars" style = {{ marginLeft: isOpen ? "100px" : "0px" }}>
                          <FcMenu onClick = {toggle}/>
                      </div>
                  </div>
                  {menu.map((item, index) => {
                      return <SidebarItem key = {index} item = {item} isOpen = {isOpen} />;
                  })}
            </div>
            <main style = {{ paddingLeft: isOpen ? "230px" : "60px", transition: "all .5s"}}>
                {children}
            </main>
        </div>
    );
};

export default Sidebar;
