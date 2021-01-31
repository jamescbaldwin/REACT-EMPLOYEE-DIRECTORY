import React from "react";
import Header from "./Header";
import UserTable from "./Table";
import API from "../utils/API";
import FuzzySearch from "fuzzy-search";

class Data extends React.Component {

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

export default Data;