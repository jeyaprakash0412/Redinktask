import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Content from './Component/Home/Content'

function App() {
  return (
     <div>
          <Router>
        <Switch>
           <Route exact path="/">
               <Content/>
                 </Route>
         
          </Switch>
  </Router>












    </div>
  );
}

export default App;
