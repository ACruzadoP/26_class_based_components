import React from "react"


//CLASS_BASED COMPONENT
//Something to keep in mind: Do not forget to use "this." when calling the prop. 
class PassingProps extends React.Component {

    render() {
        return (
            <div>
                <h3>{this.props.firstvariable}</h3>
                <h3>{this.props.secondvariable}</h3>
                <hr/>
            </div>
        )
    }
}

export default PassingProps