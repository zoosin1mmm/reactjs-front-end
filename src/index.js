import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createHashHistory} from 'history';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { App , Login, Content} from './App';

// browserHistory
ReactDOM.render((
	<App>
	    <Router history={createHashHistory}>
	     <Switch>
		     <Route exact path="/" component={Login} />
		     <Route path="/content" component={Content} />
	     </Switch>
	   </Router>
   </App>
), document.getElementById('root'));
registerServiceWorker();
