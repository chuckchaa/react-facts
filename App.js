import React from "react";
import Main from "./components/Main";
import NavBar from "./components/Navbar";


export default function App() {
    return (
        <div className="container">
            <NavBar/>
            <Main />
        </div>
    );
}