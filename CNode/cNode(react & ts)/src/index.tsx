import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import * as moment from 'moment';
import 'moment/locale/zh-cn' 
moment.locale('zh-cn');
import Home from './pages/home/home';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={Home}/>
    </div>
  </Router>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
