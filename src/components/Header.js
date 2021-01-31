import React from "react";
import logo from '../logo.svg';

const imgStyle = {
    width: "90px",
    height: "90px"
  }

const headerStyle = {
    marginBottom: "5%",
    paddingBottom: "2%",
    paddingTop: "2%"
}

function Header(props) {
 return (
    <div className="bg-info text-white" style={headerStyle}>
    <div className="text-center header mb-2">
        <h1 className="display-4 mb-4">
            EMPLOYEE
        <img src={logo} className="App-logo" alt="logo" style={imgStyle} />
            DIRECTORY
        </h1>
        <p className="lead mt-3 mb-1">
        CLICK ON CARET(^) TO ALPHABETIZE EMPLOYEE NAMES OR ...
        </p>
        <p className="lead"
            >... USE THE SEARCH BOX TO FILTER YOUR RESULTS
        </p>
    </div>
    <div className="input-group">
        <div className="form-outline mb-2 w-15 mx-auto">
            <input
            value={props.search}
            onChange={props.handleInputChange}
            type="search"
            className="form-control"
            placeholder="Search"
            id="employeeName"
            />
           
        </div>
    </div>
    </div>

    )
}

export default Header;