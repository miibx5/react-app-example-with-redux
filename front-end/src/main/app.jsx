import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";
import "../resources/css/custom.css";

import React from "react";
import Menu from "../components/template/menu";
import Routes from "../components/routes/routes"

export default props => (
    <div className="container">
        <Menu />
        <Routes />
    </div>
);