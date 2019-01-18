import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './containers/home/index';
import SettingPage from './containers/setting/index';
import WritingPage from './containers/writing/index';
import CataloguePage from './containers/catalogue/index';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={"/"} exact component={HomePage}/>
        <Route path={"/:year/:month?"} component={CataloguePage}/>
        <Route path={"/:year/:month/:day"} component={WritingPage}/>
        <Route path={"/setting"} component={SettingPage}/>
      </Switch>
    );
  }
}

export default App;
