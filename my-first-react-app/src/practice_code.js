import React from 'react';
import { render } from 'react-dom';
import { Header } from "./Header";
import { Home } from "./Home";


class App extends React.Component {
    render() {
        const user = {
            name: "Ahmed Raza" ,
            age: 18,
            hobbies: ["Reding Quran","Work in Bazmeahlesunnat","Working as a developer"]
        };
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <Home user={user} name={user.name} age={user.age} greet={(greet) => {alert("Hellow")}} />
                </div>
            </div>

        );
    }
}

render(<App />, document.getElementById('root'));