import './App.css';
import Home from './Pages/Home';
import Error from './Pages/Error';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Connect from './Pages/Connect';
import Classes from './Pages/Classes';
import Schedule from './Pages/Schedule';
import Instructors from './Pages/Instructors';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <div>

                  <Switch>
                      <Route path="/" component={Home} exact />
                      <Route path="/Home" component={Home} />
                      <Route path="/About" component={About} />
                      <Route path="/Contact" component={Contact} />
                      <Route path="/Connect" component={Connect} />
                      <Route path="/Classes" component={Classes} />
                      <Route path="/Schedule" component={Schedule} />
                      <Route path="/Instructors" component={Instructors} />
                    

                      <Route component={Error} />
                  </Switch>
              </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
