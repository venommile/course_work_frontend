import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Home, SQLite, PostgreSQL, H2, DBInfo, Oracle, MySQL} from "./pages/export";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Offer from "./pages/Offer";

function App() {
    return (
        <div className="App">
            <img src={require("./img/fon.jpg")} alt={"fonPhoto"} className={"fonImage"}/>
            <Header/>
            <Switch>
                <Route path="/home"><Home/></Route>
                <Route path="/postgresql"><PostgreSQL/></Route>
                <Route path="/sql-lite"><SQLite/></Route>
                <Route path="/mysql"> <MySQL/></Route>
                <Route path="/oracle"> <Oracle/></Route>
                <Route path="/h2"> <H2/></Route>
                <Route path="/db-info"><DBInfo/></Route>
                <Route path="/login"><Login/></Route>
                <Route path="/register"><Register/></Route>
                <Route path="/offer"><Offer/></Route>
                <Route path='/github' component={() => {
                    window.location.href = 'https://github.com/venommile'
                }}/>
                <Route path='/tg' component={() => {
                    window.location.href = 'https://t.me/mishagaltsev'
                }}/>
                <Route path='/vk' component={() => {
                    window.location.href = 'https://vk.com/mishagaltsev'
                }}/>
                <Route path='/gitlab' component={() => {
                window.location.href = 'https://gitlab.com/venommile'
            }}/>


                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
