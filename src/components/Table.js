import React from "react";
const caretUp = require("./caretUp.png");
const caretDown = require("./caretDown.png");

const caretStyle = {
    width: "30px",
    height: "20px",
    backgroundColor: "white",
    border: "none"

}

const verticalAlignment = { 
    verticalAlign: "middle"
}

function UserTable(props) {
    
    if (props.sortState === "ascension") {
        props.userResults.sort(function(a,b) {
            var x = a.name.last.toLowerCase();
            var y = b.name.last.toLowerCase();
            if (x < y) {return -1}
            if (x > y) {return 1}
            return 0;
        })
    } if (props.sortState === "descension") {
        props.userResults.sort(function(a,b) { 
            var x = a.name.last.toLowerCase();
            var y = b.name.last.toLowerCase();
            if (x > y) {return -1}
            if (x < y) {return 1}
            return 0;
        })
    }

    return (
        <table class="table table-striped text-center">
            <thead>
                <tr>
                    <th scope="col">IMAGE</th>
                    <th scope="col" style={verticalAlignment}>
                        NAME
                        <input style={caretStyle} type="image" src={caretUp.default} alt="ascension" className="btn btn-light btn-sm caret" onClick={props.handleAscension}></input>
                        <input style={caretStyle} type="image" src={caretDown.default} alt="descension" className="btn btn-light btn-sm caret" onClick={props.handleDescension}></input>
                    </th>
                    <th scope="col">PHONE</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">DATE OF BIRTH</th>
                </tr>
            </thead>
            <tbody>
                {props.userResults.map(result => (
                    <tr key = {result.login.md5}>
                        <td><img className="employeeImg" alt="employeeImg" src={result.picture.large} /></td>
                        <td style={verticalAlignment}>{result.name.first} {result.name.last}</td>
                        <td style={verticalAlignment}>{result.phone}</td>
                        <td style={verticalAlignment}>{result.email}</td>
                        <td style={verticalAlignment}>{result.dob.date.slice(0,10)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable;