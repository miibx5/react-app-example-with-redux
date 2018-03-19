import React from "react";

export default props => (
    <div className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <div className="navbar-brand" href="#">
                    <i className="fa fa-calendar-check-o"></i>React App Example
                </div>
            </div>

            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href="#/allTasks">Tarefas</a></li>
                    <li><a href="#/about">Sobre</a></li>
                </ul>

            </div>
        </div>

    </div>
);