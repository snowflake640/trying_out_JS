import React from "react";
import TodoItem from "./MyApp/TodoItem";
import ToItem from "./MyApp/ToItem";
import "./MyApp/todo.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos : TodoItem
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id) {
        //console.log("changed", id)
        
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo 
            })
            return {
                todos: updatedTodos}
            })
    }

    
    render() {
        const TodoComp = this.state.todos.map( (item) => <ToItem key = {item.id} todo = {item} handleClick = {this.handleClick}/>)
        return (
            <div className="todo-list">
                {TodoComp}
            </div>
        )
    }
    
}


// // conditional rendering 2

// class App extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             isLoggidIn: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick() {
//         console.log(this.state.isLoggidIn)
//         this.setState((prevState) => {
//             return {
//                 isLoggidIn : !prevState.isLoggidIn
//             }   

//             })
//     }

//     render(){
//         return(
//             <div>
//                 <h3> Hello user! </h3>
//                 {
//                     this.state.isLoggidIn ? 
//                     <p> you are logged in </p> :
//                     <p> you are logged out </p>
//                 }
//                 <button onClick={() => this.handleClick()} > Click! </button>
//             </div>
//         )
//     }

// }





// //Conditional rendering

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoading : true
//         }
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 isLoading : false
//             })
//         }, 1500 )
//     }

//     render() {
//         return(
//             <dev>
//                 <Conditionals isloading = {this.state.isLoading} />
//             </dev>
//         )
//     }
// }




// //counter

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count : 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         this.setState((prevState)=> {
//             return {
//                 count: prevState.count +1
//         }
//         })
//     }

//     render() {
//         return(
//             <div>
//                 <h1> {this.state.count} </h1>
//                 <button onClick={this.handleClick}> Change </button> 
//             </div>
//         )
//     }
// }




export default App



