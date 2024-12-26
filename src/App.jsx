// App.js
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Blog from './pages/Blog';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ImprovedProjectCard from './components/ImprovedProjectCard';

const App = () => {
    return (
        <>
            <Navbar />
            <Home></Home>
            <Skills></Skills>
            {/* <Projects></Projects> */}
            <ImprovedProjectCard></ImprovedProjectCard>
            <Footer></Footer>
        </>
    );
};

export default App;
