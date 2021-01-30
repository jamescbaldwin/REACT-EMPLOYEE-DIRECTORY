import React, { Component } from "react";
import API from "../utils/API";
import Table from "./Table";

class Employees extends Component {
    state = {
        employees: []
    };

    componentDidMount() {
        API.getUsers()
        .then(res => this.setState({employees: res.data.results}))
        .catch(err => console.log(err))
    };

    render() {
        return (
            <Table employees = {this.state.employees} />
        )
    };
};

export default Employees;