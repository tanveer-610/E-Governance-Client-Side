import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider/AuthProvider';
import BirthCertificateApplication from './Pages/CitizenPages/BirthCertificateApplication/BirthCertificateApplication';
import CitizenDashBoard from './Pages/CitizenPages/CitizenDashBoard/CitizenDashBoard';
import CitizenSetProfile from './Pages/CitizenPages/CitizenSetProfile/CitizenSetProfile';
import NIDApplication from './Pages/CitizenPages/NIDApplication/NIDApplication';
import PassportApplication from './Pages/CitizenPages/PassportApplication/PassportApplication';
import UpdateProfile from './Pages/CitizenPages/UpdateProfile/UpdateProfile';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/SharedComponents/Footer/Footer';
import NavigationBar from './Pages/SharedComponents/NavigationBar/NavigationBar';
import AddUP from './Pages/UPPages/AddUP/AddUP';
import UPDashboard from './Pages/UPPages/UPDashboard/UPDashboard';


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
          <Route path="/birthCertificateApply">
            <BirthCertificateApplication />
          </Route>
          <Route path="/NIDApply">
            <NIDApplication />
          </Route>
          <Route path="/passportApply">
            <PassportApplication />
          </Route>
          <Route path="/updateProfile">
            <UpdateProfile />
          </Route>

          <Route path="/upDashboard">
            <UPDashboard />
          </Route>
          <Route path="/addUP">
            <AddUP />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
