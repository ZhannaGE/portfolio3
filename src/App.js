import "./App.css"
import Home from "./component /Home";
import About from "./component /About ";
import Contact from "./component /Contact ";
import Portfolio from "./component /Portfolio";
import Aside from "./component /Aside";
import SetColor from "./component /SetColor";
import Blog from "./component /Blog";

function App() {
    return (
        <div>
            <SetColor/>
            <Home/>
            <Aside/>
            <About/>
            <Contact/>
            <Portfolio/>
            <Blog/>
        </div>
    );
}

export default App;
