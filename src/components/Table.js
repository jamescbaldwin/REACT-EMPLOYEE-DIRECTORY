import React from "react";
// import Table from "react-bootstrap/Table"


function UserTable(props) {
    console.log(props.sortState);
    
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
            if (x < y) {return -1}
            if (x > y) {return 1}
            return 0;
        })
    }

    return (
        <table class="table table-striped text-center">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">
                        Name
                        <input type="image" alt="ascension" className="btn btn-light btn-sm caret" onClick={props.handleAscension}></input>
                        <input type="image" alt="descension" className="btn btn-light btn-sm caret" onClick={props.handleDescension}></input>
                    </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DoB</th>
                </tr>
            </thead>
            <tbody>
                {props.userResults.map(result => (
                    <tr key = {result.login.md5}>
                        <td><img className="employeeImg" alt="employeeImg" src={result.picture.large} /></td>
                        <td>{result.name.first} {result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{result.dob.date.slice(0,10)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable;