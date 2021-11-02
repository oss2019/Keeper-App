import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Add from './Add';
import Login from './Login';
import NavBar from "./NavBar";
import Routes from '../routes/index';
import "./app.css";

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("/")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);


    return (
        <div className="app">
            <NavBar/>
            <Header />
            <Router>
                <Routes/>
            </Router>
            <Footer />
        </div>
    );

}

export default App;
