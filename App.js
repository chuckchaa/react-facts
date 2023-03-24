import React from "react";
import Main from "./components/Main";
import NavBar from "./components/Navbar";


export default function App() {
    const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    return (
        <div className="container">
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    );
}