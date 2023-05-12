
import Contacts from './components/contact/Contacts'
import Navbar from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './components/Context';
import AddContact from './components/contact/AddContact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import pageNotFound from './components/pages/pageNotFound';
import EditContact from './components/contact/EditContact';

function App() {

  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar title="Contacts list" />
          {/* ancien version Switch  maintenant Routes */}
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/add" component={AddContact} />
            <Route exact path="/about/:id/:name" component={About} />
            <Route exact path="/edit/:id" component={EditContact} />

            <Route component={pageNotFound} />



          </Switch>
          {/* <AddContact />
          <Contacts /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
