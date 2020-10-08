import React from "react"
import PassingPWCBC from "./Child"

// FUNCTIONAL COMPONENT

function App() {
    return (
        <div>
            <PassingPWCBC
                firstvariable = "This is the first string of the first call"
                secondvariable = "This is the second string of the first call"
            />
            <PassingPWCBC
                firstvariable = "This is the first string of the second call"
                secondvariable = "This is the second string of the second call"
            />
        </div>
    )
}


//CLASS_BASED COMPONENTS (see example on Child.js)

// class App extends React.Component {

//     yourMethodHere() {
        
//     }

//     render() {
//         const style = this.yourMethodHere()
//         return (
//             <div>
                 
//             </div>
//         )
//     }
// }


export default App
