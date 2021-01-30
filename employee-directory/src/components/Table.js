import React from "react";
import Data from "./Data";

function Table(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DoB</th>
                </tr>
                {props.employees.map(employee => {
                    return <Data employee={employee} />
                })}
            </tbody>
        </table>
    )
}

export default Table;