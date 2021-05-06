import './App.css';
import {useState} from "react";

function App() {

    const [name, setName] = useState("react state")

    return (
        <div>
            <h1>Hello {name} !</h1>
        </div>
    );
}

export default App;
