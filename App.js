import React from "react";
import {Route, Switch, Redirect } from 'react-router-dom';
import Modal from "./components/modal/modal.jsx"
import { HashRouter } from 'react-router-dom';
import MainPageContainer from './components/main_page/main_page_container'
import PostItem from './components/posts/post_item.jsx'
import './src/styles/app.css';
import './src/styles/appStyles.scss'

function App() {
  return (
    <div className="App">
              <Modal />

      <HashRouter>
        <Switch>
          <Route exact path='/' component={MainPageContainer} />
          <Route exact path='/posts/:postId' component={PostItem}/>
          <Route render={() => <Redirect to="/" />} />
        </Switch>

      </HashRouter>
   
    </div>
  );
}

export default App;
