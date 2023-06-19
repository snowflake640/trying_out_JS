import React from "react"

const Conditionals = (Props) => {
    if (Props.isloading === true){
        console.log(Props.isloading)
        return(
            <h1> Loading </h1>
        )
    }
    else {
    return(
        <h1> bla bla </h1>
    ) }

}

export default Conditionals