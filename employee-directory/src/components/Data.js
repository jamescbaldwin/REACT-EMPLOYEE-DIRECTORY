import React, { Component } from "react";

function Data(props) {
    return (
        <tr>
            <td>
                <img src= {props.employee.picture.thumbnail}></img>
            </td>
            <td>{props.employee.name.first + " " + props.employee.name.last}</td>
            <td>{props.employee.phone}</td>
            <td>{props.employee.email}</td>
            <td>{props.employee.dob.date}</td>
        </tr>
    )
}

export default Data;