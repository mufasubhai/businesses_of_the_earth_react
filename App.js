import React from "react";
import {Route, Switch, Redirect } from 'react-router-dom';
import Modal from "./components/modal/modal.jsx";
import { HashRouter } from 'react-router-dom';
import MainPageContainer from './components/main_page/main_page_container';
import HomePageContainer from './components/main_page/home_page_container';
import PostItemContainer from './components/posts/post_item_container';
import TeamPage from './components/team_page/team_page'
import './src/styles/app.css';
import './src/styles/appStyles.scss';

function App() {
  return (
    <div className="App">
              <Modal />

      <HashRouter>
        <Switch>
          <Route exact path='/' component={HomePageContainer} />
          <Route exact path='/team' component={TeamPage} />
          <Route exact path='/posts' component={MainPageContainer} />
          <Route exact path='/posts/:postId' component={PostItemContainer}/>
          <Route render={() => <Redirect to="/" />} />
        </Switch>

      </HashRouter>
   
    </div>
  );
}

export default App;
