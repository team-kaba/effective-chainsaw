import React from 'react';
import './App.css';
import './styles.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CreateReminder from './reminder/CreateReminder';
import Home from './Home';


class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home}></Route>
        <Route path='/create' component={CreateReminder}></Route>
      </Router>
    );
  }
}

export default App;
