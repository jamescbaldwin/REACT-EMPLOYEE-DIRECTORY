import React from "react";
//jumbotron, navbar, searchbar
const headerStyle = {
    padding: "30px 0",
    color: "#ffffff",
    backgroundColor: "#101D42",
    width: "100%",
    textAlign: "center",
    borderBottom: "5px solid #DB162F",
    marginBottom: "10px"
}

function Header(props) {
 return (
//     <div className="bg-light">
//     <div className="text-center header mb-2">
//         <h1 className="display-4 mb-4">
//             Employee Directory
//         </h1>
//         <p className="lead mt-3 mb-1">
//             Click on the arrows to sort by last name. Up sorts alphabetically, down sorts reverse alphabetically.
//         </p>
//         <p className="lead"
//             >Use the search box to find employees by name.
//         </p>
//     </div>
//     <div className="input-group">
//         <div className="form-outline mb-2 w-15 mx-auto">
//             <input
//             value={props.search}
//             onChange={props.handleInputChange}
//             type="search"
//             className="form-control"
//             placeholder="Search"
//             id="employeeName"
//             />
           
//         </div>
//     </div>
// </div>
//     )

            <div className="header">
                <h1>Employee Directory</h1>
                <p>Click on carrot to filter by heading or use the search box to narrow your results</p>
            </div>
        )
    
}

export default Header;