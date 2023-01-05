import React from "react";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

const Dashboard = () => {
    useRedirectLoggedOutUser("/login");
    
    return (
        <div>
           <h2>404 Not Found</h2>
        </div>
    );
};

export default Dashboard;