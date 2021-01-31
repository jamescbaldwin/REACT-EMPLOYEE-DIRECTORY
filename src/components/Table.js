import React from "react";
import Data from "./Data";

function Table(props) {
    return (
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DoB</th>
                </tr>
            </thead>
            <tbody>
                <tr>

                </tr>
                {props.employees.map(employee => {
                    return <Data employee={employee} />
                })}
            </tbody>
        </table>
    )
}

export default Table;