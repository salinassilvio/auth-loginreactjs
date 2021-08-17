import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import Home from "./components/Home";
import SigninPage from "./components/SigninPage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SigninPage}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/create" component={CreateUser} />
        </Switch>
   
      </div>
    </BrowserRouter>
  );
}

export default App;
