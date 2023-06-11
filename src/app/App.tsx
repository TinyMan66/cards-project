import React from "react";
import "app/App.css";
import {Header} from "app/header/Header";
import {Pages} from "app/pages/Pages";

function App() {
    return (
        <div className="App">
            <Header/>
            <Pages />
        </div>
    );
}

export default App;
