import React from "react";

export class Home extends React.Component{
    constructor(props) {
        super();
        this.state = {
            age: props.age,
            status: 0
        };
       
    }
    onMakeOlder() {
        this.setState({
            age: this.state.age +3 
        });
        
    }
    render() {
        return (
            <div>
                <p>In a new Component</p>
                {5+2 === 7 ? "yes" : "No"}
                <p>Your name is {this.props.name}, Your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <div>
                    <h3>Hobbies</h3>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}> {hobby} </li>)}
                    </ul>
                </div>
                <button onClick={ ()=> this.onMakeOlder()} >Make mo older</button>
                <button onClick={this.props.greet}>Greet</button>
                <input type="text" value={this.props.name} />
                <button onClick={this.props.greet}>Greet</button>
                
                
            </div>
        )
    }
    
}