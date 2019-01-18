import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './containers/home/index';
import SettingPage from './containers/setting/index';
import WritingPage from './containers/writing/index';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={"/"} exact component={HomePage}/>
        <Route path={"/setting"} component={SettingPage}/>
        <Route path={"/writing"} component={WritingPage}/>
      </Switch>
    );
  }
}

export default App;
