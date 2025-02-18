import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import ProductenLED from "./components/pages/ProductenLED";
import ProductenBALLON from "./components/pages/ProductenBALLON";
import ProductenBOOTH from "./components/pages/ProductenBOOTH";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader"; // Import PageLoader

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Navbar />
                <PageLoader>
                    <Routes>
                        <Route path="/" exact Component={Home} />
                        <Route path="/producten/led_verlichting" exact Component={ProductenLED} />
                        <Route path="/producten/ballondecoratie" exact Component={ProductenBALLON} />
                        <Route path="/producten/photobooth" exact Component={ProductenBOOTH} />
                    </Routes>
                </PageLoader>
            </Router>
        </div>
    );
}

export default App;
