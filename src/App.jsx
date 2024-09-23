// App.js
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer></Footer>
        </>
    );
};

export default App;
