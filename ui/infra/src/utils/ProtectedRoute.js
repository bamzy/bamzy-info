import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";

import { checkLoggedIn } from "./authUtil";

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const checkUserToken = () => {      
      const token = checkLoggedIn();
      if(token === false){
          setIsLoggedIn(false);
          return navigate('/login');
      }
      console.log("from protected route check passed: " +token )
      setIsLoggedIn(true);
    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return (
        <React.Fragment>
            {isLoggedIn ? props.children : null}
        </React.Fragment>
    );
}

export default ProtectedRoute;