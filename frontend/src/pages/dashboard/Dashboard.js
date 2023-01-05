import React from "react";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

const Dashboard = () => {
    useRedirectLoggedOutUser("/login");
    
    return (
        <div style={{margin:"20px 0px 0px 0px"}}>
            <h3>About...</h3>
            <h4>This is webiste for people to upload their photo.</h4>
        </div>
    );
};

export default Dashboard;