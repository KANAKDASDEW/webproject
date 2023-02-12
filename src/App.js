import "./App.css";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Navar from "./Navar";
import Header from "./Header";
import Mainpart from "./slider";
import Service from "./service";
import Signup from "./Signup";
import Reset from "./Reset";
import Login from "./Login";
import TablePart from "./Table";
import Footer1 from "./Footer1";
import Footer from "./Footer1/footer";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Navar />
                        <Header />
                        <Mainpart />
                        <Service />

                        <Footer1 />
                    </Route>
                    <Route exact path="/home">
                        <Navar />
                        <Header />
                        <Signup />
                        <Footer />
                    </Route>
                    <Route exact path="/reset">
                        <Navar />
                        <Header />
                        <Reset />
                        <Footer />
                    </Route>
                    <Route exact path="/login">
                        <Navar />
                        <Header />
                        <Login />
                        <Footer />
                    </Route>
                    <Route exact path="/table">
                        <Navar />
                        <Header />
                        <TablePart />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
