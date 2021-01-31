import React from "react";
import Header from "./Header";
import UserTable from "./Table";
import API from "../utils/API";
import FuzzySearch from "fuzzy-search";

class Data extends React.Component {
// function Data(props) { {
    state = {
        result: [],
        search: "",
        filtered: [],
        priors: [],
        sort: ""
    }

    componentDidMount() {
        API.getUsers()
        .then(res => {
            this.setState({ result: res.data.results });
            this.setState({ priors: res.data.results })
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {

        const searcher = new FuzzySearch(this.state.priors, ["name.first", "name.last"], {caseSensitive: false})
        const filtered = searcher.search(event.target.value);
        console.log("search results:", filtered)

        this.setState({ search: filtered });
        this.setState({ result: filtered })
    }

    handleAscension = event => {
        this.setState({ sort: "ascension" })
        console.log("Sorting via: ", this.state)
    }

    handleDescension = event => {
        this.setState({ sort: "descension" })
        console.log("Sorting via: ", this.state)
    }

    render() {
        return (
            <div>
                <Header handleInputChange={this.handleInputChange} />
                <UserTable 
                    handleAscension={this.handleAscension}
                    handleDescension={this.handleDescension}
                    sortState={this.state.sort}
                    userResults={this.state.result}
                />
            </div>
        )
    }
}
//     return (
//         <tr>
//             <td>
//                 <img src= {props.employee.picture.thumbnail}></img>
//             </td>
//             <td>
//                 {props.employee.name.first + " " + props.employee.name.last}
//             </td>
//             <td>
//                 {props.employee.phone}
//             </td>
//             <td>
//                 {props.employee.email}
//             </td>
//             <td>
//                 {props.employee.dob.date}
//             </td>
//         </tr>
//     )
// }

export default Data;