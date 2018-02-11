import * as React from 'react';
import './home.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Components
import Header from './../../Components/Header/Header'; 
import MainContentList from './MainContentList/MainContentList';
import ContentDetail from './/contentDetail/contentDetail';

class App extends React.Component<any, any> {
  render() {  
    return (
      <div className="App">
        <Header />
        <Router>
          <div className="home-wrap">
            <div className="home-inner">
              <Route exact path="/" component={MainContentList}/>
              <Route exact path="/list/:tab?/:page?" component={MainContentList}/>
              <Route exact path="/content_detail/:id" component={ContentDetail}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
