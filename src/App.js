import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider/AuthProvider';
import CitizenDashBoard from './Pages/CitizenPages/CitizenDashBoard/CitizenDashBoard';
import CitizenSetProfile from './Pages/CitizenPages/CitizenSetProfile/CitizenSetProfile';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NavigationBar from './Pages/SharedComponents/NavigationBar/NavigationBar';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/setUserProfile">
            <CitizenSetProfile />
          </Route>
          <Route path="/dashboard">
            <CitizenDashBoard />
          </Route>

        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
