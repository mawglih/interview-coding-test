import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
const route = () => {
  return (
    <Switch>
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/about' component={About} />
      <Route exact path='/' component={Home} />
    </Switch>
  )
}
export default route;
