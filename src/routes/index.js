import React from "react";
import { Route } from 'react-router-dom';
import Home from "../pages/Home";
import Authenticated from "../pages/Auth";

const routes = () => {

    // const auth = localStorage.getItem("isAuth")
    return (
        <>

            {/* {auth === "true" ? <></> : <></>} */}
            <Route component={Home} path="/" exact />
            <Route component={Authenticated} path="/welcome" exact />

        </>
    )
}

export default routes