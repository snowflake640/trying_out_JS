import React from "react";

class AppForm extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName : "",
            age : "",
            gender: "",
            destination: "",
            No_Dairy : false,
            Less_Protein : false,
            Less_oil_and_salt : false,
            No_Junks: false
        }
    
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target

        type === "checkbox" ?
        this.setState({[name]: checked}) :
        this.setState({[name] : value})

    }

    render() {
        return(
            <main>
                <form>
                    {/* input for first name, last name and age */}
                    <input type="text"
                    value={this.state.firstName}
                    name = "firstName"
                    placeholder="First Name"
                    onChange = {this.handleChange} />
                    <br />
                    <input type="text"
                    value = {this.state.lastName}
                    name = "lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange} />
                    <br />
                    <input type= "number"
                    value = {this.state.age}
                    name = "age"
                    placeholder="Age"
                    onChange={this.handleChange} />
                    <br />
                    <h3> {this.state.firstName} {this.state.lastName} {this.state.age} </h3>
                    
                    {/* input for gender */}
                    <label>
                        <input type="radio"
                        value = "female"
                        name = "gender"
                        //checked = {this.state.gender === "female"}
                        onChange = {this.handleChange} /> Female
                    </label>
                    <label>
                        <input type="radio"
                        value = "male"
                        name = "gender"
                        //checked = {this.state.gender === "male"}
                        onChange = {this.handleChange} /> Male
                    </label>
                    <h3>{this.state.gender}</h3>

                    
                    {/* input for location */}
                    <label>
                        Your destination:
                    </label>
                    <select value={this.state.destination}
                    name = "destination"
                    onChange={this.handleChange} >
                        <option value= "Germany"> Germany </option>
                        <option value= "France"> France </option>
                        <option value= "Turkey"> Turkey </option>
                        <option value= "Nordics"> Nordics </option>
                    </select>
                    <h3> {this.state.destination} </h3>



                    {/* input for dietary restriction */}
                    <label> dietary restriction </ label>
                    <input type = "checkbox"
                    name = "No_Dairy"
                    onChange={this.handleChange}
                    checked = {this.state.No_Dairy} /> No Dairy

                    <input type = "checkbox"
                    name = "Less_Protein"
                    onChange={this.handleChange}
                    checked = {this.state.Less_Protein} /> Less Protein

                    <input type = "checkbox"
                    name = "Less_oil_and_salt"
                    onChange={this.handleChange}
                    checked = {this.state.Less_oil_and_salt} /> Less oil and salt

                    <input type = "checkbox"
                    name = "No_Junks"
                    onChange = {this.handleChange}
                    checked = {this.state.No_Junks} /> No Junks

                    
                    

                    <br />
                    <br />
                    <br />


                    <button> Submit </button>
                </form>
            </main>
        )
    }

}
export default AppForm